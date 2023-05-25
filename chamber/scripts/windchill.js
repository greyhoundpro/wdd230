const temperature = document.querySelector('#temperature');
const windSpeed = document.querySelector('#windSpeed');

const tempC = parseFloat(temperature.innerText);
const speed = parseFloat(windSpeed.innerText);
const tempF = convertCelsiusToF(tempC);

const windChill = getwindChill(tempF, speed);
const windCh = Math.round(windChill * 100)/ 100;

if (tempF <= 50 & speed > 3) {
    showWindChill(windCh);
} 
else {
    NA();
}

// Functions

// function for windchill
function getwindChill(tempF, speed) {
    let f = 35.74 + 0.6215 * tempF - 35.75 * speed ** 0.16 + 0.4275 * tempF * speed ** 0.16;
    return f;
}

// function for converting celsius to farenheit
function convertCelsiusToF(celsius) {
    return Math.floor(celsius * (9/5) + 32);
}

function NA() {
    const result = document.querySelector('#windChill');
    result.textContent = "N/A";
}

function showWindChill(windCh) {
    const result = document.querySelector('#windChill');
    result.textContent = windCh + " °F";
}