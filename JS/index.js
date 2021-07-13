window.addEventListener('DOMContentLoaded', function() {
  // Бургер
  let burger = document.querySelector('.burger');
  let close = document.querySelector('.close')
  let burgerMenu = document.querySelector('.header__nav');
  burger.addEventListener('click', function() {
    burgerMenu.classList.add('header__mobilemenu_active');
  });
  close.addEventListener('click', function() {
    burgerMenu.classList.remove('header__mobilemenu_active');
  });

  // Мобильный поиск
  let btnSearch = document.querySelector('.mobsearch');
  let inptSearch = document.querySelector('.header__form')
  btnSearch.addEventListener('click', function() {
    inptSearch.classList.toggle('header__form_active')
    btnSearch.classList.toggle('header__search_active')
  });

  // Скроллбар
  new SimpleBar(document.getElementById('myElement'), {
    autoHide: false,
    scrollbarMaxSize: 28,
  });

  // табы для выбора направлений
  document.querySelectorAll('.menu__button').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      document.querySelector(`[data-target = "${path}"]`).classList.toggle('menu__dropdown_active');
      document.querySelectorAll(`.menu__dropdown:not([data-target = "${path}"])`).forEach(function(tabsContent) {
        tabsContent.classList.remove('menu__dropdown_active');
      });
      // переключаем стрелочку
      event.currentTarget.classList.toggle('menu__button_active');
      document.querySelectorAll(`.menu__button:not([data-path = "${path}"])`).forEach(function(revertArrow) {
        revertArrow.classList.remove('menu__button_active');
      });
    });
  });

  // Селектор
  const element = document.querySelector('.filter__select')
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    placeholder: true,
    itemSelectText: '',
  });

  // swiper-hero
  const heroSwiper = new Swiper('.hero__swiper', {
    loop: true,
    spaceBetween: 60,
    speed: 1200,
    autoplay: {
      delay: 3000,
    },
  });

  // swiper
  const swiper = new Swiper('.gallery__swiper', {
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper__btnnext',
      prevEl: '.swiper__btnprev',
    },
    lazy: true,
    breakpoints: {
      741: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      1201: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    },
  });

  // handmade tabs
  // табы для выбора страны
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tabs__content').forEach(function(tabsContent) {
        tabsContent.classList.remove('tabs__content_active');
      });
      let tabsContent = document.querySelector(`[data-target = "${path}"]`);
      tabsContent.classList.add('tabs__content_active');
      document.querySelectorAll('.tabs__btn').forEach(function(tabsActive) {
        tabsActive.classList.remove('tabs__btn_active');
      });
      let tabsBtn = document.querySelector(`[data-path = "${path}"]`);
      tabsBtn.classList.add('tabs__btn_active');
      document.querySelectorAll('.first__list').forEach(function(listActive) {
        listActive.classList.add('accord__list_active');
      });
      document.querySelectorAll('.first__card').forEach(function(cardActive) {
        cardActive.classList.add('accord__card_active');
      });
      document.querySelectorAll('.first__btn').forEach(function(btnActive) {
        btnActive.classList.add('accord__btn_active');
      });
    });
  });

  // Аккордеон для выбора периода
  let first = document.querySelector('.accord__list');
  first.classList.add('accord__list_active');
  let firstArrow = document.querySelector('.accord__date');
  firstArrow.classList.add('accord__date_active')
  document.querySelectorAll('.accord__date').forEach(function(accordion) {
    accordion.addEventListener('click', function(event) {
      // event.preventDefault();
      const path = event.currentTarget.dataset.path;
      document.querySelector(`[data-target = "${path}"]`).classList.toggle('accord__list_active');
      document.querySelectorAll(`.accord__list:not([data-target = "${path}"])`).forEach(function(tabsContent) {
        tabsContent.classList.remove('accord__list_active');
      });
      // переключаем стрелочку
      event.currentTarget.classList.toggle('accord__date_active');
      document.querySelectorAll(`.accord__date:not([data-path = "${path}"])`).forEach(function(revertArrow) {
        revertArrow.classList.remove('accord__date_active');
      });
    });
  });

  // Выбор художника

  // запускаем выбор художника
  let painter = document.querySelector('.accord__btn');
  painter.classList.add('accord__btn_active');
  let painterDescription = document.querySelector('.accord__card');
  painterDescription.classList.add('accord__card_active');
  document.querySelectorAll('.accord__btn').forEach(function(accordion) {
    accordion.addEventListener('click', function(event) {
      if (window.matchMedia('(min-width: 1001px)').matches) {
        event.preventDefault();
      };
      const path = event.currentTarget.dataset.path;
      document.querySelector(`[data-target = "${path}"]`).classList.add('accord__card_active');
      document.querySelectorAll(`.accord__card:not([data-target = "${path}"])`).forEach(function(tabsContent) {
        tabsContent.classList.remove('accord__card_active');
      });
      // подсвечиваем выбранного художника в списке
      event.currentTarget.classList.add('accord__btn_active');
      document.querySelectorAll(`.accord__btn:not([data-path = "${path}"])`).forEach(function(revertPainter) {
        revertPainter.classList.remove('accord__btn_active');
      });
    });
  });

  function selectedLink() {
    document.querySelectorAll('.accord__btn').forEach(function(linked) {
      if (document.documentElement.clientWidth <= 1000) {
        linked.classList.add('accord__btn_mobile');
      };
    });
  };

  selectedLink()


  // Селектор для книг
  let mobileBooksHeading = document.querySelector('.checkblock__heading_mobile');
  document.querySelectorAll('.chbitem__description').forEach(function(activation) {
    activation.addEventListener('click', function() {
      activation.classList.toggle('chbitem__description_active')
      let parent = activation.parentNode
      parent.classList.toggle('checkblock__item_active')
    })
  });
  mobileBooksHeading.addEventListener('click', function() {
    document.querySelectorAll('.checkblock__item').forEach(function(hidden) {
      hidden.classList.toggle('checkblock__item_opened')
    });
    mobileBooksHeading.classList.toggle('checkblock__heading_active')
  });

  // кнопка события
  document.querySelector('.events__btn').addEventListener('click', function() {
    document.querySelectorAll('.evlist__item').forEach(function(deletion) {
      deletion.classList.remove('evlist__item_hidden')
    });
    let btnContainer = document.querySelector('.events__btncontainer');
    btnContainer.remove();
  });

  function screenWidth() {
    let thirdEvent = document.querySelector(`.evlist__item:nth-child(3)`);
    if (document.documentElement.clientWidth < 1001 && document.querySelector('.events__btn')) {
      thirdEvent.classList.add('evlist__item_hidden');
    };
    if (document.documentElement.clientWidth > 1001 && document.querySelector('.events__btn')) {
      thirdEvent.classList.remove('evlist__item_hidden');
    };
  };
  screenWidth()

  // swiper events
  const swiperEvents = document.querySelector('.events__swiper');

  let mobSwiper;

  function mobileSwiper() {
    if (window.innerWidth <= 740 && swiperEvents.dataset.mobile == 'false') {
      mobSwiper = new Swiper(swiperEvents, {
        spaceBetween: 34,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: 'true',
        },
      });
      swiperEvents.dataset.mobile = 'true'
    };

    if (window.innerWidth > 740) {
      swiperEvents.dataset.mobile = 'false';

      if (swiperEvents.classList.contains('swiper-container-initialized')) {
        mobSwiper.destroy();
      }
    }
  };

  mobileSwiper();

  // swiper books
  const swiperBooks = new Swiper('.showcase', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 34,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.showcase__btnnext',
      prevEl: '.showcase__btnprev',
    },
    breakpoints: {
      901: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 45,
      },
      1025: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 40,
      }
    },
  });

  // маскирование цены
  $(function() {
    $('.price__input').maskMoney({thousands:' ', precision: 0});
  })


  // работа Enter на checkbox
  $('input:checkbox').keypress(function(e){
    if((e.keyCode ? e.keyCode : e.which) == 13){
        $(this).trigger('click');
    }
  });

  // swiper partners
  const swiperPartners = new Swiper('.partners__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 34,
    navigation: {
      nextEl: '.partners__next',
      prevEl: '.partners__prev',
    },
    breakpoints: {
      741: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 34,
      },
      901: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 50,
      },
      1441: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 50,
      },
    },
  });

  // tooltip
  tippy('#tt1', {
    content: 'Пример современных тенденций - современная методология разработки',
    interactive: true,
    maxWidth: 264,
  });

  tippy('#tt2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    interactive: true,
    maxWidth: 264,
  });

  tippy('#tt3', {
    content: 'В стремлении повысить качество',
    interactive: true,
    maxWidth: 264,
  });

  // Map
  ymaps.ready(init);
  function init(){
    // Создание карты.
    var myMap1 = new ymaps.Map('map1', {
      zoom: 14,
      center: [55.754603, 37.611428],
      controls: []
    });

    // Добавление метки
    var myPlacemark1 = new ymaps.Placemark([55.758463, 37.601079], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/contacts/mark.svg',
      iconImageSize: [20, 20],
    });

    myMap1.geoObjects.add(myPlacemark1);

    // добавление элементов управления
    myMap1.controls.add('zoomControl', {
      float: 'none',
      size: 'medium',
      position: {
        right: 20,
        top: 150
      }
    });

    myMap1.controls.add('geolocationControl', {
      float: 'none',
      position: {
        right: 20,
        top: 250
      }
    });

    var myMap2 = new ymaps.Map('map2', {
      zoom: 14,
      center: [55.754603, 37.611428],
      controls: []
    });

    // Добавление метки
    var myPlacemark2 = new ymaps.Placemark([55.758463, 37.601079], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/contacts/mark.svg',
      iconImageSize: [20, 20],
    });

    myMap2.geoObjects.add(myPlacemark2);

    // добавление элементов управления
    myMap2.controls.add('zoomControl', {
      float: 'none',
      size: 'medium',
      position: {
        right: 20,
        top: 300
      }
    });

    myMap2.controls.add('geolocationControl', {
      float: 'none',
      position: {
        right: 20,
        top: 400
      }
    });
  }

  // маскирование телефона
  var selector = document.getElementById("tel");
  var im = new Inputmask("+7(999) 999-99-99");
  im.mask(selector);

  // валидация формы обратной связи
  new JustValidate('.callback', {
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLength: 30
      },

      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()

          return Number(phone) && phone.length ===10
        }
      }
    },
    messages: {
      name: {
        minLength: 'Имя должно содержать от 3 до 30 символов',
        maxLength: 'Имя не должно превышать 30 символов',
        required: 'Введите имя'
      },
      tel: 'Введите корректный номер телефона'
    },
    colorWrong: '#9D5CD0'
  });

  // плавный скролл меню
  document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
      e.preventDefault();
      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = 0;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });

  // плавный скролл каталог
  document.querySelectorAll('.accord__btn_mobile').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      let href = this.dataset.path;
      const scrollTarget = document.getElementById(href);
      const topOffset = 0;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });

  // ссылка на карту
  let heroBtn = document.querySelector('.hero__btn');

  function mapLink() {
    if (document.documentElement.clientWidth < 741) {
      heroBtn.setAttribute('href', '#map1')
    };
    if (document.documentElement.clientWidth >= 741) {
      heroBtn.setAttribute('href', '#map2')
    };
  };

  mapLink()

  // инициализация функций при изменении размера
  window.addEventListener('resize', function(){
    screenWidth()
    mapLink()
    mobileSwiper();
  });
});
