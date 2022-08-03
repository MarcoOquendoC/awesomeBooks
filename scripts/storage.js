// Storage Class
export class Storage {
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

export default Storage;
