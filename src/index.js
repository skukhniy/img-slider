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
function render(index) {
  hide();
  slides.item(index).classList.remove("hide");
  dots.item(index).classList.remove("empty");
}

// Add DOM func to each dot
Array.from(dots).forEach((dot, index) => {
  dot.addEventListener("click", () => {
    render(index);
  });
});

// add function to the left and right arrow, influence global Index and render
leftArrow.addEventListener("click", () => {
  if (globalIndex === 0) {
    globalIndex = 2;
  } else {
    globalIndex -= 1;
  }
  render(globalIndex);
});

rightArrow.addEventListener("click", () => {
  if (globalIndex === 2) {
    globalIndex = 0;
  } else {
    globalIndex += 1;
  }
  render(globalIndex);
});
