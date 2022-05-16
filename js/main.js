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
                // item_current.find('.order__list').html('');
                // item_current.find('.order__label').each(function () {
                //     item_current.find('.order__list').append(
                //         '<li class="order__list-item">' + $(this).find('input').val() + '</li>'
                //     );
                // });
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
});