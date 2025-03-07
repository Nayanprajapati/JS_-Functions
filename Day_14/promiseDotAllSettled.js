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
        .catch((error) =>
          reject(` Error fetching ${endpoint}: ${error.message}`)
        ); // Reject on failure
    }, delay); // Simulated delay
  });
};

// Main function to fetch cart data using Promise.allSettled()
async function fetchCartData() {
  try {
    // API Endpoints
    const cartsEndpoint = "/carts"; // Fetch all carts
    const singleCartEndpoint = "/carts/1"; // Fetch a single cart (Cart ID: 1)

    // Fetch all data with artificial delays
    const results = await Promise.allSettled([
      fetchWithDelay(cartsEndpoint, 1500), // Fetch all carts (1.5s delay)
      fetchWithDelay(singleCartEndpoint, 7000), // Fetch single cart (2s delay)
    ]);

    // Logging all results
    results.forEach((result, index) => {
      const apiName = index === 0 ? "🛒 All Carts" : " Single Cart (ID:1)";
      if (result.status === "fulfilled") {
        console.log(`${apiName} (Success):`, result.value);
      } else {
        console.error(`${apiName} (Failed):`, result.reason);
      }
    });
  } catch (error) {
    console.error(" Unexpected Error:", error);
  }
}

// Execute the function
fetchCartData();
