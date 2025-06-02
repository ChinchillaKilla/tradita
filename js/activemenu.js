    $(function() {
        // this will get the full URL at the address bar
        var url = window.location.href;

        // passes on every "a" tag
        $(".menu-navi a").each(function() {
            // checks if its the same on the address bar
            if (url == (this.href)) {
                $(this).closest("li").addClass("active");
                //for making parent of submenu active
               $(this).closest("li").parent().parent().addClass("active");
            }
        });
    });   

		$('#nav-icon3').on('click', function(){
			$('.menu-navi ul').toggleClass('showing');
			$('.menu_icon').toggleClass('menu_icon_close');
			$(this).toggleClass('open');
			
		});
