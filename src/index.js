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
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${
        userLocation
      }&APPID=4cd54834209720f8529a795ba5933b01`;
      const response = await fetch(url, { mode: "cors" });
      const data = await response.json();
      const usedData = { weather: data.weather[0], main: data.main };
      return usedData;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getLocationData = async function getLocationData(e) {
    e.preventDefault();
    DOMelements.container.textContent = "waiting";
    const usedData = await asyncGetLocation();
    renderWeatherData(usedData);
  };
  return { getLocationData };
})();

const renderWeatherData = function renderWeatherInfo(usedData) {
  const createInfoElement = function (label, data) {
    const elm = document.createElement("p");
    elm.textContent = `${label}: ${data}`;
    elm.classList.add("weather-data");
    DOMelements.container.appendChild(elm);
  };
  console.log(usedData);
  DOMelements.container.textContent = "";
  createInfoElement("Temperature", usedData.main.temp);
  createInfoElement("Feels like", usedData.main.feels_like);
  createInfoElement("Humidity", usedData.main.humidity);
  createInfoElement("main", usedData.weather.main);
  createInfoElement("Description", usedData.weather.description);
};

const screenController = function screenController() {
  const submitForm = function submitForm() {
    DOMelements.form.addEventListener(
      "submit",
      requestedWeatherData.getLocationData
    );
  };
  submitForm();
};

screenController();
