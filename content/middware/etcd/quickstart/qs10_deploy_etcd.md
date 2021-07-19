---
title: "创建 etcd 集群"
draft: false
enableToc: false
keyword: etcd 
weight: 10

---



## 创建 etcd 集群

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。
2. 在顶部菜单栏中，选择**产品与服务** > **消息队列与中间件** > **etcd 服务**。

3. 点击**立即部署**，进入 etcd 服务的部署页面。
4. 在顶部**区域**下拉框中，选择部署区域。

### 基本设置

1. 设置 etcd 服务的基本信息，包括集群名称、描述、版本、快速配置、计费方式、自动备份时间及部署方式。
   ![basic_info](/middware/etcd/images/basic1.png)
   - 快速配置：若选择**开发测试**或**正式生产**，系统将自动完成节点配置；若选择**自定义**，则需要手动进行[etcd节点配置](#)[及代理节点设置](#代理节点配置)。
   - 部署方式：**多可用区部署**指节点分散部署在不同可用区，具备更高可用性；**单可用区部署**指节点部署在同一个可用区（可自行指定），节点间网络延迟低。请根据您的业务特点及需求选择。

### etcd 节点配置

> **说明**：
>
> 仅选择自定义部署时才需要配置。

![etcd_node1](/middware/etcd/images/etcd_node1.png)

设置 etcd 节点的 CPU 、内存、数量、实例类型及硬盘容量。

### 代理节点设置

![proxyconf](/middware/etcd/images/proxyconf1.png)

设置代理节点的 CPU 、内存、数量及实例类型。

### 网络设置

![net](/middware/etcd/images/netconf.png)

选择VPC 网络、私有网络、安全组及节点 IP。

> **说明**：
>
> 若无可选的 VPC 网络或私有网络，请根据界面提示新建。

### 服务环境参数设置

![envconf](/middware/etcd/images/envconf1.png)

- **etcd autocompact**：表示自动清理历史数据的时间间隔，单位是小时，比如 1 表示每隔一小时清理一次数据；默认为 0 表示不自动清除。

  > **说明**：
  >
  > 每次对 etcd 键值的更新或设置操作都会被记录在数据文件中，可开启定时自动进行数据清理以防止性能下降和空间耗尽。相关原理可参考官方说明文档 [Compaction](https://github.com/etcd-io/etcd/blob/release-3.2/Documentation/op-guide/maintenance.md#history-compaction)。

- **etcd quota-backend-bytes**：存储大小限制，单位是字节，范围为 2147483648 - 8589934592，默认大小为 2147483648字节（即2GB）。

### 用户协议

 确认接受并勾选用户协议，点击**提交**，开始创建 etcd 集群。

etcd 创建完成之后，您可以查看每个节点的运行状态。当节点的服务状态显示为**正常**状态，表示该节点启动正常。 当每个节点都启动正常后 etcd 集群显示为“活跃”状态，表示您已经可以正常使用 etcd 服务了。

## 配置访问规则

### 添加安全组规则

选择**产品与服务** > **安全** > **安全组**，进入安全组页面，找到节点所属安全组，添加安全组规则。

  ![firewall1](/middware/etcd/images/firewall1.png)

  起始端口设置为目标端口，协议根据需求选择（UDP/TCP)。

  > **说明**：
  >
  > 添加后需要点击**应用修改**将设置同步，否则不会生效。

### 添加端口转发规则

选择**产品与服务** > **网络** > **VPC 网络**，进入VPC 网络管理页面，找到节点所属 VPC，在 VPC 详情页，点击**管理配置** > **端口转发** > **添加规则**， 添加端口转发规则。

  ![portforward](/middware/etcd/images/portforward.png)

源端口选择协议，端口，然后填入私网 IP 的地址，协议和端口。

  > **说明**：
  >
  > 添加后点击**应用修改**将设置同步，否则不会生效。

## 连接测试

您可以在与 etcd 集群节点同一私有网络或跨网络的客户端上进行连接测试。

测试前请先下载 [etcd](https://github.com/etcd-io/etcd/releases/tag/v3.2.24) 并解压。

现假设客户端和 etcd 在同一私有网络，etcd 集群有三个节点，IP 地址分别为192.168.100.10、192.168.100.11、192.168.100.12， 您可以通过如下命令连接 etcd：

> **说明**：
>
> etcdctl 支持 v2 和 v3 两个版本，以下以 v3 为例，详细说明请查阅[官方文档](https://github.com/etcd-io/etcd/tree/v3.2.24/etcdctl)。

```
# ETCDCTL_API=3 ./etcdctl --endpoints http://192.168.100.10:2379,http://192.168.100.11:2379,http://192.168.100.12:2379 endpoint health
```

同时该应用也提供了 REST 接口，详情请参考[官方文档](https://coreos.com/etcd/docs/latest/getting-started-with-etcd.html#reading-and-writing-to-etcd)。

