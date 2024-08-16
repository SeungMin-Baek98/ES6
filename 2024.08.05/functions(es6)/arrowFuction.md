## 자바스크립트 함수 선언 방식 및 화살표 함수

우선, `Arrow Function`을 설명하기에 앞서 ES6 이전의 함수 선언식을 알아보겠습니다.

## ES6 이전의 함수 표현 방식

### 1. 함수 선언(Function Declaration)

`function` 키워드를 사용하여 함수를 정의하는 방법입니다. 이러한 방식으로 정의된 함수는 호이스팅이 적용되어, 함수가 정의되기 전에 호출할 수 있습니다.

예제:

```javascript
function minus(a, b) {
  return a - b;
}
console.log(minus(10, 2)); // 8
```

## 2. 함수 표현식(Function Expression)

### 변수에 함수를 할당하는 방식으로 정의됩니다. 함수 선언 방식과 달리 호이스팅이 되지 않아, 함수가 정의된 이후에만 사용할 수 있습니다.

## 2.1 익명 함수 표현식

# 예제:

```javascript
const add = function (a, b) {
  return a + b;
};
console.log(add(10, 3)); // 13
```

## 2.2 명명된 함수 표현식

### 예제:

```javascript
const mul = function(a, b) {
return a \* b;
}
console.log(mul(2, 3)); // 6
```

## 화살표 함수 (Arrow Function)

ES6에서 도입된 화살표 함수는 함수 표현식을 더 간결하게 작성할 수 있는 방법입니다.

```javascript
const add = (a, b) => {
  return a + b;
};
console.log(add(3, 1)); // 4
```

### `화살표 함수`와 `일반 함수`의 차이점 :

화살표 함수와 일반 함수는 몇 가지 차이점이 있습니다. 특히 중요한 차이점은 this 키워드의 동작 방식입니다.

`this` 키워드: `화살표 함수`는 `this`를 자신의 문맥에서 바인딩하지 않고, 화살표 함수가 정의된 `외부 스코프의 this`를 상속받습니다. 반면, `일반 함수`는 호출될 때 `this`가 결정됩니다.

예시

```javascript
const obj = {
  name: "승민",
  regularFunction: function () {
    console.log(this.name);
  },
  arrowFunction: () => {
    console.log(this.name);
  },
};

obj.regularFunction(); // 출력: "승민"
obj.arrowFunction(); // 출력: undefined (또는 전역 객체의 name 속성 값)
```

- 위 예제에서 `regularFunction`은 `obj의 this`를 참조하지만, `arrowFunction`은 `this를 자신이 정의된 문맥(전역 객체)`에서 상속받기 때문에 `name이 출력되지 않습니다.`

### 3. **화살표 함수의 단점**

화살표 함수는 매우 간결하고 편리하지만, 모든 상황에서 사용하기 적합한 것은 아닙니다.

- **`this` 키워드**: 위에서 설명한 것처럼, 화살표 함수는 `this`를 바인딩하지 않으므로, 메서드로 사용하기엔 적합하지 않습니다.
- **`arguments` 객체**: 화살표 함수는 `arguments` 객체를 가지지 않습니다. 만약 함수 내부에서 `arguments` 객체가 필요하다면, 화살표 함수 대신 일반 함수를 사용해야 합니다.
- **명명된 함수**: 화살표 함수는 익명 함수로 정의되기 때문에, 디버깅 시 스택 트레이스에서 함수 이름이 표시되지 않을 수 있습니다.

#### 실용적인 예시

화살표 함수는 콜백 함수가 필요한 곳에서 자주 사용됩니다. 예를 들어, `setTimeout`에서 화살표 함수를 사용하면 `this`의 문맥을 유지할 수 있습니다.

```javascript
function Timer() {
  this.seconds = 0;

  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}

const myTimer = new Timer();
// 매 초마다 this.seconds 값이 증가하여 출력됩니다.
```

## 예시

`names` 배열의 각 요소 뒤에 ❤️를 붙이는 예제를 ES5와 ES6 방식으로 비교해보겠습니다.

## ES5 방식

방법 1: 함수 선언

```javascript
const names = ["승민", "경모", "지성", "호경"];

function addHeart(item) {
  return item + "❤️";
}
const newNames = names.map(addHeart);

console.log(names); // ["승민", "경모", "지성", "호경"]
console.log(newNames); // ["승민❤️", "경모❤️", "지성❤️", "호경❤️"]
```

방법 2: 함수 표현식

```javascript
const names = ["승민", "경모", "지성", "호경"];

const addHeart = function (item) {
  return item + "❤️";
};
const newNames = names.map(addHeart);

console.log(names); // ["승민", "경모", "지성", "호경"]
console.log(newNames); // ["승민❤️", "경모❤️", "지성❤️", "호경❤️"]
```

## ES6 방식

방법 3: 화살표 함수

```javascript
const names = ["승민", "경모", "지성", "호경"];

const newNames = names.map((item) => item + "❤️");

console.log(names); // ["승민", "경모", "지성", "호경"]
console.log(newNames); // ["승민❤️", "경모❤️", "지성❤️", "호경❤️"]
```

방법 4: 익명 함수 표현식

```javascript
const names = ["승민", "경모", "지성", "호경"];

const newNames = names.map(function (item) {
  return item + "❤️";
});

console.log(names); // ["승민", "경모", "지성", "호경"]
console.log(newNames); // ["승민❤️", "경모❤️", "지성❤️", "호경❤️"]
```
