---
title: "如何使用救援云服务器"
description: test
draft: false
---

救援云服务器（Rescue Instance）可以对一台故障的云服务器进行人工运维。

在云服务器列表中，鼠标右键要操作的云服务器（必须是关机状态），并点击『救援云服务器』。救援云服务器（假设 ID 为 i-xxxxxxxx ）时，会产生一台新云服务器以 rescue-i-xxxxxxxx 命名，并且被救援云服务器 i-xxxxxxxx 的根盘挂载到了新云服务器 rescue-i-xxxxxxxx 里面。在新云服务器 rescue-i-xxxxxxxx 里面完成运维操作后，在控制台对被救援云服务器 i-xxxxxxxx 执行『取消救援』的操作，即完成云服务器 i-xxxxxxxx 的救援运维工作。对于Windows服务器，如果进入了救援云服务器并且将被救服务器的根磁盘进行了联机操作，则在退出救援模式之前必须执行以下操作更新启动项。

```
bcdedit  /store d:\boot\bcd /set {bootmgr} device partition=D:
bcdedit  /store d:\boot\bcd /set {default} device partition=E:
bcdedit  /store d:\boot\bcd /set {default} osdevice partition=E:
```

![rescue-vm-instance01](/compute/vm/_images/rescue-vm-instance01.png)

## 操作步骤

### 修改系统密码

1. VNC 进入新云服务器 [rescue-i-xxxxxxxx] (点击云服务器旁边的小图标即可进入 VNC )

   ![rescue-vm-instance02](/compute/vm/_images/rescue-vm-instance02.png)

2. 将被救援云服务器的根盘挂载到目录

```
mount /dev/vdc1 /mnt
```

3. 使用 `chroot`，切换根盘目录

```
chroot /mnt
```

4. 使用命令 `passwd` 修改账户密码

```
passwd root
```

5. 退出并卸载被救援云服务器的根盘

```
exit;umount /mnt
```

6. 在云服务器列表中，鼠标右键被救援云服务器 ID，点选『取消救援』。



### 拷贝数据

可以让救援云服务器加入私有网络，将数据拷贝给同网段其它云服务器，也可以给救援云服务器绑定eip，将数据通过公网拷贝,例如救援云服务器192.168.1.6，数据存放云服务器为192.168.1.4，操作如下

1. 右键新云服务器 [rescue-i-xxxxxxxx] id -> 网络 -> 加入私有网络（192.168.1.0）

2. VNC 进入新云服务器 [rescue-i-xxxxxxxx] (点击云服务器旁边的小图标即可进入 VNC )

3. 将被救援云服务器的根盘挂载到目录

```
mount /dev/vdc1 /mnt
```

4. 使用 `scp` 拷贝数据，被救援云服务器的数据都在 /mnt 下

```
scp /mnt/opt/test.html root@192.168.1.4:/opt
```

5. 卸载被救援云服务器的根盘

```
umount /mnt
```

6. 在云服务器列表中，鼠标右键被救援云服务器 ID，点选『取消救援』。

### 重置fstab

1. VNC 进入新云服务器 [rescue-i-xxxxxxxx] (点击云服务器旁边的小图标即可进入 VNC )

2. 将被救援云服务器的根盘挂载到目录

```
mount /dev/vdc1 /mnt
```

3. 使用 `chroot`，切换根盘目录

```
chroot /mnt
```

4. 编辑 fstab

```
vi /etc/fstab
```

5. 退出并卸载被救援云服务器的根盘

```
exit;umount /mnt
```

6. 在云服务器列表中，鼠标右键被救援云服务器 ID，点选『取消救援』。

### 查看错误日志，根据日志内容恢复云服务器

1. VNC 进入新云服务器 [rescue-i-xxxxxxxx] (点击云服务器旁边的小图标即可进入 VNC )

2. 将被救援云服务器的根盘挂载到目录

```
mount /dev/vdc1 /mnt
```

3. 使用 `chroot`，切换根盘目录

```
chroot /mnt
```

4. 查看 messages 日志内容

```
cat /var/log/messages
```

5. 退出并卸载被救援云服务器的根盘

```
exit;umount /mnt
```

6. 在云服务器列表中，鼠标右键被救援云服务器 ID，点选『取消救援』。

