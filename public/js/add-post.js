async function formHandler(event) {
  event.preventDefault();
  const post_title = document.querySelector("#post_title").value;
  const post_contents = document.querySelector("#post_contents").value;
  const post_creator = document.querySelector("#post_creator").value;
  //   fetch request to add a new blog post
  const response = await fetch(`/`, {
    method: "POST",
    body: JSON.stringify({
      post_title,
      post_contents,
      post_creator,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add post");
  }
}

document.querySelector(".new-blog-form").addEventListener("submit", formHandler);
