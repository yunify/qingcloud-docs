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
		if(url != null && url != '' && url != 'undefined' && url.indexOf(':') == '-1' && url.indexOf('#') == '-1'){
			if(url.indexOf('.') != '-1' && url.indexOf('../') == '-1'){
				return false;
			}

			var start = url.length-1;
			var last = url.substr(start,1);
			if(last != '/'){
				$(this).attr('href',url+'/');
			}
		}
		var reg = new RegExp(/.+#/);
		if(url != null && url != '' && url != 'undefined' && url.indexOf('#') != '-1' && url.indexOf('/#') == '-1' && reg.test(url)){
			$(this).attr('href',url.replace('#','/#'));
		}

		//判断是否是外链 外链需在父页面打开
		var content_console = $('#content_console').val();
		if(content_console == 1){
			if(url != null && url != 'undefined' && url.indexOf('http') != '-1'){
				$(this).attr('target','top');
			}
		}
	});

	$('.product-learn-icon').click(function(){
		if($(this).attr('src')=='/images/icons/caret-down.svg'){
			$(this).attr('src','/images/icons/caret-up.svg');
		}else{
			$(this).attr('src','/images/icons/caret-down.svg');
		}
		$(this).parent().next('ul').toggle("normal");
	})

	var max_width = window.screen.width;
	$('.search-mobile-icon').click(function(){
		if(max_width<1023){
			$('#search-mobile-logo').hide();
			$(this).hide();
			$(this).prev('form').show();
		}
	})

	document.onmousedown = function(e){
	　　var ev = document.all ? window.event : e;
	　　var _con = $(".search-mobile-icon").prev('form');
	　　if(!_con.is(e.target) && _con.has(e.target).length === 0){
	　　　　if(!_con.is(":hidden") && max_width<1023){
				$('#search-mobile-logo').show();
				$('.search-mobile-icon').show();
				_con.hide();
	　　　　}
	　　}
	}
	if(max_width>1024){
		$(window).scroll(funScroll);
	}
})


//滚动事件方法
function funScroll() {
	//获取当前滚动条的高度
	var top = $(document).scrollTop();
	var titles = $('main h2');
	var titles_h3 = $('main h3');
	//遍历所有的div
	titles.each(function(index) {
		var thisTop = $(this).offset().top;
		if (top >= thisTop-80) {
			var anchor = $(this).children('a').attr('href');
			$('#TableOfContents ul a[class="active"]').removeClass('active');
			$('#TableOfContents ul a[href="'+anchor+'"]').addClass('active');
		}
	});
	//遍历所有的div
	titles_h3.each(function(index) {
		var thisTop = $(this).offset().top;
		if (top >= thisTop-80) {
			var anchor = $(this).children('a').attr('href');
			if($('#TableOfContents ul ul a[href="'+anchor+'"]').parent().parent().prev().hasClass('active')){
				$('#TableOfContents ul ul a[class="active"]').removeClass('active');
				$('#TableOfContents ul ul a[href="'+anchor+'"]').addClass('active');
			}
			
		}
	});
}