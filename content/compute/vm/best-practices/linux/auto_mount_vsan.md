---
title: "云服务器重启后自动挂载 Virtual SAN"
description: Test description
weight: 50
draft: false
enableToc: false

---

## 背景

用户使用青云 Virtual SAN，按照文档[Virtual SAN 共享存储](/storage/share/manual/vsan/#linux)可以正常挂载使用了，但是当云服务器重启后，发现 Virtual SAN无法自动进行挂载。

## 解决办法

```shell
iscsiadm -m node -T <目标IQN>  -p  <Virtual SAN 服务器IP> --op update -n node.startup -v automatic
```

以上命令只会在主机重启时自动登录，无法将磁盘自动挂载，需要手动 mount 命令进行挂载。

1、备份 fstab 文件

```shell
cp /etc/fstab /etc/fstab.bak #备份fstab
```

2、修改fstab

```shell
vi /etc/fstab

#在文件末尾添加一行：/dev/sda1 /mnt ext4 defaults,_netdev 0 0
#/dev/sda1 表示 Virtual SAN 的磁盘盘符
#/mnt 表示 Virtual SAN 需要自动挂载的目录
#ext4 表示磁盘分区格式
#_netdev 这个参数一定要加，否则服务器无法正常开机，原因是重启之前没有卸载掉iscsi挂载卷，如果每次关机或者重启之前都要手动卸载掉iscsi挂载卷太繁琐，所以就有专门的_netdev参数解决这个问题。_netdev是针对iscsi设备的特殊mount 选项，此挂载选择指示将在网络启动后挂载卷，在关闭网络前卸载掉卷。
```

3、执行 mount -a 检测是否报错信息，如无则表示配置没有问题。如出现报错，则需要检测添加的一行内容是否有误。

4、重启云服务器验证是否自动挂载。