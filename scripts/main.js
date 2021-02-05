// Typewriter for intro block
var app = document.getElementById('intro-typing');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(500)
  .typeString('Drupal')
  .pauseFor(800)
  .deleteChars(6)
  .typeString('WordPress')
  .pauseFor(800)
  .deleteChars(9)
  .typeString('Magento')
  .pauseFor(800)
  .deleteChars(7)
  .typeString('Varnish')
  .pauseFor(800)
  .deleteChars(7)
  .typeString('inner ;)')
  .pauseFor(1200)
  .start();

  window.onload = function(){
    $('.review').slick({
      arrows: true,
      prevArrow: '<div class="slick-prev slick-arrows"> <img src="assets/images/slider-arrow-left.svg" alt="<"> </div>',
      nextArrow: '<div class="slick-next slick-arrows"> <img src="assets/images/slider-arrow-right.svg" alt=">"> </div> ',
    });
  };
  