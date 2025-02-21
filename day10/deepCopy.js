const original = { 
    name: "Alice", 
    address: { city: "New York", country: "USA" }
};

// Creating a deep copy
const deepCopy = JSON.parse(JSON.stringify(original));

// Modifying properties in the copied object
deepCopy.name = "Bob";  // ✅ Changes only in `deepCopy`
deepCopy.address.city = "Los Angeles";  // ✅ Does NOT affect `original`

console.log(original.name);  // Output: "Alice" (Unchanged)
console.log(original.address.city);  // Output: "New York" (Unchanged)
console.log(deepCopy.name);  // Output: "Bob"
console.log(deepCopy.address.city);  // Output: "Los Angeles"
