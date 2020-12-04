	$(function(){
		$('.doc_fix_click').click(function(){
			if($('#doc_fix_flag').val() != '0'){
				return false;
			}
			var data_flag = $(this).attr('data-flag');
			var now_select = $(this).children('img').attr('src');
			if(data_flag=='1'){
				$(this).css('background-image','url(/images/icons/like-select.svg)');
				doc_fix_count('fixed','add');
			}else if(data_flag=='0'){
				$(this).css('background-image','url(/images/icons/Point-out-select.svg)');
				doc_fix_count('unfixed','add');
			}
			$('#doc_fix_flag').val('1');
		})

		//获取点赞踩数
		get_fix_count();
	})
	//写入点赞数 踩数
	function doc_fix_count(type,add_or_decrease){
		var url_path = GetUrlRelativePath();
		$.ajax({
			url: '/doc.php',
			method: 'POST',
			dataType: 'json',
			data: {type:type,add_or_decrease:add_or_decrease,url_path:url_path},
			success:function(data){
				$('.doc_fix_click[data-flag="1"]').children('span').html(data.fixed);
				$('.doc_fix_click[data-flag="0"]').children('span').html(data.unfixed);
			}
		});
	}

	function get_fix_count(){
		var url_path = GetUrlRelativePath();
		$.getJSON("/doc_fix_count.json", function (data){
			if(!data || !data.hasOwnProperty(url_path)){
				return false
			}
			if(data[url_path].hasOwnProperty('fixed')){
				$('.doc_fix_click[data-flag="1"]').children('span').html(data[url_path]['fixed']);
			}
			if(data[url_path].hasOwnProperty('unfixed')){
				$('.doc_fix_click[data-flag="0"]').children('span').html(data[url_path]['unfixed']);
			}
		})
	}