# Spread

## spread 문법은 배열이나 객체를 가져와서 풀어헤쳐서 전개하는 것입니다. 이 문법은 `...`점 세개로 표현됩니다.

### 예제

- ①

  ```javascript
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = ["a", "b", "c"];

  console.log([arr1, arr2]);
  // 0 (5) [1, 2, 3, 4, 5]
  // 1 (3) ['a', 'b', 'c']
  ```

- ②

  ```javascript
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = ["a", "b", "c"];

  console.log([...arr1, ...arr2]);
  //(8)[1, 2, 3, 4, 5, 'a', 'b', 'c']
  ```

  ### 이처럼 두개의 배열을 한 배열로 만들기 위해서 `...`을 사용하여 만들었다 이것을 spread라고 한다.

## 배열뿐 아니라 객체에서도 사용이 가능하다.

### 예제

- ①
  ```javascript
  const info = {
    name: "seungmin",
    age: 25,
  };
  const hello = {
    hello: "hello",
    friends: true,
  };
  console.log({ info, hello });
  /*{info: {…}, hello: {…}}
    hello
    :
    {hello: 'hello', friends: true}
    info
    :
    {name: 'seungmin', age: 25} */
  ```
- ②

  ```javascript
  const info = {
    name: "seungmin",
    age: 25,
  };
  const hello = {
    hello: "hello",
    friends: true,
  };
  console.log({ ...info, ...hello });
  // {name: 'seungmin', age: 25, hello: 'hello', friends: true}
  ```

  ### 객체에서도 똑같이 두 개의 객체를 `...`를 사용하여 하나의 객체로 만들 수 있다.

## 배열에서 요소를 추가하느 방법이 spread말고 한가지 더 있는데 `push()`메서드를 사용하는 경우이다.

### 예제

```javascript
const friends = ["승민", "수환"];

console.log(friends); //['승민', '수환']

friends.push("경모");

const newFriends = friends;

console.log(newFriends); //['승민', '수환', '경모']
```

### `spread`방식을 사용하여 만들어 보자.

```javascript
const friends = ["승민", "수환"];

console.log(friends); //['승민', '수환']

console.log([...friends, "경모"]); //['승민', '수환', '경모']
```

#### 결론 : 코드가 간결해지고 가독성이 증가하네용.
