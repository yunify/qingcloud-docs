$(function(){
	var url_path = GetUrlRelativePath();
	//首页
	if(url_path=='/' || url_path==''){
		$('#index_url_path').parent().css('display','none');
		$('.hero-body').css('margin-top','0');
	}else if(url_path.search("/product_index/") != -1){
		//单独产品INDEX页
		var index_id = getQueryString('id');
		var index_arr = index_id.split('_');
		$.getJSON("/category.json", function (data){
			var data_child = data[index_arr[0]]['category'][index_arr[1]];
			var index_content = '<span class="has-text-white container_span_space"> > </span> <span class="has-text-grey">'+data_child['name']+'</span>';
			$('#index_url_path').append(index_content);
		})
	}else if(url_path.search("/search/") != -1){
		//搜索页
		var index_content = '<span class="has-text-white container_span_space"> > </span> <span class="has-text-grey">搜索结果</span>';
		$('#index_url_path').append(index_content);
	}else{
		//剩下的就是文档页
		var url_path_split = url_path.split('/');
		var stop_flag = false;
		$.getJSON("/category.json", function (data){
			$.each(data,function(i,j){
				if(stop_flag){
					return false;
				}
				$.each(j.category,function(m,n){
					if(n.main_path==url_path_split[1]){
						var path_parent_id = i+'_'+m;
						var path_parent_name = n.name;
						//面包屑导航
						insert_content_path(path_parent_id,path_parent_name);
						//select
						get_select_content(i,m,url_path);
						stop_flag = true;
						return false;
					}
				})
			})
		})
	}
	$('.select-field').find('select').change(function(){
		window.location.href=$(this).val();
	})
	
	//autocomplete
	$('#search-bar').autocomplete({
		serviceUrl: '/search.php?cate=all&auto=true&size_flag=false',
		paramName:'q',
		autoSelectFirst:true,
		onSelect: function (suggestion) {
			$('form').submit();	
		}
	});
})

function insert_content_path(path_parent_id,path_parent_name){
	var title = $('.td-page-top').children('h1').html();
	var index_content = '<span class="has-text-white container_span_space"> > </span> <a class="has-text-primary" href="/product_index/?id='+path_parent_id+'" target="blank">'+path_parent_name+'</a><span class="has-text-white container_span_space"> > </span> <span class="has-text-grey">'+title+'</span>';
	$('#index_url_path').append(index_content);
	$('#doc_vice_title').html(path_parent_name+'文档');
}

function get_select_content(i,m,url_path){
	$.getJSON("/category.json", function (data){
		var child_data = data[i]['category'][m];
		var select_content = '';
		var selected = '';
		//用户文档
		for(var k in child_data['user_doc']){
			if(child_data['user_doc'][k]['doc_url'] == url_path){
				selected = 'selected="selected"';
			}
			select_content += '<option value="'+child_data['user_doc'][k]['doc_url']+'" '+selected+'>用户文档:'+child_data['user_doc'][k]['example_title']+'</option>';
		}
		$('.select-field').find('select').html('');
		$('.select-field').find('select').append(select_content);
		//开发者文档
		for(var k in child_data['development_doc']){
			if(child_data['development_doc'][k]['doc_url'] == url_path){
				selected = 'selected="selected"';
			}
			select_content += '<option value="'+child_data['development_doc'][k]['doc_url']+'" '+selected+'>开发者文档:'+child_data['development_doc'][k]['example_title']+'</option>';
		}
		$('.select-field').find('select').append(select_content);
	})
}