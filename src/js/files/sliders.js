/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay, Pagination, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.main-slider__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.main-slider__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			centeredSlides: true,
			spaceBetween: 5,
			autoHeight: true,
			speed: 500,
			loop: true,
			preloadImages: false,
			lazy: true,
			// autoplay: {
			// 	delay: 4000,
			// 	disableOnInteraction: false,
			// },

			// Пагинация
			pagination: {
				el: '.main-slider__pagination',
				clickable: true,
			},
		});
	}

	if (document.querySelector('.time-buy__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.time-buy__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			// centeredSlides: true,
			spaceBetween: 30,
			// autoHeight: true,
			speed: 600,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.time-buy__button-prev',
				nextEl: '.time-buy__button-next',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				700: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1268: {
					slidesPerView: 4,
				},
			},
			// События
			on: {

			}
		});
	}

	if (document.querySelector('.offer__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.offer__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			// centeredSlides: true,
			spaceBetween: 30,
			// autoHeight: true,
			speed: 600,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.offer__button-prev',
				nextEl: '.offer__button-next',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				700: {
					slidesPerView: 2,
					speed: 300,
				},
				992: {
					slidesPerView: 3,
				},
				1268: {
					slidesPerView: 4,
				},
			},
			// События
			on: {

			}
		});
	}

	if (document.querySelector('.about-product__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.about-product__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Thumbs],
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 300,
			loop: true,

			navigation: {
				prevEl: '.about-product__button-prev',
				nextEl: '.about-product__button-next',
			},
			thumbs: {
				swiper: {
					el: '.about-product__slider-mini',
					slidesPerView: 3,
				}
			},
		});
	}
	if (document.querySelector('.about-product__slider-mini')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		let aboutProductSliderMini = new Swiper('.about-product__slider-mini', { // Указываем скласс нужного слайдера
			slidesPerView: 3,
			spaceBetween: 30,
			speed: 300,
		});
	}

	if (document.querySelector('.recently-viewed__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.recently-viewed__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 30,
			speed: 600,
			loop: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},
			navigation: {
				prevEl: '.recently-viewed____button-prev',
				nextEl: '.recently-viewed__button-next',
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				700: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1268: {
					slidesPerView: 4,
				},
			},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}
initSliders();

// window.addEventListener("load", function (e) {
// 	// Запуск инициализации слайдеров
// 	initSliders();
// 	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
// 	//initSlidersScroll();
// });

	// const bigSlider = new Swiper('.about-product__slider', { // Указываем скласс нужного слайдера
	// 	// Подключаем модули слайдера
	// 	// для конкретного случая
	// 	modules: [Navigation, Thumbs],
	// 	// observer: true,
	// 	// observeParents: true,
	// 	slidesPerView: 1,
	// 	// centeredSlides: true,
	// 	spaceBetween: 0,
	// 	speed: 600,
	// 	// loop: true,


	// 	navigation: {
	// 		prevEl: '.about-product__button-prev',
	// 		nextEl: '.about-product__button-next',
	// 	},
	// 	thumbs: {
	// 		swiper: {
	// 			el: '.about-product__slider-mini',
	// 			slidesPerView: 3,
	// 		}
	// 	},
	// });


	// const aboutProductSliderMini = new Swiper('.about-product__slider-mini', { // Указываем скласс нужного слайдера
	// 	// observer: true,
	// 	// observeParents: true,
	// 	slidesPerView: 3,
	// 	// centeredSlides: true,
	// 	spaceBetween: 30,
	// 	speed: 600,
	// 	// loop: true,
	// 	// direction: 'vertical',
	// })