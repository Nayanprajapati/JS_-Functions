// Function to simulate delayed API response with success/failure
const fetchWithDelay = (url, delay = 2000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to fetch: ${url}`);
          }
          return res.json();
        })
        .then(resolve)
        .catch((error) => {
          reject(`Error fetching ${url}: ${error.message}`);
        });
    }, delay); // Simulated delay
  });
};

// Main function to fetch User Data with Promises & Delay
async function fetchUserData() {
  try {
    // Base API URL
    const baseAPI = "https://dummyjson.com/users";

    // Fetch User, Posts, and Todos with setTimeout delay using Promise.all
    const promises = [
      fetchWithDelay(`${baseAPI}/1`, 2000), // Fetch User with 2s delay
      fetchWithDelay(`${baseAPI}/1/posts`, 1500), // Fetch Posts with 1.5s delay
      fetchWithDelay(`${baseAPI}/1/todos`, 3000), // Fetch Todos with 3s delay
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
