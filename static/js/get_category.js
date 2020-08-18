$(function(){
	$.getJSON("category.json", function (data){
		var content = '';
		var max_category_num = 0;
		$.each(data,function(key,value){
			var keys_arr = Object.keys(value.category); 
			var count = keys_arr.length;
			if(count > max_category_num){
				max_category_num = count;
			}
		})
		//以分类最多的为最大值 补齐数据
		$.each(data,function(key,value){
			var child_category = '';
			$.each(value.category,function(k,v){
				child_category += '<p class="card-text"><a target="_blank" href="/product_index/index.html?id='+key+'_'+k+'" class="card-link">'+v.name+'</a></p>'; 
			});
			var now_category_length = Object.keys(value.category);
			if(now_category_length.length < max_category_num){
				for(var i=0;i<max_category_num-now_category_length.length;i++){
					child_category += '<p class="card-text" style="visibility:hidden;"><a target="_blank" href="###" class="card-link">hidden</a></p>';
				}
			}

			content += '<div class="col-md-3"><div class="card"><div class="card-body"><h5 class="card-title"><img src="/images/icons/'+value.icon+'"/>'+value.name+'</h5>'+child_category+'</div></div></div>';
		});
		$('#content').append(content);
	});
});