$( document ).ready(function() {
  $('.trigger').on('click', function() {
     $('.modal-wrapper').toggleClass('open');
     $('.whole-page-wrap').toggleClass('blur-it');
     return false;
  });


});