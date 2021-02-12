---
title: "如何使用救援主机"
description: test
draft: false
---

### 救援主机

救援主机（Rescue Instance）可以对一台故障的主机进行人工运维。

救援主机（假设 ID 为 i-xxxxxxxx ）时，会产生一台新主机以 rescue-i-xxxxxxxx 命名，并且被救援主机 i-xxxxxxxx 的根盘挂载到了新主机 rescue-i-xxxxxxxx 里面。在新主机 rescue-i-xxxxxxxx 里面完成运维操作后，在控制台对被救援主机 i-xxxxxxxx 执行『取消救援』的操作，即完成主机 i-xxxxxxxx 的救援运维工作。

![rescue-vm-instance01](..\_images\rescue-vm-instance01.png)

### 修改系统密码

假设有个需求是，忘记了 Linux 操作系统的密码，要对其进行修改，请进行以下步骤：

- 控制台：在主机列表中，鼠标右键要操作的主机（必须是关机状态），并点击『救援主机』。

- 控制台：VNC 进入新主机 [rescue-i-xxxxxxxx] (点击主机旁边的小图标即可进入 VNC )

  

![rescue-vm-instance02](..\_images\rescue-vm-instance02.png)

- 操作系统：将被救援主机的根盘挂载到目录，例如 “mount /dev/sdc1 /mnt” 。
- 操作系统：使用 chroot，切换根盘目录，例如 “chroot /mnt”。
- 操作系统：使用命令 passwd 修改账户密码，例如 “passwd root”。
- 操作系统：退出并卸载被救援主机的根盘，例如 “exit; umount /mnt”。
- 控制台：在主机列表中，鼠标右键被救援主机 ID，点选『取消救援』。