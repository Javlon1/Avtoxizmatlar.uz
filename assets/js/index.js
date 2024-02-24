// Scroll Up Start
document.addEventListener('DOMContentLoaded', function () {
    const scrollUpButton = document.getElementById('scrollUp');

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const threshold = 100;
        if (scrollY > threshold) {
            scrollUpButton.classList.add('visible');
        } else {
            scrollUpButton.classList.remove('visible');
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', handleScroll);
    scrollUpButton.addEventListener('click', scrollToTop);
});
// Scroll Up end

// nav start
const menu = document.getElementById("menu");
const nav = document.querySelector(".nav__item");
const navLog = document.querySelector(".nav__log");
const opacity = document.querySelector(".opacity");

menu.onclick = () => {
    menu.classList.toggle("openmenu");
    nav.classList.toggle("active_nav");
    navLog.classList.toggle("active_nav");
    opacity.classList.toggle("opacity_act");
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';
};

opacity.onclick = () => {
    menu.classList.remove("openmenu");
    nav.classList.remove("active_nav");
    navLog.classList.remove("active_nav");
    opacity.classList.remove("opacity_act");
    document.body.style.overflow = 'auto';
};
// nav end

// Dropdown Start
document.getElementById("myInput").addEventListener("focus", function () {
    document.getElementById("myDropdown").classList.add("show");
    opacity.classList.add("opacity_act");
    document.body.style.overflow = 'hidden';
});

document.getElementById("myInput").addEventListener("blur", function () {
    document.getElementById("myDropdown").classList.remove("show");
});
// Dropdown End