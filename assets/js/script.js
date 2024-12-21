// Активная страница
const navLinks = document.querySelectorAll('nav ul li a.page-link');
const currentURL = window.location.href;

navLinks.forEach(link => {
    if (link.href === currentURL) {
        link.classList.add('active');
    }
});

/*Модалка для блока "Примеры наших работ" */

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

/*Модалка для страницы "Наши кейсы" */

document.addEventListener('DOMContentLoaded', function() {
    // Modal window
    const openModalButtons = document.querySelectorAll('.cases-open-modal-btn');
    const closeModalButton = document.querySelector('.cases-close-modal-btn');
    const modal = document.getElementById('videoModal');
    const modalVideo = modal.querySelector('.cases-modal-video');

    openModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const caseItem = this.closest('.cases-item');
            const videoSrc = caseItem.getAttribute('data-video');
            const posterSrc = caseItem.getAttribute('data-poster');

            modalVideo.src = videoSrc;
            modalVideo.poster = posterSrc;
            modal.style.display = 'flex';
            modalVideo.play()
        });
    });

    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none';
        modalVideo.pause()
        modalVideo.currentTime = 0;
    });
    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('cases-modal')) {
            event.target.style.display = 'none';
            modalVideo.pause()
            modalVideo.currentTime = 0;
        }
    });
    // Category filter
    const categoryButtons = document.querySelectorAll('.cases-category-btn');
    const caseItems = document.querySelectorAll('.cases-item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            caseItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});