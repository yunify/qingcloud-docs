---
title: "管理用户"
draft: false
enableToc: false
weight: 12
---

Docker 用户可以通过 Docker CLI 等工具连接到云平台 Docker Registry, 对已授权的命名空间下的镜像进行操作。

用户管理支持创建新的 Docker user，或修改、删除已有的 Docker user。

## 创建用户

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台顶部的菜单栏中，选择**产品与服务** > **容器服务** > **公有云镜像仓库**，进入**镜像仓库**页面。

3. 在页面左侧导航栏，点击**用户管理**，进入**用户管理**页面。

   <img src="/container/dockerhub/_images/user_manage.png" alt="用户管理" style="zoom:50%;" />

4. 点击**创建**，弹出**创建用户**窗口。

   <img src="/container/dockerhub/_images/create_namespace.png" alt="创建命名空间" style="zoom:50%;" />

5. 填写用户信息，包括用户名、密码及描述。
6. 点击**提交**。

 ## 修改用户

您可以随时修改用户密码及描述。

1. 在**用户管理**页面，勾选需要修改的用户，点击**更多操作** > **修改**。
2. 修改密码及描述信息。
3. 点击**提交**。

## 删除用户

1. 在**用户管理**页面，勾选需要删除（可多选）的用户，点击**更多操作** > **删除**，弹出确认提示框。
2. 确认无误后，点击**确认**。

