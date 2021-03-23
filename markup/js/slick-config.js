$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
            breakpoint: 1230,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
            },
            {
            breakpoint: 830,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
        ]
    });
});