
//слайдер в hero секции
const swiperHero = new Swiper('.js-hero__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 10000
  },
  speed: 10000,
  effect: "fade"
});
//слайдер  галереи
const swiperGallerey = new Swiper('.js-gallerey__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1345: {
      slidesPerView: 3,
      spaceBetween: 48
    }
  }
});
///слайдер в секции events/////
const swiperEvents = new Swiper('.events__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 50,
  // Navigation arrows
  navigation: {
    nextEl: '.js-swiper-button-prev1',
    prevEl: '.js-swiper-button-next1',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
      // If we need pagination
    },
    1345: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  }
});
////////слайдер в project///
const swiperPartners = new Swiper('.js-project__partners', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.js-swiper-button-prev2',
    prevEl: '.js-swiper-button-next2',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
      // If we need pagination
    },
    1345: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  }
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
      this.classList.toggle('active')
      this.nextElementSibling.classList.toggle('accordion__body--hidden')
    });
  });
}());
////////////код для карты///////
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.757290, 37.622748],
    zoom: 15,
    // controls: ['default', 'routeButtonControl']
  }),

    // Создаем метку с помощью вспомогательного класса.
    myPlacemark1 = new ymaps.Placemark([55.751979, 37.617499], {
      // Свойства.
      // Содержимое хинта.
      hintContent: 'Надпись, которая всплаывет при наведении на метку'
    }, {
      // Опции
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../img/marker-map.svg',
      // Размеры метки.
      iconImageSize: [20, 20],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-65, -110]
    })


  // Добавляем все метки на карту.
  myMap.geoObjects
    .add(myPlacemark1)

}
////////////////////////////////
/////dropdown-menu в шапке сайта//////////

(function () {
  const headerItem = document.querySelectorAll('.header__item');
  const headerLink = document.querySelectorAll('.header__link-text');

  headerLink.forEach(function (item) {
    item.addEventListener('click', function () {
      item.classList.toggle('active');
    });
  });

  headerItem.forEach(function (item) {
    item.addEventListener('click', function () {
      const current = this.dataset.dropdown;
      console.log('Клик по текущему элементу = ', this.dataset.dropdown);
      toggleVisibleDropdown(current)
    });
  });

  function toggleVisibleDropdown(current) {
    const dropdownContainer = document.querySelector('#' + current)
    if (dropdownContainer.dataset.dropdown === current) {
      dropdownContainer.classList.toggle('dropdown-container--active');
      document.addEventListener('click', (e) => {
        if(!e.target.classList.contains('header__link-text')){
          dropdownContainer.classList.remove('dropdown-container--active');          
        }      
      });
    }
  }
}());

////////маска для телефона///////////////
(function () {
  const maskTel = document.querySelector('.js-form__input');
  const im = new Inputmask('+7 (999) 999-99-99');
  im.mask(maskTel)
}());
///////////валидация формы///////////
(function () {
  function validateForms(selector, rules) {
    new window.JustValidate(selector, {
      rules: rules,
      submitHandler: function (form, values, ajax) {
        console.log(form);
      }
    })
  };
  validateForms('.form', { email: { required: true, email: true }, fio: { required: true }, tel: { required: true } });
}());

///////мобильное меню////////
(function () {
  const btnBurger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = document.querySelector('.close');
  btnBurger.addEventListener('click', function () {
    mobileMenu.classList.remove('mobile-menu__hidden')
  });
  closeMenu.addEventListener('click', function () {
    mobileMenu.classList.add('mobile-menu__hidden')
  });
  mobileMenu.addEventListener('click', function (e) {
    this.classList.add('mobile-menu__hidden')
  });
}());
////////модальные окна в галереи///
(function () {
  const modalBtns = document.querySelectorAll('.swiper-slide__imgbox-overlay');
  modalBtns.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const currentBtn = this.closest('[data-modal]').dataset.modal;
      const modal = document.querySelector('#' + currentBtn);
      modal.classList.add('active');
      closeModal(modal)
    });
  });
  function closeModal(modal) {
    modal.addEventListener('click', function () {
      this.classList.remove('active');
    });
  }
}());

