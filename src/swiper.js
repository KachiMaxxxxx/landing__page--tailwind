import Swiper from "swiper/bundle";
import "swiper/css/bundle";

/* init swiper */
const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 960px
    960: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    // when window width is >= 1330px
    1330: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
})