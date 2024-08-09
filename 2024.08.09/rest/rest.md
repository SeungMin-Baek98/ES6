# Rest Parameters

### parameters(매개변수) : 우리가 함수에게 전달하는 `argument`(인자)들을 뜻합니다

### 즉 `rest parameters` 는 함수의 인자로 전달된 여러 개의 값을 하나의 배열로 묶어서 `함수 내부`에서 사용할 수 있게 해주는 문법입니다.

```javascript
const manyArgs = (...item) => {
  console.log(item);
};

manyArgs(1, 2, 3, "배열로 생성"); // [1, 2, 3, "배열로 생성"]
```

#### 예제

- ①

  ```javascript
  const myFriends = (myname, firstOne, ...item) => {
    console.log(myname); // 승민
    console.log(`my best friends is ${firstOne}`); // my best friends is 경수
    console.log(...item); // 도현 도건 재찬 승한
  };
  myFriends("승민", "경수", "도현", "도건", "재찬", "승한");
  ```

- ②

  ```javascript
  function myFunction(a, b, ...others) {
    console.log(a); // 1
    console.log(b); // 2
    console.log(others); // [3, 4, 5]
  }

  myFunction(1, 2, 3, 4, 5);
  ```

## 요약

- `Rest parameters`는 함수 인자로 전달된 여러 개의 값을 `새로운 배열`로 생성하는 방법입니다.
- 인자의 마지막 위치에 `...`을 사용하여 정의됩니다.
