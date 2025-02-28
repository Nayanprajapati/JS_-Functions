// 1. Creating a Promise
/*
resolve() → Runs when the task is successful.
reject() → Runs when the task fails.
.then() → Handles the success case.
.catch() → Handles errors.
*/
let myPromise = new Promise((resolve, reject) => {
  let success = true; // Change this to false to test rejection
  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected due to an error!");
    }
  }, 2000);
});

// Using the Promise
myPromise
  .then((message) => {
    console.log(" " + message);
  })
  .catch((error) => {
    console.log(" " + error);
  });

//   2. Fetching Data with Promises
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = { name: "Anshu", age: 21 };
      resolve(user); // Resolving with user data
    }, 2000);
  });
}

// Using the Promise
fetchUser()
  .then((user) => {
    console.log("User fetched:", user);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

//  3. Handling Multiple Promises with Promise.all()
let promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 1 complete"), 1000)
);
let promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 2 complete"), 2000)
);
let promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 3 complete"), 1500)
);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All tasks completed:", results);
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });

//   4. Handling First Completed Promise with Promise.race()
let fastTask = new Promise((resolve) =>
  setTimeout(() => resolve("Fast Task Done"), 1000)
);
let slowTask = new Promise((resolve) =>
  setTimeout(() => resolve("Slow Task Done"), 3000)
);

Promise.race([fastTask, slowTask])
  .then((result) => {
    console.log("First task completed:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

//   5. Converting Promises to Async/Await (Better Readability)
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetched Data");
    }, 2000);
  });
}

async function getData() {
  console.log("Fetching...");
  let data = await fetchData(); // Waits for fetchData() to complete
  console.log(data);
}

getData();
