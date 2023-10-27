$(document).ready(function () {
    AOS.init();

    /*�대┃�대깽��*/
    $('.go-btn').click(function () {
        $('html, body').animate({
            'scrollTop': '0'
        }, 1000)
    });
    $('.go-btn1').click(function () {
        $('html, body').animate({
            'scrollTop': '0'
        }, 1000)
    });

    $('footer .click-select').click(function () {
        $('footer .select-wrap li').slideToggle();
        $('footer .arrow').toggleClass('activeArrow');
    });

    $('.platform-box').click(function (e) {
        if (e.target.id === 'form1') {
            $('.platform-box1').addClass('open');
            $('.platform-box1.open .close-wrap').addClass('none');
            $('.platform-box2').removeClass('open');
            $('.platform-box3').removeClass('open');
            $('.platform-box4').removeClass('open');
            $('.platform-box2.open .close-wrap').removeClass('none');
            $('.platform-box3.open .close-wrap').removeClass('none');
            $('.platform-box4.open .close-wrap').removeClass('none');
        } else if (e.target.id === 'form2') {
            $('.platform-box2').addClass('open');
            $('.platform-box2.open .close-wrap').addClass('none');
            $('.platform-box1').removeClass('open');
            $('.platform-box3').removeClass('open');
            $('.platform-box4').removeClass('open');
            $('.platform-box1.open .close-wrap').removeClass('none');
            $('.platform-box3.open .close-wrap').removeClass('none');
            $('.platform-box4.open .close-wrap').removeClass('none');
        } else if (e.target.id === 'form3') {
            $('.platform-box3').addClass('open');
            $('.platform-box3.open .close-wrap').addClass('none');
            $('.platform-box2').removeClass('open');
            $('.platform-box1').removeClass('open');
            $('.platform-box4').removeClass('open');
            $('.platform-box2.open .close-wrap').removeClass('none');
            $('.platform-box1.open .close-wrap').removeClass('none');
            $('.platform-box4.open .close-wrap').removeClass('none');
        } else if (e.target.id === 'form4') {
            $('.platform-box4').addClass('open');
            $('.platform-box4.open .close-wrap').addClass('none');
            $('.platform-box2').removeClass('open');
            $('.platform-box3').removeClass('open');
            $('.platform-box1').removeClass('open');
            $('.platform-box2.open .close-wrap').removeClass('none');
            $('.platform-box3.open .close-wrap').removeClass('none');
            $('.platform-box1.open .close-wrap').removeClass('none');
        }
    });

    /*�뚮읉*/
    // $('.alert a').click(function () {
    //     alert('以�鍮꾩쨷 �낅땲��.');
    // });

    /*援ъ씤*/
    $('#career1').click(function () {
        $('#careerA2').slideUp();
        $('#careerA3').slideUp();
        $('#careerA4').slideUp();
        $('#careerA5').slideUp();
        $('#careerA6').slideUp();
        $('#careerA7').slideUp();
        $('#careerA1').slideToggle();
        $('.career .recurit-list .menu').removeClass('activeClick');
        $('#career1').addClass('activeClick');
    });
    $('#career2').click(function () {
        $('#careerA1').slideUp();
        $('#careerA3').slideUp();
        $('#careerA4').slideUp();
        $('#careerA5').slideUp();
        $('#careerA6').slideUp();
        $('#careerA7').slideUp();
        $('#careerA2').slideToggle();
        $('.career .recurit-list .menu').removeClass('activeClick');
        $('#career2').addClass('activeClick');
    });
    $('#career3').click(function () {
        $('#careerA2').slideUp();
        $('#careerA1').slideUp();
        $('#careerA4').slideUp();
        $('#careerA5').slideUp();
        $('#careerA6').slideUp();
        $('#careerA7').slideUp();
        $('#careerA3').slideToggle();
        $('.career .recurit-list .menu').removeClass('activeClick');
        $('#career3').addClass('activeClick');
    });
    $('#career4').click(function () {
        $('#careerA2').slideUp();
        $('#careerA3').slideUp();
        $('#careerA1').slideUp();
        $('#careerA5').slideUp();
        $('#careerA6').slideUp();
        $('#careerA7').slideUp();
        $('#careerA4').slideToggle();
        $('.career .recurit-list .menu').removeClass('activeClick');
        $('#career4').addClass('activeClick');
    });
    $('#career5').click(function () {
        $('#careerA2').slideUp();
        $('#careerA3').slideUp();
        $('#careerA4').slideUp();
        $('#careerA1').slideUp();
        $('#careerA6').slideUp();
        $('#careerA7').slideUp();
        $('#careerA5').slideToggle();
        $('.career .recurit-list .menu').removeClass('activeClick');
        $('#career5').addClass('activeClick');
    });
    $('#career6').click(function () {
        $('#careerA2').slideUp();
        $('#careerA3').slideUp();
        $('#careerA4').slideUp();
        $('#careerA5').slideUp();
        $('#careerA1').slideUp();
        $('#careerA7').slideUp();
        $('#careerA6').slideToggle();
        $('.career .recurit-list .menu').removeClass('activeClick');
        $('#career6').addClass('activeClick');
    });
    $('#career7').click(function () {
        $('#careerA2').slideUp();
        $('#careerA3').slideUp();
        $('#careerA4').slideUp();
        $('#careerA5').slideUp();
        $('#careerA6').slideUp();
        $('#careerA1').slideUp();
        $('#careerA7').slideToggle();
        $('.career .recurit-list .menu').removeClass('activeClick');
        $('#career7').addClass('activeClick');
    });

    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    // �듬찓��
    $('.about-menu a').click(function () {
        // 踰꾪듉 hover �대깽��
        return false
        $(this).addClass('on');
        $('.about-menu a').not(this).removeClass('on');
    });


    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 1200) {
            $('.up-box').addClass("show");
        } else {
            $('.up-box').removeClass("show");
        }
    });

    

    $('header .hamMenu').click(function () {
        $('header .hamMenuList').toggleClass('activeMenu');
        $('header .ham').toggleClass('activeHam');
    });

    $('footer .open-pop').click(function(){
        $('.site-map-wrap').addClass('mapOn');
        $('.site-map').addClass('mbmap');
        $('.site-blackm').addClass('blackmb');
    });
    $('.site-map .hamMenu').click(function(){
        $('.site-map-wrap').removeClass('mapOn');
        $('.alert-ready').removeClass('mapOn');
        $('.site-map').removeClass('mbmap');
        $('.site-blackm').removeClass('blackmb');
    });
    $('.site-black').click(function(){
        $('.site-map-wrap').removeClass('mapOn');
        $('.alert-ready').removeClass('mapOn');
        $('.site-map').removeClass('mbmap');
        $('.site-blackm').removeClass('blackmb');
    });
    // $('.contact .contact-bt-box .alert').click(function(){
    //     $('.alert-ready').addClass('mapOn');
    // });


    // /*countUp*/
    // var count0 = count1 = 0;
    // var count2 = 50000;
    // var count3 = 4000
    // timeCounter();

    // function timeCounter() {

    //     id0 = setInterval(count0Fn, 0.5);

    //     function count0Fn() {
    //         count0++;
    //         if (count0 > 1100) {
    //             clearInterval(id0);
    //         } else {
    //             $(".counter").eq(0).text(count0);
    //         }

    //     }

    //     id1 = setInterval(count1Fn, 500);

    //     function count1Fn() {
    //         count1++;
    //         if (count1 > 8) {
    //             clearInterval(id1);
    //         } else {
    //             $(".counter").eq(1).text(count1);
    //         }
    //     }

    //     id2 = setInterval(count2Fn, 0);

    //     function count2Fn() {
    //         count2++;
    //         if (count2 > 53000) {
    //             clearInterval(id2);
    //         } else {
    //             $(".counter").eq(2).text(count2);
    //         }
    //     }

    //     id3 = setInterval(count3Fn, 0);

    //     function count3Fn() {
    //         count3++;
    //         if (count3 > 7000) {
    //             clearInterval(id3);
    //         } else {
    //             $(".counter").eq(3).text(count3);
    //         }
    //     }

    //     if ($(".platform .platform-next-slide").css("display") == "none") { $("div").show(); //display :none �쇰뻹 } else { $("div").hide(); //display :block �쇰뻹 }

    //     id4 = setInterval(count4Fn, 100);

    //     function count4Fn() {
    //         count4++;
    //         if (count4 > 1000) {
    //             clearInterval(id4);
    //         } else {
    //             $(".counter2").eq(4).text(count4);
    //         }
    //     }
    // }


    /*�ㅽ겕濡ㅻℓ吏�*/
    var controller = new ScrollMagic.Controller();
    var animateElem = [".animate_1", ".animate_2", ".animate_3", ".animate_4"];
    var triggerElem = [".trigger_1", ".trigger_2", ".trigger_3", ".trigger_4"];

    for (var i = 0; i < animateElem.length; i++) {
        var currentAnimateElem = animateElem[i];
        var currentTriggerElem = triggerElem[i];

        var timeline = new TimelineMax();

        var tween_move = TweenMax.fromTo(
            currentAnimateElem,
            1, {
                ease: SlowMo.ease.config(0.7, 0.7, false),
                y: 50
            }, {
                ease: SlowMo.ease.config(0.7, 0.7, false),
                y: -50
            }
        );

        var tween_opacity = new TimelineMax();
        tween_opacity
            .to(currentAnimateElem, 0.3, {
                ease: Linear.easeNone,
                opacity: 1
            })
            .to(
                currentAnimateElem,
                0.3, {
                    ease: Linear.easeNone,
                    opacity: 0
                },
                "+=0.4"
            );

        timeline.add(tween_move, 0).add(tween_opacity, 0);

        var scene_main = new ScrollMagic.Scene({
                triggerElement: currentTriggerElem,
                duration: "900px"
            })
            .setTween(timeline)
            .addTo(controller);
    }

    
    

    /*�ㅽ겕濡ㅼ뒪臾댁뒪*/
    // window.onload = function () {
    //     var elm = ".fullP";
    //     $(elm).each(function (index) {
    //         // 媛쒕퀎�곸쑝濡� Wheel �대깽�� �곸슜
    //         $(this).on("mousewheel DOMMouseScroll", function (e) {
    //             e.preventDefault();
    //             var delta = 0;
    //             if (!event) event = window.event;
    //             if (event.wheelDelta) {
    //                 delta = event.wheelDelta / 120;
    //                 if (window.opera) delta = -delta;
    //             } 
    //             else if (event.detail)
    //                 delta = -event.detail / 3;
    //             var moveTop = $(window).scrollTop();
    //             var elmSelecter = $(elm).eq(index);
    //             // 留덉슦�ㅽ쑀�� �꾩뿉�� �꾨옒濡�
    //             if (delta < 0) {
    //                 if ($(elmSelecter).next() != undefined) {
    //                     try{
    //                         moveTop = $(elmSelecter).next().offset().top;
    //                     }catch(e){}
    //                 }
    //             // 留덉슦�ㅽ쑀�� �꾨옒�먯꽌 �꾨줈
    //             } else {
    //                 if ($(elmSelecter).prev() != undefined) {
    //                     try{
    //                         moveTop = $(elmSelecter).prev().offset().top;
    //                     }catch(e){}
    //                 }
    //             }

    //             // �붾㈃ �대룞 0.8珥�(800)
    //             $("html,body").stop().animate({
    //                 scrollTop: moveTop + 'px'
    //             }, {
    //                 duration: 800, complete: function () {
    //                 }
    //             });
    //         });
    //     });
    // }

    /*硫붾돱�ㅻ퉬*/
    
    $(window).resize(function () {
        if (window.innerWidth > 1420) {
            $('.swiper-add').removeClass('mySwiper2');
            $('.about-real .about-ani-wrap').removeClass('swiper-wrapper');
            $('.about-real .about-ani-wrap .about-ani-box').removeClass('swiper-slide');
        } else {
            $('.swiper-add').addClass('mySwiper2');
            $('.about-real .about-ani-wrap').addClass('swiper-wrapper');
            $('.about-real .about-ani-wrap .about-ani-box').addClass('swiper-slide');
        }
    }).resize();


});