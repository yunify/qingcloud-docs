---
title: "配置负载均衡器访问服务"
description: 介绍如何为服务配置负载均衡器访问方式。
draft: true
weight: 20
keyword: 青云, QingCloud, 云计算, 容器, QKE
---

您可以为您部署在集群的服务指定通过负载均衡器的方式提供外网访问。

## 背景信息

QKE 从 `v1.0.1` 版本起集成了 [QingCloud 负载均衡器插件](https://github.com/yunify/qingcloud-cloud-controller-manager) ，支持将 KubeSphere 内部的服务和 QingCloud IaaS 的负载均衡器关联起来，通过负载均衡器将服务暴露给集群外部调用。

LB 插件具体用法请参考[文档](https://github.com/yunify/qingcloud-cloud-controller-manager/blob/v1.3.4/docs/configure.md)。

> **注意**
>
> 负载均衡器需要绑定公网 IP，根据中国大陆工信部的规定，只要在互联网能访问并且使用大陆公网 IP 地址的域名都需要进行 ICP 备案。

## 准备工作

您需要在 QingCloud 管理控制台，创建一个用于外部绑定的公网 IP，用于绑定负载均衡器。

## 操作步骤

下文以 QKE 版本`v3.1.1 - KubeSphere v3.1.1`安装的 KubeSphere 为例，介绍在 KubeSphere 上进行的配置操作。

1. 登录 KubeSphere 控制台。

2. 选择**平台管理** > **集群管理**，进入集群管理控制台。

3. 在左侧导航树选择**应用负载** > **服务**。

4. 点击**创建**，创建一个服务。

   > **说明**
   >
   > 若您需要为已存在的服务配置外放访问方式，则无须新创建。找到您的服务，在行末点击操作按钮，选择**编辑外网访问**，直接按照步骤7进行配置即可。

5. 配置服务基本信息：名称及所属项目。

   ![](../../../_images/ks_service_lb_1.png)

6. 点击**下一步**，进行服务设置。

   ![](../../../_images/ks_service_lb_2.png)

   **访问类型**：选择`通过集群内部 IP 来访问服务 Virtual IP`。

   **LabelSelector**：配置标签，标签是关联到资源上的键值对，用于选择后端。

   **指定工作负载**：设置容器镜像暴露的端口以及服务端口。容器端口是对外暴露的端口；服务端口是对应的后端工作负载的端口号。

7. 点击**下一步**，进行高级设置。

   ![](../../../_images/ks_service_lb_3.png)

   勾选**外网访问**，在**访问方式**下拉框中选择 **LoadBalancer**，表示使用云服务商提供的负载均衡器来访问服务。

   配置以下注解（annotation）：

   - `service.beta.kubernetes.io/qingcloud-load-balancer-eip-ids`

     该 annotation 表示要创建公网类型的负载均衡器。在值输入框中填写您在青云上创建好的公网 IP ID 号，系统会自动创建负载均衡器并绑定此公网 IP。公网 IP 必须是可用状态。

   - `service.beta.kubernetes.io/qingcloud-load-balancer-type`

     表示负载均衡器的承载能力类型。与 [CreateLoadBalancer](/development_docs/api/command_list/lb/create_loadbalancer/) 接口中的 `loadbalancer_typ` 取值范围相同。

8. 点击**创建**。

   配置完成后，您便可以通过公网 IP 访问到集群内部服务。

   ![](../../../_images/ks_service_lb_4.png)

