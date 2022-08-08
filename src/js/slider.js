//получаю количество слайдеров
let sliderElements = document.querySelectorAll('.review');
//получаю родителя для точек слайдера
let dotsWrap = document.querySelector('.slider-dots');
//получаю обертку слайдов
let sliderWrap = document.querySelector('.reviews-wrap');
//задаю переменную для списка точек
let dotsList;
//задаю начальный индекс для элементов слайдера
let indexEl = Math.floor(sliderElements.length/2);
//значение единицы margin-left
let movingEl;


//функция, отвечающая за размер movingEl для margin-left, в зависимости от размера экрана
function sliderMoving(){
    if (document.documentElement.clientWidth > 768){
        movingEl = 540;
        sliderChange(sliderElements, indexEl);
    }
    if (document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth > 480)
    {
        movingEl = 420;
        sliderChange(sliderElements, indexEl);
    }
    if (document.documentElement.clientWidth <= 480 ){
        movingEl = 300;
        sliderChange(sliderElements, indexEl);
    }
}

sliderMoving();

//слежу за изменением размеров окна
window.addEventListener(
    'resize',
    sliderMoving
)


//функция для создания точек слайдера
function createDots(array, index) {
    //выполняю проверку длины массива, чтбы не возникала ошибка с навешиванием активного класса
    if (array.length > 0){
        for (let i = 0; i< array.length; i++){
            let dotEl = document.createElement('span');
            dotEl.className = 'slider-dots__element';
            dotsWrap.appendChild(dotEl);
        }
        dotsList = document.querySelectorAll('.slider-dots__element');
        dotsList[index].classList.add('slider-dots__element_active');
    }
}

createDots(sliderElements, indexEl);


//функция, отвечающая за смену слайдера
function sliderChange(array, index){
    array.forEach(
        item => item.classList.remove('review_active')
    );
    array[index].classList.add('review_active');
    //получаю значение margin, на которое необходимо перемещать слайдер
    let changeMargin = (index - 1) * movingEl;
    //задаю обертке отрицательный margin, чтобы двигать слайдер
    sliderWrap.style.marginLeft = -changeMargin + 'px';
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
        sliderChange(sliderElements, indexEl);
    }
)

setTimeout(
    function sliderRun() {
        if (indexEl < sliderElements.length-1) {
            indexEl++;
        }
        else
        {
            indexEl = 0;
        }

        //удаляю у всех точек активный класс
        dotsList.forEach(
            item => {
                item.classList.remove('slider-dots__element_active')
            }
        )

        //задаю активный класс точке с текущим index
        dotsList[indexEl].classList.add('slider-dots__element_active')

        //вызываю функцию изменения слайдера
        sliderChange(sliderElements, indexEl);
        setTimeout(
            sliderRun, 5000
        )
    }, 5000
)


