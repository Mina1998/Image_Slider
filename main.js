let sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
let numberOfImages = sliderImages.length;
let Indicators = document.querySelector(".indicators");
let currentSlideNumber = 1;
let nextButton = document.querySelector(".next");
let previousButton = document.querySelector(".previous");

// Creating Slider Indicators
let ul = document.createElement("ul");
for (var i=0 ; i<numberOfImages ; i++) {
    let li = document.createElement("li");
    if (i+1 == currentSlideNumber){
        li.classList.add("active");
    }
    li.appendChild(document.createTextNode(i+1));
    li.onclick = changeImageByIndicator;
    ul.appendChild(li);
}
Indicators.appendChild(ul);

let sliderIndicators = Array.from(document.querySelectorAll(".indicators ul li"));

// Initialization of the Slider
initializeSlider();

// Handling Next and Previous Clicks
nextButton.onclick = nextSlide;
previousButton.onclick = previousSlide;

// Initialization Function
function initializeSlider () {
    sliderImages[currentSlideNumber-1].classList.add("active");
    changeSlideNumber(currentSlideNumber);
    if (currentSlideNumber == 1) {
        previousButton.classList.add("disabled");
    } else if (currentSlideNumber == numberOfImages) {
        nextButton.classList.add("disabled");
    }
}

// Next Slide Function
function nextSlide () {
    removeActiveClassFromCurrentImage();
    removeActiveClassFromCurrentSlideIndicator();
    currentSlideNumber +=1;
    addActiveClassToCurrentImage();
    addActiveClassToCurrentSlideIndicator();
    changeSlideNumber(currentSlideNumber);
    if (currentSlideNumber == numberOfImages) {
        nextButton.classList.add("disabled");
    } else if (currentSlideNumber == 2) {
        previousButton.classList.remove("disabled");
    }
}

// Previous Slide Function
function previousSlide () {
    removeActiveClassFromCurrentImage();
    removeActiveClassFromCurrentSlideIndicator();
    currentSlideNumber -=1;
    addActiveClassToCurrentImage();
    addActiveClassToCurrentSlideIndicator();
    changeSlideNumber(currentSlideNumber);
    if (currentSlideNumber == 1) {
        previousButton.classList.add("disabled");
    } else if (currentSlideNumber == numberOfImages - 1) {
        nextButton.classList.remove("disabled");
    }
}

// Function for changing image according to the clicked indicator number
function changeImageByIndicator () {
    let indicatorIndex = parseInt(this.textContent);
    changeSlideNumber(indicatorIndex);

    // Removing Active Classes from Image and Indicator
    removeActiveClassFromCurrentSlideIndicator();
    removeActiveClassFromCurrentImage();

    // Adding Active Classes to the Clicked Indicator and Image
    sliderIndicators[indicatorIndex-1].classList.add("active");
    sliderImages[indicatorIndex-1].classList.add("active");

    // Check for Disabled Class
    if (currentSlideNumber == 1) {
        previousButton.classList.remove("disabled");
    } else if (currentSlideNumber == numberOfImages) {
        nextButton.classList.remove("disabled");
    }

    currentSlideNumber = indicatorIndex;

    // Check for Disabled Class
    if (currentSlideNumber == 1) {
        previousButton.classList.add("disabled");
    } else if (currentSlideNumber == numberOfImages) {
        nextButton.classList.add("disabled");
    }

}

function changeSlideNumber(slideIndex) {
    let slideNumber = document.querySelector(".slide-number");
    slideNumber.textContent = `Slide #${slideIndex} of ${numberOfImages}`;
}

function removeActiveClassFromCurrentImage () {
    sliderImages[currentSlideNumber-1].classList.remove("active");
}

function addActiveClassToCurrentImage () {
    sliderImages[currentSlideNumber-1].classList.add("active");
}

function removeActiveClassFromCurrentSlideIndicator () {
    sliderIndicators[currentSlideNumber-1].classList.remove("active");
}

function addActiveClassToCurrentSlideIndicator () {
    sliderIndicators[currentSlideNumber-1].classList.add("active");
}