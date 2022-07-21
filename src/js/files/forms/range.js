// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';
import "../../../scss/base/forms/range.scss";

export function rangeInit() {
	const priceSlider = document.querySelector('#price-filter__range');
	if (priceSlider) {
		// let textFrom  riceSlider.getAttribute('data-to');
		noUiSlider.create(priceSlider, {
			start: [0, 22780], // [0,200000]
			connect: true,
			range: {
				'min': [0],
				'max': [22780]
			}
		});
		const input0 = document.querySelector('[data-from]');
		const input1 = document.querySelector('[data-to]');
		const textInputs = [input0, input1]
		priceSlider.noUiSlider.on('update', function (values, handle) {
			textInputs[handle].value = Math.round(values[handle])
		})

		const setRangeSlider = (i, value) => {
			let arr = [null, null]
			arr[i] = value

			priceSlider.noUiSlider.set(arr)
		}

		textInputs.forEach((el, index) => {
			el.addEventListener('change', (e) => {
				setRangeSlider(index, e.currentTarget.value)
			})
		})
		/*
		const priceStart = document.getElementById('price-start');
		const priceEnd = document.getElementById('price-end');
		priceStart.addEventListener('change', setPriceValues);
		priceEnd.addEventListener('change', setPriceValues);
		*/
		function setPriceValues() {
			let priceStartValue;
			let priceEndValue;
			if (priceStart.value != '') {
				priceStartValue = priceStart.value;
			}
			if (priceEnd.value != '') {
				priceEndValue = priceEnd.value;
			}
			priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
		}
	}

	const numberOfPlayersSlider = document.querySelector('#num-players__range');
	if (numberOfPlayersSlider) {
		// let textFrom  riceSlider.getAttribute('data-to');
		noUiSlider.create(numberOfPlayersSlider, {
			start: [0, 6],
			step: 1,
			connect: true,
			range: {
				'min': [1],
				'max': [6]
			},
			pips: { mode: 'count', values: 6 }
		});

		let pips = numberOfPlayersSlider.querySelectorAll('.noUi-value');
		console.log(pips)

		function clickOnPip() {
			let value = Number(this.getAttribute('data-value'));
			numberOfPlayersSlider.noUiSlider.set(value);
		}

		for (let i = 0; i < pips.length; i++) {

			// For this example. Do this in CSS!
			pips[i].style.cursor = 'pointer';
			pips[i].addEventListener('click', clickOnPip);

		}
	}
}
rangeInit();
