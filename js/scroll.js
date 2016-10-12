jQuery(function ($) {

    'use strict';
	
// =============================================
// BEGIN THEME SCRIPTS
// =============================================

	// =============================================
	// Page Loader
	// =============================================
	$('.page-loader').delay(500).fadeOut(500);
	
	// =============================================
	// Smooth Scroll
	// =============================================
	$(".goscroll").click(function (event) {
		event.preventDefault();
		//calculate destination place
		var dest = 0;
		if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
		  dest = $(document).height() - $(window).height();
		} else {
		  dest = $(this.hash).offset().top;
		}
		//go to destination
		$('html,body').animate({
		  scrollTop: dest
		}, 1000, 'easeOutQuad');
	});



    /*====================================
    Fixed Header
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 480;
        
        if ($(window).scrollTop() > navHeight) {
            $('.header-sticky').addClass('on');
            $('.top-logo').removeClass('invisible');
        } else {
            $('.header-sticky').removeClass('on');
            $('.top-logo').addClass('invisible');
        }
    });









 $(document).ready(function() {
                // $('.navbar-toggle').click(function(e){
                    
                //     e.preventDefault();
                //     $('.collapse.navbar-collapse').addClass('in');

                //     $('body').addClass('mobile-menu-open');
                //     $('.collapse.navbar-collapse').show().prop('id', 'mobile-menu-wrap');
                    
                // });

                // $('.mobile-menu-close').click(function(e){
                //     e.preventDefault();
                //     // $('.collapse.navbar-collapse').removeClass('in');
                //     $('body').removeClass('mobile-menu-open');

                //     // $('.collapse.navbar-collapse').removeClass('in').hide();
                    
                // });

                $('.navbar-toggle').click(function(e){
                            
                    e.preventDefault();
                    $('.collapse.navbar-collapse').addClass('in');

                    $('body').addClass('mobile-menu-open');
                    $('.collapse.navbar-collapse').show().prop('id', 'mobile-menu-wrap');
                    
                });

                $('.mobile-menu-close').click(function(e){
                    e.preventDefault();
                    // $('.collapse.navbar-collapse').removeClass('in');
                    $('body').removeClass('mobile-menu-open');

                    // $('.collapse.navbar-collapse').removeClass('in').hide();
                    
                });

                    // var width = $(window).width();
                    // console.log('window width: ' + width);

                    // var totalWidth = $('ul.nav').width();
                    // var listWidth = [];
                    // var totalListWidth = 0;

                    // $('ul.nav > li').each(function(){
                    //     totalListWidth = totalListWidth + $(this).outerWidth();
                    //     listWidth.push($(this).outerWidth());
                    // });

                    // console.log('Total list width: ' + totalListWidth);
                    // console.log('list width: ' + listWidth);

                    // console.log('Total width: ' + totalWidth);

                    // if( (totalWidth ) >= width) {
                    //     $('body').removeClass('mobile-menu-open');
                    //     $('.collapse.navbar-collapse.in').removeAttr('id');
                    //     $('.collapse.navbar-collapse.in').removeClass('in');
                    // } else {
                    //     $('style').text('@media (min-width:' + width + 'px) {div{ color:red !important; }}');
                    // }


                $( window ).resize(function() {
                    var width = $(window).width();

                    if ((width>=768)) {
                        $('body').removeClass('mobile-menu-open');
                        $('.collapse.navbar-collapse.in').removeAttr('id');
                        $('.collapse.navbar-collapse.in').removeClass('in');
                        
                    }
                });



                

            });
			
$(document).ready(function(){

	//The Home Button
	$("#home-navbutton").click(function(){
		$('html, body').animate({
		scrollTop: $("#slider-section").offset().top
		}, 400);
	});


	//The School NAV ITEM
	$("#about-navbutton").click(function(){
		$('html, body').animate({
		scrollTop: $("#about-school-section").offset().top
		}, 400);
	});

	//NAV ITEM ADMISSIONS GENERAL 
	$("#admissions-navbutton").click(function(){
		$('html, body').animate({
		scrollTop: $("#enroll-section").offset().top
		}, 400);
	});

	//FEES NAV SUBITEM
	$("#fees-navsubbutton").click(function(){
		$('html, body').animate({
		scrollTop: $("#fees-section").offset().top
		}, 400);
	});

		//SCHOLARSHIP NAV SUBITEM
	$("#scholarship-navsubbutton").click(function(){
		$('html, body').animate({
		scrollTop: $("#fees-section").offset().top
		}, 400);
	});

	//NAV NEWS ITEM
	$("#news-navbutton").click(function(){
		$('html, body').animate({
		scrollTop: $("#news-section").offset().top
		}, 400);
	});
	//ALL NEWS NAV SUB ITEM
	$("#allnews-navsubbutton").click(function(){
		$('html, body').animate({
		scrollTop: $("#contact-us-cs").offset().top
		}, 400);
	});
	//NAV TESTIMONIAL ITEM
	$("#testimonials-navbutton").click(function(){
		$('html, body').animate({
		scrollTop: $("#testimonials-section").offset().top
		}, 400);
	});


	//NAV CONTACT ITEM
	$("#contact-navbutton").click(function(){
		$('html, body').animate({
		scrollTop: $("#contact-section").offset().top
		}, 400);
	});

	//The School Button 2
	// $("#button5").click(function(){
	// 	$('html, body').animate({
	// 	scrollTop: $("#section1").offset().top
	// 	}, 500);
	// });
});
			
			


