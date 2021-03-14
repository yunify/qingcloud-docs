---
title: "安置策略组"
date: 2020-01-30T00:36:25+09:00
description: Test description
draft: false
enableToc: false
keyword: 安置策略组, QingCloud
---


## 创建安置策略组

创建步骤：

*   进入云服务器页面。（从左侧导航栏里点击 计算-云服务器 ）
*   进入安置策略组 Tab 页。（点击安置策略组 Tab 标签）
*   点击创建按钮
*   填写名称、选择安置策略组关系

![](/compute/instance_group/manual/_images/create_instance_group_2.png)

>注意: 安置策略组关系在创建后无法修改

## 云服务器加入安置策略组

选择一个安置策略组，点击“关联云服务器” 按钮， 即可选择加入该安置策略组的一个或多个云服务器。

![](/compute/instance_group/manual/_images/join_instance_group_2.png)

>注意：
一个云服务器只能加入一个安置策略组，如果组内的云服务器多于 1 台，其中的云服务器可能会根据集中或分散类型的策略发生迁移。


## 云服务器离开安置策略组

选择一个安置策略组，点击“解绑云服务器”按钮， 即可选择云服务器列表里的一个或多个云服务器离开该安置策略组。

![](/compute/instance_group/manual/_images/leave_instance_group_2.png)

## 删除安置策略组


当不再需要时，可以通过安置策略组右键选项中的删除来进行操作。

![](/compute/instance_group/manual/_images/delete_instance_group_1.png)

>注意:
删除安置策略组时，确保安置策略组内没有云服务器资源，需要解绑安置策略组内所有云服务器。
