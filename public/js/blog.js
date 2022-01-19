// Deletes a blog
const handleDelete = async (event) => {
  const id = event.target.id;
  const response = await fetch(`/blogs/${id}`, {
    method: "DELETE",
  });
};

// Update card
const updatePost = async (event) => {
  event.preventDefault();
  const post_title = document.querySelector('input[name="post_title"]').value.trim();
  const post_contents = document.querySelector('input[name="post_content"]').value.trim();
  const id = event.target.id;
  const response = await fetch(`/blogs/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      post_title,
      post_contents,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    alert("hereee");
    document.location.replace("/blogs");
  } else {
    alert("Failed to update blog");
  }
  alert("jsebd");
};

document.querySelector(".update-btn").addEventListener("submit", updatePost);
document.querySelector(".del-btn").addEventListener("click", handleDelete);
