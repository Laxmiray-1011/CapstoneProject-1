// Function to load and Add header
function loadHeader() {
    fetch('/Header.html') // Load the header HTML file
        .then(response => response.text())
        .then(html => {
            document.getElementById('header').innerHTML = html; // Add the header into the designated div
        });
}

// Function to load and Add footer
function loadFooter() {
    fetch('/Footer.html') // Load the footer HTML file
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer').innerHTML = html; // Add the footer into the designated div
        });
}

// Use DOMContentLoaded event listener to ensure the DOM is fully loaded before Adding header and footer
document.addEventListener('DOMContentLoaded', function() {
    loadHeader(); // Call the function to load and Add the header
    loadFooter(); // Call the function to load and Add the footer
});
