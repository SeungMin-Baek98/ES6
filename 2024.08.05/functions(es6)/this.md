## 화살표함수를 사용하면서 주의해야 할 상황이 있다.

### 바로 `this`를 사용하는 경우인데, `this`를 사용하는 경우 `Arrow Function` 사용시 객체를 가르키지 않고 `Window`를 가르키게된다.

### 예제

```html
<body>
  <button>Click me!</button>
  <script src="app.js"></script>
</body>
```

```javascript
const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log(this);
  this.style.backgroundColor = "red";
  console.log(this.style.backgroundColor);
});
```

#### 이러한 코드가 있다. 버튼 클릭시 각각의 결과를 확인해보면

![콘솔결과](/images/img2.png)
![](/images/img4.png)

#### 이렇게 나오는데

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log(this);
  this.style.backgroundColor = "red";
  console.log(this.style.bacgroundColor);
});
```

#### 함수를 화살표 함수로 바꾸고 확인해보면

![화살표 함수 변경후 콘솔 결과](/images/img3.png)
![](/images/img5.png)

#### 화살표 함수를 사용후 this는 그 객체를 가르키는 것이 아닌 window를 가르키는 것으로 보였다. 그래서 당연히 버튼의 bgColor에서도 오류가 발생하는것을 확인하였다.

#### 다른 예시를 들어보겠습니다.

### 일반 함수

```javascript
const seungmin = {
  name: "seungmin",
  age: 24,
  addYear() {
    this.age++;
  },
};
console.log(seungmin.age); // 24
seungmin.addYear();
seungmin.addYear();
console.log(seungmin.age); // 26
```

##### 일반 함수의 경우 일반 함수는 호출된 방식에 따라 `this`가 결정됩니다. 객체의 메서드로 호출되면, `this`는 그 객체를 가리킵니다.여기서 `addYear` 메서드는 일반 함수로 정의되었습니다. `seungmin.addYear()`를 호출할 때, `this`는 `seungmin` 객체를 가리키기 때문에 `this.age`는 `seungmin.age`와 동일합니다. 따라서 `addYear 메서드`를 호출할 때마다 `seungmin.age`가 `1씩` 증가하게 됩니다.

### 화살표 함수

```javascript
const seungmin = {
  name: "seungmin",
  age: 24,
  addYear: () => {
    this.age++;
  },
};
console.log(seungmin.age); // 24
seungmin.addYear();
seungmin.addYear();
console.log(seungmin.age); // 24
```

#### 이러한 결과를 확인할 수 있는데,

##### 여기서 `addYear 메서드`는 `화살표 함수`로 정의되었습니다. 화살표 함수 내에서 `this`는 `상위 스코프의 this를 상속`받으므로, 이 경우 this는 `전역 객체`를 가리킵니다. 전역 객체에는 `age 속성이 없기 때문`에 `this.age는 undefined`로 평가되고, `this.age++`는 실제로 아무런 효과를 가지지 않습니다. 따라서 `seungmin.age`는 변하지 않고 계속 `24로 유지`됩니다.
