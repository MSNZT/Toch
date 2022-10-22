const swiper = new Swiper('.tariffs-slider', {
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
