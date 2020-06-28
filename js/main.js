$(document).ready(function(){
  headerFixed();
  marginTop();
});
//smooth scroll to anchor
// Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 130
          }, 600, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

//header background toggle
function headerFixed(){
  $(function() {
      //caches a jQuery object containing the header element
      var header = $("header");
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();

          if (scroll >= 10) {
              header.removeClass('clearHeader').addClass("scrolled");
          } else {
              header.removeClass("scrolled").addClass('clearHeader');
          }
      });
  });
}

//headerHeight
function marginTop(){
  var headerHeight = $('header').outerHeight();
  $('#banner').css('margin-top', headerHeight);
}
