"use strict";

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const seats = document.getElementById("seats");

    let valid = true;

    // ------------ NAME VALIDATION ------------
    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(name.value)) {
        showError(name, "Name must contain only alphabets");
        valid = false;
    } else showSuccess(name);

    // ------------ EMAIL VALIDATION ------------
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email.value)) {
        showError(email, "Invalid email format");
        valid = false;
    } else showSuccess(email);

    // ------------ SEATS VALIDATION (1 to 10) ------------
    const seatCount = Number(seats.value);
    if (seatCount < 1 || seatCount > 10) {
        showError(seats, "Seats must be between 1 and 10");
        valid = false;
    } else showSuccess(seats);

    if (!valid) return;

    // ------------ IF VALID → CREATE BOOKING OBJECT ------------

    const booking = {
        name: name.value,
        email: email.value,
        seats: seatCount
    };

    // Display ticket
    displayTicket(booking);
});

// -------- Helper functions ----------
function showError(input, message) {
    input.classList.add("invalid");
    input.classList.remove("valid");
    input.nextElementSibling.textContent = message;
}

function showSuccess(input) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    input.nextElementSibling.textContent = "";
}

function displayTicket(booking) {
    const ticketDiv = document.getElementById("ticket");

    ticketDiv.innerHTML = `
        <h3>🎟 Ticket Details</h3>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Seats:</strong> ${booking.seats}</p>
        <p><strong>Status:</strong> Booked Successfully ✔️</p>
    `;
}
