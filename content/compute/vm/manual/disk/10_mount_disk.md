---
title: "加载硬盘"
description: 本章节主要介绍如何加载硬盘
draft: false
keyword: 创建硬盘, 加载硬盘, 卸载硬盘
weight: 10
---

本章节介绍如何加载硬盘。

## 前提条件

- 已获取管理控制台的账号和密码。
- 已创建云服务器。
- 已[创建并初始化硬盘](/storage/disk/quickstart/create_disk/)。

## 注意事项

- 在 Linux 系统启动时自动挂载硬盘，请不要使用在 `/etc/fstab` 中直接指定 `/dev/sdc1` 这样的写法。

  因为在云中设备的顺序编码在关机、开机过程中可能发生改变，推荐使用 `UUID` 或者 `LABEL` 的方式来指定。

- 若把一个硬盘绑定到多个云服务器上，请确保使用集群文件系统，例如`OCFS2`，否则磁盘可能会损坏。

- 硬盘副本策略必须和云服务器副本策略一致。

- 不同类型云服务器可挂载的硬盘类型不同，详细信息请参见[硬盘类型](/storage/disk/intro/introduction/#硬盘类型)。

## 操作步骤

1. 登录管理控制台。

2. 选择**产品与服务** > **计算** > **云服务器**，进入**云服务器列表**页面。

   ![](/compute/vm/_images/vm_server_list.png)

3. 点击**鼠标右键**，弹出菜单窗口。

   <img src="/compute/vm/_images/vm_disk_entrance.png" style="zoom:50%;" />

4. 选择**硬盘** > **加载**，弹出**选择要加载到云服务器的硬盘**窗口。

   <img src="/compute/vm/_images/vm_disk_win.png" style="zoom:50%;" />

5. 选择可用的硬盘。

   > **说明**
   >
   > 若没有可用硬盘，请前往**存储服务** > **云硬盘**，创建硬盘。详细操作请参见[创建硬盘](/storage/disk/quickstart/create_disk/)。

6. 点击**提交**，完成硬盘加载操作。

   您可以点击云服务器 ID，进入云服务器详情页面，在**绑定资源**区域，查看已绑定的硬盘。

   <img src="/compute/vm/_images/vm_disk_position.png" style="zoom:50%;" />
