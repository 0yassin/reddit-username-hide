const regex_test = /^[A-Za-z]+_[A-Za-z]+_\d+$/;
const regex_test2 = /^[A-Za-z]+-[A-Za-z]+-\d+$/;

function hidePostsByUser(optionA, optionB) {
  document.querySelectorAll("shreddit-post").forEach(post => {
    const author = post.getAttribute("author");

    if (optionA && regex_test.test(author)) {
      post.style.display = "none";
    }

    if (optionB && regex_test2.test(author)) {
      post.style.display = "none";
    }
  });
}

chrome.storage.sync.get(['optionA', 'optionB'], (data) => {
  hidePostsByUser(data.optionA, data.optionB);

  const observer = new MutationObserver((mutationsList) => {
    hidePostsByUser(data.optionA, data.optionB);
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
