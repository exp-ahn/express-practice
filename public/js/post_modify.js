document.addEventListener('DOMContentLoaded', function () {
  const url = new URLSearchParams(window.location.search);
  const title = document.querySelector('.item_title');
  const content = document.querySelector('.item_content');
  const imageName = document.querySelector('.file_btn span');
  const form = document.getElementById('post_modify_form');

  fetch('../posts.json')
    .then((response) => response.json())
    .then((data) => {
      const urlnum = url.get('num');
      const post = data.posts[urlnum - 1];

      title.value = post.post_title;
      content.value = post.post_content;
      imageName.textContent = post.file_id;
    });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const urlnum = url.get('num');
    window.location.href = `/post_detail?num=${urlnum}`;
  });

  commentModify.addEventListener('', function () {});
});
