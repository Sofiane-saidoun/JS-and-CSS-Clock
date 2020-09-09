"use strict";

function setDate() {
  var secondHand = document.querySelector(".second-hand");
  var minuteHand = document.querySelector(".minute-hand");
  var hourHand = document.querySelector(".hour-hand");
  var now = new Date();
  var seconds = now.getSeconds();
  var secondsDegrees = seconds / 60 * 360 + 90;
  secondHand.style.transform = "rotate(".concat(secondsDegrees, "deg)");
  console.log("secondes :".concat(seconds));
  var minutes = now.getMinutes();
  var minutesDegrees = minutes / 60 * 360 + 90;
  minuteHand.style.transform = "rotate(".concat(minutesDegrees, "deg)");
  console.log("minutes :".concat(minutes));
  var hours = now.getHours();
  var hoursDegrees = hours / 12 * 360 + 90;
  hourHand.style.transform = "rotate(".concat(hoursDegrees, "deg)");
  console.log("heures :".concat(hours));
}

setInterval(setDate, 1000);