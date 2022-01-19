// Deletes a blog
const handleDelete = async (event) => {
  const id = event.target.id;
  const response = await fetch(`/blogs/${id}`, {
    method: "DELETE",
  });
};

// Update card
async function updatePost(event) {
  // event.preventDefault();
  const id = event.target.id;
  const post_title = document.querySelector("#post_title").value.trim();
  const post_contents = document.querySelector("#post_contents").value.trim();
  const response = await fetch(`/blogs/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      post_title,
      post_contents,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/blogs");
  } else {
    alert("Failed to update blog");
  }
}

document.querySelector(".update-btn").addEventListener("click", updatePost);
document.querySelector(".del-btn").addEventListener("click", handleDelete);
