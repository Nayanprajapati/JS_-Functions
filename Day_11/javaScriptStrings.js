// types to create string in js
let name = "Nayan"; // using double quotes
let name1 = "Nayan"; // using single quotes
let name2 = ` prajapati  `; // using backtick
let fullName = `The fullName is ${name1} ${name2}`;

console.log(fullName);

// Access String Characters
1; // Using Indexes
console.log(name1[1]); // Output: 'a'

2; // Using ChartAt
console.log(name2.charAt(3)); // Output: 'j'

// Features of JavaScript Strings
// 1. JavaScript Strings are Immutable
name1[0] = "P";
console.log(name1);
// this operation failed due to the immutable nature of JavaScript strings.

// JavaScript Strings are Case-Sensitive
name = "nayan";
name1 = "Nayan";
console.log(name === name1);
// the lowercase and uppercase letters are treated as different values so the result if false.

// JavaScript String Methods
1; // concatenate two strings
let result = name1.concat(" ", name2);
console.log(result);

2; // convert the text to uppercase
let result1 = name1.toUpperCase();
console.log(result1);

3; // remove whitespace from the string
let result2 = name2.trim();
console.log(result2);

4; // convert the string to an array
let result3 = name1.split("");
console.log(result3);

// 5. slice the string
let result4 = name1.slice(0, 3);
console.log(result4);

