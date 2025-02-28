// 1. Basic Example: Repeated Message Every 2 Seconds
/*
setInterval() repeatedly calls the sayHello function every 2 seconds.
This will continue indefinitely until stopped.
*/
function sayHello() {
  console.log("Hello, Anshu!");
}
// Call `sayHello` every 2 seconds (2000 milliseconds)
setInterval(sayHello, 2000);

// 2. Using setInterval() with Anonymous Function
setInterval(function () {
  console.log("This message repeats every second!");
}, 1000);

// 3. Stopping the Interval with clearInterval()
/*
The message is logged every second, but after 5 seconds,
 clearInterval() stops the interval using the intervalId.
*/
let intervalId = setInterval(function () {
  console.log("This will stop after 5 seconds.");
}, 1000);

// Stop the interval after 5 seconds
setTimeout(function () {
  clearInterval(intervalId);
  console.log("Interval stopped.");
}, 5000);

// 6. Creating a Stopwatch with setInterval()

/*
This JavaScript stopwatch starts counting seconds and minutes, updating every second using setInterval(). 
It works just like a real stopwatch—when the seconds reach 60, they reset to 0, and a minute is added. 
The time is displayed in a clean minutes:seconds format, making sure single-digit seconds show up properly 
(like 0:05 instead of 0:5). The stopwatch runs until it reaches 5 minutes, 
then it stops automatically using clearInterval(). Since the function inside setInterval() 
runs every 1000 milliseconds (1 second),it keeps time accurately, making it perfect for things like timers or countdowns.
*/
let seconds = 0;
let minutes = 0;
let stopwatch = setInterval(function () {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }

  console.log(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`);

  // Stop after 5 minutes (300 seconds)
  if (minutes >= 5) {
    clearInterval(stopwatch);
    console.log("Stopwatch stopped.");
  }
}, 1000); // Every 1 second
