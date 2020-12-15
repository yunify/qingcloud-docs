$(function(){
	//查看链接结尾是否/结尾
	$('a').each(function(){
		var url = $(this).attr('href');
		if(url != null && url != 'undefined'){
			var start = url.length-1;
			var last = url.substr(start,1);
			if(last != '/'){
				$(this).attr('href',url+'/');
			}
		}
	});
})
