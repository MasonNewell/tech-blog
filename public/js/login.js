const handleFormSubmit = async (event) => {
  event.preventDefault();
  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();
  const response = await fetch("/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    res.render("/blog");
  } else {
    alert("Failed to log in.");
  }
};

const handleSignIn = async((event) => {
  event.preventDefault();
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  if (email && password) {
  }
});

// Event
document.querySelector(".signup-form").addEventListener("submit", handleFormSubmit);
document.querySelector(".sign-in").addEventListener("submit", handleSignIn);
