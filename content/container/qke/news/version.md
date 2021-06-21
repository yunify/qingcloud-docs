---
title: "版本特性"
draft: false
enableToc: false
weight: 10
---

| <span style="display:inline-block;width:130px">版本</span> | 版本说明                                                     |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| KubeSphere v3.1.0                                          |                                                              |
| KubeSphere v3.0.0                                          | <li>升级到 Kubernetes 1.19.8</li>  <li>升级到 QingCloud CSI v1.2.1</li> <li>升级到 KubeSphere 3.1.0</li>  <li>升级到 Docker 20.10.6</li>  <li>升级到 containerd 1.4.6</li>  <li>新增支持创建集群时选择 hostnic 网络插件</li>  <li>新增支持 Kubernetes 审计规则，审计 webhook 的配置</li> |
| KubeSphere v2.0.0                                          | <li>升级到 Ubuntu 18.04.3 LTS 64 bit</li>  <li>升级到 Docker 19.03.4</li>   <li>升级到 Kubernetes 1.16.7</li>   <li>升级到 QingCloud CSI v1.1.1</li>  <li>升级到 QingCloud Cloud Controller Manager v1.4.4</li><li>升级到 Helm 2.14.3</li>  <li>升级到 KubeSphere 2.1.1</li>   <li>新增支持 GPU 节点</li>   <li>同时支持多种类型的工作节点</li> |
| KubeSphere v1.0.1                                          | <li>基于 Ubuntu 18.04.1 LTS 64 bit 操作系统 </li><li>内置 KubeSphere 高级版 v2.0.2 </li><li>提供 Kubernetes 管理运维、DevOps、微服务治理等功能 内置 QingCloud Cloud Controller Manager v1.3.6，可自动创建云平台负载均衡器并暴露服务</li><li>内置 NFS，Ceph RBD，Glusterfs 客户端程序 </li><li>优化 KubeSphere console 链接地址显示</li> <li>禁止将 Qingcloud 镜像仓库地址设置为 registry mirror <li>QKE 集群自动伸缩</li> <li>删除私有镜像仓库服务环境参数 </li><li>优化预制资源名</li> <li>内置 KubeSphere v2.0.2</li> <li>删除 Harbor 和 Gitlab 容器镜像</li> <li>在支持的区创建 NeonSAN 存储类型</li> <li>支持 EIP 访问 Kubernetes </li><li>新增安装 KubeSphere 选项，默认安装 </li><li>insecure registry 输入正则检查 </li><li>内置 arpingv <li>删除 latest tag 的容器镜像</li><li>内置 NFS 动态分配 Helm Chart</li><li>在 Qingcloud 控制台显示 Kubeconfigv <li>启用 kube 和系统资源保留</li> <li>启用 Docker 日志 rotationv <li>修复 hosts aliases 输入参数检测缺陷</li> <li>修复 max pods 参数在工作节点失效缺陷</li> <li>修复审计日志文件路径输入参数检测缺陷 </li><li>修复创建集群时创建软链接失败缺陷</li> |
| KubeSphere v1.0.0                                          | <li>内置 Kubernetes v1.13.5</li> <li>基于 KubeSphere 高级版 v2.0.1 提供 Kubernetes 管理运维、DevOps、微服务治理等功能</li><li>集成 QingCloud CSI v0.2.1，Pod 可直接挂载云平台块存储</li> <li>集成 QingCloud Cloud Controller Manager v1.3.4，可自动创建云平台负载均衡器并暴露服务</li> <li>支持 Master 节点高可用</li> <li>可选内置或者外置 etcd 集群</li> <li>可选内置或者外置 ES 服务</li> |

