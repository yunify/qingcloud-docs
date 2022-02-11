---
title: "扩容数据盘（ Linux ）"
date: 2020-01-30T00:38:25+09:00
description: 本小节主要介绍对Linux系统下的数据盘进行扩容。
draft: false
weight: 20
keyword:  云计算, 青云, QingCloud, 云硬盘, linux, 扩容,数据盘
---


## 前提条件

在对数据盘进行扩容之前，请先确认硬盘内容是否已进行备份，以防止数据丢失。备份操作详见[备份硬盘](/storage/disk/manual/create_snapshot)

## 扩容步骤

Linux 系统下的数据盘扩容主要包括两部分：

1. 云硬盘存储容量的扩展，该步骤需登录 QingCloud 管理控制台进行操作.

2. 硬盘文件系统的扩展，该步骤需登录至云硬盘所挂载的服务器，并根据硬盘的分区情况及文件系统类型进行操作。

## 扩展云硬盘的存储容量

1. 登录到云服务器，执行 `umount` 命令将挂载的相应目录下的硬盘进行卸载。然后登录到 QingCloud 管理控制台，将主机与硬盘解除绑定，直至硬盘状态为“可用”。详细可参考[卸载硬盘](/storage/disk/manual/unload)


2. 在云硬盘列表右键点击需要扩容的硬盘，选择**扩容**，弹出**扩容硬盘**界面。
   ![expan_linux_1](/storage/disk/_images/expan_linux_1.png)

3. 点击 “+” 或直接输入容量值进行扩容，点击**提交**即可。

4. 将硬盘重新加载到云服务器。


##  扩展 EXT 文件系统

### 扩展无分区磁盘 (ext)

1. 执行 `df -h` 命令，查看扩容前的磁盘容量。

   ![expan_linux_2](/storage/disk/_images/expan_linux_2.png)

2. 执行 `lsblk -f` 命令，查看磁盘文件系统类型。

   ![expan_linux_3](/storage/disk/_images/expan_linux_3.png)

3. 使用 `umount` 命令将待扩容的磁盘从系统目录上卸载。
   ```
   # umount -v /mnt/data
   ```
   > **说明：**
   >
   > /mnt/data：为磁盘挂载的系统目录，需根据实际情况进行修改。

4. 执行如下命令，检查磁盘的文件系统状态是否正常：
   ```
   # e2fsck -f /dev/vdc
   ```
   > **说明：**  
   > 返回结果如下图所示，则证明磁盘文件系统正常；否则，需解决磁盘问题后再进行后续扩容操作。

   ![expan_linux_4](/storage/disk/_images/expan_linux_4.png)

5. 执行如下命令，扩容文件系统:
   ```
   # resize2fs /dev/vdc
   ```

   ![expan_linux_5](/storage/disk/_images/expan_linux_5.png)

6. 使用 `mount` 命令将扩容后的磁盘挂载到至相应的系统目录：
   ```
   # mount /dev/vdc /mnt/data
   ```
   > **说明：**  
   >  
   > /mnt/data：为磁盘挂载的系统目录，需根据实际情况进行修改。

7. 执行 `df -h` 命令，检查扩容后磁盘容量变化。

   ![expan_linux_6](/storage/disk/_images/expan_linux_6.png)

###  扩容磁盘原有分区 (ext)

1. 执行 `df -h` 命令，查看扩容前磁盘的容量。

   ![expan_linux_7](/storage/disk/_images/expan_linux_7.png)

2. 执行如下命令，将待扩容的磁盘从系统目录卸载。
   ```
   # umount -v /mnt/data1
   ```
   > **说明：**  
   > 
   > /mnt/data1：为磁盘挂载的系统目录，需根据实际情况进行修改。

3. 执行如下命令，进入 parted 分区工具。
   ```
   # parted /dev/vdd
   GNU Parted 3.3
   Using /dev/vdd
   Welcome to GNU Parted! Type 'help' to view a list of commands.
   (parted)
   ```
   > **说明：**  
   > /dev/vdd：为待扩容磁盘的盘符，需根据实际情况进行修改。  
4. 键入 `p`，按 `Enter` 键，查看磁盘分区的信息。

   ![expan_linux_8](/storage/disk/_images/expan_linux_8.png)

5. 输入 `unit s` ，按 `Enter` 键，设置磁盘的计量单位为磁柱。


6. 输入 `p`，按 `Enter` 键，查看并记录分区的 Start 值。
   ![expan_linux_9](/storage/disk/_images/expan_linux_9.png)

7. 执行如下命令，删除原有分区。
   ```
   # rm 1
   ```
   > **说明：**  
   > 命令中指定的 1 ，其为步骤 6 返回结果中 Number 参数所对应的值。 

   ![expan_linux_10](/storage/disk/_images/expan_linux_10.png)

8. 执行如下命令，新建一个主分区，其中起始磁柱值（ Start 值）与原来保持一致，截止磁柱值为 100%。
   ```
   # mkpart primary 2048s 100%
   ```
   
   > **注意：**  
   >
   > 2048s：为起始磁柱值（ Start 值），此处必须与步骤 6 返回结果保持一致，否则将会引起数据丢失。
   >
   > 100%：为磁盘截止磁柱值。
   
   如果出现如下图所示的状态，请输入 `Ignore`。

   ![expan_linux_11](/storage/disk/_images/expan_linux_11.png)

9. 输入 `p` 查看现有分区信息。

   ![expan_linux_12](/storage/disk/_images/expan_linux_12.png)

10. 输入 `q` 退出 parted 分区工具。

11. 执行以下命令，检查文件系统状态。
    ```
    # e2fsck -f /dev/vdd1
    ```

    ![expan_linux_13](/storage/disk/_images/expan_linux_13.png)

12. 执行如下命令，扩容文件系统。
    ```
    # resize2fs /dev/vdd1
    ```

    ![expan_linux_14](/storage/disk/_images/expan_linux_14.png)

13. 使用 `mount` 命令将扩容后的磁盘挂载到系统目录.
    ```
    # mount /dev/vdd1 /mnt/data1
    ```
    > **说明：**
    >
    > /dev/vdd1：为待挂载的磁盘盘符，需根据实际情况进行修改；
    >
    > /mnt/data1：为磁盘挂载的系统目录，需根据实际情况进行修改。

14. 执行 `df -h` 命令，检查扩容后的容量变化。

    ![expan_linux_15](/storage/disk/_images/expan_linux_15.png)

##  扩展XFS 文件系统

### 扩展无分区磁盘 (xfs)

1. 执行 `df -h` 查看扩容前的磁盘容量。

   ![expan_linux_16](/storage/disk/_images/expan_linux_16.png)

2. 使用 `umount` 命令将扩容的磁盘从系统的目录卸载。
   ```
   # umount -v /mnt/data2
   ```
   > **说明：**
   >
   > /mnt/data2：为磁盘挂载的系统目录，需根据实际情况进行修改。

3. 执行以下命令，检查磁盘的文件系统，若输出结果为 0 ，则表示正常。
   ```
   # xfs_ncheck /dev/vde; echo $?
   ```
   ![expan_linux_17](/storage/disk/_images/expan_linux_17.png)
   
4. 使用 `mount` 命令将扩容后的磁盘挂载到系统目录。
   ```
   # mount /dev/vde /mnt/data2
   ```
   > **说明：**    
   > /dev/vde：为待挂载磁盘的盘符，需根据实际情况进行修改。
   >
   > /mnt/data2：为磁盘挂载的系统目录，需根据实际情况进行修改。

5. 使用 `xfs_growfs` 命令对指定磁盘的文件系统进行扩展。

   ![expan_linux_18](/storage/disk/_images/expan_linux_18.png)

6. 执行 `df -h` 命令，检查扩容后磁盘的容量。

   ![expan_linux_19](/storage/disk/_images/expan_linux_19.png)

### 扩展磁盘原有分区 (xfs)

1. 执行 `df -h` 命令，查看扩容前的磁盘容量。

   ![expan_linux_20](/storage/disk/_images/expan_linux_20.png)

2. 使用 `umount` 命令将扩容的磁盘从系统的目录卸载。
   ```
   # umount -v /mnt/data2
   ```
   > **说明：**
   >
   > /mnt/data2：为磁盘挂载的系统目录，需根据实际情况进行修改。

3. 执行如下命令，进入 parted 分区工具。
   ```
   # parted /dev/vde
   GNU Parted 3.3
   Using /dev/vde
   Welcome to GNU Parted! Type 'help' to view a list of commands.
   (parted)
   ```
   > **说明：**  
   > /dev/vde：为待扩容磁盘的盘符，需根据实际情况进行修改。

4. 键入 `p`，按 `Enter` 键，查看磁盘分区的信息。

    ![expan_linux_21](/storage/disk/_images/expan_linux_21.png)

5. 输入 `unit s`，按 `Enter`，设置磁盘的计量单位为磁柱。

6. 输入 `p`，按 `Enter` 键，查看并记录分区的 Start 值。

   ![expan_linux_22](/storage/disk/_images/expan_linux_22.png)

7. 执行如下命令，删除原有分区。
   ```
   # rm 1
   ```
   > **说明：**  
   > 命令中指定的 1 ，其为步骤 6 返回结果中 Number 参数所对应的值。 

   ![expan_linux_23](/storage/disk/_images/expan_linux_23.png)

8. 执行如下命令，新建一个主分区，其中起始磁柱值（ Start 值）与原来保持一致，截止磁柱值为 100%。
   ```
   # mkpart primary 2048s 100%
   ```
   
   > **注意：**  
   >
   > 2048s：为起始磁柱值（ Start 值），此处必须与步骤 6 返回结果保持一致，否则将会引起数据丢失。
   >
   > 100%：为磁盘截止磁柱值。

   如果出现如下图所示的状态，请输入 `Ignore`。

   ![expan_linux_24](/storage/disk/_images/expan_linux_24.png)

9. 输入 `p` 查看现有分区信息。

   ![expan_linux_25](/storage/disk/_images/expan_linux_25.png)

10. 输入 `q` 退出 parted 分区工具。
 
11. 执行以下命令，检查磁盘的文件系统，若输出结果为 0 ，则表示正常。
    ```
    # xfs_ncheck /dev/vde; echo $?
    ```
    ![expan_linux_26](/storage/disk/_images/expan_linux_26.png)

12. 执行 `mount` 命令将分区挂载到系统目录。

    ```
    mount /dev/vde1 /mnt/data2
    ```
    > **说明：**  
    > /dev/vde1：为待挂载磁盘的盘符，需根据实际情况进行修改。
    >
    > /mnt/data2：为磁盘挂载的系统目录，需根据实际情况进行修改。

13. 执行 `xfs_growfs` 命令，对指定磁盘的文件系统进行扩展。

    ![expan_linux_27](/storage/disk/_images/expan_linux_27.png)

14. 执行 `df -h` 命令，检查扩容后磁盘容量变化。

    ![expan_linux_28](/storage/disk/_images/expan_linux_28.png)
