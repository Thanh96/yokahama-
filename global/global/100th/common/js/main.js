var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);

if(isIE){
    $("#page").addClass("ie");
}

$(document).ready(function() {

    $("#gNavi_sp").click(function() {
        $(this).toggleClass("open");
        $(".page-body__content__sidebar").slideToggle(500);
    });
    // menu phone

    if($("#page").hasClass("ie9")) {

    } else {
        if($(window).width() > 1024) {
            var wow = new WOW(
                {
                    mobile: false      // trigger animations on mobile devices (default is true)
                }
            );
            wow.init();
        }
    }
    //ie

    function setSidebar() {
      var fixmeTop = $('.page-body__content__sidebar').offset().top;

      if($(window).width() > 767) {
        $(window).scroll(function() {

          var currentScroll = $(window).scrollTop();

          if (currentScroll >= fixmeTop) {
            $('.page-body__content__sidebar').addClass("fixed");
            $(".line-grid").addClass("fixed");
          } else {
            $('.page-body__content__sidebar').removeClass("fixed");
            $(".line-grid").removeClass("fixed");
          }

        });
      }
    }
    //sidebar

    function setContent() {
      if($(window).width() > 767 && $(window).width() < 1024) {
        $(".page-body__content").height($(window).height() - 74 - 53);
      } else {
        $(".page-body__content").height("auto");
      }
    }
    // location content

    setContent();
    setSidebar();

    $(window).resize(function () {
       setSidebar();
       setContent();
      if($(window).width() < 800) {
        $(".wow").css("visibility", "visible");
      }
    });
    // window resize
});
