// function hello() {
//     console.log("hello")
//     hello()
// }

// hello();

// function coding(num) {
//   if (num === 7) {
//     console.log("doing the work");
//     return;
//   } else {
//     coding(num +1);
//     console.log("the work is done");
//     return;
//   }
// }

// coding(5);

// Recursive function to list all files
function listFiles(folder) {
  if (folder.type === "file") {
    console.log("📄 " + folder.name);
  } else if (folder.type === "folder") {
    console.log("📁" + folder.name);
    folder.children.forEach((child) => listFiles(child)); // Recursive call
  }
}

const fileSystem = {
  name: "Root",
  type: "folder",
  children: [
    { name: "file1.txt", type: "file" },
    { name: "file2.txt", type: "file" },
    {
      name: "Documents",
      type: "folder",
      children: [
        { name: "resume.pdf", type: "file" },
        { name: "notes.txt", type: "file" },
        {
          name: "Projects",
          type: "folder",
          children: [
            { name: "project1.js", type: "file" },
            { name: "project2.html", type: "file" },
          ],
        },
      ],
    },
  ],
};

listFiles(fileSystem);


// count number
const countNum = (num = 1) => {
  while (num <= 10) {
    console.log(num);
    num++;
  }
};


// fibonacci
const fib = (num, array = [0, 1]) => {
  if (num <= 2) return array;
  const [nextToLast, last] = array.slice(-2);
  return fib(num - 1, [...array, nextToLast + last]);
};

console.log(fib(12));