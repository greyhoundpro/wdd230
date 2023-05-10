const d = new Date();
const year = d.getFullYear();
document.querySelector("#year").innerHTML = year;

const options = {month: 'numeric', day: 'numeric', year: 'numeric'};
const date = new Date(document.lastModified);
document.querySelector('#modified-date').textContent = date.toLocaleDateString('en-US', options);
document.querySelector('#modified-time').textContent = new Date(document.lastModified).toLocaleTimeString('en-US');

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('.logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);
