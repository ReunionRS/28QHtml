const caseVideos = document.querySelectorAll('.case-video iframe');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const fullScreenVideo = document.getElementById('fullScreenVideo');

    caseVideos.forEach(video => {
    video.addEventListener('click', (event) => {
        modal.style.display = 'flex';
        modalContent.style.display = 'flex';
        fullScreenVideo.src = video.src;

    });
});

    function closeModal() {
    modal.style.display = 'none';
    modalContent.style.display = 'none';
    fullScreenVideo.src = ""; // Очистка iframe
}



    modal.addEventListener('click', (event) => {
    if (event.target === modal){
    closeModal();
}
});

    modalContent.addEventListener('click', function(event){
    event.stopPropagation();
});

