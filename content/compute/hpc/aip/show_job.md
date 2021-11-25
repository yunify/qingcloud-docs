---
title: "查看作业"
linkTitle: "查看作业"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 5
---

### 查看作业状态

查看作业命令：cjobs

-l 作业详细信息

-C 查看指定时间段的作业

-q 查看指定队列上的作业

-u 查看指定用户、用户组的作业

无参数为做作业概要信息

![img](../_images/status1.png)

作业状态说明：

```
WAIT: 等待，进一步说明参考 WaitReason 
WSTOP: 等待时被暂停，进一步说明参考 WaitReason 
RUN: 运行 
SYSSTOP: 被调度策略暂停，进一步说明参考 StopReason 
USRSTOP: 被用户或管理员暂停，进一步说明参考 StopReason 
ZOMBIE: 作业进程异常，处于僵尸状态，需要人工干预 
EXIT: 退出或以非 0 退出码结束，进一步说明参考 EndReason 
FINISH: 作业正常结束 
UNKNOWN: 由于作业运行主机失去联系，状态未知 
ERROR: 未知原因出错
```

查看某个作业详细信息

cjobs -l

查看某个用户作业

cjobs -u <用户名>

管理员查看所有用户作业

cjobs -u all

### 查看历史作业

chist

Usage: chist

```
        [-h] [-V] [-l] [-b] [-w] [-a] [-d] [-e] [-p] [-s] [-r] [-j] 

         [-f logfile_name | -n num_logfiles | -n min_logfile, max_logfile]

         [-C time0,time1] [-S time0,time1] [-D time0,time1]

         [-N host_spec] [-P project_name]

         [-q queue_name] [-m host_name] [-J job_name]

         [-u user_name | -u all] [jobId | "jobId[index]" ...]

   chist [-h] [-V] -t [-f logfile_name] [-T time0,time1]
```

参数说明

```
   -d 显示已完成作业

   -e 显示退出作业

   -p 显示pending作业

   -s 显示suspended作业

    -r 显示正在运行作业
```

不加参数显示all pending, suspended, and running jobs

显示指定用户某个时间段内的作业

![img](../_images/user_job.png)
