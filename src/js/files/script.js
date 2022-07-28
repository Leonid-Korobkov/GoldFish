// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей

document.addEventListener('click', documentActions)

function documentActions(e) {
    const targetElement = e.target

    // main navigation filter
    if (targetElement.closest('.main-navigation__text')) {
        const filterOpen = document.querySelector('.main-navigation__filter');
        filterOpen.classList.toggle('active')
    }
    if (targetElement.closest('.main-navigation__back') || targetElement.closest('.filter-catalog__btn')) {
        const filterOpen = document.querySelector('.main-navigation__filter');
        filterOpen.classList.remove('active')
    }

    // menu
    if (targetElement.closest('.menu-catalog__item')) {
        targetElement.closest('.menu-catalog__wrap').classList.add('menu-catalog__wrap_transform')
        targetElement.closest('.menu-catalog__item').querySelector('.sub-menu-catalog').classList.add('sub-menu-catalog_active')
    }
    if (targetElement.closest('.sub-menu-catalog__mobile-back')) {
        targetElement.closest('.menu-catalog__wrap').classList.remove('menu-catalog__wrap_transform')
        targetElement.closest('.menu-catalog__item').querySelector('.sub-menu-catalog').classList.remove('sub-menu-catalog_active')
    }
}
// Preloader
if (document.querySelector('.loader')) {
    document.documentElement.classList.add("lock");
}
function fadeOut() {
    window.addEventListener("load", function () {
        setTimeout(function () {
            document.documentElement.classList.remove("lock");
            document.querySelector('.loader').classList.add('fade')
        }, 500);
    });
}
fadeOut()

// map yandex
// Функция ymaps.ready() будет вызвана, когда загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
let center = [55.74624849961703,37.658295331574884]
function init() {
    // Создание карты.
    let myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: center,
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 18
    });
    let myPlacemark = new ymaps.Placemark(center, {
        hintContent: 'г. Москва ст.м. Таганская (кольцевая) Малый Дровяной переулок 6',
        balloonContent: 'г. Москва ст.м. Таганская (кольцевая) Малый Дровяной переулок 6'
    },
    {});
    myMap.geoObjects.add(myPlacemark)
}
