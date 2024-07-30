let users = [];
let currentUser = null;
let orderedItems = [];

function addToCart(item) {
    if (!currentUser) {
        alert("Please log in to place an order.");
        return;
    }
    orderedItems.push(item);
    displayOrderedItems();
    alert(item + " has been added to your cart.");
}

function displayOrderedItems() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';

    orderedItems.forEach((item) => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerText = item;
        orderList.appendChild(orderItem);
    });
}

function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        currentUser = user;
        alert("Logged in as " + username);
        document.getElementById('login-status').innerText = "Welcome, " + username + "! You can now place orders.";
        enableOrderButtons();
    } else {
        alert("Invalid username or password.");
    }

    // Clear the input fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

    return false; // Prevent form submission
}

function registerUser() {
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    if (users.find(user => user.username === username)) {
        alert("Username already exists.");
    } else {
        users.push({ username, password });
        alert("Registered as " + username);
    }

    // Clear the input fields
    document.getElementById('new-username').value = '';
    document.getElementById('new-password').value = '';

    return false; // Prevent form submission
}

function enableOrderButtons() {
    const buttons = document.querySelectorAll('.menu-item button');
    buttons.forEach(button => button.disabled = false);
}

function submitRating() {
    const dish = document.getElementById('rating-dish').value;
    const score = document.getElementById('rating-score').value;

    if (score < 1 || score > 5) {
        alert("Please enter a rating between 1 and 5.");
        return false;
    }

    const ratingItem = document.createElement('div');
    ratingItem.className = 'rating-item';
    ratingItem.innerText = `${dish}: ${score} stars`;
    document.getElementById('ratings-list').appendChild(ratingItem);

    // Clear the input fields
    document.getElementById('rating-dish').value = '';
    document.getElementById('rating-score').value = '';

    alert("Rating submitted for " + dish);

    return false; // Prevent form submission
}
