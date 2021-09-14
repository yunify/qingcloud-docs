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

// 导出所有的pdf
function download_all_pdf(name='') {
	var url = 'pdf/'+window.location.pathname;

	// 查找标题
	if (name == '') {
		name = $('.td-main h1.title').html();
	}

	window.location.href="/download.php?&type=all&url="+url + '&pdf_name='+name;
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
				//只有青云的链接才加
				if(url.indexOf('http') == '-1' || url.indexOf('docsv3.qingcloud') != '-1'){
					$(this).attr('href',url+'/');
				}
			}
		}
		var reg = new RegExp(/.+#/);
		if(url != null && url != '' && url != 'undefined' && url.indexOf('#') != '-1' && url.indexOf('/#') == '-1' && reg.test(url)){
			//只有青云的链接才加
			if(url.indexOf('http') == '-1' || url.indexOf('docsv3.qingcloud') != '-1'){
				$(this).attr('href',url.replace('#','/#'));
			}
		}

		//判断是否是外链 外链需在父页面打开
		var content_console = $('#content_console').val();
		if(content_console == 1){
			if(url != null && url != 'undefined' && url.indexOf('http') != '-1'){
				$(this).attr('target','top');
			}
		}
	});

	var current_url = window.location.href;
	if(current_url.indexOf('docsv3.qingcloud') != '-1'){
		$('.pdf-all-download-btn').hide();
	}


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

  // Google Analytics
  (function(w,d,s,l,i){
  w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-NKLWQZ2');

  // youdao
  var youdao = document.createElement("script");
  youdao.src = "//shared.ydstatic.com/js/rlog_zhixuan/lp.js"
  var y = document.getElementsByTagName("script")[0];
  y.parentNode.insertBefore(youdao, y)

  const ANALYTICS_ACCOUNT = {
    google: 'UA-136833840-1',
    baidu: '17a3a88cbe9f9c8808943e8ed1c7155a',
    growingio: 'ab7e0583a75979c5',
    zhugeio: '845ce95a87c14ef4ae6a06a549bdd8c2'
  };

  // Baidu Analytics
  var _hmt = _hmt || [];
  setTimeout(function () {
    var hm = document.createElement('script');
    hm.src = '//hm.baidu.com/hm.js?' + ANALYTICS_ACCOUNT['baidu'];
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
  }, 1000);

  // youdao analytics
  var _rlog_youdao = _rlog_youdao || [];
  _rlog_youdao.push(["_setConvertId", "3551203303"]);

  !function (e, t, n, g, i) { e[i] = e[i] || function () { (e[i].q = e[i].q || []).push(arguments) }, n = t.createElement("script"), tag = t.getElementsByTagName("script")[0], n.async = 1, n.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + g, tag.parentNode.insertBefore(n, tag) }(window, document, "script", "assets.growingio.com/2.1/gio.js", "gio");
  gio('init', ANALYTICS_ACCOUNT['growingio'], {});
  gio('send');
  gio('evar.set', 'pageView_evar', location.href);
  gio('evar.set', 'pageTitle_evar', document.title);

  var params = getQueryData();
  if (params['bd_vid']) {
    setCookie('bd_vid', location.href);
  }
})

function getQueryData() {
  var url = location.search
  var theRequest = new Object()
  if (url.indexOf("?") != -1) {
    var str = url.substr(1)
    params = str.split("&")
    for(var i = 0; i < params.length; i ++) {
      theRequest[params[i].split("=")[0]]=decodeURI(params[i].split("=")[1])
    }
  }
  return theRequest;
}

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
