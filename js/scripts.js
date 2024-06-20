document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ScrollReveal animations
    ScrollReveal().reveal('.header', { delay: 200, distance: '50px', origin: 'top' });
    ScrollReveal().reveal('#about', { delay: 200, distance: '50px', origin: 'left' });
    ScrollReveal().reveal('#skills', { delay: 200, distance: '50px', origin: 'right' });
    ScrollReveal().reveal('#experience', { delay: 200, distance: '50px', origin: 'bottom' });
    ScrollReveal().reveal('#education', { delay: 200, distance: '50px', origin: 'left' });
    ScrollReveal().reveal('#contact', { delay: 200, distance: '50px', origin: 'right' });
});
