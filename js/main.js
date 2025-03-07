$(function () {
    $(window).on('scroll', function () {
        // bee 사진의 조건문
        var sTopMain = $(window).scrollTop();
        if (sTopMain < 900) {
            $('.bee').removeClass('on on2')
        } else if (sTopMain >= 900 && sTopMain < 1400) {
            $('.bee').addClass('on').removeClass('on2 on3');
        } else if (sTopMain >= 1400 && sTopMain < 2600) {
            $('.bee').addClass('on2').removeClass('on on3');
        } else {
            $('.bee').addClass('on3').removeClass('on on2')
        }
    });
    $('.slick1, .slick2').slick({
        slidesToShow: 1,        // 한 번에 보일 슬라이드 수
        slidesToScroll: 1,      // 스크롤 시 이동하는 슬라이드 수
        autoplay: true,         // 자동 재생 여부
        autoplaySpeed: 2000,    // 자동 재생 속도 (밀리초)
        dots: true              // 하단의 점(dot) 네비게이션 사용
    });

    $('.downloadBox img').click(function() {
        window.open('https://play.google.com/store/apps/details?id=com.supercell.brawlstars', '_blank');
    });
});