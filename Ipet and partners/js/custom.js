$(window).scroll(function() {
    if (screen.width > 991){
        if ($(this).scrollTop() > 100){
            $('header').addClass("sticky");
        }else{
            $('header').removeClass("sticky");
        }
    }else{
        $('header').removeClass("sticky");
    }
  jQuery('.scrollPage').click(function() {
      var elementClicked = jQuery(this).attr("href");
      var destination = jQuery(elementClicked).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-50}, 1500 );
      return false;
  });
  
  if (screen.width > 300){
    if (jQuery(this).scrollTop() > 0){
      jQuery('.topbar').addClass("sticky");
    }else{
      jQuery('.topbar').removeClass("sticky");
    }
  }else{
    jQuery('.topbar').removeClass("sticky");
  }
  });
  
  jQuery(".search_toggle").click(function(){
  jQuery(".full_screen_wrapper").show();
  });
  jQuery(".cross_button").click(function(){
  jQuery(".full_screen_wrapper").hide();
  });
  
  jQuery(".menu_open").click(function () {
  jQuery(".mobile_menu_wrap").addClass("menu_show");
  jQuery(".menu_overlay").show();
  jQuery("html").addClass("overflow_hidden");
  });
  jQuery(".menu_close, .menu_overlay").click(function () {
  jQuery(".mobile_menu_wrap").removeClass("menu_show");
  jQuery(".menu_overlay").hide();
  jQuery(".mobile_menu_wrap ul li ul").removeClass("show_submenu");
  jQuery("html").removeClass("overflow_hidden");
  });
  jQuery('.mobile_menu_wrap ul li:has(ul)').addClass('hassub');
  jQuery('.mobile_menu_wrap ul li:has(ul)').append('<a href="javascript:;" class="sub_menu_open"><i class="fa-solid fa-angle-right"></i></a>');
  jQuery('.mobile_menu_wrap ul li ul').append('<li class="back_to_mainmenu"><a href="javascript:;"><i class="fa-solid fa-angle-left"></i> Back</a></li>');
  jQuery(document).ready(function(){
  jQuery("li.hassub a[href$='#'], li.hassub a[href$='javascript:;'], li.hassub a[href$='javascript::;'], li.hassub a[href$='javascript:void(0);']").addClass("no_link");
  jQuery(".mobile_menu_wrap ul li a.no_link").click(function () {
  jQuery(this).next().addClass("show_submenu");
  });
  });
  jQuery(".back_to_mainmenu").click(function(){
  jQuery(this).parent().removeClass("show_submenu");
  });
  jQuery(".mobile_menu_wrap ul li .sub_menu_open").click(function(){
  jQuery(this).prev("ul").addClass("show_submenu");
  });
  if (screen.width > 767){
    new WOW().init();    
  }
  $('#featured-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    autoplay:true, 
    autoplayTimeout: 5000,
    autoplayHoverPause: true, 
    navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        900:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
$('#testimonials-slider').owlCarousel({
    loop:true,
    margin:100,
    nav:false,
    dots:true,
    autoplay:true, 
    autoplayTimeout: 5000,
    autoplayHoverPause: true,    
    responsive:{
        0:{
            items:1
        },
        600:{
            margin:100,
            items:1
        },
        767:{
            margin:50,
            items:2
        },
        1000:{
          margin:60,
            items:2.9
        },
        1400:{
          margin:100,
        }
    }
})  
function company_carouselInit() {
    $('#client-slider').owlCarousel({
        items: 9,
        dots: false,
        loop: true,
        margin: 30,
        stagePadding: 0,
        smartSpeed:3000,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause:true,
        responsive: {
            0:{
                margin: 10,
                items:3
            },
            600:{
                items:3
            },
            900:{
                items:4
            },
            1000:{
                items:5
            }
        }
    });
}
company_carouselInit();