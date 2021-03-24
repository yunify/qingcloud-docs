---
title: "CLI配置"
description: test
draft: false
---



## 命令自动补全

qingcloud-cli 包含命令自动补全功能 (目前不支持 Windows 系统)。

如果补全功能没有自动生效，请手动激活一下:

```
$ source ~/.bashrc
```

如果还不行，则输入 complete 命令:

```
$ complete -C qingcloud_completer qingcloud
```

并可将这条命令加到你的启动脚本中 (如 ~/.bash_profile) 方便以后使用。

## 新手指南

使用 qingcloud-cli 必需一个配置文件，配置你自己的 qy_access_key_id 和 qy_secret_access_key 以及 zone 。比如:

```
qy_access_key_id: 'QINGCLOUDACCESSKEYID'
qy_secret_access_key: 'QINGCLOUDSECRETACCESSKEYEXAMPLE'
zone: 'pek3'
```

access key 可在 [青云控制台](https://console.qingcloud.com/access_keys/) 申请。zone 是你的资源所在的节点，可在控制台切换节点的地方查看，如 pek3, gd2, ap2a 等。

配置文件默认放在 ~/.qingcloud/config.yaml ，也可在每次执行命令时以参数 -f /path/to/config 方式来指定，例如:

```
qingcloud iaas describe-instances -f '/root/qingcloud_config.yaml'
```

如果只是输入 qingcloud 并回车，会列出所有支持的命令， 每个命令都有帮助文档，可以通过 -h 参数打印出来，如:

```
qingcloud iaas run-instances -h
```

## 输入参数

qingcloud-cli 的参数只有 int 和 string 类型。如果参数支持传递列表，则多个值之间以 _英文逗号_ ”,” 分隔。如:

```
qingcloud iaas describe-keypairs -k 'kp-bn2n77ow,kp-b2ivaf15' -L 2
```

有时参数需要是 JSON 格式的字符串，如:

```
qingcloud iaas add-router-statics -r rtr-ba2nbge6 -s '[{"static_type":1,"val1":"80","val2":"192.168.99.2","val3":"8000"}]'
```

## 命令输出

Command 的返回结果为 JSON 结构。例如 describe-keypair 的返回结果:

```
{
  "action":"DescribeKeyPairsResponse",
  "total_count":2,
  "keypair_set":[
    {
      "description":null,
      "encrypt_method":"ssh-rsa",
      "keypair_name":"kp 1",
      "instance_ids":[
        "i-ogbndull"
      ],
      "create_time":"2013-08-30T05:13:50Z",
      "keypair_id":"kp-bn2n77ow",
      "pub_key":"AAAAB3..."
    },
    {
      "description":null,
      "encrypt_method":"ssh-rsa",
      "keypair_name":"kp 2",
      "create_time":"2013-08-31T05:13:50Z",
      "keypair_id":"kp-b2ivaf15",
      "pub_key":"AAAAB3..."
    }
  ],
  "ret_code":0
}
```

## 命令列表

最新版本 CLI 支持的操作命令

**云服务器**

| 命令 | 描述  | 命令 | 描述 |
| :---- | :---- | :---- | :---- |
| describe-instances | 获取云服务器列表 | run-instances | 创建云服务器 |
| start-instances | 开启云服务器 | stop-instances | 关闭云服务器 |
| restart-instances | 重启云服务器 | terminate-instances | 销毁云服务器 |
| resize-instances | 修改云服务器配置 | reset-instances | 重置操作系统 |
| clone-instances | 克隆云服务器 | modify-instance-attributes | 修改云服务器基本属性 |



**硬盘**

| 命令 | 描述  | 命令 | 描述 |
| :---- | :---- | :---- | :---- |
| describe-volumes | 获取硬盘列表 | create-volumes | 创建硬盘 |
| attach-volumes | 加载硬盘到云服务器 | detach-volumes | 从云服务器卸载硬盘 |
| resize-volumes | 扩容硬盘 | modify-volume-attributes | 修改硬盘基本属性 |
| delete-volumes | 删除硬盘 | clone-volumes | 克隆硬盘 |

**私有网络**

| 命令 | 描述  | 命令 | 描述 |
| :---- | :---- | :---- | :---- |
| describe-vxnets | 获取私有网络列表 | describe-vxnet-instances | 获取私有网络内的云服务器 |
| join-vxnet | 将云服务器加入到私有网络 | leave-vxnet | 将云服务器从私有网络离开 |
| create-vxnets | 创建私有网络 | delete-vxnets | 删除私有网络 |
| modify-vxnet-attributes | 修改私有网络基本属性 |   |   |

**路由器**

| 命令 | 描述  | 命令 | 描述 |
| :---- | :---- | :---- | :---- |
| describe-routers | 获取路由器列表 | describe-router-vxnets | 获取与路由器相连的私有网络列表 |
| create-routers | 创建路由器 | delete-routers | 销毁路由器 |
| join-router | 将私有网络连接到路由器 | leave-router | 将私有网络从路由器上断开 |
| poweron-routers | 启动路由器 | poweroff-routers | 关闭路由器 |
| modify-router-attributes | 修改路由器基本属性 | update-routers | 更新路由器配置 |
| describe-router-statics | 获取路由器规则 | add-router-statics | 给路由器添加 DHCP，VPN，端口转发等规则 |
| modify-router-static-attributes | 修改路由器规则的内容 |   |   |

**公网IP**

| 命令 | 描述  | 命令 | 描述 |
| :---- | :---- | :---- | :---- |
| allocate-eips | 从IP池中分配一个IP | describe-eips | 获取公网IP列表 |
| associate-eip | 将公网IP绑定到云服务器 | dissociate-eips | 解绑公网IP |
| change-eips-bandwidth | 调整公网IP带宽 | change-eips-billing-mode | 修改公网IP计费模式 |
| modify-eip-attributes | 修改公网IP基本属性 | release-eips | 释放公网IP |

**防火墙**

| 命令 | 描述  | 命令 | 描述 |
| :---- | :---- | :---- | :---- |
| describe-security-groups | 获取防火墙列表 | modify-security-group-attributes | 修改防火墙基本属性 |
| create-security-group | 创建防火墙 | delete-security-groups | 删除防火墙 |
| describe-security-group-rules | 获取防火墙规则列表 | modify-security-group-rule-attributes | 修改防火墙规则 |
| add-security-group-rules | 添加防火墙规则 | delete-security-group-rules | 删除防火墙规则 |
| apply-security-group | 应用防火墙规则 | create-security-group-ipset | 创建防火墙 IP /端口集合 |
| delete-security-group-ipsets | 删除一个或多个防火墙 IP /端口集合 | describe-security-group-ipsets | 获取一个或多个 IP /端口集合信息 |
| modify-security-group-ipset-attributes | 修改防火墙 IP /端口集合的名称和描述 |   |   |

**SSH 密钥**

| 命令 | 描述  | 命令 | 描述 |
| :---- | :---- | :---- | :---- |
| describe-keypairs | 获取密钥列表 | modify-keypair-attributes | 修改密钥基本属性 |
| create-keypair | 新加密钥对 | delete-keypairs | 删除密钥 |
| attach-keypairs | 加载密钥到云服务器 | detach-keypairs | 从云服务器卸载密钥 |

**镜像**

| 命令 | 描述  | 命令 | 描述 |
| :---- | :---- | :---- | :---- |
| describe-images | 获取自有镜像列表 | modify-image-attributes | 修改自有镜像的基本属性 |
| capture-instance | 将关闭的云服务器捕获为自有镜像 | delete-images | 删除自有镜像 |

**负载均衡器**

| 命令 | 描述  | 命令 | 描述 |
| :---- | :---- | :---- | :---- |
| describe-loadbalancers | 获取负载均衡器列表 | modify-loadbalancer-attributes | 修改负载均衡器的基本属性 |
| create-loadbalancer | 创建负载均衡器 | delete-loadbalancers | 删除负载均衡器 |
| start-loadbalancers | 启动负载均衡器 | stop-loadbalancers | 关闭负载均衡器 |
| associate-eips-to-loadbalancer | 给负载均衡器绑定公网IP | dissociate-eips-from-loadbalancer | 将公网IP从负载均衡器上解绑 |
| add-loadbalancer-listeners | 添加监听器 | delete-loadbalancer-listeners | 删除监听器 |
| add-loadbalancer-backends | 添加监听器下的后端服务 | delete-loadbalancer-backends | 删除后端服务 |
| describe-loadbalancer-listeners | 获取负载均衡器监听器列表 | describe-loadbalancer-backends | 获取负载均衡器后端服务列表 |
| modify-loadbalancer-listener-attributes | 修改监听器基本属性 | modify-loadbalancer-backend-attributes | 修改后端服务基本属性 |
| update-loadbalancers | 更新负载均衡器配置 |   |   |

**资源监控**

| 命令 | 描述  | 命令 | 描述 |
| :---- | :---- | :---- | :---- |
| get-monitoring-data | 获取云服务器、公网、路由器的监控 | get-loadbalancer-monitoring-data | 获取负载均衡器的监控 |

**备份**

| 命令 | 描述  | 命令 | 描述 |
| :---- | :---- | :---- | :---- |
| describe-snapshots | 获取备份列表 | modify-snapshot-attributes | 修改备份的基本属性 |
| create-snapshots | 创建备份 | delete-snapshots | 删除备份 |
| create-volume-from-snapshot | 从备份创建硬盘 | capture-instance-from-snapshot | 从备份创建自有镜像 |
| apply-snapshots | 回滚到指定备份点 |   |   |

**SD-WAN**

| 命令 | 描述  | 命令 | 描述 |
| :---- | :---- | :---- | :---- |
| describe-wan-accesss | 获取sdwan接入点信息 | change-wan-access-bandwidth | 修改接入点弹性带宽 |
| upgrade-wan-access | 调整接入点基础带宽 | get-wan-monitor | 获取接入点监控数据 |

**操作日志**

| 命令 | 描述  | 命令 | 描述 |
| :---- | :---- | :---- | :---- |
| describe-jobs | 获取日志列表 |   |   |