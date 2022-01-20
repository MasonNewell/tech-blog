async function handleSignIn() {
  // event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();
  const response = await fetch("/login", {
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
    document.location.replace("/blog");
  } else {
    alert("Failed to log in.");
  }
}

// const handleSignIn = async((event) => {
//   event.preventDefault();
//   const email = document.querySelector("#email-login").value.trim();
//   const password = document.querySelector("#password-login").value.trim();
//   if (email && password) {
//   }
// });

// Event
document.querySelector(".signup-btn").addEventListener("click", handleSignIn);
// document.querySelector(".sign-in").addEventListener("click", handleSignIn);
