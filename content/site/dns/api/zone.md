---
title: "Zone API"
weight: 20
draft: false
enableToc: false
keyword: QingCloud，DNS服务，DNS云解析，DNS API，Zone API，可用区
---

## CreateZone

- 说明：创建 zone

- 请求：

- 参数说明：

- 方法以及URL：`POST http://api.routewize.com/v1/zone/`

- 请求数据体：

  ```
  {
      # 要添加的Zone
      'zone_name':  ZONE_NAME
      # zone备注信息
      'remarks': REMARKS
      # 解析线路, 不需要包含默认解析线路,如果使用默认解析线路，可以忽略该参数
      'zone_views': ' [{"id":0,"name":"*"},{"id":2,"name":"中国电信"},{"id":3,"name":"中国联通"},{"id":4,"name":"中国移动"},{"id":8,"name":"港澳台及海外"}]'
  }
  ```

  

- 成功响应：
  
  HTTP状态码： 204
  
  ```
  {
      'code': CODE,    # 状态码
      'message': MESSAGE,   # 额外信息
      # 如果是中文域名,返回的zone_name是punycode转码后的域名
      'zone_name': ZONE_NAME # zone名字
  }
  ```

## DeleteZone

- 说明： 删除 zone

- 请求： 

- 参数说明：

- 方法以及URL：`DELETE http://api.routewize.com/v1/zone/<zone_name>`

- 数据体：

  ```
  {
  }
  ```
- 响应:

    HTTP状态码： 204

- 数据体：
  
  成功执行， HTTP状态码： `204`
  
  ```
  {
      NULL
  }
  ```
  
  
  
  执行错误，HTTP状态码： `4**`，消息体如下：
  
  ```
  {
      # 错误码
      'code': CODE,
      # additional message
      'message': MESSAGE
  }
  ```

## UpdateZoneInfo

- 说明: 更新 zone 的描述信息
- 请求: 无
- 参数: 无
- 方法以及URL：`POST http://api.routewize.com/v1/zone/info/`
- 数据体：

- 响应：

  成功状态码 ：201

  ```
  {
      'zone_name': ZONE_NAME,
      'remarks': REMARKS,
  }
  ```

  

- 响应数据体：

  ```
  {
      'zone_name': ZONE_NAME
  }
  ```

  

## DescribeZoneTXT

- 说明： 获取zone的TXT验证信息

- 请求： 无

- 参数： 无

- 方法以及URL： `GET http://api.routewize.com/v1/zone/txt/`

- 数据体：

  ```
  {
      'zone_name': ZONE_NAME,
  }
  ```

  

- 响应： 

  成功状态码: 200

- 响应数据体(示例)：

  ```
  {
      'zone_name':'1.com.',
      'verify_domain_record': 'qingcloudcheck',
      'user_id': 'usr-nol2zssr',
      'verify_txt_value': '49f1e2a763b99292cd58978130ed3c53',
      'code': 0,
      'message': 'succ'
  }
  ```

  

## DescribeZoneView

- 说明： 获取zone的解析线路信息

- 请求： 无

- 参数： 无

- 方法以及URL： `GET http://api.routewize.com/v1/zone/view/`

- 数据体：

  ```
  {
      'zone_name': ZONE_NAME,
      # 取值为'GET_FULL' 表示所有解析线路， 取值为: 'GET_USING' 表示获取当前已经使用的解析线路
      'action': ACTION
  }
  ```

  

- 响应： 

  成功状态码： 200

- 响应数据体(示例)：

  ```
  {
      'zone_name':'1.com.',
      'user_id': 'usr-nol2zssr',
      'zone_views': [
          {'id': 0, 'name': 'default'},
          {'id': 2, 'name': 'cn_tx'},
          {'id': 3, 'name': 'cn_lt'},
          {'id': 4, 'name': 'cn_yd'},
          {'id': 8, 'name': 'hk_tw_mo_overseas'}
          ],
      'code': 0,
      'message': 'succ'
  }
  ```

  

## UpdateZoneView

- 说明： 更新zone的解析线路信息

- 请求： 无

- 参数： 无

- 方法以及URL： `POST http://api.routewize.com/v1/zone/view/`

- 数据体：

  ```
  {
      zone_name: ZONE_NAME,
      zone_views:"[
              {'name': 'cndx', 'id': 20},
              {'name': 'cnlt', 'id': 21},
              {'name': 'cnlt', 'id': 222},
              {'name': 'default', 'id':0}
          ]"
  }
  ```

- 响应： 

  成功状态码：200

  ```
  {
      'code': 0,
      'message': 'succ'
  }
  ```

  

