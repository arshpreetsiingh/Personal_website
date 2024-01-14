document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelector('.nav-links');
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');

    // Toggle navigation menu on burger menu click
    // burgerMenu.addEventListener('click', function () {
    //     navLinks.classList.toggle('show');
    //     nav.classList.toggle('expanded'); // Toggle the 'expanded' class on the top navigation bar
    // });

    // Smooth scrolling
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
                nav.classList.remove('expanded'); // Remove the 'expanded' class on scroll
            }
        });
    });

    // Change navigation background on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = '#222';
        } else {
            nav.style.backgroundColor = '#444';
        }
    });
});
