const array = [1, 2, 10, 15];

const double = [];
const newArray = array.forEach(num => {
  double.push(num * 2);
});

console.log("foreach", double);

// map, filter, reduce
//map always has return and push into another.
const mapArray = array.map(num => {
  return num * 2;
});
// Can be changed to
const mapArray2 = array.map(num => num * 2); // BEST

console.log("maparray", mapArray);
console.log("maparray minified", mapArray2);

// filter -> if returns true goes to the array, if not.. not
const filterArray = array.filter(num => {
  return num > 5;
});
// Can be changed to
const filterArray2 = array.filter(num => num > 5);

console.log("filter", filterArray);
console.log("Minified filter", filterArray2);

// Reduce
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 5);

console.log(reduceArray);

const flattened = [[0, 1], [2, 3], [4, 5]].reduce((accumulator, array) => {
  debugger;
  return accumulator.concat(array);
}, []);
