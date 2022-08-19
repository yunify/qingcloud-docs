---
title: "挂载资源说明"
description: 集群挂载资源说明
draft: false
weight: 20
keyword: QKE, 挂载资源
---

挂载资源包括集群运行、内置插件及功能运行所需的网络、存储等资源。

## 挂载资源

> **说明**
>
> 挂载资源仅展示系统根据业务需求自动创建的资源，用户手动创建或绑定的资源不在此处显示。

| 资源类型   | 资源使用说明                                                 |
| ---------- | ------------------------------------------------------------ |
| 云硬盘     | 安装集群可视化管理工具及其内置组件，将会自动创建并挂载一定数量的云硬盘。具体 PVC 使用量请参考 [PVC 使用量说明](#kubesphere-pvc-使用量)。<br/>用户也可通过 KubeSphere 创建并挂载云硬盘到集群。 |
| 负载均衡器 | 创建集群将自动创建一个负载均衡器。<br/>若为可视化控制台绑定了 EIP（公网 IP），会自动创建一个负载均衡器。 |
| 安全组     | 创建集群将自动创建一个安全组。<br/>若为可视化控制台绑定了 EIP（公网 IP），会自动创建一个安全组。 |

## KubeSphere PVC 使用量

**单个 Master 节点的自管版集群 PVC 使用量说明如下表**：

| 组件                       | namespace                    | PVC名称                                                      | <span style="display:inline-block;width:70px">PVC 个数</span> |
| -------------------------- | ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| MetricServer<br>(默认安装) | kubesphere-monitoring-system | <ul><li>prometheus-k8s-db-prometheus-k8s-0</li><li>prometheus-k8s-db-prometheus-k8s-1</li></ul> | 2                                                            |
| 审计/事件/日志             | kubesphere-logging-system    | 集群节点数大于 1 小于等于 5 时，3 个 PVC：<ul><li>data-elasticsearch-logging-data-0</li><li>data-elasticsearch-logging-data-1</li><li>data-elasticsearch-logging-discovery-0</li></ul>集群节点数大于 5 时，6 个 PVC，除以上3个，增加如下 3 个：<br/><ul><li>data-elasticsearch-logging-data-2</li><li>data-elasticsearch-logging-discovery-1</li><li>data-elasticsearch-logging-discovery-2</li></ul><div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b><br/>日志、审计、事件组件都依赖 elasticsearch。elasticsearch 需要创建 3个 或 6个 PVC。如果使用外置 ELK，则不需要。</div> | 3 或 6                                                       |
| OpenPitrix 应用商店        | kubesphere-system            | minio                                                        | 1                                                            |
| DevOps                     | kubesphere-devops-system     | ks-jenkins                                                   | 1                                                            |
| DevOps                     | kubesphere-system            | openldap-pvc-openldap-0                                      | 1                                                            |
| DevOps                     | kubesphere-system            | minio                                                        | 1                                                            |
| 网络策略                   | /                            | /                                                            | 0                                                            |
| 告警                       | /                            | /                                                            | 0                                                            |
| 服务治理                   | /                            | /                                                            | 0                                                            |


**3 个 Master 节点的托管版/自管版集群 PVC 使用量说明如下表：**

| 组件                        | namespace                    | PVC 名称                                                     | <span style="display:inline-block;width:70px">PVC 个数</span> |
| --------------------------- | ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| MetricServer<br/>(默认安装) | kubesphere-monitoring-system | <ul><li>prometheus-k8s-db-prometheus-k8s-0</li><li>prometheus-k8s-db-prometheus-k8s-1</li></ul> | 2                                                            |
| 默认                        | kubesphere-system            | KubeSphere 3.3.0 以下版本，3个PVC ：<ul><li>data-redis-ha-server-0</li><li>data-redis-ha-server-1</li><li>data-redis-ha-server-2</li></ul>KubeSphere 3.3.0 及以上版本，1个PVC：<br>redis-pvc | 3 或 1                                                       |
| 审计/事件/日志              | kubesphere-logging-system    | 集群节点数大于 1 小于等于 5 时，3 个 PVC：<ul><li>data-elasticsearch-logging-data-0</li><li>data-elasticsearch-logging-data-1</li><li>data-elasticsearch-logging-discovery-0</li></ul>集群节点数大于 5 时，6 个 PVC，除以上3个，增加如下 3 个：<br/><ul><li>data-elasticsearch-logging-data-2</li><li>data-elasticsearch-logging-discovery-1</li><li>data-elasticsearch-logging-discovery-2</li></ul><div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b><br/>日志、审计、事件组件都依赖 elasticsearch。elasticsearch 需要创建 3个 或 6个 PVC。如果使用外置 ELK，则不需要。</div> | 3 或 6                                                       |
| DevOps                      | kubesphere-devops-system     | ks-jenkins                                                   | 1                                                            |
| DevOps                      | kubesphere-system            | <ul><li>openldap-pvc-openldap-0</li><li>openldap-pvc-openldap-1</li></ul> | 2                                                            |
| DevOps                      | kubesphere-system            | minio                                                        | 1                                                            |
| OpenPitrix 应用商店         | kubesphere-system            | minio                                                        | 1                                                            |
| 网络策略                    | /                            | /                                                            | 0                                                            |
| 告警                        | /                            | /                                                            | 0                                                            |
| 服务治理                    | /                            | /                                                            | 0                                                            |

