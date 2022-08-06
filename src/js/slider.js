//получаю количество слайдеров
let sliderElements = document.querySelectorAll('.review');
//получаю родителя для точек слайдера
let dotsWrap = document.querySelector('.slider-dots');
//получаю родителя слайдов
let sliderWrap = document.querySelector('.reviews-wrap');
//задаю начальный индекс для элементов слайдера
let indexEl = 0;

//функция для элементов слайдера
function sliderElementsDisplay(array) {
    //задаю всем элементам слайдера display none
    array.forEach(
        item => item.style.display = 'none'
    )
    //нахожу элемент с классом active - задаю ему и его соседям display block
    sliderWrap.querySelector('.review_active').style.display = 'block';
    if (sliderWrap.querySelector('.review_active').nextElementSibling){
        sliderWrap.querySelector('.review_active').nextElementSibling.style.display = 'block';
    }
    //если нет следующего соседа, то добавляю дополнительный margin
    else{
        array[array.length-1].style.marginRight = 'auto';
    }
    if (sliderWrap.querySelector('.review_active').previousElementSibling){
        sliderWrap.querySelector('.review_active').previousElementSibling.style.display = 'block';
    }
    //если нет предыдущего соседа, то добавляю дополнительный margin
    else{
        array[0].style.marginLeft = 'auto';
    }
    //нахожу индекс элемента с классом active и перезаписываю indexEl
    indexEl = Array.from(sliderElements).findIndex(index => index.classList.contains('review_active'));
}

sliderElementsDisplay(sliderElements);

//функция для создания точек слайдера
function createDots(array, index) {
    //выполняю проверку длины массива, чтбы не возникала ошибкас навешиванием активного класса
    if (array.length > 0){
        for (let i = 0; i< array.length; i++){
            let dotEl = document.createElement('span');
            dotEl.className = 'slider-dots__element'
            dotsWrap.appendChild(dotEl);
        }
        document.querySelectorAll('.slider-dots__element')[index].classList.add('slider-dots__element_active');
    }
}

createDots(sliderElements, indexEl);


//функция, отвечающая за смену слайдера
function sliderChange(array, index){
    array.forEach(
        item => item.classList.remove('review_active')
    );
    array[index].classList.add('review_active');
    sliderElementsDisplay(sliderElements);
}

//навешиваю обработчик на общего родителя точек
dotsWrap.addEventListener(
    'click',
    (event) => {
        let dotsList = Array.from(document.querySelectorAll('.slider-dots__element'));
        if (event.target.classList.contains('slider-dots__element')){
            dotsList.forEach(
                item => {
                    item.classList.remove('slider-dots__element_active')
                }
            )
            event.target.classList.add('slider-dots__element_active')
        }
        indexEl = dotsList.findIndex(index => index.classList.contains('slider-dots__element_active'));
        console.log(indexEl);
        sliderChange(sliderElements, indexEl);
    }
)