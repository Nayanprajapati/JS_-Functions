// //   using Dot Notation
let obj1 = {
  name: "Nayan",
  age: 20,
  gender: "male",
  greet: function () {
    console.log("Hello " + this.name);
  },
};
obj1.greet();
console.log(obj1);
console.log(typeof "42");

// modifying the output by aading people.country

const people = {
  name: "ram",
  age: 30,
  gender: "male",
};

people.country = "nepal";
console.log(people);

// // example shallow copy using boject.assign()

const original = { name: "Alice", address: { city: "New York" } };
const shallowCopy = Object.assign({}, original);

shallowCopy.name = "Bob";
shallowCopy.address.city = "Los Angeles";

console.log(original.name); // "Alice" (Unchanged)
console.log(original.address.city); // "Los Angeles" ( Changed due to shared reference)

// // deep copy using JSON.stringify

// const org2 = { name: "nayan", address: { city: "bhaktapur" } };
// const deepCopy = JSON.parse(Jason.stringify(org2));

// deepCopy.address.city = "kathmandu";
// console.log(org2.address.city);

// const original = { name: "Alice", address: { city: "New York" } };
// const deepCopy = JSON.parse(JSON.stringify(original));

// deepCopy.address.city = "Los Angeles";

// console.log(original.address.city); // "New York" (Unchanged)

// Exersize from programizChallenge:
// Write a function to create a simple flash card.
// You are given two strings question and answer.
// Return an object with the question and answer paired together.
// For example, if question = "What is the capital of France?" and, answer = "Paris", the expected output is { Question: "What is the capital of France?", Answer: "Paris" }.
//
function createFlaskCard(question, answer) {
  return {
    Question: question,
    Answer: answer,
  };
}

const flaskCard = createFlaskCard("What is the capital of France?", "Paris");
console.log(flaskCard);



// using for in loop
let obj = {
  name: "Nayan",
  age: 20,
  gender: "male",
  greet: function () {
    console.log("Hello " + this.name);
  },
};

for (let key in obj) {
  console.log([key, "", obj[key]]);
}
