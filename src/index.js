// Time
let now = new Date();
let day = now.getDay();
let hours = now.getHours();
let minutes = now.getMinutes();
let currentTime = document.querySelector(".current-time");
currentTime.innerHTML = `${hours}:${minutes}`;
// Date
function formatDate(date) {
  let days = ["Sun", "Mon", "Tue", "Wed"];
}
let currentDay = document.querySelector(".current-day");
currentDay.innerHTML = `${day}`;

// Search Form
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector(".city-name");
  cityElement.innerHTML = searchInput.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

// Change Temperature



function changeTemp (response) {
let apiKey = "24ba7f0701b9cc6bb1dftb3aece64o61";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key=${apiKey}`;
}
axios.get(apiUrl)then(changeTemp);