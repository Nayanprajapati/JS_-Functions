const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let number in numbers) {
  console.log(numbers[number]);
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//
const person = { name: "Alice", age: 25, city: "New York" };

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

const ram = { name: "ram", age: 22, gender: "male", city: "bhaktapur" };
for (let nen in ram) {
  console.log(`${nen}: ${ram[nen]}`);
}
