// 1. Basic setTimeout Example

// The function inside setTimeout runs after 2 seconds.
setTimeout(() => {
  console.log("hello world");
}, 2000);

// 2.Using Named Function with setTimeout
//  Instead of an anonymous function, a named function (greet) is passed to setTimeout.
function greet() {
  console.log("how u doing?");
}
setTimeout(greet, 3000);

// 3. Passing Arguments to Function
function greet(name) {
  console.log("whats up?" + " " + name + " " + "!");
}
setTimeout(greet, 4000, "nayan");

// 4. Cancelling setTimeout Using clearTimeout
// clearTimeout(timeoutId) stops the execution of setTimeout before it runs.
let timeoutId = setTimeout(() => {
  console.log("This won't be printed!");
}, 3000);

// Cancel the timeout before it executes
clearTimeout(timeoutId);

// 5.  setTimeout with Recursive Function (Creating an Interval-Like Behavior)
function repeateMessage() {
  console.log("hey luffy");
  setTimeout(repeateMessage, 2000);
}
setTimeout(repeateMessage, 2000);
