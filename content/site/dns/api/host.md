---
title: "Host API"
weight: 25
draft: false
enableToc: false
keyword: QingCloud，DNS服务，DNS云解析，DNS API，Host API
---

##  ZoneHosts

- 说明： 当前 zone 所有的 host 列表

- 请求： 无

- 参数说明： 无

- 方法以及URL： `GET http://api.routewize.com/v1/dns/host/`

- 数据体：

  ```
  {
      'zone_name': ZONE_NAME,
      'limit': LIMIT,
      'offset': OFFSET,
      # 支持模糊匹配
      'domain_name': DOMAIN_NAME,
  }
  ```

- 响应： 

  成功， HTTP状态码： 200

- 响应数据体：

  ```
  {
      'domains': [
        {
          'count': 2,  # 域名数量
          'create_time': '2019-06-10 01:56:32',
          'description': '', # host备注
          'domain_name': '1.1.com.',
          'status': 'enabled',
          'user_id': 'usr-JptLdsaZ',
          'zone_name': '1.com.',
          'domain_id': ID,
        },
        {
          'count': 1,
          'create_time': '2019-07-02 07:39:18',
          'description': '',
          'domain_name': '20190702a.1.com.',
          'status': 'enabled',
          'user_id': 'usr-JptLdsaZ',
          'zone_name': '1.com.',
          'domain_id': ID,
        },
        {
          'count': 1,
          'create_time': '2019-07-03 08:16:23',
          'description': '',
          'domain_name': '1.1.1.1.1.1.1.1.com.',
          'status': 'enabled',
          'user_id': 'usr-JptLdsaZ',
          'zone_name': '1.com.',
          'domain_id': ID,
        }
      ],
      'limit': 20,
      'offset': 0,
      'total_count': 3
  }
  ```

  

## UpdateHostInfo

- 说明： 更新 Host 的描述信息

- 请求： 无

- 参数说明： 无

- 方法以及URL: `POST http://api.routewize.com/v1/dns/host/`

- 请求数据体：

  ```
  {
      'domain_name': DOMAIN_NAME , #HOST名称
      'zone_name': ZONE_NAME,
      'description': DESCRIPTION
  }
  ```

- 响应：

  成功， HTTP状态码：200

- 数据体：

  ```
  {
      'code': 0,
      'description': '123',
      'domain_name': '1.1.com.',
      'zone_name': '1.com.',
      'msg': 'succ'
  }
  ```

  

## DescribeHostRecords

- 说明：获取当前 host(domain) 所有的域名列表

- 请求： 无

- 参数： 无

- 方法以及URL：`GET http://api.routewize.com/v1/dns/host_info/`

- 数据体：

  ```
  {
    'domain_name': DOMAIN_NAME,
    'zone_name': ZONE_NAME,
  }
  ```
- 响应： HTTP状态码 200

- 响应数据体示例：

  ```
  {
    'code': 0,
      'host': '14',
      'msg': 'succ',
      'records': [
        {
          'create_time': '2019-07-11 10:05:17',
          'domain_name': '14.1.com.',
          'zone_name': '1.com.',
          'domain_record_id': 81,
          'mode': 1,
          'rd_class': 'IN',
          'rd_type': 'A',
          'record': [
            {
              'data': [
                {
                  'record_value_id': 172,
                  'status': 1,
                  'value': '141.1.1.2'
                },
                {
                  'record_value_id': 173,
                  'status': 1,
                  'value': '15.2.2.3'
                }
              ],
              'group_status': 1,
              'record_group_id': 93,
              'weight': 0
            }
          ],
          'status': 'enabled',
          'ttl': 600,
          'user_id': 'usr-JptLdsaZ',
          'view_id': 0
        }
      ],
      'total_count': 1
  }
  ```

  

## DeleteHost

- 说明： 删除 host 下所有的域名记录，支持同时删除多个 host

- 请求： 无

- 参数说明： 无

- 方法以及URL： `DELETE http://api.routewize.com/v1/domain/`

- 数据体： 无

  ```
  {
    'domain_names': [
      '1.1.com',
      '2.1.com'
    ],
    'zone_name': ZONE_NAME
  }
  ```

- 变动记录:
    - 20190909, 增加 `zone_name` 参数

      > **说明**
      >
      > 数据内容格式为 json，如 HTTP 的消息体内容为：`'body': 'domain_name=%5B%221.1.com%22%2C+%222.1.com%22%5D'`。

- 响应： 

  HTTP状态码：成功`204`，错误时 HTTP 状态码根据错误种类填写不同的值 

- 响应数据体：

  ```
  {
      'code': CODE,
      'message': MESSAGE,
  }
  ```

  

