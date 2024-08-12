# **Promise**

- ### 1. Promise 객체란?? 자바스크립트에서 비동기 작업의 완료 또는 실패를 나타내는 객체입니다.

  - ### 1-1. Executor는 Promise 생성자에 전달되는 함수로, 비동기 작업을 수행하고 그 결과에 따라서 resolve 나 reject를 호출하는 역할을 합니다.

  - #### 생성 방법

    ```javascript
    const example = new Promise((resolve, reject) => {
      if (성공) {
        resolve(결과); // 작업이 성공했을 때 호출
      } else {
        reject(에러); // 작업이 실패했을 때 호출
      }
    });
    ```

- ### 2. Promise의 상태
  - #### 2-1 Pending
    - 초기 상태로, 작업이 아직 완료되지 않은 상태입니다.
  - #### 2-2 Fullfilled
    - 작업이 성공적으로 완료되어 결과값이 존재하는 상태이며, resolve 함수가 호출됩니다.
  - #### 2-3 Rejected :
    - 작업이 실패하여 에러가 발생하는 상태이며, reject 함수가 호출됩니다.
- ### 3. Promise의 메서드

  - ### 3-1 then(onFulfilled, onRejected)
    - Promise가 성공(fulfilled)했을 때 실행될 onFulfilled 함수와, 실패(rejected)했을 때 실행될 onRejected 함수를 설정합니다.
  - ### 3-1 catch(onRejected)

    - Promise가 실패했을 때만 실행될 함수를 설정합니다.
    - then(undefined, onRejected)와 동일한 기능을 합니다.

  - ### 3-1 finally(onFinally)

    - Promise가 성공하거나 실패한 후에 무조건 실행되는 함수를 설정합니다.

  - #### 예제

  ```javascript
  const example5 = new Promise((resolve, reject) => {
    const success = false;

    if (success === true) {
      resolve("this job is resolved!!");
    } else {
      reject("this job is rejected!!");
    }
  });
  example5
    .then((result) => console.log(result))
    .catch((error) => console.log(error)); // this job is rejected!!
  ```

- ### 4. Promise의 체이닝

  - ### 여러 then 메서드를 나열할 수 있는데 이것을 chaining promises라고 한다.
  - ### **주의!!**

    - ### 각각의 then 메서드의 값을 다음 then 메서드에 전달 해주기 위해서는 return 값을 적어야 한다.

    - #### 예제

      ```javascript
      const example6 = new Promise((resolve, reject) => {
        resolve(2);
      });

      const twoTimes = (number) => number * 2;

      example6
        .then((result) => {
          console.log(result); // result : 2
          return result; // return 값 : 2
        })
        .then((result) => {
          const newResult = twoTimes(result); // newResult : 2 * 2 = 4
          console.log(newResult); // 4
          return newResult; // return 값 : 4
        })
        .then((result) => {
          const newResult = twoTimes(result); // newResult : 4 * 2 = 8
          console.log(newResult); // 8
          return newResult; // return 값 : 8
        })
        .then((result) => {
          const newResult = twoTimes(result); // newResult : 8 * 2 = 16
          console.log(newResult); // 16
          return newResult; // return 값 : 16
        });
      ```

- ### 5. Promise의 정적 메서드

  - ### 5-1 Promise.all(iterable)

    - ### 모든 Promise가 완료될 때까지 기다렸다가, 모든 결과를 배열로 반환합니다. 하나라도 실패하면 catch로 넘어갑니다.
    - #### 예제

      ```javascript
      const p1 = new Promise((resolve) => {
        setTimeout(() => resolve("First"), 5000);
      });

      const p2 = new Promise((resolve, reject) => {
        setTimeout(() => reject("Second"), 2000);
      });

      const p3 = new Promise((resolve) => {
        setTimeout(() => resolve("Third"), 1000);
      });

      const gatherPromise = Promise.all([p1, p2, p3]);

      gatherPromise
        .then((result) => console.log(result))
        .catch((error) => {
          console.log(error);
        });
      ```

  - ### 5-2 Promise.race(iterable)
    - ### 가장 빨리 완료된 Promise의 결과를 반환합니다.
  - ### 5-3 Promise.any(iterable):
    - ### 하나의 Promise라도 성공하면 그 결과를 반환합니다. 모든 Promise가 실패해야 catch로 넘어갑니다.
