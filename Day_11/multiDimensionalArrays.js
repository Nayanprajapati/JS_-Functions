// Creating Multi-Dimensional Arrays
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr);

// Accessing Elements in a Multi-Dimensional Array
/*
First index → Selects the inner array.
Second index → Selects the element inside that array.
*/
console.log(arr[0]); //  Output: [1, 2, 3]  (First row)
console.log(arr[1][2]); //  Output: 6  (Second row, third element)
console.log(arr[2][0]); // Output: 7 (Third row, first element)

// Modifying Elements in a Multi-Dimensional Array
arr[1][1] = "Nayan";
console.log(arr);

//Adding and Removing Elements in Multi-Dimensional Arrays
//  Adding an Entire Row
arr.push([10, 11, 12]);
console.log(arr);

// Adding an Element Inside an Existing Row
arr[0].push(88);
console.log(arr);

//  Removing an Element Using .pop()
arr[2].pop();
console.log(arr);

// Using .map(), .filter(), and .reduce() on Multi-Dimensional Arrays
// Using .map() to Transform Elements
let doubled = arr.map((row) => row.map((num) => num * 2));
console.log(doubled);

// Using .filter() to Get Even Numbers
let evens = arr.map((row) => row.filter((num) => num % 2 === 0));
console.log(evens);

// Using .reduce() to Sum All Elements
let sum = arr.reduce(
  (acc, row) => acc + row.reduce((rowAcc, num) => rowAcc + num, 0),
  0
);
console.log(sum);
