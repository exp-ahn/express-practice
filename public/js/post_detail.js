document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('post_modal');
  const comment_modal = document.getElementById('comment_modal');
  const commentInput = document.getElementById('comment_box');
  const submit_btn = document.querySelector('.comment_submit');
  const form = document.getElementById('comment_form');
  const comment_modify_btn = document.getElementById('comment_modify_button');
  const url = new URLSearchParams(window.location.search);
  const modalOk = document.getElementById('post_ok');
  const modalDelete = document.getElementById('post_delete');
  const commentModalOk = document.getElementById('comment_ok');
  const commentModalDelete = document.getElementById('comment_delete');

  function formatNumber(number) {
    if (number >= 100000) {
      return (number / 1000).toFixed(0) + 'k';
    } else if (number >= 10000) {
      return (number / 1000).toFixed(0) + 'k';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(0) + 'k';
    } else {
      return number.toString();
    }
  }

  function deleteButton() {
    modal.style.display = 'block';
  }

  function checkComment() {
    const comment = commentInput.value;

    if (comment == '') {
      submit_btn.style.backgroundColor = '#ACA0EB';

      submit_btn.disabled = true;
      return false;
    } else {
      submit_btn.style.backgroundColor = '#7F6AEE';
      submit_btn.disabled = false;
      return true;
    }
  }

  function commentModify(comment_content) {
    commentInput.value = comment_content;
    submit_btn.textContent = '댓글 수정';
  }

  function commentDelete() {
    comment_modal.style.display = 'block';
  }

  fetch('../posts.json')
    .then((response) => response.json())
    .then((data) => {
      const urlnum = url.get('num');
      const posts = data.posts[urlnum - 1];

      const post_detail = document.createElement('div');

      // 좋아요,댓글,조회수 format
      const comment = formatNumber(posts.comment_count);
      const hit = formatNumber(posts.hits);

      post_detail.innerHTML = `
      <div class="detail_title">
          <p>${posts.post_title}</p>
        </div>
        <div class="detail_sub">
          <div>
            <img src="/image/images.jpeg" alt="" />
          </div>
          <div>
            <p class="comment_user">${posts.nickname}</p>
          </div>
          <div class="detail_date">
            <p>${posts.created_at}</p>
          </div>
          <div class="button">
            <button
              type="button"
              onclick="location.href='/post_modify?num=${urlnum}'"
            >
              수정
            </button>
            <button type="button" onclick="deleteButton()">삭제</button>
          </div>
        </div>
        <div class="main">
          <img />
          <p>${posts.post_content}</p>
          <div class="hit_comment">
            <div class="hit">
              <div>${hit}</div>
              <div>조회수</div>
            </div>
            <div class="hit">
              <div>${comment}</div>
              <div>댓글</div>
            </div>
          </div>
        </div>
      `;

      document.getElementById('post_detail').appendChild(post_detail);
    });

  fetch('../post_comments.json')
    .then((response) => response.json())
    .then((data) => {
      const comments = data.comments;

      comments.forEach((comment) => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
        <div class="comment_list">
          <div>
            <div class="comment_info">
              <div>
                <img src="${comment.profile_image_path}" alt="" />
              </div>
              <div>
                <p class="comment_user">${comment.nickname}</p>
              </div>
              <div>
                <p class="detail_date">${comment.created_at}</p>
              </div>
            </div>
            <div class="comment_detail">
              <p>${comment.comment_content}</p>
            </div>
          </div>
          <div class="comment_button">
            <button id="comment_modify_button" type="button" onclick="commentModify('${comment.comment_content.replace(/'/g, "\\'")}')">수정</button>
            <button id="comment_delete_button" type="button" onclick="commentDelete()">삭제</button>
          </div>
      </div>
                `;

        document.getElementById('commet_zip').appendChild(card);
      });
    })
    .catch((error) => {
      console.error('post json error발생', error);
    });

  //이벤트 리스너 start

  commentInput.addEventListener('input', function () {
    checkComment();
  });

  form.addEventListener('submit', function () {
    alert('댓글 등록 성공');
  });

  modalOk.addEventListener('click', function () {
    alert('게시글 삭제완료');
  });

  modalDelete.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  commentModalOk.addEventListener('click', function () {
    alert('댓글 삭제완료');
  });

  commentModalDelete.addEventListener('click', function () {
    comment_modal.style.display = 'none';
  });
});
