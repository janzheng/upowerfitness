
// ************************************************************
// JS Snippets
// ************************************************************


$(document).ready(function() {

// ************************************************************
// Flex Slider
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
// Reveal
// Container that shows or hides its content based on input

// .reveal-container .reveal-btn-container
//    .reveal-btn
//    .reveal-content

// Clicking on the reveal-btn or reveal-btn-container will show or hide the content within .reveal-content
// you can create multiple .reveal-btns, like an Open and a Close button

// In the following example, these are used for responsively hiding sections which would be too big for a mobile screen
$(".reveal-btn").click(function() {
  var width = $(window).width();
  if( width <= 480 ){toggleMobile($(this).parent());}
});

$(".reveal-btn-container").click(function() {
  var width = $(window).width();
  if( width <= 480 ){toggleMobile(this);}
});

function toggleMobile(input){
  var state = $(input).find('.reveal-content').css('display');
  
  if (state == 'none'){
    // if content is hidden
    showMobile(input);
  } else { 
    // if content is revealed
    hideMobile(input); 
  }
}

function showMobile(input) {
    $(input).find('.reveal-content').css('display', 'block');
}

function hideMobile(input) {
    $(input).find('.reveal-content').css('display', 'none');
}

// End Reveal
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
          // console.log("Entering: " + direction + " @ " + this.id);
        }
      },{ offset: 100 })
      .waypoint(function(direction) {
        var $links = $('a[href="#' + this.id + '"]');
        if(direction === 'up') {
          $('.menu-selected').removeClass('menu-selected');
          $links.addClass('menu-selected', direction === 'up');
          // console.log("(up) Going: " + direction + " @ " + this.id);
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



