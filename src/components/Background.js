/* eslint-disable quotes */
const Background = (type) => {
  const container = document.querySelector("body");

  if (type.includes("clear")) {
    container.style.background = `url("../src/images/grooveland-designs-zjoydJb17mE-unsplash.jpg")  no-repeat top fixed`;
  }
  else if(type.includes("clouds")){
    container.style.background = `url("../src/images/stephanie-klepacki-gXG_2TpSBOc-unsplash.jpg")  no-repeat center fixed`;
  }
  else if(type.includes("rain")){
    container.style.background = `url("../src/images/klim-musalimov-iDc5g9h-dME-unsplash.jpg")  no-repeat center fixed`;
  }
  else if(type.includes("storm")){
    container.style.background = `url("../src/images/tasos-mansour-_hGPdpyMV-8-unsplash.jpg")  no-repeat center fixed`;
  }
  else if(type.includes("snow")){
    container.style.background = `url("../src/images/adam-chang-IWenq-4JHqo-unsplash.jpg")  no-repeat center fixed`;
  }
  else if(type.includes("mist")){
    container.style.background = `url("../src/images/dave-hoefler-od287vQyufw-unsplash.jpg")  no-repeat top fixed`;
  }
};

export default Background;
