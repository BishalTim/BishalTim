function openVideoModal(videoId) {
    // Set the video source
    var videoUrl = "https://www.youtube.com/embed/" + videoId;
    document.getElementById("modalVideo").src = videoUrl;

    // Show the modal
    $('#videoModal').modal('show');

    // Attach an event listener to the modal to stop the video when clicking outside
    $('#videoModal').on('click', function (e) {
        if (e.target === this) { // Check if the click occurred on the modal itself, not its children
            closeVideoModal();
        }
    });
}

function closeVideoModal() {
    // Stop the video when the modal is closed
    var videoPlayer = document.getElementById("modalVideo");
    videoPlayer.src = "";

    // Remove the click event listener
    $('#videoModal').off('click');

    // Hide the modal
    $('#videoModal').modal('hide');
}
function hideLoader() {
    setTimeout(function () {
        // Hide the loader
        var loader = document.getElementById('loader-wrapper');
        loader.style.opacity = '0';

        // Show the content after a short delay (adjust the delay as needed)
        setTimeout(function () {
            loader.style.display = 'none';
        }, 500); // 0.5 seconds delay
    }, 1000); // 1 seconds delay
}

// Call hideLoader when the window has finished loading
window.addEventListener('load', hideLoader);