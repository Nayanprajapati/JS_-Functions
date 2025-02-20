

// using map to find square of each numbers
const arry = new Array(10, 20, 30);
let ansArray = arry.map((number) => {
  return number * number;
});
console.log(ansArray);

// // adding plus 1 and using index
let aar = [12, 22, 45];
arry.map((number, index) => {
  console.log(number + 1);
  console.log(index);
});

// using filter to find even numbers
let aary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArray = aary.filter((number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

console.log(evenArray);

// using filter to find string
let arr = [1, 2, "Nayan", "kathmandu", null];

let ans = arr.filter((value) => {
  if (typeof value === "string") {
    return true;
  } else {
    return false;
  }
});

console.log(ans);

// we can even makt it shorter
//  return typeof value === "string";

// using reduce
let arry = [100, 200, 300, 400];
let ans = arry.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(ans);

// this is for shorting in accending order

using short
let arr = [1, 2, 5, 6, 4];
arr.sort();
console.log(arr);


// this is for decending order

// using forEach

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let length = array.length;
array.forEach((value, index) => {
  console.log("Num:", value, "index:", index);
  console.log(length);

});

// using function inside the array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getSum(arr) {
  let sum = 0;
  arr.forEach((value) => {
    sum = sum + value;
  });
  return sum;
}

let totalSum = getSum(arr);
console.log(totalSum);
