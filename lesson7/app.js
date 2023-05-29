// For header and footer
const d = new Date();
const year = d.getFullYear();
document.querySelector("#year").innerHTML = year;

const options = {month: 'numeric', day: 'numeric', year: 'numeric'};
const date = new Date(document.lastModified);
document.querySelector('#modified-date').textContent = date.toLocaleDateString('en-US', options);
document.querySelector('#modified-time').textContent = new Date(document.lastModified).toLocaleTimeString('en-US');


let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
});