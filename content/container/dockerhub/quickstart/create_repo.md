---
title: "创建镜像仓库"
draft: false
enableToc: false
weight: 1
---

仓库是镜像的集合，建议将同一应用不同版本的镜像放置在一个仓库中。

## 前提条件

每个镜像仓库都隶属于某个命名空间，故创建仓库前，确保已[创建命名空间](/container/dockerhub/manual/mge_namesapce/#创建命名空间)。

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台顶部的菜单栏中，选择**产品与服务** > **容器服务** > **公有云镜像仓库**，进入 **镜像仓库**页面。

3. 点击**创建**，弹出**创建镜像仓库**页面。

   <img src="/container/dockerhub/_images/create_repo.png" alt="创建镜像仓库" style="zoom:50%;" />

4. 在**仓库名称**后选择命名空间，然后输入仓库名称及描述信息。

5. 点击**提交**，开始创建仓库。

   创建完成后，显示在镜像仓库列表中。列表展示了仓库的名称（包括所属命名空间）、仓库状态、镜像被下载次数及仓库创建时间。
   
   ![镜像仓库](/container/dockerhub/_images/repo_list.png)



