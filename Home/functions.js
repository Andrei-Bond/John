let menuBody = document.querySelector('.menu__body');
let menuIcon = document.querySelector('.menu__icon');

menuIcon.addEventListener('click', function(){
	menuIcon.classList.toggle('_active');
	menuBody.classList.toggle('_active');
})