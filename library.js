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
}
// --- Implementation ---
const myLibrary = new Library();
myLibrary.addBook("The Hobbit", "J.R.R. Tolkien", 295, false);
myLibrary.addBook("Atomic Habits", "James Clear", 320, true);

myLibrary.displayLibrary();