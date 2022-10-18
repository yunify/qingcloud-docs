---
title: "产品动态"
collapsible: false
weight: 5

product:

    - time: 2022-09-08
      title: QKE v2.3.0 发布，内置 Etcd 新增自动备份功能，提升灾备能力
      content: QKE v2.3.0 上线。<br/>- Kubernetes 版本升级至 1.23.8 版本。<br/>- 集群内置 Etcd 新增自动备份功能，提升灾备能力。<br/>- 修复了一些问题，提升集群稳定性。
      tags:
      - 体验优化
      zone: 北京3区，上海1区，广东2区

    - time: 2022-08-26
      title: QKE v2.2.2 发布，支持使用多卡 GPU 节点
      content: QKE v2.2.2 上线。<br/>- 支持使用多卡 GPU 节点，增强集群计算性能。<br/>- 支持创建集群时为可视化控制台自动创建 EIP 并绑定，节省资源配置时间。<br/>- 优化服务页面绑定负载均衡器的设计，提升集群使用体验。<br/>- 修复了一些 bug，提升集群使用体验。
      tags:
      - 体验优化
      zone: 北京3区，上海1区，广东2区，济南1区

    - time: 2022-08-11
      title: QKE v2.2.1 发布，新增持久卷名称信息展示
      content: QKE v2.2.1 上线。<br/>- 新增持久卷名称信息展示，便于掌握 Pod 挂载持久卷信息。<br/>- 优化可视化控制台信息展示，便于查看控制台版本及初始账号信息。<br/>- 修复若干已知问题，提升了集群可用性。
      url: /container/qke_plus/manual/mounting_resource/view_resource/
      tags:
      - 新功能
      zone: 北京3区，上海1区，广东2区

    - time: 2022-07-29
      title: QKE v2.2.0 发布，新增集群告警管理
      content: QKE v2.2.0 上线。<br/>- 新增集群告警管理，支持为集群节点绑定或解绑告警策略。<br/>- 优化集群参数修改功能，提升用户体验。<br/>- 修复了一些已知问题，提升集群响应速度等。
      url: /container/qke_plus/manual/om_mgt/alarm/alarm_index/
      tags:
      - 新功能
      zone: 北京3区，上海1区，广东2区

    - time: 2022-07-15
      title: QKE v2.1.0 发布，集成 KubeSphere v3.3.0
      content: QKE v2.1.0 上线。<br/>- 支持 KubeSphere v3.3.0 版本，支持 Argo CD、存储卷声明自动扩容等新特性，可从低版本升级至最新版。<br/>- Kubernetes 版本升级至 1.22.10，可在创建集群时选用该版本。<br/>- 支持集群升级， 可从低版本 QKE 与 Kubernetets 同步升级至最新版本。<br/>- Service 支持使用负载均衡器的七层能力，支持 HTTP/HTTPS 协议的负载均衡。
      url: /container/qke_plus/manual/console/upgrade_ks/
      tags:
      - 新功能
      zone: 北京3区，上海1区，广东2区

    - time: 2022-07-01
      title: QKE v2.0.0 发布，新增 GPU 类型工作节点，提高集群图像处理能力
      content: QKE v2.0.0 上线。<br/>- 支持选用 honstnic 网卡插件，实现容器网络隧道直通等能力。<br/>- 新增 GPU 类型工作节点，提高集群图像处理能力。
      url: /container/qke_plus/manual/mgt_node/node_amount/
      tags:
      - 新功能
      zone: 北京3区，上海1区，广东2区

    - time: 2022-06-15
      title: QKE v1.2.2 发布，新增重启集群节点功能，节点异常可快速修复
      content: QKE v1.2.2 上线。<br/>- 新增集群节点重启功能，提供节点异常快速修复办法。<br/>- qingcloud-csi 部署调整，修复多可用区部署时磁盘挂载问题。<br/>- 修复了一些 bug，如集群 PVC 用量更正等。<br/>

      url: /container/qke_plus/manual/mgt_node/restart_node/
      tags:
      - 新功能
      zone: 北京3区，上海1区，广东2区

    - time: 2022-05-10
      title: QKE v1.1.0 发布，新增自管版集群形态
      content: QKE v1.1.0 上线。<br/>- 新增自管版集群形态，可创建 Master 节点自行管理的自管版 QKE 集群。<br/>- 新增集群内节点级别的监控功能，可对 Worker 节点 CPU、内存等进行监控，掌握计算资源实时负载。<br/>- 支持对接独立部署的 ELK 集群存储集群日志，保障高可用服务。<br/>- 修复了一些 bug，提升集群稳定性。

      url: ../../manual/mgt_cluster/create_cluster/
      tags:
      - 新功能
      zone: 北京3区，上海1区，广东2区

    - time: 2022-03-28
      title: 容器引擎 QKE 正式上线，让您轻松高效地在云端运行 Kubernetes 容器化应用
      content: 青云容器引擎 (QingCloud Kubernetes Engine，简称 QKE) 是在 QingCloud 云平台上构建的企业级分布式多租户的 Kubernetes 容器服务管理平台，集成了云平台的云服务器、存储、网络等资源，可一键部署高可用、高性能的 Kubernetes 集群，支持CI/CD、多集群管理、微服务治理、应用管理、服务与网络管理等业务场景，让您轻松高效地在云端运行 Kubernetes 容器化应用。<br/>本次发布支持创建及管理托管版集群，后续将支持自管版集群，敬请期待。
      url: ../../intro/introduction/
      tags:
      - 新产品
      zone: 北京3区，上海1区，广东2区
---
