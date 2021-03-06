// Слайдер
let tabBtn = document.querySelectorAll('.slider__target');
let tabItem = document.querySelector('.slider__line');
tabBtn.forEach(function(item){
	item.addEventListener('click', function(){
		let currentBtn = item;
		let tabContent = currentBtn.getAttribute("tab-index");
		tabBtn.forEach(function(item){
			item.classList.remove('target-active');
		})
		tabItem.classList.remove('slider-1');
		tabItem.classList.remove('slider-2');
		tabItem.classList.remove('slider-3');
		tabItem.classList.add(tabContent);
		currentBtn.classList.add('target-active');
	});

});
// Бургер меню
let burger = document.querySelector('.burger__holder');
let dropdown = document.querySelector('.dropdown');
burger.onclick = function() {
	dropdown.classList.toggle('dropdown__active');
}
// Появление кнопки при скролле
window.onload = function(){ 
  window.addEventListener('scroll', scrollAnimation);
  let scrollElements = document.querySelectorAll('.scroll__elem');
  let clientHeight = document.documentElement.clientHeight;
  let result = clientHeight / 5;
  let plusResult = window.pageYOffset + clientHeight - result;
  function scrollAnimation(){
   for(let i = 0;i<scrollElements.length;i++){
      if (plusResult >= scrollElements[i].getBoundingClientRect().top) {
        scrollElements[i].classList.add('anim');
      }
    }
  }
  scrollAnimation();
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
// Появление корзины при нажатии
let buyCart = document.querySelector('.header-buy');
let cartWrap = document.querySelector('.cart__wrap');
let cartClose = document.querySelector('.close__cart');
buyCart.onclick = function(){
	cartWrap.classList.add('cartWrapActive');
}
cartClose.onclick = function(){
	cartWrap.classList.remove('cartWrapActive');	
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
let cart = {};
getProducts();
checkCart();

// Вывод продуктов на страницу
function getProducts(){
	let out = '';
	for(let i in array){
		out += ' <div class="sofa__item sofa__product">';
		out += '<div class="sofa__top chair__top">';
		out += '<img src="img/' + array[i].image + '" alt="" class="sofa__img">'
		out += '<div class="sofa__top__holder">';
		out += '<div class="sofa__top__item heart"><i class="far fa-heart"></i></div>';
		out += '<div class="sofa__top__item eye"> <i class="far fa-eye"></i></div>';
		out += '<div class="sofa__top__item chart"><i class="far fa-chart-bar"></i></div>';
		out += '</div>';
		out += '<div class="buy-button chair-button" data-id="'+ array[i].id +'"><i class="fal fa-shopping-cart"></i><span>В корзину</span></div>';
		out += '</div>';
		out += '<p class="product__name sofa__product__title">' + array[i].name +'</p>';
		out += '<p class="product__price sofa__price">' + array[i].cost +'</p>';
		out += '</div>';
		out += '</div>';
	}
	document.querySelector('.chairWrap').innerHTML = out;
	let btn = document.querySelectorAll('.chair-button');
	for(let i = 0;i<btn.length;i++){
		btn[i].addEventListener("click",addToCard);
	}
}
// Добавление продуктов  на карту
function addToCard(){
	let id = this.getAttribute('data-id');
	if (cart[id] != undefined) {
		cart[id]++;
	}else {
		cart[id] = 1;
	}
	localStorage.setItem('cart', JSON.stringify(cart));
	showMiniCart();
	showCart();
}
// Проверка LocalStorage
function checkCart(){
	let result = localStorage.getItem('cart');
	if (result != null) {
		cart = JSON.parse(result);
	}
}



// function totalPrice(){
// 	let row = document.querySelector('.row');
// 	let zero = 0;
// 	for(let key in cart){
// 		for(key2 in array){
// 			if(array[key2].id == key){
// 				zero += array[key2].cost * cart[key];
// 			}
// 			console.log(zero);
// 		}
// 	}
// 	row.innerHTML = zero;
// }
// Массив с информацией о DIVAN
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
// Вывод продуктов с диван на страницу
function getSofaProducts(){
	let out = '';
	for(let i in array2){
		out += ' <div class="sofa__item sofa__product">';
		out += '<div class="sofa__top">';
		out += '<img src="img/' + array2[i].image + '" alt="" class="sofa__img">'
		out += '<div class="sofa__top__holder">';
		out += '<div class="sofa__top__item heart"><i class="far fa-heart"></i></div>';
		out += '<div class="sofa__top__item eye"> <i class="far fa-eye"></i></div>';
		out += '<div class="sofa__top__item chart"><i class="far fa-chart-bar"></i></div>';
		out += '</div>';
		out += '<div class="buy-button sofa-button" data-id="'+ array2[i].id +'"><i class="fal fa-shopping-cart"></i><span>В корзину</span></div>';
		out += '</div>';
		out += '<p class="product__name sofa__product__title">' + array2[i].name +'</p>';
		out += '<p class="product__price sofa__price">' + array2[i].cost +'</p>';
		out += '</div>';
		out += '</div>';
	}
	document.querySelector('.sofaWrap').innerHTML = out;
	let btn = document.querySelectorAll('.sofa-button');
	for(let i = 0;i<btn.length;i++){
		btn[i].addEventListener("click",addToCardSofa);
	}
}
// Добавление на карту
function addToCardSofa(){
	let id = this.getAttribute('data-id');
	if (cart[id] != undefined) {
		cart[id]++;
	}else {
		cart[id] = 1;
	}
	localStorage.setItem('cart', JSON.stringify(cart));
	showMiniCart();
	showCart();
	deleteProduct();
}

getSofaProducts();
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
// Вывод выбранных продуктов
function showCart(){
	let out = '';
	for(let key in cart){
		for(key2 in array){
			if(array[key2].id == key){
				out += '<div class="cart__item chairCartItem">';
				out += '<div class="cart__left">';
				out += '<img src="img/'+ array[key2].image +'" alt="" class="cart__img">';
				out += '<span class="cart__name">'+ array[key2].name +'</span>';
				out += '</div>';
				out += '<div class="cart__right__holder">';
				out += '<div class="cart__right">';
				out += '<span class="cart__count cart__right__title">'+ cart[key] +'</span>';
				out += '<span class="cart__sum cart__right__title"> * </span>';
				out += '<span class="price__holder">';
				out += '<span class="cart__price cart__right__title">'+ array[key2].cost +'</span>';
				out += '<span class="cart__ru cart__right__title"> ru </span>';
				out += '</span>';
				out += '</div>';
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
				out += '<div class="cart__left">';
				out += '<img src="img/'+ array2[key2].image +'" alt="" class="cart__img">';
				out += '<span class="cart__name">'+ array2[key2].name +'</span>';
				out += '</div>';
				out += '<div class="cart__right__holder">';
				out += '<div class="cart__right">';
				out += '<span class="cart__count cart__right__title">'+ cart[key] +'</span>';
				out += '<span class="cart__sum cart__right__title"> * </span>';
				out += '<span class="price__holder">';
				out += '<span class="cart__price cart__right__title">'+ array2[key2].cost +'</span>';
				out += '<span class="cart__ru cart__right__title"> ru </span>';
				out += '</span>';
				out += '</div>';
				out += '<i class="delete__cart fal fa-times" data-id="'+ array2[key2].id +'"></i>';
				out += '</div>';
				out += '</div>';
		
			}
		}
	}
	document.querySelector('.cart__holder').innerHTML = out;
	deleteProduct();

}
showMiniCart();
showCart();


function deleteProduct(){
	let deleteButton = document.querySelectorAll('.delete__cart');
	for(let i = 0;i<deleteButton.length;i++){
		deleteButton[i].onclick = function(){
			let id = this.getAttribute('data-id');
			delete cart[id];
			showMiniCart();
			console.log(cart[id]);
			saveCartToLS();
			showCart();
		}
	}
}

function saveCartToLS(){
    localStorage.setItem('cart', JSON.stringify(cart) );
}
