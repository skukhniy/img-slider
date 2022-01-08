/* eslint-disable no-unused-vars */
import "./style.css";

// controllers
const slides = document.getElementsByClassName("imgDiv");
const dots = document.getElementsByClassName("circle");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

// global index which keeps track of which picture is currently on display
let globalIndex = 0;

// hide unactive images
function hide() {
  Array.from(slides).forEach((slide) => {
    slide.classList.add("hide");
  });
  Array.from(dots).forEach((dot) => {
    dot.classList.add("empty");
  });
}
// grab the correct image, hide other images
function render() {
  hide();
  slides.item(globalIndex).classList.remove("hide");
  dots.item(globalIndex).classList.remove("empty");
}
// increment global Index, reset to 0 if it passes 2.
function increment() {
  if (globalIndex >= 2) {
    globalIndex = 0;
  } else {
    globalIndex += 1;
  }
}
// function to loop every 5 seconds
function intervalFunc() {
  increment();
  render();
}
// inital interval
let fiveSeconds = setInterval(intervalFunc, 5000);

// resets the interval, and then starts it again
function resetInterval() {
  clearInterval(fiveSeconds);
  fiveSeconds = setInterval(intervalFunc, 5000);
}

// Add DOM func to each dot
Array.from(dots).forEach((dot, index) => {
  dot.addEventListener("click", () => {
    globalIndex = index;
    render();
    resetInterval();
  });
});

// add function to the left and right arrow, influence global Index and render
leftArrow.addEventListener("click", () => {
  if (globalIndex <= 0) {
    globalIndex = 2;
  } else {
    globalIndex -= 1;
  }
  render();
  resetInterval();
});
rightArrow.addEventListener("click", () => {
  increment();
  render();
  resetInterval();
});
