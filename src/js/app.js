import jquery from 'jquery';
import ScrollReveal from 'scrollreveal'

window.jQuery = window.$ = jquery;



(function () {
    let isCounted = 0;
    /**
     * Burger-menu
     */
    $('.burger-menu').click(function () {
        var menu = $('.menu');
        $(this).toggleClass('active');
        if (menu.is(':visible')) {
            menu.slideUp();
        } else {
            menu.slideDown().css('display', 'flex');
        }
    });


    /**
     * Form-label
     */

    $('.form-control').on('focus', function () {
        $(this).parent().addClass('in-focus');
    });

    $('.form-control').on('blur', function () {
        if ($(this).val() !== "") {
            $(this).parent().addClass('in-focus');
        } else {
            $(this).parent().removeClass('in-focus');
        }
    });


})(jQuery)