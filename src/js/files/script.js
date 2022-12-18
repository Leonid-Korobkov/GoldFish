// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js'
// Подключение списка активных модулей
import '../libs/just-validate3.3.3.min.js'
// import "./forms/inputmask.js";
// import { } from "./forms/inputmask.js";

document.addEventListener('click', documentActions)

function documentActions(e) {
  const targetElement = e.target

  //! main navigation filter
  if (targetElement.closest('.main-navigation__text')) {
    const filterOpen = document.querySelector('.main-navigation__filter')
    filterOpen.classList.toggle('active')
  }
  if (targetElement.closest('.main-navigation__back') || targetElement.closest('.filter-catalog__btn')) {
    const filterOpen = document.querySelector('.main-navigation__filter')
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
//! Preloader
if (document.querySelector('.loader')) {
  document.documentElement.classList.add('lock')
}
function fadeOut() {
  window.addEventListener('load', function () {
    setTimeout(function () {
      document.documentElement.classList.remove('lock')
      document.querySelector('.loader').classList.add('fade')
    }, 500)
  })
}
fadeOut()

//! map yandex
// Функция ymaps.ready() будет вызвана, когда загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init)
let center = [55.74624849961703, 37.658295331574884]
function init() {
  // Создание карты.
  let myMap = new ymaps.Map('map', {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: center,
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 18
  })
  let myPlacemark = new ymaps.Placemark(
    center,
    {
      hintContent: 'г. Москва ст.м. Таганская (кольцевая) Малый Дровяной переулок 6',
      balloonContent: 'г. Москва ст.м. Таганская (кольцевая) Малый Дровяной переулок 6'
    },
    {}
  )
  myMap.geoObjects.add(myPlacemark)
}

//! Валидация и отправка на почту
if (document.querySelector('.contact__form')) {
  const validation = new JustValidate('.form')

  validation
    .addField('.form__name', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Поле должно содержать минимум 3 символа'
      },
      {
        rule: 'maxLength',
        value: 30
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите имя!'
      }
    ])
    .addField('.form__email', [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Email обязателен'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный Email'
      }
    ])
    .addField('.form__phone', [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Телефон обязателен'
      }
      // {
      //     rule: 'function',
      //     validator: function () {
      //         const phone = selector.inputmask.unmaskedvalue();
      //         return phone.length === 10;
      //     },
      //     errorMessage: 'Введите корректный телефон',
      // },
    ])
    .onSuccess((event) => {
      console.log('Validation passes and form submitted', event)

      let formData = new FormData(event.target)

      console.log(...formData)

      let xhr = new XMLHttpRequest()

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
          }
        }
      }

      xhr.open('POST', 'files/mail.php', true)
      xhr.send(formData)

      event.target.reset()
    })
}
