// class User {
//   constructor(name, lastName, email, password) {
//     this.username = name;
//     this.lastName = lastName;
//     this.email = email;
//     this.password = password;
//   }
//   sayHello() {
//     console.log(`Hello, my name is ${this.username}`);
//   }
//   userProfile() {
//     console.log(
//       `username = ${this.username} | lastName =  ${this.lastName} | email = ${this.email} | password = ${this.password}`
//     );
//   }
//   updatePassword(originPassword, newPassword) {
//     if (originPassword === this.password) {
//       this.password = newPassword;
//     } else {
//       console.log("You can't change your password;");
//     }
//   }
// }

// const exportClass = new User("승민", "백", "jah02190@naver.com", "123123");

// console.log(exportClass.password);
// exportClass.updatePassword("12123", "22222");
// console.log(exportClass.password);

// class Admin extends User {
//   constructor(superAdmin) {
//     this.superadmin = superAdmin;
//   }
//   inheritedClass() {
//     console.log("I'm inherited from the User class!!");
//   }
// }

// const inherited = new Admin("승민", "백", "jah02190@naver.com", "123123");

// inherited.inheritedClass();
// console.log(inherited.email);

// class User {
//   constructor({ username, lastName, email, password }) {
//     this.username = username;
//     this.lastName = lastName;
//     this.email = email;
//     this.password = password;
//   }
//   sayHello() {
//     console.log(`Hello, my name is ${this.username}`);
//   }
//   userProfile() {
//     console.log(
//       `username = ${this.username} | lastName =  ${this.lastName} | email = ${this.email} | password = ${this.password}`
//     );
//   }
//   updatePassword(originPassword, newPassword) {
//     if (originPassword === this.password) {
//       this.password = newPassword;
//     } else {
//       console.log("You can't change your password;");
//     }
//   }
// }

// const exportUser = new User({
//   username: "승민",
//   lastName: "백",
//   email: "jah02190@naver.com",
//   password: "123123",
// });

// class Admin extends User {
//   constructor({ username, lastName, email, password, superAdmin, isActive }) {
//     super({ username, lastName, email, password, superAdmin, isActive });
//     this.superAdmin = superAdmin;
//     this.isActive = isActive;
//   }
//   inheritedClass() {
//     console.log("I'm inherited from the User class!!");
//   }
// }

// const inheritedAdmin = new Admin({
//   username: "승민",
//   lastName: "백",
//   email: "jah02190@naver.com",
//   password: "123123",
//   superAdmin: true,
//   isActive: true,
// });

// console.log(exportUser);
// console.log(inheritedAdmin);

// const count = document.querySelector("#count");
// const plus = document.querySelector("#plus");
// const minus = document.querySelector("#minus");

// let counter = 0;
// count.innerText = counter;

// plusCount = () => {
//   counter = counter + 1;
//   count.innerText = counter;
// };

// minusCount = () => {
//   counter = counter - 1;
//   count.innerText = counter;
// };

// plus.addEventListener("click", plusCount);
// minus.addEventListener("click", minusCount);

// class Counter {
//   constructor({ initialNumber, counterId, plusId, minusId }) {
//     this.count = initialNumber;
//     this.counter = document.getElementById(counterId);
//     this.counter.innerText = initialNumber;
//     this.plusBtn = document.getElementById(plusId);
//     this.minusBtn = document.getElementById(minusId);
//     this.addEventListners();
//   }
//   addEventListners = () => {
//     this.plusBtn.addEventListener("click", this.increase);
//     this.minusBtn.addEventListener("click", this.decrease);
//   };
//   increase = () => {
//     console.log(this);
//   };
//   decrease = () => {
//     console.log(this);
//   };
//   repaintCount = () => {
//     this.counter.innerText = this.count;
//   };
// }

// new Counter({
//   initialNumber: 55,
//   counterId: "count",
//   plusId: "plus",
//   minusId: "minus",
// });
// new Counter({
//   initialNumber: 17,
//   counterId: "count2",
//   plusId: "plus2",
//   minusId: "minus2",
// });
