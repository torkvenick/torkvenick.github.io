const swiperTariff = new Swiper('.tariff__slider', {
  speed: 500,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.tariff__arrow--next',
    prevEl: '.tariff__arrow--prev',
  },
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperClients = new Swiper('.clients__inner', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.clients__arrow--next',
    prevEl: '.clients__arrow--prev',
  },
  keyboard: {
    enabled: true,
  },
});

$(function () {
  $('.tariff__button').on('click', function (e) {
    e.preventDefault();
    $('.tariff__button').removeClass('tariff__button--active');
    $(this).addClass('tariff__button--active');
  });
});

const btnSocial = document.querySelector('.header__btn');
const menuSocial = document.querySelector('.header__social');

if (btnSocial) {
  btnSocial.addEventListener("click", function (e) {
    menuSocial.classList.toggle('header__social--active');
    btnSocial.classList.toggle('header__btn--active');
  })
};