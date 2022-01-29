const handleDelete = async (event) => {
  const id = event.target.id;
  const response = await fetch(`/dashboard`, {
    method: "DELETE",
    body: JSON.stringify({
      id,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update blog");
  }
};

document.querySelector(".del-btn").addEventListener("click", handleDelete);
