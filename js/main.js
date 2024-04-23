$(document).ready(function(){
    var window_w

    function device_chk(){
        window_w = $(window).scrollTop();
    }
    
    device_chk();

    $(window).scroll(function(){
        device_chk();
        if (window_w >= 1400) {
            $('.gnb ul li').removeClass('on');
            $('.gnb ul .gnb3').addClass('on');
        }
        if (window_w >= 450 && window_w < 1400) {
            $('.gnb ul li').removeClass('on');
            $('.gnb ul .gnb2').addClass('on');
        }
        if (window_w < 450) {
            $('.gnb ul li').removeClass('on');
            $('.gnb ul .gnb1').addClass('on');
        }
        if (window_w < 200) {
            $('.skill .progress').removeClass('on');
        }
        if (window_w > 1500) {
            $('.skill .progress').removeClass('on');
        }
        if (window_w > 600 && window_w < 1100) {
            $('.skill .progress').addClass('on');
        }
    })
    $('.gnb .gnb1').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })
    $('.gnb .gnb2').on('click', function(){
        $('html, body').animate({
            scrollTop: 850
        }, 500)
    })
    $('.gnb .gnb3').on('click', function(){
        $('html, body').animate({
            scrollTop: 1770
        }, 500)
    })
    console.log("%c Hello, World ! ", "background-color:#212121; color: #fff; font-weight:bold; font-size:120%; padding: 4px;")
})