"use strict";

function setDate() {
  var secondHand = document.querySelector(".second-hand");
  var now = new Date();
  var seconds = now.getSeconds();
  var secondsDegrees = seconds / 60 * 360;
  secondHand.style.transform = "rotate(".concat(secondsDegrees, "deg)");
}

setInterval(setDate, 1000);