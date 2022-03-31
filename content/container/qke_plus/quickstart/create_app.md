---
title: "创建工作负载"
description: 介绍如何登录 QKE 集群节点
weight: 30
draft: false
keyword: 青云, QingCloud, 云计算, QKE, 容器, 应用
---

QKE 集群创建完成后，您便可以在集群中创建工作负载来部署您的应用。

## 前提条件

已创建 QKE 集群并正常运行。

## 操作步骤

### 通过 KubeSphere 控制台创建

若您安装了 KubeSphere 可视化管理工具，则可以通过 KubeSphere 控制台创建工作负载。

1. [登录 KubeSphere 控制台](/container/qke_plus/manual/console/access_ks/)。

2. 选择**平台管理** > **集群管理**，进入集群管理控制台。

3. 在左侧导航树选择**应用负载** > **工作负载**。

4. 点击列表上方的选项卡，选择工作负载类型，然后点击**创建**。

   以创建无状态工作负载 Deployment 为例：在**部署**选项卡下面点击**创建**。

   ![](../../_images/create_workload.png)

5. 配置工作负载。

   你可以点击右上角的**编辑 YMAL**，通过直接编辑 YMAKL 文件创建工作负载，或者按照页面向导方式进行创建。

   配置工作负载的详细说明，请参阅 [KubeSphere 应用负载](https://kubesphere.com.cn/docs/project-user-guide/application-workloads/deployments/)中的相关指南。

   ![](../../_images/create_deployment_1.png)

6. 配置完成后，点击**创建**即可创建工作负载。

### 通过 kubectl 命令行创建

以创建 nginx 工作负载为例，说明 kubectl 命令创建工作负载的方法。

1. [使用 kubectl 连接到集群](../kubectl_cnect/)。

2. 创建一个名为 nginx-deployment.yaml 的描述文件。

   nginx-deployment 为自定义名称，您可以随意命名。

   以下为描述文件内容示例：

   ```
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: nginx
   spec:
     replicas: 1
     selector:
       matchLabels:
         app: nginx
     strategy:
       type: RollingUpdate
     template:
       metadata:
         labels:
           app: nginx
       spec:
         containers:
         - image: nginx:1.7.9    #根据实际情况填写镜像具体地址
           imagePullPolicy: Always
           name: nginx
         imagePullSecrets:
         - name: default-secret
   ```

   

3. 使用上述描述文件创建应用。

   ```
   kubectl create -f nginx-deployment.yaml
   ```

4. 创建完成后，查看应用状态。

   ```
   kubectl get pods
   ```

   若应用负载状态显示为 Running，表示已创建成功。

   ```
   NAME                     READY     STATUS    RESTARTS   AGE
   nginx-1212400221-qv313   1/1       Running   0          3d
   ```

   
