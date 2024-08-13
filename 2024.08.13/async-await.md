# **Async/Await**

### `Async`와 `Await`는 자바스크립트에서 비동기 작업을 보다 직관적이고 간결하게 처리할 수 있도록 도와주는 문법입니다. `Promise`를 기반으로 하며, 비동기 코드를 마치 동기 코드처럼 작성할 수 있게 해줍니다. 이를 통해 `코드 가독성`을 크게 향상시킬 수 있습니다.

## 사용법

```javascript
const asyncExample = async() => {
  ...
}

// ---------- or ----------

async function asyncExample(){
 ...
}
```

## 1. **Async** 는 함수 선언 앞에 붙여서 그 함수를 비동기 함수로 만듭니다.

### 1-1. `Async` 함수는 항상 `Promise`를 반환합니다. 함수 내부에서 return하는 값은 자동으로`Promise.resolve()`로 감싸져 반환됩니다.

#### 예제

```javascript
async function fetchData() {
  return "Hello, World!";
}

fetchData().then((result) => console.log(result)); // "Hello, World!"

// ---------------- or ----------------

const fetchData = async () => {
  return "Hello, World!";
};

fetchData().then((result) => console.log(result)); // "Hello, World!"
```

## 2. **Await**는 `Promise`가 처리될 때까지 함수의 실행을 일시 정지합니다.

### 2-1. `Await`는 **반드시** `Async 함수 내`에서만 사용해야 합니다.

### 2-2. `Await`는 `Promise`가 `resolve`될 때까지 기다린 다음, 그 결과를 반환합니다. 만약 Promise가 reject되면, await는 에러를 던집니다.

## 3. `Promise` VS `Async / Await` 비교해보기

### ① Promise

```javascript
const getMoviePromise = () => {
  fetch("url주소")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => console.log(json))
    .catch((e) => console.log(e));
};
```

### ② Async / Await

```javascript
const getMovieAsync = async () => {
  const response = await fetch("url주소");
  const json = await response.json();
  console.log(json);
};

getMovieAsync();
```

### 결론 👉👉 then메서드를 무작정 많이 사용하다가 실수를 할 가능성이 높은 Promise 객체 사용보다는 Async / Await 을 사용하여 데이터를 불러오는것이 가독성이 더 좋고 코드가 더 간결해지는 것 같다.

## 4. `Async / Await` 을 이용한 에러 처리

### 4-1. 비동기 작업에서 발생할 수 있는 에러는 `try...catch` 블록을 사용하여 처리할 수 있습니다.

#### 예제

```javascript
async function fetchData() {
  try {
    const response = await fetch("url 주소");
    const data = await response.json();
    console.log(data);
  } catch (e)) {
    console.log("Error fetching data:", e);
  }
}

fetchData();
```

### 4-2. `catch 블록`은 `try 블록 내`에서 발생한 에러만 잡아낼 수 있습니다. `try 블록 외부`에서 발생한 에러는 `catch 블록`에서 처리되지 않습니다.

#### 예제

#### try 블록 내에서 발생한 에러

```javascript
try {
  let x = y + 1; // y는 정의되지 않았으므로 ReferenceError 발생
} catch (error) {
  console.log("Error caught:", error.message); // "Error caught: y is not defined"
}
```

#### 블록 밖에서 발생한 에러는 catch 블록에서 처리되지 않은경우

```javascript
try {
  let x = 10;
  console.log(x);
} catch (error) {
  console.log("Error caught:", error.message);
}

let y = z + 1; // z는 정의되지 않았으므로 ReferenceError 발생
```

## 5.` Async / Await` 을 이용한 여러 비동기 작업 처리

#### 예제

```javascript
async function processData() {
  try {
    const result1 = await fetch("url 주소1");
    const data1 = await result1.json();

    const result2 = await fetch("url 주소2");
    const data2 = await result2.json();

    console.log("Data1:", data1);
    console.log("Data2:", data2);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

processData();
```

[MDN 공식문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function)
