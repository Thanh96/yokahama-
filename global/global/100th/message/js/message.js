$(document).ready(function() {
    $("#footerBOX").removeClass("absolute-ac");
    $(".page-body").removeClass("absolute-ac");
    if($(window).width() > 767) {
        if(($(".child-page__content .message-page.message-page__content").height() + 120) < ($(window).height()) - 74 - 53 - 226) {
            $("#footerBOX").addClass("absolute-ac");
            $(".page-body").addClass("absolute-ac");
        } else {
            $("#footerBOX").removeClass("absolute-ac");
            $(".page-body").removeClass("absolute-ac");
        }
    }
});

$(window).resize(function() {
    $("#footerBOX").removeClass("absolute-ac");
    $(".page-body").removeClass("absolute-ac");
    if($(window).width() > 767) {
        if(($(".child-page__content .message-page.message-page__content").height() + 120) < ($(window).height()) - 74 - 53 - 226) {
            $("#footerBOX").addClass("absolute-ac");
            $(".page-body").addClass("absolute-ac");
        } else {
            $("#footerBOX").removeClass("absolute-ac");
            $(".page-body").removeClass("absolute-ac");
        }
    }
});