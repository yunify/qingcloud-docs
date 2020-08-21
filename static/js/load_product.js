$(function(){
	var index_id = getQueryString('id');
	var index_arr = index_id.split('_');
	$.getJSON("/category.json", function (data){
		//用户文档插入数据
		var user_content = '';
		var data_child = data[index_arr[0]]['category'][index_arr[1]];
		$.each(data_child['user_doc'],function(k,v){
			user_content += '<div class="col-sm-4"><div class="card"><div class="card-body"><h5 class="card-title">QingStor '+v.example_title+'</h5><p class="card-text">'+v.example_content+'</p><a target="_blank" href="'+v.doc_url+'" class="card-link">了解更多 →</a></div><a href="javascript:;" class="pdf-download-btn" onclick="download_pdf(\''+v.doc_url+'\');"><i class="fa fa-download"></i>PDF</a></div></div>';
		});
		$('#main_name').html(data_child['name']);
		$('#main_content').html(data_child['content']);
		$('#user_content').append(user_content);
		$('#user_doc_title').html('QingStor '+data_child['name']+'用户文档');
		//开发者文档插入数据
		if(data_child['development_doc']){
			var development_content = '';
			$.each(data_child['development_doc'],function(k,v){
				development_content += '<div class="col-sm-4"><div class="card"><div class="card-body"><h5 class="card-title">QingStor '+v.example_title+'</h5><p class="card-text">'+v.example_content+'</p><a target="_blank" href="'+v.doc_url+'" class="card-link">了解更多 →</a></div><a href="javascript:;" class="pdf-download-btn" onclick="download_pdf(\''+v.doc_url+'\');"><i class="fa fa-download"></i>PDF</a></div></div>';
			});
			$('#development_content').append(development_content);
			$('#development_doc_title').html('QingStor '+data_child['name']+'开发者文档');
		}else{
			$('#development_section').remove();
		}
		//学习路径
		if(data_child['learn_path']){
			var learn_content = '';
			$.each(data_child['learn_path'],function(k,v){
				var learn_category_content = '';
				$.each(v.category,function(j,i){
					learn_category_content += '<li><a href='+i.doc_url+'>'+i.doc_title+'</a></li>';
				});

				learn_content += '<li class="row"><div class="col-sm-4 timeline-outer"><h2>'+v.title+'</h2><p>'+v.content+'</p></div><div class="col-sm-8 timeline-content"><div class="timeline-list"><h3 class="">'+v.category_title+'</h3><ul class="">'+learn_category_content+'</ul></div></div></li>';

			});
			$('#learn_content').append(learn_content);
		}else{
			$('#study-center').remove();
		}
	});


	//视屏弹出
}); 

function dialogInit(){
  var $html = $('<div><ul><li><span>这是弹框里面的内容</span></li></ul></div>')
  var dialog = new BootstrapDialog({　　　　 
	    size: BootstrapDialog.SIZE_LARGE,//弹框大小
        title: '弹框标题',　　　　 
		cssClass:'dialogBig',//给弹框添加class名
        message: $html,//弹框中间的内容
        buttons: [{
            label: '取消',
            action: function(newCatalogue){
                newCatalogue.close();
            }
        },{
            label: '创建',
            cssClass: 'btn btn-primary',//给按钮加样式，btn、btn-primary为定义好的class
            action: function(newCatalogue){
                addDialog(newCatalogue);//点击创建触发函数
            }
        }],
        onshow: function(){
            shown()//弹框显示前触发函数
        },
        onshown: function(){
            shown()//弹框显示后触发函数　　　　　　　 alert($html.find('span').text());　
        }
	})
	dialog.open();
}