//产品动态无法自动生成toc目录列表 特用js生成
$(function(){
	if($('#TableOfContents li').length == 0){
		var h2_title = $('section.product_dynamics h2');
		if(h2_title.length >0){
			var result = '<ul>';
			h2_title.each(function(){
				var h2_id = $(this).attr('id');
				var h2_name = $(this).html();
				result += '<li><a href="#'+h2_id+'">'+h2_name+'</a></li>';
			});
			result += '</ul>';
			$('#TableOfContents').html(result);
		}
	}
})