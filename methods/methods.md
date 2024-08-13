#### ---------------- 이파일은 그냥 여러가지 메서드들을 적는 페이지입니다. ----------------

### 배열 메소드

[MDN Array 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)

- **Array.prototype.map()** : map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 새로운 배열로 만들어주는 메서드입니다.

  ### 구문

  ```javascript
  arr.map(callback(ccurrentValue,[, index[,array]])[, thisArg])
  ```

  `callback`함수는 호출될 때 대상 요소의 값, 그 요소의 인덱스, 그리고 `map`을 호출한 원본 배열 3개의 인수를 전달받습니다.

  ### 예제

  - 배열의 모든 요소 제곱하기

  ```javascript
  const numbers = [2, 4, 6];

  const sqrNumber = numbers.map((item) => item * item);

  console.log(sqrNumber); // [4, 16, 36]
  ```

  - map()메서드는 콜백 함수를 호출하므로 여기서 콜백 함수의 인수인 item의 배열의 요소은 2,4,6을 가르키게 되므로 타입은 number다!

  - 객체일 경우

  ```javascript
  const array = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];

  const newArray = array.map((item) => ({
    key: item.key + 2,
    value: item.value * 5,
  }));

  console.log(newArray); /* [
      {key: 3, value: 50},
      {key: 4, value: 100},
      {key: 5, value: 150},
  ]*/
  ```

  [map() 공식문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

- **Array.prototype.find()**: find()메서드는 제공된 배열에서 그 함수를 만족하는 `첫번째 요소`만 반환합니다. 만족하는 값이 없을 경우에는 `undefiend`로 반환됩니다.

  ### 구문

  ```javascript
  find(callbackFn);
  find(callbackFn, thisArg);
  ```

  `callback`함수는 배열의 각 요소를 실행하면서 만족하는 값이 있으면 `true`를 반환하고 그렇진 않으면 `false`를 반환합니다.

  ### 예제

  ```javascript
  const array = [2, 8, 9, 22, 10, 11];

  const findNum = array.find((item) => item > 5);

  console.log(findNum); // 8
  ```

  - 객체 일 경우

  ```javascript
  const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  const result = inventory.find((item) => {
    return item.quantity > 1;
  });

  console.log(result); /* 
  { name: "apples", quantity: 2 }
  */
  ```

  [find() 공식문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
