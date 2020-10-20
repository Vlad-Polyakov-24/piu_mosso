import $ from 'jquery';
window.$ = $;
window.jquery = $;
window.jQuery = $;

import objectFitImages from 'object-fit-images';

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);
import 'swiper/swiper-bundle.css';

/*HEADER*/
/* $(window).scroll(function () {
	var top = $(document).scrollTop();
	if (top < 900) $(".header").removeClass('header-scroll');
	else $(".header").addClass('header-scroll');
}); */
/*=======*/

/*preloader*/
window.onload = function () {
	window.setTimeout(function () {
		document.body.classList.add('loaded');
	}, 500);
}
/*=======*/

/*scroll-top*/
$(window).scroll(function () {
	var top = $(document).scrollTop();
	if (top < 900) $(".scroll-top").removeClass('scroll-top--active');
	else $(".scroll-top").addClass('scroll-top--active');
});
/*=======*/

/*BURGER*/
$('.header__burger').click(function (event) {
	$(this).toggleClass('active');
	$('.header__menu').toggleClass('active');
	$('body').toggleClass('lock');
});

$('.header__menu-link').click(function (event) {
	$('body').removeClass('lock');
	$('.header__menu').removeClass('active');
	$('.header__burger').removeClass('active');
});
/*=========*/

/*SWIPER*/
const swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	/* 	loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		}, */
	direction: 'vertical',
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
});
/*=======*/

/*del*/
$(document).ready(function ($) {
	var $window = $(window), $element = $('.reason__item-min');

	function resize() {
		if ($window.width() > 1023) {
			return $element.addClass('reason__item-min-active');
		}
		$element.removeClass('reason__item-min-active');
	}

	$window.resize(resize).trigger('resize');
});
/*========*/

objectFitImages();