---
title: "API 概览"
description: 本小节主要介绍 NAT 网关所提供的 API。 
keyword: QingCloud, 青云, 云计算, NAT, API 概览
draft: false
weight: 06
---

NAT 网关提供以下 API 接口供您使用。

## NAT 网关接口

| API                                                          | 说明                      |
| :----------------------------------------------------------- | :------------------------ |
| [CreateNFV](../nat/create_nfv/)                              | 创建 NAT 网关。           |
| [DescribeNFVs](../nat/describe_nfvs/)                        | 获取 NAT 网关的信息。     |
| [DissociateEipsFromNFV](../nat/dissociate_eips_from_nfv/)    | 解绑 NAT 网关的公网 IP。  |
| [AssociateEipsToNFV](../nat/associate_eips_to_nfv/)          | 绑定公网 IP 到 NAT 网关。 |
| [UpdateNFVs](../nat/update_nfvs/)                            | 更新 NAT 网关。           |
| [ResizeNFV](../nat/resize_nfv/)                              | NAT 网关扩缩容。          |
| [StartNFVs](../nat/start_nfvs/)                              | 启动 NAT 网关。           |
| [StopNFVs](../nat/stop_nfvs/)                                | 关闭 NAT 网关。           |
| [UpgradeNFV](../nat/upgrade_nfv/)                            | 升级 NAT 网关版本。       |
| [NFVJoinVxnets](../nat/nfv_join_vxnets/)                     | NAT 网关绑定到私有网络。  |
| [NFVLeaveVxnets](../nat/nfv_leave_vxnets/)                   | NAT 网关解绑私有网络。    |
| [ModifyNFVAttributes](../nat/modify_nfv_attributes/)         | 修改 NAT 网关属性。       |
| [ModifyNFVSecurityGroups](../nat/modify_nfv_security_groups/) | 修改 NAT 网关的安全组。   |
| [DeleteNFVs](../nat/delete_nfvs/)                            | 删除 NAT 网关。           |
| [GetNFVMonitor](../nat/get_nfv_monitor/)                     | 获取 NAT 网关的监控数据。 |

## SNAT 接口

| API                                               | 说明             |
| :------------------------------------------------ | :--------------- |
| [AddSnatRule](../snat/add_snat_rule/)             | 新增 SNAT 规则。 |
| [DescribeSnatRules](../snat/describe_snat_rules/) | 查询 SNAT 规则。 |
| [UpdateSnatRule](../snat/update_snat_rule/)       | 更新 SNAT 规则。 |
| [DeleteSnatRules](../snat/delete_snat_rules/)     | 删除 SNAT 规则。 |



## DNAT 接口

| API                                               | 说明             |
| :------------------------------------------------ | :--------------- |
| [AddDnatRule](../dnat/add_dnat_rule/)             | 新增 DNAT 规则。 |
| [DescribeDnatRules](../dnat/describe_dnat_rules/) | 查询 DNAT 规则。 |
| [UpdateDnatRule](../dnat/update_dnat_rule/)       | 更新 DNAT 规则。 |
| [DeleteDnatRules](../dnat/delete_dnat_rules/)     | 删除 DNAT 规则。 |

