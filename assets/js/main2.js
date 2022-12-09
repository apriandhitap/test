function changeContent() {
  return (document.getElementById("changeHTML").innerHTML = "Hello Javascript");
}

var turnOn = () => {
  return (document.getElementById("lampu").src = "https://www.w3schools.com/js/pic_bulbon.gif");
};

var turnOff = () => {
  return (document.getElementById("lampu").src = "https://www.w3schools.com/js/pic_bulboff.gif");
};

var changeCSS = () => {
  return (document.getElementById("changeCSS").style.backgroundColor = "red");
};

var hideElement = () => {
  return (document.getElementById("element").style.display = "none");
};

var showElement = () => {
  return (document.getElementById("element").style.display = "block");
};
