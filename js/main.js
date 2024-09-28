$(document).ready(function () {

  // Header height
  function headerHieght() {
    var headerHieght = $('.header').outerHeight(true);
    $('.wrapper').css('padding-top', headerHieght);
  }
  headerHieght();

  $(window).resize(function() {
    headerHieght();
  });

  // Scroll speed
  // $('.anchor-link').on('click','a', function (event) {
  //   event.preventDefault();
  //   var id  = $(this).attr('href'),
  //     top = $(id).offset().top;
  //     $('body,html').animate({scrollTop: top}, 800);
  // });

  // Show menu mobail
  $('.navbar-toggle').on('click', function () {
    $(this).toggleClass('active');
    $('.nav').slideToggle(200);
  });

  // Modal
  $('.open-modal-feedback').on('click', function(e) {
    e.preventDefault();
    $('.modal--feedback').fadeIn(200);
  });

  $('.modal__close').on('click', function() {
    $('.modal').fadeOut(200);
  });

  $('.modal').mouseup(function (e) {
    let modalContent = $(".modal__box");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).fadeOut(200);
    }
  });

  // Maskedinput
  $(function($){
    $('.phone-mask').mask(('+7 ') + '(999) 999-99-99');
  });

  // Accardion
  var accordion = function() {
    $('.accordion__head').on('click', function(){
      $(this).next('.accordion__body').not(':animated').slideToggle()
    })
    $('.accordion__head').click(function () {
      $(this).parent('.accordion li').toggleClass('active');
    });
  }
  accordion();

  // Accardion inner
  var accordion = function() {
    $('.accordion-inner__head').on('click', function(){
      $(this).next('.accordion-inner__body').not(':animated').slideToggle()
    })
    $('.accordion-inner__head').click(function () {
      $(this).parent('.accordion-inner li').toggleClass('active');
    });
  }
  accordion();

  // Hero sl
  var swiper = new Swiper(".hero", {
    autoplay: {
      delay: 54000,
    },
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Stock sl
  var swiper = new Swiper(".stock__sl", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-stock",
      prevEl: ".swiper-button-prev-stock",
    },
    breakpoints: {
      768: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  });

});