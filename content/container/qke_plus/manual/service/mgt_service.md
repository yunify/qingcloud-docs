---
title: "管理服务"
description: 介绍如何管理已创建的服务。
draft: false
keyword: 青云, QingCloud, 云计算, QKE, 工作负载
weight: 10
---

服务创建后，您可以在 QKE 控制台查看服务及配置服务。

## 查看工作负载

1. 登录 QingCloud 管理控制台。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **容器服务** > **容器引擎 QKE**，进入 QKE 集群列表页面。

3. 在集群列表，点击待查看集群的名称，进入**集群概览**页面。

4. 在左侧导航栏，选择**资源管理** > **服务**，进入**服务**页面。

   页面展示了服务的名称、所属命名空间、类型及访问 IP 等信息。

   - 在**服务类型**列进行条件过滤，可分别查看不同类型的服务。

   - 可在搜索栏输入名称或命名空间查找符合条件的服务。

     ![](/container/qke_plus/_images/w.png)

<!-- ## 编辑 YAML

可通过编辑服务的 YAML 文件进行工作负载更新。

1. 登录 QingCloud 管理控制台。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **容器服务** > **容器引擎 QKE**，进入 QKE 集群列表页面。

3. 在集群列表，点击待查看集群的名称，进入**集群概览**页面。

4. 在左侧导航栏，选择**资源管理** > **服务**，进入**服务**页面。

5. 点击**守护进程**页签，进入守护进程展示页面。

6. 点击**操作**列的**编辑 yaml**，弹出**编辑 yaml 文件**窗口。

   ![](/container/qke_plus/_images/w.png)

7. 在文件编辑窗口中，修改配置。

8. 点击**确认**。 -->

## 设置负载均衡器访问

### QKE 控制台操作

1. 登录 QingCloud 管理控制台。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **容器服务** > **容器引擎 QKE**，进入 QKE 集群列表页面。

3. 在集群列表，点击待查看集群的名称，进入**集群概览**页面。

4. 在左侧导航栏，选择**资源管理** > **服务**，进入**服务**页面。

5. 在**负载均衡器**列，点击**选择负载均衡器**，弹出负载均衡器选择对话框。

6. 在下拉列表中选择需要使用的负载均衡器，点击**确定**。

   ![](/container/qke_plus/_images/w.png)

### 通过 YAML 文件配置

通过 YAML文件中的 Annotation（注解），可以实现丰富的负载均衡功能。

创建一个公网负载均衡器并指定负载均衡器规格，需要配置以下 Annotation（注解）：

- `service.beta.kubernetes.io/qingcloud-load-balancer-eip-ids`

  该 annotation 表示要创建公网类型的负载均衡器，其值为您在青云上创建好的公网 IP ID 号，系统会自动创建负载均衡器并绑定此公网 IP。公网 IP 必须是可用状态。

- `service.beta.kubernetes.io/qingcloud-load-balancer-type`

  表示负载均衡器的规格，其值与 [CreateLoadBalancer](/development_docs/api/command_list/lb/create_loadbalancer/) 接口中的 `loadbalancer_typ` 取值范围相同。

配置示例如下：

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

