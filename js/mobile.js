$(function () {

    $('#mobile-menu-icon').on('click', function () {
        $('#head ul').toggleClass('mobile-active');
        if ($('#head ul').hasClass('mobile-active')) {
            $('#mobile-menu-icon span').css('background-color', 'white');
        } else {
            $('#mobile-menu-icon span').css('background-color', 'black');
        }
    });
    // 새로고침 버그 끝맺음에 방지
    $(window).trigger('scroll');
});