// Importing images for different weather backgrounds
import clear from "../images/clear-sky.jpg";
import clouds from "../images/clouds.jpg";
import rain from "../images/rain.jpg";
import storm from "../images/storm.jpg";
import snow from "../images/snow.jpg";
import mist from "../images/mist.jpg";

/* eslint-disable quotes */
// Define function to change background based on weather type
const Background = (type) => {
  const container = document.querySelector("body");
  // Check weather type and set background accordingly
  if (type.includes("clear")) {
    container.style.background = `url(${clear}) top fixed`;
  } else if (type.includes("clouds")) {
    container.style.background = `url(${clouds}) center`;
  } else if (type.includes("rain")) {
    container.style.background = `url(${rain}) center`;
  } else if (type.includes("storm")) {
    container.style.background = `url(${storm}) center`;
  } else if (type.includes("snow")) {
    container.style.background = `url(${snow}) center`;
  } else if (type.includes("mist")) {
    container.style.background = `url(${mist}) top`;
  }
};
// Export the Background function as default
export default Background;
