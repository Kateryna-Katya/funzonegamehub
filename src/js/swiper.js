import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

let testimonialsSwiper = null;

function initTestimonialsSwiper() {
  if (window.innerWidth >= 1440) return;

  if (!testimonialsSwiper) {
    testimonialsSwiper = new Swiper('.testimonials-swiper', {
      modules: [Autoplay],

      slidesPerView: 1.1,
      spaceBetween: 16,
      loop: true,
      speed: 800,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
    });
  }
}

function destroyTestimonialsSwiper() {
  if (testimonialsSwiper) {
    testimonialsSwiper.destroy(true, true);
    testimonialsSwiper = null;
  }
}

function handleTestimonialsSwiper() {
  if (window.innerWidth < 1440) {
    initTestimonialsSwiper();
  } else {
    destroyTestimonialsSwiper();
  }
}

handleTestimonialsSwiper();

window.addEventListener('resize', handleTestimonialsSwiper);