---
title: "API 概览"
description: 本小节主要介绍边界路由器所提供的 API。 
keyword: 边界路由器,API 概览
draft: false
weight: 10
---

边界路由器提供以下 API 接口供您使用。

## 边界路由器

| API                                                          | 说明                        |
| :----------------------------------------------------------- | :-------------------------- |
| [CreateVpcBorders](../router/create_vpc_borders/) | 创建边界路由器。 |
| [DescribeVpcBorders](../router/describe_vpc_borders/) | 查询边界路由器。 |
| [ConfigBorder](../router/config_border/) | 配置边界路由器。 |
| [ModifyBorderAttributes](../router/modify_border_attributes/) | 修改边界路由器属性。           |
| [AssociateBorder](../router/associate_border/) | 将 VPC 网络关联到边界路由器。 |
| [DissociateBorder](../router/dissociate_border/) | 解除边界路由器关联的 VPC 网络。 |
| [JoinBorder](../router/join_border/) | 私有网络加入边界路由器。 |
| [DescribeBorderVxnets](../router/describe_border_vxnets/) | 查询边界路由器关联的私有网络。 |
| [LeaveBorder](../router/leave_border/) | 私有网络离开边界路由器。 |
| [DeleteVpcBorders](../router/delete_vpc_borders/) | 删除边界路由器。 |

## 静态路由规则

| API                                                          | 说明                         |
| :----------------------------------------------------------- | :--------------------------- |
| [AddBorderStatics](../static_rules/add_border_statics/)      | 添加边界路由器静态路由。     |
| [DescribeBorderStatics](../static_rules/describe_border_statics/) | 查询边界路由器静态路由规则。 |
| [ModifyBorderStaticAttributes](../static_rules/modify_border_static_attributes/) | 修改静态路由属性。           |
| [CancelBorderStaticChanges](../static_rules/cancel_border_static_changes/) | 撤销静态路由的修改。         |
| [DeleteBorderStatics](../static_rules/delete_border_statics/) | 删除边界路由器静态路由。     |
|                                                              |                              |
