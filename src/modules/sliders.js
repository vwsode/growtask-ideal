const portfolioSlider = new Swiper(".portfolio__slider", {
    direction: "horizontal",

    loop: true,

    navigation: {
        prevEl: ".portfolio__slider-prev",
        nextEl: ".portfolio__slider-next",
    },

    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 16,
        },
        576: {
            slidesPerView: 2.5,
            spaceBetween: 16,
        },
        911: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1401: {
            slidesPerView: 2.35,
            spaceBetween: 20,
        },
    },
});

const reviewsSlider = new Swiper(".reviews__slider", {
    direction: "horizontal",

    loop: true,

    navigation: {
        prevEl: ".reviews__slider-prev",
        nextEl: ".reviews__slider-next",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        576: {
            slidesPerView: 2.1,
            spaceBetween: 16,
        },
        991: {
            slidesPerView: 3.1,
            spaceBetween: 20,
        },
        1401: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
    },
});
