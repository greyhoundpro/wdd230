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


// SPOTLIGHT Containers


const url1 = 'https://greyhoundpro.github.io/wdd230/chamber/json/data.json';

async function getBusinessData() {
    const response = await fetch(url1);
    const data = await response.json();
    displayBusiness1(data.business);
}

getBusinessData();

const displayBusiness1 = (businesses) => {
    const spotlight = document.querySelector('#spotlight');

    businesses.forEach((business) => {
        if (business.status != 'gold') {
            return;
        }
        if (business.status == 'gold') {

            let link = document.createElement('a');
            link.classList.add('spotlink');
            link.setAttribute('target', '_blank');
            let picture = document.createElement('picture');
            let compLogo = document.createElement('img'); 
            compLogo.classList.add('spotlight-img')
            picture.appendChild(compLogo);
            let compName = document.createElement('h2'); 
            let slogan = document.createElement('p');
            let overlay = document.createElement('div');
            overlay.classList.add('spotlight-overlay');


            
            link.appendChild(picture);
            link.appendChild(overlay);

            overlay.appendChild(slogan);
            overlay.appendChild(compName);
            

            // Contents

            link.href = `${business.website}`;
            compName.textContent = `${business.company}`;
            slogan.textContent = `${business.slogan}`;


            compLogo.setAttribute('src', business.logo);
            compLogo.setAttribute('alt', `Company logo of ${business.company}`);
            compLogo.setAttribute('loading', 'lazy');
            compLogo.setAttribute('width', '120');
            compLogo.setAttribute('height', '120');


            spotlight.appendChild(link);
            return;
        }
        
        
        
    });

        



}
