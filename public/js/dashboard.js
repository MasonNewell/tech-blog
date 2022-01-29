// Delete Post
const handleDelete = async (event) => {
  const id = event.target.id;
  console.log(id);
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

// Update Post
async function updatePost(event) {
  const id = event.target.id;
  const post_title = document.querySelector("#post_title").value.trim();
  const post_contents = document.querySelector("#post_contents").value.trim();
  const response = await fetch(`/blogs/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      post_title,
      post_contents,
      id,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update blog");
  }
}

document.querySelector(".update-btn").addEventListener("click", updatePost);
document.querySelector(".del-btn").addEventListener("click", handleDelete);
