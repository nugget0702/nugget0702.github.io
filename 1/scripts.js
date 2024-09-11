// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image switching functionality
const imageButtons = document.querySelectorAll('.image-buttons button');
const mainImage = document.getElementById('main-image');

imageButtons.forEach(button => {
    button.addEventListener('click', function() {
        const imgUrl = this.getAttribute('data-img');
        mainImage.src = imgUrl;
    });
});
