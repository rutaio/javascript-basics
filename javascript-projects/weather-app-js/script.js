const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apiKey = '4b9883b35bdaeaa034f2caa44a63e043';

weatherForm.addEventListener('submit', async (event) => {
  // we dont want to refresh the page, which is a default behaviour of forms:
  event.preventDefault();

  const city = cityInput.value;

  // if there is a city, do this:
  if (city) {
    try {
      const weatherData = await getWeatherData(city); // we can only use await with async function
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      // calling our function:
      displayError(error);
    }
  } else {
    displayError('Please enter a city');
  }
});

// function to get a weather data from another website:
async function getWeatherData(city) {
  // we take a ulr from https://openweathermap.org/current and add our variables in ${}:
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  // we can use await because we are in async function here:
  const response = await fetch(apiUrl);

  // we check through inspect and console, if ok is true or false...
  if (!response.ok) {
    // if response is not ok (means - false)
    throw new Error('Could not fetch weather data');
  }
  // if our response is true, return an object in json format (to our event listener):
  return await response.json();
}

function displayWeatherInfo(data) {
  // we take this data from API (it comes as gigantic object) and use these as variables to show in our card:
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.textContent = '';
  card.style.display = 'flex'; // now, we want to start displaying it (instead of set to 'none' in html)

  // we need to create the elements to display in the card:
  const cityDisplay = document.createElement('h1');
  const tempDisplay = document.createElement('p');
  const humidityDisplay = document.createElement('p');
  const descDisplay = document.createElement('p');
  const weatherEmoji = document.createElement('p');

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`; // formula to convert degrees from K to C
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  cityDisplay.classList.add('cityDisplay'); // add css class, so that the element uses css styling
  tempDisplay.classList.add('tempDisplay');
  humidityDisplay.classList.add('humidityDisplay');
  descDisplay.classList.add('descDisplay');
  weatherEmoji.classList.add('weatherEmoji');

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
  // we take data from https://openweathermap.org/weather-conditions under codes:
  // we check if the value of true match the cases listed on this website:
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return '⛈️';
    case weatherId >= 300 && weatherId < 400:
      return '🌧️';
    case weatherId >= 400 && weatherId < 600:
      return '🌧️';
    case weatherId >= 600 && weatherId < 700:
      return '❄️';
    case weatherId >= 700 && weatherId < 800:
      return '🌫️';
    case weatherId === 800:
      return '🌞';
    case weatherId >= 801 && weatherId < 810:
      return '☁️';
    default:
      return '👽';
  }
}

function displayError(message) {
  const errorDisplay = document.createElement('p'); // create a new paragraph
  errorDisplay.textContent = message; // change content of this new paragraph
  errorDisplay.classList.add('.errorDisplay');

  // reset content in our card (if there is something there):
  card.textContent = '';
  card.style.display = 'flex';
  card.appendChild(errorDisplay); // our new paragraph goes into the card
}
