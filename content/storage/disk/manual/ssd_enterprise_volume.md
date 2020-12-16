---
title: "SSD 企业级硬盘"
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false
keyword: 青云
---

# 简介

SSD 企业级硬盘采用全闪存架构，相对于基础型硬盘，SSD 企业级硬盘的随机读写能力和顺序读写能力都得到了显著提升。单块硬盘容量最高 2TB， IO 吞吐性能最高可达 320 MB/s，IOPS 最高 30000，适用于对 IOPS 和吞吐要求很高的服务，例如：数据库服务、大数据服务以及其它关键性服务。SSD 企业级硬盘可作为企业级主机的系统盘或数据盘使用，并支持可自定义的副本策略。

## 创建

### 第一步：创建 SSD 企业级硬盘


进在控制台导航中点击『产品与服务』-『存储服务』-『硬盘 』进入如下界面。入如下界面。

![SSD企业级硬盘](/storage/disk/manual/_images/create_ssd_1.png)

点击 **创建** 进入如下界面。

![创建SSD企业级硬盘](/storage/disk/manual/_images/create_ssd_2.png) 

在名称框里输入创建的硬盘名称，在数量框里输入需要创建的硬盘数量，在类型中选择 **SSD 企业级**，拖动滑动按钮选择容量大小，或者在右边的输入框中输入容量大小，点击 **提交**，进入如下界面。
 
![完成SSD企业级硬盘创建](/storage/disk/manual/_images/create_ssd_3.png)

当状态显示为“可用”时，表示创建成功。

> 注解：
>
> IOPS 范围参考：2000 – 30000
>
> 单盘 IOPS 计算公式： min{2000 + 30 * 容量, 30000}
>
> IO 吞吐范围参考：128MB/s - 320 MB/s
>
> 单盘 IO 吞吐计算公式：min{128 + 0.5 * 容量, 320 } MBps

### 第二步：配置服务

鼠标右键点击硬盘条目，或选中硬盘条目鼠标左键点击更多操作，进入如下界面。

![SSD企业级硬盘操作](/storage/disk/manual/_images/create_ssd_4.png)
 
![SSD企业级硬盘操作](/storage/disk/manual/_images/create_ssd_5.png)

**加载 SSD 企业级硬盘到主机**

点击 **加载硬盘到主机**，进入如下界面。

![加载SSD到主机](/storage/disk/manual/_images/create_ssd_6.png)

选择需要加载该 SSD 企业级硬盘的主机，点击 **提交**，即可挂载到指定主机。

> 注解： SSD 企业级硬盘支持被挂载到企业型 e2 主机上，且一块 SSD 企业级硬盘不可以同时挂载到多台主机

还可以从主机页面，鼠标右键点击主机条目，来选择 **硬盘**，进行硬盘加载，界面如下：

![从主机加载SSD](/storage/disk/manual/_images/create_ssd_7.png)

**修改 SSD 企业级硬盘名称或属性**  

点击 **修改** ，进入如下界面。
 
![修改SSD属性](/storage/disk/manual/_images/create_ssd_8.png)

可以修改 **SSD** 企业级硬盘的属性，包括名称和描述，然后点击 **修改**。

**克隆 SSD 企业级硬盘**

点击 **克隆硬盘**，进入如下界面。
 
![克隆SSD硬盘](/storage/disk/manual/_images/create_ssd_9.png)

在名称框填入名称，写入拷贝数量，类型选择基础型或 SSD 企业级，点击 **提交**，进入如下界面。

![完成SSD克隆](/storage/disk/manual/_images/create_ssd_10.png)

当状态显示为“可用”时，表示克隆成功。

**扩容**

点击 **扩容**，进入如下界面。
 
![扩容SSD](/storage/disk/manual/_images/create_ssd_11.png)

**备份**

点击 **创建备份**，进入如下界面。
 
![备份SSD](/storage/disk/manual/_images/create_ssd_12.png)

点击 **继续**，进入如下界面。
 
![备份SSD](/storage/disk/manual/_images/create_ssd_13.png)

在名称框里填入名称，有需要的选择创建新备份链，点击 **提交**。可以左键点击 **SSD** 企业级硬盘条目，进入如下界面。
 
![完成SSD备份](/storage/disk/manual/_images/create_ssd_14.png)

可以看到状态显示为“可用”，表示备份已经创建成功。

**标签**

点击 **标签**，为已经创建的 SSD 企业级硬盘绑定标签，进入如下界面。

![SSD绑定标签](/storage/disk/manual/_images/create_ssd_label.png)
 
如果没有标签或已有标签不适用，可以选择 **创建标签**，或者进行 **标签管理**。选择标签，点击 **提交**，进入如下界面。

![创建标签](/storage/disk/manual/_images/create_ssd_select_label.png)
 
**添加到项目**

点击 **项目-加入**，进入如下界面

![SSD加入到项目](/storage/disk/manual/_images/create_basic_project.png)

选择需要添加到的项目，点击 **提交** 将硬盘添加到项目，回到硬盘列表可以查看硬盘所属的项目，如下图

![SSD完成加入到项目](/storage/disk/manual/_images/create_basic_project2.png)

## 备份配置

左键点击 **SSD** 企业级硬盘条目，进入如下界面。
 
![SSD备份配置](/storage/disk/manual/_images/create_ssd_15.png)

鼠标右键点击备份链 ID，进入如下界面。
 
![编辑备份链](/storage/disk/manual/_images/create_ssd_16.png)

**修改备份名称或描述**

点击 **修改**，进入如下界面。
 
![修改备份属性](/storage/disk/manual/_images/create_ssd_17.png)

在名称填入要修改成的名称，在描述框里输入新的描述，点击 **提交**。

**基于备份新建硬盘**

点击 **创建硬盘**，进入如下界面。
 
![基于备份创建SSD](/storage/disk/manual/_images/create_ssd_18.png)

在名称框里填入新硬盘的名称，选择硬盘类型，点击 **提交**，可以硬盘首页看到如下界面
 
![基于备份创建SSD](/storage/disk/manual/_images/create_ssd_19.png)

当新建硬盘的状态显示为“可用”时，表示新硬盘已经创建成功。

**共享备份**

点击 **共享备份**，进入如下界面。
 
![共享备份](/storage/disk/manual/_images/create_ssd_20.png)

可以选择共享给子账号还是共享给其他账号，选择要共享给的子账号或填写要给共享的其他用户 ID / 注册邮箱地址，点击 **提交**。鼠标右键双击备份链接入备份属性修改界面，可以看到共享列表，里面有已经添加成功的共享账号列表。

**跨区复制备份**

点击 **跨区复制备份**，进入如下界面。
 
![跨区复制备份](/storage/disk/manual/_images/create_ssd_21.png)

选择要复制到区域，点击 **提交**。

## 备份属性修改

鼠标左键双击备份链条目，或者在备份链条目下面，可以看到备份链结构示意图，假如双击备份链条目，进入如下界面。
 
![查看备份链](/storage/disk/manual/_images/create_ssd_22.png)

鼠标左键点击备份链右侧的 **···** ，可以选择对备份链的修改、创建硬盘、回滚和删除，如下图所示。
 
![修改备份链](/storage/disk/manual/_images/create_ssd_23.png)

## 监控

在SSD企业级硬盘挂载到主机时，可以点击硬盘条目，查看监控情况，界面如下。
 
![SSD硬盘监控](/storage/disk/manual/_images/create_basic_22.png)

在硬盘 IOPS 和硬盘吞吐量打开时，可以看到硬盘 IOPS 和硬盘吞吐量数据展示。还可以点击硬盘使用率右侧的 查看监控图来查看硬盘使用率。
