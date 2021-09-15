---
title: "Linux 时间不同步解决办法"
description: Test description
weight: 40
draft: false
enableToc: false
---

本文以 CentOS 7.9系统为例介绍如何解决 Linux 系统时间不同步

## 解决方法

1. 执行 `yum install -y ntpdate` ，安装ntpdate，ntpdate 是一个 Linux 时间同步服务软件。

2. 输入 `ntpdate time.nuri.net` 同步时间，如果 time.nuri.net 服务器同步不了，可以换下面的时间服务器。  
   time.nist.gov  
   time.nuri.net  
   0.asia.pool.ntp.org  
   1.asia.pool.ntp.org  
   2.asia.pool.ntp.org  
   3.asia.pool.ntp.org  

3.定时执行时间同步任务。执行`crontab -e`来添加定时任务。

```
# crontab -e   #编辑定时任务
* */1 * * * root ntpdatetime.nuri.net   #每小时进行一次同步
```
