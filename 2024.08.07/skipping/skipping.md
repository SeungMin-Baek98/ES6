# **Skipping**

## 말 그대로 skip(건너뛰다)을 하는것을 뜻하며 자바스크립트에서의 skipping은 특정 요소를 건너뛰는 작업을 의미한다. 종종 배열 구조 분해 할당에서 특정 요소를 건너뛸 때 사용된다.

### 예제

### ① `쉼표(,)`를 사용하여 건너뛸 요소를 지정

```javascript
const array = [10, 20, 30, 40, 50];

const [first, , third, , fifth] = array;

console.log(first); // 10
console.log(third); // 30
console.log(fifth); // 50
```

### ② `rest` 문법을 사용

```javascript
const array = [1, 2, 3, 4, 5, 6];

const [, , ...rest] = array;

console.log(rest); // [3, 4, 5, 6]
```

### ③

```javascript
const days = ["mon", "tue", "wed", "thur", "fri"];

const [, , , thur, fri] = days;

console.log(thur, fri); // thur fri

// -----------or-----------

const [, , , ...rest] = days;

console.log(rest); // thur fri
```

#### 결론 : 배열에서 필요한 요소만 추출하고 나머지는 무시하고 싶을 때 유용하게 사용할 수 있다. 배열의 특정 위치의 요소를 무시할 수 있는 유연성을 제공하여 코드를 보다 깔끔하고 명확하게 작성 할 것 같다.
