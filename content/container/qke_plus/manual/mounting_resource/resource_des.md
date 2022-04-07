---
title: "挂载资源说明"
description: 集群挂载资源说明
draft: false
weight: 20
keyword: 青云, QingCloud, 云计算, QKE, 挂载资源
---

挂载资源包括集群运行、内置插件及功能运行所需的网络、存储等资源。

## 资源使用说明

> **说明**
>
> 挂载资源仅展示系统根据业务需求自动创建的资源，用户手动创建或绑定的资源不在此处显示。

| 资源类型   | 资源使用说明                                                 |
| ---------- | ------------------------------------------------------------ |
| 云硬盘     | 安装集群可视化管理工具及其内置组件，将会自动创建并挂载一定数量的云硬盘。具体 PVC 使用量请参考 [PVC 使用量说明](#pvc-使用量)。<br/>用户也可通过 KubeSphere 创建并挂载云硬盘到集群。 |
| 负载均衡器 | 创建集群将自动创建一个负载均衡器。<br/>若为可视化控制台绑定了 EIP（公网 IP），会自动创建一个负载均衡器。 |
| 安全组     | 创建集群将自动创建一个安全组。<br/>若为可视化控制台绑定了 EIP（公网 IP），会自动创建一个安全组。<br/>用户也可以为集群绑定其他安全组。 |

### PVC 使用量

<!--- **1 个 Master 节点集群最多使用 8 个 PVC**

  | 组件                       | namespace                    | PVC名称                                                      | <span style="display:inline-block;width:70px">PVC 个数</span> |
  | -------------------------- | ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
  | MetricServer<br>(默认安装) | kubesphere-monitoring-system | <ul><li>prometheus-k8s-db-prometheus-k8s-0</li><li>prometheus-k8s-db-prometheus-k8s-1</li></ul> | 2                                                            |
  | 审计/事件/日志             | kubesphere-logging-system    | <ul><li>data-elasticsearch-logging-data-0</li><li>data-elasticsearch-logging-data-1</li><li>data-elasticsearch-logging-discovery-0</li></ul><div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>：日志、审计、事件组件都依赖 elasticsearch。elasticsearch 需要创建 3个 PVC。</div> | 3                                                            |
  | OpenPitrix 应用商店        | kubesphere-system            | minio                                                        | 1                                                            |
  | DevOps                     | kubesphere-devops-system     | ks-jenkins                                                   | 1                                                            |
  | DevOps                     | kubesphere-system            | openldap-pvc-openldap-0                                      | 1                                                            |
  | 网络策略                   | /                            | /                                                            | 0                                                            |
  | 告警                       | /                            | /                                                            | 0                                                            |
  | 服务治理                   | /                            | /                                                            | 0                                                            |


-->
**托管版集群 PVC 使用量说明如下表：**

  | 组件                        | namespace                    | PVC 名称                                                     | <span style="display:inline-block;width:70px">PVC 个数</span> |
  | --------------------------- | ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
  | MetricServer<br/>(默认安装) | kubesphere-monitoring-system | <ul><li>prometheus-k8s-db-prometheus-k8s-0</li><li>prometheus-k8s-db-prometheus-k8s-1</li></ul> | 2                                                            |
  | 默认                        | kubesphere-system            | <ul><li>data-redis-ha-server-0</li><li>data-redis-ha-server-1</li><li>data-redis-ha-server-2</li></ul> | 3                                                            |
  | 审计/事件/日志              | kubesphere-logging-system    | <ul><li>data-elasticsearch-logging-data-0</li><li>data-elasticsearch-logging-data-1</li><li>data-elasticsearch-logging-data-2</li><li>data-elasticsearch-logging-discovery-0</li><li>data-elasticsearch-logging-discovery-1</li><li>data-elasticsearch-logging-discovery-2</li></ul><div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>：日志、审计、事件组件都依赖 elasticsearch。elasticsearch 需要创建 6个 PVC。</div> | 6                                                            |
  | DevOps                      | kubesphere-devops-system     | ks-jenkins                                                   | 1                                                            |
  | DevOps                      | kubesphere-system            | <ul><li>openldap-pvc-openldap-0</li><li>openldap-pvc-openldap-1</li></ul> | 2                                                            |
  | OpenPitrix 应用商店         | kubesphere-system            | minio                                                        | 1                                                            |
  | 网络策略                    | /                            | /                                                            | 0                                                            |
  | 告警                        | /                            | /                                                            | 0                                                            |
  | 服务治理                    | /                            | /                                                            | 0                                                            |

