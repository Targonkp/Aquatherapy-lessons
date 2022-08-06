//получаю количество слайдеров
let sliderElements = document.querySelectorAll('.review');
//получаю родителя для точек слайдера
let dotsWrap = document.querySelector('.slider-dots');
//получаю родителя слайдов
let sliderWrap = document.querySelector('.reviews-wrap');

//функция для создания точек слайдера
function createDots(array) {
    let dotsList = '';
    //выполняю проверку длины массива, чтбы не возникала ошибкас навешиванием активного класса
    if (array.length > 0){
        for (let i = 0; i< array.length; i++){
            let dotEl = document.createElement('span');
            dotEl.className = 'slider-dots__element'
            dotsWrap.appendChild(dotEl);
        }
        document.querySelectorAll('.slider-dots__element')[0].classList.add('slider-dots__element_active');
    }
}

createDots(sliderElements);

//функция для элементов слайдера
function sliderElementsDisplay(array) {
    //задаю всем элементам слайдера display none
    array.forEach(
        item => item.style.display = 'none'
    )
    //нахожу элемент с классом active - задаю ему и его соседям display block
    sliderWrap.querySelector('.review_active').style.display = 'block';
    sliderWrap.querySelector('.review_active').previousElementSibling.style.display = 'block';
    sliderWrap.querySelector('.review_active').nextElementSibling.style.display = 'block';

}

sliderElementsDisplay(sliderElements);