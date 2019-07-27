$(function() {
    $(".tabs").tabs();
    $(".portfolio__tabs").tabs();
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        items: 1
    });
});

(function () {
    // .header-nav навигация
    let nav = $('.header__menu');

    // .menu-btn - кнопка меню
    $('.header__menu-btn').click(function() {
        if(nav.hasClass('active')) {
            nav.removeClass('active');
        }
        else {
            nav.addClass('active');
        }
    });
}());