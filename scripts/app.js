/* eslint-disable no-alert */
import {
  UI,
} from './ui.js';
import {
  Book,
} from './book.js';
import {
  Storage,
} from './storage.js';

const s1 = document.getElementById('list');
const s2 = document.getElementById('new');
const s3 = document.getElementById('contact');
const b1 = document.getElementById('navList');
const b2 = document.getElementById('navNew');
const b3 = document.getElementById('navContact');

// Nav Links Events
b1.addEventListener('click', () => {
  s1.classList.remove('hide');
  s2.classList.add('hide');
  s3.classList.add('hide');
  b1.classList.add('active');
  b2.classList.remove('active');
  b3.classList.remove('active');
});

b2.addEventListener('click', () => {
  s1.classList.add('hide');
  s2.classList.remove('hide');
  s3.classList.add('hide');
  b1.classList.remove('active');
  b2.classList.add('active');
  b3.classList.remove('active');
});

b3.addEventListener('click', () => {
  s1.classList.add('hide');
  s2.classList.add('hide');
  s3.classList.remove('hide');
  b1.classList.remove('active');
  b2.classList.remove('active');
  b3.classList.add('active');
});

// Event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: add book
document.getElementById('addBtn').addEventListener('click', () => {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('author').value;

  if (!(title === '' || author === '')) {
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

// Sets the datetime in website
const fecha = document.getElementById('fecha');

function setDate() {
  const date = new Date();
  fecha.innerHTML = date.toLocaleString('en-US');
}

setDate();
setInterval(setDate, 1000);
