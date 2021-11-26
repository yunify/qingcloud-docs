//产品动态无法自动生成toc目录列表 特用js生成
$(function () {
  const TopPageTitle = $(".td-page-top h1");
  //产品动态时间轴化
  if (TopPageTitle[0]?.innerHTML?.includes("产品动态")) {
    if ($("#TableOfContents li").length == 0) {
      var time_line = $("section.product_dynamics .timeline-outer");
      if (time_line.length > 0) {
        var result = "<ul>";
        time_line.each(function (index) {
          var time_p = $(this).find("p");
          $(this).attr("id", `timeline-outer${index}`);
          const time = timeStamp2String(time_p[0]?.innerHTML);

          result +=
            '<li><a  href="#' +
            `timeline-outer${index}` +
            '">' +
            time +
            "</a></li>";
        });
        result += "</ul>";
        $("#TableOfContents").html(result);
      }
    }
  } else {
    // 非产品动态目录化
    if ($("#TableOfContents li").length == 0) {
      const h2_title1 = $("section.product_dynamics");
      var h2_title = $("section.product_dynamics h2");
      if (h2_title.length > 0) {
        var result = "<ul>";
        h2_title.each(function () {
          var h2_id = $(this).attr("id");

          result += '<li><a href="#' + h2_id + '">' + h2_id + "</a></li>";
        });
        result += "</ul>";
        $("#TableOfContents").html(result);
      }
    }
  }

  function timeStamp2String(time) {
    const datetime = new Date(time);
    const year = datetime.getFullYear();
    const month =
      datetime.getMonth() + 1 < 10
        ? "0" + (datetime.getMonth() + 1)
        : datetime.getMonth() + 1;
    const date =
      datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    return `<span style="display:inline-block; text-align: center;width: 32px">${year}</span>   年   <span style="display:inline-block; text-align: center;width: 14px">${month}</span>  月  <span style="display:inline-block; text-align: center; width: 14px">${date}</span>  日`;
  }
});
