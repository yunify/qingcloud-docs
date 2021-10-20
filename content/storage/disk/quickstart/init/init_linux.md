---
title: "初始化 Linux 数据盘"
description: Test description
draft: false
enableToc: false
weight: 105
keyword: 青云
---

## 直接初始化

1. 登录到云服务器。

2. 使用 `lsblk` 命令查看磁盘设备名。
   ```
   # lsblk -l
   NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
   sdb    8:16   0  10G  0 disk 
   sda    8:0    0  20G  0 disk 
   sda1   8:1    0  20G  0 part /
   sdd    8:48   0   1G  0 disk [SWAP]
   ```

3. 使用 `mkfs` 命令对磁盘进行格式化。

   ```
   # mkfs.ext4 /dev/sdb
   ```

   ![图片](/storage/disk/quickstart/_images/image-1568774979615.png)

4. 使用 lsblk 命令查看格式化后的分区的信息。

   ![图片](/storage/disk/quickstart/_images/image-1568774983933.png)

5. 使用 `mount` 命令将磁盘挂载到主机。

   ```
   # mount /dev/sdb /mnt
   ```

6. 使用 `df` 命令查看磁盘是否挂载成功。

   ```
   # df -h
   Filesystem      Size  Used Avail Use% Mounted on
   /dev/sda1        20G  859M   18G   5% /
   tmpfs           499M     0  499M   0% /dev/shm
   /dev/sdb        9.8G   23M  9.2G   1% /mnt
   ```

## 硬盘容量小于2TB

1. 使用 `fdisk -l` 命令列出所有磁盘分区。

   ![图片](/storage/disk/quickstart/_images/image-1568775005129.png)

2. 使用 `fdisk /dev/sdd` 命令对磁盘进行分区。

   ![图片](/storage/disk/quickstart/_images/image-1568775009154.png)

3. 输入 `n`， 按 **Enter**，开始新建分区。

   ![图片](/storage/disk/quickstart/_images/image-1568775012633.png)

   表示磁盘有两种分区类型：

   【p】表示主分区

   【e】表示扩展分区

4. 以创建一个主分区为例，输入 `p`，按 **Enter**，开始创建一个主分区。

   ![图片](/storage/disk/quickstart/_images/image-1568775017438.png)

   【Partition number】表示主分区编号，可以选择1-4，选择1号分区，回车显示

   ![图片](/storage/disk/quickstart/_images/image-1568775021385.png)

   【First cylinder】表示初始柱面区域，可以选择1 - 13054，默认为1。

5. 以选择默认初始磁面值 1 为例，表示从第一个柱面开始划分，按 **Enter**。

   ![图片](/storage/disk/quickstart/_images/image-1568775025430.png)

   【Last cylinder】表示截止柱面区域， +cylinders or +size{K，M，G} （1 - 13054， default 13054）： +后面单位可以接M，G，K（记得要大写）表示划分您所加的空间，也可以是柱面数，注意不能超过该磁盘剩余的空间否则无效。

6. 以选择默认截止磁面为例，按 **Enter**。

   ![图片](/storage/disk/quickstart/_images/image-1568775030738.png)

7. 输入 `p`，按 **Enter**，查看新建分区的详细信息。

   ![图片](/storage/disk/quickstart/_images/image-1568775036420.png)

8. 确认分区的信息无误，输入 `wq` 保存并退出。

   ![图片](/storage/disk/quickstart/_images/image-1568775040323.png)

9. 使用 `partprobe` 同步分区表至操作系统

   ```
   # partprobe /dev/sdd
   ```

10. 使用 mkfs 命令格式化分区并创建所需的文件系统

    ```
    # mkfs.ext4 /dev/sdd1
    ```

    ![图片](/storage/disk/quickstart/_images/image-1568775044404.png)

11. 使用 `mount` 命令挂载到目录

    ![图片](/storage/disk/quickstart/_images/image-1568775049276.png)

## 硬盘容量大于2TB

1. 使用 lsblk 命令列出所有磁盘分区，如 sdc 为新增磁盘。

   ```
   # lsblk
   ```

   ![图片](/storage/disk/quickstart/_images/image-1568775054733.png)

2. 使用 parted 命令对磁盘进行分区，回显信息类似如下图，以/dev/sdc为例，命令格式如下：

   ```
   # parted /dev/sdc
   ```

   ![图片](/storage/disk/quickstart/_images/image-1568775061556.png)

3. 输入 `p`，按 **Enter**，查看当前磁盘分区形式。

   ![图片](/storage/disk/quickstart/_images/Irm6z9nYCsEbWSda.png)

   “Partition Table”为“unknown”表示磁盘分区形式未知，新的数据盘还未设置分区形式。

4. 磁盘分区形式有 MBR 和 GPT 两种，大于 2 TB的磁盘容量，这里采用 GPT 分区方式。输入如下命令，设置磁盘分区形式。

   ```
   # mklabel gpt
   ```


   输入`p`回车显示

   ![图片](/storage/disk/quickstart/_images/image-1568775068945.png)

   >  **注意**：
   >
   >  ▪︎ MBR 支持的磁盘最大容量为 2 TB，如果您需要使用大于 2 TB的磁盘容量，分区形式请采用GPT 。
   >
   >  ▪︎ 当磁盘已经投入使用后，此时切换磁盘分区形式时，磁盘上的原有数据将会清除，因此请在磁盘初始化时谨慎选择磁盘分区形式。

5. 输入`unit s`，按 **Enter**，设置磁盘的计量单位为磁柱。

6. 以整个磁盘创建一个分区为例，执行以下命令，按 **Enter**。

   ```
   # mkpart data 2048s 100%
   ```

   “data”表示磁盘分区名称，“2048s”表示磁盘起始磁柱值，“100%” 表示磁盘截止磁柱值，此处仅供参考，您可以根据业务需要自行规划磁盘分区数量及容量。

   > **说明**：
   >
   > 若使用 parted 工具分区时，提示：“Warning: The resulting partition is not properly aligned for best performance.”，是因为未对齐，此时输入 `Ignore`即可。默认情况下输入：`mkpart primary 1 100%` 或者 `mkpart primary 1049k 100%` 或者 `mkpart primary 2048s 100`均是对齐的。

   例如，此处将 start 设置为 1024k, 结束值为 100%, 就会出现该报警提示：

   ![图片](/storage/disk/quickstart/_images/image-1568775097514.png)

   此时输入 `Ignore`

   ![图片](/storage/disk/quickstart/_images/image-1568775100805.png)

7. 输入 `p`，按 **Enter**，查看新建分区的详细信息。

   ![图片](/storage/disk/quickstart/_images/image-1568775076476.png)

8. 确认分区的信息无误，输入`q`退出parted 工具。

   ![图片](/storage/disk/quickstart/_images/image-1568775080498.png)

9. 使用 `lsblk` 查看分区信息

   ![图片](/storage/disk/quickstart/_images/image-1568775084337.png)

10. 使用 `partprobe` 同步分区表至操作系统。

    ```
    # partprobe /dev/sdc1
    ```

11. 使用 `mkfs` 命令格式化分区并创建所需的文件系统。

    ```
    # mkfs.ext4 /dev/sdc1
    ```

    ![图片](/storage/disk/quickstart/_images/image-1568775088216.png)

