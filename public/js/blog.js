// Deletes a blog
const handleDelete = async (event) => {
  const id = event.target.id;
  const response = await fetch(`/blogs/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    document.location.replace("/blogs");
  } else {
    alert("Failed to update blog");
  }
};

// Update card
async function updatePost(event) {
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
    document.location.replace(`/blogs/${id}`);
  } else {
    alert("Failed to update blog");
  }
}

// Add Comment to Blog
async function addComment(event) {
  const id = event.target.id;
  const comment = document.querySelector("#comment").value.trim();
  const response = await fetch(`/blogs/${id}`, {
    method: "POST",
    body: JSON.stringify({
      comment,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace(`/blogs/${id}`);
  } else {
    alert("Failed to add comment");
  }
}

document.querySelector(".add-comment-btn").addEventListener("click", addComment);
document.querySelector(".update-btn").addEventListener("click", updatePost);
document.querySelector(".del-btn").addEventListener("click", handleDelete);
