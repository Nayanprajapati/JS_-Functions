const employees = [
  { id: 1, name: "Alice", department: "IT", age: 25, salary: 5000 },
  { id: 2, name: "Bob", department: "HR", age: 30, salary: 6000 },
  { id: 3, name: "Charlie", department: "IT", age: 27, salary: 5500 },
  { id: 4, name: "David", department: "Finance", age: 35, salary: 7500 },
  { id: 5, name: "Eve", department: "HR", age: 29, salary: 6200 },
];

// Extract Names (.map())
const employeeNames = employees.map((emp) => emp.name);
console.log(employeeNames);

// Filter Employees in IT Department (.filter())
const itEmployees = employees.filter((emp) => emp.department === "IT");
console.log(itEmployees);

//  Find First HR Employee (.find())
const hrEmployee = employees.find((emp) => emp.department === "HR");
console.log(hrEmployee);

// Calculate Total Salary (.reduce())
const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(totalSalary);

//  Sort Employees by Age (.sort())
const sortedEmployees = employees.sort((a, b) => a.age - b.age);
console.log(sortedEmployees);
