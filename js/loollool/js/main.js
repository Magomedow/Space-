$(function(){
   $('.slider__box').slick({
      prevArrow:' <img class="slider__arrow slider__arrow-left" src="images/arrow1.svg" alt="arrow-left">',
      nextArrow:' <img class="slider__arrow slider__arrow-right" src="images/arrow2.svg" alt="arrow-right">',
   });

   $('.menu-btn').on('click', function(){
      $('.menu__list').toggleClass('active');
   });
});
