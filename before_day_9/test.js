// // // count
// // const countNum = (num = 1) => {
// //     while (num <= 10) {
// //       console.log(num);
// //       num++;
// //     }
// //   };

// // countNum();

// // const toTen = (num = 1) => {
// //   if (num >= 10) return;
// //   console.log(num);
// //   num++;
// //   toTen(num);
// // };

// // toTen();

// // The Fibonacci Sequence

// // const Fibonacci = (num, array = [0, 1]) => {
// //   while (num > 2) {
// //     const [nextToLast, last] = array.slice(-2);
// //     array.push(nextToLast + last);
// //     num -= 1;
// //   }
// //   return array;
// // };
// // console.log(Fibonacci(12));

// // const Fibonacci = (num, array => [0 , 1]) = 1 {
// //     if (num <= 2) return array;
// //     const [nextToLast, last] = arrya.slice(-2);
// //     return Fibonacci(num-1,[...array, nextToLast + last]);

// // }

// // Fibonacci(12);

// // const fib = (num, array = [0, 1]) => {
// //   if (num <= 2) return array;
// //   const [nextToLast, last] = array.slice(-2);
// //   return fib(num - 1, [...array, nextToLast + last]);
// // };

// // console.log(fib(32));

// // const Fibonacci = (num, array = [0, 1]) => {
// //   // ✅ Fix: Correct function syntax
// //   if (num <= 2) return array;

// //   const [nextToLast, last] = array.slice(-2); // ✅ Fix: Correct spelling "array"

// //   return Fibonacci(num - 1, [...array, nextToLast + last]); // ✅ Fix: Proper spacing and recursion
// // };

// // console.log(Fibonacci(12)); // ✅ Fix: Store and log the result

// // let obj = {
// //   name: "Nayan",
// //   age: 20,
// //   gender: "male",
// //   greet: function () {
// //     console.log("Hello " + this.name);
// //   },
// // };
// // obj.greet();
// // console.log(obj);
// // console.log(typeof "42");

// const obj = {
//   name: "Nayan",
// };
// let user = obj;
// user.name = "ram";
// console.log(obj);

// // using reduce
// let array = [100, 200, 300, 400];
// let answ = array.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(answ);





