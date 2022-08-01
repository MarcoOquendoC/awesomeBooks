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
}

addBtn.addEventListener('click', addBook);