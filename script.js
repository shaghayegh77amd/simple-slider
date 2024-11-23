const items = document.getElementsByClassName("item");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const slides = document.getElementById("slides");

const time = 6000;
const speed = 20;
let lastSlide;
let activeAnimate = false;
let nextTimeOut;
nextTimeOut = setTimeout(nextSlide, time);

function moveRight() {
  const left = parseInt(slides.lastElementChild.style.left);
  slides.lastElementChild.style.left = left + speed + "px";
  if (left < 1200) {
    requestAnimationFrame(moveRight);
  } else {
    slides.lastElementChild.style.left = "0";
    slides.insertBefore(slides.lastElementChild, slides.firstElementChild);
    nextTimeOut = setTimeout(nextSlide, time);
    activeAnimate = false;
  }
}

function nextSlide() {
  activeAnimate = true;
  requestAnimationFrame(moveRight);
}

function nextHandler() {
  if (!activeAnimate) {
    clearTimeout(nextTimeOut);
    nextSlide();
  }
}

function moveLeft() {
  const left = parseInt(slides.lastElementChild.style.left);
  slides.lastElementChild.style.left = left - speed + "px";
  if (left > speed) {
    requestAnimationFrame(moveLeft);
  } else {
    nextTimeOut = setTimeout(nextSlide, time);
    activeAnimate = false;
  }
}

function prevHandler() {
  if (!activeAnimate) {
    slides.appendChild(slides.firstElementChild);
    slides.lastElementChild.style.left = "1200px";
    clearTimeout(nextTimeOut);
    requestAnimationFrame(moveLeft);
  }
}

next.addEventListener("click", nextHandler);
prev.addEventListener("click", prevHandler);

// todo: add to button for control change slide effect fade or move
// todo:add circle for go to item directly
