function createCarousel(slidesCount) {
    elem = document.createElement('div');
    elem.setAttribute('id', 'carousel');
    elem.setAttribute('class', 'carousel');
    document.querySelector('body').appendChild(elem);
    container = document.querySelector('#carousel');
}