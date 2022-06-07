$(function () {
  $('.header__slider').slick({
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrows-left.svg" alt="#"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrows-right.svg" alt="#"></button>',
    asNavFor: '.slider-dotshead',
  });

  $('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.header__slider1',
  });

  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    //autoplay: true,
    //autoplaySpeed: 2000,
    //prevArrow: '<button type="button" class="slick-prev arrows"><img src="images/arrows-left.svg" alt="#"></button>',
    //nextArrow: '<button type="button" class="slick-next arrows"><img src="images/arrows-right.svg" alt="#"></button>',
    arrows: false,
    asNavFor: '.surf-map',
  });

  $('.surf-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
  });

  $('.travel__slider').slick({
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrows-left.svg" alt="#"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrows-right.svg" alt="#"></button>',
  });

  //$('.slider-box').mouseover(function () {
  //  $('.slider-box').removeClass('slick-current');
  //});
  //$('.slider-box').mouseout(function () {
  //  $('.slider-box').addClass('slick-current');
  //});

});

