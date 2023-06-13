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


// IntersectionObserver

const imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 0.5, 
    rootMargin: "0px 0px -100px 0px"
}

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};


if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
        if (item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        }
        });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} 
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

