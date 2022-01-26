$(function () {
  var max_p_number = 0;
  $(".card-body").each(function () {
    var p_number = $(this).children("p").length;
    if (p_number > max_p_number) {
      max_p_number = p_number;
    }
  });
  $(".card-body").each(function () {
    var p_number = $(this).children("p").length;
    var p_add = "";
    if (p_number < max_p_number) {
      for (var i = 0; i < max_p_number - p_number; i++) {
        p_add +=
          '<p class="card-text" style="visibility:hidden;"><a target="_blank" href="###" class="card-link">hidden</a></p>';
      }
    }
    $(this).append(p_add);
  });
  $("#nav-link-box")
    .children()
    .click(function (item) {
      $(item.target).addClass("active").siblings().removeClass("active");
    });

  initPage();

  $(window).resize(() => {
    initPage();
  });

  function initPage() {
    if (isMobile()) {
      $("#mobile-slider-menu-block-nav").css("display", "flex");
      $("#right-nav-menu").css("display", "block");
    } else {
      $("#right-nav-menu").css("display", "none");
      $("#mobile-slider-menu-block-nav").css("display", "none");
    }
  }

  // 判断是否是移动端
  function isMobile() {
    var userAgentInfo = navigator.userAgent;
    var mobileAgents = [
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPod",
    ];
    var mobile_flag = false;
    //根据userAgent判断是否是手机
    for (var v = 0; v < mobileAgents.length; v++) {
      if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
        mobile_flag = true;
        break;
      }
    }
    var screen_width = window.screen.width;
    var screen_height = window.screen.height;
    //根据屏幕分辨率判断是否是手机
    if (screen_width < 500 && screen_height < 800) {
      mobile_flag = true;
    }
    return mobile_flag;
  }
});
