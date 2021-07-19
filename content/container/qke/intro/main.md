---
title: "QKE 服务"
description: "QKE 服务"
draft: false
enableToc: false
keyword: Kubernetes, KubeSphere
weight: 10
---

[Kubernetes (K8s)](https://kubernetes.io/) 是目前主流的开源容器调度平台，具有自动部署、自动伸缩、应用管理等功能。

[KubeSphere](https://kubesphere.io/) 是在 Kubernetes 之上构建的企业级分布式多租户容器管理平台，帮助企业轻松应对多租户、工作负载和集群管理、服务与网络管理、应用管理、镜像仓库管理和存储管理等业务场景，是 CNCF 会员，已通过 Kubernetes 一致性验证。

QingCloud KubeSphere Engine (QKE) 服务集成了云平台的云服务器、存储、网络等资源，可以在青云平台一键部署高可用的 KubeSphere 集群，支持集群自动巡检和修复，支持一键升级到新版本，工单 24 小时随时响应，并由 KubeSphere 核心团队提供专业支持和服务。

## 功能概览

- 集成 [Calico](https://www.projectcalico.org/)、[Flannel](https://github.com/coreos/flannel) 网络插件供用户选择使用
- 集成 ipvs、iptables 代理模式供用户选择使用
- 集成 [qingcloud-csi](https://github.com/yunify/qingcloud-csi) 存储插件，可以自动创建存储资源，支持基础型、企业型、容量型、企业分布式 NeonSAN 等云平台硬盘，支持硬盘自动扩容和自动迁移
- 集成 [qingcloud-cloud-controller-manager](https://github.com/yunify/qingcloud-cloud-controller-manager) 云平台管理插件，可以自动创建负载均衡器、公网 IP，一键直达公网访问
- 支持一键增删工作节点
- `自 QKE 2.0.0 起` 支持一键部署 GPU 节点
- 可插拔 [OpenPitrix 应用商店](https://kubesphere.com.cn/en/docs/pluggable-components/app-store/)（需通过 [集群参数](/container/qke/admin/main/#服务环境参数设置) 开启），提供应用商店与应用的生命周期管理，支持通过 3 种方式一键部署应用
- 可插拔 [DevOps 系统](https://kubesphere.com.cn/en/docs/pluggable-components/devops/)（需通过 [集群参数](/container/qke/admin/main/#服务环境参数设置) 开启），支持 Binary-to-Image（B2I）、Source-to-Image（S2I）快速制作镜像，提供代码依赖缓存支持，以及代码质量管理与流水线日志等功能
- 可插拔 [日志系统](https://kubesphere.com.cn/en/docs/pluggable-components/logging/)（需通过 [集群参数](/container/qke/admin/main/#服务环境参数设置) 开启），提供了强大且易用的日志查询、接收与管理功能，支持基于多租户的日志查询
- 可插拔 [微服务治理](https://kubesphere.com.cn/en/docs/pluggable-components/service-mesh/)（需通过 [集群参数](/container/qke/admin/main/#服务环境参数设置) 开启），无代码侵入实现熔断、蓝绿发布、流量管控、链路追踪等完善的微服务治理功能
- 可插拔 [通知告警系统](https://kubesphere.com.cn/en/docs/pluggable-components/alerting-notification/)（需通过 [集群参数](/container/qke/admin/main/#服务环境参数设置) 开启），支持灵活的告警策略和告警规则，支持邮件通知，及时处理潜在问题
- 可插拔 [Metrics Server]()（需通过 [集群参数](/container/qke/admin/main/#服务环境参数设置) 开启），支持对 Deployment 设置 [弹性伸缩 (HPA)](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/)，支持根据集群的监控指标如 CPU 使用率和内存使用量来设置弹性伸缩
- 可插拔 [网络策略](https://kubesphere.com.cn/en/docs/pluggable-components/network-policy/)（需通过 [集群参数](/container/qke/admin/main/#服务环境参数设置) 开启），通过配置网络策略，允许在同个集群内实现网络的隔离，也就是可以在某些实例（Pod）之间架起防火墙。
- 可插拔 [审计](https://kubesphere.com.cn/en/docs/pluggable-components/auditing-logs/)（需通过 [集群参数](/container/qke/admin/main/#服务环境参数设置) 开启）。
- 可插拔 [事件](https://kubesphere.com.cn/en/docs/pluggable-components/events/)（需通过 [集群参数](/container/qke/admin/main/#服务环境参数设置) 开启）。
- 支持集群节点[自动弹性伸缩](/operation/autoscaling/intro/intro/)，根据资源指标数据的变化，自动完成节点的增减
- 支持多集群聚合[统一监控面板](/monitor_service/cloudsat/dashboard/intro/intro/)

## 组件版本

| QKE   | KubeSphere | Kubernetes | Docker CE | OS                 |
| ----- | ---------- | ---------- | --------- | ------------------ |
| 3.1.0 | 3.1.0      | 1.19.8     | 20.10.6   | Ubuntu 18.04.3 LTS |
| 3.0.0 | 3.0.0      | 1.17.9     | 19.03.11  | Ubuntu 18.04.3 LTS |
| 2.0.0 | 2.1.1      | 1.16.7     | 19.03.4   | Ubuntu 18.04.3 LTS |
| 1.0.1 | 2.0.2      | 1.13.5     | 18.06.2   | Ubuntu 18.04.2 LTS |
| 1.0.0 | 2.0.1      | 1.13.5     | 18.06.2   | Ubuntu 16.04.6 LTS |

