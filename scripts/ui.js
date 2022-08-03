// UI Class
import {Storage} from './storage.js'

class UI {
  static displayBooks() {
    const books = Storage.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(b) {
    const bookList = document.getElementById('bookList');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>"${b.title}" by ${b.author}</td>
      <td><button type='button' class="remove">Remove</button></td>`;

    bookList.appendChild(row);
  }

  static removeBook(e) {
    if (e.classList.contains('remove')) {
      e.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.getElementById('bookTitle').value = '';
    document.getElementById('author').value = '';
  }
}

export {UI};
