// Book class
// Represents a book with title, author, pages, and read status
class Book {
    constructor(title, author, pages, isRead) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.isRead = isRead;
    }
  
    // A method to toggle read status
    toggleRead() {
      this.isRead = !this.isRead;
    }
}

// Library class
// Collects books in an array with methods for adding, removing, and listing books
class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    this.books.push(newBook);
    console.log(`Added: ${title}`);
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }

  displayLibrary() { 
    const libraryContainer = document.getElementById("library-container");

    // Clear any existing content
    // caused issues last time. View own solution
    libraryContainer.innerHTML = "";
    
    this.books.forEach((book, index) => { 

      // Book card creation using Template Literal
      const bookCard = `
      <div class="book-card" data-index="${index}">
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.isRead ? "Read" : "Not Read"}</p>
        <button class="status-btn">
          ${book.isRead ? "Read" : "Not Read"}
        </button>
          <button class="remove-btn">Remove</button>
      </div>
      `;
      
      libraryContainer.insertAdjacentHTML('beforeend', bookCard)
      
    }); 

  }

  init() {
    const container = document.getElementById('library-container');
    const form = document.getElementById('new-book-form');
    
    //Form Submission
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent default behaviour of reloading the page

      // Form input values
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const pages = document.getElementById('pages').value;
      const isRead = document.getElementById('isRead').checked;

      this.addBook(title, author, pages, isRead);
      this.displayLibrary();

      // clear form for next input
      form.reset();
  });

    // Remove book
    container.addEventListener('click', (e) => {
      // Check if the clicked element is a remove button
      if (e.target.classList.contains('remove-btn')) {
        // Get the index from the parent card's data-attribute
        const index = e.target.closest('.book-card').dataset.index;
        
        this.removeBook(index);   // Remove from data
        this.displayLibrary();    // Refresh the UI
      }
    });



  }
}
// --- Implementation ---
const myLibrary = new Library();
myLibrary.init(); //Set up event listeners
myLibrary.addBook("The Hobbit", "J.R.R. Tolkien", 295, false);
myLibrary.addBook("Atomic Habits", "James Clear", 320, true);

myLibrary.displayLibrary(); //Display the library