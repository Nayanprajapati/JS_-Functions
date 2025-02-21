const person = {
  name: "Nayan",
  age: 20,
  gender: "male",
  country: "nepal",
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
