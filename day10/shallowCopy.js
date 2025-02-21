const original = {
  name: "Alice",
  address: { city: "New York" },
};

// Creating a shallow copy
const shallowCopy = Object.assign({}, original);

// Modifying properties in the copied object
shallowCopy.name = "Bob"; // Changes only in `shallowCopy`
shallowCopy.address.city = "Los Angeles"; // Affects both `shallowCopy` and `original`

console.log(original.name); // Output: "Alice" (Unchanged)
console.log(original.address.city); // Output: "Los Angeles" (Changed due to shared reference)
