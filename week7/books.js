// books.js

import { addToCart } from "./cart.js";
import { updateCartUI } from "./ui.js";
import { cart } from "./cart.js";

export const books = [
  {
    title: "JavaScript Essentials",
    author: "John Doe",
    price: 499,
    availability: "in stock",
    url: "https://www.oreilly.com/library/view/javascript-the-definitive/9781491952023/"
  },
  {
    title: "Learn React",
    author: "Jane Smith",
    price: 699,
    availability: "in stock",
    url: "https://react.dev/"
  },
  {
    title: "Node.js in Action",
    author: "Mark White",
    price: 799,
    availability: "in stock",
    url: "https://www.manning.com/books/node-js-in-action"
  },
  {
    title: "Modern Web Design",
    author: "Emily Davis",
    price: 599,
    availability: "out of stock",
    url: "https://www.smashingmagazine.com/guides/web-design/"
  }
];

// Function to display books
export function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  books.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.innerHTML = `
      <div>
        <a href="${book.url}" target="_blank">${book.title}</a><br>
        <small>by ${book.author}</small><br>
        <span>₹${book.price}</span><br>
        ${book.availability === "out of stock" 
          ? `<span class="out-of-stock">Out of Stock</span>` 
          : ""}
      </div>
      ${book.availability === "in stock" 
        ? `<button class="add-btn" data-index="${index}">Add to Cart</button>` 
        : ""}
    `;

    bookList.appendChild(bookDiv);
  });

  // Add event listeners to Add to Cart buttons
  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.getAttribute("data-index");
      addToCart(books[idx]);
      updateCartUI(cart);
    });
  });
}
