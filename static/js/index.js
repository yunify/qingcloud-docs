$(function () {
  var max_p_number = 0;
  $('.card-body').each(function () {
    var p_number = $(this).children('p').length;
    if (p_number > max_p_number) {
      max_p_number = p_number;
    }
  });
  $('.card-body').each(function () {
    var p_number = $(this).children('p').length;
    var p_add = '';
    if (p_number < max_p_number) {
      for (var i = 0; i < max_p_number - p_number; i++) {
        p_add += '<p class="card-text" style="visibility:hidden;"><a target="_blank" href="###" class="card-link">hidden</a></p>';
      }
    }
    $(this).append(p_add);
  });
  $('#nav-link-box').children().click(function (item) {
    $(item.target).addClass('active').siblings().removeClass('active')
  })
});