---
title: "如何使用救援主机"
description: test
draft: false
---

### 救援主机

救援主机（Rescue Instance）可以对一台故障的主机进行人工运维。

在主机列表中，鼠标右键要操作的主机（必须是关机状态），并点击『救援主机』。救援主机（假设 ID 为 i-xxxxxxxx ）时，会产生一台新主机以 rescue-i-xxxxxxxx 命名，并且被救援主机 i-xxxxxxxx 的根盘挂载到了新主机 rescue-i-xxxxxxxx 里面。在新主机 rescue-i-xxxxxxxx 里面完成运维操作后，在控制台对被救援主机 i-xxxxxxxx 执行『取消救援』的操作，即完成主机 i-xxxxxxxx 的救援运维工作。

![rescue-vm-instance01](..\_images\rescue-vm-instance01.png)



### 修改系统密码

1.VNC 进入新主机 [rescue-i-xxxxxxxx] (点击主机旁边的小图标即可进入 VNC )



![rescue-vm-instance02](..\_images\rescue-vm-instance02.png)

2.将被救援主机的根盘挂载到目录

```
mount /dev/sdc1 /mnt
```

3.使用 chroot，切换根盘目录

```
chroot /mnt
```

4.使用命令 passwd 修改账户密码

```
passwd root
```

5.退出并卸载被救援主机的根盘

```
exit;umount /mnt
```

6.在主机列表中，鼠标右键被救援主机 ID，点选『取消救援』。



### 拷贝数据

可以让救援主机加入私有网络，将数据拷贝给同网段其它主机，也可以给救援主机绑定eip，将数据通过公网拷贝,例如救援主机192.168.1.6，数据存放主机为192.168.1.4，操作如下

1.右键新主机 [rescue-i-xxxxxxxx] id -> 网络 -> 加入私有网络（192.168.1.0）

2.VNC 进入新主机 [rescue-i-xxxxxxxx] (点击主机旁边的小图标即可进入 VNC )

3.将被救援主机的根盘挂载到目录

```
mount /dev/sdc1 /mnt
```

5.使用scp拷贝数据，被救援主机的数据都在/mnt下

```
scp /mnt/opt/test.html root@192.168.1.4:/opt
```

6.卸载被救援主机的根盘

```
umount /mnt
```

7.在主机列表中，鼠标右键被救援主机 ID，点选『取消救援』。

### 重置fstab

1.VNC 进入新主机 [rescue-i-xxxxxxxx] (点击主机旁边的小图标即可进入 VNC )

2.将被救援主机的根盘挂载到目录

```
mount /dev/sdc1 /mnt
```

3.使用 chroot，切换根盘目录

```
chroot /mnt
```

4.编辑fstab

```
vi /etc/fstab
```

5.退出并卸载被救援主机的根盘

```
exit;umount /mnt
```

6.在主机列表中，鼠标右键被救援主机 ID，点选『取消救援』。

### 查看错误日志，根据日志内容恢复主机

1.VNC 进入新主机 [rescue-i-xxxxxxxx] (点击主机旁边的小图标即可进入 VNC )

2.将被救援主机的根盘挂载到目录

```
mount /dev/sdc1 /mnt
```

3.使用 chroot，切换根盘目录

```
chroot /mnt
```

4.查看messages日志内容

```
cat /var/log/messages
```

5.退出并卸载被救援主机的根盘

```
exit;umount /mnt
```

6.在主机列表中，鼠标右键被救援主机 ID，点选『取消救援』。

