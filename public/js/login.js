// CREATE NEW
async function handleSignIn() {
  const name = document.querySelector("#name").value.trim();
  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();
  const response = await fetch("/login/new", {
    method: "POST",
    body: JSON.stringify({
      name,
      username,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/blogs");
  } else {
    alert("Failed to create account.");
  }
}

// SIGN IN
async function handleLogin() {
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  if (username && password) {
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/blogs");
    }
  } else {
    alert("Failed to Log in.");
  }
}

// Event
document.querySelector(".signup-btn").addEventListener("click", handleSignIn);
document.querySelector(".login-btn").addEventListener("click", handleLogin);
