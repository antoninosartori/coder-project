//menu hamburguesa
const boton = document.querySelector(".header__nav-toggle");
const menu = document.querySelector(".header__nav__menu");

boton.addEventListener("click", () => {
    menu.classList.toggle("nav-menu_visible");
})

//modo oscuro
const btnModoDark = document.querySelector('.header__nav__modo-oscuro-container');
const sol = document.getElementById('sol');
const luna = document.getElementById('luna');

btnModoDark.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})

btnModoDark.addEventListener('click', () =>{
    luna.classList.toggle('btn-invisible');
    sol.classList.toggle('btn-invisible');

    //localstorage
    if(document.body.classList.contains('dark')){
        localStorage.setItem('darkMode', 'true');
    } else{
        localStorage.setItem('darkMode', 'false');
    }
})

//obtener modo de theme
if(localStorage.getItem('darkMode') === 'true'){
    document.body.classList.add('dark');
    luna.classList.toggle('btn-invisible');
    sol.classList.toggle('btn-invisible');
    
} else{
    document.body.classList.remove('dark');
}


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


