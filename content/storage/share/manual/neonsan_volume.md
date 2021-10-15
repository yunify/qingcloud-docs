---
title: "企业级分布式 SAN"
date: 2021-05-21T00:38:25+09:00
description: Test description
draft: false
enableToc: false
weight: 10
keyword: 青云
---

## 简介

企业级分布式 SAN (NeonSAN) 是基于全闪存架构提供的分布式 SAN 服务，单块硬盘容量最高 20TB， I/O 吞吐性能最高可达 350 MB/s， IOPS 最高 50000，适用于对 IOPS、吞吐、容量和稳定性要求很高的业务，例如：企业核心数据库 Oracle RAC 及 SQL Server 故障转移集群、企业级分布式数据库 RadonDB、弹性裸金属服务器高可用架构、大数据分析与计算、以及高可用容器集群等。

## 创建 NeonSAN 硬盘

1. 登录 QingCloud 管理控制台，在顶部导航中选择 **产品与服务** > **存储服务** > **共享存储**，进入如下界面。

   ![企业级分布式NeonSAN](/storage/share/manual/_images/shared_stor_page.png)

2. 点击**创建**进入如下界面。

   ![创建NeonSAN](/storage/share/manual/_images/create_neonsan.png)

3. 设置 NeonSAN 的基本信息。

| 参数名称   | 参数说明                                                     |
| ---------- | ------------------------------------------------------------ |
| 计费方式   | 支持**预留方式**和**按需计费**。<br />短期需求建议选择**按需计费**，长期稳定需求建议选择**预留计费**。<br />具体费用详情请参考页面提示。         |
| 合约有效期  | 选择**预留方式**计费时，需要设置。                          |
| 自动续约    |  选择**预留方式**计费时，需要设置。<br />开启自动续费需要设置续费时长，不开启则无需设置。                         |
| 名称       | 企业级分布式 SAN (NeonSAN) 的名称。                          |
| 数量       | 创建数量。根据实际需求输入数量，可批量创建多个。             |
| 可用区     | 创建的企业级分布式 SAN (NeonSAN) 所属可用区。                |
| 容量       | 设置企业级分布式 SAN (NeonSAN) 的最大容量。<br />拖动容量条块或输入容量值进行设置。不同容量对应不同性能，可根据页面的**性能参考**提示进行设置。 |

4. 点击**提交**。当状态显示为“可用”时，表示创建成功。

## 硬盘操作

### 加载硬盘

#### 方式一：

1. 右键点击已创建NeonSAN，选择**加载硬盘到云服务器** ，或选中条目，点击**更多操作** > **加载硬盘到云服务器** ，进入如下界面。

   ![加载neonSAN到云服务器](/storage/share/manual/_images/create_NeonSAN_6.png)

2. 选择需要加载该企业级分布式 SAN (NeonSAN) 的云服务器，点击**提交**，即可挂载到指定云服务器。

   > **说明**：
   >
   > 企业级分布式 SAN(NeonSAN) 支持被挂载至基础型、企业型 e2 和 GPU 云服务器上，且一块 NeonSAN 硬盘可以同时挂载到多台云服务器。如果您将一块 NeonSAN 硬盘绑定到多个云服务器上， 请确保使用集群文件系统，例如 OCFS2, 否则磁盘可能会损坏。

#### 方式二：

1. 在左侧菜单栏中，选择**计算** > **云服务器**，进入**云服务器**页面。

2. 右键点击要挂载的云服务器，单击**更多操作**，选择**加载硬盘**，弹出硬盘选择界面。

   ![从云服务器加载NeonSAN](/storage/share/manual/_images/create_NeonSAN_7.png)

3. 勾选需要加载的NeonSAN硬盘，单击**提交**。

### 修改名称或属性

1. 右键单击NeonSAN硬盘，选择**修改**。

   <img src="../_images/create_NeonSAN_8.png" alt="修改NeonSAN" style="zoom:50%;" />

2. 修改企业级分布式 SAN (NeonSAN) 的属性，包括名称和描述，然后点击**修改** 。

### 克隆硬盘

1. 右键单击NeonSAN硬盘，选择**克隆硬盘** 。

   <img src="../_images/create_NeonSAN_9.png" alt="克隆NeonSAN" style="zoom:50%;" />

2. 在名称框填入名称，写入拷贝数量，类型选择企业级分布式 SAN (NeonSAN) ，点击**提交** 。

   当状态显示为“可用”时，表示克隆成功。

### 扩容硬盘

1. 右键单击NeonSAN硬盘，选择**扩容** 。

   <img src="../_images/create_NeonSAN_11.png" alt="扩容NeonSAN" style="zoom:50%;" />

2. 调整硬盘容量，点击**提交**。

### 备份硬盘

1. 右键单击NeonSAN硬盘，选择**创建备份** ，弹出提示框，点击**继续**。

   <img src="../_images/create_NeonSAN_12.png" alt="备份NeonSAN" style="zoom:50%;" />

2. 在名称框里填入名称，根据需要选择创建新备份链，点击**提交** 。

​	<img src="../_images/create_NeonSAN_13.png" alt="完成创建NeonSAN" style="zoom:50%;" />

### 备份配置

1. 点击企业级分布式 SAN (NeonSAN) 条目，进入备份配置界面。

   ![NeonSAN备份配置](/storage/share/manual/_images/create_NeonSAN_17.png)

2. 右键点击备份链ID，显示备份配置菜单项。

   ![NeonSAN备份链修改](/storage/share/manual/_images/create_NeonSAN_18.png)

**修改备份名称或描述**

1. 点击 **修改** ，进入如下界面：

   ![修改备份链](/storage/share/manual/_images/create_NeonSAN_19.png)

2. 在名称填入要修改成的名称，在描述框里输入新的描述，点击**提交** 。

**基于备份新建硬盘**

1. 点击**创建硬盘** ，进入如下界面：

   ![基于备份创建硬盘](/storage/share/manual/_images/create_NeonSAN_20.png)

2. 在名称框里填入新硬盘的名称，点击**提交** 。

   当新建硬盘的状态显示为“可用”时，表示新硬盘已经创建成功。

**共享备份**

1. 点击 **共享备份** ，进入如下界面：

   <img src="../_images/create_NeonSAN_22.png" alt="共享NeonSAN备份" style="zoom:50%;" />

2. 可以选择共享给子账号还是共享给其他账号，选择要共享给的子账号或填写要给共享的其他用户 ID/ 注册邮箱地址，点击**提交** 。鼠标右键双击备份链接入备份属性修改界面，可以看到共享列表，里面有已经添加成功的共享账号列表。

**跨区复制备份**

1. 点击 **跨区复制备份** ，进入如下界面

   <img src="../_images/create_NeonSAN_23.png" alt="快去复制NeonSAN备份" style="zoom:50%;" />

2. 选择要复制到区域，点击 **提交** 。

**备份属性修改**

1. 点击备份链ID，或者在备份链条目下面，可以看到备份链结构示意图。

   ![备份属性修改](/storage/share/manual/_images/create_NeonSAN_24.png)

2. 鼠标左键点击备份链右侧的 **...** ，可以选择对备份链的修改、创建硬盘、回滚、跨区复制备份和删除。

   ![修改备份链](/storage/share/manual/_images/create_NeonSAN_25.png)

## 标签管理

右键点击企业级分布式 SAN（NeonSAN）硬盘，选择**标签** > **绑定**，可以为已经创建的企业级分布式 SAN (NeonSAN) 绑定标签。

<img src="../_images/create_NeonSAN_15.png" alt="为NeonSAN绑定标签" style="zoom:50%;" />

如果没有标签或已有标签不适用，可以选择**创建标签** 。

## 加入项目

1. 右键点击企业级分布式 SAN（NeonSAN）硬盘，选择**项目** > **加入**。

   <img src="../_images/create_NeonSAN_project.png" alt="将NeonSAN加入到项目" style="zoom:50%;" />

2. 选择需要添加到的项目，点击**提交**将硬盘添加到项目，回到硬盘列表可以查看硬盘所属的项目。

   ![查看NeonSAN已加入的项目](/storage/share/manual/_images/create_NeonSAN_project2.png)
   
   如果没有项目或已有项目不适用，可以在导航栏选择**项目** > **创建新的项目**进行创建。

## 硬盘监控

当企业级分布式 SAN (NeonSAN) 挂载到云服务器时，可以点击条目，查看监控情况，界面如下：

![NeonSAN监控](/storage/share/manual/_images/create_NeonSAN_26.png)

硬盘 IOPS 和硬盘吞吐量打开时，会展示硬盘 IOPS 、硬盘吞吐量数据以及硬盘使用率情况。

