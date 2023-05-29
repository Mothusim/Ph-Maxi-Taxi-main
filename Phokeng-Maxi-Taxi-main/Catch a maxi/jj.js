// Function to validate the form inputs
function validateForm() {
    // Get the form inputs
    var name = document.getElementById("driverName").value;
    var email = document.getElementById("emailId").value;
    var password = document.getElementById("createPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Validate name (required)
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    // Validate email (required and format)
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate password (required and length)
    if (password === "") {
        alert("Please enter a password.");
        return false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }

    // Validate confirm password (required and match)
    if (confirmPassword === "") {
        alert("Please confirm your password.");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Form validation passed
    return true;
}

// Function to validate email format
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Event listener for form submission
document.getElementById("maxi").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    if (validateForm()) {
        // Form validation passed, perform login or registration logic here

        // Example: Perform login
        var email = document.getElementById("emailId").value;
        var password = document.getElementById("createPassword").value;

        // Perform login logic using the email and password
        // ...
        alert("Logged in successfully!");
    }
});

// Event listener for login form submission
document.getElementById("maxiLogin").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Perform login logic here

    // Example: Perform login
    var name = document.getElementById("nameDriver").value;
    var password = document.getElementById("password").value;

    // Perform login logic using the name and password
    // ...
    alert("Logged in successfully!");
});
