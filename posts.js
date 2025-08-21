const regex_test = new RegExp("^[A-Za-z]+_[A-Za-z]+_\\d+$");
const regex_test2 = new RegExp("^[A-Za-z]+-[A-Za-z]+-\\d+$");


function hidePostsByUser() {
  document.querySelectorAll("shreddit-post").forEach(comment => {
    const author = comment.getAttribute("author");
    if (regex_test.test(author) || regex_test2.test(author)) {
      comment.style.display = "none";
    }
  });
}

hidePostsByUser();

const observer = new MutationObserver(hidePostsByUser);
observer.observe(document.body, { childList: true, subtree: true });
