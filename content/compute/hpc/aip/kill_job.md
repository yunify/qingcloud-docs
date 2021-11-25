---
title: "杀作业"
linkTitle: "杀作业"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 15
---

杀作业使用ckill命令

Usage: ckill

```
        [-h] [-V] [-l] [-m host_name] [-q queue_name] [-g job_group]

        [-u user_name | -u all] [0] [-r | -s sigval] [-J job_name] 

        [jobId | "jobId[index_list]"]...
```

### 杀指定作业

ckill

![](../_images/kill_job.png)

### 用户杀自己所有作业

ckill 0

![img](../_images/kill_all.png)
