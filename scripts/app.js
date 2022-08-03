/* eslint-disable no-alert */
import {UI} from './ui.js';
import {Book} from './book.js';
import {Storage} from './storage.js'

// Event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: add book
document.getElementById('addBtn').addEventListener('click', () => {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('author').value;

  if (title === '' || author === '') {
    alert('Please fill in both fields!');
  } else {
    const book = new Book(title, author);
    UI.addBookToList(book);

    UI.clearFields();
    Storage.addBook(book);
  }
});

// Event: remove book
document.getElementById('bookList').addEventListener('click', (e) => {
  UI.removeBook(e.target);

  Storage.deleteBook(e.target.parentElement.previousElementSibling.textContent);
});
