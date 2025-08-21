const regex_test = new RegExp("^[A-Za-z]+_[A-Za-z]+_\\d+$");
const regex_test2 = new RegExp("^[A-Za-z]+-[A-Za-z]+-\\d+$");

function hideCommentsByUser() {
  document.querySelectorAll("shreddit-comment").forEach(comment => {
    const author = comment.getAttribute("author");
    if (regex_test.test(author) || regex_test2.test(author)) {
      comment.style.display = "none";
    }
  });
}

hideCommentsByUser();

const observer = new MutationObserver(hideCommentsByUser);
observer.observe(document.body, { childList: true, subtree: true });
