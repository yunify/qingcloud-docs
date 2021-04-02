---
title: "支持的服务类别列表"
date: 2020-02-28T10:08:56+09:00
description: 
draft: false
weight: 44
---

**服务类别**指的是 QingCloud 平台为客户提供的一系列云服务，如弹性云服务器服务、虚拟专用网服务等。

若您决定针对性的创建策略以定义某些操作或资源的访问权限，您需要先选择对应的服务类别，然后勾选需要限定的操作，最后根据操作来指定权限范围。

在您编辑[策略](../../manual/policy)或指定[资源标识符 QRN](../../faq/qrn)时，您可能需要了解 QingCloud 平台上的服务类别、区域、操作指令，以及它们与 QingCloud 资源类型之间的关系。

> 只有经过 IAM 集成的服务才可以创建自定义策略，暂未集成的服务将会默认被 IAM 评估拒绝。
>
> 目前并非所有的 QingCloud 服务都可以通过 IAM 来控制访问权限。

## 服务类别

目前 QingCloud IAM 暂时支持以下几种服务类别以及对应 ID：

* 弹性云服务器：ecm
* 虚拟专用网：vpc
* 弹性负载均衡器：elb
* 资源云监控：rcm

> 注：对服务类别的支持将在后续逐步完善，目前暂未支持的云计算服务默认将采取拒绝策略。
>
> 有些全局服务（例如财务、通知、工单、发票等）暂未提供 API 级别的策略配置，您需要到账户类身份详情页[配置控制台可见模块](../../manual/role#为账户类身份配置可见模块)来控制页面级访问。
>
> ![demo1_ConfigModule](../../_images/demo1_ConfigModule.png)
>
> 您可能在使用过程中发现一些服务暂不支持或使用报错，可随时与我们联系。

## 区域和可用区

IAM 身份和 QRN 支持的区域及可用区列表：

| 区域 | Region ID | 可用区 |
| --- | --- | --- |
| 北京3 | PEK3 | 北京3区-B 、北京3区-C 、北京3区-D |
| 广东2 | GD2 | 广东2区-A 、广东2区-B |
| 上海1 | SH1 | 上海1区-A 、上海1区-B |
| 亚太2 | AP2 | 亚太2区-A |
| 雅加达 | AP3 | 雅加达区 |

更多详细信息，请参考[区域和可用区指南](https://docs.qingcloud.com/product/region/#区域和可用区指南)

## 服务操作列表

IAM 支持管理访问控制的操作列表如下：

### 弹性云服务器(ecm)

|API 指令|操作名称|
|:------|----|
|DescribeInstances|查看云服务器|
|DescribeInstancesWithMonitors|查看云服务器监控|
|DescribeInstanceTypes|查看云服务器类型|
|CreateBrokers|访问终端|
|DeleteBrokers|关闭终端|
|DescribeInstanceGroups|查看安置策略组|
|DescribeKeyPairs|查看 SSH 密钥
|DescribeImages|查看镜像|
|DescribeVolumes|查看硬盘|
|DescribeSnapshots|查看备份|
|DescribeNics|查看网卡|
|DescribeEips|查看公网 IP|
|DescribeSecurityGroups|查看防火墙|
|DescribeSecurityGroupSnapshots|查看防火墙备份|
|DescribeSecurityGroupIPSets|查看 IP/端口组集合|
|DescribeSecurityGroupRules|查看防火墙规则|
|DescribeS2Servers|查看共享存储|
|DescribeS2Groups|查看共享存储组|
|DescribeS2Accounts|查看共享存储账户|
|DescribeS2DefaultParameters|查看共享存储目标缺省参数|
|DescribeS2SharedTargets|查看共享存储目标门户组|
|DescribeSchedulers|查看定时器|
|ModifyInstanceAttributes|更改云服务器属性|
|ResetLoginPasswd|重置登录密码|
|RemoveSecurityGroup|删除防火墙|
|RestartInstances|重启云服务器|
|StartInstances|启动云服务器|
|StopInstances|关闭云服务器|
|RemoveSecurityGroupFromResources|移除防火墙|
|CreateInstanceGroups|创建安置策略组|
|DeleteInstanceGroups|删除安置策略组|
|JoinInstanceGroup|分配云服务器到安置策略组|
|ApplyInstanceGroup|更新安置策略组|
|LeaveInstanceGroup|离开安置策略组|
|ModifyInstanceGroupAttributes|修改安置策略组信息|
|CreateKeyPair|创建 SSH 密钥|
|AttachKeyPairs|加载 SSH 密钥|
|DetachKeyPairs|卸载 SSH 密钥|
|ModifyKeyPairAttributes|更改 SSH 密钥属性|
|DeleteKeyPairs|删除 SSH 密钥|
|ModifyImageAttributes|更改镜像属性|
|AttachVolumes|加载硬盘|
|DetachVolumes|卸载硬盘|
|ModifyVolumeAttributes|更改硬盘属性|
|ModifySnapshotAttributes|更改备份属性|
|ModifyEipAttributes|更改公网 IP 属性|
|AssociateEip|绑定公网 IP|
|DissociateEips|解绑公网 IP|
|CreateSecurityGroup|创建防火墙规则|
|CopySecurityGroups|复制防火墙规则|
|ModifySecurityGroupAttributes|更改防火墙属性|
|DeleteSecurityGroups|删除防火墙|
|AddSecurityGroupRules|添加防火墙规则|
|ModifySecurityGroupRuleAttributes|更改防火墙规则属性|
|ApplySecurityGroup|应用防火墙规则|
|ApplySecurityGroupToResources|应用防火墙规则到资源|
|DeleteSecurityGroupRules|删除防火墙规则|
|CreateSecurityGroupSnapshot|创建防火墙备份|
|RollbackSecurityGroup|回滚防火墙|
|DeleteSecurityGroupSnapshots|删除防火墙备份|
|CreateSecurityGroupIPSet|创建 IP/端口组集合|
|CopySecurityGroupIPSets|复制 IP/端口组集合|
|ModifySecurityGroupIPSetAttributes|修改 IP/端口组集合|
|ApplySecurityGroupIPSets|应用防火墙 IP/端口集合|
|DeleteSecurityGroupIPSets|删除 IP/端口组集合|
|ModifyS2ServerAttributes|更改共享存储属性|
|PowerOnS2Servers|启动共享存储|
|PowerOffS2Servers|关闭共享存储|
|UpdateS2Servers|更新共享存储|
|ModifyS2Account|更改共享存储账户|
|AssociateS2AccountGroup|关联共享存储账户组|
|DissociateS2AccountGroup|解绑共享存储账户组|
|ModifyS2Group|更改共享存储组|
|DetachFromS2SharedTarget|关联目标门户组|
|ModifyS2SharedTargetAttributes|更改目标门户组属性|
|EnableS2SharedTargets|启用目标门户组|
|DisableS2SharedTargets|禁用目标门户组|
|AttachToS2SharedTarget|解绑目标门户组|
|ChangeS2ServerVxnet|切换私有网络|
|CreateScheduler|创建定时器|
|ModifySchedulerAttributes|更改定时器属性|
|DeleteSchedulers|删除定时器|
|CreateNics|创建网卡|
|AttachNics|绑定网卡|
|DetachNics|解绑网卡|
|ModifyNicAttributes|修改网卡属性|
|RunInstances|创建云服务器|
|TerminateInstances|删除云服务器|
|ResizeInstances|更改云服务器配置|
|RescueInstances|救援云服务器|
|UnrescueInstances|取消救援云服务器|
|ResetInstances|重置系统|
|CaptureInstance|制作新镜像|
|DeleteImages|删除镜像|
|CreateVolumes|创建硬盘|
|CloneVolumes|克隆硬盘|
|ResizeVolumes|扩容硬盘|
|DeleteVolumes|删除硬盘|
|CreateSnapshots|创建备份|
|DeleteSnapshots|删除备份|
|ApplySnapshots|应用备份|
|AllocateEips|创建公网 IP|
|ReleaseEips|释放公网 IP|
|ChangeEipsBandwidth|调整公网 IP 带宽|
|ChangeEipsBillingMode|修改公网 IP 计费模式|
|CreateS2Server|创建共享存储|
|ScaleOutS2Server|添加S2节点|
|ScaleInS2Server|删除S2节点|
|ResumeS2Servers|
|CeaseS2Servers|销毁共享存储|
|SuspendS2Servers|
|ResizeS2Servers|更改共享存储配置|
|DeleteS2Servers|删除共享存储|
|CreateS2Group|
|DeleteS2Groups|删除共享存储组|
|CreateS2Account|
|DeleteS2Accounts|删除共享存储账户|
|CreateS2SharedTarget|
|DeleteS2SharedTargets|删除目标门户组|
|DeleteNics|删除网卡|

### 虚拟专用网(vpc)

|API 指令|操作名称|
|:------|----|
|DescribeRouters|查看路由器|
|DescribeRouteTables|查看路由表|
|DescribeVpcBorders|查看边界路由器|
|DescribeRouterStatics|查看路由器详细配置|
|DescribeRouterVxnets|查看路由器下的私有网络|
|DescribeVxnets|查看私有网络|
|DescribeVxnetInstances|查看私有网络下云服务器|
|DescribeVxnetResources|查看私有网络下资源|
|DescribeRouterStaticEntries|查看路由器规则条目|
|GetVPNCerts|查看 VPN 证书|
|JoinRouter|连接路由器|
|LeaveRouter|离开路由器|
|ModifyRouterAttributes|更改路由器属性|
|AddRouterStatics|添加路由器详细配置|
|ModifyRouterStaticAttributes|更改路由器详细配置|
|DeleteRouterStatics|删除路由器详细配置|
|CreateVxnets|创建私有网络|
|DeleteVxnets|删除私有网络|
|ModifyVxnetAttributes|更改私有网络属性|
|JoinVxnet|加入网络|
|LeaveVxnet|离开网络|
|AddRouterStaticEntries|添加路由器规则条目|
|ModifyRouterStaticEntryAttributes|修改路由器规则条目属性|
|DeleteRouterStaticEntries|删除路由器规则条目|
|UpdateRouters|更新路由器|
|CreateRouteTable|创建路由表|
|CreateVpcBorders|创建边界路由器|
|CreateRouters|创建路由器|
|ResizeRouters|更改路由器类型|
|PowerOffRouters|关闭路由器|
|PowerOnRouters|启动路由器|
|DeleteRouters|删除路由器|

### 弹性负载均衡器(elb)

|API 指令|操作名称|
|:------|----|
|DescribeLoadBalancers|查看负载均衡器|
|DescribeLoadBalancerPolicies|查看转发策略|
|DescribeLoadBalancerListeners|查看负载均衡器监听器|
|DescribeLoadBalancerBackends|查看负载均衡器后端|
|DescribeLoadBalancerPolicyRules|查看转发策略规则|
|DescribeLoadBalancerPolicyRewriteRules|查看转发策略重写规则|
|DescribeWAFDomainPolicies|查询WAF域名防护策略|
|DescribeWAFParameterGroups|查询WAF配置组|
|DescribeWAFParameters|查询WAF配置组参数|
|DescribeWAFRules|
|DescribeWAFRuleGroups|
|ModifyLoadBalancerAttributes|更改负载均衡器属性|
|ResizeLoadBalancers|更新负载均衡器配置|
|AddLoadBalancerListeners|添加负载均衡器监听器|
|ModifyLoadBalancerListenerAttributes|更改负载均衡器监听器属性|
|DeleteLoadBalancerListeners|删除负载均衡器监听器|
|AddLoadBalancerBackends|添加负载均衡器后端|
|ModifyLoadBalancerBackendAttributes|更改负载均衡器后端属性|
|DeleteLoadBalancerBackends|删除负载均衡器后端|
|AssociateEipsToLoadBalancer|绑定公网 IP 到负载均衡器|
|DissociateEipsFromLoadBalancer|解绑负载均衡器公网IP|
|UpdateLoadBalancers|更新负载均衡器|
|CreateLoadBalancerPolicy|创建转发策略|
|AddLoadBalancerPolicyRules|添加转发策略规则|
|AddLoadBalancerPolicyRewriteRules|添加转发策略重写规则|
|ModifyLoadBalancerPolicyAttributes|更改转发策略属性|
|ModifyLoadBalancerPolicyRuleAttributes|更改转发策略规则属性|
|ModifyLoadBalancerPolicyRewriteRuleAttributes|修改转发策略重写规则|
|DeleteLoadBalancerPolicyRewriteRules|删除转发策略重写规则|
|DeleteLoadBalancerPolicyRules|删除转发策略规则|
|ApplyLoadBalancerPolicy|应用转发策略|
|DeleteLoadBalancerPolicies|删除转发策略|
|DetachWAFDomainPolicies|解除域名防护策略组|
|AttachWAFDomainPolicies|加载域名防护策略组|
|ModifyWAFParameterGroupAttributes||
|AddWAFRules||
|DeleteWAFRules||
|UpdateWAFParameters||
|ApplyWAFParameterGroup|应用 WAF 域名防护策略|
|ResetWAFParameters||
|CreateWAFParameterGroup|创建 WAF 配置组|
|DeleteWAFParameterGroups||
|CreateWAFRuleGroup||
|DeleteWAFRuleGroups||
|CreateLoadBalancer|创建负载均衡器|
|StopLoadBalancers|关闭负载均衡器|
|StartLoadBalancers|启动负载均衡器|
|DeleteLoadBalancers|删除负载均衡器|
|CreateWAFDomainPolicy|创建域名防护策略
|DeleteWAFDomainPolicies|创建 WAF 域名防护策略组|

### 资源云监控(rcm)

|API 指令|操作名称|
|:------|----|
|GetMonitor|查看监控|
|GetMonitors|查看多组监控|
|GetResourceMonitor|查看资源监控|
|GetLoadBalancerMonitor|查看负载均衡器监控|
|GetLoadBalancerWafEventData||
|GetClusterMonitor|查看集群监控|
|DescribeAlarms||
|DescribeAlarmPolicies|查看告警策略|
|DescribeAlarmHistory||
|DescribeAutoScalingPolicies|查看自动伸缩策略|
|CreateAlarmPolicy|创建告警策略|
|ModifyAlarmPolicyAttributes|更改告警策略属性|
|DeleteAlarmPolicies|删除告警策略|
|CreateAutoScalingPolicy|创建自动伸缩策略|
|ModifyAutoScalingPolicyAttributes|更改自动伸缩策略属性|
|DeleteAutoScalingPolicies|删除自动伸缩策略|
