//  Cloning an Array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3]
//  Creates a new independent array, without modifying the original.



//  Merging Two Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

// Combines multiple arrays easily.
// No need for concat() method.



// Adding Elements to an Array

const arry = [1, 2, 3];
const newArry = [...arry, 4, 5];

console.log(newArry);

// Inserts new elements while keeping the original array structure.




// Cloning an Object
const originalObject = { name: "Alice", age: 25 };
const copiedObject = { ...originalObject };

console.log(copiedObject); //  Output: { name: "Alice", age: 25 }

// Creates a new independent copy of an object.




// merging two objects
const obj1 = { name: "Alice", age: 25 };
const obj2 = { city: "New York", country: "USA" };

const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject);
// Output: { name: "Alice", age: 25, city: "New York", country: "USA" }

// Combines properties from multiple objects.
// If the same property exists, the later one overwrites the previous one.




// using spread operator in function arguments
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [10, 20, 30];

console.log(sum(...numbers)); //  Output: 60
// Expands array elements into individual function arguments.
// Useful when dealing with functions expecting multiple parameters.



// removing properties from an object Using Spread
const person = { name: "Alice", age: 25, city: "New York" };

const { city, ...newPerson } = person;

console.log(newPerson); // Output: { name: "Alice", age: 25 }

// Excludes the city property while copying the rest.
// Useful for removing properties without mutating the original object.
