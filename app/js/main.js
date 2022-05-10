
//слайдер в hero секции
const swiperHero = new Swiper('.js-hero-swiper', {
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
const swiperGallerey = new Swiper('.js-gallerey-swiper', {
  // Optional parameters
  direction: 'horizontal',
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
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 35
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
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
  slidesPerView: 3,
  spaceBetween: 50,
  // Navigation arrows
  navigation: {
    nextEl: '.js-swiper-button-next1',
    prevEl: '.js-swiper-button-prev1',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 31
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1345: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  }
});
////////слайдер в project///
const swiperPartners = new Swiper('.js-project-partners', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 50,
  // Navigation arrows
  navigation: {
    nextEl: '.js-swiper-button-next2',
    prevEl: '.js-swiper-button-prev2',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 33
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
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
    this.classList.toggle('active');
    document.querySelector('.gallerey__dropdown-list').classList.toggle('gallerey__dropdown-list--hidden')
  })
  gallereyDropListItem.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.stopPropagation()
      gallereyBtn.innerText = this.innerText;
      gallereyBtn.classList.remove('active')
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
/////табы в каталоге///////////
(() => {
  function setTabs(dataPath, dataTarget) {
    const btns = document.querySelectorAll(`.js-tab-btn[${dataPath}]`);
    const contents = document.querySelectorAll(`.js-tab-content[${dataTarget}]`);
    btns.forEach((btn) => {
      btn.addEventListener('click', function (evt) {
        evt.preventDefault();
        const path = this.getAttribute(dataPath);
        const target = document.querySelector(`.js-tab-content[${dataTarget}="${path}"]`);
        btns.forEach((currentBtn) => {
          currentBtn.classList.remove('tab-active');
        });
        this.classList.add('tab-active');
        contents.forEach((content) => {
          content.classList.remove('tab-active');
        });
        target.classList.add('tab-active');
      });
    });
  }
  setTabs('data-country-btn', 'data-country-content'); // в аргументах функции передаем индивидуальные data атрибуты, которые установлены в разметке для кнопок и вкладок
  setTabs('data-painters-path', 'data-painters-target');
  setTabs('data-other-painters-path', 'data-other-painters-target');
})();
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
const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}
function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}
function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);
    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }
    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);
      btn.classList.toggle(params.activeClassName);
      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}
setMenuListener();
////////маска для телефона///////////////
(function () {
  const maskTel = document.querySelector('.js-form-tel');
  const im = new Inputmask('+7 (999) 999-99-99');
  im.mask(maskTel)
}());
///////////валидация формы///////////
(function () {
  function validateForms(selector, rules, messages) {
    new window.JustValidate(selector, {
      colorWrong: '#D11616',
      rules: rules,
      messages: messages,
      submitHandler: function (form, values, ajax) {
        console.log(form);
      }
    })
  };
  validateForms('.form',
    { fio: { required: true }, tel: { required: true } },
    { fio: 'Введите свое имя', tel: 'Укажите свой телефон' }
  );
}());

///////мобильное меню////////
(function () {
  const btnBurger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = document.querySelector('.close');
  btnBurger.addEventListener('click', function () {
    mobileMenu.classList.remove('mobile-menu--hidden')
  });
  closeMenu.addEventListener('click', function () {
    mobileMenu.classList.add('mobile-menu--hidden')
  });
  mobileMenu.addEventListener('click', function (e) {
    this.classList.add('mobile-menu--hidden')
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
      document.querySelector('body').style.overflow = 'hidden';
      closeModal(modal)
    });
  });
  function closeModal(modal) {
    modal.addEventListener('click', function () {
      document.querySelector('body').style.overflow = 'auto';
      this.classList.remove('active');
    });
  }
}());

///плавный скролл///
(function () {
  const anchoLinks = document.querySelectorAll('[data-anchor]');
  anchoLinks.forEach((item) => {
    item.addEventListener('click', function () {
      const currentLinks = this.dataset.anchor;
      const currentSecion = document.getElementById(`${currentLinks}`)
      scrollTo(currentSecion)
    });
    function scrollTo(currentSecion) {
      window.scroll({
        left: 0,
        top: currentSecion.offsetTop,
        behavior: 'smooth'
      })
    };
  });
}());

////инициализация аккордиона///////////
(function () {
  (() => {
    new Accordion(".js-accordion-container", {
      openOnInit: [0]
    });
  })();
}());

