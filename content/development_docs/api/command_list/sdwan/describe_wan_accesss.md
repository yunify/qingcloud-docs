---
title: "DescribeWanAccesss"
description: 
draft: false
---



获取SD-WAN接入点信息。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| wan_accesss.n | String | 接入点 ID | No |
| wan_access_name | String | 接入点名称 | No |
| status.n | String | 接入点状态:  pending, active, stopped, suspended, terminated, ceased | No |
| access_type.n | String | 接入点类型, 包含 cpe, connect, vpc | No |
| location_nation | String | 接入点所在国家 | No |
| location_province | String | 接入点所在省份 | No |
| location_city | String | 接入点所在城市 | No |
| wan_nets.n | String | 按照 WAN 网过滤, 只返回指定 WAN 网下的资源 | No |
| wan_pops.n | String | 按照 POP 点过滤, 只返回指定 POP 点下的资源 | No |
| owner.n | String | 按照用户账户过滤, 只返回指定账户的资源 | No |
| search_word | String | 搜索关键词, 支持接入点名称, 光盒序列号 | No |
| verbose | String | 是否返回冗长的信息, 若为1, 则返回接入点时延详细数据 | No |
| offset | Integer | 数据偏移量, 默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| wan_access_set | Array | JSON 格式的接入点数据列表 |
| total_count | Integer | 根据过滤条件得到的接入点总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| wan_access_id | String | 接入点 ID |
| wan_access_name | String | 接入点名称 |
| description | String | 接入点描述 |
| bandwidth | Integer | 带宽值 |
| elastic_bandwidth | Integer | 弹性带宽值 |
| access_type | String | 接入点类型, cpe/connect/vpc |
| status | String | 接入点状态, 有效值为pending, active, stopped, suspended, terminated, ceased<br/>pending： 等待被创建<br/>active： 活跃<br/>stopped： 已关机<br/>suspended： 由于欠费, 已被暂停使用<br/>terminated： 已被删除，被删除的接入点不可以被恢复<br/>ceased： 已被彻底删除 |
| transition_status | String | 接入点过渡状态，有效值为 creating, updating, configuring, starting, stopping, suspending, resuming, deleting, replacing<br/>creating： 创建中, 由 pending 状态变成 active 状态<br/>updating： 配置更新中<br/>configuring： 配置下发中<br/>starting： 启动中, 由 stopped 状态变成 active 状态<br/>stopping： 关闭中, 由 active 状态变成 stopped 状态<br/>suspending： 欠费暂停中, 由 active/stopped 状态变成 suspended 状态<br/>resuming： 恢复中, 由 suspended 状态变成 active 状态<br/>deleting： 删除中, 由 active/stopped/suspended 状态变成 terminated 状态<br/>replacing： 光盒替换中 |
| create_time | TimeStamp | 接入点创建时间, 为UTC时间, 格式可参见 ISO8601. |
| status_time | TimeStamp | 接入点最近一次状态变更时间, 为UTC时间, 格式可参见 ISO8601. |
| gps_coordinate | String | 接入点 GPS 坐标 |
| location_address | String | 接入点地址 |
| location_nation | String | 接入点所在国家 |
| location_province | String | 接入点所在省份 |
| location_city | String | 接入点所在城市 |
| location_county | String | 接入点所在乡村 |
| location_description | String | 接入点所在地描述 |
| wan_net_id | String | 接入点所属 WAN 网 |
| wan_pop_id | String | 接入点所属 POP 点 |
| wan_cpe | Dict | 光盒详细信息, 接入点类型为cpe时有效<br/>agent_version: 光盒版本号<br/>has_new_version: 是否为最新版本, True表示检测到最版本，False表示本版本为最新版本<br/>cpe_sn: 光盒序列号<br/>lan_infos: 光盒LAN口信息<br/>tunnel_status: 隧道状态 up/down<br/>tunnel_delay: 隧道时延<br/>secondary_tunnel_status: 备份隧道状态<br/>secondary_tunnel_delay: 备份隧道时延<br/>wan_infos: 光盒WAN口详细信息<br/>wan_interfaces: 光盒 WAN 接口 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeWanAccesss
&wan_accesss.1=wacc-fub9b1eo
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeWanAccesssResponse",
  "wan_access_set":[
    {
      "location_county":"",
      "operator_phone":"",
      "is_applied":1,
      "auto_renew":null,
      "billing_months":0,
      "operator_remarks":null,
      "access_type":"cpe",
      "last_renew_request_time":null,
      "wan_cpe_model_id":"wcmd-boxrz5xj",
      "bandwidth":1,
      "create_time":"2020-04-24T07:26:15Z",
      "owner":"usr-JmZCZBRQ",
      "contact_name":"",
      "wan_access_id":"wacc-fub9b1eo",
      "is_hub":0,
      "border_id":"",
      "billing_expire_time":"2020-04-24T08:26:17Z",
      "service_mode":0,
      "sub_code":0,
      "location_description":"\u4e2d\u56fd",
      "status_time":"2020-04-24T07:26:17Z",
      "elastic_bw_sub_code":0,
      "border_zone_id":"",
      "billing_mode":"bw",
      "access_mode":"",
      "contact_phone":"",
      "wan_template_id":"",
      "elastic_bandwidth_local":0,
      "bandwidth_remote":0,
      "description":null,
      "route_type":"",
      "wan_cpe_register_key_id":"",
      "transition_status":"",
      "cpe_sn":"5254a4e1724d",
      "location_city":"\u5317\u4eac\u5e02",
      "wan_net_id":"wnet-ndyb12t8",
      "location_province":"\u5317\u4eac\u5e02",
      "wan_access_name":"vdi-sdwan",
      "elastic_bw_status":null,
      "service_enabled":1,
      "wan_cpe_hagroup_id":"",
      "wan_cpe":{
        "secondary_tunnel_delay":0,
        "secondary_tunnel_status":"",
        "wan_cpe_name":"vdi-sdwan",
        "tunnel_delay":0,
        "cpe_sn":"5254a4e1724d",
        "has_new_version":false,
        "wan_interfaces":[
          "eth0"
        ],
        "mobile_iface_name":"",
        "wan_cpe_id":"wcpe-orcqzqif",
        "tunnel_status":"",
        "agent_version":"2.2.9-16664e82"
      },
      "console_id":"qingcloud",
      "elastic_bandwidth_remote":0,
      "net_mode":1,
      "location_nation":"\u4e2d\u56fd",
      "status":"active",
      "wan_pop_id":"",
      "elastic_bandwidth":0,
      "charge_mode":"elastic",
      "acceleration_status":0,
      "next_charge_mode":null,
      "root_user_id":"usr-JmZCZBRQ",
      "gps_coordinate":"39.616706,116.090471",
      "bandwidth_local":0,
      "operator_name":"",
      "location_address":"",
      "contact_email":"",
      "resource_project_info":[],
      "wan_cpe_id":"wcpe-orcqzqif"
    }
  ],
  "total_count":1,
  "ret_code":0
}
```
