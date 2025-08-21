document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(['optionA', 'optionB'], (data) => {
    document.getElementById('optionA').checked = data.optionA || false;
    document.getElementById('optionB').checked = data.optionB || false;
  });
});

document.getElementById('saveBtn').addEventListener('click', () => {
  const optionA = document.getElementById('optionA').checked;
  const optionB = document.getElementById('optionB').checked;

  chrome.storage.sync.set({ optionA, optionB }, () => {
    alert('succesfully saved options');
  });
});
