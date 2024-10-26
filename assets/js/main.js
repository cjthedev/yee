document.querySelector('.overlay').addEventListener('click', function() {
    // Unblur the video
    const video = document.getElementById('backgroundVideo');
    video.style.filter = 'none';

    // Unmute the video
    video.muted = false;

    // Hide the overlay text
    this.classList.add('hide');

    // Show the "Misto" text and image
    const content = document.getElementById('content');
    content.classList.add('show');
});

// Tooltip hover effect
const mistoImage = document.querySelector('.misto-image');
const tooltip = document.querySelector('.tooltip');

mistoImage.addEventListener('mouseenter', function() {
    tooltip.style.opacity = '1';
    tooltip.style.visibility = 'visible';
});

mistoImage.addEventListener('mouseleave', function() {
    tooltip.style.opacity = '0';
    tooltip.style.visibility = 'hidden';
});
