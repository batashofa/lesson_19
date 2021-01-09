/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

let container = null;
let prevIndicator = null;


function createContainer() {
    let elem = document.createElement('div');
    elem.setAttribute('id', 'carousel');
    document.querySelector('body').appendChild(elem);
    container = document.querySelector('#carousel');
}

function createSlides(n) {
    let slidesContainer = document.createElement('ul');
    slidesContainer.setAttribute('class', 'slides');
    for (let i = 0; i < n; i++) {
        let slideItem = document.createElement('li');
        let slideLink = document.createElement('a');

        slideItem.setAttribute('class',
            i === 0 ? 'slides__item active' : 'slides__item');
        slidesContainer.appendChild(slideItem);
        slideLink.setAttribute('href', '#');
        slideItem.appendChild(slideLink);

    }
    container.appendChild(slidesContainer);
}

function createIndicators(n) {
    let indicatorsContainer = document.createElement('div');
    indicatorsContainer.setAttribute('class', 'indicators');
    for (let i = 0; i < n; i++) {
        let indicatorsItem = document.createElement('span');
        indicatorsItem.setAttribute('class',
            i === 0 ? 'indicators__item active' : 'indicators__item');
        indicatorsItem.setAttribute('data-slide-to',
            i);
        indicatorsContainer.appendChild(indicatorsItem);
    }
    container.appendChild(indicatorsContainer);
}

function createControls() {
    let controlsContainer = document.createElement('div');
    controlsContainer.setAttribute('class', 'controls');
    for (let i = 0; i < 3; i++) {
        let controlsItem = document.createElement('div');
        let controlsIcon = document.createElement('i');

        controlsItem.setAttribute('class',
            i === 0 ? 'controls__item controls__prev' :
                i === 1 ? 'controls__item controls__next' : 'controls__item controls__pause'
        );

        controlsIcon.setAttribute('class',
            i === 0 ? 'fas fa-chevron-left' :
                i === 1 ? 'fas fa-chevron-right' : 'fas fa-play'
        );
        controlsContainer.appendChild(controlsItem);
        controlsItem.appendChild(controlsIcon);
    }
    container.appendChild(controlsContainer);
}

function createStyle() {
    let styleContainer = document.createElement('style');
    let styleCode = `
    .controls,
    .slides {
      position: relative;
    }
    .indicators {
      display: flex;
      justify-content: center;
    }
    .indicators__item {
      display: block;
      width: 30px;
      height: 30px;
      background-color: green;
      margin: 5px;
    }`;
    styleContainer.innerHTML = styleCode;
    container.appendChild(styleContainer);
}

function indicatorsHandler(e) {
    let target = e.target;
    if (target.classList.contains('indicators__item')) {
        target.style.backgroundColor = 'red';
        if (prevIndicator !== null) prevIndicator.removeAttribute('style');
        prevIndicator = target;
    }
}

function setListener() {
    let indicatorsContainer = document.querySelector('div.indicators');
    indicatorsContainer.addEventListener('click', indicatorsHandler);
}
function createCarousel(slidesCount = 5) {
    createContainer();
    container = document.querySelector('#carousel');
    createSlides(slidesCount);
    createIndicators(slidesCount);
    createControls();
    createStyle();
    setListener();
}

createCarousel();