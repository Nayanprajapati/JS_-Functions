//   using Dot Notation
// let obj = {
//   name: "Nayan",
//   age: 20,
//   gender: "male",
//   greet: function () {
//     console.log("Hello " + this.name);
//   },
// };
// obj.greet();
// console.log(obj);
// console.log(typeof "42");

// modifying the output by aading people.country 

const people = {
  name: "ram",
  age: 30,
  gender: "male",
};

people.country = "nepal";
console.log(people);
// example shallow copy using boject.assign()

// const original = { name: "Alice", address: { city: "New York" } };
// const shallowCopy = Object.assign({}, original);

// shallowCopy.name = "Bob";
// shallowCopy.address.city = "Los Angeles";

// console.log(original.name); // "Alice" (✅ Unchanged)
// console.log(original.address.city); // "Los Angeles" (❌ Changed due to shared reference)

// const org = { name: "nayan", address: { city: "bhaktapur" } };
// const shallowCopy1 = { ...org };

// shallowCopy1.address.city = "kathmandu";

// console.log(shallowCopy1.address.city);
// console.log(org);

// // deep copy

// const org2 = { name: "nayan", address: { city: "bhaktapur" } };
// const deepCopy = JSON.parse(Jason.stringify(org2));

// deepCopy.address.city = "kathmandu";
// console.log(org2.address.city);

// const original = { name: "Alice", address: { city: "New York" } };
// const deepCopy = JSON.parse(JSON.stringify(original));

// deepCopy.address.city = "Los Angeles";

// console.log(original.address.city); // ✅ "New York" (Unchanged)
