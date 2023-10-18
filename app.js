let quantity1 = 1;
const initialPrice1 = 1000000; // Initial price value
let price1 = initialPrice1;

// Function to update the quantity and price display
function updateDisplay() {
    document.getElementById('quantity1').innerText = quantity1;
    document.getElementById('price1').innerText = price1.toLocaleString(); // Format price with commas
}

// Function to increase quantity and price
function increaseQuantity() {
    quantity1++;
    price1 += initialPrice1;
    updateDisplay();
}

// Function to decrease quantity and price
function decreaseQuantity() {
    if (quantity1 > 1) {
        quantity1--;
        price1 -= initialPrice1;
        updateDisplay();
    }
}

// Function to reset quantity and price
function resetQuantity() 
// Function to add to cart (using SweetAlert2)
function addToCart() {
    Swal.fire({
        title: 'Added to Cart!',
        text: 'This item has been added to your cart.',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Go to Cart',
        cancelButtonText: 'Continue Shopping',
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirect to the cart page or implement your cart logic here
        }
    });
}

// Initialize the display on page load
window.addEventListener('load', updateDisplay);
