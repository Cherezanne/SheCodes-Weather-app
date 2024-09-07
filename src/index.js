// Search Form
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;

  let apiKey = "24ba7f0701b9cc6bb1dftb3aece64o61";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

// Change Temperature
function displayTemp(response) {
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector(".current-temperature");
  temperatureElement.innerHTML = temperature;

  let cityElement = document.querySelector(".city-name");
  let weatherCondition = document.querySelector(".weather-condition");
  let humidityElement = document.querySelector(".humidity-percent");
  let windSpeed = document.querySelector(".wind-speed");
  let iconElement = document.querySelector(".icon");
  let timeElement = document.querySelector(".time");
  let now = new Date(response.data.time * 1000);

  cityElement.innerHTML = response.data.city;
  weatherCondition.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}&#37`;
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  iconElement.innerHTML = `<img src = "${response.data.condition.icon_url}"class = "weather-app-icon"/>`;
  timeElement.innerHTML = formatDate(now);
}

// Date

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

  let day = days[date.getDay()];

  if (hours <= 10) {
    hours = `0${hours}`;
  }
  if (minutes <= 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function displayForecast() {
  let forecastElement = document.querySelector(".forecast");

  let forecastDay = ["Sun", "Mon", "Tues", "Wed"];
  let forecastHtml = "";

  forecastDay.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
       <div class="forecast">
        <div class="forecast-date">${day}
       <div class = "forecast-icon">☀️</div>
       <div class = "forecast-temperatures">29&deg; 
       <div class = "forecast-temperatures"><strong>16&deg;</strong>
       </div></div></div></div>
    `;
  });

  forecastElement.innerHTML = forecastHtml;
}

displayForecast();
