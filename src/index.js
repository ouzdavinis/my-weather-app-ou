let now = new Date();

let dateCard = document.querySelector("span#date");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

dateCard.innerHTML = `${day}, ${month} ${date} at ${hours}: ${minutes}hrs`;

function searchTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let tempertatureElement = document.querySelector("span.degrees");
  let description = document.querySelector("#temp-description");
  let humidity = document.querySelector("#humidity");
  let windSpeed = Math.round(response.data.wind.speed);
  let windSpeedElement = document.querySelector("#windSpeed");
  tempertatureElement.innerHTML = `${temperature}C°`;
  description.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = response.data.main.humidity;
  windSpeedElement.innerHTML = `${windSpeed}`;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city");
  let cityCard = document.querySelector("#searching-city");
  let apiSearch = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=8c149e474b0e340f79f353922c15bd8e`;
  if (searchInput.value) {
    cityCard.innerHTML = `${searchInput.value}`;
  } else {
    alert("Please Type City");
  }
  axios.get(apiSearch).then(searchTemperature);
}

let myLocation = document.querySelector("#my-location");
myLocation.addEventListener("submit", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let tempertatureElement = document.querySelector("span.degrees");
  let description = document.querySelector("#temp-description");
  let humidity = document.querySelector("#humidity");
  let windSpeed = Math.round(response.data.wind.speed);
  let windSpeedElement = document.querySelector("#windSpeed");
  let cityName = document.querySelector("#searching-city");
  tempertatureElement.innerHTML = `${temperature}C°`;
  description.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = response.data.main.humidity;
  windSpeedElement.innerHTML = `${windSpeed}`;
  cityName.innerHTML = response.data.name;
}

function showLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=8c149e474b0e340f79f353922c15bd8e`;
  axios.get(apiUrl).then(showTemperature);
}
function showCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocation);
}

let currentButton = document.querySelector("button.currentButton");
currentButton.addEventListener("click", showCurrentLocation);

function displayF(response) {
  let fTemp = Math.round((response.data.main.temp * 9) / 5 + 32);
  let displayF = document.querySelector("span.degrees");
  displayF.innerHTML = `${fTemp}F°`;
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city");
  let apiF = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=8c149e474b0e340f79f353922c15bd8e`;
  axios.get(apiF).then(displayF);
}

let fahrenheitLink = document.querySelector("#f");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

function displayC(response) {
  let cTemp = Math.round(response.data.main.temp);
  let displayC = document.querySelector("span.degrees");
  displayC.innerHTML = `${cTemp}C°`;
}

function convertToCelsius(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city");
  let apiF = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=8c149e474b0e340f79f353922c15bd8e`;
  axios.get(apiF).then(displayC);
}

let celsiusLink = document.querySelector("#c");
celsiusLink.addEventListener("click", convertToCelsius);

function displayFCurrent(response) {
  let currentFTemp = Math.round((response.data.main.temp * 9) / 5 + 32);
  let displayCurrentF = document.querySelector("span.degrees");
  displayCurrentF.innerHTML = `${currentFTemp}F°`;
}

function convertToFahrenheitCurrent(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiCurrentF = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=8c149e474b0e340f79f353922c15bd8e`;
  axios.get(apiCurrentF).then(displayFCurrent);
}

function fCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(convertToFahrenheitCurrent);
}

let fahrenheitLinkCurrent = document.querySelector("#f");
fahrenheitLinkCurrent.addEventListener("click", fCurrentLocation);

function displayCCurrent(response) {
  let currentCTemp = Math.round(response.data.main.temp);
  let displayCurrentC = document.querySelector("span.degrees");
  displayCurrentC.innerHTML = `${currentCTemp}C°`;
}

function convertToCelsiusCurrent(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiCurrentC = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=8c149e474b0e340f79f353922c15bd8e`;
  axios.get(apiCurrentC).then(displayCCurrent);
}

function cCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(convertToCelsiusCurrent);
}

let celsiusLinkCurrent = document.querySelector("#c");
celsiusLinkCurrent.addEventListener("click", cCurrentLocation);
