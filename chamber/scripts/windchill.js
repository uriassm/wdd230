// let temperature = document.querySelector('#temperature');
// let windSpeed = document.querySelector('#windSpeed');
// let temperatureNumber = Number(temperature.innerHTML);
// let windSpeedNumber = Number(windSpeed.innerHTML)   ;
// let windChillSelector = document.querySelector('#windChill');

// let calcWindChill = 0

// if ((temperatureNumber <= 50) && (windSpeedNumber > 3)) {
//     calcWindChill = 35.74 + (0.6215 * temperatureNumber) - (35.75 * (windSpeedNumber ** 0.16)) + (0.4257 * (temperatureNumber * (windSpeedNumber ** 0.16)));
//     windChillSelector.innerHTML = Math.round(calcWindChill);
// }
// else {
//     windChillSelector.innerHTML = "N/A";
// }

const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const windSpeed = document.querySelector('#windSpeed');
const windChill = document.querySelector('#windChill');
const weatherCondition = document.querySelector('#weatherCondition');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=East Los Angeles &units=imperial&appid=66f5817e96ae9a0749af6c1fc7301604'

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(1)}`;
    weatherCondition.innerHTML = `${weatherData.weather[0].description}`

    if ((weatherData.main.temp <= 50) && (weatherData.wind.speed > 3)) {
        windChill.innerHTML = `${weatherData.main.feels_like.toFixed(1)}`;
    }
    else {
        windChill.innerHTML = "N/A";
    }
    

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

  }
