const d = new Date();
const year = d.getFullYear();
document.querySelector("#year").innerHTML = year;

const options = {month: 'long', day: 'numeric', year: 'numeric'};
const options1 = {weekday: 'long', day: 'numeric', month: 'long',  year: 'numeric'};
const date = new Date(document.lastModified);
const currentDate = new Date();
document.querySelector('#date1').textContent = currentDate.toLocaleDateString('en-UK', options1);
document.querySelector('#modified-date').textContent = date.toLocaleDateString('en-US', options);
document.querySelector('#modified-time').textContent = new Date(document.lastModified).toLocaleTimeString('en-US');



// Mobile menu toggle action
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
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

// Showing Banner on Mondays and Tuesdays
const social = document.querySelector('.social-menu')
const banner = document.querySelector('.banner');
if (d.getDay() == 1 || d.getDay() == 2) {
    banner.style.display = "block";
    social.classList.toggle('is-active');
    menu.style.top = "40%";
}

// Number of Site Visits

let numberOfVisits = localStorage.getItem("numberOfVisits");
let previousVisit = localStorage.getItem("lastVisit");

if (!numberOfVisits) {
    numberOfVisits = 0;
}
numberOfVisits++;

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const Year = day * 365;

const lastVisit = Date.now();
localStorage.setItem("numberOfVisits", numberOfVisits);
localStorage.setItem("lastVisit", lastVisit);
document.querySelector('.visit').innerHTML = "This is your visit #" + numberOfVisits + ".";

let daysSinceLast = Math.round((lastVisit - previousVisit) / day);

if (numberOfVisits >= 2) {
    document.querySelector('#daysSinceLast').innerHTML = "Days since last visit: " + daysSinceLast + ".";
}
if (numberOfVisits < 2) {
    document.querySelector('.visit').innerHTML = "Thanks for visiting!"
}

