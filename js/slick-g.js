$(document).on('ready', function() {
 
	
	$('.slick-dyk').slick({
      arrows: true,
      centerPadding: "0px",
      dots: true,
      slidesToShow: 1,
		vertical: true,
		verticalSwiping:true,
      infinite: true,
      autoplay: true,
	  autoplaySpeed: 7000,
	  speed: 1000,
		 
      });
	
	
	 $('.slick-start-carousel').slick({
      arrows: true,
      centerPadding: "0px",
      dots: true,
      slidesToShow: 1,
      infinite: true,
      autoplay: true,
	  autoplaySpeed: 7000,
	  speed: 1000,
		 
      });
	
	
     $('.slick-carousel').slick({
      arrows: true,
      centerPadding: "0px",
      dots: true,
      slidesToShow: 1,
      infinite: true,
      autoplay: true,
	  autoplaySpeed: 7000,
	  speed: 1200,
      });
	  $(".vertical-center-4").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 2,
      });
      $(".vertical-center-3").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".vertical-center-2").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2
      });
      $(".vertical-center").slick({
        dots: true,
        vertical: true,
        centerMode: true,
      });
      $(".vertical").slick({
        dots: true,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
      });
      $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
      });
      $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });
	
	
      $('.slick-sliderxy').slick({
		dots: true,
		 autoplay: false, 
      });
  
      $('.slick-sliderxy').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('#external-buttons a.active').removeClass('active');
      $('#external-buttons a').eq(nextSlide).addClass('active');
      });
  
  
      $('#external-buttons a').on('click', function(e){
      e.preventDefault();
      $('#external-buttons a.active').removeClass('active');
      $(this).addClass('active');
      var targetSlide = $(this).data('target');
      $('.slick-sliderxy').slick('slickGoTo', targetSlide );
      });//click()
	
	
	
	
		$('.slider-burritos').slick({
		dots: true,
		autoplay: false, 
		
      });
  
      $('.slider-burritos').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.external-b-burritos a.active').removeClass('active');
      $('.external-b-burritos a').eq(nextSlide).addClass('active');
      });
  
  
      $('.external-b-burritos a').on('click', function(e){
      e.preventDefault();
      $('.external-b-burritos a.active').removeClass('active');
      $(this).addClass('active');
      var targetSlide = $(this).data('target');
      $('.slider-burritos').slick('slickGoTo', targetSlide );
      });//click()
	
 
	
	
	  $('.slider-cups').slick({
		dots: true,
		autoplay: false, 
		
      });
  
      $('.slider-cups').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.external-b-cups a.active').removeClass('active');
      $('.external-b-cups a').eq(nextSlide).addClass('active');
      });
  
  
      $('.external-b-cups a').on('click', function(e){
      e.preventDefault();
      $('.external-b-cups a.active').removeClass('active');
      $(this).addClass('active');
      var targetSlide = $(this).data('target');
      $('.slider-cups').slick('slickGoTo', targetSlide );
      });//click()
	
 
	
	
	  $('.slider-salads').slick({
		dots: true,
		autoplay: false, 
		
      });
  
      $('.slider-salads').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.external-b-salads a.active').removeClass('active');
      $('.external-b-salads a').eq(nextSlide).addClass('active');
      });
  
  
      $('.external-b-salads a').on('click', function(e){
      e.preventDefault();
      $('.external-b-salads a.active').removeClass('active');
      $(this).addClass('active');
      var targetSlide = $(this).data('target');
      $('.slider-salads').slick('slickGoTo', targetSlide );
      });//click()	
	
 
	
	
	  $('.slider-tacos').slick({
		dots: true,
		autoplay: false, 
		
      });
  
      $('.slider-tacos').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.external-b-tacos a.active').removeClass('active');
      $('.external-b-tacos a').eq(nextSlide).addClass('active');
      });
  
  
      $('.external-b-tacos a').on('click', function(e){
      e.preventDefault();
      $('.external-b-tacos a.active').removeClass('active');
      $(this).addClass('active');
      var targetSlide = $(this).data('target');
      $('.slider-tacos').slick('slickGoTo', targetSlide );
      });//click()	 
	
 
	
	
	  $('.slider-sides').slick({
		dots: true,
		autoplay: false, 
		
      });
  
      $('.slider-sides').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.external-b-sides a.active').removeClass('active');
      $('.external-b-sides a').eq(nextSlide).addClass('active');
      });
  
  
      $('.external-b-sides a').on('click', function(e){
      e.preventDefault();
      $('.external-b-sides a.active').removeClass('active');
      $(this).addClass('active');
      var targetSlide = $(this).data('target');
      $('.slider-sides').slick('slickGoTo', targetSlide );
      });//click()	 
	
 
	
	
	  $('.slider-snacks').slick({
		dots: true,
		autoplay: false, 
		
      });
  
      $('.slider-snacks').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.external-b-snacks a.active').removeClass('active');
      $('.external-b-snacks a').eq(nextSlide).addClass('active');
      });
  
  
      $('.external-b-snacks a').on('click', function(e){
      e.preventDefault();
      $('.external-b-snacks a.active').removeClass('active');
      $(this).addClass('active');
      var targetSlide = $(this).data('target');
      $('.slider-snacks').slick('slickGoTo', targetSlide );
      });//click()			
	
 
	
	
	  $('.slider-dips').slick({
		dots: true,
		autoplay: false, 
		
      });
  
      $('.slider-dips').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.external-b-dips a.active').removeClass('active');
      $('.external-b-dips a').eq(nextSlide).addClass('active');
      });
  
  
      $('.external-b-dips a').on('click', function(e){
      e.preventDefault();
      $('.external-b-dips a.active').removeClass('active');
      $(this).addClass('active');
      var targetSlide = $(this).data('target');
      $('.slider-dips').slick('slickGoTo', targetSlide );
      });//click()		
	
 
	
	
	  $('.slider-desserts').slick({
		dots: true,
		autoplay: false, 
		
      });
  
      $('.slider-desserts').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.external-b-desserts a.active').removeClass('active');
      $('.external-b-desserts a').eq(nextSlide).addClass('active');
      });
  
  
      $('.external-b-desserts a').on('click', function(e){
      e.preventDefault();
      $('.external-b-desserts a.active').removeClass('active');
      $(this).addClass('active');
      var targetSlide = $(this).data('target');
      $('.slider-desserts').slick('slickGoTo', targetSlide );
      });//click()		
	
 
	
	
	  $('.slider-drinks').slick({
		dots: true,
		autoplay: false, 
		
      });
  
      $('.slider-drinks').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.external-b-drinks a.active').removeClass('active');
      $('.external-b-drinks a').eq(nextSlide).addClass('active');
      });
  
  
      $('.external-b-drinks a').on('click', function(e){
      e.preventDefault();
      $('.external-b-drinks a.active').removeClass('active');
      $(this).addClass('active');
      var targetSlide = $(this).data('target');
      $('.slider-drinks').slick('slickGoTo', targetSlide );
      });//click()				
	
    });



	
 
	
	
	  $('.slider-snacks-cheesetostado').slick({
		dots: true,
		autoplay: false, 
		
      });
  
      $('.slider-snacks-cheesetostado').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.external-b-snacks-cheesetostado a.active').removeClass('active');
      $('.external-b-snacks-cheesetostado a').eq(nextSlide).addClass('active');
      });
  
  
      $('.external-b-snacks-cheesetostado a').on('click', function(e){
      e.preventDefault();
      $('.external-b-snacks-cheesetostado a.active').removeClass('active');
      $(this).addClass('active');
      var targetSlide = $(this).data('target');
      $('.slider-snacks-cheesetostado').slick('slickGoTo', targetSlide );
      });//click()			
	



	
 
	
	
	  $('.slider-snacks-quesadillas').slick({
		dots: true,
		autoplay: false, 
		
      });
  
      $('.slider-snacks-quesadillas').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.external-b-snacks-quesadillas a.active').removeClass('active');
      $('.external-b-snacks-quesadillas a').eq(nextSlide).addClass('active');
      });
  
  
      $('.external-b-snacks-quesadillas a').on('click', function(e){
      e.preventDefault();
      $('.external-b-snacks-quesadillas a.active').removeClass('active');
      $(this).addClass('active');
      var targetSlide = $(this).data('target');
      $('.slider-snacks-quesadillas').slick('slickGoTo', targetSlide );
      });//click()			
	
	



	
 
	
	
	  $('.slider-snacks-crunchwrap').slick({
		dots: true,
		autoplay: false, 
		
      });
  
      $('.slider-snacks-crunchwrap').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.external-b-snacks-crunchwrap a.active').removeClass('active');
      $('.external-b-snacks-crunchwrap a').eq(nextSlide).addClass('active');
      });
  
  
      $('.external-b-snacks-crunchwrap a').on('click', function(e){
      e.preventDefault();
      $('.external-b-snacks-crunchwrap a.active').removeClass('active');
      $(this).addClass('active');
      var targetSlide = $(this).data('target');
      $('.slider-snacks-crunchwrap').slick('slickGoTo', targetSlide );
      });//click()			
	
	
	



	
 
	
	
	  $('.slider-snacks-cheesetostado').slick({
		dots: true,
		autoplay: false, 
		
      });
  
      $('.slider-snacks-cheesetostado').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.external-b-snacks-cheesetostado a.active').removeClass('active');
      $('.external-b-snacks-cheesetostado a').eq(nextSlide).addClass('active');
      });
  
  
      $('.external-b-snacks-cheesetostado a').on('click', function(e){
      e.preventDefault();
      $('.external-b-snacks-cheesetostado a.active').removeClass('active');
      $(this).addClass('active');
      var targetSlide = $(this).data('target');
      $('.slider-snacks-cheesetostado').slick('slickGoTo', targetSlide );
      });//click()			
	