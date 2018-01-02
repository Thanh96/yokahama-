function isIE () {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

$(document).ready(function() {
    $(".fix-block__button").click(function() {
        $(".fix-block__history").toggleClass("active").slideToggle(300);

        var margin_top = 0;
        if($(".fix-block").hasClass("fix-block--active")) {
            if($(".fix-block__history").hasClass("active") ) {
                if($(window).width() < 767) {
                    margin_top = 386;
                } else {
                    margin_top = 348;
                }
            } else {
                if($(window).width() < 767) {
                    margin_top = 86;
                } else {
                    margin_top = 58;
                }
            }
        }
        $(".history-block__content").animate({
            marginTop: margin_top+'px'
        },300)


    });


    var line_position;
    if($(window).width() < 767) {
        var get_percent = (($(window).width() - 20)*35)/100;
        line_position = $(".history-block__line").position().left - get_percent - 3;
    } else {
        line_position = $(".history-block__line").position().left - $(".history-tab__block__float").width() + 7;
    }

    if($(""))

    $(".history-tab-content").each(function() {
        $(this).find(".history-tab__block").each(function(index, element) {
            if(index % 2 == 1) {
                $(element).find(".history-tab__block__float").addClass("history-tab__block__right");
                if(isIE() == 9) {
                    $(element).find(".time-info").css("left",-(line_position - 4)+'px');
                } else {
                    $(element).find(".time-info").css("left",-line_position+'px');
                }
            }
            if (index !== 0) {
                var prev_height = $(element).prev().find(".history-tab__block__float").height();
                //$(element).css("margin-top",-(prev_height * 46)/100)
            }
            if(index % 2 == 0) {
                $(element).find(".time-info").css("right",-line_position+'px');
            }
        });
    });


    var wrap = $("#page");

    wrap.on("scroll", function(e) {

        console.log("123");

    });


    var fix_block = $(".fix-block");
    var fixmeTop = fix_block.offset().top;

    $(window).scroll(function() {
        var currentScroll = $(window).scrollTop();
        var margin_top = 0;
        if($(window).width() < 767) {
            currentScroll = currentScroll + 55;
            if($(".fix-block__history").hasClass("active")) {
                margin_top = 386;
            } else {
                margin_top = 86;
            }

        } else {
            if($(".fix-block__history").hasClass("active")) {
                margin_top = 348;
            } else {
                margin_top = 58;
            }
        }


        if (currentScroll >= fixmeTop) {
            fix_block.addClass("fix-block--active");
            $(".history-block__content").css("margin-top",margin_top);
        } else {
            fix_block.removeClass("fix-block--active");
            $(".history-block__content").css("margin-top",0);

        }

    });

    $(".fix-block__tab--product").click(function() {
        $(".fix-block__tab--company").removeClass("active");
        $(this).addClass("active");
        $(".history--product").fadeIn(300);
        $(".history--company").fadeOut(300);
        if($(window).width() < 767) {
            if($(this).find(".history-tab__block__float").hasClass("no-image")) {
                $(this).find(".time-info").css("top","10px");
            } else {
                $(this).find(".time-info").css("top",$(this).find(".text-bold").height()+5+13 + 'px');
            }
        }

    })

    $(".fix-block__tab--company").click(function() {
        $(".fix-block__tab--product").removeClass("active");
        $(this).addClass("active");
        $(".history--company").fadeIn(300);
        $(".history--product").fadeOut(300);


    })

    $('.fix-block a[href*="#"]:not([href="#"])').click(function() {
        var get_offset;
        var get_height = $(".fix-block__history").height();
        if($(".fix-block").hasClass("fix-block--active")) {
            if($(window).width() < 767) {
                get_offset = 440;
            } else {
                get_offset = 410;
            }
        } else {
            if($(window).width() < 767) {
                get_offset = 140 + get_height + 20;
            } else {
                get_offset = 120 + get_height + 40;
            }
        }



        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - get_offset
                }, 1000);
                return false;
            }
        }
    });

    $(".history-tab__block").each(function() {
        if($(window).width() < 767) {
            if($(this).find(".history-tab__block__float").hasClass("no-image")) {
                $(this).find(".time-info").css("top","10px");
            } else {
                $(this).find(".time-info").css("top",$(this).find(".text-bold").height()+5+13 + 'px');
            }
        }
    });
    //
    //console.log($(".history-block__line").position().left - $(".history-tab__block__float").width() - 3 );



});

$(window).load(function() {

})

$(window).resize(function () {
    var line_position;
    if($(window).width() < 767) {
        var get_percent = (($(window).width() - 20)*35)/100;
        line_position = $(".history-block__line").position().left - get_percent - 3;
    } else {
        line_position = $(".history-block__line").position().left - $(".history-tab__block__float").width() + 7;
    }


    $(".history-tab-content").each(function() {
        $(this).find(".history-tab__block").each(function(index, element) {
            if(index % 2 == 1) {
                if(isIE() == 9) {
                    $(element).find(".time-info").css("left",-(line_position - 4)+'px');
                } else {
                    $(element).find(".time-info").css("left",-line_position+'px');
                }
            }
            if(index % 2 == 0) {
                $(element).find(".time-info").css("right",-line_position+'px');
            }
        });
    });
});