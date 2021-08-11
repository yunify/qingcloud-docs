<?php
error_reporting(E_ALL);
class download{
	public function index(){
		$url = $_GET['url'];
		$pdf_name = $_GET['pdf_name'];
		//保存路径
		$save_root = getcwd().'/download_tmp/';
		//$url_host = 'http://'.$_SERVER['HTTP_HOST'].$url;
		$url_host = 'http://139.198.1.69:8080/'.$url;
		$save_file = urlencode($url).'.pdf';
		//文件是否存在
		$file_exists = file_exists($save_root.$save_file);
		if(!empty($url) && !$file_exists){
			$script = "document.getElementsByTagName('header')[0].style.display='none';document.getElementsByClassName('col-12 col-md-3 col-xl-3 td-sidebar d-print-none')[0].style.display='none';document.getElementsByClassName('d-none col-md-2 d-xl-block d-md-block col-xl-2 td-toc d-print-none')[0].style.visibility='hidden';document.getElementsByClassName('td-page-meta page-meta-actions ml-2 pb-1 mb-0')[0].style.display='none';document.getElementsByClassName('bg-dark py-5 d-print-none footer')[0].style.display='none';document.getElementsByClassName('col-12 col-md-7 col-xl-7')[0].style.maxWidth='100%';document.getElementsByClassName('col-12 col-md-7 col-xl-7')[0].style.flex='100%';document.getElementsByClassName('page-meta-pagination_word')[0].style.display='none';document.getElementsByClassName('page-meta-pagination border-top')[0].style.display='none';document.getElementsByClassName('td-sidebar-section-title content-index')[0].style.display='none';";
			shell_exec("wkhtmltopdf --run-script \"".$script."\" ".$url_host." ".$save_root.$save_file);
		}
		sleep(2);
		// 输出为pdf下载
		$str = file_get_contents($save_root.$save_file);
		header('Content-type: application/pdf');
		header('Content-Disposition: attachment; filename="' . $pdf_name.'.pdf' . '"');
		echo $str;
		exit;
	}

	/*

	public function downAll()
	{
		$url = isset($_GET['url']) ? $_GET['url'] : '';

		if ($url) {
			$pdf_name = isset($_GET['pdf_name']) ? $_GET['pdf_name'] : '文档';

			$str = file_get_contents('/opt/sh/endpdf/'.$url. '/res.pdf');
			header('Content-type: application/pdf');
			header('Content-Disposition: attachment; filename="' . $pdf_name.'.pdf' . '"');
			echo $str;
			exit;

		}
	}
	 */
}

$o = new download();

/*
if (isset($_GET['type']) && $_GET['type'] == 'all') {
	$o->downAll();
}
 */

$o->index();
