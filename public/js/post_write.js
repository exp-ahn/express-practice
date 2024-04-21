document.addEventListener('DOMContentLoaded', function () {
  const titleInput = document.querySelector('.item_title');
  const contentInput = document.querySelector('.item_content');
  const submit_btn = document.getElementById('submit_btn');

  function checkTitle() {
    const title = titleInput.value;

    if (title == '') {
      submit_btn.style.backgroundColor = '#ACA0EB';
      return false;
    } else {
      // submit_btn.style.backgroundColor = '#'
      return true;
    }
  }

  function checkContent() {
    const content = contentInput.value;

    if (content == '') {
      submit_btn.style.backgroundColor = '#ACA0EB';
      return false;
    } else {
      return true;
    }
  }

  function isValid() {
    const titleValid = checkTitle();
    const contentValid = checkContent();

    if (titleValid && contentValid) {
      submit_btn.style.backgroundColor = '#7F6AEE';
      submit_btn.disabled = false;
    } else {
      submit_btn.style.backgroundColor = '#ACA0EB';
    }
  }

  titleInput.addEventListener('input', function () {
    checkTitle();
    isValid();
  });

  contentInput.addEventListener('input', function () {
    checkContent();
    isValid();
  });
});
