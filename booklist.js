console.dir(document); //examine the document object in the console//
console.log(document.domain); //logs the domain of the document
console.log(document.URL); //logs the URL of the document
console.log(document.title);
document.title = "DOM Manipulation";//changes the title of the document
console.log(document.head); //logs the head element of the document
console.log(document.body); //logs the body element of the document

// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('book-form');
  const bookList = document.getElementById('book-list');

  // Handle form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    if (title && author) {
      addBook(title, author);
      form.reset();
    }
  });

  // Add book to the list
  function addBook(title, author) {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `<span><strong>${title}</strong> by ${author}</span> <button class="remove">Remove</button>`;
    bookList.appendChild(li);
  }

  // Remove book from the list
  bookList.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove')) {
      e.target.parentElement.remove();
    }
  });
});
