$(document).ready(function(){
  $('.slick-carousel').slick({
    arrows: true
  });
});

$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments)
};
gtag('js', new Date());
gtag('config', 'UA-106746927-2');
