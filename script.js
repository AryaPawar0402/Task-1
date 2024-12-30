// Get references to the checkbox and the menu
const check = document.getElementById('check');
const menu = document.querySelector('ul');

// Add an event listener to the checkbox to toggle the menu visibility
check.addEventListener('change', function() {
    if (check.checked) {
        // Show the menu by changing its position when the checkbox is checked
        menu.style.left = '0';
    } else {
        // Hide the menu by moving it off-screen when unchecked
        menu.style.left = '-100%';
    }
});