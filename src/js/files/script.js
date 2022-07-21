// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей

document.addEventListener('click', documentActions)

function documentActions(e) {
    const targetElement = e.target

    if (targetElement.closest('.main-navigation__text')) {
        const filterOpen = document.querySelector('.main-navigation__filter');
        filterOpen.classList.toggle('active')
    }
    if (targetElement.closest('.main-navigation__back') || targetElement.closest('.filter-catalog__btn')) {
        const filterOpen = document.querySelector('.main-navigation__filter');
        filterOpen.classList.remove('active')
    }
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
function fadeOut() {
	window.addEventListener("load", function () {
		setTimeout(function () {
			document.querySelector('.loader').classList.add('fade')
		}, 500);
	});
}
fadeOut()

