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
