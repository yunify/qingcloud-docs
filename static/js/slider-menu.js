$(function () {
  let card_block = $(".new-card-block .new-card");
  let slider_title = $("#slider-menu-block a");
  let currentHash = location?.hash;

  findActiveItem();

  // $("mobile-slider-menu-block-nav").on("scroll", () => {
  //   let a = $("mobile-slider-menu-block-nav").offset().top;
  //   console.log("ssdas", a);
  // });

  $(window).scroll(() => {
    let top = $("#mobile-slider-menu-block-nav").offset().top;
    if (top > 377) {
      $("#mobile-slider-menu-block-nav").addClass(
        "moblie-slider-menu-scroll-nav"
      );
    } else {

      $("#mobile-slider-menu-block-nav").removeClass(
        "moblie-slider-menu-scroll-nav"
      );
    }
  });

  $("#slider-menu-block").on("click", "a", function (ev) {
    currentHash = decodeURI($(this).attr("href"));
    findActiveItem();
  });
  $("#right-nav-menu").on("click", "a", function (ev) {
    currentHash = decodeURI($(this).attr("href"));
    findActiveItem();
  });

  function findActiveItem() {
    $(".new-card-block .card-title").each(function (index) {
      $(card_block[index]).removeClass("active-new-card");
      $(slider_title[index]).removeClass("active-slider-title");
      // const currentTitle = decodeURI(currentHash)?.includes('#')?decodeURI(currentHash)?.slice(1,decodeURI(currentHash).length):decodeURI(currentHash)
      if (`#${$(this).attr("id")}` === decodeURI(currentHash)) {
        $(card_block[index]).addClass("active-new-card");
        $(slider_title[index]).addClass("active-slider-title");
      }
    });
  }

  $("#right-nav-menu").on("click", (ev) => {
    $("#right-nav-menu").css("transform", "translateX(100vw)");
    $("#right-nav-menu .content-block").css({
      transform: "translateX(100vw)",
    });
    const currentTitle = decodeURI(currentHash)?.includes('#')?decodeURI(currentHash)?.slice(1,decodeURI(currentHash).length):decodeURI(currentHash)
    $("#mobile-slider-menu-block-nav .current-title")[0].innerHTML =
    currentTitle
    move();
    ev.stopPropagation();
  });

  $(".mobile-slider-menu-block-nav-icon").on("click", () => {
    $("#right-nav-menu").css({
      transform: "translateX(0px)",
      // transition: "all 0.5s ease",
    });
    $("#right-nav-menu .content-block").css({
      transform: "translateX(0px)",
      transition: "all 0.5s ease",
    });
    stop();
  });

  function stop() {
    var mo = function (e) {
      passive: false;
    };
    $("body").css({
      overflow: "hidden",
      height: "100vh",
    });
    document.addEventListener("touchmove", mo, false); //禁止页面滑动
  }

  function move() {
    var mo = function (e) {
      passive: false;
    };
    $("body").css({
      overflow: "",
      height: "auto",
    });
    document.removeEventListener("touchmove", mo, false); //页面滑动
  }
});
