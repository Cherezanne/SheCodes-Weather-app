// Search Form
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;

  let apiKey = "24ba7f0701b9cc6bb1dftb3aece64o61";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

// Change Temperature
function displayTemp(response) {
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector(".current-temperature");
  temperatureElement.innerHTML = temperature;

  let cityElement = document.querySelector(".city-name");
  let weatherCondition = document.querySelector(".weather-condition");
  let humidityElement = document.querySelector(".humidity-percent");
  let windSpeed = document.querySelector(".wind-speed");
  let iconElement = document.querySelector(".emoji");

  cityElement.innerHTML = response.data.city;
  weatherCondition.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}&#37`;
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  (response.data.condition.icon_url);
}

// Date

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();

  if (hours <= 10) {
    hours = `0${hours}`;
  }
  if (minutes <= 10) {
    minutes = `0${minutes}`;
  }

  let days = ["Sun", "Mon", "Tue", "Wed"];

  let formattedDay = day[days];
  return `${formattedDay} ${hours}:${minutes}`;
}
let currentDay = document.querySelector(".current-day");
let now = new Date();
currentDay.innerHTML = formatDate(now);
