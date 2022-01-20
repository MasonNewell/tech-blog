const logout = async () => {
  const response = await fetch("/logout");
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Unable to logout");
  }
};
document.querySelector("#logout").addEventListener("click", logout);
