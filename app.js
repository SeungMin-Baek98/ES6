// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   console.log(this);
//   this.style.backgroundColor = "red";
//   console.log(this.style.backgroundColor);
// });

// button.addEventListener("click", () => {
//   console.log(this);
//   this.style.backgroundColor = "red";
// });

// const handleClick = () => {
//   console.log(this);
// };

// function handleClick() {
//   console.log(this);
// }

// button.addEventListener("click", handleClick);

// const nico = {
//   name: "nico",
//   age: 24,
//   addYear: () => {
//     this.age++;
//   },
// };
// console.log(nico);
// nico.addYear();
// nico.addYear();
// console.log(nico);

// const nico = {
//   name: "nico",
//   age: 24,
//   addYear() {
//     this.age++;
//   },
// };
// console.log(nico);
// nico.addYear();
// nico.addYear();
// console.log(nico);

// const email = [
//   "das@jasdnak.com",
//   "askjdhk@sadjhasjk.com",
//   "asdjs@gmail.com",
//   "seungmin@nomad.com",
//   "21312@gmail.com",
//   "nco@nco.com",
// ];

// const foundMail = email.find((item) => item.includes("@gmail.com"));

// const foundMail = email.filter((item) => !item.includes("gmail.com"));

// const foundMail = email.map((item, index) => ({
//   username: item.split("@")[0],
//   id: index,
// }));

// console.log(foundMail);
