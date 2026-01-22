// Array of product objects
const cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 },
    { name: "Headphones", price: 2000, quantity: 1 }
];

// Button click event
document.getElementById("calcBtn").addEventListener("click", calculateBill);

function calculateBill() {
    let totalPrice = 0;

    // Loop to calculate total price
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price * cart[i].quantity;
    }

    console.log("Total price before discount:", totalPrice);

    // if-else for discount
    let discount = 0;
    if (totalPrice >= 50000) {
        discount = totalPrice * 0.20; // 20% discount
    } else if (totalPrice >= 20000) {
        discount = totalPrice * 0.10; // 10% discount
    }

    let finalAmount = totalPrice - discount;
    console.log("Discount applied:", discount);
    console.log("Final amount after discount:", finalAmount);

    // switch case for payment mode
    let paymentMode = "UPI"; // Change to CASH / CARD / UPI

    switch (paymentMode) {
        case "CASH":
            console.log("Payment Mode: Cash");
            break;
        case "CARD":
            console.log("Payment Mode: Credit/Debit Card");
            break;
        case "UPI":
            console.log("Payment Mode: UPI");
            break;
        default:
            console.log("Invalid payment mode");
    }

    console.log("Payment successful. Thank you for shopping!");
    console.log("--------------------------------------------");
}
