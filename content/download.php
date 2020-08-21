<?php
error_reporting(E_ALL);
class download{
	public function index(){
		$url = $_GET['url'];
		//保存路径
		$save_root = './download_tmp/';
		$url_host = 'http://'.$_SERVER['HTTP_HOST'].$url;
		//拆分url  用最后的地址参数当文件名
		$url_arr = array_reverse(explode('/',$url));
		$save_file = $url_arr[1].'_'.time().'.pdf';
		
		if(!empty($url)){
			exec('prince '.$url_host.' -o '.$save_root.$save_file);
		}
		// 输出为pdf下载
		$str = file_get_contents($save_root.$save_file);
		header('Content-type: application/pdf');
		header('Content-Disposition: attachment; filename="' . $save_file . '"');
		echo $str;
		exit;
	}
}

$o = new download();
$o->index();