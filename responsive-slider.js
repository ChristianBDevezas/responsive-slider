const sliderContainer = document.querySelector(".slider");
const sliderItems = document.querySelectorAll(".slider__item");
const currentNumbers = document.querySelectorAll(".current");
const sliderImages = document.querySelectorAll(".slider__item img");
const sliderDescriptions = document.querySelectorAll(".slider__description");
const totalNumbers = document.querySelectorAll(".total");
const arrowButtons = document.querySelectorAll(".slider__controls button");
let index = 0;

totalNumbers.forEach((item) => item.innerHTML = totalNumbers.length);

currentNumbers[0].innerHTML = `${index + 1} / `;

sliderImages.forEach((image, idx) => {
    const description = image.getAttribute("alt");
    sliderDescriptions[idx].innerHTML = description;
});

sliderDescriptions[0].classList.add("moving-text");
setTimeout(() => sliderDescriptions[0].classList.remove("moving-text"), 1000);

function currentNumber() {
    currentNumbers.forEach((item) => {
        item.innerHTML = `${index + 1} / `;
    });
}

function hideImages() {
    sliderItems.forEach((item) => {
        item.classList.remove("show-item");
    });
}

function checkImages() {
    if(index < 0) index = sliderItems.length - 1;
    if(index > sliderItems.length - 1) index = 0;
}

function showImages(idx) {
    sliderItems[idx].classList.add("show-item");

    sliderContainer.classList.add("show-effect");
    setTimeout(() => sliderContainer.classList.remove("show-effect"), 700);

    sliderDescriptions[idx].classList.add("moving-text");
    setTimeout(() => sliderDescriptions[idx].classList.remove("moving-text"), 1000);
}

let intervalImages = setInterval(changeImages, 3750);

function changeImages() {
    hideImages();
    index++;
    checkImages();
    showImages(index);
    currentNumber();
}

arrowButtons.forEach((button) => {
    button.addEventListener(("click"), () => {
        clearInterval(intervalImages);
        hideImages();

        if(button.classList.contains("left-control")) {
            index--;
        }
        if(button.classList.contains("right-control")) {
            index++;
        }

        checkImages();        
        showImages(index);
        currentNumber();

        intervalImages = setInterval(changeImages, 3750);
    });
});