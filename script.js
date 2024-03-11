class Book {
    constructor(title, author, pages, genre) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.genre = genre;
    }
  }
  
  const bookList = [];
  
  document.getElementById('addBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value);
    const genre = document.getElementById('genre').value;
    if (title && author && !isNaN(pages) && genre) {
      const book = new Book(title, author, pages, genre);
      bookList.push(book);
      displayBooks(bookList);
      document.getElementById('addBookForm').reset();
    } else {
      alert('Please fill in all fields with valid data.');
    }
  });
  
  document.getElementById('searchTitle').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredBooks = bookList.filter(book => book.title.toLowerCase().includes(searchTerm));
    displayBooks(filteredBooks);
  });
  
  function displayBooks(books) {
    const bookListContainer = document.getElementById('bookList');
    bookListContainer.innerHTML = '';
    if (books.length > 0) {
      books.forEach(book => {
        const bookInfo = document.createElement('div');
        bookInfo.classList.add('book-info');
        bookInfo.innerHTML = `<h3>${book.title}</h3>
                             <p><strong>Author:</strong> ${book.author}</p>
                             <p><strong>Pages:</strong> ${book.pages}</p>
                             <p><strong>Genre:</strong> ${book.genre}</p>`;
        bookListContainer.appendChild(bookInfo);
      });
    } else {
      bookListContainer.innerHTML = '<p>No books found.</p>';
    }
  }
  