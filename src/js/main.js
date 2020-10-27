import $ from 'jquery';

window.$ = $;
window.jquery = $;
window.jQuery = $;
import objectFitImages from 'object-fit-images';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock/lib/bodyScrollLock.es6';

import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);
import 'swiper/swiper-bundle.css';
import 'simplebar';
import 'simplebar/dist/simplebar.css';

require('@fancyapps/fancybox');
require('@fancyapps/fancybox/dist/jquery.fancybox.css');

/*preloader*/
window.onload = function () {
	window.setTimeout(function () {
		document.body.classList.add('loaded');
	}, 500);
};
/*=======*/

/*scroll-top*/
$(window).scroll(function () {
	var top = $(document).scrollTop();
	if (top < 900) $('.scroll-top').removeClass('scroll-top--active');
	else $('.scroll-top').addClass('scroll-top--active');
});

function mobileMenu() {
	let burgerBtn = document.getElementById('header__burger-btn');
	let navMenu = document.querySelector('.header__menu');
	let navMenuList = document.querySelector('.header__menu-list');
	let state = false;
	burgerBtn.addEventListener('click', () => {
		if (state === false) {
			openMenu();
		} else {
			closeMenu();
		}
	});
	navMenuList.addEventListener('click', function (e) {
		let target = e.target;
		if (target.closest('.header__menu-list li')) {
			closeMenu();
		}

	});

	function openMenu() {
		disableBodyScroll(navMenu);
		state = true;
		burgerBtn.classList.add('active');
		navMenu.classList.add('active');
	}


	function closeMenu() {
		enableBodyScroll(navMenu);
		state = false;
		burgerBtn.classList.remove('active');
		navMenu.classList.remove('active');

	}
}

/*SWIPER*/
const swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	effect: 'fade',
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

$('[data-fancybox="images"]').fancybox({
	// Options will go here
	loop: false,
});

let gallery = document.getElementById('top__gallery');
let state = true;

function scrollShowGallerySlide() {
	window.addEventListener('scroll', function () {
		if (gallery === null) return;
		if ((gallery.getBoundingClientRect().top + 300) - window.innerHeight < 0) {
			gallerySlideShow();
			state = false;
		}
	});
}

function gallerySlideShow() {
	if (gallery === null) return;
	if (!state) return;
	let galleryList = document.querySelector('.gallery__list');
	let galleryItem = document.querySelectorAll('.gallery__item');
	let caunt = 0;
	let galleryListWidth = galleryItem[0].scrollWidth * galleryItem.length;
	galleryList.style.width = galleryListWidth + 'px';
	for (let i = 0; i < galleryItem.length; i++) {
		let galleryItemClone = galleryItem[i].cloneNode(true);
		galleryItemClone.classList.add('gallery__item--clone');
		galleryList.appendChild(galleryItemClone);
	}

	setInterval(() => {

		if (caunt === -galleryListWidth) {
			caunt = 0;
		};
		galleryList.style.transform = `translateX(${caunt}px)`;
		caunt--;
	}, 10);
}

// gallerySlideShow();
scrollShowGallerySlide();
objectFitImages();
mobileMenu();