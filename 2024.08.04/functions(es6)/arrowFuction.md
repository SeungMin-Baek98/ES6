# 자바스크립트 함수 선언 방식 및 화살표 함수

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

# 변수에 함수를 할당하는 방식으로 정의됩니다. 함수 선언 방식과 달리 호이스팅이 되지 않아, 함수가 정의된 이후에만 사용할 수 있습니다.

## 2.1. 익명 함수 표현식

# 예제:

```javascript
const add = function (a, b) {
  return a + b;
};
console.log(add(10, 3)); // 13
```

## 2.2. 명명된 함수 표현식

# 예제:

```javascript
const mul = function(a, b) {
return a \* b;
}
console.log(mul(2, 3)); // 6
```

# ❊ 익명 함수는 map(), filter(), forEach() 메소드에서 자주 쓰입니다.

### 화살표 함수 (Arrow Function)

## 이러한 함수 표현식을 좀 더 간결하게 사용할 수 있는 방법이 ES6에서 나온 화살표 함수(Arrow Function)입니다.

# 예제:

```javascript
const add = (a, b) => {
  return a + b;
};
console.log(add(3, 1)); // 4
```

# 예시: 화살표 함수를 사용하여 배열 요소 변환

# `names` 배열의 각 요소 뒤에 ❤️를 붙이는 예제를 ES5와 ES6 방식으로 비교해보겠습니다.

## ES5 방식

# 방법 1: 함수 선언

```javascript
const names = ["승민", "경모", "지성", "호경"];

function addHeart(item) {
  return item + "❤️";
}
const newNames = names.map(addHeart);

console.log(names); // ["승민", "경모", "지성", "호경"]
console.log(newNames); // ["승민❤️", "경모❤️", "지성❤️", "호경❤️"]
```

# 방법 2: 함수 표현식

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

# 방법 3: 화살표 함수

```javascript
const names = ["승민", "경모", "지성", "호경"];

const newNames = names.map((item) => item + "❤️");

console.log(names); // ["승민", "경모", "지성", "호경"]
console.log(newNames); // ["승민❤️", "경모❤️", "지성❤️", "호경❤️"]
```

# 방법 4: 익명 함수 표현식

```javascript
const names = ["승민", "경모", "지성", "호경"];

const newNames = names.map(function (item) {
  return item + "❤️";
});

console.log(names); // ["승민", "경모", "지성", "호경"]
console.log(newNames); // ["승민❤️", "경모❤️", "지성❤️", "호경❤️"]
```

## 결론

# 화살표 함수를 사용하면 코드의 가독성이 크게 증가합니다.

# 눈으로만 봐도 Arrow Function을 사용한 뒤로 코드의 가독성이 증가한 것을 느낄 수 있습니다
