$(() => {
    $('.slider__content').slick();

    $('.slider__arrow--prev').click(() => {
        $('.slider__content').slick('slickPrev');
    });

    $('.slider__arrow--next').click(() => {
        $('.slider__content').slick('slickNext');
    });
});
