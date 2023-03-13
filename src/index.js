import "normalize.css";
import "./style.scss";
// writer a function for getting the location
const DOMelements = (function () {
  const container = document.querySelector(".render-data");
  const form = document.querySelector("form");

  return { container, form };
})();

const requestedWeatherData = (function () {
  const asyncGetLocation = async function asyncGetLocation() {
    try {
      const userLocation = document.querySelector("#location").value;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&APPID=4cd54834209720f8529a795ba5933b01`;
      const response = await fetch(url, { mode: "cors" });
      const data = await response.json();
      const usedData = { weather: data.weather[0], main: data.main };
      return usedData;
    } catch (error) {
      console.log(error.message);
    }
  };

  return { asyncGetLocation };
})();

function toCelsius(kelvinTemp) {
  const celsius = kelvinTemp - 273.15;
  return `${celsius.toFixed(2)} °C`;
}

const screenController = function screenController() {
  DOMelements.form.addEventListener("submit", getLocationData);

  async function getLocationData(e) {
    e.preventDefault();
    // Display waiting while waiting for weather data to be ready
    DOMelements.container.textContent = "waiting";
    const usedData = await requestedWeatherData.asyncGetLocation();
    renderWeatherData(usedData);
  }
  const renderWeatherData = function renderWeatherInfo(usedData) {
    const createInfoElement = function (label, data) {
      const elm = document.createElement("p");
      elm.textContent = `${label}: ${data}`;
      elm.classList.add("weather-data");
      DOMelements.container.appendChild(elm);
    };
    console.log(usedData);
    DOMelements.container.textContent = "";
    createInfoElement("Temperature", toCelsius(usedData.main.temp));
    createInfoElement("Feels like", toCelsius(usedData.main.feels_like));
    createInfoElement("Humidity", `${usedData.main.humidity} %`);
    createInfoElement("Description", usedData.weather.description);

    const icon = document.createElement("img");
    icon.src = `https://openweathermap.org/img/wn/${usedData.weather.icon}@2x.png`;
    icon.alt = "weather icon";
    DOMelements.container.appendChild(icon);
  };
};

screenController();
