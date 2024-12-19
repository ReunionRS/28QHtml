document.addEventListener('DOMContentLoaded', function() {
    const videoLinks = document.querySelectorAll('.case-item-link');
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    const closeBtn = document.querySelector('.close');

    videoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const videoUrl = this.getAttribute('data-video');
            videoFrame.src = videoUrl;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        videoFrame.src = "";
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            videoFrame.src = "";
            modal.style.display = 'none';
        }
    });
});