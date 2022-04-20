---
title: "API 概览"
description: 本小节主要介绍公网 IP 所提供的 API。 
keyword: 负载均衡器, API 概览
draft: false
weight: 10
---

负载均衡器提供以下 API 接口供您使用。

## 负载均衡器实例

| API                                                          | 说明                       |
| :----------------------------------------------------------- | :------------------------- |
| [CreateLoadBalancer](/network/loadbalancer/api/loadbanlancer/create_lb/) | 创建负载均衡器。           |
| [DescribeLoadBalancers](network/loadbalancer/api/loadbanlancer/describe_lb/) | 查询负载均衡器。           |
| [AssociateEipsToLoadBalancer](/network/loadbalancer/api/loadbanlancer/bind_eips_to_lb/) | 绑定公网 IP 到负载均衡器。 |
| [DissociateEipsFromLoadBalancer](/network/loadbalancer/api/loadbanlancer/dissociate_eips_lb/) | 从负载均衡器解绑公网 IP。  |
| [LoadBalancerJoinVxnet](/network/loadbalancer/api/loadbanlancer/loadbalancer_join_vxnet/) | 负载均衡器加入私有网络。   |
| [LoadBalancerLeaveVxnet](/network/loadbalancer/api/loadbanlancer/loadbalancer_leave_vxnet/) | 负载均衡器离开私有网络。   |
| [ModifyLoadBalancerAttributes](/network/loadbalancer/api/loadbanlancer/modify_lb_attribute/) | 修改负载均衡器名称及描述。 |
| [ResizeLoadBalancers](/network/loadbalancer/api/loadbanlancer/resize_loadbalancers/) | 修改负载均衡器规格类型。   |
| [UpdateLoadBalancers](/network/loadbalancer/api/loadbanlancer/update_loadbalancers/) | 更新负载均衡器配置。       |
| [StartLoadBalancers](/network/loadbalancer/api/loadbanlancer/start_loadbalancers/) | 启动负载均衡器。           |
| [StopLoadBalancers](/network/loadbalancer/api/loadbanlancer/stop_loadbalancers/) | 关闭负载均衡器。           |
| [DeleteLoadBalancers](/network/loadbalancer/api/loadbanlancer/delete_loadbalancers/) | 删除负载均衡器。           |

## 监听器

| API                                                          | 说明                               |
| :----------------------------------------------------------- | :--------------------------------- |
| [AddLoadBalancerListeners](/network/loadbalancer/api/listener/add_lb_listeners/) | 添加负载均衡监听器。               |
| [DescribeLoadBalancerListeners](/network/loadbalancer/api/listener/describe_loadbalancer_listeners/) | 查询负载均衡监听器列表。           |
| [ModifyLoadBalancerListenerAttributes](/network/loadbalancer/api/listener/modify_listener_attribute/) | 修改负载均衡监听器属性。           |
| [AssociateServerCertsToLBListener](/network/loadbalancer/api/listener/bind_certs_to_listener/) | 绑定服务器证书到负载均衡监听器。   |
| [DissociateServerCertsFromLBListener](/network/loadbalancer/api/listener/unbind_certs_from_listener/) | 将服务器证书从负载均衡监听器解绑。 |
| [DeleteLoadBalancerListeners](/network/loadbalancer/api/listener/delete_listeners/) | 删除负载均衡监听器。               |

## 后端服务器

| API                                                          | 说明                               |
| :----------------------------------------------------------- | :--------------------------------- |
| [AddLoadBalancerBackends](/network/loadbalancer/api/backends/add_lb_backends/) | 给负载均衡器的监听器添加后端服务。 |
| [DescribeLoadBalancerBackends](/network/loadbalancer/api/backends/describe_loadbalancer_backends/) | 获取负载均衡器后端服务列表。       |
| [ModifyLoadBalancerBackendAttributes](/network/loadbalancer/api/backends/modify_backend_attribute/) | 修改负载均衡器后端服务的属性。     |
| [DeleteLoadBalancerBackends](/network/loadbalancer/api/backends/delete_backends/) | 删除负载均衡器后端服务。           |

## 服务器证书

| API                                                          | 说明                         |
| :----------------------------------------------------------- | :--------------------------- |
| [CreateServerCertificate](/network/loadbalancer/api/server_certificate/create_server_certificate/) | 创建服务器证书。             |
| [DescribeServerCertificates](/network/loadbalancer/api/server_certificate/describe_server_certificates/) | 获取服务器证书。             |
| [ModifyServerCertificateAttributes](/network/loadbalancer/api/server_certificate/modify_certif_attribute/) | 修改服务器证书的名称和描述。 |
| [DeleteServerCertificates](/network/loadbalancer/api/server_certificate/delete_server_certificates/) | 删除服务器证书。             |

## 转发规则

| API                                                          | 说明                               |
| :----------------------------------------------------------- | :--------------------------------- |
| [CreateLoadBalancerPolicy](/network/loadbalancer/api/forward_rules/create_lb_policy/) | 创建负载均衡器转发策略。           |
| [AddLoadBalancerPolicyRules](/network/loadbalancer/api/forward_rules/add_lb_policy_rules/) | 给转发策略添加多条规则。           |
| [ApplyLoadBalancerPolicy](/network/loadbalancer/api/forward_rules/apply_lb_policy/) | 更新负载转发策略。                 |
| [DescribeLoadBalancerPolicies](/network/loadbalancer/api/forward_rules/describe_lb_policies/) | 获取负载均衡器的转发策略列表。     |
| [DescribeLoadBalancerPolicyRules](/network/loadbalancer/api/forward_rules/describe_lb_policy_rules/) | 获取负载均衡器转的发策略规则列表。 |
| [ModifyLoadBalancerPolicyAttributes](/network/loadbalancer/api/forward_rules/modify_policy_attribute/) | 修改负载均衡器转发策略的属性。     |
| [ModifyLoadBalancerPolicyRuleAttributes](/network/loadbalancer/api/forward_rules/modify_policy_rule_attribute/) | 修改负载均衡器转发策略规则的属性。 |
| [DeleteLoadBalancerPolicies](/network/loadbalancer/api/forward_rules/delete_lb_policies/) | 删除负载均衡器转发策略。           |
| [DeleteLoadBalancerPolicyRules](/network/loadbalancer/api/forward_rules/delete_lb_policy_rules/) | 删除负载均衡器转发策略规则。       |
