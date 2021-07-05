// Burger menu
const iconMenu = document.querySelector('.header__menu');
const menuBody = document.querySelector('.header__list');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle('header__menu--active');
    menuBody.classList.toggle('header__list--active');
  });
}

//-----------------------------------------------------------------------

//Magnific popup for the video and gallery
$('.gallery__link').magnificPopup({
  gallery: {
    enabled: true
  },
  navigateByImgClick: true,
  type: 'image',
  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function
    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function (openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
});

//-----------------------------------------------------------------------

const filterList = document.querySelector('.filters__inner');
const filterBtn = document.querySelector('.filters__btn');
if (filterBtn) {
  filterBtn.addEventListener("click", function (e) {
    filterList.classList.toggle('filters__inner--active');
  });
}

//-----------------------------------------------------------------------

//aside filters scroll
const asideFilter = document.querySelectorAll(".aside__btn"); //в скобках указываем элемент
asideFilter.forEach(function (item) {
  item.addEventListener("click", click);
});
function click() {
  this.nextElementSibling.classList.toggle("_active"); //не ставим точку для класса
} 

//-----------------------------------------------------------------------

// footerMenu scroll
const footerMenu = document.querySelectorAll(".footer__btn"); //в скобках указываем элемент
footerMenu.forEach(function (item) {
  item.addEventListener("click", click);
});
function click() {
  this.nextElementSibling.classList.toggle("_active"); //не ставим точку для класса
} 

//-----------------------------------------------------------------------

//Grid and list view
$('.filters__icon--grid').on('click', function(){
  $(this).addClass('filters__icon--active');
  $('.filters__icon--list').removeClass('filters__icon--active');
  $('.cards__item').removeClass('cards__item--list');
});

$('.filters__icon--list').on('click', function(){
  $(this).addClass('filters__icon--active');
  $('.filters__icon--grid').removeClass('filters__icon--active');
  $('.cards__item').addClass('cards__item--list');
});

//-----------------------------------------------------------------------

//mixitup for store-page
var mixer = mixitup('.cards__list');