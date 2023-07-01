let header__menu = document.querySelector('.header__burger');
header__menu.addEventListener('click', function() {
	let burger = document.querySelector('.header__menu');
	burger.classList.toggle('menu-active');
});