---
title: "基本操作"
date: 2022-03-15T00:38:25+09:00
description: 本小节主要介绍备份相关基本操作。
draft: false
weight: 2
keyword: 云计算, 青云, QingCloud, 备份, 备份操作
---

本文主要介绍备份相关基本操作，包括：创建备份，查看备份链信息，修改备份属性，备份回滚，使用备份创建硬盘，删除备份等相关操作。

## 注意事项
- 备份数据页面，显示所有已创建备份的资源列表。
- 同一条备份链中，仅第一个备份点为全量备份，其余备份点均为增量备份。
- 同一条备份链的备份点之间的数据有依赖关系。当删除备份链上的全量备份点时，会删除整条备份链；当删除增量备份点时，所有直接或者间接依赖于这个备份点的后序备份点都会被删除。请谨慎操作。
- 备份删除后，会在回收站中保留 2 小时。

## 创建备份

用户可以手动创建备份链，也可以通过备份任务自动创建备份链。详细操作参考下文。

### 手动创建

1. 选择待备份的资源

- 登录 [管理控制台](https://console.qingcloud.com/login)，选择 **产品与服务** > **计算** > **云服务器**，进入云服务器的主页面，选择搜索待创建备份的资源后，点击 **更多操作** > **创建备份**，对服务器进行备份操作。

![](/storage/backup/_images/backup_manual_1.png)

- 登录 [管理控制台](https://console.qingcloud.com/login)，选择 **产品与服务** > **存储服务** > **硬盘**，进入硬盘的主页面，选择搜索待创建备份的资源后，点击 **更多操作** > **创建备份**，对硬盘进行备份操作。

![](/storage/backup/_images/backup_manual_2.png)

2. 弹出 **立即备份** 对话框，用户根据需求填写相关参数后，点击 **确定**：

![](/storage/backup/_images/backup_manual_3.png)

 **说明：**
   - 如需创建周期性备份任务，可以 [创建备份任务](/storage/backup/manual/backup_task/#创建备份任务)。
   - `备份方式` 选择为全量备份时，会创建一条新的备份链。
   - `备份方式` 选择为增量备份时，会在源资源活跃的备份链上新增一个备份点。

3. 已创建的备份，可至 [备份主页面](/storage/backup/manual/overview/#操作台主界面)，点击 **备份数据**，进入备份数据列表页进行查看。

![](/storage/backup/_images/backup_manual_4.png)

4. 用户也可以通过 [立即备份](#立即备份)，创建新的备份链，或新增备份点。

### 自动创建

用户可以通过创建备份任务来自动创建备份链。详细操作可参考 [创建备份任务](/storage/backup/manual/backup_task/#创建备份任务)。

## 立即备份

1. 进入 [备份主页面](/storage/backup/manual/overview/#操作台主界面)，点击 **备份数据**，进入备份数据列表页，选择搜索待创建备份的资源后，点击 **立即备份**:

![](/storage/backup/_images/backup_manual_5.png)

2. 弹出 **立即备份** 对话框，用户根据需求，填写相关参数后，点击 **确定**:

![](/storage/backup/_images/backup_manual_3.png)

3. 已创建的备份链或新增的备份点，可至 [备份主页面](/storage/backup/manual/overview/#操作台主界面)，点击 **备份数据**，进入备份数据列表页进行查看。

![](/storage/backup/_images/backup_data_main.png)

## 查看备份详情

用户可进入 [备份主页面](/storage/backup/manual/overview/#操作台主界面)，点击 **备份数据**，进入备份数据列表页查看当前已创建的备份数据。

![](/storage/backup/_images/backup_data_main.png)

如需查看具体备份链的详细信息，可参考如下操作步骤：

1. 在备份数据列表页，选择搜索待查看备份的资源后，点击相应的备份链:

![](/storage/backup/_images/backup_data_1.png)

2. 进入备份链详情页面，查看备份链的属性，租赁信息，共享列表以及备份链各备份点信息:

![](/storage/backup/_images/backup_data_2.png)

 **说明：**
   - 此处显示的共享列表为当前备份链已创建的共享列表。
   - 其他用户共享给本账户的备份列表，可至 [共享备份](/storage/backup/manual/backup_share/#查看共享备份) 页面查看。


## 更新备份链属性

用户可对备份链或备份点的名称及描述信息进行修改更新。详细操作如下：

1. 用户可进入 [备份主页面](/storage/backup/manual/overview/#操作台主界面)，点击 **备份数据**，选择搜索待查看备份的资源后，点击相应的备份链:

![](/storage/backup/_images/backup_data_1.png)

2. 进入备份链详情页面，点击备份链的 **基本属性** 的更多操作中的 **修改**，对备份链名称与描述进行修改：

![](/storage/backup/_images/backup_data_3.png)

3. 在备份链详情页面，也可点击备份点的更多操作中的 **修改**，对备份点名称与描述进行修改：

![](/storage/backup/_images/backup_data_5.png)

4. 弹出修改对话框，用户根据需求填写相关信息后，点击 **提交**：

![](/storage/backup/_images/backup_data_4.png)

## 删除备份

同一条备份链的备份点之间的数据有依赖关系。当删除备份链上的全量备份点时，会删除整条备份链；当删除增量备份点时，所有直接或者间接依赖于这个备份点的后序备份点都会被删除。请谨慎操作。

1. 用户可进入 [备份主页面](/storage/backup/manual/overview/#操作台主界面)，点击 **备份数据**，选择搜索待删除的备份链后，点击 **删除**，会直接删除整条备份链:

![](/storage/backup/_images/backup_delete_1.png)

2. 也可进入 [备份详情页面](#查看备份详情)，删除备份链或备份点：

- 点击备份链的 **基本属性** 的更多操作中的 **删除**，删除整条备份链：
![](/storage/backup/_images/backup_delete_2.png)

- 击备份点的更多操作中的 **删除**，删除备份点：
![](/storage/backup/_images/backup_delete_3.png)

3. 弹出提示信息对话框，用户确定操作无误后，点击 **确定**，完成对备份链与备份点的删除操作。

4. 被删除的备份会在回收站里保留 2 小时。在此时间内，用户可至回收站里查看被删除的备份，将其恢复或彻底删除。点击 **产品与服务** > **运维与管理** > **回收站**，进入回收站的主页面。

![](/storage/backup/_images/backup_delete_4.png)

