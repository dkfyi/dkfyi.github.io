$(function() {
    // $('.after_contact').show(10);
    $("body").on("dragstart", function (event) {
        event.preventDefault();
    });

    $(".hide-menu_mob").click(function(e) {
        e.preventDefault(),
            $(".menu-overlay").toggleClass("show"),
            $(".menu-hidden").toggleClass("fixed_mob")
    }),
        $(".menu-overlay").click(function(e) {
            e.preventDefault(),
                $(".menu-hidden").removeClass("fixed_mob"),
                $(this).removeClass("show")
        }),
        $(".item").click(function(e) {
            e.preventDefault(),
                $(".menu-hidden").removeClass("fixed_mob"),
                $(".menu-overlay").removeClass("show")
        });


    // $('#test').owlCarousel({
    //     items:5,
    //     loop:false,
    //     nav:false,
    //     dots:false,
    //     center:true,
    //     URLhashListener:true,
    //     autoplayHoverPause:true,
    //     startPosition: 'one'
    // });

    $('.owl-carousel').owlCarousel({
        loop: true,
        mouseDrag: true,
        items: 1
    });

    $('#committee').owlCarousel({
        autoHeight: true,
        loop: false,
        nav:true,
        mouseDrag: true,
        items: 1
    });

    // var $menu = $("#menu");
    //
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 1) {
    //         $menu.addClass("fixed");
    //     } else if ($(this).scrollTop() <= 1 && $menu.hasClass("fixed")) {
    //         $menu.removeClass("fixed");
    //     }
    // });

    $( "#tabs" ).tabs({
        collapsible: true
    });

    $('.team__slider__info__block').equalHeights();

    $('#fullpage').fullpage({
        navigation: true,
        sectionSelector: '.vertical-scrolling',
        slidesNavigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['1','2', '3', '4', '5', '6'],
        showActiveTooltip: true,
        controlArrows: false,
        anchors: ['main','project-slide','management-slide','owners-slide', 'team-slide', 'docs-slide'],

        afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
            if (anchorLink == 'docs-slide' && slideIndex == 0) {
                $.fn.fullpage.setAllowScrolling(false, 'up');
            }
        },

        onSlideLeave: function( anchorLink, index, slideIndex, direction) {
            if (anchorLink == 'docs-slide' && slideIndex == 0) {
                $.fn.fullpage.setAllowScrolling(true, 'up');
            }
        },

        afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
            if (anchorLink == 'project') {
                $tips.css('color','black');
            }
        }
    });

    var width = window.innerWidth;
    if (width <= 480) {
        $.fn.fullpage.destroy();

        $("#one").click(function() {
            $('html, body').animate({
                scrollTop: $("#project").offset().top
            }, 1000);
        });

        $("#two").click(function() {
            $('html, body').animate({
                scrollTop: $("#management").offset().top
            }, 1000);
        });

        $("#three").click(function() {
            $('html, body').animate({
                scrollTop: $("#owners").offset().top
            }, 1000);
        });

        $("#four").click(function() {
            $('html, body').animate({
                scrollTop: $("#team").offset().top
            }, 1000);
        });

        $("#five").click(function() {
            $('html, body').animate({
                scrollTop: $("#docs").offset().top
            }, 1000);
        });
    };

    var width = window.innerWidth;
    if (width <= 768) {

        $("#one").click(function() {
            $('html, body').animate({
                scrollTop: $("#project").offset().top
            }, 1000);
        });

        $("#two").click(function() {
            $('html, body').animate({
                scrollTop: $("#management").offset().top
            }, 1000);
        });

        $("#three").click(function() {
            $('html, body').animate({
                scrollTop: $("#owners").offset().top
            }, 1000);
        });

        $("#four").click(function() {
            $('html, body').animate({
                scrollTop: $("#team").offset().top
            }, 1000);
        });

        $("#five").click(function() {
            $('html, body').animate({
                scrollTop: $("#docs").offset().top
            }, 1000);
        });
    };

    $("#tabs_ul li").click(function(){
        $("#tabs_ul li").removeClass('current');
        $(this).addClass('current');
    });



    var width = window.innerWidth;
    if (width <= 480) {
        var number = $(".data-slide-third_info-number")
        var data = $(".data-slide-third_info-data")

        $(number).on('click', function (e) { // click a
            e.preventDefault();
            $(this).addClass("opacityHide");
            $(this).parent().find(data).addClass("opacityShow");
        });

        $(data).on('click', function (e) {
            e.preventDefault();
            $(this).removeClass("opacityShow");
            $(this).parent().find(number).removeClass("opacityHide");
        });
    };


    var number = $(".data-slide-third_info-number")
    var data = $(".data-slide-third_info-data")

    $(number).on('click', function (e) { // click a
        e.preventDefault();
        $(this).css("display", "none");
        $(this).parent().find(data).css("display", "block");
    });

    $(data).on('click', function (e) {
        e.preventDefault();
        $(this).css("display", "none");
        $(this).parent().find(number).css("display", "block");
    });

});

