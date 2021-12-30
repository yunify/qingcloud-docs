---
title: "初始化数据盘(Linux)"
description: 本小节主要介绍如何对Linux系统下的数据盘进行初始化操作。
draft: false
enableToc: false
weight: 105
keyword: 云计算, 青云, QingCloud, 云硬盘,初始化,linux,数据盘
---

## 直接初始化

1. 登录到云服务器。

2. 执行如下命令，查看磁盘设备名，其中 /dev/vdc 为新增盘。
   ```
   # lsblk -l
   NAME  MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
   vda   252:0    0   20G  0 disk
   vda1  252:1    0 19.9G  0 part /
   vda14 252:14   0    4M  0 part
   vda15 252:15   0  106M  0 part /boot/efi
   vdb   252:16   0    4G  0 disk [SWAP]
   vdc   252:32   0   20G  0 disk
   ```

3. 执行如下命令，对磁盘进行格式化。

   ```
   # mkfs.ext4 /dev/vdc
   ```
   > **说明：**
   >
   > /dev/vdc：为待格式化的磁盘盘符，需根据实际情况进行修改。

   ![init_linux_1](/storage/disk/_images/init_linux_1.png)

4. 执行如下命令，查看格式化后磁盘的文件系统信息。
   ```
   # lsblk -f
   ```

   ![init_linux_2](/storage/disk/_images/init_linux_2.png)

5. 执行如下命令，创建新的磁盘挂载目录。
   ```
   # mkdir /mnt/data
   ```
   > **说明：**
   >
   > /mnt/data：为新创建的磁盘挂载目录，需根据实际情况进行修改。

6. 执行如下命令，将磁盘挂载到步骤 5 创建的系统目录下。

   ```
   # mount /dev/vdc /mnt/data
   ```
   > **说明：**
   >
   > /dev/vdc：为待挂载磁盘的盘符，需根据实际情况进行修改。
   >
   > /mnt/data：为磁盘挂载的系统目录，需根据实际情况进行修改

7. 使用 `df` 命令，查看磁盘是否挂载成功.

   ```
   # df -h
   Filesystem      Size  Used Avail Use% Mounted on
   udev            2.0G     0  2.0G   0% /dev
   tmpfs           394M  672K  393M   1% /run
   /dev/vda1        20G  1.3G   18G   7% /
   tmpfs           2.0G     0  2.0G   0% /dev/shm
   tmpfs           5.0M     0  5.0M   0% /run/lock
   tmpfs           2.0G     0  2.0G   0% /sys/fs/cgroup
   /dev/vda15      105M  3.9M  101M   4% /boot/efi
   tmpfs           394M     0  394M   0% /run/user/0
   tmpfs           394M     0  394M   0% /run/user/1000
   /dev/vdc         20G   45M   19G   1% /mnt/data
   ```

## 分区后初始化（硬盘容量小于2TB）

1. 执行如下命令，查看所有磁盘信息，其中 /dev/vdc 为待分区的磁盘。
   ```
   # fdisk -l
   ```

   ![init_linux_3](/storage/disk/_images/init_linux_3.png)

2. 执行如下命令，对指定磁盘进行分区。
   ```
   # fdisk /dev/vdc
   ```
   > **说明：**
   >
   > /dev/vdc：为待分区的磁盘盘符，需根据实际情况进行修改。

   ![init_linux_4](/storage/disk/_images/init_linux_4.png)

3. 键入 `n`， 按 `Enter` 键，开始创建新的分区。

   ![init_linux_5](/storage/disk/_images/init_linux_5.png)

   > **说明：**
   >
   > 返回结果中表示磁盘的两种分区类型：**p**：表示主分区，**e**：表示扩展分区。
   

4. 以创建一个主分区为例。键入 `p`，按 `Enter` 键，开始创建一个主分区。

   ![init_linux_6](/storage/disk/_images/init_linux_6.png)

5. 选择分区编号。此处输入主分区编号 `1` ，按 `Enter` 键确认。

   ![init_linux_7](/storage/disk/_images/init_linux_7.png)

   > **说明：**
   >
   > **Partition number**:表示主分区编号，可以选择 1～4，默认值为 1。

6. 选择起始磁柱值。此处使用默认值 “2048”，故只需按 `Enter` 键即可。
  
   ![init_linux_8](/storage/disk/_images/init_linux_8.png)

   > **说明：**
   >
   > **First cylinder**:表示初始柱面区域，可以选择 2048～104857599，默认为 2048。起始磁柱值需小于分区的截止磁柱值。

7. 选择截止磁柱值，此处使用默认值 “104857599”，故只需按 `Enter` 键即可。

   ![init_linux_9](/storage/disk/_images/init_linux_9.png)

   > **说明：**
   >
   > **Last cylinder**:表示截止柱面区域，可以选择 2048-104857599，默认为 104857599。 +cylinders or +size{K，M，G} ： “+” 后面单位可以接 M，G，K（需大写）表示划分所加的空间，也可以是柱面数。注意截止磁柱值不能超过该磁盘剩余的空间，否则无效。

8. 键入 `p`，按 `Enter`，查看新建分区的详细信息。

   ![init_linux_10](/storage/disk/_images/init_linux_10.png)

9. 确认分区的信息无误，键入 `wq` 保存并退出。

   ![init_linux_11](/storage/disk/_images/init_linux_11.png)

10. 使用 `partprobe` 命令，将分区表同步至操作系统。
    ```
    # partprobe /dev/vdc
    ```
    > **说明：**
    >
    > /dev/vdc：为分区完成的磁盘盘符，需根据实际情况进行修改。

11. 执行如下命令，格式化分区并创建所需的文件系统。

    ```
    # mkfs.ext4 /dev/vdc1
    ```

    ![init_linux_12](/storage/disk/_images/init_linux_12.png)

12. 执行如下命令，创建新的磁盘挂载目录。
    ```
    # mkdir /mnt/data1
    ```
    > **说明：**
    >
    > /mnt/data1：为新创建的磁盘挂载目录，需根据实际情况进行修改。

13. 使用 `mount` 命令将磁盘挂载到指定的系统目录下。
    ```
    # mount /dev/vdc1 /mnt/data1
    ```
    > **说明：**
    >
    > /dev/vdc1：为待挂载磁盘的盘符，需根据实际情况进行修改。
    >
    > /mnt/data1：为磁盘挂载的系统目录，需根据实际情况进行修改

14. 使用 `df -h` 命令，查看磁盘是否挂载成功.

    ![init_linux_13](/storage/disk/_images/init_linux_13.png)

## 分区后初始化（硬盘容量大于2TB）

1. 执行 `lsblk` 命令，查看磁盘信息，其中 /dev/vdd 为新增盘。
 
   ![init_linux_14](/storage/disk/_images/init_linux_14.png)

2. 执行如下命令，使用 `parted` 工具对指定磁盘进行分区。
   ```
   # parted /dev/vdd
   ```
   > **说明：**
   >
   > /dev/vdd：为待分区的磁盘盘符，需根据实际情况进行修改。

   ![init_linux_15](/storage/disk/_images/init_linux_15.png)

3. 键入 `p`，按 `Enter`，查看当前磁盘分区形式。

   ![init_linux_16](/storage/disk/_images/init_linux_16.png)

   > **说明：**
   >
   > **Partition Table**：为 “unknow” 表示磁盘分区形式未知，新的数据盘还未设置分区形式。

4. 由于该磁盘容量大于 2 TB，所以需输入如下内容 ，将磁盘的分区形式设置为 GPT 。 
   ```
   mklabel gpt
   ```
 
   键入 `p` ，按 `Enter`，查看磁盘分区形式。

   ![init_linux_17](/storage/disk/_images/init_linux_17.png)

   >  **注意**：
   >
   >  磁盘分区形式包括 MBR 和 GPT 两种。其中，MBR 的分区形式支持的磁盘最大容量为 2 TB；若需使用大于 2 TB的磁盘容量，分区形式必须采用 GPT；  
   >
   > 由于磁盘投入使用后，切换磁盘分区形式会造成磁盘上原有数据的清除。因此，在磁盘初始化时需谨慎选择磁盘分区形式。

5. 输入 `unit s`，按 `Enter` 键，设置磁盘的计量单位为磁柱。

6. 输入如下内容，按 `Enter` 键，为整个磁盘创建一个分区。

   ```
   mkpart primary 2048s 100%
   ```
   其中，“primary” 表示磁盘分区名称，“2048s” 表示磁盘起始磁柱值，“100%” 表示磁盘截止磁柱值，此处仅供参考，用户可以根据业务需要自行规划磁盘分区数量及容量。

   > **说明**：
   >
   > 若出现如下提示：“Warning: The resulting partition is not properly aligned for best performance.”，此时输入 `Ignore` 即可。
   >
   > 出现上述提示的原因在于输入内容未对齐，默认情况下输入：`mkpart primary 1 100%` 或者 `mkpart primary 1049k 100%` 或者 `mkpart primary 2048s 100%`均是对齐的。

7. 键入 `p`，按 `Enter` 键，查看新建分区的详细信息。

   ![init_linux_18](/storage/disk/_images/init_linux_18.png)
  

8. 确认分区的信息无误后，键入 `q` 退出 parted 工具。

   ![init_linux_19](/storage/disk/_images/init_linux_19.png)

9. 执行 `lsblk` 命令, 查看分区信息

   ![init_linux_20](/storage/disk/_images/init_linux_20.png)

10. 使用 `partprobe` 命令，将分区表同步至操作系统。

    ```
    # partprobe /dev/vdd1
    ```
    > **说明：**
    >
    > /dev/vdd1：为分区完成的磁盘盘符，需根据实际情况进行修改。

11. 使用 `mkfs` 命令格式化分区，并创建所需的文件系统。

    ```
    # mkfs.ext4 /dev/vdd1
    ```

    ![init_linux_21](/storage/disk/_images/init_linux_21.png)


12. 执行如下命令，创建新的磁盘挂载目录。
    ```
    # mkdir /mnt/data2
    ```
    > **说明：**
    >
    > /mnt/data2：为新创建的磁盘挂载目录，需根据实际情况进行修改。

13. 使用 `mount` 命令将磁盘挂载到指定的系统目录下。
    ```
    # mount /dev/vdd1 /mnt/data2
    ```
    > **说明：**
    >
    > /dev/vdd1：为待挂载磁盘的盘符，需根据实际情况进行修改。
    >
    > /mnt/data2：为磁盘挂载的系统目录，需根据实际情况进行修改

14. 使用 `df -h` 命令，查看磁盘是否挂载成功.

    ![init_linux_22](/storage/disk/_images/init_linux_22.png)