let temperature = document.querySelector('#temperature');
let windSpeed = document.querySelector('#windSpeed');
let temperatureNumber = Number(temperature.innerHTML);
let windSpeedNumber = Number(windSpeed.innerHTML)   ;
let windChillSelector = document.querySelector('#windChill');

let calcWindChill = 0

if ((temperatureNumber <= 50) && (windSpeedNumber > 3)) {
    calcWindChill = 35.74 + (0.6215 * temperatureNumber) - (35.75 * (windSpeedNumber ** 0.16)) + (0.4257 * (temperatureNumber * (windSpeedNumber ** 0.16)));
    windChillSelector.innerHTML = Math.round(calcWindChill);
}
else {
    windChillSelector.innerHTML = "N/A";
}