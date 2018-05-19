$(document).ready(function() {
  // console.log($(window).width());

  $('#burger').click(function(){
    $('.modal-left').addClass('slide');
  });

  $('#noodles').click(function(){
    $('.modal-right').addClass('slide');
  });

  $('.close').click(function(){
    console.log('clock');
    $('.modal').removeClass('slide');
  });

  $('.slider').slick();
});

