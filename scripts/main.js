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

window.onload = function () {
  $('.review').slick({
    arrows: true,
    prevArrow: '<div class="slick-prev slick-arrows"> <img src="assets/images/slider-arrow-left.svg" alt="<"> </div>',
    nextArrow: '<div class="slick-next slick-arrows"> <img src="assets/images/slider-arrow-right.svg" alt=">"> </div> ',
    adaptiveHeight: true
  });
};


function rangeChange(val) {
  rangeChangePricing(val);
  rangeChangeBackground(val);
  rangeChangeScroll(val);
}

let pricingCard1Position
let pricingCard2Position
let pricingCard3Position

if ($(window).width() < 768) {
  pricingCard1Position = $('#pricingCard1').position().left - 40;
  pricingCard2Position = $('#pricingCard2').position().left - 40;
  pricingCard3Position = $('#pricingCard3').position().left - 40;
  $('.pricing-cards').scrollLeft(pricingCard2Position);

}

function rangeChangePricing(val) {
  // make bold current value 
  $('#rangeVal' + val).css('font-weight', 'bold');

  // make default style for not current value
  for (let i = 1; i < 7; i++) {
    if (i != val) {
      $('#rangeVal' + i).css('font-weight', 'normal');
    } else {
      if (i == 1 || i == 2) {
        $('.pricing-card').removeClass('active');
        $('#pricingCard1').addClass('active');
        if ($(window).width() < 768) {
          $('.pricing-cards').scrollLeft(pricingCard1Position);
        }
      }

      if (i == 3 || i == 4) {
        $('.pricing-card').removeClass('active');
        $('#pricingCard2').addClass('active');
        if ($(window).width() < 768) {
          $('.pricing-cards').scrollLeft(pricingCard2Position);
        }
      }

      if (i == 5 || i == 6) {
        $('.pricing-card').removeClass('active');
        $('#pricingCard3').addClass('active');
        if ($(window).width() < 768) {
          $('.pricing-cards').scrollLeft(pricingCard3Position);
        }
      }

    }
  }
}

function rangeChangeBackground(val) {
  $('.pricing-slider').removeClass('x1 x2 x3 x4 x5 x6')
  $('.pricing-slider').addClass('x' + val);
}

function rangeChangeScroll(val) {
  console.log('val new: ', val);

}

let isMenuOpened = false;

function toggleMobileMenu() {
  if (isMenuOpened == false) {
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
$('.mobile-menu__link').click(function () {
  toggleMobileMenu()
});
$('.mobile-menu__sub-link').click(function () {
  toggleMobileMenu()
});
$('.mobile-menu .main-nav__link').click(function () {
  toggleMobileMenu()
});
$('.mobile-menu .btn').click(function () {
  toggleMobileMenu()
});

$('.pricing-range__value').click(function () {
  let currentId = $(this).attr('id');
  let currentNum = currentId.slice(currentId.length - 1);
  $(".pricing-range").val(currentNum);
  rangeChange(currentNum);
})


// input validation
$('.input-domain').change(function () {
  // if validation true
  if (CheckIsValidDomain($(this).val())) {
    if ($(this).parent().hasClass('invalid')) {
      $(this).parent().removeClass('invalid');
      $(this).parent().parent().find('.btn').removeClass('disabled');
    }
  } 
  // if validation false
  else {
    if (!$(this).parent().hasClass('invalid')) {
      $(this).parent().addClass('invalid');
      $(this).parent().parent().find('.btn').addClass('disabled');
    }
  }
});

function CheckIsValidDomain(domain) {
  let domainArr = domain.split();
  // var re = new RegExp(/^(([a-zA-Z]{1})|([a-zA-Z]{1}[a-zA-Z]{1})|([a-zA-Z]{1}[0-9]{1})|([0-9]{1}[a-zA-Z]{1})|([a-zA-Z0-9][a-zA-Z0-9-_]{1,61}[a-zA-Z0-9]))\.([a-zA-Z]{2,6}|[a-zA-Z0-9-]{2,30}\.[a-zA-Z]{2,3})$/);
  var re = new RegExp(/^(?:https?:\/\/)?(?:[^.]+\.)?([a-zA-Z0-9][a-zA-Z0-9-_]{1,61}[a-zA-Z0-9])\.([a-zA-Z]{2,6}|[a-zA-Z0-9-]{2,30}\.[a-zA-Z]{2,3})\/*$/);
  return domain.match(re);
}


// test query to wp 

// const WPQL_QUERY = {
//   query: `
//   query MyQuery {
//     posts {
//       edges {
//         node {
//           title
//           content
//           bannerTest {
//             title
//             description
//             image {
//               sourceUrl
//             }
//           }
//         }
//       }
//     }
//   }
// `
// }


// fetch('http://cache.cc/graphql', {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(WPQL_QUERY)
// })
// .then(res => res.json())
// .then(json => {
//   console.log(json.data.posts.edges);
// })