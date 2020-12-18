function GetUrlRelativePath(){
	var url = document.location.toString();
	var arrUrl = url.split("//");

	var start = arrUrl[1].indexOf("/");
	var relUrl = arrUrl[1].substring(start);//stop省略，截取从start开始到结尾的所有字符

	if(relUrl.indexOf("?") != -1){
	  relUrl = relUrl.split("?")[0];
	}
	return relUrl;
}
function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); 
	return null; 
}

function download_pdf(url='',pdf_name=''){
	var pathname = window.location.pathname;
	if(url==''){
		url = pathname;
	}
	if(url.indexOf(pathname) == '-1'){
		url = pathname+url;
	}
	window.location.href='/download.php?url='+url+'&pdf_name='+pdf_name;
}

$(function(){
	//查看链接结尾是否/结尾
	$('a').each(function(){
		var url = $(this).attr('href');
		if(url != null && url != '' && url != 'undefined' && url.indexOf('http') == '-1' && url.indexOf('#') == '-1' && url.indexOf('.zip') == '-1' && url.indexOf('.tar') == '-1' && url.indexOf('.rar') == '-1' && url.indexOf('.gz') == '-1'){
			var start = url.length-1;
			var last = url.substr(start,1);
			if(last != '/'){
				$(this).attr('href',url+'/');
			}
		}
		//判断是否是外链 console时 外链需在父页面打开
		var content_console = $('#content_console').val();
		if(content_console == 1){
			if(url != null && url != 'undefined' && url.indexOf('http') != '-1'){
				$(this).attr('target','top');
			}
		}
	});
})
