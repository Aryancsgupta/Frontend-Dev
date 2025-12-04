// Base Class
class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

// Add prototype method
MovieTicket.prototype.printTicket = function () {
  return `Movie: ${this.movieName}, Seat: ${this.seatNo}, Price: ₹${this.price}`;
};

// Child Class
class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

// Create OnlineTicket object
const ticket = new OnlineTicket("Avengers", "A12", 250, 30);

console.log("Total Amount:", ticket.getTotalAmount());

// Calling parent prototype method from child object
console.log(ticket.printTicket());
