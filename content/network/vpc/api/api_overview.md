---
title: "API 概览"
description: 本小节主要介绍 VPC 网络所提供的 API。 
keyword: VPC, API 概览
draft: false
weight: 06
---

VPC 网络提供以下 API 接口供您使用。

## VPC 网络接口

| API                                                          | 说明                                    |
| :----------------------------------------------------------- | :-------------------------------------- |
| [CreateRouters](../vpc_api/create_routers/)                  | 创建 VPC 网络。                         |
| [DescribeRouters](../vpc_api/describe_routers/)              | 获取 VPC 网络列表。                     |
| [ModifyRouterAttributes](../vpc_api/modify_router_attributes/) | 修改 VPC 网络的配置。                   |
| [UpdateRouters](../vpc_api/update_routers/)                  | 更新 VPC 网络配置后，使配置生效。       |
| [JoinRouter](../vpc_api/join_router/)                        | 将私有网络加入 VPC 网络。               |
| [LeaveRouter](../vpc_api/leave_router/)                      | 私有网络离开 VPC 网络。                 |
| [DescribeRouterVxnets](../vpc_api/describe_router_vxnets/)   | 获取 VPC 网络下的私有网络。             |
| [DeleteRouters](../vpc_api/delete_routers/)                  | 删除 VPC 网络。                         |
| [AddRouterStatics](../vpc_api/add_router_statics/)           | 增加一项或多项 VPC 网络规则。           |
| [AddRouterStaticEntries](../vpc_api/add_router_static_entries/) | 增加一条 VPC  网络规则条目。            |
| [CopyRouterStatics](../vpc_api/copy_router_statics/)         | 把源 VPC  网络规则复制给目的 VPC 网络。 |
| [DescribeRouterStatics](../vpc_api/describe_router_statics/) | 获取 VPC 网络的规则。                   |
| [DescribeRouterStaticEntries](../vpc_api/describe_router_static_entries/) | 获取 VPC 网络规则条目。                 |
| [ModifyRouterStaticAttributes](../vpc_api/modify_router_static_attributes/) | 修改 VPC 网络规则。                     |
| [ModifyRouterStaticEntryAttributes](../vpc_api/modify_router_static_entry_attributes/) | 修改 VPC 网络路由规则条目属性。         |
| [DeleteRouterStatics](../vpc_api/delete_router_statics/)     | 删除一项或多项 VPC 网络规则。           |
| [DeleteRouterStaticEntries](../vpc_api/delete_router_static_entries/) | 删除一条或多条 VPC 网络规则条目。       |

## 私有网络接口

| API                                                          | 说明                         |
| :----------------------------------------------------------- | :--------------------------- |
| [CreateVxnets](../vxnet_api/create_vxnets/)                  | 创建私有网络。               |
| [DescribeVxnets](../vxnet_api/describe_vxnets/)              | 获取私有网络列表。           |
| [JoinVxnet](../vxnet_api/join_vxnet/)                        | 将云服务器绑定到私有网络。   |
| [LeaveVxnet](../vxnet_api/leave_vxnet/)                      | 将云服务器从私有网络中解绑。 |
| [DescribeVxnetInstances](../vxnet_api/describe_vxnet_instances/) | 获取私有网络中的云服务器。   |
| [ModifyVxnetAttributes](../vxnet_api/modify_vxnet_attributes/) | 修改私有网络的名称和描述。   |
| [DeleteVxnets](../vxnet_api/delete_vxnets/)                  | 删除私有网络。               |



## 路由表接口

| API                                                          | 说明                               |
| :----------------------------------------------------------- | :--------------------------------- |
| [CreateRouteTable](../routing_table/create_route_table/)     | 创建路由表。                       |
| [DescribeRouteTables](../routing_table/describe_route_tables/) | 获取路由表的配置信息。             |
| [ModifyRouteTableAttributes](../routing_table/modify_route_table_attributes/) | 修改一个路由表的配置。             |
| [AssociateRouteTable](../routing_table/associate_route_table/) | 将路由表绑定到某个资源。           |
| [DissociateRouteTable](../routing_table/dissociate_route_table/) | 将路由表与资源解绑。               |
| [DescribeRoutingTableResources](../routing_table/describe_routing_table_resources/) | 获取路由表以及资源的对应关系。     |
| [UpdateRouteTable](../routing_table/update_route_table/)     | 使路由表的配置修改生效。           |
| [DeleteRouteTables](../routing_table/delete_route_tables/)   | 删除路由表。                       |
| [AddRoutes](../routing_table/add_routes/)                    | 创建一条路由表规则。               |
| [DescribeRoutes](../routing_table/describe_routes/)          | 获取一个或者多个路由表的配置信息。 |
| [ModifyRouteAttributes](../routing_table/modify_route_attributes/) | 修改一条路由表规则。               |
| [RemoveRoutes](../routing_table/remove_routes/)              | 删除一条或者多条路由表规则。       |

## 网络流量镜像接口

| API                                                     | 说明                                                 |
| :------------------------------------------------------ | :--------------------------------------------------- |
| [CreateSpan](../span/create_span/)                      | 创建一个 SPAN。                                      |
| [DescribeSpans](../span/describe_spans/)                | 获取一个或多个 SPAN 的配置。                         |
| [ModifySpanAttributes](../span/modify-span-attributes/) | 修改 SPAN 属性。                                     |
| [AddSpanMembers](../span/add-span-members/)             | 添加 SPAN 成员，成员可以是 instance id 或 vxnet id。 |
| [RemoveSpanMembers](../span/remove-span-members/)       | 移除 SPAN 成员。                                     |
| [UpdateSpan](../span/update-span/)                      | 修改 SPAN 属性后，应用变更到所有云服务器。           |
| [DeleteSpans](../span/delete_spans/)                    | 删除一个或多个 SPAN。                                |

## 内网域名别名

| API                                                          | 说明                         |
| :----------------------------------------------------------- | :--------------------------- |
| [GetDNSLabel](../dns_alias/get_dns_label/)                   | 获取内网域名标记及域名名称。 |
| [DescribeDNSAliases](../dns_alias/describe_dns_aliases/)     | 获取内网域名别名列表。       |
| [AssociateDNSAlias](../dns_alias/associate_dns_alias/)       | 绑定内网域名别名到资源。     |
| [DissociateDNSAliases](../dns_alias/dissociate_dns_aliases/) | 从资源上解绑内网域名。       |
