const tariffsSlider = new Swiper('.tariffs-slider', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    726: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

const stepsSlider = new Swiper('.steps-slider', {
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
      // spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      // spaceBetween: 20
    },

  }
});

const reviewsSlider = new Swiper('.reviews-slider', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.reviews-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    600: {
      slidesPerView: 1.5,
    },
    900: {
      slidesPerView: 2,
    },
  }
});
