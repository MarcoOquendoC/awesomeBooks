let bookCollection = [];
const tree = document.createDocumentFragment();
const addBtn = document.getElementById('addBtn');
const bookList = document.getElementById('bookList');

function addBook() {
  const inputTitle = document.getElementById('bookTitle').value;
  const inputAuthor = document.getElementById('author').value;

  const div = document.createElement('div');
  div.classList.add('book');

  const bookTitle = document.createElement('p');
  bookTitle.classList.add('bookInfo');
  bookTitle.textContent = inputTitle;
  div.appendChild(bookTitle);

  const author = document.createElement('p');
  author.classList.add('bookInfo');
  author.textContent = inputAuthor;
  div.appendChild(author);

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove');
  removeBtn.textContent = 'Remove';
  div.appendChild(removeBtn);

  const hr = document.createElement('hr');
  div.appendChild(hr);

  tree.appendChild(div);
  bookList.appendChild(tree);

  const bookObj = {
    title: inputTitle,
    author: inputAuthor,
  };
  bookCollection.push(bookObj);

  localStorage.setItem('data', JSON.stringify(bookCollection));
}

function addBookFromStorage(titleP, authorP) {
  const div = document.createElement('div');
  div.classList.add('book');

  const bookTitle = document.createElement('p');
  bookTitle.classList.add('bookInfo');
  bookTitle.textContent = titleP;
  div.appendChild(bookTitle);

  const author = document.createElement('p');
  author.classList.add('bookInfo');
  author.textContent = authorP;
  div.appendChild(author);

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove');
  removeBtn.textContent = 'Remove';
  div.appendChild(removeBtn);

  const hr = document.createElement('hr');
  div.appendChild(hr);

  tree.appendChild(div);
  bookList.appendChild(tree);
}

function removeBook(e) {
  const rmvBtns = document.getElementsByClassName('remove');
  e.target.parentElement.remove();

}

addBtn.addEventListener('click', addBook);

document.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('remove')) {
    removeBook(e);
  }
});

window.addEventListener('load', () => {
  if (localStorage.getItem('data')) {
    bookCollection = JSON.parse(localStorage.getItem('data'));
  }

  if (bookCollection) {
    for (let i = 0; i < bookCollection.length; i += 1) {
      addBookFromStorage(bookCollection[i].title, bookCollection[i].author);
    }
  }
});
