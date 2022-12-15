// Current weather. 
const forecast1 = document.querySelector('#forecast1');
const forecast2 = document.querySelector('#forecast2');
const forecast3 = document.querySelector('#forecast3');

const dayName1 = document.querySelector('#dayName1');
const dayName2 = document.querySelector('#dayName2');
const dayName3 = document.querySelector('#dayName3');

const dayIcon1 = document.querySelector('#dayIcon1');
const dayIcon2 = document.querySelector('#dayIcon2');
const dayIcon3 = document.querySelector('#dayIcon3');

const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=66f5817e96ae9a0749af6c1fc7301604'

async function apiFetch() {
    try {
      const response = await fetch(urlForecast);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        displayForecast(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayForecast(weatherData) {
    date1 = weatherData.list[3].dt_txt;
    fullDate1 = new Date(date1);
    formattedDate1 = fullDate1.toLocaleDateString()

    date2 = weatherData.list[11].dt_txt;
    fullDate2 = new Date(date2);
    formattedDate2 = fullDate2.toLocaleDateString()

    date3 = weatherData.list[19].dt_txt;
    fullDate3 = new Date(date3);
    formattedDate3 = fullDate3.toLocaleDateString()

    dayName1.innerHTML = `<strong>${formattedDate1}`;
    dayName2.innerHTML = `<strong>${formattedDate2}`;
    dayName3.innerHTML = `<strong>${formattedDate3}`;

    icon1 = `https://openweathermap.org/img/w/${weatherData.list[3].weather[0].icon}.png`
    icon2 = `https://openweathermap.org/img/w/${weatherData.list[11].weather[0].icon}.png`
    icon3 = `https://openweathermap.org/img/w/${weatherData.list[19].weather[0].icon}.png`

    desc1 = weatherData.list[3].weather[0].description;
    desc2 = weatherData.list[11].weather[0].description;
    desc3 = weatherData.list[19].weather[0].description;

    dayIcon1.setAttribute('src', icon1);
    dayIcon2.setAttribute('src', icon2);
    dayIcon3.setAttribute('src', icon3);

    dayIcon1.setAttribute('alt', desc1);
    dayIcon2.setAttribute('alt', desc2);
    dayIcon3.setAttribute('alt', desc3);

    forecast1.innerHTML = `<strong>${weatherData.list[3].main.temp.toFixed(0)} &#8457;</strong>`;
    forecast2.innerHTML = `<strong>${weatherData.list[11].main.temp.toFixed(0)} &#8457;</strong>`;
    forecast3.innerHTML = `<strong>${weatherData.list[19].main.temp.toFixed(0)} &#8457;</strong>`;
  }


