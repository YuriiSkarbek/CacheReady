// Typewriter for intro block
var app = document.getElementById('intro-typing');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(500)
  .typeString('Drupal')
  .pauseFor(1200)
  .deleteChars(6)
  .typeString('WordPress')
  .pauseFor(1200)
  .deleteChars(9)
  .typeString('Magento')
  .pauseFor(1200)
  .deleteChars(7)
  .typeString('Varnish')
  .pauseFor(1200)
  .deleteChars(7)
  .typeString('inner ;)')
  .pauseFor(2000)
  .start();

  window.onload = function(){
    $('.review').slick({
      arrows: true,
      prevArrow: '<div class="slick-prev slick-arrows"> <img src="assets/images/slider-arrow-left.svg" alt="<"> </div>',
      nextArrow: '<div class="slick-next slick-arrows"> <img src="assets/images/slider-arrow-right.svg" alt=">"> </div> ',
      adaptiveHeight: true
    });
  };
  

  function rangeChange(val){
    rangeChangePricing(val);
    rangeChangeBackground(val);
    rangeChangeScroll(val);
  }

  let pricingCard1Position
  let pricingCard2Position
  let pricingCard3Position

  if($(window).width() < 768){
    pricingCard1Position = $('#pricingCard1').position().left - 40;
    pricingCard2Position = $('#pricingCard2').position().left - 40;
    pricingCard3Position = $('#pricingCard3').position().left - 40;
    $('.pricing-cards').scrollLeft( pricingCard2Position );

  }
  function rangeChangePricing(val){
    // make bold current value 
    $('#rangeVal'+val).css('font-weight', 'bold');

    // make default style for not current value
    for(let i = 1; i < 7; i++){
      if(i != val){
        $('#rangeVal'+i).css('font-weight', 'normal');
      } else {
        if(i == 1 || i == 2){
          $('.pricing-card').removeClass('active');
          $('#pricingCard1').addClass('active');
          if($(window).width() < 768){
            $('.pricing-cards').scrollLeft( pricingCard1Position );
          }
        }

        if(i == 3 || i == 4){
          $('.pricing-card').removeClass('active');
          $('#pricingCard2').addClass('active');
          if($(window).width() < 768){
            $('.pricing-cards').scrollLeft( pricingCard2Position );
          }
        }

        if(i == 5 || i == 6){
          $('.pricing-card').removeClass('active');
          $('#pricingCard3').addClass('active');
          if($(window).width() < 768){
            $('.pricing-cards').scrollLeft( pricingCard3Position );
          }
        }
        
      }
    }
  }

  function rangeChangeBackground(val){
    $('.pricing-slider').removeClass('x1 x2 x3 x4 x5 x6')
    $('.pricing-slider').addClass('x'+val);
  }

  function rangeChangeScroll(val){
    console.log('val new: ', val);
    
    }

  let isMenuOpened = false; 
  function toggleMobileMenu(){
    if(isMenuOpened == false){
      $('.burger').addClass('active');
      $('.mobile-menu').addClass('active');
      $('.body').addClass('scroll-lock');
      isMenuOpened = true;
    } else {
      $('.burger').removeClass('active');
      $('.mobile-menu').removeClass('active');
      $('.body').removeClass('scroll-lock');
      isMenuOpened = false;
    }
  }
  $('.mobile-menu__link').click(function(){toggleMobileMenu()});
  $('.mobile-menu__sub-link').click(function(){toggleMobileMenu()});
  $('.mobile-menu .main-nav__link').click(function(){toggleMobileMenu()});
  $('.mobile-menu .btn').click(function(){toggleMobileMenu()});

