<?php
error_reporting(0);
class doc_fix_count{
	function index(){
		$type				= $_POST['type'];
		$add_or_decrease	= $_POST['add_or_decrease'];
		$url_path			= $_POST['url_path'];
		//获取json文件内容
		$data = file_get_contents('../doc_fix_count.json');
		$data = json_decode($data,TRUE);
		if(!empty($type) && !empty($add_or_decrease)){
			if(!empty($data) && !empty($data[$url_path])){
				if($add_or_decrease=='add'){
					$data[$url_path][$type]++;
				}
			}else{
				$data[$url_path][$type] = 1;
			}
			//写入文件
			$file = fopen("../doc_fix_count.json", "w");
			fwrite($file, json_encode($data));
			fclose($file);
		}
		
		//返回数据
		$count['fixed'] = !empty($data[$url_path]['fixed'])?$data[$url_path]['fixed']:0;
		$count['unfixed'] = !empty($data[$url_path]['unfixed'])?$data[$url_path]['unfixed']:0;
		echo json_encode($count);exit();
	}
}

$o = new doc_fix_count();
$o->index();