import Swiper from "swiper/bundle";
import "swiper/css/bundle";

/* init swiper */
const swiper = new Swiper('.swiper', {
  // Add your Swiper options here
  loop: true,
  pagination: {
	el: '.swiper-pagination',
  },
  navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
  },
});