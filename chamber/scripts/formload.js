const options2 = {month: 'long', day: 'numeric', year: 'numeric'};
const dateToday = new Date();
const hiddenp = document.querySelector('#hidDateAndTime');
hiddenp.value = dateToday.toLocaleDateString('en-US', options2) + " " + dateToday.toLocaleTimeString('en-US');

