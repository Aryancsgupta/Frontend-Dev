class Library {
  constructor() {
    this.books = [];
  }

  // Add new book
  addBook(book) {
    this.books.push(book);
  }

  // Get only available books
  getAvailableBooks() {
    return this.books.filter(book => book.available === true);
  }

  // Search first book by author
  searchByAuthor(author) {
    return this.books.find(book => book.author === author);
  }
}

// Create library object
const library = new Library();

// Add 3 books
library.addBook({ title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", available: true });
library.addBook({ title: "Ikigai", author: "Héctor García", available: false });
library.addBook({ title: "Atomic Habits", author: "James Clear", available: true });

console.log("Available Books:", library.getAvailableBooks());
console.log("Search by Author (James Clear):", library.searchByAuthor("James Clear"));
