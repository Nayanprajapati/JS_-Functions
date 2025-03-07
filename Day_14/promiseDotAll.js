// Base API URL
const baseURL = "https://dummyjson.com";

// Function to simulate delayed API response with success/failure
const fetchWithDelay = (endpoint, delay = 2000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`${baseURL}${endpoint}`) // Append endpoint to baseURL
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to fetch: ${endpoint}`);
          }
          return res.json();
        })
        .then(resolve) // Resolve the successful response
        .catch((error) => {
          reject(` Error fetching ${endpoint}: ${error.message}`);
        });
    }, delay); // Simulated delay
  });
};

// Main function to fetch User Data with Promises & Delay
async function fetchUserData() {
  try {
    // API Endpoints
    const userEndpoint = "/users/1"; // User Details
    const postsEndpoint = "/users/1/posts"; // User Posts
    const todosEndpoint = "/users/1/todos"; // User To-Dos

    // Fetch all data with artificial delays
    const promises = [
      fetchWithDelay(userEndpoint, 2000), // Fetch User with 2s delay
      fetchWithDelay(postsEndpoint, 1500), // Fetch Posts with 1.5s delay
      fetchWithDelay(todosEndpoint, 3000), // Fetch Todos with 3s delay
    ];

    // Execute all requests in parallel
    const [user, posts, todos] = await Promise.all(promises);

    // Logging the fetched data
    console.log(" User Details:", user);
    console.log(" User Posts:", posts);
    console.log(" User Todos:", todos);
  } catch (error) {
    console.error(" Error fetching data:", error);
  }
}

// Execute the function
fetchUserData();
