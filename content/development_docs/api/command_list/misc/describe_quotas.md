---
title: "DescribeQuotas"
description: 
draft: false
---



获取当前主账号的配额总量。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| zone | String | 区域ID | Yes |

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |
| quota_set | Array | JSON 格式的配额列表, 每项参数可见下面 [Response Item](#response-item) |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| alarm_policy | String | 监控告警策略配额 |
| autoscaling_policy | String | 自动伸缩策略配额 |
| cache | String | 缓存服务配额 |
| cache_parameter_group | String | 缓存配置组配额 |
| cluster | String | AppCenter 集群配额 |
| cpu | String | 云服务器 CPU 配额 |
| dedicated_host | String | 专属宿云服务器配额 |
| dedicated_host_group | String | 专属宿云服务器组配额 |
| dns_alias | String | 内网域名别名配额 |
| eip | String | 公网 IP 个数配额 |
| eip_bandwidth | String | 公网 IP 带宽配额 |
| hadoop | String | Hadoop 配额 |
| hbase | String | HBase 配额 |
| hc_volume | String | 容量型硬盘个数配额 |
| hc_volume_size | String | 容量型硬盘容量配额 |
| hdw | String | HDW 配额 |
| hp_cache | String | 超高性能型缓存服务配额 |
| hp_cluster | String | 超高性能型 AppCenter 集群配额 |
| hp_cpu | String | 超高性能型云服务器的 CPU 配额 |
| hp_dedicated_host | String | 超高性能型专属宿云服务器配额 |
| hp_dedicated_host_group | String | 超高性能型专属宿云服务器组配额 |
| hp_hadoop | String | 超高性能型 Hadoop 配额 |
| hp_hbase | String | 超高性能型 HBase 配额 |
| hp_hdw | String | 超高性能型 HDW 配额 |
| hp_instance | String | 超高性能型云服务器个数配额 |
| hp_memory | String | 超高性能型云服务器内存配额 |
| hp_mongo | String | 超高性能型 Mongo 配额 |
| hp_queue | String | 超高性能型队列服务配额 |
| hp_spark | String | 超高性能型 Spark 配额 |
| hp_storm | String | 超高性能型 Storm 配额 |
| hp_zookeeper | String | 超高性能型 ZooKeeper 配额 |
| hpp_rdb | String | 超高性能型关系型数据库配额 |
| hpp_s2_server | String | 超高性能型共享 vsan/vnas 配额 |
| hpp_volume | String | 超高性能型硬盘个数配额 |
| hpp_volume_size | String | 超高性能型硬盘容量配额 |
| image | String | 自有镜像配额 |
| instance | String | 性能型云服务器配额 |
| keypair | String | 密钥对配额 |
| launch_configuration | String | 云服务器启动配置配额 |
| loadbalancer | String | 负载均衡器配额 |
| loadbalancer_policy | String | 负载均衡器转发策略配额 |
| memory | String | 性能型云服务器内存配额 |
| mongo | String | Mongo 配额 |
| queue | String | 队列服务配额 |
| rdb | String | 关系型数据库配额 |
| router | String | 路由器/VPC 配额 |
| s2_server | String | vsan/vnas 配额 |
| scheduler | String | 定时器配额 |
| security_group | String | 防火墙配额 |
| security_group_ipset | String | 防火墙 IP/端口集合 配额 |
| server_certificate | String | SSL 证书配额 |
| spark | String | Spark 配额 |
| storm | String | Storm 配额 |
| tag | String | 标签配额 |
| volume | String | 性能型硬盘个数配额 |
| volume_size | String | 性能型硬盘容量配额 |
| vxnet | String | 私有网络配额 |
| zookeeper | String | ZooKeeper 配额 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeQuotas
&zone=test
```

_Example Response_:

```
{
  "action":"DescribeQuotasResponse",
  "user_id":"usr-P9P3grKr",
  "ret_code":0,
  "quota_set":[
    "hadoop":2,
    "instance":200,
    "autoscaling_policy":10,
    "hp_memory":20480,
    "user_group":20,
    "hp_dedicated_host_group":0,
    "s2_account":10,
    "cluster_max_node_cnt":10,
    "security_group_ipset":10,
    "hp_storm":0,
    "span_max_member_cnt":5,
    "vpc_border":0,
    "server_certificate":10,
    "hc_volume_size":2000,
    ....
  ]
}
```
