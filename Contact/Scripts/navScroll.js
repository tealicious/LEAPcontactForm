// 120px is quite a tall nav. This is all fine and good in hdpi screens, but excessive otherwise. Let's shrink it a bit when appropiate...

$(window).scroll(function() {
  if ($(document).scrollTop() > 160) {
    $('.navbar').addClass('shrink');
    $('.navbar').removeClass('grow');
  } else {
    $('.navbar').removeClass('shrink');
    $('.navbar').addClass('grow');
  }
});

//ScrollTo controller
//Just adding a small bit of interactivity to engage our user
var scrollTo = function() {
if (document.documentElement.clientWidth > 1060) {
   $('*[href^="#"]').pageScroll({
       speed: 1750,
       maxDuration: 2500,
       offset:-120
   });
 } else if (document.documentElement.clientWidth > 767) {
  $('*[href^="#"]').pageScroll({
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

//reset scrollTo point on window resize to adjust for layout changes @ certain breakpoints
$(window).resize(function() {
  scrollTo();
  });
