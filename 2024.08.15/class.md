# Class

## 1. Class란?

#### 객체를 직접 작성하여 정의하고 생성할 수도 있지만, 클래스로 만들어주면 여러 객체를 더 쉽게 만들 수 있다. 클래스는 객체를 생성하기 위한 템플릿이다. class를 통해 원하는 구조의 객체 틀을 짜놓고, 비슷한 모양의 객체를 공장처럼 찍어낼 수 있다.

## 2. Class를 왜 사용할까??

### ES6부터 추가된 class는 직관적으로 쉽게 코드를 읽을 수 있게 만들어 줄 뿐만 아니라, 작성하기도 쉽고 또 class 기반 언어에 익숙한 개발자가 더 빠르게 적응할 수 있다.

#### 예제

- ① 객체를 직접 작성하여 정의하고 생성하기

  ```javascript
  const user1 = {
    username: "승민",
    lastName: "백",
    email: "jah02190@naver.com",
    password: "123123",
    sayHello: function () {
      console.log(`Hello, my name is ${this.username}`);
    },
    userProfile: function () {
      console.log(
        `username = ${this.username} | lastName = ${this.lastName} | email = ${this.email} | password = ${this.password}`
      );
    },
    updatePassword: function (originPassword, newPassword) {
      if (originPassword === this.password) {
        this.password = newPassword;
      } else {
        console.log("You can't change your password;");
      }
    },
  };

  const user2 = {
    username: "지훈",
    lastName: "김",
    email: "jihun@example.com",
    password: "456456",
    sayHello: function () {
      console.log(`Hello, my name is ${this.username}`);
    },
    userProfile: function () {
      console.log(
        `username = ${this.username} | lastName = ${this.lastName} | email = ${this.email} | password = ${this.password}`
      );
    },
    updatePassword: function (originPassword, newPassword) {
      if (originPassword === this.password) {
        this.password = newPassword;
      } else {
        console.log("You can't change your password;");
      }
    },
  };

  // 객체 사용하기
  user1.sayHello(); // Hello, my name is 승민
  user2.sayHello(); // Hello, my name is 지훈
  ```

- ② 클래스를 정의하여 객체 생성하기

  ```javascript
  class User {
    constructor(username, lastName, email, password) {
      this.username = username;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
    }

    sayHello() {
      console.log(`Hello, my name is ${this.username}`);
    }

    userProfile() {
      console.log(
        `username = ${this.username} | lastName = ${this.lastName} | email = ${this.email} | password = ${this.password}`
      );
    }

    updatePassword(originPassword, newPassword) {
      if (originPassword === this.password) {
        this.password = newPassword;
      } else {
        console.log("You can't change your password;");
      }
    }
  }

  const user1 = new User("승민", "백", "jah02190@naver.com", "123123");
  const user2 = new User("지훈", "김", "jihun@example.com", "456456");

  user1.sayHello(); // Hello, my name is 승민
  user2.sayHello(); // Hello, my name is 지훈
  ```

  ### 결론

  - 직접 객체를 정의하는 방법: 각 객체를 만들 때마다 해당 객체의 구조와 메서드를 반복해서 작성해야 한다.
  - 클래스를 사용하는 방법: 클래스를 한 번 정의해두면, 동일한 구조의 객체를 쉽게 여러 개 만들 수 있습니다. 이는 코드의 반복을 줄이고, 유지보수를 쉽게 해준다.

## 3. Class 살펴보기

#### 예제

```javascript
class User {
  constructor(name) {
    this.username = name;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.username}`);
  }
}
const exportClass = new User("승민");
exportClass.sayHello(); // Hello, my name is 승민
```

- 클래스 내에서 정의된 함수를 method라고 부른다
- 클래스를 통해 생성된 객체를 instance라고 부른다.
- 클래스 이름은 항상 대문자로 시작해야한다.
- constructor(생성자)는 클래스에서 필요한 기초 정보를 설정하는 곳이다. 객체를 new로 생성할 떄 **가장먼저 자동으로 호출된다**
  - this.username에서 this 는 본인 객체를 의미한다.

## 4. Class의 상속 (Extends / Super)

- ### Extends 키워드는 클래스가 다른 클래스를 상속받을 때 사용됩니다. 상속을 통해 자식 클래스는 부모 클래스의 속성(properties)과 메서드(methods)를 물려받을 수 있습니다.

- ### Super 키워드는 자식 클래스에서 부모 클래스의 생성자나 메서드를 호출할 때 사용됩니다.

- ### 생성자에서 사용: 자식 클래스에서 constructor를 정의할 때는 반드시 super()를 호출해야 합니다. 이는 부모 클래스의 생성자를 호출하여 부모 클래스에서 정의된 속성들을 초기화하는 역할을 합니다.

#### 예제

```javascript
class User {
  // User 클래스: 부모 클래스
  constructor({ username, lastName, email, password }) {
    this.username = username;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.username}`);
  }
  userProfile() {
    console.log(
      `username = ${this.username} | lastName =  ${this.lastName} | email = ${this.email} | password = ${this.password}`
    );
  }
  updatePassword(originPassword, newPassword) {
    if (originPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("You can't change your password;");
    }
  }
}

const exportUser = new User({
  username: "승민",
  lastName: "백",
  email: "jah02190@naver.com",
  password: "123123",
});

class Admin extends User {
  // Admin 클래스: User 클래스를 상속받는 자식 클래스
  constructor({ username, lastName, email, password, superAdmin, isActive }) {
    // super()를 사용하여 부모 클래스의 생성자를 호출
    super({ username, lastName, email, password });
    this.superAdmin = superAdmin;
    this.isActive = isActive;
  }
  inheritedClass() {
    console.log("I'm inherited from the User class!!");
  }
}

const inheritedAdmin = new Admin({
  username: "승민",
  lastName: "백",
  email: "jah02190@naver.com",
  password: "123123",
  superAdmin: true,
  isActive: true,
});
console.log(exportUser);
console.log(inheritedAdmin);
```

- 콘솔 결과
  ![콘솔 결과](/images/img7.png)

## 5. DOM에서의 class 상속

```html
<div>
  <span id="count"></span>
  <button id="plus">+</button>
  <button id="minus">-</button>
</div>
```

- 이러한 코드가 있다 가정해보자!
- 가장 기본적인 자바스크립트로서 더하기 빼기를 작성해보면

  ```javascript
  const count = document.querySelector("#count");
  const plus = document.querySelector("#plus");
  const minus = document.querySelector("#minus");

  let counter = 0;
  count.innerText = counter;

  plusCount = () => {
    counter = counter + 1;
    count.innerText = counter;
  };

  minusCount = () => {
    counter = counter - 1;
    count.innerText = counter;
  };

  plus.addEventListener("click", plusCount);
  minus.addEventListener("click", minusCount);
  ```

  - 이런식으로 접근을 할 것이다.
  - 나 역시도 이러한 방식이 편한데, 만약 여러 개의 버튼들이 같은 기능을 한다는 가정하에는 class로 만들어서 관리하는것이 편할 것이다.

```html
<div>
  <span id="count"></span>
  <button id="plus">+</button>
  <button id="minus">-</button>
</div>
<div>
  <span id="count2"></span>
  <button id="plus2">+</button>
  <button id="minus2">-</button>
</div>
<script src="index.js"></script>
```

```javascript
class Counter {
  constructor({ initialNumber, counterId, plusId, minusId }) {
    this.count = initialNumber;
    this.counter = document.getElementById(counterId);
    this.counter.innerText = initialNumber;
    this.plusBtn = document.getElementById(plusId);
    this.minusBtn = document.getElementById(minusId);
    this.addEventListners();
  }
  addEventListners = () => {
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  };
  increase = () => {
    this.count = this.count + 1;
    this.repaintCount();
  };
  decrease = () => {
    this.count = this.count - 1;
    this.repaintCount();
  };
  repaintCount = () => {
    this.counter.innerText = this.count;
  };
}

new Counter({
  initialNumber: 55,
  counterId: "count",
  plusId: "plus",
  minusId: "minus",
});
new Counter({
  initialNumber: 17,
  counterId: "count2",
  plusId: "plus2",
  minusId: "minus2",
});
```

- 처음에 Counter 클래스안에 메서드를 선언할 때
  ```javascript
    increase() {
      this.count = this.count + 1;
      this.repaintCount();
    }
     decrease() {
      this.count = this.count + 1;
      this.repaintCount();
    }
  ```
- 이렇게 코드를 작성해보니 이러한 오류가 발생했다. 원인을 파악해보니
  ![오류 코드](/images/img8.png)

  - 일반 함수 사용

    ```javascript
    increase() {
      console.log(this);
    }
    decrease() {
      console.log(this);
    }
    ```

    ![콘솔 결과](/images/img9.png)

    - 각각의 메서드가 일반 함수로 정의되어 있을땐, 이 메서드가 현재 버튼의 `click` 이벤트 핸들러로 사용되기 때문에, `this`는 이벤트를 발생시킨 요소(즉, 버튼)로 바인딩된다. 그래서 `this`가 `button` 태그를 가리키게 되어, `console.log(this);`는 버튼 요소를 출력하게 된다.

  - 화살표 함수 사용

    ```javascript
    increase = () => {
      console.log(this);
    };
    decrease = () => {
      console.log(this);
    };
    ```

    ![콘솔 결과](/images/img10.png)

    - 반대로 화살표 함수는 `this`가 정의된 클래스의 인스턴스를 고정적으로 참조하여 클래스 메서드로 화살표 함수를 사용할 경우, `this`는 항상 클래스 인스턴스를 가리키게 된다.
