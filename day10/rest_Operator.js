// Handling Multiple Arguments in a Function
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
// ...numbers collects all arguments into an array.
// Useful when passing an unknown number of arguments.




// Rest operator in array destructuring
const numbers = [10, 20, 30, 40, 50];

const [first, second, ...rest] = numbers;

console.log(first);  // ✅ Output: 10
console.log(second); // ✅ Output: 20
console.log(rest);   // ✅ Output: [30, 40, 50]

// First two values are assigned separately.
//...rest collects the remaining values into an array.


// Rest Operator in Object Destructuring

const person = { name: "Alice", age: 25, city: "New York" };

const { name, ...details } = person;

console.log(name);    // Output: "Alice"
console.log(details); // Output: { age: 25, city: "New York" }

// Extracts name separately, while ...details collects remaining properties.
// Useful when removing properties from an object.
