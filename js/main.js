'use strict'

$(document).ready(function () {

    $('.input-phone').mask('+7 (999) 999-99-99');

    // Функция рейтинга для отзывов
    $('.reviews__item-rating-block').each(function () {
        let rating = $(this).attr('rating');
        $(this).find('.reviews__item-rating-icons svg').each(function (index) {
            if (index == rating) {
                return false;
            } else {
                $(this).addClass('fill');
            }
        });
    });

    // Функция для секции feedback
    $('.feedback__input').focus(function () {
        $(this).parent().addClass('focus');
    }).focusout(function () {
        if (!$(this).val()) {
            $(this).parent().removeClass('focus');
        }
    });

    // Store button
    $('.header__store-btn').click(function () {
        if ($(window).width() > 768) {
            $('.header__store').slideToggle();
            $('body').toggleClass('lock');
        } else {
            $('.header__store').slideDown();
        }
    });
    $('.header__store-back-btn').click(function () {
        $('.header__store').slideUp();
    });

    // Burger menu
    if($(window).width() <= 768) {
        $('.header__container-menu').hide();
    }
    $('.header__burger-btn').click(function () {
        $(this).toggleClass('open');
        $('.header__container-menu').slideToggle();
        $('body').toggleClass('lock');
        $('.header__store').slideUp();
    });

    // Search
    $('.header__search-btn').click(function () {
        $('.search').fadeIn(200);
        setTimeout(function () {
            $('.search__input').focus();
        }, 200);
    });
    $('.btn-search-mob').click(function () {
        $('.search-mob').fadeIn(200);
        setTimeout(function () {
            $('.search-mob__label input').focus();
        }, 200);
    });
    $('.search__close').click(function () {
        $('.search').hide();
        $('.search__input').val('');
    });
    $('.search-mob .close').click(function () {
        $('.search-mob').fadeOut(200);
        $('.search-mob__label input').val('');
    });

    // Modal video
    $('.modal-video').css('display', 'flex').hide();
    $('.video-play').click(function () {
        let getLink = $(this).parents('.video__item').attr('video')
            .replace('.com/embed/', '.com/watch?v=')
            .replace('.be/', '.com/watch?v=')
            .split(".com/watch?v=")[1]
            .split("&index")[0]
            .replace('&', '?');

        $('body').addClass('lock');
        $('.modal-video iframe').attr('src', 'https://www.youtube.com/embed/' + getLink);
        $('.modal-video').fadeIn('fast');
    });
    $('.modal-video__close').click(function () {
        $('body').removeClass('lock');
        $('.modal-video').fadeOut();
    });
    $('.modal-video__bg').click(function () {
        $('body').removeClass('lock');
        $('.modal-video').fadeOut();
    });

    // Tab content for product-page.html
    $('.product-description__tab').click(function () {
        $('.product-description__tab-content').hide();
        $('.product-description__tab').removeClass('active');
        $(this).addClass('active');
        let content = '.' + $(this).attr('id');
        $(content).fadeIn();
    });

    // cart shop
    $('.cart__qty-operand--minus').click(function () {
        let input = $(this).parent().find('input'),
            value = Number(input.val());
        if (value > 1) {
            input.val(value - 1);
        }
    });
    $('.cart__qty-operand--plus').click(function () {
        let input = $(this).parent().find('input'),
            value = Number(input.val());
        input.val(value + 1);
    });

    // order
    $('.order__btn-next').click(function () {
        let item_current,
            item_next;
        switch ($(this).attr('step')) {
            case '2':
                item_current = $('.order__item:nth-child(2)');
                item_next = $('.order__item:nth-child(3)');
                item_current.find('.order__edit-content').hide();
                item_current.find('.order__text-content').show();
                item_next.find('.order__item-title--name-block').hide();
                item_next.find('.order__edit-content').show();
                break
            case '3':
                item_current = $('.order__item:nth-child(3)');
                item_next = $('.order__item:nth-child(4)');
                item_current.find('.order__edit-content').hide();
                item_current.find('.order__text-content').show();
                item_next.find('.order__item-title--name-block').hide();
                item_next.find('.order__edit-content').show();
                item_next.find('.order__submit-block').css('display', 'flex');
                break
        }
    });
    $('.order__btn-edit').click(function () {
        let item_current,
            item_next;
        switch ($(this).attr('step')) {
            case '2':
                $('.order__edit-content, .order__text-content, .order__submit-block').hide();
                $('.order__item-title--name-block, .order__item:nth-child(2) .order__edit-content').show();
                break
            case '3':
                item_current = $('.order__item:nth-child(3)');
                item_next = $('.order__item:nth-child(4)');
                item_current.find('.order__edit-content').show();
                item_current.find('.order__text-content').hide();
                item_next.find('.order__item-title--name-block').show();
                item_next.find('.order__edit-content, .order__submit-block').hide();
                break
        }
    });
    $('.order__label--radio').click(function () {
        $(this).parent().find('label').removeClass('active');
        $(this).addClass('active');
    });

    // Personal
    $('.personal__back-btn').click(function () {
        $('body').addClass('lock');
        $('.personal__menu').css('transform', 'translateX(0)');
    });
    $('.personal__list-item.active').click(function () {
        $('body').removeClass('lock');
        $('.personal__menu').css('transform', 'translateX(-100%)');
    });
    if (!$('.personal__avatar img').attr('src')) {
        $('.personal__avatar').html($('.personal__username').text().slice(0, 1));
    }

    // login
    $('.login__restore').click(function () {
        $('input').val('');
        $('.login__content').removeClass('active');
        $('.login__content--restore').addClass('active');
    });
    $('.login__back-btn').click(function () {
        $('input').val('');
        $('.login__content').removeClass('active');
        $('.login__content--login').addClass('active');
    });
    $('.register-btn').click(function () {
        $('input').val('');
        $('.login__content').removeClass('active');
        $('.login__content--register').addClass('active');
    });
    $('.login-btn').click(function () {
        $('input').val('');
        $('.login__content').removeClass('active');
        $('.login__content--login').addClass('active');
    });
    $('.restore-btn').click(function () {
        $('.login__content').removeClass('active');
        $('.login__restore-confirm').addClass('active');
    });
    $('.eye-icon-off').click(function () {
        $(this).hide();
        $(this).parent().find('.eye-icon-on').show();
        $(this).parent().parent().find('input').attr('type', 'text');
    });
    $('.eye-icon-on').click(function () {
        $(this).hide();
        $(this).parent().find('.eye-icon-off').show();
        $(this).parent().parent().find('input').attr('type', 'password');
    });

    // more-btn
    $('.circle-btn--more-btn').click(function () {
        $(this).parent().find('.hide').removeClass('hide');
        $(this).hide();
    });

    // category tabs
    $('.category__tab').click(function () {
        $('.category__tab').removeClass('active');
        $(this).addClass('active');
    });
    $('.category__tab-content input').change(function () {
        $('.category__tab-content').removeClass('active');
        $(this).parent().addClass('active');
    });

    // Modal feedback
    $('.popup-feedback-one').click(function () {
        $('body').addClass('lock');
        $('.modal-feedback--one').css('display', 'flex').hide().fadeIn();
    });
    $('.popup-feedback-two').click(function () {
        $('body').addClass('lock');
        $('.modal-feedback--two').css('display', 'flex').hide().fadeIn();
    });
    $('.modal-feedback .close').click(function () {
        $('body').removeClass('lock');
        $(this).parents('.modal-feedback').fadeOut(150);
        setTimeout(() => {
            $('.modal-feedback input').val('');
            $('.modal-feedback__content').removeClass('complete');
        }, 150);
    });
    $('.modal-feedback__input').focusin(function () {
        $(this).parent().addClass('active');
    }).focusout(function () {
        $(this).parent().removeClass('active');
    });
    $('.modal-feedback__btn').click(function () {
        $('.modal-feedback__content').addClass('complete');
    });

    // Modal cart
    $('.popup-add-cart').click(function () {
        $('body').addClass('lock');
        $('.modal-add-cart').css('display', 'flex').hide().fadeIn();
    });
    $('.modal-add-cart .close').click(function () {
        $('body').removeClass('lock');
        $(this).parents('.modal-add-cart').fadeOut(150);
    });

    // Modal registered
    $('.popup-registered').click(function () {
        $('body').addClass('lock');
        $('.modal-registered').css('display', 'flex').hide().fadeIn();
    });
    $('.modal-registered .close').click(function () {
        $('body').removeClass('lock');
        $(this).parents('.modal-registered').fadeOut(150);
    });

});