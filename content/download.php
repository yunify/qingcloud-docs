<?php
error_reporting(E_ALL);
class download{
	public function index(){
		$url = $_GET['url'];
		//保存路径
		$save_root = getcwd().'/download_tmp/';
		$url_host = 'http://'.$_SERVER['HTTP_HOST'].$url;
		//拆分url  用最后的地址参数当文件名
		$url_arr = array_reverse(explode('/',$url));
		$save_file = $url_arr[1].'_'.time().'.pdf';
		
		if(!empty($url)){
			$script = "document.getElementsByTagName('header')[0].style.display='none';document.getElementsByClassName('col-12 col-md-3 col-xl-3 td-sidebar d-print-none')[0].style.display='none';document.getElementsByClassName('d-none col-md-2 d-xl-block d-md-block col-xl-2 td-toc d-print-none')[0].style.visibility='hidden';document.getElementsByClassName('td-page-meta page-meta-actions ml-2 pb-1 mb-0')[0].style.display='none';document.getElementsByClassName('bg-dark py-5 d-print-none footer')[0].style.display='none';";
			exec("wkhtmltopdf --run-script \"".$script."\" ".$url_host." ".$save_root.$save_file);
		}
		sleep(2);
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