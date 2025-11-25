"use strict";

// Book Class
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    // Issue the book
    issueBook() {
        if (this.isIssued) {
            console.log(`❌ Book already issued: ${this.title}`);
        } else {
            this.isIssued = true;
            console.log(`✅ Book issued successfully: ${this.title}`);
        }
    }

    // Return the book
    returnBook() {
        if (!this.isIssued) {
            console.log(`❌ Book is not issued: ${this.title}`);
        } else {
            this.isIssued = false;
            console.log(`🔄 Book returned successfully: ${this.title}`);
        }
    }

    getDetails() {
        return `${this.title} by ${this.author} | ISBN: ${this.isbn} | Issued: ${this.isIssued}`;
    }
}

// Array of Book objects
const library = [
    new Book("JavaScript Basics", "John Doe", "ISBN001"),
    new Book("Data Structures", "Alan Smith", "ISBN002"),
    new Book("Operating Systems", "Andrew Tanenbaum", "ISBN003"),
    new Book("Database Systems", "Hector Garcia", "ISBN004")
];

// Display available books (not issued)
console.log("📚 Available Books:");
library
    .filter(book => !book.isIssued)
    .forEach(book => console.log(" - " + book.getDetails()));

// Function to issue a book by ISBN
function issueBookByISBN(isbn) {
    const foundBook = library.find(book => book.isbn === isbn);

    if (!foundBook) {
        console.log("❌ Book not found with ISBN:", isbn);
    } else {
        foundBook.issueBook();
    }
}

// TESTING
console.log("\n🔍 Trying to issue book with ISBN002");
issueBookByISBN("ISBN002");

console.log("\n📚 Available Books After Issuing:");
library
    .filter(book => !book.isIssued)
    .forEach(book => console.log(" - " + book.getDetails()));
