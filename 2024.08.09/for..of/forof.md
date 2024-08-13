# For ... of (반복문)

### `For ... of` 문법은 자바스크립트에서 `iterable object`(배열, 문자열 ...)를 순회하는 데 사용되는 반복문입니다. `for ... of `는 iterable object의 각 요소에 대해 한 번씩 실행되며, 요소를 직접 참조할 수 있습니다.

##### `iterable` <-- 반복이 가능한 요소들을 말한다.

### 1. 기본 문법

```javascript
for (const element of iterable) {
  // element를 사용하여 코드 실행
}
```

### 2. 배열 순회

#### 2-1 우선 배열을 `for` 루프, `forEach`, 그리고 `for...of`를 사용하여 순회하는 예제를 보여드리겠습니다.

```javascript
const friends = [
  "승민",
  "경모",
  "지성",
  "재원",
  "호경",
  "수환",
  "수관",
  "헌우",
];

// 전통적인 for 루프
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]); // 승민, 경모, 지성, 재원, 호경, 수환, 수관, 헌우
}

// forEach 메서드 사용
friends.forEach((friend) => console.log(friend)); // 승민, 경모, 지성, 재원, 호경, 수환, 수관, 헌우

// for...of 루프
for (const friend of friends) {
  console.log(friend); // 승민, 경모, 지성, 재원, 호경, 수환, 수관, 헌우
}
```

#### 2-2 문자열 순회를 `for...of` 를 사용하여 보여드리곘습니다.

```javascript
const word = "Hello World!!";

for (const letter of word) {
  console.log(letter); // H, e, l, l, o, , W, o, r, l, d, !, !
}

// ---------------- or ----------------

for (let i = 0; i < word.length; i++) {
  console.log(word[i]); // H, e, l, l, o, , W, o, r, l, d, !, !
}
```

### 3. forEach vs for...of

- forEach메서드는 배열에서만 가능하지만 for...of 문법은 배열에서만 동작하는 것이 아닌 iterable한 모든 것에서 동작합니다.
- for...of는 배열에서 특정 값을 만날 때 반복을 중지하라는 신호를 줄때 유용합니다.

  ```javascript
  const friends = [
    "승민",
    "경모",
    "지성",
    "재원",
    "호경",
    "수환",
    "수관",
    "헌우",
  ];

  for (const friend of friends) {
    if (friend === "호경") {
      break;
    } else {
      console.log(friend); //승민, 경모, 지성, 재원
    }
  }

  for (let i = 0; i < friends.length; i++) {
    if (friends[i] === "호경") {
      break;
    } else {
      console.log(friends[i]);
    }
  }

  //forEach로는 break를 사용할 수 없기때문에 부적절한 사용이다.
  // ->forEach는 모든 요소를 순회하도록 설계되어 있기 때문에, 반복 중에 루프를 중단하거나 특정 조건에서 건너뛰는 기능이 없다!!
  ```

[MDN 공식 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of)
