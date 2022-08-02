// Book Class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Storage Class
class Storage {
  static getBooks() {
    let books = [];
    if (localStorage.getItem('data')) {
      books = JSON.parse(localStorage.getItem('data'));
    }

    return books;
  }

  static addBook(b) {
    const books = Storage.getBooks();
    books.push(b);
    localStorage.setItem('data', JSON.stringify(books));
  }

  static deleteBook(textContent) {
    const books = Storage.getBooks();

    books.forEach((book, index) => {
      if (textContent.includes(book.title) && textContent.includes(book.author)) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('data', JSON.stringify(books));
  }
}

// UI Class
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
      <td><a href="#" class="remove">Remove</a></td>`;

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
