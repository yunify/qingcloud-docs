---
title: "产品动态"
collapsible: false
weight: 5

product:
    - time: 2022-01-25
      title: KubeSphere on QingCloud v3.2.1 正式上线，新增 GPU 资源管理，并强化可观测性和运维能力
      content: 1.Kubernetes 升级到 v1.21.5。 <br>2.KubeSphere 升级到 v3.2.1。<br>3.Docker 升级到 v20.10.8。<br>4.新增 GPU 资源调度管理功能，支持可视化创建 GPU 工作负载、调度 GPU 资源任务等。<br>5.自定义监控支持 Grafana，强化可观测性。<br>6.新增存储卷克隆、快照和扩展等功能，提供更方便的持久化存储运维。<br>7.原有`按月`、`按年`计费方式变更为`包年包月`计费方式。
      url: https://log.qingcloud.com/archives/8736
      tags:
      - 新功能
      zone: 北京 3 区, 广东 2 区, 上海 1 区
      

    - time: 2021-12-02
      title: KubeSphere on QingCloud v3.1.1 patch 版本发布
      content: 1.更正了部分可能导致集群创建失败的内部逻辑，提升了集群创建成功率。 <br>2.修复了因 csi 组件限制值过小导致集群持续报警的问题，校准了集群的报警能力。<br>3.更正了部分集群组件的版本，保证了相关功能的可用性和稳定性。<br>4.降低了磁盘消耗，降低了因磁盘可用容量不足导致集群升级失败的几率。<br>5.支持强制删除集群节点的能力，增强了集群可维护性。
      url: https://log.qingcloud.com/archives/8536
      tags:
      - 修复问题
      
    - time: 2021-09-26
      title: KubeSphere on QingCloud v3.1.1 正式上线
      content: 1.Kubernetes 升级到 v1.20.6。<br>2.KubeSphere 升级到 v3.1.1。<br>3.新增了一些集群创建前的检查项，优化了一些创建问题，提升了集群创建成功率。 <br>4.取消了对云平台中已下架类型的云硬盘挂载支持。<br>5.集群默认优先挂载容量型云硬盘（vos），提升了集群存储能力。<br>6.修复了一些bug，提升了集群稳定性。
      url: https://log.qingcloud.com/archives/8246
      tags:
      - 修复问题
      - 体验优化

    - time: 2021-06-09
      title: KubeSphere on QingCloud v3.1.0 正式上线
      content: 1.Kubernetes 升级到 v1.19.8。<br>2.QingCloud CSI 升级到 v1.2.1。<br>3.Docker 升级到 v20.10.6。 <br>4.升级到 containerd 1.4.6。<br>5.内置 KubeSphere v3.1.0。<br>6.新增支持创建集群时选择 hostnic 网络插件。<br>7.新增支持 Kubernetes 审计规则，审计 webhook 的配置。
      url: https://log.qingcloud.com/archives/8246

    - time: 2020-09-25
      title: KubeSphere on QingCloud v3.0.0 正式上线
      content: 1.Docker 升级到 v19.03.11。<br>2.Kubernetes 升级到 v1.17.9。<br>3.QingCloud CSI 升级到 v1.2.0。<br>4.Helm 升级到 3.2.1。<br>5.内置 KubeSphere v3.0.0。<br>6.新增支持自定义 K8s 组件参数；<br>7.增强安全性，客户端节点默认使用集群 ID 作为初始密码并支持绑定 SSH 密钥。
      url: https://log.qingcloud.com/archives/7466

    - time: 2020-05-21
      title: KubeSphere on QingCloud v2.0.0 正式上线
      content: 1.操作系统升级到 Ubuntu 18.04.3 LTS 64 bit。<br>2.Docker 升级到 v19.03.4。<br>3.Kubernetes 升级到 v1.16.7。<br>4.QingCloud CSI 升级到 v1.1.1。<br>5.QingCloud Cloud Controller Manager 升级到 v1.4.4。<br>6.Helm 升级到 v2.14.3。<br>7.新增支持 GPU 节点。<br>8.同时支持多种类型的工作节点，节点 CPU Model 可配置。<br>9.内置 KubeSphere v2.1.1。<br>10.图形化选配 KubeSphere 功能组件。
      url: https://log.qingcloud.com/archives/7031

    - time: 2019-08-12
      title: KubeSphere on QingCloud v1.0.1 正式上线
      content: 功能更新及 bug 修复。
      url: https://log.qingcloud.com/archives/5913

    - time: 2019-08-12
      title: KubeSphere on QingCloud v1.0.1 正式上线
      content: KubeSphere®️(QKE)，即 QingCloud Kubernetes Engine，通过 QingCloud AppCenter 将KubeSphere®️ 诸多容器管理功能一键交付给终端用户，如多租户管理、DevOps、微服务治理、多租户日志检索、Kubernetes 监控中心等，同时省去了用户构建 Kuberentes 集群以及安装 KubeSphere 的过程，极大降低了运维成本并将容器上层业务功能快速带进客户真实业务场景。
      url: /container/qke/intro/main/

---
