const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('.logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 1008 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }

};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);