$(document).ready(function () {

  var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);

  if (isIE) {
    $("#page").addClass("ie");
  }

  function setLogo() {
    var page_body = $(".page-body");
    var content_home_wrap = $(".content__home .content__home__wrap");
    var line_table = $(".line-table");
    var get_page_height = page_body.height();
    var get_page_width = page_body.width();
    var content__home__wrap_height = content_home_wrap.height();
    var content__home__wrap_width = content_home_wrap.width();

    if ($(window).width() < 767) {
      content_home_wrap.height(content_home_wrap.width());
      line_table.height(page_body.height() + 67);
      if ($(".page-body__wrap").height() > ($(window).height() - 47 - 148 - 47 - 30)) {
        $(".page-body").addClass("relative-ac");
        $("#footerBOX").addClass("relative-ac");
        $(".content__home").css("display","block");
      } else {
        content__home__wrap_height = $(".page-body__content").height();
        $(".page-body__content").css("margin-top", ($(".page-body").height() - content__home__wrap_height) / 2);
        $(".page-body").removeClass("relative-ac");
        $("#footerBOX").removeClass("relative-ac");
        $(".content__home").css("display","block");
      }
    } else {
      content_home_wrap.height(520);
      get_page_width = get_page_width - 240;
      content_home_wrap.css("top", (get_page_height - content__home__wrap_height) / 2);
      content_home_wrap.css("left", (get_page_width - content__home__wrap_width) / 2);
      $(".content__home").css("display","block");
  }

    $('.slider-enter').bxSlider({
      mode: 'fade',
      speed: 2000,
      pause: 4000,
      auto: true,
      controls: false,
      pager: false,
      touchEnabled: false
    });
  }
  // location of logo

  function setIe() {
    if ($("#page").hasClass("ie")) {
      $("#footerBOX").css("margin-top", get_page_height);
    }
    if ($("#page").hasClass("ie9")) {
      $(".enter-img .inner-01").backstretch("img/top-bg.jpg");
      $(".enter-img .inner-02").backstretch("img/top-bg-02.jpg");
      $(".enter-img .inner-03").backstretch("img/top-bg-03.jpg");
    } 
    else {
      var wow = new WOW(
          {
            mobile: false      // trigger animations on mobile devices (default is true)
          }
      );
      wow.init();
    }
  }
  // if ie9

  setLogo();
  setIe();

  if ($(window).width() > 767 && $(window).width() < 1160) {
    $(".content__home").height($(window).height());
  }

  $(window).resize(function () {
    setLogo();
    setIe();
  });
  //if resize
});



