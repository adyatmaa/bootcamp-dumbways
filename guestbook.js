const form = document.getElementById("comment-form");

const comments = [];

const renderComment = () => {
  const commentList = document.getElementById("comment-list");

  let commentHtml = "";

  for (const item of comments) {
    commentHtml += `
      <li class="list-group-item">
        <span class="text-capitalize fw-semibold badge text-bg-primary">${item.name}</span>
        <span class="text-info">just say</span>
        <span class="fs-6">${item.comment}</span>
       </li>
      `;
  }
  commentList.innerHTML = commentHtml;
};
renderComment();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  const newComment = {
    id: comments.length + 1,
    name: name,
    comment: comment,
  };
  comments.push(newComment);

  console.log(newComment);
  renderComment();

  form.reset();
  document.getElementById("name").focus();
});
