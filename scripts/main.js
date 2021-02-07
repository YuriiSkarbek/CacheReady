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
  

  function rangeChange(val){
    rangeChangePricing(val);
    rangeChangeBackground(val);
  }

  function rangeChangePricing(val){
    // make bold current value 
    $('#rangeVal'+val).css('font-weight', 'bold');

    // make default style for not current value
    for(let i = 1; i < 7; i++){
      if(i != val){
        $('#rangeVal'+i).css('font-weight', 'normal');
      } else {
        console.log('Cuurent is: ', i);
        if(i == 1 || i == 2){
          $('.pricing-card').removeClass('active');
          $('#pricingCard1').addClass('active');
        }

        if(i == 3 || i == 4){
          $('.pricing-card').removeClass('active');
          $('#pricingCard2').addClass('active');
        }

        if(i == 5 || i == 6){
          $('.pricing-card').removeClass('active');
          $('#pricingCard3').addClass('active');
        }
        
      }
    }
  }

  function rangeChangeBackground(val){
    console.log('val: ', val);
    $('.pricing-slider').removeClass('x1 x2 x3 x4 x5 x6')
    $('.pricing-slider').addClass('x'+val);
  }