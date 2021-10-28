---
title: "基础操作"
date: 2021-07-14T10:08:56+09:00
description:
draft: false
weight: 1
---

## 创建 Bucket
在上传文件至 QingStor 对象存储之前，用户需创建相应的 Bucket，用于储存该文件。详细操作如下：

1. 进入 QingStor 对象存储的主页面，点击 **创建 Bucket** 按钮：

 ![](../../_images/console_main.png)

2. 在弹出的 **创建 Bucket** 对话框内，根据提示信息输入 Bucket 名称：

 ![](../../_images/create_bucket.png)

 **说明：**
   - 新建的 Bucket 是私有的，如果想公开这个 Bucket 的权限，可以在创建后对其进行设置。可参考 [修改 Bucket 权限](#修改-bucket-权限)。
   - Bucket 名称在 Qingstor 对象存储中是全局唯一的，并且遵守命名规范的要求。
   - Bucket 的命名规范：由长度为 6 ～ 63 的小写字母、数字、中划线组成的字符串，且以字母或数字开始和结尾。

3. 成功创建的 Bucket，显示在 QingStor 对象存储的主页面：

 ![](../../_images/create_bucket_list.png)

## 修改 Bucket 权限
QingStor 对象存储的 Bucket 信息、文件信息的访问等，均受到权限控制。用户可根据需求，对指定的 Bucket 修改权限。QingStor 对象存储支持用户对所有人设置权限，也支持针对单个或多个用户设置权限。操作步骤如下：

1. 进入 QingStor 对象存储的主页面，选择待修改权限的 Bucket，点击 **右键** > **设置**：

 ![](../../_images/set_bucket_acl1.png)

2. 进入 Bucket 设置页面，点击 **访问控制** > **添加用户**：

 ![](../../_images/set_bucket_acl2.png)

3. 在弹出的 **Bucket 访问控制** 对话框内，根据需求，填写相关参数：

 ![](../../_images/set_bucket_acl3.png)

 **说明：**
   - 针对 Bucket 可设置 3 种级别的权限。分别为：
       - 可读：对指定 Bucket 仅有可读权限，能读取存储于该 Bucket 中的文件。
	   - 可写：对指定 Bucket 仅有可写权限，能上传文件至该 Bucket 中。
	   - 可读写：对指定 Bucket 拥有可读写权限，对该 Bucket 能执行上传下载操作。
   - 用户如需针对所有人，设置权限，可选中 **所有人** 单选框。
   - 用户如需针对单个人，设置权限，可在用户框根据提示信息，输入相应的青云 QingCloud 用户 ID 或邮箱。

## 查看 Bucket 详情
Bucket 是独立的文件存储、监控与计费单元。Bucket 详情页分为多个标签页，分别提供相应的操作以及监控与消费记录的查看。详细操作如下：

1. 进入 QingStor 对象存储的主页面，点击待查看详情的 Bucket 名：

 ![](../../_images/bucket_info1.png)

2. 进入指定 Bucket 的详情页：

 ![](../../_images/bucket_info2.png)

3. 如上图所示，Bucket 详情页分为若干标签页，分别提供相应的功能，用户可根据需求，点击相应标签页，执行对应操作。详细说明如下：
- 文件：

 ![](../../_images/bucket_info3.png)

- 分段管理：提供了查看、完成和取消分段上传的功能。在分段列表中可以查看分段上传文件的名称，上传 ID 和创建时间等信息。

 ![](../../_images/bucket_info4.png)

- 数据处理：

 ![](../../_images/bucket_info5.png)

- 监控：

 ![](../../_images/bucket_info6.png)

- 消费记录：

 ![](../../_images/bucket_info7.png)

- 设置：

 ![](../../_images/bucket_info8.png)

## 查看 Bucket 列表
用户创建的所有 Bucket 均显示在 QingStor 对象存储主页面。用户可进入 QingStor 对象存储主页面查看 Bucket 列表。

![](../../_images/create_bucket_list.png)

## Bucket 文件视图
QingStor 对象存储也支持文件视图。用户可根据需求，选择列表视图或文件视图。

1. 在QingStor 对象存储主页面，点击文件视图的图标：

 ![](../../_images/bucket_view1.png)

2. 进入 Bucket 文件视图页面：

 ![](../../_images/bucket_view2.png)

3. 点击列表视图的图标，退回 Bucket 列表视图页面。QingStor 对象存储主页面默认为列表视图：

 ![](../../_images/bucket_view3.png)

## 删除 Bucket
当用户不再需要该 Bucket 时，可将该 Bucket 内文件备份后删除，再删除该 Bucket。删除 Bucket 详细操作如下：

1. 在QingStor 对象存储主页面，选中待删除 Bucket，确认该 Bucket 内文件数为 0 后，点击 **删除** 按钮：

 ![](../../_images/delete_bucket1.png)

2. 弹出 **提示** 对话框，确认该操作无误后，点击 **确认** 按钮，删除该 Bucket。

 ![](../../_images/delete_bucket2.png)

3. 页面跳转至 QingStor 对象存储主页面。成功删除的 Bucket，不在列表显示。
