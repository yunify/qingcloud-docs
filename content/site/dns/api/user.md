---
title: "User API"
weight: 15
draft: false
enableToc: false
keyword: QingCloud，DNS服务，DNS云解析，DNS API，User API，用户
---

## DescribeUserZones

-  说明：获取当前user所有的zone列表

- 请求： 无

- 参数说明：

- 方法以及URI： `GET http://api.routewize.com/v1/user/zones`

- 数据体：

  ```
  {
      'offset': OFFSET,
      'limit': LIMIT,
      # 取值为 0， 1
      # 0 默认值，不刷新备案信息、托管状态等,
      # 1 需要刷新备案信息、托管状态
      'refresh': 0, 
      # 搜索时传入该参数，模糊匹配搜索
      'zone_name': ZONE_NAME
  }
  ```

- 响应： HTTP状态码，成功 200

- 响应数据体：

  ```
  {
      'code': 0,
      'limit': 20,
      'msg': 'succ',
      'offset': 0,
      'total_count': 1,
      'zones': [
        {
          'expiration_time': '',  # 过期时间
          'icp_name': '',  # 备案号
          'package_id': 0,  #　套餐ＩＤ
          'record_status': 'init',    # 备案状态
          'register': '',     # 注册商
          'remarks': '11.com',    # 备注
          'service_status': 'init',   # 服务状态
          'trust_status': 'init', # 托管状态
          'user_id': 'usr-JptLdsaZ',  # 用户ID
          'zone_name': '11.com.'  # zone名称
        }
      ]
  }
  ```

  

