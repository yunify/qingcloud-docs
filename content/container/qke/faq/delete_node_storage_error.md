---
title: "删除节点后挂载存储卷的容器组迁移失败"
description: 介绍如何处理删除节点后挂载存储卷的容器组迁移失败的问题。
weight: 20
draft: false
keyword: 青云, QingCloud, 云计算, QKE, 容器, 存储卷
---

## 问题场景

使用云平台硬盘作为存储服务的有状态副本集的容器组所在节点被删除后，可能会遇到此有状态副本集的容器组无法在其他节点重新创建的问题。

## 解决办法

要查看集群内被删除容器组挂载存储卷的 volumeattachment 对象是否正常清理，将此 volumeattachment 对象删除后，重新创建的容器组可以正常挂载存储卷。

##  操作步骤

1. 找到无法重新创建的容器组

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

   

