//menu hamburguesa
const boton = document.querySelector(".header__nav-toggle");
const menu = document.querySelector(".header__nav__menu");

boton.addEventListener("click", () => {
    menu.classList.toggle("nav-menu_visible");
})

//carrusel de los partidos
//variable que tiene el width del dispositivo
var width = window.innerWidth;
if (width < 700) {
    window.addEventListener('load', function(){
        new Glider(document.querySelector('.carrusel__fila__lista'), {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            dots: '.carrusel-indicadores',
            arrows: {
            prev: '.carrusel__fila__btn-anterior',
            next: '.carrusel__fila__btn-siguiente'
        }
        });
    });
} else if (width > 700 && width < 950){
    window.addEventListener('load', function(){
        new Glider(document.querySelector('.carrusel__fila__lista'), {
            slidesToShow: 2,
            slidesToScroll: 1,
            draggable: true,
            dots: '.carrusel-indicadores',
            arrows: {
            prev: '.carrusel__fila__btn-anterior',
            next: '.carrusel__fila__btn-siguiente'
        }
        });
    });
} else {
    window.addEventListener('load', function(){
        new Glider(document.querySelector('.carrusel__fila__lista'), {
            slidesToShow: 3,
            slidesToScroll: 1,
            draggable: true,
            dots: '.carrusel-indicadores',
            arrows: {
            prev: '.carrusel__fila__btn-anterior',
            next: '.carrusel__fila__btn-siguiente'
        }
        });
    });
}

