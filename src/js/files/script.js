// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей

document.addEventListener('click', documentActions)

function documentActions(e) {
    const targetElement = e.target
    if (targetElement.closest('[data-parent]')) {
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`)
        const catalogMenu = document.querySelector('.catalog-header')
        if (subMenu) {
            targetElement.classList.toggle('sub-menu-active')
            subMenu.classList.toggle('sub-menu-open')
        } else {
            console.log('Такого подменю не существует')
        }
        e.preventDefault()
    }
}