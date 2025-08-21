const regex_test = /^[A-Za-z]+_[A-Za-z]+_\d+$/;
const regex_test2 = /^[A-Za-z]+-[A-Za-z]+-\d+$/;

function hideCommentsByUser(optionA, optionB) {
  document.querySelectorAll("shreddit-comment").forEach(comment => {
    const author = comment.getAttribute("author");

    if (optionA && regex_test.test(author)) {
      comment.style.display = "none";
    }

    if (optionB && regex_test2.test(author)) {
      comment.style.display = "none";
    }
  });
}

chrome.storage.sync.get(['optionA', 'optionB'], (data) => {
  hideCommentsByUser(data.optionA, data.optionB);

  const observer = new MutationObserver((mutationsList) => {
    hideCommentsByUser(data.optionA, data.optionB);
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
