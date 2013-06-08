
// ************************************************************
// Everything in this section is framework-specific. Once this file grows large, framework-code will be broken off to bw-script.js
$(document).ready(function() {

  // $('.flexslider').flexslider({
  //   animation: "slide",
  //   slideshow: false,
  //   itemWidth: 2000
  // });

  $('.flexslider').flexslider({
    animation: "fade",
    touch: true,
    keyboard: true,
    useCSS: true, 
    direction: "horizontal",
    directionNav: true, 
    slideshow: true, 
    slideshowSpeed: 9000,
    animationSpeed: 500,
    nextText: ">"
  });

// ************************************************************

// ************************************************************
// Button show / hide functionality
//initially hide all collapsible areas (specified in CSS)
// $(".mobile-hide").hide();

$(".mobile-open").click(function() {
  var width = $(window).width();
  // if( width <= 480 ) {$(this).find('.mobile-hide').slideToggle();}
  if( width <= 480 ){toggleMobile(this);}
});


function toggleMobile(input){
  var state = $(input).find('.mobile-hide').css('display');
  
  if (state == 'none'){
    showMobile(input);
  } else
  { hideMobile(input); }
}
function showMobile(input) {
    $(input).find('.mobile-hide').css('display', 'block');
}

function hideMobile(input) {
    $(input).find('.mobile-hide').css('display', 'none');
}
// End button show / hide
// ************************************************************



// ************************************************************
// Goto-Highlight / Nav highlighting

  $(function() {
    $('.goto')
      .waypoint(function(direction) {
        var $links = $('a[href="#' + this.id + '"]');
        if(direction === 'down') {
          $('.menu-selected').removeClass('menu-selected');
          $links.addClass('menu-selected', direction === 'down');
          console.log("Entering: " + direction + " @ " + this.id);
        }
      },{ offset: 100 })
      .waypoint(function(direction) {
        var $links = $('a[href="#' + this.id + '"]');
        if(direction === 'up') {
          $('.menu-selected').removeClass('menu-selected');
          $links.addClass('menu-selected', direction === 'up');
          console.log("(up) Going: " + direction + " @ " + this.id);
        }
      },{ offset: function() {
          return -$(this).height();
        } });
  });

// End Goto-Highlight
// ************************************************************


// ************************************************************
// Smooth Scrolling 

  //smooth scrolling, stolen from http://imakewebthings.com/jquery-waypoints/script.js :)
  // "Wicked credit to
  // http://www.zachstronaut.com/posts/2009/01/18/jquery-smooth-scroll-bugs.html"
  var scrollElement = 'html, body';
  
  // Smooth scrolling for internal links
  $("a[href^='#']").click(function(event) {
    event.preventDefault();
    
    var $this = $(this),
    target = this.hash,
    $target = $(target);
    
    $(scrollElement).stop().animate({
      'scrollTop': $target.offset().top
    }, 500, 'swing', function() {
      window.location.hash = target
    });
    


// End Smooth Scrolling
// ************************************************************


  });
}); // end .ready



