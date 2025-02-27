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

// 7. try...catch...finally in a Login API
/*
Ensures error handling in API requests.
Throws custom errors for missing credentials.
Logs every login attempt in the finally block.
*/
const express = require("express");
const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            throw new Error("Username and password are required.");
        }

        if (username !== "admin" || password !== "12345") {
            throw new Error("Invalid credentials.");
        }

        res.status(200).json({ message: "Login successful!" });

    } catch (error) {
        res.status(400).json({ error: error.message });

    } finally {
        console.log("Login attempt completed.");
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));

