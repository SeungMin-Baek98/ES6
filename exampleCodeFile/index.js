const friends = [
  "승민",
  "경모",
  "지성",
  "재원",
  "호경",
  "수환",
  "수관",
  "헌우",
];

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]); //승민 , 경모, 지성, 재원, 호경, 수환, 수관, 헌우
// }

// friends.forEach((friend) => console.log(friend)); //승민 , 경모, 지성, 재원, 호경, 수환, 수관, 헌우

// for (const friend of friends) {
//   console.log(friend); //승민 , 경모, 지성, 재원, 호경, 수환, 수관, 헌우
// }

for (const friend of friends) {
  if (friend === "호경") {
    break;
  } else {
    console.log(friend); //승민, 경모, 지성, 재원
  }
}

for (let i = 0; i < friends.length; i++) {
  if (friends[i] === "호경") {
    break;
  } else {
    console.log(friends[i]);
  }
}
// const word = "Hello World!!";

// for (const letter of word) {
//   console.log(letter); // H e l(2) o  w o r l d !(2)
// }

// for (let i = 0; i < word.length; i++) {
//   console.log(word[i]);
// }
