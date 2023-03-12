/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLGFBQWE7QUFDcEYsMENBQTBDLGNBQWM7QUFDeEQ7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE1BQU0sSUFBSSxLQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHdCQUF3QjtBQUM3RDs7QUFFQTtBQUNBLG9EQUFvRCxzQkFBc0I7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3Atd2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB3cml0ZXIgYSBmdW5jdGlvbiBmb3IgZ2V0dGluZyB0aGUgbG9jYXRpb25cbmNvbnN0IERPTWVsZW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZW5kZXItZGF0YVwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuXG4gIHJldHVybiB7IGNvbnRhaW5lciwgZm9ybSB9O1xufSkoKTtcblxuY29uc3QgcmVxdWVzdGVkV2VhdGhlckRhdGEgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBhc3luY0dldExvY2F0aW9uID0gYXN5bmMgZnVuY3Rpb24gYXN5bmNHZXRMb2NhdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlckxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhdGlvblwiKS52YWx1ZTtcbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7dXNlckxvY2F0aW9ufSZBUFBJRD00Y2Q1NDgzNDIwOTcyMGY4NTI5YTc5NWJhNTkzM2IwMWA7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zdCB1c2VkRGF0YSA9IHsgd2VhdGhlcjogZGF0YS53ZWF0aGVyWzBdLCBtYWluOiBkYXRhLm1haW4gfTtcbiAgICAgIHJldHVybiB1c2VkRGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGFzeW5jR2V0TG9jYXRpb24gfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIHRvQ2Vsc2l1cyhrZWx2aW5UZW1wKSB7XG4gIGNvbnN0IGNlbHNpdXMgPSBrZWx2aW5UZW1wIC0gMjczLjE1O1xuICByZXR1cm4gYCR7Y2Vsc2l1cy50b0ZpeGVkKDIpfSDCsENgO1xufVxuXG5jb25zdCBzY3JlZW5Db250cm9sbGVyID0gZnVuY3Rpb24gc2NyZWVuQ29udHJvbGxlcigpIHtcbiAgRE9NZWxlbWVudHMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGdldExvY2F0aW9uRGF0YSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25EYXRhKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gRGlzcGxheSB3YWl0aW5nIHdoaWxlIHdhaXRpbmcgZm9yIHdlYXRoZXIgZGF0YSB0byBiZSByZWFkeVxuICAgIERPTWVsZW1lbnRzLmNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwid2FpdGluZ1wiO1xuICAgIGNvbnN0IHVzZWREYXRhID0gYXdhaXQgcmVxdWVzdGVkV2VhdGhlckRhdGEuYXN5bmNHZXRMb2NhdGlvbigpO1xuICAgIHJlbmRlcldlYXRoZXJEYXRhKHVzZWREYXRhKTtcbiAgfVxuICBjb25zdCByZW5kZXJXZWF0aGVyRGF0YSA9IGZ1bmN0aW9uIHJlbmRlcldlYXRoZXJJbmZvKHVzZWREYXRhKSB7XG4gICAgY29uc3QgY3JlYXRlSW5mb0VsZW1lbnQgPSBmdW5jdGlvbiAobGFiZWwsIGRhdGEpIHtcbiAgICAgIGNvbnN0IGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgZWxtLnRleHRDb250ZW50ID0gYCR7bGFiZWx9OiAke2RhdGF9YDtcbiAgICAgIGVsbS5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1kYXRhXCIpO1xuICAgICAgRE9NZWxlbWVudHMuY29udGFpbmVyLmFwcGVuZENoaWxkKGVsbSk7XG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyh1c2VkRGF0YSk7XG4gICAgRE9NZWxlbWVudHMuY29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBjcmVhdGVJbmZvRWxlbWVudChcIlRlbXBlcmF0dXJlXCIsIHRvQ2Vsc2l1cyh1c2VkRGF0YS5tYWluLnRlbXApKTtcbiAgICBjcmVhdGVJbmZvRWxlbWVudChcIkZlZWxzIGxpa2VcIiwgdG9DZWxzaXVzKHVzZWREYXRhLm1haW4uZmVlbHNfbGlrZSkpO1xuICAgIGNyZWF0ZUluZm9FbGVtZW50KFwiSHVtaWRpdHlcIiwgYCR7dXNlZERhdGEubWFpbi5odW1pZGl0eX0gJWApO1xuICAgIGNyZWF0ZUluZm9FbGVtZW50KFwiRGVzY3JpcHRpb25cIiwgdXNlZERhdGEud2VhdGhlci5kZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt1c2VkRGF0YS53ZWF0aGVyLmljb259QDJ4LnBuZ2A7XG4gICAgaWNvbi5hbHQgPSBcIndlYXRoZXIgaWNvblwiO1xuICAgIERPTWVsZW1lbnRzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgfTtcbn07XG5cbnNjcmVlbkNvbnRyb2xsZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==