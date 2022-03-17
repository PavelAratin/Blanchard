//слайдер в hero секции
const swiper = new Swiper('.js-hero__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
});
//слайдер  галереи
const swiperGallerey = new Swiper('.js-gallerey__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
});
///слайдер в секции events/////
const swiperEvents = new Swiper('.events__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 50,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//////////////////dropdown в галереи////////////
(function () {
  const gallereyBtn = document.querySelector('.gallerey__button');
  const gallereyDropListItem = document.querySelectorAll('.gallerey__dropdown-item');
  gallereyBtn.addEventListener('click', function () {
    document.querySelector('.gallerey__dropdown-list').classList.toggle('gallerey__dropdown-list--hidden')
  })
  gallereyDropListItem.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.stopPropagation()
      gallereyBtn.innerText = this.innerText;
      document.querySelector('.gallerey__dropdown-list').classList.add('gallerey__dropdown-list--hidden');
    });
  });
  //закрываем dropdown по клику за его пределами
  document.addEventListener('click', function (e) {
    if (e.target !== gallereyBtn) {
      document.querySelector('.gallerey__dropdown-list').classList.add('gallerey__dropdown-list--hidden')
    }
  })
}());
/////////////accordion в каталоге////////////////
(function () {
  const accordionTitles = document.querySelectorAll('[data-name="accordion-title"]');
  accordionTitles.forEach(function (item) {
    item.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('accordion__body--hidden')
    });
  });
}());
