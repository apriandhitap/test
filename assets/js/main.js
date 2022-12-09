function remove(elem) {
  elem.parentNode.removeChild(elem);
  document.getElementById("demo1").innerHTML = "Hello JavaScript";
}
function on() {
  document.getElementById("off").hidden = true;
  document.getElementById("on").hidden = false;
}
function off() {
  document.getElementById("off").hidden = false;
  document.getElementById("on").hidden = true;
}
function changeColor() {
  var x = document.getElementById("red");
  if (x.style.backgroundColor === "white") {
    x.style.backgroundColor = "red";
  } else {
    x.style.backgroundColor = "white";
  }
}
function show() {
  var x = document.getElementById("text");
  x.hidden = false;
}
function hide() {
  var x = document.getElementById("text");
  x.hidden = true;
}
