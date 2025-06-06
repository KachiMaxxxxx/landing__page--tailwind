import Swiper from "swiper/bundle";
import "swiper/css/bundle";

/* init swiper */
const swiper = new Swiper(".swiper", {
  
  loop: true,
  

  autoplay: {
    delay: 5000,
  },


   pagination: {
    el: '.swiper-pagination',
    clickable: true, // Allow clicking bullets
  },


  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true, // Optional
  },
  
});
