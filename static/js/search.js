var serach_href = '';

$(document).ready(function(){

    function renderResult(category, pager){
        $("#loading-mask").show();
        var doc_cate = "文档";

        $('.directory li').removeClass('is-active')
        $('.directory li.all-websites').addClass('is-active')
        $('.search-result').empty();
        if(category=="products"){
            doc_cate = "产品";
        }
        else if(category=="solutions"){
            doc_cate = "解决方案";
        }
        else if(category=="logs"){
            doc_cate = "青云志";
        }
        else if(category=="news"){
            doc_cate = "新闻";
        }
        else if(category=="docs"){
            doc_cate = "文档";
        }
        else if(category=="others"){
            doc_cate = "其他";
        }
        else if(category=="cases"){
            doc_cate = "客户案例";
        }
        if (category=='init'){
            $('.search-result').empty();
            var keywords = $('#search-bar').val();
            if (!keywords){
                keywords = $('#search-bar').attr('placeholder')
            }
            $.ajax({
                url: serach_href+'/search.php',
                type: 'POST',
                dataType: 'json',
                data: {q:keywords, count:true},
            }).done(function(data){
                //gio('track', 'search', { 'searchterms': keywords });
                $("#loading-mask").hide();
                if (data.hits.total == 0){
                    $('.search-result').html('<div class="no-result">没有找到您期望的内容，请尝试其他搜索词，请拨打我们的咨询电话 4008576886，或发邮件至 contactus@yunify.com。</div>');
                    $('.directory li a span').html('');
                    $('.search-pagination').empty();
                    return;
                }
                else{
                    $('.directory li.all-websites a span').html('('+data.hits.total+')')
                    var cate_count = data.aggregations.cate_count.buckets;
                    var productCount = 0;
                    var solCount = 0;
                    var logsCount = 0;
                    var newsCount = 0;
                    var docsCount = 0;
                    var othersCount = 0;
                    var caseCount = 0;
                    for (var idx=0; idx< cate_count.length;idx++){
                        //console.log(data.hits.hits[idx]._source.category);
                        if(cate_count[idx].key=='产品'){
                            productCount = cate_count[idx].doc_count;
                        }
                        if(cate_count[idx].key=='解决方案'){
                            solCount = cate_count[idx].doc_count;
                        }
                        if(cate_count[idx].key=='青云志'){
                            logsCount = cate_count[idx].doc_count;
                        }
                        if(cate_count[idx].key=='新闻'){
                            newsCount = cate_count[idx].doc_count;
                        }
                        if(cate_count[idx].key=='文档'){
                            docsCount = cate_count[idx].doc_count;
                        }
                        if(cate_count[idx].key=='其他'){
                            othersCount = cate_count[idx].doc_count;
                        }
                        if(cate_count[idx].key=='客户案例'){
                            caseCount = cate_count[idx].doc_count;
                        }
                    }
                    if (productCount){
                        $('.directory li.products a span').html('('+productCount+')');
                    }
                    else{
                        $('.directory li.products a span').html('')
                    }

                    if(solCount){
                        $('.directory li.solutions a span').html('('+solCount+')');
                    }
                    else{
                        $('.directory li.solutions a span').html('')
                    }
                    
                    if(logsCount){
                        $('.directory li.logs a span').html('('+logsCount+')');
                    }
                    else{
                        $('.directory li.logs a span').html('')
                    }
                    
                    if(newsCount){
                        $('.directory li.news a span').html('('+newsCount+')');
                    }
                    else{
                        $('.directory li.news a span').html('');
                    }
                    
                    if(docsCount){
                        $('.directory li.docs a span').html('('+docsCount+')');
                    }
                    else{
                        $('.directory li.docs a span').html('');
                    }
                    
                    if (othersCount){
                        $('.directory li.others a span').html('('+othersCount+')');
                    }
                    else{
                        $('.directory li.others a span').html('');
                    }
                    
                    if (caseCount){
                        $('.directory li.cases a span').html('('+caseCount+')');
                    }
                    else{
                        $('.directory li.cases a span').html('');
                    }  
                }
                $.ajax({
                    url: serach_href+'/search.php',
                    method: 'POST',
                    dataType: 'json',
                    data: {q:keywords.replace(/\+/g, ' '), pager, cate:doc_cate,size_flag:false},
                }).done(function(data){
                    $('.directory li').removeClass('is-active')
					$('.directory li.docs').addClass('is-active')
                    $("#loading-mask").hide();
					if (data.hits.total.value == 0){
						$('.search-result').html('<div class="no-result">没有找到您期望的内容，请尝试其他搜索词，请拨打我们的咨询电话 4008576886，或发邮件至 contactus@yunify.com。</div>');
						$('.directory li.is-active a span').html('');
						$('.search-pagination').empty();
						return;
					}
                    $('.directory li.is-active a span').html('('+data.hits.total+')')
                    var results = '';
                    $.each(data.hits.hits, function(index, item){
                        var title = item.highlight.title || item._source.title;
                        var content = item.highlight.content || item._source.content;
                        var category = item._source.category;
						var item_from = '';
						var p_style_for_doc = '';
						if(category=='文档'){
							//doc_level 层级目录
							var doc_level = item._source.doc_level;
							doc_level = doc_level.replace(/has-text-primary/g,'');
							
							item_from = '<div class="result-thumbnail is-size-7"><span class="has-text-grey">来自:</span>' + doc_level +'</div>';
						}
                        results += 
                            '<div class="result-item">'+
                                '<h5 class="result-title">'+
                                    '<a href=" '+item._source.url+' ">'+title + '</a>'+
                                '</h5>'+
                                '<p class="result-content">'+ content + '</p>'+item_from+
                            '</div>';
                    });
                    $('.search-result').html(results);
                    $(".search-pagination").html(pagination(data.hits.total, pager));
                })
            }).fail(function(request, error){
				$("#loading-mask").hide();
                $('.search-result').html('<div class="no-result">没有找到您期望的内容，请尝试其他搜索词，请拨打我们的咨询电话 4008576886，或发邮件至 contactus@yunify.com。</div>');
                $('.search-pagination').empty();
            });
        }
        else if (category=='all-websites'){
            $('.directory li').removeClass('is-active')
            $('.directory li.all-websites').addClass('is-active')
            $('.search-result').empty();
            var keywords = $('#search-bar').val();
            if (!keywords){
                keywords = $('#search-bar').attr('placeholder')
            }
            $.ajax({
                url: serach_href+'/search.php',
                method: 'POST',
                dataType: 'json',
                data: {q:keywords, pager, cate:'all',size_flag:false},
            }).done(function(data){
                $("#loading-mask").hide();
                if (data.hits.total.value == 0){
                    $('.search-result').html('<div class="no-result">没有找到您期望的内容，请尝试其他搜索词，请拨打我们的咨询电话 4008576886，或发邮件至 contactus@yunify.com。</div>');
                    $('.directory li.is-active a span').html('');
                    $('.search-pagination').empty();
                    return;
                }
                $('.directory li.is-active a span').html('('+data.hits.total+')')
                var results = '';
                $.each(data.hits.hits, function(index, item){
                    var title = item.highlight.title || item._source.title;
                    var content = item.highlight.content || item._source.content;
                    var category = item._source.category;
					var item_from = '';
					var p_style_for_doc = '';
					if(category=='文档'){
						//doc_level 层级目录
						var doc_level = item._source.doc_level;
						doc_level = doc_level.replace(/has-text-primary/g,'');
						item_from = '<div class="result-thumbnail is-size-7"><span class="has-text-grey">来自:</span>' + doc_level +'</div>';
					}
                    results += 
                        '<div class="result-item">'+
                            '<h5 class="result-title">'+
                                '<a href=" ' + item._source.url+' ">'+title + '</a>'+
                            '</h5>'+
                            '<p class="result-content">'+ content + '</p>'+item_from+
                        '</div>';
                });
                $('.search-result').html(results);
                $(".search-pagination").html(pagination(data.hits.total, pager));
            }).fail(function(request, error){
				$("#loading-mask").hide();
                $('.search-result').html('<div class="no-result">没有找到您期望的内容，请尝试其他搜索词，请拨打我们的咨询电话 4008576886，或发邮件至 contactus@yunify.com。</div>');
                $('.search-pagination').empty();
            });
        }
        else{
            $('.directory li').removeClass('is-active')
            $('.directory li.'+category).addClass('is-active')
            $('.search-result').empty();
            var keywords = $('#search-bar').val();
            if (!keywords){
                keywords = $('#search-bar').attr('placeholder')
            }
            $.ajax({
                url: serach_href+'/search.php',
                method: 'POST',
                dataType: 'json',
                data: {q:keywords, pager, cate:doc_cate,size_flag:false},
            }).done(function(data){
                $("#loading-mask").hide();
                if (data.hits.total == 0){
                    $('.search-result').html('<div class="no-result">没有找到您期望的内容，请尝试其他搜索词，请拨打我们的咨询电话 4008576886，或发邮件至 contactus@yunify.com。</div>');
                    $('.directory li.is-active a span').html('');
                    $('.search-pagination').empty();
                    return;
                }
                var results = '';
                //console.log(data);
                $.each(data.hits.hits, function(index, item){
                    var title = item.highlight.title || item._source.title;
                    var content = item.highlight.content || item._source.content;
                    var item_from = '';
					var p_style_for_doc = '';
					if(category=='docs'){
						//doc_level 层级目录
						var doc_level = item._source.doc_level;
						doc_level = doc_level.replace(/has-text-primary/g,'');
						item_from = '<div class="result-thumbnail is-size-7"><span class="has-text-grey">来自:</span>' + doc_level +'</div>';
					}

                    results += 
                        '<div class="result-item">'+
                            '<h5 class="result-title">'+
                                '<a href=" ' + item._source.url+' ">'+title + '</a>'+
                            '</h5>'+
                            '<p class="result-content">'+ content + '</p>'+item_from+
                        '</div>';
                    }); 
                $('.search-result').html(results);
                $(".search-pagination").html(pagination(data.hits.total, pager));
            }).fail(function(request, error){
				$("#loading-mask").hide();
                $('.search-result').html('<div class="no-result">没有找到您期望的内容，请尝试其他搜索词，请拨打我们的咨询电话 4008576886，或发邮件至 contactus@yunify.com。</div>');      
            });
        }  
    };

    $('.search-btn').on("click", function(){
        renderResult('init', 1);
    });
    $('li.all-websites a').on("click", function(){
        renderResult('all-websites', 1);
    });
    $('li.products a').on("click", function(){
        renderResult('products',1);
    });
    $('li.solutions a').on("click", function(){
        renderResult('solutions',1);
    });
    $('li.logs a').on("click", function(){
        renderResult('logs',1);
    });
    $('li.news a').on("click", function(){
        renderResult('news',1);
    });
    $('li.docs a').on("click", function(){
        renderResult('docs',1);
    });
    $('li.others a').on("click", function(){
        renderResult('others',1);
    });
    $('li.cases a').on("click", function(){
        renderResult('cases',1);
    });

    function pagination(total, currentPager) {
        var totalPager = parseInt((total+ 9) / 10);
        var pagerPrev = '', pagerNext = '', pagerItems = '';
        var maxPageNum = parseInt(currentPager)+4;
        var minPageNum = parseInt(totalPager)-4;
        var numDisplayedPages = 9;
        if(totalPager > 1) {
            if(currentPager != 1) {
                pagerPrev = '<div class="pager-prev pager-item" href="javascript:;" data-num="'+ (currentPager - 1) +'"> <- </div>';
            }

            else pagerPrev = '<div class="pager-prev prev-disabled"> <- </div>';
            //else pagerPrev = '<div class="pagination-starting-bar"'+'</div>';
            pagerItems += '<div class="search-pagers">';
            if (totalPager<=numDisplayedPages){
                for(var i=1; i <= totalPager; i++) {
                    let pager_active = '';
                    if(i == currentPager) pager_active = 'is-active';
                    pagerItems +=
                    '<a class="pager-item '+ pager_active + '" data-num="' + i + '">' + i + '</a >';
                }
            }
            else if(totalPager >numDisplayedPages && currentPager<=totalPager){
                if(currentPager<=3){
                    for(var j = 1; j<=numDisplayedPages;j++){
                        let pager_active = '';
                        if(j == currentPager) pager_active = 'is-active';
                        pagerItems +=
                        '<a class="pager-item '+ pager_active + '" data-num="' + j + '">' + j + '</a >';
                    }
                }
                else if(currentPager<=minPageNum){  
                    if (maxPageNum>totalPager) maxPageNum=totalPager;
                    for (var j=parseInt(currentPager)-4; j<=maxPageNum; j++){
                        let pager_active = '';
                        if(j == currentPager) pager_active = 'is-active';
                        pagerItems +=
                        '<a class="pager-item '+ pager_active + '" data-num="' + j + '">' + j + '</a >';
                    }
                }
                else{
                    for(var j=parseInt(totalPager)-8; j<=totalPager; j++){
                        let pager_active = '';
                        if(j == currentPager) pager_active = 'is-active';
                        pagerItems +=
                        '<a class="pager-item '+ pager_active + '" data-num="' + j + '">' + j + '</a >';
                    }
                }
                
            }       
            pagerItems += '</div>';
            if(currentPager != totalPager) {
                var nextPager = parseInt(currentPager)+1;
                pagerNext = '<div class="pager-next pager-item" href="javascript:;" data-num="'+ nextPager +'"> -> </div>';
            }
            else pagerNext = '<div class="pager-next next-disabled" > -> </div>';
        }
        return pagerPrev + pagerItems + pagerNext;
    };
      
    $(document).on('click', ".pager-item", function() {
        var pagerNumber = $(this).attr("data-num");
        var currClass = $('.directory li.is-active').attr('class').split(/\s+/)[0];
        $(this).addClass('is-active');
        $("#loading-mask").show();
        renderResult(currClass, pagerNumber, decodeURI(r[2]));
        $('html,body').animate({scrollTop: '50px'}, 100);
    });

    // $("#search-bar").bind("input propertychange",function(){
    //     var autocompleteTags = new Array();
    //     var keywords = $('.search-bar').val();
    //     $.ajax({
    //         url: 'http://'+window.location.hostname+'/autocomplete_dict/',
    //         method: 'POST',
    //         dataType: 'json',
    //         data: {d:keywords},
    //     }).done(function(data){
    //         for (var i=0; i<data.suggest.autocomplete_suggestion.length;i++){
    //             var suggestion = data.suggest.autocomplete_suggestion[i];
    //             for (var j=0; j<suggestion.options.length;j++){
    //                 var keyword = suggestion.options[j].text;
    //                 autocompleteTags.push(keyword);
    //             }
    //         }
    //         $('#search-bar').autocomplete({
    //             source: autocompleteTags
    //         });
    //         return;
    //     })       
    // });

    $("#search-bar").focus(function(){
        $("#search-bar").on('keypress', function(event){
            if (event.keyCode ==13){
                $("#loading-mask").show();
                $('#search-btn').click();
            }
        })   
    })

    var reg = new RegExp("(^|&)q=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    var PageUrl = decodeURI(window.location.search.substr(1));
    var sURLVariables = PageUrl.split('&');
    $('#search-bar').val(decodeURI(r[2]).replace(/\+/g, ' '));
    if(r != null ) {
        renderResult('init', 1);
    } else {
        $('.no-results').show();
    }

	/*
	const ANALYTICS_ACCOUNT = {
		google: 'UA-136833840-1',
		baidu: '17a3a88cbe9f9c8808943e8ed1c7155a',
		growingio: 'ab7e0583a75979c5',
		zhugeio: '845ce95a87c14ef4ae6a06a549bdd8c2'
	};
	var localUserData = JSON.parse(localStorage.getItem('cksk_status') || '{}');

	// Growing IO Analytics
	!function (e, t, n, g, i) { e[i] = e[i] || function () { (e[i].q = e[i].q || []).push(arguments) }, n = t.createElement("script"), tag = t.getElementsByTagName("script")[0], n.async = 1, n.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + g, tag.parentNode.insertBefore(n, tag) }(window, document, "script", "assets.growingio.com/2.1/gio.js", "gio");
	gio('init', ANALYTICS_ACCOUNT['growingio'], {});
	setTimeout(function () {
		if (localUserData !== null) {
			gio('setUserId', localUserData.user_id);
			var appLevelVariables = {
				'verify_type': localUserData.verify_type,
				'user_type': localUserData.user_type,
				'user_name': localUserData.user_name,
				'enableHT': true
			};
			gio('app.set', appLevelVariables);
		}
	}, 1000);
	*/
});

