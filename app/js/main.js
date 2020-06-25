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


});