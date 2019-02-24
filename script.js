$(function(){
	$('#top-btn').click(function(){
		$('html, body').animate({
			'scrollTop':0
		},'slow');
	});

	$('header a').click(function(){
	    var id=$(this).attr('href');
	    var position=$(id).offset().top;
	    $('html,body').animate({
	      'scrollTop': position
	    },'slow');
	  });

	$('.navToggle').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.nav-wrap').addClass('active');
        } else {
            $('.nav-wrap').removeClass('active');
        }
    });

	$('.nav-wrap a').click(function(){
		$('.nav-wrap').removeClass('active');
		$('.navToggle').removeClass('active');
	});

	$(window).resize(function(){
		var w = $(window).width();
		var x = 600;
		if (w <= x){
			var menuHeight = $("#top-head").height();
			var startPos = 0;
		$(window).scroll(function(){
			var currentPos = $(this).scrollTop();
			if (currentPos > startPos) {
			    if($(window).scrollTop() >= 300) {
	    	      	$("#top-head").css("top", "-" + menuHeight + "px");
		      	}
	      	} else{
	  		    $("#top-head").css("top", 0 + "px");
	      	}
	      	startPos = currentPos;
	      });
		}
	});
	

});