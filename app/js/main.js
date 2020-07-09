$(function(){

    $(".slider__inner-rate").rateYo({
        rating: 4.6,
        readOnly: true,
        starWidth: "16px",
        spacing: "3px",
        
                
    });

    $('.slider__inner').slick({
        prevArrow: '<button class="slick-prev slick-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow"></button>',
    });

    $(".products__inner-rate").rateYo({
        rating: 4.6,
        readOnly: true,
        starWidth: "12px",
        spacing: "3px",
        
                
    });

    $('.slider__inner-maxi').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev slick-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow"></button>',
    });

    var mixer = mixitup('.products__inner-works');



});