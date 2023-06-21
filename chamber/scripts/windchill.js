// ------------ WEATHER API ------------- 

const url = 'https://api.openweathermap.org/data/2.5/weather?id=1731685&appid=e375ffcf162eb1292ef6ec40581db610&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data  = await response.json();
            console.log(data); //this is for testing the call
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();


const temperature = document.querySelector('#temperature');
const windSpeed = document.querySelector('#windSpeed');
const weatherIcon = document.querySelector('#weather-icon');
const wDescription = document.querySelector('#wDescription')

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

// Function for the API

function displayResults(weatherData) {
    const speed = weatherData.wind.speed;
    const tempF = weatherData.main.temp;
    const tempC = (tempF - 32) * 5/9;

    temperature.textContent = `${Math.floor(tempC)} \u00B0C`;
    windSpeed.textContent = `${speed} mph`;

    const windChill = getwindChill(tempF, speed);
    const windCh = Math.round(windChill * 100)/ 100;

    if (tempF <= 50 & speed > 3) {
        showWindChill(windCh);
    } 
    else {
        NA();
        }
    

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = weatherData.weather[0].description;
    wDescription.textContent = desc;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

}

