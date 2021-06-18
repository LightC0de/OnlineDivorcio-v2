$(document).ready(function(){

    /* Reviews slider */
    $('.reviews--slider ').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<img src="./img/icons/chevron-left.svg" class="slider--btn left">',
        nextArrow: '<img src="./img/icons/chevron-left.svg" class="slider--btn right">',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
              }
            }
        ]
    });

    /* Footer copyright */
    $('#copyyear').html(new Date().getFullYear());

    /* Menu */
    $('.hamburger, .mobile--close').click(function(e){
        e.preventDefault();
        $('body').toggleClass('mobnav');
    });

    $('.overlay').click(function(e){
        $('body').removeClass('mobnav');
    });
});