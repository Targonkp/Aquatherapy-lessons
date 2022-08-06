document.querySelector('.nav-menu').addEventListener(
    'click',
   function (elem) {
        [...document.querySelectorAll('.nav-menu__link')].forEach(
            elem => elem.classList.remove('nav-menu__link-active')
        )
        if (elem.target.classList.contains('nav-menu__link')){
            elem.target.classList.add('nav-menu__link-active');
        }
   }
)