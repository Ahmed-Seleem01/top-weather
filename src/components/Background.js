import clear from "../images/grooveland-designs-zjoydJb17mE-unsplash.jpg";
import clouds from "../images/stephanie-klepacki-gXG_2TpSBOc-unsplash.jpg";
import rain from "../images/klim-musalimov-iDc5g9h-dME-unsplash.jpg";
import storm from "../images/tasos-mansour-_hGPdpyMV-8-unsplash.jpg";
import snow from "../images/adam-chang-IWenq-4JHqo-unsplash.jpg";
import mist from "../images/dave-hoefler-od287vQyufw-unsplash.jpg";

/* eslint-disable quotes */
const Background = (type) => {
  const container = document.querySelector("body");

  if (type.includes("clear")) {
    container.style.background = `url(${clear})  no-repeat top fixed black`;
  }
  else if(type.includes("clouds")){
    container.style.background = `url(${clouds})  no-repeat center fixed black`;
  }
  else if(type.includes("rain")){
    container.style.background = `url(${rain})  no-repeat center fixed black`;
  }
  else if(type.includes("storm")){
    container.style.background = `url(${storm})  no-repeat center fixed black`;
  }
  else if(type.includes("snow")){
    container.style.background = `url(${snow})  no-repeat center fixed black`;
  }
  else if(type.includes("mist")){
    container.style.background = `url(${mist})  no-repeat top fixed black`;
  }
};

export default Background;
