//two different nav animation options...

$(window).scroll(function() {
  if ($(document).scrollTop() > 160) {
    $('.navbar').addClass('shrink');
    $('.navbar').removeClass('grow');
  } else {
    $('.navbar').removeClass('shrink');
    $('.navbar').addClass('grow');
  }
});

/* var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navbar').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .shrink.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navbar').removeClass('grow').addClass('shrink');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar').removeClass('shrink').addClass('grow');
        }
    }
    lastScrollTop = st;
} */

//ScrollTo certain sections of the site

var scrollTo = function() {
if (document.documentElement.clientWidth > 1060) {
   $('a[href^="#"]').pageScroll({
       speed: 1750,
       maxDuration: 2500,
       offset:-120
   });
 } else if (document.documentElement.clientWidth > 768) {
  $('a[href^="#"]').pageScroll({
      speed: 1750,
      maxDuration: 2500,
      offset:-180
  });
  } else {
    $('a[href^="#"]').pageScroll({
        speed: 1000, //mobile framerates can have a hard time when auto-scrolling too fast
        maxDuration: 2500,
        offset:-100
    });
  }
}

scrollTo();


//reset scrollTo point on window resize based of breakpoints we have set
$(window).resize(function() {
  scrollTo();
  });
