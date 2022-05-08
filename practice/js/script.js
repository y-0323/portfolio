$(function(){
    $('#rec-slicks').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
});



$(function(){
    $('#nav-btn').on('click',function(){
        $(this).toggleClass('-active');
        $('#nav').toggleClass('-active');
    });
});

$(function(){
    $('.js-accordion').on('click', function(){
        $(this).next().slideToggle();
    })
});

$(function(){
    new WOW().init();
})
