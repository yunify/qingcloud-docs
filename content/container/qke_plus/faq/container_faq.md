---
title: "容器应用 FAQ"
description: 
weight: 15
draft: false
keyword: QKE, 容器, 应用, 镜像
---

## 如何配置镜像仓库？

支持在 QKE 控制台的**集群信息** > **环境参数**页面中通过`registry-mirrors`参数配置您的镜像仓库服务地址。

具体操作请参见[配置镜像仓库](/container/qke_plus/quickstart/cfg_mirror_repo/)。

## 镜像仓库无法连通怎么办？

Kubernetes 上的工作负载需要拉取 Docker 镜像，请确保集群所在私网能够访问相应的镜像仓库。


- 如果使用公网镜像仓库，比如 docker.io，请确保 VPC 绑定了公网 IP。  

- 如果使用私有镜像仓库，比如青云提供的 [Harbor 镜像仓库](https://docsv3.qingcloud.com/container/harbor/intro/introduction/)，请确保 QKE 所有节点可以访问到 Harbor 的负载均衡器地址。

  > **注意**
  >
  > 如果 Harbor 后端使用的是 QingStor 对象存储，还要确保 QKE 所有节点可以访问到 QingStor 对象存储。

## 如何配置镜像仓库加速？

国内从 DockerHub 拉取镜像有时会遇到困难，此时通过配置镜像加速器来解决该问题。

1. 修改 `/etc/docker/daemon.json` 文件，在文件添加 `registry-mirrors` 。如下所示

   ```
   {
   	"registry-mirrors": ["https://docker.mirrors.ustc.edu.cn/"] 
   }
   ```

   > **说明**
   >
   > 常用的加速地址有：
   >
   > - Docker 中国区官方镜像：https://registry.docker-cn.com
   > - 网易：http://hub-mirror.c.163.com
   > - ustc：https://docker.mirrors.ustc.edu.cn
   > - 中国科技大学：https://docker.mirrors.ustc.edu.cn

 2. 重启 Docker。 

    ```
    systemctl restart docker
    ```

3. 检查是否配置成功。

   ```
   docker info |grep -A 1  Mirrors 
   ```

   预期显示：

   ```
    Registry Mirrors:
     https://docker.mirrors.ustc.edu.cn/
   ```



## 删除节点后挂载存储卷的容器组迁移失败

使用云平台硬盘作为存储服务的节点，当节点被删除后，节点上的有状态副本集的容器组可能会无法在其他节点重新创建。

此时，需要查看集群内被删除容器组挂载存储卷的 volumeattachment 对象是否正常清理，将此 volumeattachment 对象删除后，重新创建的容器组变可以正常挂载存储卷。

操作方法如下：

1. 找到无法重新创建的容器组。

   ```
   # kubectl get po -n demo-project nginx-perf-7
   NAME           READY   STATUS              RESTARTS   AGE
   nginx-perf-7   0/1     ContainerCreating   0          22h
   ```

2. 查看容器组无法重新创建的原因，显示挂载存储卷失败。

   ```
   # kubectl describe po -n demo-project nginx-perf-7
   ...
   Events:
     Type     Reason       Age                  From                 Message
     ----     ------       ----                 ----                 -------
     Warning  FailedMount  51s (x604 over 22h)  kubelet, i-e5ri86tg  Unable to mount volumes for pod "nginx-perf-7_demo-project(087b3391-8990-11e9-9b03-525433ce642d)": timeout expired waiting for volumes to attach or mount for pod "demo-project"/"nginx-perf-7". list of unmounted volumes=[nginx-neonsan-pvc]. list of unattached volumes=[nginx-neonsan-pvc default-token-znp5w]
   ```

3. 找到未挂载上的存储卷 `nginx-neonsan-pvc-nginx-perf-7`。

   ```
   # kubectl get po -n demo-project nginx-perf-7 -oyaml
   ...
   spec:
       volumes:
         - name: nginx-neonsan-pvc
           persistentVolumeClaim:
               claimName: nginx-neonsan-pvc-nginx-perf-7
   ...
   ```

4. 找到未挂载上的存储卷对应的 PV `pvc-93e24c1d88d711e9`, 到 QingCloud 控制台查看硬盘名为 `pvc-93e24c1d88d711e9` 的硬盘应为可用状态。

   ```
   # kubectl get pvc nginx-neonsan-pvc-nginx-perf-7 -n demo-project
   NAME                             STATUS   VOLUME                 CAPACITY   ACCESS MODES   STORAGECLASS   AGE
   nginx-neonsan-pvc-nginx-perf-7   Bound    pvc-93e24c1d88d711e9   100Gi      RWO            neonsan        44h
   ```



5. 找到 PV `pvc-93e24c1d88d711e9` 对应的 volumeattachment 对象名 `csi-8b2ed050e78ad6f3a5491af35c9351358856ae15cc874262ca0b78a1c332b883`

   ```
   # kubectl get volumeattachment -oyaml|grep pvc-93e24c1d88d711e9 -B 16
       apiVersion: storage.k8s.io/v1
       kind: VolumeAttachment
       metadata:
           creationTimestamp: 2019-06-07T03:52:13Z
           deletionGracePeriodSeconds: 0
           deletionTimestamp: 2019-06-09T00:47:49Z
           finalizers:
           - external-attacher/csi-qingcloud
           name: csi-8b2ed050e78ad6f3a5491af35c9351358856ae15cc874262ca0b78a1c332b883
           resourceVersion: "1178846"
           selfLink: /apis/storage.k8s.io/v1/volumeattachments/csi-8b2ed050e78ad6f3a5491af35c9351358856ae15cc874262ca0b78a1c332b883
           uid: a21a70df-88d7-11e9-aed1-525433888127
       spec:
           attacher: csi-qingcloud
           nodeName: i-5n8osu8t
           source:
               persistentVolumeName: pvc-93e24c1d88d711e9
   ```

6. 查看未被正常清理的 volumeattachment 对象, status.detachError 显示 `node "XXX" not found`。

   ```
   # kubectl get volumeattachment csi-8b2ed050e78ad6f3a5491af35c9351358856ae15cc874262ca0b78a1c332b883 -oyaml
       apiVersion: storage.k8s.io/v1
       kind: VolumeAttachment
       metadata:
           creationTimestamp: 2019-06-07T03:52:13Z
           deletionGracePeriodSeconds: 0
           deletionTimestamp: 2019-06-09T00:51:53Z
           finalizers:
           - external-attacher/csi-qingcloud
           name: csi-8b2ed050e78ad6f3a5491af35c9351358856ae15cc874262ca0b78a1c332b883
           resourceVersion: "1180401"
           selfLink: /apis/storage.k8s.io/v1/volumeattachments/csi-8b2ed050e78ad6f3a5491af35c9351358856ae15cc874262ca0b78a1c332b883
           uid: a21a70df-88d7-11e9-aed1-525433888127
       spec:
           attacher: csi-qingcloud
           nodeName: i-5n8osu8t
           source:
               persistentVolumeName: pvc-93e24c1d88d711e9
       status:
           attached: true
           detachError:
               message: node "i-5n8osu8t" not found
               time: 2019-06-09T00:52:12Z
   ```

7. 编辑 volumeattachment 对象，删去 `finalizers` 部分。

   ```
   # kubectl edit volumeattachment csi-8b2ed050e78ad6f3a5491af35c9351358856ae15cc874262ca0b78a1c332b883 -oyaml
       apiVersion: storage.k8s.io/v1
       kind: VolumeAttachment
       metadata:
           creationTimestamp: 2019-06-07T03:52:13Z
           deletionGracePeriodSeconds: 0
           deletionTimestamp: 2019-06-09T00:51:53Z
           name: csi-8b2ed050e78ad6f3a5491af35c9351358856ae15cc874262ca0b78a1c332b883
           resourceVersion: "1180401"
           selfLink: /apis/storage.k8s.io/v1/volumeattachments/csi-8b2ed050e78ad6f3a5491af35c9351358856ae15cc874262ca0b78a1c332b883
           uid: a21a70df-88d7-11e9-aed1-525433888127
       spec:
           attacher: csi-qingcloud
           nodeName: i-5n8osu8t
           source:
               persistentVolumeName: pvc-93e24c1d88d711e9
   ...
   ```

8. 观察容器组状态，5 分钟左右可挂载上存储卷，没有其他问题情况下容器组可恢复运行状态。

   ```
   # kubectl get po -n demo-project nginx-perf-7
   NAME           READY   STATUS    RESTARTS   AGE
   nginx-perf-7   1/1     Running   0          23h
   ```

   

