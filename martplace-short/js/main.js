// Burger menu
const iconMenu = document.querySelector('.header__menu');
const menuBody = document.querySelector('.header__list');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle('header__menu--active');
    menuBody.classList.toggle('header__list--active');
  });
}



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




//Footer menu
const headers = document.querySelectorAll(".footer__btn");

headers.forEach(function (item) {
  item.addEventListener("click", headerClick);
});

function headerClick() {
  this.nextElementSibling.classList.toggle("_active");
}