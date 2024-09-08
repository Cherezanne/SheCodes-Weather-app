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

  getForecast(response.data.city);
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

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function getForecast(city) {
  let apiKey = "24ba7f0701b9cc6bb1dftb3aece64o61";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}}&key=${apiKey}&unit=metric`;

  axios(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);

  let forecastDay = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  response.data.daily.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
       <div class="forecast">
        <div class="forecast-date"> ${formatDay(day.time)}
       <div class = "forecast-icon">
       <img src = "${day.condition.icon_url}" />
       </div>
       <div class = "forecast-temperatures">${Math.round(
         day.temperature.maximum
       )}&deg; 
       <div class = "forecast-temperatures">${Math.round(
         day.temperature.minimum
       )}&deg;
       </div>
       </div>
       </div>
       </div>
    `;
  });
  let forecastElement = document.querySelector(".forecast");
  forecastElement.innerHTML = forecastHtml;
}

displayForecast("Paris");
