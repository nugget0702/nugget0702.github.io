// Function to display the image in overlay
function showImage(imgElement) {
    var overlay = document.getElementById('overlay');
    var overlayImage = document.getElementById('overlay-image');
    
    overlayImage.src = imgElement.src; // Set the clicked image source to overlay
    overlay.style.display = 'flex'; // Show the overlay
}

// Function to hide the overlay
function hideImage() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none'; // Hide the overlay
}
