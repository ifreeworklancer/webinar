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

    /**
     * Modal
     */
    $('.open-modal').on('click', function (e) {
        e.preventDefault();
        $('.modal').addClass('active');
        $('.modal-mask').fadeIn();
    })
    
    $('.close-modal').on('click', function () {
        $('.modal').removeClass('active');
        $('.modal-mask').fadeOut();
    })

    $('.modal-mask').on('click', function () {
        $('.modal').removeClass('active');
        $('.modal-mask').fadeOut();
    })


    /**
     * Counter
     */
    function timer() {

        // var timerData = {
        //     year: 2018,
        //     month: 11, // 1 - 12
        //     day: 2,
        //     hour: 12, // 0 - 23
        //     min: 12 // 0 - 59
        // }

        let end;

        const endDate = localStorage.getItem('endDate');

        if (!!endDate) {
            end = endDate;
        } else {
            end = localStorage.setItem('endDate', new Date().getTime() + 480000);
        }

        var _milisec = 1;
        var _second = _milisec * 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;

        function showRemaining() {
            var now = new Date().getTime();
            var distance = end - now;

            if ((new Date().getTime() > end)) {
                $('#data-counter-btn').fadeOut();

                $(".day").text("00");
                $(".hour").text("00");
                $(".min").text("00");
                $(".sec").text("00");
                $(".mili").text("000");

                clearInterval(intervalTimer);

                // return;
            }


            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);
            var miliseconds = Math.floor((distance % _second) / _milisec);

            if (miliseconds < 100) miliseconds = "0" + miliseconds;
            if (miliseconds < 10) miliseconds = "0" + miliseconds;
            if (seconds < 10) seconds = "0" + seconds;
            if (minutes < 10) minutes = "0" + minutes;
            if (hours < 10) hours = "0" + hours;
            if (days < 10) days = "0" + days;

            $(".day").text(days);
            $(".hour").text(hours);
            $(".min").text(minutes);
            $(".sec").text(seconds);
            // $(".mili").text(miliseconds);
        }

        var intervalTimer = setInterval(showRemaining, 10);
    }
    timer();

    /**
     * Set Viedo
     */
    function setVideo() {
        var video = $('.youplay');
        var w = video.width();
        video.css('height', w * 0.56);
    }

    setVideo();

})(jQuery)