---

title: "Windows 云服务器硬盘初始化"
description: Test description
weight: 40
draft: false
enableToc: false
---

### 硬盘容量小于 2TB 的操作方法

1. 右键开始菜单 —  运行   —  `diskmgmt.msc`

   ![init_hd01](../../../_images/init_hd01.jpg)

2. 选择磁盘分区类型，默认为 MBR

   ![init_hd02](../../../_images/init_hd02.jpg)

3. 如果硬盘是脱机状态，通过以下办法联机，联机以后才能对磁盘进行操作

   ![init_hd03](../../../_images/init_hd03.png)

4. 右键单击磁盘上未分配的区域，选择“新建简单卷”，后续按提示操作

   ![init_hd04](../../../_images/init_hd04.png)

   ![init_hd05](../../../_images/init_hd05.png)

   ![init_hd06](../../../_images/init_hd06.jpg)

   ![init_hd07](../../../_images/init_hd07.jpg)

   ![init_hd08](../../../_images/init_hd08.png)

   ![init_hd09](../../../_images/init_hd09.jpg)

5. 初始化完成，“卷” 如下图状态即初始化成功

   ![init_hd10](../../../_images/init_hd10.png)

### 硬盘容量大于 2TB 的操作方法

1. 右键开始菜单 —  运行   —  `diskmgmt.msc`

   ![init_hd01](../../../_images/init_hd01.jpg)

2. 选择磁盘分区类型，选择GPT分区

   ![init_hd11](../../../_images/init_hd11.png)

3. 如果硬盘是脱机状态，通过以下办法联机，联机以后才能对磁盘进行操作

   ![init_hd12](../../../_images/init_hd12.png)

4. 右键单击磁盘上未分配的区域，选择“新建简单卷”，后续按提示操作

   ![init_hd13](../../../_images/init_hd13.png)

   ![init_hd14](../../../_images/init_hd14.png)

   ![init_hd15](../../../_images/init_hd15.png)

   ![init_hd16](../../../_images/init_hd16.png)

   ![init_hd17](../../../_images/init_hd17.jpg)

   ![init_hd18](../../../_images/init_hd18.png)

5. 初始化完成，“卷” 如下图状态即初始化成功

   ![init_hd18](../../../_images/init_hd19.jpg)