const handleDelete = async (event) => {
  //   const id = document.querySelector=
  //   event.preventDefault();
  alert("jss");
  const id = event.target.id;
  const response = await fetch(`/blogs/${id}`, {
    method: "DELETE",
  });
};

document.querySelector(".del-btn").addEventListener("click", handleDelete);
