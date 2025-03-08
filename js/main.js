$(function () {
    var windowWidth = $(window).width();

    var initialWidth = $(window).width();
    $(window).on('resize', function () {
        var newWidth = $(window).width();
        // 1335px 임계값 기준으로 변화가 있는 경우에만 새로고침
        if ((initialWidth > 1335 && newWidth <= 1335) || (initialWidth <= 1335 && newWidth > 1335)) {
            window.location.reload();
        }
    });

    if (windowWidth > 1335) {
        // 데스크톱용 스크롤 이벤트
        $(window).on('scroll', function () {
            var sTopMain = $(window).scrollTop();
            var video = $('.characterBox video').get(0);

            if (sTopMain < 1200) {
                $('.introductionBox').removeClass('on on2');
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
            } else if (sTopMain >= 1200 && sTopMain < 2000) {
                $('.introductionBox').removeClass('on2').addClass('on');
                if (video) {
                    var ratio = (sTopMain - 1200) / (2000 - 1200);
                    video.pause(); // 자동 재생은 막고 현재 시간만 업데이트
                    video.currentTime = ratio * video.duration;
                }
            } else {
                $('.introductionBox').removeClass('on').addClass('on2');
                if (video) {
                    video.pause();
                    video.currentTime = video.duration;
                }
            }

            // modal
            $('.slick1 img, .slick2 img').on('click', function () {
                // 슬라이더 일시정지
                $('.slick1, .slick2').slick('slickPause');

                // 클릭한 이미지의 src 값을 가져옴
                var clickedImgSrc = $(this).attr('src');

                // 모달 내부의 이미지 요소(#modalImage)의 src 값을 클릭한 이미지로 변경
                $('#modalImage').attr('src', clickedImgSrc);

                // 모달 열기
                $('#readmeModal').fadeIn();
            });

            // 모달 닫기 버튼(X)을 누르면 모달 닫기 및 슬라이더 재개
            $('.close-btn').on('click', function () {
                $('#readmeModal').fadeOut(function () {
                    $('.slick1, .slick2').slick('slickPlay');
                });
            });

            // 모달 바깥(오버레이)을 클릭해도 닫히도록
            $('#readmeModal').on('click', function (e) {
                if ($(e.target).is('#readmeModal')) {
                    $('#readmeModal').fadeOut(function () {
                        $('.slick1, .slick2').slick('slickPlay');
                    });
                }
            });
        });
    } else {
        $(window).on('scroll', function () {
            var sTopMain = $(window).scrollTop();
            var video = $('.characterBox video').get(0);

            if (sTopMain < 500) {
                $('.introductionBox').removeClass('on on2');
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
            } else if (sTopMain >= 500 && sTopMain < 1200) {
                $('.introductionBox').removeClass('on2').addClass('on');
                if (video) {
                    var ratio = (sTopMain - 500) / (1200 - 500);
                    video.pause(); // 자동 재생은 막고 현재 시간만 업데이트
                    video.currentTime = ratio * video.duration;
                }
            } else {
                $('.introductionBox').removeClass('on').addClass('on2');
                if (video) {
                    video.pause();
                    video.currentTime = video.duration;
                }
            }
        });
    }

    // slick
    $('.slick1, .slick2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    });



    // 아이콘 이미지 링크
    $('.icon img:nth-of-type(1)').click(function () {
        window.open('https://www.reddit.com/r/Brawlstars/', '_blank');
    });
    $('.icon img:nth-of-type(2)').click(function () {
        window.open('https://www.youtube.com/brawlstars', '_blank');
    });
    $('.icon img:nth-of-type(3)').click(function () {
        window.open('https://www.facebook.com/brawlstars', '_blank');
    });
    $('.icon img:nth-of-type(4)').click(function () {
        window.open('https://www.instagram.com/BrawlStars/', '_blank');
    });
    $('.icon img:nth-of-type(5)').click(function () {
        window.open('https://x.com/BrawlStars', '_blank');
    });
    $('.icon img:nth-of-type(6)').click(function () {
        window.open('https://www.tiktok.com/@brawlstars', '_blank');
    });

    // 다운로드 이미지 링크
    $('.downloadBox img').click(function () {
        window.open('https://play.google.com/store/apps/details?id=com.supercell.brawlstars', '_blank');
    });
});