const sliderContainer = document.querySelector(".slider");
const sliders = document.querySelectorAll(".slider__item");
const currentNumbers = document.querySelectorAll(".current");
const totalNumbers = document.querySelectorAll(".total");
const leftArrow = document.querySelector(".left-control");
const rightArrow = document.querySelector(".right-control");
let index = 0;

totalNumbers.forEach((item) => item.innerHTML = totalNumbers.length);

currentNumbers[0].innerHTML = index + 1;

function currentNumber() {
    currentNumbers.forEach((item) => {
        item.innerHTML = index + 1;
    });
}

function hideImages() {
    sliders.forEach((item) => {
        item.classList.remove("show-item");
    });
}

function showImages(idx) {    
        sliders[idx].classList.add("show-item");
        sliderContainer.classList.add("show-effect");
        setTimeout(() => sliderContainer.classList.remove("show-effect"), 700);
}

let intervalImages = setInterval(changeImages, 3750);

function changeImages() {
    hideImages();

    index++;
    if(index > sliders.length - 1) index = 0;
    showImages(index);
    currentNumber();
}

leftArrow.addEventListener("click", () => {
    clearInterval(intervalImages);
    hideImages();

    index--;
    if(index < 0) {
        index = sliders.length - 1;
    }
    showImages(index);
    currentNumber();

    intervalImages = setInterval(changeImages, 3750);
});

rightArrow.addEventListener("click", () => {
    clearInterval(intervalImages);
    hideImages();

    index++;
    if(index > sliders.length - 1) {
        index = 0;
    }
    showImages(index);
    currentNumber();

    intervalImages = setInterval(changeImages, 3750);
});