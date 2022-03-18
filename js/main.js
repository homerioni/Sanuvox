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

});