/*
  filename: complex_code.js

  This code is a complex and elaborate implementation of a simplified Online Shopping Cart application.
  It includes various features like adding products to the cart, removing products from the cart, 
  calculating total price, applying discounts, and validating the order.

  This code is meant to showcase a professional and creative approach to building an e-commerce system.

  NOTE: This code is not fully functional and is for demonstration purposes only.
*/

// Global Variables
let products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 24.99 },
  { id: 3, name: 'Product 3', price: 37.50 },
  // ... more products
];

let cart = [];

// Functions

/**
 * Function to add a product to the shopping cart
 * @param {number} productId - The ID of the product to be added
 */
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    cart.push(product);
    console.log(`Product ${product.name} added to cart.`);
  } else {
    console.log(`Product with ID ${productId} not found.`);
  }
}

/**
 * Function to remove a product from the shopping cart
 * @param {number} productId - The ID of the product to be removed
 */
function removeFromCart(productId) {
  const index = cart.findIndex((p) => p.id === productId);
  if (index !== -1) {
    const removedProduct = cart.splice(index, 1)[0];
    console.log(`Product ${removedProduct.name} removed from cart.`);
  } else {
    console.log(`Product with ID ${productId} not found in cart.`);
  }
}

/**
 * Function to calculate the total price of all products in the cart
 * @returns {number} - The total price of all products in the cart
 */
function calculateTotalPrice() {
  let totalPrice = 0;
  cart.forEach((product) => {
    totalPrice += product.price;
  });
  return totalPrice;
}

/**
 * Function to apply a discount to the total price
 * @param {number} discount - The discount percentage (e.g., 20 for 20% discount)
 * @returns {number} - The discounted total price
 */
function applyDiscount(discount) {
  const totalPrice = calculateTotalPrice();
  const discountedPrice = totalPrice - (totalPrice * discount) / 100;
  return discountedPrice;
}

/**
 * Function to validate the order before making a purchase
 * @returns {boolean} - True if the order is valid, otherwise false
 */
function validateOrder() {
  // Validate cart items, quantities, payment, etc.
  // Perform validation logic here

  // Simulating a valid order for demonstration
  return true;
}

// Usage

addToCart(1); // Add Product 1 to cart
addToCart(2); // Add Product 2 to cart
removeFromCart(1); // Remove Product 1 from cart
addToCart(3); // Add Product 3 to cart

console.log(`Total Price: $${calculateTotalPrice()}`);
console.log(`Discounted Price: $${applyDiscount(10)}`);

if (validateOrder()) {
  console.log('Order is valid. Proceed to checkout.');
} else {
  console.log('Order is not valid. Please review your cart.');
}

// More code here...
// ... Add more features, implement UI, etc.