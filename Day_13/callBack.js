// 1. Basic Callback Example
function greet(name, callback) {
  console.log("hello, " + name);
}

function sayGoodBye() {
  console.log("good bye");
}

greet("nayan", sayGoodBye);
sayGoodBye();

// 2. Callback with a Delay (Using setTimeout)
function fetchData(callback) {
  console.log("fetching data....");
  setTimeout(() => {}, callback("data received"), 2000);
}

function processedData(data) {
  console.log("processing data", data);
}

fetchData(processedData);
