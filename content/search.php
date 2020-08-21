<?php
error_reporting(0);
class search_api
{
    const URL_ROOT = 'http://192.168.65.245:9200/official_website_test/_search';
    const CHARSET = 'UTF-8';
    /**GET*/
    private $msGets = '';
    /**POST*/
    //private $maGetPostData = array();
    function __construct()
    {
        $query_str = $this->getGET();
		$auto = $_REQUEST['auto']?:'false';
		//$callback = $_REQUEST['callback'];
        if($this->msGets != '')
        {
            if(count($this->msGets) > 0)
                $sUrl = self::URL_ROOT .'?'. $this->msGets;
            else
                $sUrl = self::URL_ROOT;
            //echo $callback. "(" .$this->getContent($sUrl, $query_str). ")";
			$result = $this->getContent($sUrl, $query_str);
			if($auto=='true'){
				echo $this->get_auto_result($result);exit();
			}else{
				echo $result;exit();
			}
        }
        else
        {
            //echo $callback. "(" .$this->getContent(self::URL_ROOT, $query_str). ")";
			$result = $this->getContent(self::URL_ROOT, $query_str);
			if($auto=='true'){
				echo $this->get_auto_result($result);exit();
			}else{
				echo $result;exit();
			}
        }
    }

    function __destruct()
    {
        unset($msGets);
    }

    /*
     * 载入GET数
     * */
    private function getGET()
    {
        /*取得GET内容*/
        // from: ((currentPage -1) * itemsPerPage) + 1,
        // to: currentPage  * itemsPerPage
        $search_category = $_REQUEST['cate'];
        $search_keywords = $_REQUEST['q'];
        $count = $_REQUEST['count']?:false;
        $size_flag = $_REQUEST['size_flag']?:false;
        $size = 10;
        if ($size_flag!="false") $size = 1000;
        $pager = $_REQUEST['pager']?:1;
        $from = (($pager - 1) * 10) ;
        if ($pager == 1) $from = 0;
        if($count) {
            $query_string = $this->getCount($search_keywords);
            return $query_string;
        }
        if($search_category == 'all') {
            $query_string = array(
                'from' => $from,
                'size'  => $size,
                'query' => array(
                    "function_score" => array(
                        'query' => array(
                            "bool"=> array(
                                "must"=> [
                                    array(
                                        'multi_match' => array(
                                            'query' => $search_keywords,
                                            'type' => 'best_fields',
                                            "minimum_should_match" => "90%",
                                            'fields' => array(
                                                'title^2',
                                                'content',
                                                'category'
                                            ),
                                            "fuzziness" => "AUTO"
                                        )
                                    )
                                ]
                            )
                        ),
                        'functions' =>[
                            array(
                                'filter' => array(
                                    'match' => array(
                                        'category' => '产品'
                                    )
                                ),
                                'weight' => 20
                            ),
                            array(
                                'filter' => array(
                                    'match' => array(
                                        'category' => '解决方案'
                                    )
                                ),
                                'weight' => 15
                            ),
                            array(
                                'filter' => array(
                                    'match' => array(
                                        'category' => '青云志'
                                    )
                                ),
                                'weight' => 10
                            ),
                            array(
                                'filter' => array(
                                    'match' => array(
                                        'category' => '新闻'
                                    )
                                ),
                                'weight' => 10
                            ),
                            array(
                                'filter' => array(
                                    'match' => array(
                                        'category' => '文档'
                                    )
                                ),
                                'weight' => 10
                            ),
                            array(
                                'filter' => array(
                                    'match' => array(
                                        'category' => '客户案例'
                                    )
                                ),
                                'weight' => 8
                            ),
                            array(
                                'filter' => array(
                                    'match' => array(
                                        'category' => '其他'
                                    )
                                ),
                                'weight' => 5
                            ),
                        ],
                        'max_boost' => 20,
                        "score_mode" => "max",
                        "boost_mode" => "sum"
                    )
                ),
                'highlight' => array(
                    'pre_tags' => ['<span class="highlight-text">'],
                    'post_tags' => ['</span>'],
                    'fields' => array(
                        'title' => (object)[],
                        'content'  => (object)[]
                    )
                )
            );
        } else {
            $query_string = array(
                'from' => $from,
                'size'  => $size,
                'query' => array(
                    "function_score" => array(
                        'query' => array(
                            "bool"=> array(
                                "must"=> [
                                    array(
                                        'multi_match' => array(
                                            'query' => $search_keywords,
                                            'type' => 'best_fields',
                                            "minimum_should_match" => "80%",
                                            'fields' => array(
                                                'title^2',
                                                'content',
                                                'category'
                                            ),
                                            "fuzziness" => "AUTO"
                                        )
                                        ),
                                        array(
                                            'match' => array(
                                                'category' => array(
                                                    'query'=> $search_category,
                                                    'operator'=> 'and'
                                                )
                                            )
                                        )
                                ]
                            )
                        ),
                        'functions' =>[
                            array(
                                'filter' => array(
                                    'match' => array(
                                        'category' => '产品'
                                    )
                                ),
                                'weight' => 20
                            ),
                            array(
                                'filter' => array(
                                    'match' => array(
                                        'category' => '解决方案'
                                    )
                                ),
                                'weight' => 15
                            ),
                            array(
                                'filter' => array(
                                    'match' => array(
                                        'category' => '青云志'
                                    )
                                ),
                                'weight' => 10
                            ),
                            array(
                                'filter' => array(
                                    'match' => array(
                                        'category' => '新闻'
                                    )
                                ),
                                'weight' => 10
                            ),
                            array(
                                'filter' => array(
                                    'match' => array(
                                        'category' => '文档'
                                    )
                                ),
                                'weight' => 10
                            ),
                            array(
                                'filter' => array(
                                    'match' => array(
                                        'category' => '客户案例'
                                    )
                                ),
                                'weight' => 8
                            ),
                            array(
                                'filter' => array(
                                    'match' => array(
                                        'category' => '其他'
                                    )
                                ),
                                'weight' => 5
                            ),
                        ],
                        'max_boost' => 20,
                        "score_mode" => "max",
                        "boost_mode" => "sum"
                    )
                ),
                'highlight' => array(
                    'pre_tags' => ['<span class="highlight-text">'],
                    'post_tags' => ['</span>'],
                    'fields' => array(
                        'title' => (object)[],
                        'content'  => (object)[]
                    )
                )
            );
        }

        return $query_string;
    }

    private function getCount($search_keywords){
        $query_string = array(
            'size'=> 0,
            'aggs'=> array(
                'cate_count'=> array(
                    'terms'=> array(
                        'field'=> 'category.keyword'
                    )
                )
            ),
            'query' => array(
                "function_score" => array(
                    'query' => array(
                        "bool"=> array(
                            "must"=> [
                                array(
                                    'multi_match' => array(
                                        'query' => $search_keywords,
                                        'type' => 'best_fields',
                                        "minimum_should_match" => "90%",
                                        'fields' => array(
                                            'title^2',
                                            'content',
                                            'category'
                                        ),
                                        "fuzziness" => "AUTO"
                                    )
                                )
                            ]
                        )
                    ),
                )
            )
        );

        return $query_string;
    }
    /*
     * 读取远程接口返回的内
     * @return string
     * */
    private function getContent($sGetUrl, $queryStr)
    {
        $ch = curl_init();
        curl_setopt ($ch, CURLOPT_URL, $sGetUrl); //设置GET的URL地址
        curl_setopt ($ch, CURLOPT_RETURNTRANSFER, true);//将结果保存成字符串
        curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, 10);//连接超时时间s
        curl_setopt ($ch, CURLOPT_TIMEOUT, 10);//执行超时时间s
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, strtoupper('POST'));
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-type: application/json']);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($queryStr));
        $sData = curl_exec($ch);
        curl_close($ch);
        // unset($ch);
        return $sData;
    }

	private function get_auto_result($json){
		$json_result = json_decode($json,TRUE);
		$return['suggestions'] = array(); 
		if(!empty($json_result['hits']['hits'])){
			foreach($json_result['hits']['hits'] as $value){
				if(!empty($value['_source']['title']) && !empty($value['_source']['content'])){
					$return['suggestions'][] = array(
						'value'=>$value['_source']['title'],
						'data'=>$value['_source']['content']
					);
				}
			}
		}
		return json_encode($return);
	}
}

$o = new search_api();
// unset($o);
