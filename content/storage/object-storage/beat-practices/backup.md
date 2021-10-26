---
title: "实时增量数据备份解决方案"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 2
---


实时且增量地对数据进行备份是用户的普遍需求，本方案将描述如何在 Linux 下将本地业务数据实时备份至 QingStor 对象存储的 Bucket 中。

本方案采用 lsyncd 实时地监控指定目录在文件系统层次的变化，当该目录下发生文件创建、重命名、删除等操作时，[qsctl](/storage/object-storage/manual/tool/qsctl/) 便会被自动调用以将数据同步至指定的 QingSor 对象存储的 Bucket 中。因为 qsctl 支持增量同步，所以整个方案可以做到实时且增量的数据备份。

下面介绍完整的配置步骤。

## 环境要求

本方案仅支持 Linux Kernel 2.6.13 及其以后的版本，且要求 Kernel 编译选项 `CONFIG_INOTIFY_USER` 为开启状态。用户可以使用如下命令来确认自己的系统是否支持该方案:

**本地终端输入如下命令行：**
```bash
grep INOTIFY_USER /boot/config-$(uname -r)
```

**返回结果：**

```bash
CONFIG_INOTIFY_USER=y
```

则说明可以采用该方案。

## 软件配置

1. 安装 lsyncd，使用系统对应的包管理器进行安装即可

   Debian、Ubuntu 等系统：

   ```bash
   sudo apt install lsyncd
   ```

   CentOS、Fedora 等系统：

   ```bash
   sudo yum install epel-release && yum makecache
   sudo yum install lsyncd
   ```

2. 使用 pip 安装并配置 qsctl，qsctl 的详细配置可以参考 [qsctl 的文档](/storage/object-storage/manual/tool/qsctl/)

   ```bash
   pip install qsctl -U
   ```

## 使用方法

假设需要同步的目录为 `/tmp/example`， 待同步的 QingStor 对象存储的 Bucket 为 `example-bucket`，lsyncd 的配置文件为 `~/qingstor-backup.conf`

### 编辑配置文件

**lsyncd 配置文件**
   ```plain_text
   settings {
      logfile    = "/tmp/lsyncd.log",
      statusFile = "/tmp/lsyncd.status",
      maxDelays = 10,
   }

   bash = {
      delay = 5,
      maxProcesses = 1,
      onCreate = "/path/to/qsctl sync ^source ^target --delete",
      onModify = "/path/to/qsctl sync ^source ^target",
      onDelete = "/path/to/qsctl sync ^source ^target --delete",
      onMove   = "/path/to/qsctl sync ^source ^target --delete",
      onStartup = "/path/to/qsctl sync ^source ^target --delete",
   }

   sync {
   bash,
   source = "/tmp/example",
   target = "qs://example-bucket"
   }
   ```

**qsctl 配置文件**

若不知道 qsctl 的完整路径，可以使用 `which qsctl` 以获取。配置文件中，各配置项含义说明如下：

- `logfile:` 日志文件配置。
- `statusFile:` 状态文件配置。
- `maxDelays:` 当延时的事件到达此限制后将会直接运行，即使还没有到达延时的事件，单位为秒。
- `delay:` 延时设置，事件触发后将会等待对应时间再运行，单位为秒。
- `maxProcesses:` 最大进程数配置，最多允许同时运行的进程数。

### 测试配置

1. 由于 lsyncd 没有默认的配置文件，运行 lsyncd 时，需在命令行中通过参数的形式给出。

   ```bash
   $ lsyncd -nodaemon ~/qingstor-backup.conf
   ```

2. 创建一个文件并等待五秒左右

   ```bash
   $ echo "Hello, QingStor!" > /tmp/example/
   ```

3. 查看 “hello.txt” 是否在 Bucket “example-bucket” 中存在

   ```bash
   $ qsctl ls qs://example-bucket/hello.txt
   ```

4. 若存在，则表示配置成功，否则表示配置存在问题。

### 后台运行 lsyncd

1. 当测试配置没有问题，且测试时运行结果符合预期时，可以将 lsyncd 放入后台运行

   ```bash
   $ lsyncd ~/qingstor-backup.conf
   ```

2. 查看配置文件中指定的状态文件以了解 lsyncd 的运行状态

   ```bash
   $ cat /tmp/lsyncd.status
   Lsyncd status report at Mon Jan 16 02:31:48 2017

   Sync1 source=/tmp/incron/
   There are 0 delays
   Excluding:
   nothing.

   Inotify watching 2 directories
   1: /tmp/incron/
   2: /tmp/incron/test/
   ```

3. 查看配置文件中指定的日志文件地址以查看 lsyncd 的运行日志

   ```bash
   $ cat /tmp/lsyncd.log
   Mon Jan 16 02:10:49 2017 Normal: Event Init spawns action "/home/xuanwo/.pyenv/shims/qsctl"
   Mon Jan 16 02:10:51 2017 Error: Failure on startup of "/tmp/incron/".
   ......
   Mon Jan 16 02:31:38 2017 Normal: Startup of "/tmp/incron/" finished.
   Mon Jan 16 02:33:46 2017 Normal: --- TERM signal, fading ---
   ```

