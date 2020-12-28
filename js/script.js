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
let heightResult = clientHeight / 4;
let scroll = document.querySelector('.scroll');
window.addEventListener("scroll",add);
function add(){
	if (window.pageYOffset >= heightResult) {
		scroll.classList.add('scroll__active');
	}else {
		scroll.classList.remove('scroll__active');
	}
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
// Корзина покупок
// let buyButton = document.querySelectorAll('.buy-button');
// let buyItem = document.querySelectorAll('.sofa__product');
// let cartHold = document.querySelector('.cart__holder');
// let cartImg = document.querySelectorAll('.sofa__img');
// let cartName = document.querySelectorAll('.sofa__product__title');
// let cartPrice = document.querySelectorAll('.sofa__price');
// let deleteCart = document.querySelectorAll('.delete__cart');
// let cartItem = document.querySelectorAll('.cart__item')
// let out = '';
// for(let i = 0;i<buyButton.length;i++){
// 	buyButton[i].onclick = function(){
// 		out += '<div class="cart__item">';
// 		out += '<div class="cart__left">';
// 		out += '<img src="' + cartImg[i].src +'" alt="" class="cart__img">';
// 		out += '<span class="cart__name">' + cartName[i].innerHTML +' </span>';
// 		out += '</div>';
// 		out += '<div class="cart__right__holder">';
// 		out += '<div class="cart__right">';
// 		out += '<span class="cart__count cart__right__title"> ' + 1 +'</span>';
// 		out += '<span class="cart__sum cart__right__title"> * </span>';
// 		out += '<span class="price__holder">';
// 		out += '<span class="cart__price cart__right__title">' + cartPrice[i].innerHTML +'</span>';
// 		out += '<span class="cart__ru cart__right__title"> ru </span>';
// 		out += '</span>';
// 		out += '</div>';
// 		out += '<i class="delete__cart fal fa-times"></i>';
// 		out += '</div>';
// 		out += '</div>';
// 		cartHold.innerHTML = out;
// 	}
// }
// for(let i = 0;i<deleteCart;i++){
// 	deleteCart[i].onclick = function(){
// 		cartItem[i].deleteContents()
// 	}
// }
// Отправка формы
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
