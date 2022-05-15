const swiper = new Swiper('.swiper', {
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        "320": {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        "976": {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        "1168": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "1600": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});


$('.slider-inner').slick({
    slidesToShow: 3,
});