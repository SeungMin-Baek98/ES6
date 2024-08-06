# Template Literals = Template Strings

### 기존에 ES6 이전에 문자열을 추가하고 싶으면 `"String" + "변수"` 이런식으로 작성을 해야 됐다.

#### 에제

```javascript
const sayHi = (aName = "seungmin") => "Hello" + aName;

console.log(sayHi()); // "Helloseungmin"
```

### 이런식의 작성은 글자 띄어쓰기 및 `+`를 붙여가면서 하나하나 신경 써야 하므로 불편하다.(매우)

```javascript
const sayHi = (aName = "seungmin") => "Hello " + aName;

console.log(sayHi()); // "Hello seungmin"
```

### 이렇게 코드길이가 짧으면 상관없겠지만 긴 경우에는 일일이 수정하기 엄청나게 짜증날 것 같다"(매우)

### 이러한 불편함을 개선하기 위하여 ES6에 새로 등장하는 것이 있는데....

# 바로!!!

### ``(백틱) 이다.

#### 예제

```javascript
const sayHi = (aName = "seungmin") => `Hello ${aName}`;

console.log(sayHi()); // Hello seungmin
```

### 백틱을 사용하면 그냥 ` `` ` 저 사이에 string이랑 변수를 마구마구 작성하면 된다.

### 이 얼마나 편안함인가.. like 시몬스,,

### 여기서 중요한건 `변수`를 넣기위해선 예제에서도 보이듯이 `${변수}` 이렇게 작성을 하면된다.

#### function은 직접 선언은 안 되고 호출을 해야 한다.

#### 예제

```javascript
const add = (a, b) => {
  return a + b;
};

console.log(`${add(2, 3)}`); // 5
```

## 또한 template literals는 자바스크립트 안에서 HTML을 사용할 수 있다!!(😱😱)

#### 예제

```html
<div class="wrapper"></div>
```

```javascript
const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.innerText = "Hello";
  h1.className = "hello-text";
  h1.style.color = "tomato";
  div.append(h1);
  wrapper.append(div);
  console.log(wrapper);
};

addWelcome();
```

##### 콘솔 결과

![콘솔 결과](/images/img6.png)

## 이 코드를 ES6를 적용해서 작성해보면

#### 예제

```javascript
const addWelcome = () => {
  const div = `
    <div class="hello">
      <h1>Hello</h1>
    </div>  `;
  wrapper.innerHTML = div;
  console.log(wrapper);
};

addWelcome();
```

##### 콘솔 결과

![콘솔 결과](/images/img6.png)

#### 결론 : ES6 도입후 코드의 가독성 및 간결성이 증가하여 업무적으로 효율이 엄청 좋을 것 같다.
