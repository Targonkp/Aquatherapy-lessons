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
            document.body.style.overflow = 'hidden';
        }
    )
)

//закрываю модальное окно записи по клику на close
modalCloseEl.addEventListener(
    'click',
    () => {
        modalEl.classList.remove('modal_active');
        document.body.style.overflow = 'visible';
    }
)

//закрываю модальное окно записи по клику вне формы
document.addEventListener(
    'click',
    (event) => {
        if (event.target.classList.contains('modal_active')){
            modalEl.classList.remove('modal_active')
            document.body.style.overflow = 'visible'
        }
    }
)

//бургер меню
burgerMenu.addEventListener(
    'click',
    () => {
        burgerMenu.classList.toggle('open');
        if (document.body.style.overflow === 'hidden'){
            document.body.style.overflow = 'visible'
        }
        else {
            document.body.style.overflow = 'hidden'
        }
    }
)


//записываю текущий title
let currentTitle = document.querySelector('title').textContent;

//отвечает за изменение title
document.addEventListener(
    'visibilitychange',
    function () {
        //если браузер свернули или осуществлен переход на другую вкладку
        if (document.hidden){
            document.querySelector('title').textContent = 'Вы отошли';
        }
        else{
            document.querySelector('title').textContent = currentTitle;
        }
    }
)


// let bodyTest;
// let testFunc = () => {
//     fetch("test.html")
//         .then(response => {return response.text()})
//         .then(data => {
//             console.log(data);
//             bodyTest = data;
//         })
// }
//
// testFunc();
//
// setTimeout(
//     () => {
//         console.log(bodyTest)
//         let newEl = document.createElement("div");
//         newEl.innerHTML = bodyTest;
//         document.body.appendChild(newEl);
//     }, 3000
// )
