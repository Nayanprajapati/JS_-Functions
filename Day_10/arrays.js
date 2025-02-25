// using map to find square of each numbers
const arry = new Array(10, 20, 30);
let ansArray = arry.map((number) => {
  return number * number;
});
console.log(ansArray);

/*.map() creates a new array by applying the callback function to each element of the original array.
  It does NOT modify the original array; instead, it returns a new array.*/

// adding plus 1 and using index
let aar = [12, 22, 45];
arry.map((number, index) => {
  console.log(number + 1);
  console.log(index);
});

/* The .map() method iterates over each element in the array and applies a callback function to it.
 This callback function takes two parameters: number, which represents the current element in the array,
 and index, which represents the position of that element within the array. During each iteration,
 the function adds 1 to the number and logs the updated value to the console. Additionally,
 it logs the corresponding index of the current element, providing both the transformed value and its position within the array.*/

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

/*
    The .filter() method iterates through the aary array, checking if each number is
     even using number % 2 === 0. If true, the number is included in the new array; 
     otherwise, it is excluded. This ensures only even numbers are retained.
 */

//  using filter to find string
let arr = [1, 2, "Nayan", "kathmandu", null];

let ans = arr.filter((value) => {
  if (typeof value === "string") {
    return true;
  } else {
    return false;
  }
});

console.log(ans);

/*
The .filter() method iterates through each element in arr, checking if typeof value === "string".
 If true, the value is added to the new array; otherwise, it is excluded.
 we can even makt it shorter
return typeof value === "string";
*/

// // using reduce
let array = [100, 200, 300, 400];
let answ = array.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(answ);

/* 
The .reduce() method iterates through the array, accumulating a sum of all elements. 
It starts with an initial value of 0 and adds each element (curr) to the accumulator (acc). 
This process continues for every element in the array, resulting in a final sum of 1000.
*/

// using short for shorting in accending order
let arra = [1, 2, 5, 6, 4];
arra.sort();
console.log(arra);

//  this is for decending order
let array3 = [1, 2, 5, 9, 6, 4];
array3.sort((a, b) => b - a); // Sorting in descending order
console.log(array3);

//  using forEach

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let length = array2.length;
array.forEach((value, index) => {
  console.log("Num:", value, "index:", index);
  console.log(length);
});

// // using function inside the array

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getSum(array1) {
  let sum = 0;
  array1.forEach((value) => {
    sum = sum + value;
  });
  return sum;
}

let totalSum = getSum(array1);
console.log(totalSum);

/*

The code defines an array array1 with numbers from 1 to 10 and a function getSum(array1), 
which initializes sum = 0, iterates over the array using .forEach(), adds each value to sum, 
and returns the final sum. The function is called, and its result is stored in totalSum, which is then logged to the console.

*/
 