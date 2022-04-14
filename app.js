$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='fa-solid fa-angle-right'></i></button>",
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
               }
            },
            {
               breakpoint: 740,
               settings: {
               slidesToShow: 2,
               slidesToScroll: 1
               }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                arrows: false,
                slidesToScroll: 1,
                infinite: false,
                }
             },
        ]
    });
  });