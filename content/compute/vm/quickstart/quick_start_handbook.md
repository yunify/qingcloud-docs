---
title: "快速入门指南"
description: test
draft: false
---

本篇指南旨在帮助新用户快速创建一个云服务器， 并将该云服务器连接至互联网，如下图所示。

![总览](/compute/vm/_images/network_for_single_instance.gif)

如果您需要了解如何使用 SDN 网络功能来构建自己的网络拓扑，请参考网络拓扑指南。

## 创建云服务器

1. 在控制台产品服务列表打开 **计算** 中的 **云服务器** 进入**云服务器控制台**。

2. 在**云服务器控制台**右边区域点击 **新建** 按钮，创建云服务器。

3. 选择使用镜像模版，如 CentOS 7.2 64bit，点击 **下一步** ，如下图所示：  

![选择镜像](/compute/vm/_images/create_instance__1.png)  

4. 指定 CPU 和内存的规格，可以使用顶部的推荐类型快速配置， 也可以自行定制 CPU 和内存规格，点击 **下一步** ，如下图所示：  

![定制虚拟机规格](/compute/vm/_images/create_instance__2.png)  

5. 指定该云服务器连接的网络， 简单地使用默认的基础网络 vxnet-0，点击 **下一步**，如下图所示：

![连接网络](/compute/vm/_images/create_instance__3.png)

> 注解： 本指南不涉及网络拓扑，如果您有多台云服务器，需要组网，请参考 [VPC 专属私有网络](https://docs.qingcloud.com/product/network/vpc)。

6. 选择云服务器计费方式、给云服务器命名、并指定云服务器数量、设置登录密码或 SSH 密钥（本次演示设置为密码的方式登录），点击 **创建** ，如下图所示：

![SSH密钥](/compute/vm/_images/create_instance__4.png)    

7. 当云服务器列表中该云服务器状态显示为“运行中”，则表示创建成功，如下图所示：

![云服务器状态](/compute/vm/_images/create_instance__5.png)  

## 申请公网 IP并分配给云服务器

1. 在控制台产品服务列表打开 **网络** 中的 **公网IP** 进入**网络控制台**。

2. 在右边区域点击 **申请** 按钮，填写相应信息后点击 **提交** 即可。如下如所示：  

![公网IP](/compute/vm/_images/create_instance__6.png)  

| 参数名称 | 参数说明                                           |
| -------- | -------------------------------------------------- |
| 名称     | 为您申请的 IP 地址取个名字，方便记忆与使用。可选。 |
| 数量     | 输入所需要的 IP 个数。                             |
| 模式     | 可以选择按占用带宽时常计费或按使用流量计费。       |
| 带宽上限 | 输入所需要的互联网带宽。                           |
| ICP 备案 | 如果您打算做公开的网站，在中国大陆需要备案。       |

> 注解：
>
> 带宽上限是指云服务器互联网访问的带宽，云服务器与云服务器之间的内网带宽与云服务器规格有关，云服务器规格越高，内网带宽越高，详情请参阅 [云服务器](https://docs.qingcloud.com/product/computing/instance)
>
> 如果您在表单中标示了需要 ICP 备案， 那么您申请到的公网 IP 不能立刻投入使用，需要完成政府备案后才可以使用； 如果您在表单中标示了不需要 ICP 备案，那么您申请到的公网 IP 可以立刻开始使用
> 

3. 申请到的公网 IP 会在右边主显示区域，右键点击该条目， 选择“分配到云服务器”，在弹出的窗口中选择您在第一步中[创建的云服务器](#创建云服务器)，点击 **提交** 即可。

![IP状态](/compute/vm/_images/create_instance__7.png)   

![IP绑定](/compute/vm/_images/create_instance__8.png)

## console控制台连接云服务器

1. 查看并连接云服务器

   登录控制台，在右边主显示区域会列出您名下的全部云服务器， 每台云服务器名称旁边都有一个显示器图标，点击它即可打开青云终端连接至该云服务器，如下图所示：

   ![连接云服务器](/compute/vm/_images/create_instance__9.png)  

2. 进入云服务器操作系统

   连接至云服务器后，在弹出的操作系统窗口中输入您创建云服务器时设置的账号和密码，即可进入云服务器操作系统。  

   ![登录账户](/compute/vm/_images/create_instance__10.png)

##  SSH连接云服务器

> 注解：
>
> 如果创建云服务器时，设置为 SSH 密钥方式登录，那么在使用 SSH 登录之前，需要先打开防火墙的 TCP 22 端口。
>

1. 查看防火墙端口

   在云服务器列表页中点击云服务器 ID 打开该云服务器的详情页， 然后下拉至“绑定资源”项下，可以看到该云服务器正在使用的防火墙，如下图所示：

![SSH登录](/compute/vm/_images/create_instance__11.png)

2. 设置防火墙

   点击防火墙名称打开这个防火墙的配置页，点击 **添加规则** 新建一个下行规则，如下图所示： 

![设置防火墙](/compute/vm/_images/create_instance__12.png)

| 参数名称 | 参数设置 |
| -------- | -------- |
| 方向     | 下行规则 |
| 行为     | 接受     |
| 协议     | TCP      |
| 起始端口 | 22       |

3. 提交防火墙规则

   点击 **提交** ，对话框关闭，然后点击上方的 **应用修改** 即可。

4. 创建 SSH 密钥

   然后点击左边导航条中的 **计算 -> SSH 密钥** ， 在右边主显示区域点击 **创建** ，在弹出的对话框中输入一个名称， 指定一个加密方法，点击 **提交** 。 青云会立刻为您创建一对密钥，并要求您立刻下载私钥。

![新建SSH](/compute/vm/_images/create_instance__13.png)

![新建SSH](/compute/vm/_images/create_instance__14.png)

5. 加载 SSH 密钥

   在 SSH 密钥列表页中右键点击刚刚创建的钥匙， 选择 **云服务器->加载** ，在弹出的对话框中选择您第一步中创建的云服务器， 点击 **提交** 即可。 

![加载SSH](/compute/vm/_images/create_instance__15.png)

![加载SSH](/compute/vm/_images/create_instance__16.png)

6. 登录 SSH（Linux或OS系统）

   如果您是 Linux 或 Mac ，就可以通过本地 SSH 密钥（如 kp-1234abcd ）直接使用远程命令 SSH 安全地登录云服务器了:

```
# chmod 600 /path/to/kp-1234abcd
# ssh -i /path/to/kp-1234abcd root@ip_address
```

​		例如，使用 SSH 密钥 "kp-1234abcd" 连接云服务器 172.31.45.132：

```
# chmod 600 /path/to/kp-1234abcd
# ssh -i /path/to/kp-1234abcd root@172.31.45.132
```

7. 登录 SSH（Windows系统）

   如果您是 Windows 用户，可以使用 Xshell 5 及以上版本登录

   例如，在 Windows 下使用 SSH 密钥 "kp-1234abcd" 连接云服务器 172.31.45.132，步骤如下：

* 在 Xshell 上 创建 (New) 一个新 会话 (Session) ，协议 (Protocol) 是 SSH，云服务器 (Host) 是 IP 地址；

![创建连接](/compute/vm/_images/create_instance__17.png)

* 左侧标签中切换到 用户身份验证 (Authentication) ，右侧表单中方法 (Method) 选择 Public Key ，用户名 (Username) 为 root ，点击用户密钥 (User Key) 左侧 浏览 (Browse) 按钮，选择并导入密钥，即可连接云服务器；

![创建连接](/compute/vm/_images/create_instance__18.png)

## 创建硬盘并连接至云服务器（可选）

1. 在控制台产品服务列表打开 **存储** 中的 **硬盘** 进入**存储控制台**。

2. 创建硬盘

   在右边主显示区域点击 **创建** ， 在弹出的对话框中指定名称、数量、硬盘类型、容量，点击 **提交** 即可，如下图所示。

![加载硬盘至云服务器](/compute/vm/_images/create_instance__19.png)

3. 加载硬盘到云服务器

   在硬盘列表页中右键点击刚刚创建的硬盘，选择 **加载硬盘到云服务器**， 在弹出的对话框中选择您第一步中创建的云服务器，点击 **提交**。 

![加载硬盘至云服务器](/compute/vm/_images/create_instance__20.png)

![加载硬盘至云服务器](/compute/vm/_images/create_instance__21.png)

4. 登录并查看硬盘 

   登录到您的云服务器，用 fdisk -l 或 parted -l 之类的工具即可看到新硬盘。 因为是新硬盘，所以首次使用时需要分区、格式化之后才可加载使用。

## 清理资源

在以上各个资源的列表页中删除/销毁您不再需要的资源。