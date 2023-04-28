// Importing normalize.css file to reset browser's default styles
import "normalize.css";
// Importing custom styles for the application
import "./style.scss";
// Importing the Background component
import Background from "./components/Background";
// Background("rain");

// Declaring a function that will get the location data from the user
const DOMelements = (function () {
  const container = document.querySelector(".render-data");
  const form = document.querySelector("form");

  return { container, form };
})();

// Declaring a function that will get the weather data from the API
const requestedWeatherData = (function () {
  const asyncGetLocation = async function asyncGetLocation() {
    try {
      // Getting the user's input for the location
      const userLocation = document.querySelector("#location").value;
      // Creating a URL to access the OpenWeatherMap API
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&APPID=4cd54834209720f8529a795ba5933b01`;
      // Fetching the data from the API
      const response = await fetch(url, { mode: "cors" });
      const data = await response.json();
      // Extracting the required data from the API response
      const usedData = { weather: data.weather[0], main: data.main };
      return usedData;
    } catch (error) {
      console.log(error.message);
    }
  };

  return { asyncGetLocation };
})();
// Declaring a function that will convert the temperature to Celsius
function toCelsius(kelvinTemp) {
  const celsius = kelvinTemp - 273.15;
  return `${celsius.toFixed(2)} °C`;
}

// Declaring a function that will render the weather data on the screen
const screenController = function screenController() {
  DOMelements.form.addEventListener("submit", getLocationData);

  async function getLocationData(e) {
    e.preventDefault();
    // Display waiting while waiting for weather data to be ready
    DOMelements.container.textContent = "waiting";
    // Getting the weather data from the API
    const usedData = await requestedWeatherData.asyncGetLocation();
    // Rendering the weather data on the screen
    renderWeatherData(usedData);
  }
  const renderWeatherData = function renderWeatherInfo(usedData) {
    // Declaring a function that will create a DOM element to display the weather data
    const createInfoElement = function (label, data) {
      const elm = document.createElement("p");
      elm.textContent = `${label}: ${data}`;
      elm.classList.add("weather-data");
      DOMelements.container.appendChild(elm);
    };
    console.log(usedData);
    // Clearing the container's content before rendering the weather data
    DOMelements.container.textContent = "";
    // Creating and displaying the weather data on the screen
    createInfoElement("Temperature", toCelsius(usedData.main.temp));
    createInfoElement("Feels like", toCelsius(usedData.main.feels_like));
    createInfoElement("Humidity", `${usedData.main.humidity} %`);
    createInfoElement("Description", usedData.weather.description);
    // Creating and displaying the weather icon on the screen
    const icon = document.createElement("img");
    icon.src = `https://openweathermap.org/img/wn/${usedData.weather.icon}@2x.png`;
    icon.alt = "weather icon";
    DOMelements.container.appendChild(icon);

    // Change background according to weather status
    Background(usedData.weather.description);
  };
};

// Running the screenController function
screenController();
