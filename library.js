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
  
    listBooks() {
      return this.books.map(book => `${book.title} - ${book.isRead ? "Read" : "Not Read"}`);
    }
  }
  
  // --- Implementation ---
  const myLibrary = new Library();
  myLibrary.addBook("The Hobbit", "J.R.R. Tolkien", 295, false);
  myLibrary.addBook("Atomic Habits", "James Clear", 320, true);
  
  console.table(myLibrary.listBooks());