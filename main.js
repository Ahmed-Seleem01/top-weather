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
const weatherData = (function () {
  const createInfoElement = function (label, data) {
    const elm = document.createElement("p");
    elm.textContent = `${label}: ${data}`;
    elm.classList.add("weather-data");
    DOMelements.container.appendChild(elm);
  };
  const renderWeatherData = function renderWeatherInfo(usedData) {
    console.log(usedData);
    DOMelements.container.textContent = "";
    createInfoElement("Temperature", usedData.main.temp);
    createInfoElement("Feels like", usedData.main.feels_like);
    createInfoElement("Humidity", usedData.main.humidity);
    createInfoElement("main", usedData.weather.main);
    createInfoElement("Description", usedData.weather.description);
  };
  return { renderWeatherData };
})();

const userLocation = function getLocationFromUser() {
  const location = document.querySelector("#location");
  return { location: location.value };
};

const requestedWeatherData = (function () {
  const asyncGetLocation = async function asyncGetLocation(url) {
    try {
      const response = await fetch(url, { mode: "cors" });
      const data = await response.json();
      const usedData = { weather: data.weather[0], main: data.main };
      weatherData.renderWeatherData(usedData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getLocationData = function getLocationData(e) {
    e.preventDefault();
    DOMelements.container.textContent = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${
      userLocation().location
    }&APPID=4cd54834209720f8529a795ba5933b01`;
    DOMelements.container.textContent = "waiting";
    asyncGetLocation(url);
  };
  return { getLocationData };
})();

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE1BQU0sSUFBSSxLQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGNBQWM7QUFDeEQ7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3Atd2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB3cml0ZXIgYSBmdW5jdGlvbiBmb3IgZ2V0dGluZyB0aGUgbG9jYXRpb25cbmNvbnN0IERPTWVsZW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZW5kZXItZGF0YVwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuXG4gIHJldHVybiB7IGNvbnRhaW5lciwgZm9ybSB9O1xufSkoKTtcbmNvbnN0IHdlYXRoZXJEYXRhID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY3JlYXRlSW5mb0VsZW1lbnQgPSBmdW5jdGlvbiAobGFiZWwsIGRhdGEpIHtcbiAgICBjb25zdCBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBlbG0udGV4dENvbnRlbnQgPSBgJHtsYWJlbH06ICR7ZGF0YX1gO1xuICAgIGVsbS5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1kYXRhXCIpO1xuICAgIERPTWVsZW1lbnRzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChlbG0pO1xuICB9O1xuICBjb25zdCByZW5kZXJXZWF0aGVyRGF0YSA9IGZ1bmN0aW9uIHJlbmRlcldlYXRoZXJJbmZvKHVzZWREYXRhKSB7XG4gICAgY29uc29sZS5sb2codXNlZERhdGEpO1xuICAgIERPTWVsZW1lbnRzLmNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY3JlYXRlSW5mb0VsZW1lbnQoXCJUZW1wZXJhdHVyZVwiLCB1c2VkRGF0YS5tYWluLnRlbXApO1xuICAgIGNyZWF0ZUluZm9FbGVtZW50KFwiRmVlbHMgbGlrZVwiLCB1c2VkRGF0YS5tYWluLmZlZWxzX2xpa2UpO1xuICAgIGNyZWF0ZUluZm9FbGVtZW50KFwiSHVtaWRpdHlcIiwgdXNlZERhdGEubWFpbi5odW1pZGl0eSk7XG4gICAgY3JlYXRlSW5mb0VsZW1lbnQoXCJtYWluXCIsIHVzZWREYXRhLndlYXRoZXIubWFpbik7XG4gICAgY3JlYXRlSW5mb0VsZW1lbnQoXCJEZXNjcmlwdGlvblwiLCB1c2VkRGF0YS53ZWF0aGVyLmRlc2NyaXB0aW9uKTtcbiAgfTtcbiAgcmV0dXJuIHsgcmVuZGVyV2VhdGhlckRhdGEgfTtcbn0pKCk7XG5cbmNvbnN0IHVzZXJMb2NhdGlvbiA9IGZ1bmN0aW9uIGdldExvY2F0aW9uRnJvbVVzZXIoKSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhdGlvblwiKTtcbiAgcmV0dXJuIHsgbG9jYXRpb246IGxvY2F0aW9uLnZhbHVlIH07XG59O1xuXG5jb25zdCByZXF1ZXN0ZWRXZWF0aGVyRGF0YSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGFzeW5jR2V0TG9jYXRpb24gPSBhc3luYyBmdW5jdGlvbiBhc3luY0dldExvY2F0aW9uKHVybCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zdCB1c2VkRGF0YSA9IHsgd2VhdGhlcjogZGF0YS53ZWF0aGVyWzBdLCBtYWluOiBkYXRhLm1haW4gfTtcbiAgICAgIHdlYXRoZXJEYXRhLnJlbmRlcldlYXRoZXJEYXRhKHVzZWREYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXRMb2NhdGlvbkRhdGEgPSBmdW5jdGlvbiBnZXRMb2NhdGlvbkRhdGEoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBET01lbGVtZW50cy5jb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7XG4gICAgICB1c2VyTG9jYXRpb24oKS5sb2NhdGlvblxuICAgIH0mQVBQSUQ9NGNkNTQ4MzQyMDk3MjBmODUyOWE3OTViYTU5MzNiMDFgO1xuICAgIERPTWVsZW1lbnRzLmNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwid2FpdGluZ1wiO1xuICAgIGFzeW5jR2V0TG9jYXRpb24odXJsKTtcbiAgfTtcbiAgcmV0dXJuIHsgZ2V0TG9jYXRpb25EYXRhIH07XG59KSgpO1xuXG5jb25zdCBzY3JlZW5Db250cm9sbGVyID0gZnVuY3Rpb24gc2NyZWVuQ29udHJvbGxlcigpIHtcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGZ1bmN0aW9uIHN1Ym1pdEZvcm0oKSB7XG4gICAgRE9NZWxlbWVudHMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJzdWJtaXRcIixcbiAgICAgIHJlcXVlc3RlZFdlYXRoZXJEYXRhLmdldExvY2F0aW9uRGF0YVxuICAgICk7XG4gIH07XG4gIHN1Ym1pdEZvcm0oKTtcbn07XG5cbnNjcmVlbkNvbnRyb2xsZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==