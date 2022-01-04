async function handleFormSubmit(event) {
  event.preventDefault();
  const email_login = document.querySelector("#email-login").value.trim();
  const password_login = document.querySelector("#password-login").value.trim();
  const response = await fetch(`/login`, {
    method: "POST",
    body: JSON.stringify({
      email_login,
      password_login,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log in.");
  }
}

// Event
document.querySelector(".login-form").addEventListener("submit", handleFormSubmit);
