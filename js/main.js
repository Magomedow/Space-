$(function(){
   $('.slider__box').slick({
      prevArrow:false,
      nextArrow:false,
   });

   $('.menu-btn').on('click', function(){
      $('.menu__list').toggleClass('active');
   });
});
