# **Swapping**

## 말 그대로 swap(바꾸다)을 하는것을 뜻하며 자바스크립트에서의 swapping은 두 변수의 값을 서로 교환하는 작업을 말합니다.

### 예제

#### ①temp 변수를 사용

```javascript
// 1과 4를 서로 바꾸어보겠습니다.
const arr = [1, 2, 3, 4, 5];

console.log(`swapping 하기전 : ${arr}`); // swapping 하기전 : 1,2,3,4,5;

let temp = arr[0];
arr[0] = arr[3];
arr[3] = temp;

console.log(`swapping 한 후:${arr}`); // swapping 한 후 :4,1,2,3,5;
```

#### ②구조 분해 할당 사용(ES6)

```javascript
let mon = "sat";
let sat = "mon";

console.log(`mon is ${mon}, sat is ${sat}`); // mon is sat, sat is mon

[mon, sat] = [sat, mon];

console.log(`mon is ${mon}, sat is ${sat}`); // mon is mon, sat is sat
```

#### 결론 : `temp`변수를 사용하여 swap하는 방식만 알았는데, 이번에 강의를 접하면서 `구조 분해 할당`을 처음 배웠는데 저런 방식으로 하는게 배열에서 특정 요소를 바꿀 때 편한 것 같다!

[MDN출처](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
