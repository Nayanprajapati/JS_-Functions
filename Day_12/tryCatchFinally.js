// 1. Basic try...catch Example
/*
In this program we haven defined a variable x, but we are trying to access it before it is defined.
*/
try {
  console.log(x); //  Throws an error (x is not defined)
} catch (error) {
  console.log("An error occurred:", error.message);
}

// 2. Using finally to Execute Code Always
/*
Even if no error occurs, finally executes.
✔ Useful for cleanup tasks like closing database connections.
*/
try {
  let num = 10 / 0; // No error in JavaScript (returns Infinity)
  console.log(num);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Execution complete.");
}

// 3. Handling a Custom Error with throw
/*
throw creates a custom error message.
Useful for validation checks.
*/
try {
  let age = 15;
  if (age < 18) {
    throw new Error("You must be 18 or older.");
  }
  console.log("Access granted.");
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Age verification complete.");
}

// 4. Catching Different Types of Errors

try {
  let user = JSON.parse('{name: "John"}'); // Invalid JSON (missing double quotes)
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("JSON Syntax Error:", error.message);
  } else {
    console.log("Unknown Error:", error.message);
  }
}

// 5. try...catch Inside a Function
/*
Catches division by zero error inside a function.
Prevents returning Infinity.
*/
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }
    return a / b;
  } catch (error) {
    return "Error: " + error.message;
  }
}

console.log(divide(10, 2)); //  Output: 5
console.log(divide(10, 0)); //  Output: Error: Cannot divide by zero.

// 6. try...catch...finally with Async/Await
/*
Handles API failures gracefully.
Ensures finally runs even if an error occurs.
*/
async function fetchData() {
  try {
    let response = await fetch("https://dummyjson.com/invalid-url"); //  Wrong API endpoint
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Failed to fetch data:", error.message);
  } finally {
    console.log("Request completed.");
  }
}

fetchData();


// 7.try...catch...finally Example for Login API
/*
This code simulates a login process by comparing input credentials with predefined values.
 It uses a try...catch...finally block to handle potential errors, such as missing or incorrect credentials.
  If the credentials match, it logs a success message; otherwise, it throws and catches an error with a descriptive message.
   The finally block ensures that a completion message is logged after every login attempt, regardless of the outcome.
*/
const username = "admin";
const password = "12345";

try {
  let inputUser = "admin"; // Change this to test different cases
  let inputPass = "wrongPass"; // Change this to test different cases

  if (!inputUser || !inputPass) {
    throw new Error("Username and password are required.");
  }

  if (inputUser !== username || inputPass !== password) {
    throw new Error("Invalid credentials.");
  }

  console.log("Login successful!");
} catch (error) {
  console.log("An error caught");
  console.log("Error message: " + error.message);
} finally {
  console.log("Finally will execute every time (Login attempt completed).");
}
