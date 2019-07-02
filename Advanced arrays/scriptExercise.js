// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  }
];

//1. Create an array using forEach that has all the usernames with a "!" to each of the usernames
const newArray = [];
const addCharacterEnd = array.forEach(element => {
  newArray.push(element.username + "!");
});

console.log(newArray);

//2. Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(element => element.username + "?");
console.log(mapArray);

//3. Filter the array to only include users who are on team: red
const redArray = array.filter(element => element.team === "red");
console.log(redArray);

//Find out the total score of all users using reduce
const totalScoreArray = array.reduce((accumulator, element) => {
  return accumulator + element.score;
}, 0);
console.log(totalScoreArray);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray1 = arrayNum.map((num, i) => {
  return num * 2;
});

console.log(newArray1);
