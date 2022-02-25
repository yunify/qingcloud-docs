---
title: "初始化数据盘(Windows)"
description: 本小节主要介绍如何对Windows系统下的数据盘进行初始化操作。
draft: false
enableToc: false
weight: 110
keyword: 云计算, 青云, QingCloud, 云硬盘,初始化,Windows,数据盘
---

##  硬盘容量小于 2TB

1. 在桌面点击"开始 > 运行"，然后输入`diskmgmt.msc`，打开磁盘管理器。

   ![init_win_1](/storage/disk/_images/init_win_1.png)

   ![init_win_2](/storage/disk/_images/init_win_2.png)

2. 选择磁盘分区类型，默认为 MBR。

   ![init_win_3](/storage/disk/_images/init_win_3.png)

3. 如果磁盘是脱机状态，通过以下办法联机，联机以后才能对磁盘进行操作。

   ![init_win_4](/storage/disk/_images/init_win_4.png)

4. 右键单击磁盘上未分配的区域，选择**新建简单卷**，然后按照提示操作即可。

   ![init_win_5](/storage/disk/_images/init_win_5.png)

   ![init_win_6](/storage/disk/_images/init_win_6.png)

   ![init_win_7](/storage/disk/_images/init_win_7.png)

5. 分配驱动器编号。

   ![init_win_8](/storage/disk/_images/init_win_8.png)

6. 勾选快速格式化硬盘。

   ![init_win_9](/storage/disk/_images/init_win_9.png)

   ![init_win_10](/storage/disk/_images/init_win_10.png)

   ![init_win_11](/storage/disk/_images/init_win_11.png)

##  硬盘容量大于 2TB

1. 在桌面点击"开始 > 运行"，然后输入`diskmgmt.msc`，打开磁盘管理器。

   ![init_win_12](/storage/disk/_images/init_win_12.png)

2. 选择 GPT 分区。

   ![init_win_13](/storage/disk/_images/init_win_13.png)

3. 右键单击磁盘上未分配的区域，选择**新建简单卷**，然后按照提示操作即可。

   ![init_win_14](/storage/disk/_images/init_win_14.png)

   ![init_win_15](/storage/disk/_images/init_win_15.png)

   ![init_win_16](/storage/disk/_images/init_win_16.png)

   ![init_win_17](/storage/disk/_images/init_win_17.png)

4. 选择磁盘分区编号。

   ![init_win_18](/storage/disk/_images/init_win_18.png)

5. 勾选快速格式化硬盘。

   > **注意**：该操作会清空磁盘所有数据。

   ![init_win_19](/storage/disk/_images/init_win_19.png)

   ![init_win_20](/storage/disk/_images/init_win_20.png)

   ![init_win_21](/storage/disk/_images/init_win_21.png)

   ![init_win_22](/storage/disk/_images/init_win_22.png)

