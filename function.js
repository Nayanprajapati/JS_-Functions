// Function to check voting eligibility
const canVote = (age) => {
    if (age >= 18) {
      return true; // Eligible to vote
    } else {
      return false; // Not eligible to vote
    }
  };
  
  // Test the function with given ages
  console.log(canVote(17)); // false
  console.log(canVote(20)); // true
  console.log(canVote(65)); // true
  
  
  
  
  
  
  // Global Scope
  let globalVar = "I am global!";
  
  function testScope() {
      // Function Scope
      let functionVar = "I am inside a function!";
      
      if (true) {
          // Block Scope
          let blockVar = "I am inside a block!";
          console.log(blockVar); //  Accessible inside block
      }
  
      console.log(globalVar);  //  Accessible inside function
      console.log(functionVar); //  Accessible inside function
  
      // console.log(blockVar); //  ERROR: blockVar is not accessible here
  }
  
  // Call function to test scope
  testScope();
  
  console.log(globalVar); //  Accessible globally
  // console.log(functionVar); //  ERROR: Not accessible outside function
  
