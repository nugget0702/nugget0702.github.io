// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image and info switching functionality
const imageButtons = document.querySelectorAll('.image-buttons button');
const mainImage = document.getElementById('main-image');
const imageInfo = document.getElementById('image-info');

imageButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Update the main image
        const imgUrl = this.getAttribute('data-img');
        mainImage.src = imgUrl;

        // Update the image info
        const name = this.getAttribute('data-name');
        const g1 = this.getAttribute('data-g1');
        const g2 = this.getAttribute('data-g2');
        imageInfo.innerHTML = `<b>${name}</b> [Translational Vector for G channel: ${g1}] [Translational Vector for R channel: ${g2}]`;
    });
});
