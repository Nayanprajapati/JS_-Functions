//  JavaScript Numbers: Types, Methods, and Examples

let a = 10; // Positive integer
let b = -5; // Negative integer
let c = 3.1422334232; // Floating-point number
let d = -4.34; // Floating-point number
let big = 5e6; // 5 × 10⁶ (5000000)
let small = 3e-3; // 3 × 10⁻³ (0.003)

1; // Types of Numbers in JavaScript
console.log(big, small);

2; // Integer Numbers
console.log(a, b); // Output: 10 -5

3; // Floating-Point (Decimal) Numbers
console.log(c, d);

4; // Exponential Notation
console.log(big, small);

5; // Infinity and -Infinity
console.log(4 / 0); // Output: Infinity
console.log(-6 / 0); // Output: -Infinity

6; // NaN (Not-a-Number)
console.log(0 / 0); // Output: NaN
console.log("Nayan" / 2); // Output: NaN

// we can use isNan(value) to check its number or not
console.log(isNaN(60));  //output: false
console.log(isNaN("Nayan")); //output: true


7.// BigInt (Large Integers)
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);

// JavaScript Number Methods

1;// toFixed(n) → Fixed Decimal Places
console.log(c.toFixed(3)); //output : 3.142

2;//toPrecision(n) → Significant Digits
console.log(c.toPrecision(5)); //outpit: 3.1422

3;// parseInt() → Convert String to Integer
console.log(parseInt("100")); // Output: 100
console.log(parseInt("3.14")); // Output: 3

4;// Number.isInteger() → Check if a Number is an Integer
console.log(Number.isInteger(10));     // true
console.log(Number.isInteger(10.5));   // false
