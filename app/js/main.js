$(function () {

    $('.header__menu-icon-outer').click(function () {
        $('.header__menu-icon-outer').toggleClass('active');
        $('.header__menu-icon').toggleClass('active');
        $('.header__menu').toggleClass('active');
        $('.header__log').toggleClass('active');
        $('body').toggleClass('lock');
    });


    //Модалкиииииииииииииииииииииииии
    // Кукисы
    

    $('.cookie__collapse').click(function () {
        $('.cookie').addClass('disable');
    });
    $('.cookie__agree').click(function () {
        $('.cookie').addClass('disable');
    });

    $('.close-icon').click(function () {
        $('.reg').addClass('disable');
        $('.thanks').addClass('disable');
        $('.log').addClass('disable');
        $('body').removeClass('lock');
        $('.wrapper').removeClass('blur');
    });
    // Регистра
    $('.header__reg').click(function () {
        $('.regjs').removeClass('disable');
        $('.log').addClass('disable');
        $('body').addClass('lock');
        $('.wrapper').addClass('blur');
        $('.header__menu-icon-outer').removeClass('active');
        $('.header__menu-icon').removeClass('active');
        $('.header__menu').removeClass('active');
        $('.header__log').removeClass('active');
    });
    $('.reg__regd').click(function () {
        $('.regjs').addClass('disable');
        $('body').addClass('lock');
        $('.wrapper').addClass('blur');
        $('.header__menu-icon-outer').removeClass('active');
        $('.header__menu-icon').removeClass('active');
        $('.header__menu').removeClass('active');
        $('.header__log').removeClass('active');
        $('.log').removeClass('disable');
    });
    $('.slide__link').click(function () {
        $('.regjs').removeClass('disable');
        $('.log').addClass('disable');
        $('body').addClass('lock');
        $('.wrapper').addClass('blur');
        $('.header__menu-icon-outer').removeClass('active');
        $('.header__menu-icon').removeClass('active');
        $('.header__menu').removeClass('active');
        $('.header__log').removeClass('active');
    });
    $('.affordable__card-link').click(function () {
        $('.regjs').removeClass('disable');
        $('.log').addClass('disable');
        $('body').addClass('lock');
        $('.wrapper').addClass('blur');
        $('.header__menu-icon-outer').removeClass('active');
        $('.header__menu-icon').removeClass('active');
        $('.header__menu').removeClass('active');
        $('.header__log').removeClass('active');
    });
    // log
    $('.header__sign').click(function () {
        $('.log').removeClass('disable');
        $('.regjs').addClass('disable');
        $('body').addClass('lock');
        $('.wrapper').addClass('blur');
        $('.header__menu-icon-outer').removeClass('active');
        $('.header__menu-icon').removeClass('active');
        $('.header__menu').removeClass('active');
        $('.header__log').removeClass('active');
    });
    $('.create-link').click(function () {
        $('.log').addClass('disable');
        $('.regjs').removeClass('disable');
        $('body').addClass('lock');
        $('.wrapper').addClass('blur');
        $('.header__menu-icon-outer').removeClass('active');
        $('.header__menu-icon').removeClass('active');
        $('.header__menu').removeClass('active');
        $('.header__log').removeClass('active');
    });
    $('.restore-link').click(function () {
        $('.log').addClass('disable');
        $('.restore').removeClass('disable');
        $('body').addClass('lock');
        $('.wrapper').addClass('blur');
        $('.header__menu-icon-outer').removeClass('active');
        $('.header__menu-icon').removeClass('active');
        $('.header__menu').removeClass('active');
        $('.header__log').removeClass('active');
    });
    // thanks
    $('.reg__button').click(function () {
        $('.regjs').addClass('disable');
        $('.thanks').removeClass('disable');
        $('body').addClass('lock');
        $('.wrapper').addClass('blur');
        $('.header__menu-icon-outer').removeClass('active');
        $('.header__menu-icon').removeClass('active');
        $('.header__menu').removeClass('active');
        $('.header__log').removeClass('active');
    });
    // //restore
    $('.restore__go-back').click(function () {
        $('.restore').addClass('disable');
        $('.log').removeClass('disable');
        $('body').addClass('lock');
        $('.wrapper').addClass('blur');
    });


    if (window.innerWidth >= 1111) {
        new Swiper('.insights__slider', {
            scrollbar: {
                el: '.insights__scroll',
                draggable: true,
            },
            slidesPerView: 3.7,
            watchOverflow: 'true',
            spaceBetween: 32,
        });
    };

    $('body').on('click', '.eue', function () {

        if ($('#regPass').attr('type') == 'password') {

            $('#regPass').attr('type', 'text');

        } else {

            $('#regPass').attr('type', 'password');

        }

        return false;

    });


    //validation

    new window.JustValidate('#formReg', {
        rules: {
            firstnameOne: { required: true },
            lastname: { required: true },
            email: { required: true, email: true },
            password: { required: true, minLength: 6 }
        },
        messages: {
            password: 'Hint or Error Message'
        },
        submitHandler: function (form) {
            console.log(form);
        }
    });
    new window.JustValidate('#formLog', {
        rules: {
            emailTw: { required: true, email: true },
            passwordTw: { required: true, minLength: 6 }
        },
        submitHandler: function (form) {
            console.log(form);
        }
    });
    new window.JustValidate('#formRes', {
        rules: {
            emailTh: { required: true, email: true },
        },
        submitHandler: function (form) {
            console.log(form);
        }
    });

});