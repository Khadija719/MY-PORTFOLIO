
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {


    /*==================== sticky navbar ====================*/
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };

    });

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');




};




/*==================== scroll reveal ====================*/
ScrollReveal({
    resert: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});



// Home Section
ScrollReveal().reveal('.home-content h1', { origin: 'left' }); // "Khadija Amir" comes from the left
ScrollReveal().reveal('.home-content h3', { origin: 'right' });  // "Hello, It's Me" comes from the top
ScrollReveal().reveal('.home-content span', { origin: 'right' }); // "AI/Python Developer" from the right
ScrollReveal().reveal('.home-content p', { origin: 'bottom' }); // Lorem ipsum paragraph from the bottom
ScrollReveal().reveal('.home-img', { origin: 'bottom', delay: 400 }); // Profile image comes from the bottom

// About Section
ScrollReveal().reveal('#about h2', { origin: 'top', delay: 300 }); // About Me heading from the top
ScrollReveal().reveal('.education', { origin: 'left', delay: 400 }); // Left-side education from the left
ScrollReveal().reveal('.details', { origin: 'right', delay: 400 }); // Right-side about content from the right

// Services Section
ScrollReveal().reveal('.services h2', { origin: 'top', delay: 200 }); // Services heading from the top
ScrollReveal().reveal('.services-container', { origin: 'bottom', interval: 200 }); // Services appear one by one from the bottom

// Portfolio Section
ScrollReveal().reveal('.portfolio h2', { origin: 'top', delay: 200 }); // Portfolio heading from the top
ScrollReveal().reveal('.portfolio-box', { origin: 'bottom', interval: 200 }); // Portfolio items from the bottom

// Contact Section
ScrollReveal().reveal('.contact h2', { origin: 'top', delay: 200 }); // Contact heading from the top
ScrollReveal().reveal('.contact form', { origin: 'bottom', delay: 400 }); // Contact form from the bottom

// Footer Section
ScrollReveal().reveal('.footer p', { origin: 'left', delay: 200 }); // Footer copyright text
ScrollReveal().reveal('.footer-iconTop', { origin: 'right', delay: 300 }); // Scroll-to-top icon

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['AI/Python Developer', 'Frontend Developer', 'Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
