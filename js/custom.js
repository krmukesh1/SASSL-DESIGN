$(document).ready(function(){
    $(".icon").click(function(){
      // // $(".nav").toggle()
      $(".icon").toggleClass('change')
      $(".middle-header").toggleClass('active')
      
    });
    var num = $("#header").offset().top;
    $(window).bind('scroll', function() {
      if ($(window).scrollTop() > num) {
        $('#header').addClass('sticky');
      } else {
        $('#header').removeClass('sticky');
      }
    });
  });