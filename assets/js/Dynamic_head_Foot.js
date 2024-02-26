

// Function to load header HTML content dynamically
function loadHeader() {
    // Fetch the header HTML file
    fetch('Header.html')
        .then(response => response.text())
        .then(html => {
            // Select the header element by its class name
            const headerElement = document.querySelector('.header');
            // Set the innerHTML of the header element to the fetched HTML content
            headerElement.innerHTML = html;
        });
}

// Call the function to load the header
loadHeader();

// Function to load footer HTML content dynamically
function loadFooter() {
    // Fetch the footer HTML file
    fetch('Footer.html')
        .then(response => response.text())
        .then(html => {
            // Select the footer element by its class name
            const footerElement = document.querySelector('.footer');
            // Set the innerHTML of the footer element to the fetched HTML content
            footerElement.innerHTML = html;
        });
}

// Call the function to load the footer
loadFooter();

