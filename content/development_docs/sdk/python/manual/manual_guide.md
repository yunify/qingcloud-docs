---
title: "快速入门"
description: test
draft: false
---



使用 qingcloud-sdk 前请先在 [青云控制台](https://console.qingcloud.com/access_keys/) 申请 access key，申请后便可以自由使用了。

> 注：如果您期望在IAM身份的信任设备上使用 qingcloud-sdk ，也可以不用申请 access key ，而是到 [IAM 控制面板](https://console.qingcloud.com/iam/)创建基于该信任设备的IAM即可。

下面举几个例子来帮助大家快速上手，全部功能请见后面的 [函数列表](#id3) 。

**建立连接**

发起请求前要先建立连接:

```
>>> import qingcloud.iaas
>>> conn = qingcloud.iaas.connect_to_zone(
 'pek3', # 你的资源所在的节点ID，可在控制台切换节点的地方查看，如 'pek3', 'ap2a', 'gd2' 等
 'access key id', 
 'secret access key' 
 )
```

> 注：如果您正在使用 IAM 身份建立连接，则无需提供 `access key id` 和 `secret access key` ：

```
>>> import qingcloud.iaas
>>> conn = qingcloud.iaas.connect_to_zone(
 'pek3', # 你的资源所在的节点ID，可在控制台切换节点的地方查看，如 'pek3', 'ap2a', 'gd2' 等
 None, 
 None
 )
```

上面代码中得到的 conn 是 APIConnection 的实例，在接下来的教程中会继续用到它。

APIConnection 中各操作函数的返回值是根据 API 返回的 JSON 数据转换而成的 dict 。 具体返回内容可参见 [_API 文档_](../../../../api/) 中对应指令。

**创建云服务器**

创建一台云服务器至少要提供镜像ID，[_Instance Types_](../../../../api/common/instance_type/) 或 cpu/memory:

```
>>> ret = conn.run_instances(
 image_id='img-xxxxxx',
 cpu=1,
 memory=1024,
 vxnets=['vxnet-0'],
 login_mode='passwd',
 login_passwd='Passw0rd@()'
 )
```

如果创建时没有指定防火墙 security_group ，则自动使用缺省防火墙。

**关闭云服务器**

当你的云服务器暂时不需要运行时，可将其关闭以减少费用（可同时关闭多台）:

```
>>> ret = conn.stop_instances(
 instances=['instance-id-1','instance-id-2', ...]
 )
```

有时默认关机会失败，特别是 windows 系统，部分运行中的应用会阻止系统关机。 这时需要强制关机:

```
>>> ret = conn.stop_instances(
 instances=['instance-id-1','instance-id-2', ...],
 force=True
 )
```

**销毁云服务器**

当你的云服务器确已不再需要时，可将其销毁，云服务器系统磁盘内的数据也会随之一起销毁:

```
>>> ret = conn.terminate_instances(
 instances=['instance-id-1','instance-id-2', ...]
 )
```

云服务器所加载的硬盘不会因云服务器的销毁而删除，硬盘内的数据也不会因此丢失。

**获取云服务器**

可根据云服务器ID，状态，云服务器名称，镜像ID 作过滤条件，来获取云服务器列表。 如果不指定任何过滤条件，默认返回你所拥有的所有云服务器:

```
>>> ret = conn.describe_instances(limit=50)
>>> all_instances = ret['instance_set']

>>> ret = conn.describe_instances(status=['running'])
>>> running_instances = ret['instance_set']

>>> ret = conn.describe_instances(search_word='test')
>>> test_instances = ret['instance_set']
```

**创建并加载硬盘**

在同一个 zone 下的硬盘可加载到任何一个正在运行或处于关闭状态的云服务器上。

先创建一个硬盘:

```
>>> ret = conn.create_volumes(
 size=10,
 volume_name='demo vol'
 )
>>> volume_id = ret['volumes'][0]
```

检查这个硬盘的状态:

```
>>> ret = conn.describe_volumes(volumes=[volume_id])
>>> volume = ret['volume_set'][0]
>>> volume.status
u'available'
```

创建成功后将其加载到云服务器:

```
>>> ret = conn.attach_volumes(volumes=[volume_id], instance='instance-id')
```

硬盘加载成功后，需要到加载的云服务器上进一步手动操作，具体可参考 [_FAQ_](../../faq/index.html#faq) 。

## 函数列表 {#id3}

APIConnection 中包括各项资源的操作函数，简单罗列如下：

Image 镜像

*   describe_images - 获取镜像列表
*   capture_instance - 基于云服务器创建自有镜像
*   delete_images - 删除自有镜像
*   modify_image_attributes - 修改镜像基本属性

Instance 云服务器

*   describe_instances - 获取云服务器列表
*   run_instances - 创建云服务器
*   terminate_instances - 销毁云服务器
*   stop_instances - 关机
*   restart_instances - 重启云服务器
*   start_instances - 开机
*   reset_instances - 重置云服务器（会将系统盘恢复到初始状态，慎用）
*   resize_instances - 修改云服务器 CPU 内存配置
*   modify_instance_attributes - 修改云服务器基本属性
*   upload_userdata - 上传 UserData

Volume 硬盘

*   describe_volumes - 获取硬盘列表
*   create_volumes - 创建硬盘
*   delete_volumes - 删除硬盘
*   attach_volumes - 挂载
*   detach_volumes - 卸载
*   resize_volumes - 扩容
*   modify_volume_attributes - 修改硬盘基本属性

KeyPair 密钥

*   describe_key_pairs - 获取 SSH 密钥列表
*   attach_keypairs - 加载密钥
*   detach_keypairs - 卸载密钥
*   create_keypair - 创建新密钥对
*   delete_keypairs - 删除密钥
*   modify_keypair_attributes - 修改密钥基本属性

Security Group 防火墙

*   describe_security_groups - 获取防火墙列表
*   create_security_group - 创建新防火墙
*   modify_security_group_attributes - 修改防火墙属性
*   apply_security_group - 应用防火墙规则
*   delete_security_groups - 删除防火墙
*   describe_security_group_rules - 获取防火墙规则列表
*   add_security_group_rules - 添加规则
*   delete_security_group_rules - 删除规则
*   modify_security_group_rule_attributes - 修改规则
*   describe_security_group_ipsets - 获取 IP/端口集合
*   create_security_group_ipset - 创建 IP/端口集合
*   delete_security_group_ipsets - 删除 IP/端口集合
*   modify_security_group_ipset_attributes - 修改 IP/端口集合

Vxnet 私有网络

*   describe_vxnets - 获取私有网络列表
*   create_vxnets - 创建私有网络
*   join_vxnet - 将云服务器加入网络
*   leave_vxnet - 云服务器离开网络
*   delete_vxnets - 删除私有网络
*   modify_vxnet_attributes - 修改网络基本属性
*   describe_vxnet_instances - 获取网络内的云服务器

Router 路由器

*   describe_routers - 获取路由器列表
*   create_routers - 创建新路由器
*   delete_routers - 删除路由器
*   update_routers - 更新路由器的改动
*   poweroff_routers - 关闭
*   poweron_routers - 开启
*   join_router - 连接私有网络和路由器
*   leave_router - 断开私有网络和路由器
*   modify_router_attributes - 修改路由器基本属性
*   describe_router_vxnets - 获取路由器连接的私有网络
*   describe_router_statics - 获取路由器规则，包括端口转发、VPN、隧道、访问控制等
*   modify_router_static_attributes - 修改路由器规则
*   add_router_statics - 添加路由器规则
*   delete_router_statics - 删除规则
*   modify_router_static_entry_attributes - 修改路由器规则的配置项，如 VPN 账号
*   describe_router_static_entries - 获取路由器规则的配置项
*   add_router_static_entries - 添加路由器规则的配置项
*   delete_router_static_entries - 删除路由器规则的配置项

Eip 公网IP

*   describe_eips - 获取公网 IP 列表
*   associate_eip - 绑定公网 IP 到资源
*   dissociate_eips - 解绑公网 IP
*   allocate_eips - 申请公网 IP
*   release_eips - 释放公网 IP
*   change_eips_bandwidth - 调整带宽
*   change_eips_billing_mode - 调整 eip 计费模式
*   modify_eip_attributes - 修改公网 IP 基本属性

LB 负载均衡器

*   describe_loadbalancers - 获取负载均衡器列表
*   create_loadbalancer - 创建负载均衡器
*   delete_loadbalancers - 删除负载均衡器
*   modify_loadbalancer_attributes - 修改负载均衡器基本属性
*   associate_eips_to_loadbalancer - 绑定公网 IP 到负载均衡器
*   dissociate_eips_from_loadbalancer - 解绑公网 IP
*   start_loadbalancers - 开启
*   stop_loadbalancers - 关闭
*   update_loadbalancers - 更新负载均衡器
*   describe_loadbalancer_listeners - 获取负载均衡器监听器列表
*   add_listeners_to_loadbalancer - 添加监听器
*   modify_loadbalancer_listener_attributes - 修改监听器基本属性
*   delete_loadbalancer_listeners - 删除监听器
*   describe_loadbalancer_backends - 获取负载均衡器后端服务列表
*   add_backends_to_listener - 添加后端服务
*   modify_loadbalancer_backend_attributes - 修改后端服务基本属性
*   delete_loadbalancer_backends - 删除后端服务
*   create_loadbalancer_policy - 新建转发策略
*   describe_loadbalancer_policies - 获取转发策略
*   modify_loadbalancer_policy_attributes - 修改转发策略
*   apply_loadbalancer_policy - 使转发策略生效
*   delete_loadbalancer_policies - 删除转发策略
*   add_loadbalancer_policy_rules - 添加转发策略规则
*   describe_loadbalancer_policy_rules - 获取转发策略规则
*   modify_loadbalancer_policy_rule_attributes - 修改转发策略规则
*   delete_loadbalancer_policy_rules - 删除转发策略规则

SSL 证书

*   create_server_certificate - 新建 SSL 证书
*   describe_server_certificates - 获取 SSL 证书
*   modify_server_certificate_attributes - 修改 SSL 证书基本属性
*   delete_server_certificates - 删除 SSL 证书

Monitor 监控

*   get_monitoring_data - 获取云服务器、IP、路由器监控数据
*   get_loadbalancer_monitoring_data - 获取负载均衡器监控数据

Snapshot 备份

*   describe_snapshots - 获取备份列表
*   create_snapshots - 创建备份
*   delete_snapshots - 删除备份
*   apply_snapshots - 基于备份回滚数据
*   modify_snapshot_attributes - 修改备份基本属性
*   capture_instance_from_snapshot - 基于云服务器的备份创建自有镜像
*   create_volume_from_snapshot - 基于硬盘的备份创建新硬盘

DNS Alias 内网域名别名

*   describe_dns_aliases - 获取内网域名别名列表
*   associate_dns_alias - 给资源关联内外域名别名
*   dissociate_dns_aliases - 解除资源的内网域名别名
*   get_dns_label - 获取内网域名的标签，用于组成内网域名

标签

*  describe_tags - 获取标签
*  create_tag - 新建标签
*  delete_tags - 删除标签
*  modify_tag_attributes - 修改标签
*  attach_tags - 绑定标签
*  detach_tags - 解绑标签

SD-WAN

*   describe_wan_accesss - 获取sdwan接入点信息
*   change_wan_access_bandwidth - 修改接入点弹性带宽
*   upgrade_wan_access - 调整接入点基础带宽
*   get_wan_monitor - 获取接入点监控数据

操作日志

*   describe_jobs- 获取资源操作日志，如创建，删除资源等

可用区

*   describe_zones- 获取当前用户可用区

消息中心

*   describe_notification_center_user_posts - 获取消息中心的通知