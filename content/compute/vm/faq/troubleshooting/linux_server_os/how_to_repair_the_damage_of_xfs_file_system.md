---
title: "Linux云服务器xfs文件系统损坏"
description: Test description
weight: 20
draft: false
enableToc: false
---

## 问题现象

磁盘没办法挂载，提示 `wrong_fs_type_bad_option_bad_superblock`。

## 解决方法

1. 检查文件系统，执行`xfs_check /dev/vdx(盘符); echo $?`命令， 返回0表示正常。

>**说明**
>
>做此步之前确保分区处于umount状态 ，另外确保磁盘已经做好数据备份。

2. 执行`xfs_repair -n`命令，检查文件系统是否损坏，如果损坏会列出将要执行的操作。

3. 执行`xfs_repair /dev/vdx` 命令修复文件系统。

4. 以损失部分数据的修复方法（最后手段），如以上步骤修复失败时，先执行`xfs_repair -L /dev/vdx`命令。

   >**说明**
   >
   >此命令是清空日志，会丢失文件。

5. 再执行`xfs_repair /dev/vdx`命令

6. 最后执行`xfs_check /dev/vdx` 命令，检查文件系统是否修复成功。

>**说明**
>
>-L 是修复xfs文件系统的最后手段，慎重选择，它会清空日志，会丢失用户数据和文件。
