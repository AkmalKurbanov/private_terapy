$(document).on('click', '.dropdown-js', function (e) {
  e.preventDefault();
  $('.navbar__drop-down').fadeToggle();
});

$('.hamburger').on('click', function () {
  $('.navbar__drop-down').fadeOut();
  $(this).toggleClass('hamburger-open');
  setTimeout(function () {
    $('.menu__bg-wrap').fadeToggle();
  }, 1000);
  setTimeout(function () {
    $('#strip').toggleClass('open');
  }, 1000);
  $('.content__wrap').toggleClass('transform-active');
  $('.menu').toggleClass('is-active');
  $('body').toggleClass('is-froze');
});

var heightHeader = $('.header').outerHeight();
$('.menu').css('top', heightHeader);
$('.navbar__links').clone().appendTo('.menu .navbar');