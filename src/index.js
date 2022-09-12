import './main.scss'

//Import Layout

import './layout/main/main.scss'

//Import common components
import './components/header/header'
import './components/footer/footer'

// Import index page components
import './components/pages/index/hero/hero'
import './components/pages/index/contacts/contacts'
import './components/pages/index/story/story'
import './components/pages/index/special/special'
import './components/pages/index/testimonial/testimonial'

// Swiper initialization
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper(".mySwiper", {
   modules: [Navigation, Pagination],
   loop: true,
   grabCursor: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      1200: {
         slidesPerView: 2.5,
         spaceBetween: 30,
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      320: {
         slidesPerView: 1,
      }
   }
});