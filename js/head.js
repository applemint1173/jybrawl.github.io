$(function () {
    // 헤드 스크롤 함수
    $(window).on('scroll', function () {
        var sTopHead = $(this).scrollTop();
        // 임시 셋팅
        $('h2').text(sTopHead);

        // 로고 움직임
        if (sTopHead >= 100 && sTopHead <= 1000) {
            $('.firstLogo').addClass('on');
        } else {
            $('.firstLogo').removeClass('on');
        }

        // 헤드 리스트 영역 색상 - 조건문 안쓰는걸로 수정필요
        if (sTopHead >= 0 && sTopHead < 900) {
            $('#head ul li a').removeClass('on');
            $('.menu1').addClass('on');
        } else if (sTopHead >= 900 && sTopHead < 2400) {
            $('#head ul li a').removeClass('on');
            $('.menu2').addClass('on');
        } else if (sTopHead >= 2400 && sTopHead < 3400) {
            $('#head ul li a').removeClass('on');
            $('.menu3').addClass('on');
        } else if (sTopHead >= 3400 && sTopHead < 4081) {
            $('#head ul li a').removeClass('on');
            $('.menu4').addClass('on');
        } else {
            $('#head ul li a').removeClass('on');
            $('.menu5').addClass('on');
        }
    });

    // 헤드 ul 마우스 함수
    $('#head ul').mouseenter(function () {
        $(this).css('background-color', 'rgba(0, 0, 0, 1)');
    });
    $('#head ul').mouseleave(function () {
        $(this).css('background-color', 'rgba(0, 0, 0, 0.4)');
    });

    // 헤드 li 클릭 함수
    $('li a').click(function () {
        // e.preventDefault(); // 기본적인 앵커 링크 동작을 방지
        var targetHref = $(this).attr('href');
        var targetTop = $(targetHref).offset().top;
        $('html, body').animate({ scrollTop: targetTop }, 1000, 'swing');
        $('#head ul li a').removeClass('on');
        $(this).addClass('on');
    });
});