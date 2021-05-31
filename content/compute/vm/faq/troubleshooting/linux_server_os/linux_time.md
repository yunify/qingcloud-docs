---
title: "Linux时间不同步解决办法"
date: 2021-05-28T00:38:25+09:00
description: Test description
weight: 40
draft: false
enableToc: false
---

### 概述

本文以CentOS 7.9系统为例介绍如何解决Linux系统时间不同步

### 解决方法

1.安装 yum install -y ntpdate ，ntpdate 是一个Linux时间同步服务软件

```
yum install ntpdate
```

2.输入ntpdate time.nuri.net同步时间，如果 time.nuri.net服务器同步不了，可以换下面的时间服务器试试：

time.nist.gov
time.nuri.net
0.asia.pool.ntp.org
1.asia.pool.ntp.org
2.asia.pool.ntp.org
3.asia.pool.ntp.org

```
ntpdate time.nuri.net
```

3.定时执行时间同步任务，所以我们利用crontab -e 来添加定时任务

```
crontab -e   #编辑定时任务
* */1 * * * root ntpdatetime.nuri.net   #每小时进行一次同步
```
