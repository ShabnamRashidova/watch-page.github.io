/*----------Products Carousel----------*/
$('.products-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    dots:false,
    responsive:{
        0:{
            items:2,
            nav:true,
        },
        600:{
            items:3,
            nav:true,
          
        },
        1000:{
            items:5,
            nav:true

        }
    }
})
/*----------Testimonail Carousel----------*/
$('.testimonial-carousel').owlCarousel({
    loop:true,
    margin:15,
    autoplay:true,
    responsiveClass:true,
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:true,
        },
        600:{
            items:2,
            nav:true,
          
        },
        1000:{
            items:2,
            nav:true

        }
    }
});

$(()=>{
$('body').scrollspy({target: ".navbar-nav" , offset: 70});
/*nav mobile*/
$(".nav-link").click(()=>{
    $(".navbar-collapse").collapse("hide");
})
})