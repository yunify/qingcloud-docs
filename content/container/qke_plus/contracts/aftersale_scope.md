---
title: "容器引擎 QKE 售后服务范围"
draft: false
weight: 10
keyword: QKE, 容器引擎,售后服务
---

## 背景说明

容器引擎 (QingCloud Kubernetes Engine，简称 QKE) 是在 QingCloud 云平台上构建的企业级分布式多租户的 Kubernetes 容器服务，集成了 QingCloud 云平台的云服务器、存储、网络等资源，可一键部署高可用、高性能的 Kubernetes 集群。为确保客户的基本使用保障，特此制定此协议，提供有针对性的商务条款和服务保障。

## 服务详情

QKE 集成了 QingCloud 云平台的云服务器、存储、网络，可一键部署高可用、高性能的 Kubernetes 集群。用户可选择安装开源产品 KubeSphere 对集群进行可视化管理，并安装内置组件进行多集群管理、自动伸缩、运维监控、CI/CD、微服务治理、应用管理、服务与网络管理等。

## 服务适用场景

此协议适用于客户在 QingCloud 公有云平台创建的 QKE 集群，协议约定了授权范围内的 QKE 集群所享受的厂商服务，包括集群部署、升级、扩缩容，以及集群本身的服务可用性的运维保障。

## 服务前提

- QKE 集群是在 QingCloud 公有云平台购买的容器引擎 (QingCloud Kubernetes Engine，简称 QKE)服务。
- Kubernetes 的组件是 QKE 集群集成的原生组件。
- 容器运行时是 QKE 集群集成的原生组件。
- CSI 插件在 QKE 官方支持的列表中。
- CNI 插件在 QKE 官方支持的列表中。

## 工单支持的服务范围

- QKE 集群控制节点管理组件的可用性保障，包括 API server、Controller manager、Scheduler、etcd。
- QKE 集群工作节点管理组件的基本可用性保障，包括 kubelet、kube-proxy、内置的容器运行时。
- 由 QKE 集群提供的已安装插件的可用性及服务保障，如网络插件（CNI）、存储插件（CSI）等。
- QingCloud 公有云平台提供的云服务器(含操作系统及内核)、网络、存储等基础资源的可用性及服务保障。
- 关联到 QKE 集群的其他由 QingCloud 官方提供的应用服务的可用性及服务保障，如外置的 ELK 集群、Harbor 集群等。
- 官方提供的 QKE 集群升级服务的可用性及服务保障。

## 不予服务的范围

- QKE 产品功能使用培训支持，包括但不限于 镜像构建、Kubernetes、KubeSphere 的一对一人工使用指导。
- 内置开源产品 KubeSphere 引起的集群服务及客户业务异常或不可用，包括但不限于 KubeSphere 提供的服务治理、监控告警、日志审计、DevOps、OpenPitrix应用商店及应用商店中的默认应用。
- 用户使用不当或滥用资源引起的 QKE 集群组件不可用，如：Pod 资源 limit 和 request 设置不合理、部署容器数量超过集群节点允许的最大容器数量、集群节点的 SSH 密码过弱或把节点 SSH 暴露到公网导致节点中毒等。
- 客户自建的应用服务引起的 QKE 集群服务或客户业务不可用，如集群外部自建的应用服务导致的集群服务异常、集群内部自建的应用服务导致的集群节点异常。
- 客户自身业务在运行周期中，因应用使用的 K8s 资源对象异常或不可用，导致业务卡顿、中断，包括但不限于工作负载（Deployment/Daemonset/Statefulset/Job/Cronjob/Pod）、持久化存储(PV/PVC)、服务（Service）、应用路由(Ingress)。
- 被纳管的 KubeSphere Member 集群（即需要添加到 KubeSphere 控制台的客户业务集群）为非 QingCloud 公有云平台购买的容器引擎服务。

## QingCloud 公有云容器产品服务支持列表

QingCloud 公有云平台容器产品包含如下：

- **QingCloud Kubenertes**（已下线）：青云发布的基于 QingCloud 公有云的 Kubernetes 产品，用户可通过 QingCloud 公有云基础资源创建一个 kubernetes 集群。

- **容器引擎 QKE**（旧版）：基于 QingCloud 公有云基础资源的容器服务，可安装 KubeSphere 开源产品，创建并管理 Kubernetes 集群。

- **容器引擎 QKE**：基于 QingCloud 公有云基础资源的容器服务，可快捷安装 KubeSphere 开源产品、QKCP，并对接 QingCloud 公有云上其他应用和服务，可一键部署高可用、高性能的 Kubernetes 集群。

| 服务支持项                                                   | QingCloud Kubernetes | 容器引擎 QKE （旧版） | 容器引擎 QKE | 购买工单获取支持 |
| :----------------------------------------------------------- | :------------------- | :-------------------- | :----------- | :--------------- |
| 控制节点管理组件可用性保障（包括 API server、Controller manager、Scheduler、etcd） | ✅                    | ✅                     | ✅            | N/A              |
| 工作节点管理组件可用性保障（包括 kubelet、kube-proxy、内置的容器运行时） | ✅                    | ✅                     | ✅            | N/A              |
| 集群官方插件可用性保障（包括网络插件、存储插件）             | ✅                    | ✅                     | ✅            | N/A              |
| 使用的 QingCloud 公有云平台提供的基础资源可用性保障（包括云服务器(含操作系统及内核)、网络、存储） | ✅                    | ✅                     | ✅            | N/A              |
| 关联的由 QingCloud 官方提供的应用服务可用性保障（包括弹性伸缩、告警管理、IAM、ELK集群、Harbor集群） | ✅                    | ✅                     | ✅            | N/A              |
| 控制台开放的滚动升级服务可用性保障                           | ✅                    | ✅                     | ✅            | N/A              |
| 由官方提供的内置 KubeSphere 的安装、版本升级                 | ❌                    | ✅                     | ✅            | N/A              |
| 由官方提供的生内置 KubeSphere 内置组件安装                   | ❌                    | ✅                     | ✅            | N/A              |
| 基于KubeSphere 组件部署业务遇到的问题处理                    | ❌                    | ❌                     | ❌            | 支持             |
| 由官方提供的内置 QKCP 的安装、版本升级                       | ❌                    | ❌                     | ✅            | N/A              |
| 由官方提供的内置 QKCP 内置组件安装                           | ❌                    | ❌                     | ✅            | N/A              |
| 基于 QKCP 组件部署业务遇到的问题处理                         | ❌                    | ❌                     | ✅            | N/A              |
| 由官方提供的内置 KubeSphere 升级为内置 QKCP                  | ❌                    | ❌                     | ✅            | N/A              |
| KubeSphere 的使用，以及当前 QKE 版本中出现的 KubeSphere 的BUG修复 | ❌                    | ❌                     | ❌            | 支持             |
| 内置 QKCP 引起的集群服务及客户业务异常或不可用               | ❌                    | ❌                     | ✅            | N/A              |
| 客户业务中使用到的 K8s 资源对象的异常恢复（非 QKE 集群组件或插件以及公有云基础服务、应用服务异常导致） | ❌                    | ❌                     | ❌            | 支持             |
| 被纳管的 Member 集群为非 QingCloud 公有云平台购买的容器引擎服务（不包括 Member 集群底层基础资源的支持维护） | ❌                    | ❌                     | ❌            | 支持             |
| 微服务改造咨询                                               | ❌                    | ❌                     | ❌            | 支持             |
| 集群迁移咨询                                                 | ❌                    | ❌                     | ❌            | 支持             |
| 产品功能使用培训支持（如镜像构建、Kubernetes、KubeSphere 的一对一人工使用指导） | ❌                    | ❌                     | ❌            | 支持             |