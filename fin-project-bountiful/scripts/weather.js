const day = new Date();
const today = day.getDay();
const days3 = [];
daysOfWeek(today, days3);


const url = 'https://api.openweathermap.org/data/2.5/forecast?id=5334223&appid=e375ffcf162eb1292ef6ec40581db610&units=imperial';

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
const wDescription = document.querySelector('#wDescription');
const humidity = document.querySelector('#humidity');
const temp1 = document.querySelector('#temp1');
const temp2 = document.querySelector('#temp2');
const temp3 = document.querySelector('#temp3');
const fday1 = document.querySelector('#dayOfWeek1');
const fday2 = document.querySelector('#dayOfWeek2');
const fday3 = document.querySelector('#dayOfWeek3');

function displayResults(weatherjson) {
    const tempF = weatherjson.list[0].main.temp;
    const tempC = (tempF - 32) * 5/9;

    const desc = weatherjson.list[0].weather[0].description;
    const humid = weatherjson.list[0].main.humidity;
    const tem1 = weatherjson.list[6].main.temp;
    const tem2 = weatherjson.list[14].main.temp;
    const tem3 = weatherjson.list[22].main.temp;
    


    temperature.textContent = `${Math.floor(tempC)} \u00B0C`;
    wDescription.textContent = desc;
    humidity.textContent = humid + '%';
    temp1.textContent = farenheitToCelsius(tem1);
    temp2.textContent = farenheitToCelsius(tem2);
    temp3.textContent = farenheitToCelsius(tem3);
    fday1.textContent = days3[0];
    fday2.textContent = days3[1];
    fday3.textContent = days3[2];
    
}

function farenheitToCelsius(tempF) {
    let result = (tempF - 32) * 5/9 ;
    return Math.floor(result) + "\u00B0C";
}

function daysOfWeek(day1, daysarray) {
    var day = new Date();
    let week = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    );

    for(i = 0; i <= 2; i++) {
        daysarray[i] = week[(day.getDay() + 1 + i) % 7];
    }
}
