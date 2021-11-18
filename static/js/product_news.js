//产品动态无法自动生成toc目录列表 特用js生成
$(function () {
  if ($("#TableOfContents li").length == 0) {
    var h2_title = $("section.product_dynamics h2");
    console.log("h2_title: ", h2_title);
    if (h2_title.length > 0) {
      var result = "<ul>";
      h2_title.each(function () {
        var h2_id = $(this).attr("id");
        console.log("h2_id: ", h2_id);
        // var h2_name = $(this).html();
        // console.log("h2_name: ", h2_name);
        result += '<li><a href="#' + h2_id + '">' + h2_id + "</a></li>";
      });
      result += "</ul>";
      $("#TableOfContents").html(result);
    }
  }
});
