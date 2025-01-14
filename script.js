
const categoryButton = document.getElementById("categorylg");
const categoriesDropdown = document.querySelector(".categories");

// Show dropdown on hover
categoryButton.addEventListener("mouseenter", () => {
    categoriesDropdown.style.display = "block";
});

// Hide dropdown when mouse leaves the button or dropdown
categoryButton.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!categoriesDropdown.matches(":hover")) {
            categoriesDropdown.style.display = "none";
        }
    }, 200); // Delay for smoother UX
});

categoriesDropdown.addEventListener("mouseenter", () => {
    categoriesDropdown.style.display = "block";
});

categoriesDropdown.addEventListener("mouseleave", () => {
    categoriesDropdown.style.display = "none";
});

// mobile
// Get references to hamburger and mobilelinks
const hamburger = document.querySelector('.hamburger');
const mobileLinks = document.querySelector('.mobilelinks');

// Toggle mobile menu visibility
hamburger.addEventListener('click', () => {

    mobileLinks.style.display =
        mobileLinks.style.display === 'flex' ? 'none' : 'flex';
});

document.addEventListener('click', (event) => {
    if (
        mobileLinks.style.display === 'flex' && // Check if it's visible
        !mobileLinks.contains(event.target) && // Ensure the click is outside mobileLinks
        !hamburger.contains(event.target) // Ensure the click is not on the hamburger
    ) {
        mobileLinks.style.display = 'none';
    }
});


const categories = document.querySelector('.categories');

// Toggle mobile menu visibility
hamburger.addEventListener('click', () => {
    mobileLinks.classList.toggle('show');
});

// Toggle categories sidebar visibility


const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdown = document.querySelector('.dropdown');
const dropdownLinks = document.querySelectorAll('.dropdown-menu a'); // Get all dropdown links

dropdownBtn.addEventListener('click', () => {
    dropdown.classList.toggle('open');
});

// Hide the dropdown when a link is clicked
dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
        dropdown.classList.remove('open');
        mobileLinks.style.display = 'none';
    });
});

// mobileLinks.addEventListener('click', () => {
//     mobileLinks.style.display = 'none';
// })




