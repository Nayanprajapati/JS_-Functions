// let arr = new Array("l", 1, true);
// console.log(arr);

// using map
// const arry = new Array(10, 20, 30);
// let ansArray = arry.map((number) => {
//   return number * number;
// });
// console.log(ansArray);

// // adding pllus 1 and usinfg index
// let aar = [12, 22, 45];
// arry.map((number, index) => {
//   console.log(number + 1);
//   console.log(index);
// });

// using filter
// let aary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenArray = aary.filter((number) => {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(evenArray);

// let arr = [1, 2, "Nayan", "kathmandu", null];

// let ans = arr.filter((value) => {
//   if (typeof value === "string") {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(ans);

// we can even makt it shorter
//  return typeof value === "string";

// // using reduce
// let arry = [100, 200, 300, 400];
// let ans = arry.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(ans);

// using short
let arr = [1, 2, 5, 6, 4];
arr.sort();
console.log(arr);

// this is for shorting in accending order

let arry = [1, 2, 5, 6, 4];
arry.sort((a, b) => b - a);
console.log(arry);
// this is for decending order

