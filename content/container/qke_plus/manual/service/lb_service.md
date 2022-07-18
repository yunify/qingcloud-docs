---
title: "将服务暴露给外网"
description: 介绍如何管理已创建的服务。
draft: false
keyword: QKE, 工作负载
weight: 20
aliases: 
  - /container/qke_plus/manual/service/mg_service/
  - /container/qke_plus/manual/service/mg_service/#将服务暴露给外网/
---

通过为服务资源绑定一个“公网”类型的负载均衡器，使该服务对应的容器应用能够通过外部网络进行访问。

## 背景信息

负载均衡( LoadBalancer )访问类型的服务可以通过负载均衡器从公网访问到工作负载，与弹性 IP 方式相比提供了高可靠的保障，一般用于系统中需要暴露到公网的服务。

负载均衡访问方式由公网负载均衡器服务地址以及设置的访问端口组成，例如“10.10.10.10:80”。

## 约束与限制

- 不能使用集群内部自动创建的负载均衡器绑定到服务资源。
- 负载均衡器目前支持 TCP/HTTP/HTTPS 协议监听。
- 根据工信部规范，公网 IP 必须提交 ICP 备案信息，未备案公网 IP 80/443 端口的服务将被禁用。若负载均衡器公网 IP 未进行备案，请不要使用  80/443 端口。

## 前提条件

- 请提前创建好用于绑定服务的负载均衡器。
- 负载均衡器需要创建在集群所属 VPC 下且绑定公网 IP。

## 通过 QKE 控制台

1. 登录管理控制台。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **容器服务** > **容器引擎 QKE**，进入 QKE 集群列表页面。

3. 在集群列表，点击待查看集群的名称，进入**集群概览**页面。

4. 在左侧导航栏，选择**资源管理** > **服务**，进入**服务**页面。

5. 在**负载均衡器**列，点击**选择负载均衡器**，弹出负载均衡器选择对话框。

   <img src="/container/qke_plus/_images/service_select_lb_1.png" style="zoom:50%;" />

6. 在下拉列表中选择需要使用的负载均衡器。

   <img src="/container/qke_plus/_images/service_select_lb.png" style="zoom:50%;" />

7. 选择监听协议及端口，若选择 HTTPS 协议，还需要添加服务器证书。

   > **说明**
   >
   > 若未创建服务器证书，请参见[创建服务器证书](/network/loadbalancer/manual/certificate/create_cert/)进行创建。

8. 配置完成后，点击**确定**。

## 通过 YAML 文件配置

通过服务 YAML 文件中的 Annotation（注解），可以实现丰富的负载均衡功能。

为服务创建一个公网负载均衡器并指定负载均衡器规格，配置示例如下：

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/qingcloud-load-balancer-eip-ids: "${loadbalancer_eip}"
    service.beta.kubernetes.io/qingcloud-load-balancer-type: "${loadbalancer_typ}"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP   
    targetPort: 80 
  selector:
    run: nginx
  type: LoadBalancer
```

关键参数说明如下：

- `service.beta.kubernetes.io/qingcloud-load-balancer-eip-ids`

  该 annotation 表示要创建公网类型的负载均衡器，其值为您在青云上创建好的公网 IP ID 号，系统会自动创建负载均衡器并绑定此公网 IP。公网 IP 必须是可用状态。

- `service.beta.kubernetes.io/qingcloud-load-balancer-type`

  表示负载均衡器的规格，其值与 [CreateLoadBalancer](/network/loadbalancer/api/loadbanlancer/create_lb/) 接口中的 `loadbalancer_typ` 取值范围相同。

更多更详细的负载均衡器配置说明，请参见[负载均衡器插件配置指南](../ccm_config/)。

