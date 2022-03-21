---
title: "挂载云平台存储"
description: 介绍如何创建和挂载存储卷。
draft: true
weight: 30
keyword: 青云, QingCloud, 云计算, 容器, QKE
---

从 `QKE v1.0.1` 版本起内置了 [QingCloud CSI](https://github.com/yunify/qingcloud-csi)，可以动态创建基于 QingCloud IaaS 上的硬盘的 PVC，并挂载到 Pod，当 Pod 迁移时，硬盘会自动随着 Pod 迁移到其他云服务器上。

本小节介绍如何在 KubeSphere 上创建并挂载存储卷。

## 操作步骤

以下操作仅为步骤要点，关于存储卷管理的更多细节可参考 [KubeSphere 存储卷文档](https://kubesphere.com.cn/docs/project-user-guide/storage/volumes/)。

### 创建存储卷

1. 登录 KubeSphere Web 控制台。

1. 选择**平台管理** > **集群管理**，进入集群管理控制台。

2. 在导航栏中点击**存储管理**下的**存储卷**。页面上显示所有已挂载至项目工作负载的存储卷。

3. 点击**创建**，弹出**创建存储卷**页面。

3. 设置存储卷基本信息：名称及所属项目，然后点击**下一步**，进入**存储设置**页面。

   ![](../../../_images/ks_volume_1.png)
   
6. 设置存储创建方式为`通过存储类型`。

7. 选择存储卷类型。

   下拉列表中将显示当前支持的存储类型，不同存储类型的性能规格请参考[硬盘类型](/storage/disk/intro/introduction/#硬盘类型)。

   - **csi-super-high-perf**：超高性能型本地盘
   - **csi-standard**：基础型本地盘
   - **csi-ssd-enterprise**：企业型 SSD 本地盘
   - **csi-neonsan**：通用型 SSD 云盘（曾用名：NeonSAN）
   - **csi-high-perf**：性能型本地盘
   - **csi-high-capacity-legacy**：容量型云盘（旧）
   - **csi-high-capacity**：容量型云盘（新）

7. 选择访问模式。

   - **ReadWriteOnce**：存储卷以单节点读写的形式挂载。

   - **ReadOnlyMany**：存储卷以多节点只读的形式挂载。

   - **ReadWriteMany**：存储卷以多节点读写的形式挂载。

8. 设置存储卷容量，然后点击**下一步**。

9. 点击**创建**，开始创建存储卷。

   待创建成功后，您可以在 KubeSphere 存储卷列表看到已创建的存储卷，**挂载**列会显示为**未挂载**。您也可以在 QKE 集群详情页的**挂载资源** > **硬盘列表**中，看到已创建的存储卷。

   ![](../../../_images/mount_resource_disk.png)

### 挂载存储卷

创建[部署](https://kubesphere.com.cn/docs/project-user-guide/application-workloads/deployments/)、[有状态副本集](https://kubesphere.com.cn/docs/project-user-guide/application-workloads/statefulsets/)和[守护进程集](https://kubesphere.com.cn/docs/project-user-guide/application-workloads/daemonsets/)等应用负载时，您可以为它们挂载存储卷。

> **说明**
>
> 关于如何创建应用负载，请参阅[ KubeSphere 应用负载](https://kubesphere.com.cn/docs/project-user-guide/application-workloads/deployments/)中的相关指南。

在**挂载存储**设置页面，点击**添加存储卷**，然后选择**已有存储卷**，便可在下拉框中选择已创建好的存储卷挂载至容器。

![](../../../_images/ks_volume_2.png)
