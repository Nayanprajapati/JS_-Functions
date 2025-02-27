document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent page reload

    // Get user input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    try {
      // Fetch request to DummyJSON API directly
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30, // Optional, defaults to 60
        }),
      });

      const data = await response.json();

      if (response.ok) {
        message.style.color = "green";
        message.textContent = "✅ Login Successful!";
        console.log("User Data:", data);
      } else {
        throw new Error(data.message || "Login failed.");
      }
    } catch (error) {
      message.style.color = "red";
      message.textContent = "❌ " + error.message;
    }
  });
