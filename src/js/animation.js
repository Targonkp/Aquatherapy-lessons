let mainEl = document.querySelector('main');
mainEl.classList.add('animation-transition');

//получаю родительский элемент и убираю перезагрузку страницы при клике по одной из ссылок, входящих в него
document.querySelector('.nav-menu').addEventListener(
    'click',
    function (e) {
        e.preventDefault();
        if (event.target.classList.contains('nav-menu__link')){
            //получаю ссылку активного элемента (по которому был совершен клик)
            let currentActiveLink = event.target.href;
            document.body.style.overflow = 'hidden';
            mainEl.classList.add('animation-transition');
            //устанавливаю счетчик для перехода по кликнутой ссылке
            setTimeout(
                ()=>{
                    location.reload(true);
                    document.location.href = currentActiveLink;
                }, 700
            )
        }
    }
)


setTimeout(
    ()=>{
        mainEl.classList.remove('animation-transition');
    }, 500
)


document.querySelector('.nav-menu').addEventListener(
    'click',
    function (event) {
        [...document.querySelectorAll('.nav-menu__link')].forEach(
            event => event.classList.remove('nav-menu__link-active')
        )
        if (event.target.classList.contains('nav-menu__link')){
            currentActiveElement = event.target;
            console.log(currentActiveElement);
            event.target.classList.add('nav-menu__link-active');
        }
    }
)