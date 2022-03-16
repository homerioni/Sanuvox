// Пересчет rem в px для swiper
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/375) * (0.1 * $(window).width()) * rem;
    }
}

const reviews_slider = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        769: {
            slidesPerView: 3,
            spaceBetween: rem(4.8),

            pagination: {
                el: '.reviews__pagination--desktop',
            }
        },
        0: {
            slidesPerView: 1.4,
            spaceBetween: rem(2.5),
            centeredSlides: true,

            pagination: {
                el: '.reviews__pagination--mobile',
            }
        },
    },

    pagination: {
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        renderFraction: function (currentClass, totalClass) {
            return '<div class="' + currentClass + '"></div>' +
                '<div class="' + totalClass + '"></div>';
        },
    },

    navigation: {
        nextEl: '.reviews__arrow--right',
        prevEl: '.reviews__arrow--left',
    },

    autoplay: {
        autoplay: true,
        delay: 7000,
        disableOnInteraction: true,
    },
});

const intro_slider = new Swiper('.intro__swiper', {
    direction: 'vertical',
    slidesPerView: 1,

    pagination: {
        el: '.intro__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        renderFraction: function (currentClass, totalClass) {
            return '<div class="' + currentClass + '"></div>' +
                '<div class="' + totalClass + '"></div>';
        },
    },

    navigation: {
        nextEl: '.intro__arrow--bottom',
        prevEl: '.intro__arrow--top',
    },

    autoplay: {
        autoplay: true,
        delay: 5000,
        disableOnInteraction: true,
    },
});

const about_intro_slider = new Swiper('.about-intro__slider', {
    direction: 'horizontal',
    slidesPerView: 4,

    breakpoints: {
        769: {
            spaceBetween: rem(10.3),
        },

        0: {
            slidesPerView: 1.4,
            spaceBetween: rem(2),
            loop: true,
            autoplay: {
                autoplay: true,
                delay: 5000,
                disableOnInteraction: true,
            },
        },
    },
});