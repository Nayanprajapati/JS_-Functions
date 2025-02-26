const mySymbol = Symbol();

//1. Creating a Symbol

/* Symbols are unique and immutable.
They cannot be created using new Symbol(). 
*/
console.log(mySymbol);
console.log(typeof mySymbol);

// 2️. Creating a Symbol with Descriptions
/*
Descriptions are just for debugging, not for identification.
✔ Even symbols with the same description are unique.
*/
const sym1 = Symbol("mySymbol");
console.log(sym1);

//3. Unique Symbols for Object Properties
/* 
Using a symbol prevents accidental overwrites.
It does not show in for...in loops or Object.keys().
*/
const ID = Symbol("id");

const user = {
  name: "Alice",
  age: 25,
  [ID]: 12345,
};

console.log(user);
console.log(user[ID]); // Output: 12345

// 4.  Symbols Are Not Enumerated in Loops
/*
Symbols are private to objects unless explicitly accessed.
Use Object.getOwnPropertySymbols(obj) to retrieve symbol properties.
*/
const person = {
  name: "Bob",
  age: 30,
};

const secret = Symbol("secretKey");
person[secret] = "Hidden Data";

//Normal loops don’t show symbols
for (let key in person) {
  console.log(key); // name, age (Symbol is hidden)
}

console.log(Object.keys(person)); // ["name", "age"]
console.log(Object.getOwnPropertySymbols(person)); // [Symbol(secretKey)]

// 5. Global Symbols Using Symbol.for()

/*
Symbol.for() reuses the same symbol if it exists.
Normal Symbol() calls create unique values.
*/

const sym = Symbol.for("sharedKey");
const sym2 = Symbol.for("sharedKey");

console.log(sym === sym2); // true

// 6.  Retrieving Global Symbols Using Symbol.keyFor()
/*
 Only works for Symbol.for() symbols.
Does not work for normal Symbol() values.
*/
const sym3 = Symbol.for("app.id");
console.log(Symbol.keyFor(sym)); // Output: "app.id"

//7. Using Symbol in JavaScript Classes

/*
Encapsulates private data using Symbols.
Cannot be accessed accidentally from outside.
*/
const secretKey = Symbol("secret");
class BankAccount {
  constructor(balance) {
    this[secretKey] = balance; // Private field using Symbol
  }

  getBalance() {
    return this[secretKey];
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // 1000
console.log(account.secretKey); // undefined
