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

    on: {
        init: function () {
            if ($('.intro__image-item').length === 1) {
                $('.intro__navigation-block').hide();
            }
        },
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
            },
        },
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});

const projects_slider = new Swiper('.projects__slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: rem(5),

    pagination: {
        el: '.projects__pagination',
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
        nextEl: '.projects__arrow-right',
        prevEl: '.projects__arrow-left',
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});

const partners_slider = new Swiper('.partners__cards', {
    direction: 'horizontal',
    spaceBetween: rem(9.7),
    loop: true,

    breakpoints: {
        769: {
            slidesPerView: 4,

            pagination: {
                el: '.partners__pagination',
            },
        },

        0: {
            slidesPerView: 1,

            pagination: {
                el: '.partners__pagination--mobile',
            },
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
        nextEl: '.partners__arrow-right',
        prevEl: '.partners__arrow-left',
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});

const product_intro_slider = new Swiper('.product-intro__image-block .swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,

    pagination: {
        el: '.product-intro__pagination',
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
        nextEl: '.product-intro__arrow-right',
        prevEl: '.product-intro__arrow-left',
    },

    autoplay: {
        autoplay: true,
        delay: 5000,
        disableOnInteraction: true,
    },
});

const related_products_slider = new Swiper('.related-products__cards', {
    direction: 'horizontal',

    breakpoints: {
        769: {
            slidesPerView: 3,
            spaceBetween: rem(5),
        },
        0: {
            slidesPerView: 1.2,
            spaceBetween: rem(2),
        },
    },

    pagination: {
        el: '.related-products__pagination',
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
        nextEl: '.related-products__arrow-right',
        prevEl: '.related-products__arrow-left',
    },

    autoplay: {
        autoplay: true,
        delay: 5000,
        disableOnInteraction: true,
    },
});