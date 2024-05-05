document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelector('.nav-links');
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    const videoFrames = document.querySelectorAll('.video-iframe');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            window.scrollTo({
                top: target.offsetTop - nav.offsetHeight,
                behavior: 'smooth'
            });

            if (window.innerWidth <= 768) {
                navLinks.classList.remove('show');
                nav.classList.remove('expanded');
            }
        });
    });
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = '#222';
        } else {
            nav.style.backgroundColor = '#444';
        }
    });

    videoFrames.forEach(frame => {
        frame.addEventListener('click', function () {
            if (frame.requestFullscreen) {
                frame.requestFullscreen();
            } else if (frame.mozRequestFullScreen) { /* Firefox */
                frame.mozRequestFullScreen();
            } else if (frame.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                frame.webkitRequestFullscreen();
            } else if (frame.msRequestFullscreen) { /* IE/Edge */
                frame.msRequestFullscreen();
            }
        });
    });
});
