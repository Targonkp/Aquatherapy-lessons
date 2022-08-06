let formRecord = document.querySelector('#formRecord input[type=submit]');
let buttonRecords = document.querySelectorAll('.button-record');
let modalEl = document.querySelector('.modal');
let modalCloseEl = document.querySelector('.modal__close');
let burgerMenu = document.getElementById('menu-toggle');

//вызываю модальное окно записи
buttonRecords.forEach(
    item => item.addEventListener(
        'click',
        () => {
            modalEl.classList.add('modal_active')
        }
    )
)

//закрываю модальное окно записи
modalCloseEl.addEventListener(
    'click',
    () => {
        modalEl.classList.remove('modal_active')
    }
)

//бургер меню
burgerMenu.addEventListener(
    'click',
    () => {
        burgerMenu.classList.toggle('open')
    }
)
