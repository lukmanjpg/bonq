// Бургер меню
let burger = document.querySelector('.burger__holder');
let dropdown = document.querySelector('.dropdown');
burger.onclick = function() {
	dropdown.classList.toggle('dropdown__active');
}
// Появление кнопки скролла
let clientHeight = document.documentElement.clientHeight;
let heightResult = clientHeight / 2;
let scroll = document.querySelector('.scroll');
window.addEventListener("scroll",add);
function add(){
	if (window.pageYOffset >= heightResult) {
		scroll.classList.add('scroll__active');
	}else {
		scroll.classList.remove('scroll__active');
	}
}
// Анимация скролла к верху страницы
scroll.onclick = function(){
	window.scrollTo({ top: 0, behavior: 'smooth' })
}
// Превращение в фиксированную шапку
let header = document.querySelector('header');
window.addEventListener("scroll",fixedHeader);
function fixedHeader(){
	let topWrap = document.querySelector('.top');
	let height = header.offsetHeight;
	if (window.pageYOffset >= heightResult) {
		header.classList.add('fixedHeader');
		topWrap.style.marginBottom = height + 'px';
	}else {
		header.classList.remove('fixedHeader');
		topWrap.style.marginBottom = '0px';
	}
}
// выпадающее блок при SELECT
let selectTitle = document.querySelector('.select__contact');
let select = document.querySelector('.form-select');
let dropdownSelect = document.querySelector('.custom__select');
let selectOption = document.querySelectorAll('.select__item');
let formOption = document.querySelector('.form-option');
select.addEventListener("click",selectFunc);
function selectFunc(){
	dropdownSelect2.classList.remove('active');
	dropdownSelect.classList.toggle('active');
	for(let i = 0;i<selectOption.length;i++){
		selectOption[i].onclick = function(){
			for(let i = 0;i<selectOption.length;i++){
				selectOption[i].classList.remove('active');
			}
			formOption.value = selectOption[i].innerHTML;
			selectTitle.innerHTML = selectOption[i].innerHTML;
			selectOption[i].classList.add('active');
		}
	}
}
// выпадающее меню с ценами
let selectTitle2 = document.querySelector('.select__price__title');
let select2 = document.querySelector('.price-select');
let dropdownSelect2 = document.querySelector('.custom__price__select');
let selectOption2 = document.querySelectorAll('.price__item');
let formOption2 = document.querySelector('.form-option-second');
select2.addEventListener("click",selectFunc2);
function selectFunc2(){
	dropdownSelect2.classList.toggle('active');
	dropdownSelect.classList.remove('active');
	for(let i = 0;i<selectOption2.length;i++){
		selectOption2[i].onclick = function(){
			for(let i = 0;i<selectOption2.length;i++){
				selectOption2[i].classList.remove('active');
			}
			formOption2.value = selectOption2[i].innerHTML;
			selectTitle2.innerHTML = selectOption2[i].innerHTML;
			selectOption2[i].classList.add('active');
		}
	}
}
// Переключение формы
let targetItem = document.querySelectorAll('.target__item');
let targetCircle = document.querySelectorAll('.target-circle');
let formContent = document.querySelector('.contact__form');
let formItem = document.querySelectorAll('.contact__form__item');
for(let i = 0;i<targetItem.length;i++){
	targetItem[i].onclick = function(){
		let tabId = targetCircle[i].getAttribute('form-data');
		for(let i = 0;i<targetCircle.length;i++){
			targetCircle[i].classList.remove('active');
		}
		for(let i = 0;i<formItem.length;i++){
			formItem[i].classList.remove('active');
		}
		formItem[i].classList.add('active');
		targetCircle[i].classList.add('active');
		formContent.style.height = formItem[i].offsetHeight + 'px';
	}
}
function chaseHeight(){
	let firstForm = document.querySelector('.firstForm');
	formContent.style.height = firstForm.offsetHeight + 'px';
}
chaseHeight();
// Открытие модального окна с обратной связью
let formClick = document.querySelector('.formClick');
let contactWrap = document.querySelector('.contact__wrap');
let contactModal = document.querySelector('.contact__modal');
formClick.onclick = function(){
	contactModal.classList.add('active');
	contactWrap.classList.add('active');
	let close = document.querySelector('.close__modal');
	close.addEventListener("click",closeModal);
}
function closeModal(){
	contactWrap.classList.remove('active');
	contactModal.classList.remove('active');
}
// Обработка формы
let formFirst = document.querySelector('.formLogin');
let firstFormReq = document.querySelectorAll('.formLogin ._req');
formFirst.addEventListener("submit",formCheck);
function formCheck(){
	let index = 0;
	for(let i = 0;i<firstFormReq.length;i++) {
		firstFormReq[i].classList.remove('empty');
		if (firstFormReq[i].value === '') {
			index++;
			firstFormReq[i].classList.add('empty');
		}
		console.log({index});
	}
	if (index === 0) {
		alert('succses');
	}
}
// Обработка второй формы
let formSecond = document.querySelector('.formLogin2');
let secondFormReq = document.querySelectorAll('.formLogin2 ._req');
formSecond.addEventListener("submit",secondFormCheck);
function secondFormCheck(){
	let count = 0;
	let selectOption = document.querySelector('.form-option');
	let secondOption = document.querySelector('.form-option-second');
	let optionReq = document.querySelectorAll('.option_req');
	let customReq = document.querySelectorAll('.customReq');
	for(let i = 0;i<secondFormReq.length;i++) {
		secondFormReq[i].classList.remove('empty');
		if (secondFormReq[i].value === '') {
			count++;
			secondFormReq[i].classList.add('empty');
		}
		console.log({count});
	}
	for(let i = 0;i<optionReq.length;i++){
		customReq[i].classList.remove('empty');
		if (optionReq[i].value === '') {
			count++;
			customReq[i].classList.add('empty');
		}
		console.log(count);
	}
	if (count === 0) {
		alert('succses');
	}

}
// Корзина покупок
let cart = {};
// Массив с информацией о стульев
let array = [
   {
      "id": 9,
      "name":"Диван Forest",
      "cost":24990,
      "units":"kg",
      "description":"red",
      "image":"chair.jpg",
      "category":1
   },
   {
      "id": 10,
      "name":"Диван Black",
      "cost":24990,
      "units":"kg",
      "description":"red",
      "image":"chair.jpg",
      "category":1
   },
   {
      "id": 11,
      "name":"Диван Yellow",
      "cost":24990,
      "units":"kg",
      "description":"red",
      "image":"chair.jpg",
      "category":1
   },
   {
      "id": 12,
      "name":"Диван Yellow",
      "cost":24990,
      "units":"kg",
      "description":"red",
      "image":"chair.jpg",
      "category":1
   },
   {
      "id": 13,
      "name":"Диван Yellow",
      "cost":2600,
      "units":"kg",
      "description":"red",
      "image":"chair.jpg",
      "category":1
   },
   {
      "id": 14,
      "name":"Диван Yellow",
      "cost":15,
      "units":"kg",
      "description":"red",
      "image":"chair.jpg",
      "category":1
   },
   {
      "id": 15,
      "name":"Диван Yellow",
      "cost":15,
      "units":"kg",
      "description":"red",
      "image":"chair.jpg",
      "category":1
   },
   {
      "id": 16,
      "name":"Диван Green",
      "cost":15,
      "units":"kg",
      "description":"red",
      "image":"chair.jpg",
      "category":1
   }
];
// Массив с информацией о стульев
let array2 = [
   {
      "id": 1,
      "name":"Диван Forest",
      "cost":24990,
      "units":"kg",
      "description":"red",
      "image":"divan.jpg",
      "category":1
   },
   {
      "id": 2,
      "name":"Диван Black",
      "cost":24990,
      "units":"kg",
      "description":"red",
      "image":"divan.jpg",
      "category":1
   },
   {
      "id": 3,
      "name":"Диван Yellow",
      "cost":24990,
      "units":"kg",
      "description":"red",
      "image":"divan.jpg",
      "category":1
   },
   {
      "id": 4,
      "name":"Диван Yellow",
      "cost":24990,
      "units":"kg",
      "description":"red",
      "image":"divan.jpg",
      "category":1
   },
   {
      "id": 5,
      "name":"Диван Yellow",
      "cost":2600,
      "units":"kg",
      "description":"red",
      "image":"divan.jpg",
      "category":1
   },
   {
      "id": 6,
      "name":"Диван Yellow",
      "cost":15,
      "units":"kg",
      "description":"red",
      "image":"divan.jpg",
      "category":1
   },
   {
      "id": 7,
      "name":"Диван Yellow",
      "cost":15,
      "units":"kg",
      "description":"red",
      "image":"divan.jpg",
      "category":1
   },
   {
      "id": 8,
      "name":"Диван Green",
      "cost":15,
      "units":"kg",
      "description":"red",
      "image":"divan.jpg",
      "category":1
   }
];
checkCart();
function checkCart(){
	let result = localStorage.getItem('cart');
	if (result != null) {
		cart = JSON.parse(result);
	}
}
// Вывод выбранных продуктов
function showCart(){
	let out = '';
	for(let key in cart){
		for(key2 in array){
			console.log(array[key2]);
			if(array[key2].id == key){
				out += '<div class="cart__item">';
				out += '<div class="img-name-holder">';
				out += '<div class="chair__img__holder">';
				out += '<img src="img/'+ array[key2].image +'" alt="" class="cart__img">';
				out += '<i class="delete__cart__media fal fa-times" data-id="'+ array[key2].id +'"></i>';
				out += '</div>';
				out += '<div class="cart__inner name__holder">';
				out += '<span class="cart__name">'+ array[key2].name +'</span>';
				out += '</div>';
				out += '</div>';
				out += '<div class="cart__inner">';
				out += '<span class="count__price">'+ array[key2].cost +'</span>';
				out += '</div>';
				out += '<div class="cart__inner">';
				out += '<input type="number" class="changeInput" value="'+ cart[key] +'">';
				out += '</div>';
				out += '<div class="cart__inner">';
				out += '<span class="cart__price">'+ array[key2].cost * cart[key] +'</span>';
				out += '<i class="delete__cart fal fa-times" data-id="'+ array[key2].id +'"></i>';
				out += '</div>';
				out += '</div>';
			}
		}
	}
	for(let key in cart){
		for(key2 in array2){
			if(array2[key2].id == key){
				out += '<div class="cart__item">';
				out += '<div class="img-name-holder">';
				out += '<div class="sofa__img__holder">';
				out += '<img src="img/'+ array2[key2].image +'" alt="" class="cart__img">';
				out += '<i class="delete__cart__media fal fa-times" data-id="'+ array2[key2].id +'"></i>';
				out += '</div>';
				out += '<div class="cart__inner name__holder">';
				out += '<span class="cart__name">'+ array2[key2].name +'</span>';
				out += '</div>';
				out += '</div>';
				out += '<div class="cart__inner">';
				out += '<span class="count__price">'+ array2[key2].cost +'</span>';
				out += '</div>';
				out += '<div class="cart__inner">';
				out += '<input type="number" class="changeInput" value="'+ cart[key] +'">';
				out += '</div>';
				out += '<div class="cart__inner">';
				out += '<span class="cart__price">'+ array2[key2].cost * cart[key] +'</span>';
				out += '<i class="delete__cart fal fa-times" data-id="'+ array2[key2].id +'"></i>';
				out += '</div>';
				out += '</div>';
			}
		}
	}
	document.querySelector('.cart__product__holder').innerHTML = out;
	deleteProduct();
	changeCountProduct();
	showMiniCart();

}
function deleteProduct(){
	let deleteButton = document.querySelectorAll('.delete__cart');
	for(let i = 0;i<deleteButton.length;i++){
		deleteButton[i].onclick = function(){
			let id = deleteButton[i].getAttribute('data-id');
			delete cart[id];
			saveCartToLS();
			showCart();
			totalPrice();
			showMiniCart();
		}
	}
}

function deleteProductSecond(){
	let deleteButton = document.querySelectorAll('.delete__cart__media');
	for(let i = 0;i<deleteButton.length;i++){
		deleteButton[i].onclick = function(){
			let id = this.getAttribute('data-id');
			delete cart[id];
			saveCartToLS();
			showCart();
			totalPrice();
			showMiniCart();
		}
	}
}

showCart();
function saveCartToLS(){
    localStorage.setItem('cart', JSON.stringify(cart) );
}
function totalPrice(){
	let showPrice = document.querySelector('.price__num');
	let totalPrice = document.querySelector('.total__price');
	let zero = 0;
	for(let key in cart){
		for(key2 in array){
			if(array[key2].id == key){
				zero += array[key2].cost * cart[key];
			}
		}
	}
	for(let key in cart){
		for(key2 in array2){
			if(array2[key2].id == key){
				zero += array2[key2].cost * cart[key];
			}
		}
	}
	totalPrice.innerHTML = zero;
	if(cart != undefined){
		let priceDelivery = document.querySelector('.delivery__country__price');
		let result = zero - priceDelivery.innerHTML;
		showPrice.innerHTML = result;
	}
}
totalPrice();
function changeCountProduct(){
	let input = document.querySelectorAll('.changeInput');
	let deleteButton = document.querySelectorAll('.delete__cart');
	for(let i = 0;i<input.length;i++){
		input[i].onchange = function(){
			let id = deleteButton[i].getAttribute('data-id');
			let valueNumber = Number(input[i].value);
			cart[id] = valueNumber;
			if (cart[id] < 1) {
				delete cart[id];
			}
			saveCartToLS();
			totalPrice();
			showCart();
			showMiniCart();
		}
	}
}
changeCountProduct();
// Вывод количество продуктов
function showMiniCart(){
	let zero = 0;
	for(let key in cart){
		for(key2 in array){
			if(array[key2].id == key){
				zero += cart[key];
			}
		}
	}
	for(let key in cart){
		for(key2 in array2){
			if(array2[key2].id == key){
				zero += cart[key];
			}
		}
	}
	document.querySelector('.header__buy__num').innerHTML = zero;

}
showMiniCart();
// var countries = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo-Brazzaville', 'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cura?ao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'R?union', 'Romania', 'Russia', 'Rwanda', 'Saint Barth?lemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'S?o Tom? and Pr?ncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];
// let empty = '';
// let discount = document.querySelector('.discount');
// for(let i = 0;i<countries.length;i++){
// 	empty += countries[i];
// 	empty += '<br>';
// 	discount.innerHTML = empty;
// }