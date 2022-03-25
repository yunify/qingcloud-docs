---
title: "使用备份"
date: 2022-03-15T00:38:25+09:00
description: 本小节主要介绍备份的相关使用。
draft: false
weight: 7
keyword: 云计算, 青云, QingCloud, 备份, 备份操作
---

用户可以使用已经创建的备份链进行数据回滚，创建硬盘或制作镜像。具体操作参考下文。

## 备份回滚

当用户因为误操作或者应用逻辑的 Bug 而导致业务数据的丢失时，可以通过 `回滚` 操作将数据恢复至某个备份点的状态。具体操作如下：

1. 用户可进入 [备份主页面](/storage/backup/manual/overview/#操作台主界面)，点击 **备份数据**，在备份数据列表页，选择搜索待查看备份的资源后，点击相应的备份链:

![](/storage/backup/_images/backup_data_1.png)

2. 进入备份链详情页面，确认待回滚的备份点后，点击更多操作中的 **回滚**：

![](/storage/backup/_images/backup_data_6.png)

3. 弹出确认对话框，用户确认操作无误后，点击 **继续**：

![](/storage/backup/_images/backup_data_7.png)

4. 弹出备份点确认对话框，用户确认待回滚的备份点无误后，点击 **提交**：

![](/storage/backup/_images/backup_data_8.png)

5. 经过回滚操作后的备份链详情显示如下：

![](/storage/backup/_images/backup_data_9.png)

## 创建硬盘

用户可以使用备份来创建新的硬盘。


1. 用户可进入 [备份主页面](/storage/backup/manual/overview/#操作台主界面)，点击 **备份数据**，在备份数据列表页，选择搜索待查看备份的资源后，点击相应的备份链:

![](/storage/backup/_images/backup_data_1.png)

2. 用户进入备份链详情页面，确认待使用的备份点后，点击更多操作中的 **创建硬盘**：

![](/storage/backup/_images/backup_use_1.png)

3. 弹出 **创建硬盘** 对话框，用户根据需求以及页面提示信息，填写相关参数后，点击 **提交**：

![](/storage/backup/_images/backup_use_2.png)

 **说明：**
   - `名称`：新建硬盘名称。
   - `类型`：新建硬盘类型。
   - `可用区`：新建硬盘所在区域。  

4. 硬盘创建成功后，可点击 **存储** > **硬盘**，进入硬盘列表页查看到新建的硬盘。

![](/storage/backup/_images/backup_use_3.png)

## 制作镜像

用户可以使用硬盘备份来制作镜像，也可以使用云服务器的备份来制作镜像。

1. 进入 [备份主页面](/storage/backup/manual/overview/#操作台主界面)，点击 **备份数据**，进入备份数据列表页，选择搜索待使用的备份资源后，点击 **制作镜像**:

![](/storage/backup/_images/backup_use_4.png)

2. 用户也可进入 [备份链详情](#查看备份详情) 页面，点击备份链的 **基本属性** 的更多操作中的 **制作成新镜像**：

![](/storage/backup/_images/backup_use_5.png)

3. 弹出制作新镜像对话框，用户根据需求与页面提示信息，填写相关参数后，点击 **提交**：

- 根据云服务器备份制作镜像：

![](/storage/backup/_images/backup_use_6.png)

- 根据硬盘备份制作镜像：

![](/storage/backup/_images/backup_use_7.png)

4. 镜像创建成功后，可点击 **计算** > **镜像** > **自有**，进入自行创建的镜像列表页面，查看新制作的镜像：

![](/storage/backup/_images/backup_use_8.png)
