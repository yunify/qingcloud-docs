$(function(){
	$('.select-field').find('select').change(function(){
		window.location.href=$(this).val();
	})
	
	//autocomplete
	$('#search-bar').autocomplete({
		serviceUrl: '/search.php?cate=all&auto=true&size_flag=false',
		paramName:'q',
		minChars: 2,
		onSelect: function (suggestion) {
			$('form').submit();
		}
	});
})


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