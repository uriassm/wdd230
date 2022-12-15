// Current weather. 
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weatherIcon');
const weatherCondition = document.querySelector('#condition');
const humidity = document.querySelector('#humidity');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=66f5817e96ae9a0749af6c1fc7301604'

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
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
    currentTemp.innerHTML = `Temperature: <strong>${weatherData.main.temp.toFixed(0)} &#8457;</strong>`;
    weatherCondition.innerHTML = `Condition: <strong>${weatherData.weather[0].description}</strong>`;
    humidity.innerHTML = `Humidity: <strong>${weatherData.main.humidity.toFixed(0)}%</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

  }


