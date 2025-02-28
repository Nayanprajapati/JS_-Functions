// 1. Basic Example
/*
The function greet() returns a Promise automatically.
We use .then() to handle the resolved value.
*/
async function greet() {
  return "Hello, Nayan!";
}

greet().then((message) => console.log(message)); // Output: "Hello, Nayan!"

// 2. Using await Inside async Function
/*
fetchData() returns a Promise.
await fetchData() pauses execution until the Promise resolves.
"Data received!" is printed after 2 seconds.
*/
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}

async function getData() {
  console.log("Fetching...");
  let data = await fetchData(); // Waits for fetchData() to complete
  console.log(data);
}

getData();

// 3. Handling Multiple Async Calls Sequentially
/*
await step1(); waits 1 second, then continues.
await step2(); waits 2 more seconds, then continues.
*/
function step1() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Step 1 completed"), 1000)
  );
}

function step2() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Step 2 completed"), 2000)
  );
}

async function executeSteps() {
  console.log("Starting...");

  let result1 = await step1();
  console.log(result1);

  let result2 = await step2();
  console.log(result2);

  console.log("All steps completed!");
}

executeSteps();

// 4.Fetching Data from an API
async function fetchUser() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let user = await response.json();
    console.log("User fetched:", user);
  } catch (error) {
    console.log(" Error fetching user:", error);
  }
}

fetchUser();
