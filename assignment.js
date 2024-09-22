/*
You are developing the error handling mechanism for an online shopping cart application. The
application allows users to add products to their cart and proceed to checkout. Implement error
handling to address different types of errors that might occur during the shopping process.

    Task 1: Add Product to Cart Function
    Create a function addToCart that simulates adding a product to the shopping cart. The function should take
    the product details (name, price, quantity) as parameters and throw errors under certain conditionst
        
        If the product name is not provided, throw an error indicating "Product name is required.
        If the product price is not a positive number, throw an error indicating "Invalid product price.
        If the quantity is not a positive integer, throw an error indicating "Invalid quantity."

    Task 2: Checkout Function
        Create a function checkout that simulates the checkout process. This function should throw an error if the cart
        is empty, indicating "Cart is empty. Add items before checkout."
*/
class ShoppingCart {
    constructor() {
        this.cart = [];
    }

    // Task 1: Add Product to Cart
    addToCart(name, price, quantity) {
        // Error: Product name is required
        if (!name || typeof name !== 'string') {
            throw new Error("Product name is required.");
        }

        // Error: Invalid product price
        if (typeof price !== 'number' || price <= 0) {
            throw new Error("Invalid product price.");
        }

        // Error: Invalid quantity
        if (!Number.isInteger(quantity) || quantity <= 0) {
            throw new Error("Invalid quantity.");
        }

        // Add product to cart
        this.cart.push({ name, price, quantity });
        console.log(`${name} added to cart.`);
    }

    // Task 2: Checkout
    checkout() {
        // Error: Cart is empty
        if (this.cart.length === 0) {
            throw new Error("Cart is empty. Add items before checkout.");
        }

        console.log("Proceeding to checkout with items:", this.cart);
        // Clear the cart after successful checkout
        this.cart = [];
    }
}
const cart = new ShoppingCart();

try {
    // Adding valid item to cart
    cart.addToCart("Laptop", 1200, 2); 
    // The following lines will throw errors:
    cart.addToCart("", 30, 1); // Should throw "Product name is required."
    cart.addToCart("Mouse", -15, 3); // Should throw "Invalid product price."
    cart.addToCart("Keyboard", 50, "abc"); // Should throw "Invalid quantity."

    // Checkout (won't reach this if errors occur before)
    cart.checkout(); // Should throw if no valid items were added
} catch (error) {
    console.error(error.message);
}





/*
2. You are working on a user authentication module for a web application. Implement error handling for the
login process.Create a function login that simulates the user login process. The function should take the
username and password as parameters and throw errors under certain conditions.
' If the username is not provided, throw an error indicating "Username is required."
' If the password is not provided, throw an error indicating "Password is required."
' If the username and password do not match any valid credentials, throw an error indicating "Invalid
username or password."
*/

class Authentication {
    constructor() {
        // Predefined valid credentials (for simulation)
        this.validUsers = {
            user123: "password123",
            user456: "password456"
        };
    }

    // Function to simulate login
    login(username, password) {
        // Error: Username is required
        if (!username) {
            throw new Error("Username is required.");
        }

        // Error: Password is required
        if (!password) {
            throw new Error("Password is required.");
        }

        // Error: Invalid username or password
        if (!this.validUsers[username] || this.validUsers[username] !== password) {
            throw new Error("Invalid username or password.");
        }

        // Login successful
        console.log("Login successful!");
    }
}
const auth = new Authentication();

try {
    auth.login("user123", "password123"); // Valid login
    auth.login("", "password456"); // Should throw "Username is required."
    auth.login("user456", ""); // Should throw "Password is required."
    auth.login("invalidUser", "invalidPassword"); // Should throw "Invalid username or password."
} catch (error) {
    console.error(error.message);
}





/*
3. You are developing a payment processing module for an e-commerce platform. Implement error
handling for the payment transaction process.Create a function processPayment that simulates
processing a payment transaction. The function should take payment details (amount, card number,
expiration date) as parameters and throw errors under certain conditions.
 If the payment amount is not a positive number, throw an error indicating "Invalid payment amount."
 If the card number is not provided or is not a valid credit card number, throw an error indicating "Invalid
 card number."
 If the expiration date is not provided or is in the past, throw an error indicating "Invalid expiration date."
*/

class PaymentProcessor {
    constructor() {}

    // Function to simulate payment processing
    processPayment(amount, cardNumber, expirationDate) {
        // Error: Invalid payment amount
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error("Invalid payment amount.");
        }

        // Error: Invalid card number (simple check, more complex validation can be added)
        if (!cardNumber || !/^\d{16}$/.test(cardNumber)) {
            throw new Error("Invalid card number.");
        }

        // Error: Invalid expiration date
        const currentDate = new Date();
        const [expMonth, expYear] = expirationDate.split("/").map(Number);

        // Check if expiration date is a valid format and is in the future
        if (!expirationDate || 
            expMonth < 1 || 
            expMonth > 12 || 
            new Date(expYear, expMonth - 1) < currentDate) {
            throw new Error("Invalid expiration date.");
        }

        // If all validations pass, simulate successful payment
        console.log("Payment processed successfully!");
    }
}
const paymentProcessor = new PaymentProcessor();

try {
    paymentProcessor.processPayment(100, "1234567812345678", "12/2025"); // Valid transaction
    paymentProcessor.processPayment(-50, "1234567812345678", "12/2025"); // Should throw "Invalid payment amount."
    paymentProcessor.processPayment(100, "1234", "12/2025"); // Should throw "Invalid card number."
    paymentProcessor.processPayment(100, "1234567812345678", "05/2022"); // Should throw "Invalid expiration date."
} catch (error) {
    console.error(error.message);
}



// **********************************************