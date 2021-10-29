---
title: "Record API"
weight: 30
draft: false
enableToc: false
keyword: QingCloud，DNS服务，DNS云解析，DNS API，Record API，解析线路
---

## CreateRecord

- 说明：给指定的 zone 添加 record

- 参数说明：

- 方法以及URL： `http://api.routewize.com/v1/record/`

- 数据体：

  ```
  {
      'zone_name': ZONE_NAME,
      'domain_name': DOMAIN_NAME,
      # 整数，默认解析线路：0（全网默认），其余解析线路传对应的ID
      'view_id': VIEW_ID,
      'type': TYPE,
      'ttl': TTL,
      'record':
      "[
          {
              'weight': 0, 'values':[
                      {
                          'value': '1.1.1.1',
                          'status': 1
                      },
                      {
                          'value': '2.2.2.2',
                          'status': 1
                      }
                  ]
          },
          {
              'weight': 0, 'values':[
                      {
                          'value': '1.1.1.3',
                          'status': 1
                      },
                      {
                          'value': '1.1.1.4',
                          'status': 1
                      }
                  ]
          }
      ]",
      'mode': MODE_PROPERTY,
      'auto_merge': AUTO_MERGE,
  }
  ```

  

- 校验规则：根据产品要求

- 数据填写要求：
  - auto_merge， 取值范围： 1 表示需要不允许自动合并， 2 表示需要自动合并， **且仅在非权重模式下有意义**
  - mode, 记录模式， 取值为：1 普通模式， 2 轮询模式， 3 权重模式， 4 智能模式，可参见：[四种解析模式](../../intro/dns_function/)
      - 权重模式仅对CNAME和A记录有意义
      - 智能模式仅对A记录有意义
      - 轮询模式，对A记录有意义
      - 普通模式对所有记录类型均有意义，即默认模式
  - records， 记录值列表，必须按示例中格式传递，不能缺少任何字段，
      - status状态会被忽略
      - weight只在权重模式下有意义
  - status取值范围
      - 1, 开启(enable)
      - 2, 暂停
  - group_status取值范围
      - 1, 开启(enable)
      - 2, 暂停

- 响应：

  HTTP状态码： 201，创建成功

- 响应数据体：

  ```
  {
      'code': 0,
      'domain_name': 'jj.1.com.',
      'domain_record_id': 16,
      'msg': 'succ',
      'records': [
        {
          'group_id': 21,
          'group_status': 1,
          'value': [
            {
              'id': 63,
              'status': 1,
              'value': '14.1.1.1'
            },
            {
              'id': 64,
              'status': 1,
              'value': '15.2.2.4'
            }
          ],
          'weight': 0
        }
      ],
      'view_id': 3
    }
  ```

  

- 返回结果说明：
  1. 返回 group_id 为组 ID，用于按组暂停解析记录。
  2. id 为记录 ID，用于按记录值的唯一标识，将来用于暂停单个解析记录。
  3. 若记录被自动合并，只返回合并记录的值，不会返回全量记录列表。

## DescribeRecordInfoByID

- 说明： 根据domain record id获取record的数据

- 请求： 无

- 请求以及URL： `GET http://api.routewize.com/v1/dr_id/[RECORD_ID]`

- 数据体：无

- 响应数据体(示例)：

  ```
  'body': {
      'code': 0,
      'data': {
        'create_time': '2019-08-21 06:56:29',
        'domain_name': '1.1455.com.',
        'zone_name': '1455.com.',
        'domain_record_id': 937,
        'mode': 1,
        'rd_class': 'IN',
        'rd_type': 'A',
        'record': [
          {
            'data': [
              {
                'record_value_id': 1985,
                'status': 1,
                'value': '141.1.1.2'
              },
              {
                'record_value_id': 1986,
                'status': 1,
                'value': '15.2.2.3'
              }
            ],
            'group_status': 1,
            'record_group_id': 1212,
            'weight': 0
          }
        ],
        'status': 'enabled',
        'ttl': 600,
        'view_id': 0
      },
      'msg': 'succ'
    },
    'status_code': 200
  ```

  

## UpdateRecord

- 说明：更新Record的记录值， 解析线路， TTL， 类型，模式

- 请求： 无

- 参数： 无

- 方法以及URL： `POST http://api.routewize.com/v1/dr_id/<domain_record_id>`

- 数据体：

  ```
  {
      'domain_name': DOMAIN_NAME,
      'view_id': VIEW,
      'class': CLASS,
      'type': RECORD_TYPE,
      'ttl': TTL,
      'records':
              "[
                  [
                      {
                          'weight': WEIGHT,
                          'values':[
                              {'value': '1.1.1.1.', 'status': 1},
                              {'value': '1.1.1.2.', 'status': 1},
                              ]
                      }
                  ],
                  [
                      {
                          'weight': WEIGHT,
                          'values':[
                              {'value': '1.1.1.3.', 'status': 1},
                              {'value': '1.1.1.4.', 'status': 1},
                              ]
                      }
                  ]
              ]",
      'mode': MODE_NAME
  }
  ```

  

  数据格式说明见[Create Record](#CreateRecord)。

- 响应：
    - 成功， HTTP状态码 `201`
    - 失败：见响应数据体

- 响应数据体：

  ```
  
  ```

  

## DeleteRecord

- 说明：删除域名记录

- 参数说明

- 方法以及URL： `POST http://api.routewize.com/v1/change_record_status/`

- 消息体：

  ```
  {
      'ids':[IDS],
      # 取值为'delete', 'stop', 'enable'
      'action': 'delete',
      # 目前取值为: 'record', 'group', 'value'
      'target':'record'
  }
  ```

- 响应

  HTTP状态码： 200

  ```
  {
    'code': 0,
    'message': 'succ'
  }
  ```

  

## UpdateRecordStatus

- 说明：批量暂停和启动域名记录

- 参数说明：

- 方法以及URL： `POST http://api.routewize.com/v1/change_record_status/`

- 消息体：

  ```
  {
      'ids':[IDS],
      # 取值为'stop', 'enable'
      'action': ACTION,
      # 目前取值为: 'record'
      'target':'record'
  }
  ```

  

- 响应：

  HTTP状态码: 200

  ```
  {
    'code': 0,
    'message': 'succ'
  }
  ```

  

## UpdateRecordGroupStatus

- 说明：记录按组批量暂停和启动域名记录

- 参数说明：

- 方法以及URL： `POST http://api.routewize.com/v1/change_record_status/`

- 消息体：

  ```
  {
      'ids':[IDS],
      # 取值为'stop', 'enable', 'delete'
      'action': ACTION,
      # 目前取值为: 'group'
      'target':'group'
  }
  ```

- 响应

  HTTP状态码： 200

  ```
  {
    'code': 0,
    'message': 'succ'
  }
  ```

  

## UpdateRecordValueStatus

- 说明：批量暂停和启动域名记录

- 参数说明：

- 方法以及URL： `POST http://api.routewize.com/v1/change_record_status/`

- 消息体：

  ```
  {
      'ids':[IDS],
      # 取值为'stop', 'enable'
      'action': ACTION,
      # 目前取值为: 'value'
      'target':'value'
  }
  ```

- 响应

  HTTP状态码： 200

  ```
  {
    'code': 0,
    'message': 'succ'
  }
  ```

  

