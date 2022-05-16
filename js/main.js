'use strict'

$(document).ready(function () {

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
        $('.search').slideDown();
        setTimeout(function () {
            $('.search__input').focus();
        }, 300);
    });
    $('.search__close').click(function () {
        $('.search').hide();
        $('.search__input').val('');
    });

    // Modal video
    $('.modal-video').css('display', 'flex').hide();
    $('.video__play-btn').click(function () {
        let img = $(this).parent().find('.video__preview img').attr('src');
        $('.modal-video__video').css('background-image', 'url("' + img + '")')
        $('.modal-video').fadeIn('fast');
    });
    $('.modal-video__close').click(function () {
        $('.modal-video').fadeOut();
    });
    $('.modal-video__bg').click(function () {
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

});