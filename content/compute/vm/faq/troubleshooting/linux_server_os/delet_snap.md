---
title: "云服务器 /dev/loop0 磁盘100%监控告警处理方法"
description: test
weight: 20
draft: false
---

## 问题背景
使用 Ubuntu 云服务器，添加了磁盘使用率的告警策略，会在磁盘使用率没有达到100%时收到告警信息，通过排查可以发现。
```bash
#df -h
...
/dev/loop2 55M 55M 0 100% /snap/core18/1754
/dev/loop1 30M 30M 0 100% /snap/snapd/8140
/dev/loop0 31M 31M 0 100% /snap/snapd/7777
...
```

有如上输出，snap 使用的是 SquashFS 文件系统，这是一个只读的文件系统，所以它的大小在创建的时候一定是刚刚好能够存放它的内容就可以了，因为它是只读，所以它的大小之后不会改变。所以占用量肯定是 100%。

## 解决方法

可以卸载 snap 解决该问题。

```bash
# apt autoremove --purge snapd
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following packages will be REMOVED:
snapd*
0 upgraded, 0 newly installed, 1 to remove and 135 not upgraded.
After this operation, 57.8 MB disk space will be freed.
Do you want to continue? [Y/n]
(Reading database ... 102214 files and directories currently installed.)
Removing snapd (2.34.2+18.04) ...

Processing triggers for man-db (2.8.3-2) ...
(Reading database ... 102161 files and directories currently installed.)
Purging configuration files for snapd (2.34.2+18.04) ...
Stopping snap-core-4917.mount
Stopping unit snap-core-4917.mount
Waiting until unit snap-core-4917.mount is stopped [attempt 1]
snap-core-4917.mount is stopped.
Removing snap core and revision 4917
Removing snap-core-4917.mount
Final directory cleanup
Discarding preserved snap namespaces
Removing extra snap-confine apparmor rules
Removing snapd cache
Removing snapd state
```