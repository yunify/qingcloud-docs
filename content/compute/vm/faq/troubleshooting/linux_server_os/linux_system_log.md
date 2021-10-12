---
title: "详解 Linux 中的日志及用日志来排查错误的方法"
description: Test description
weight: 40
draft: false
enableToc: false

---

许多有价值的日志文件都是由 Linux 自动地为你创建的。你可以在 /var/log 目录中找到它们。下面是在一个典型的 Ubuntu 系统中这个目录的样子：

![](../../../_images/varlog.png)

## 日志分类

一些最为重要的 Linux 系统日志包括：

- /var/log/syslog 或 /var/log/messages 存储所有的全局系统活动数据，包括开机信息。基于 Debian 的系统如 Ubuntu 在 /var/log/syslog 中存储它们，而基于 RedHat 的系统如 RHEL 或 CentOS 则在 /var/log/messages 中存储它们。
- /var/log/auth.log 或 /var/log/secure 存储来自可插拔认证模块( PAM )的日志，包括成功的登录，失败的登录尝试和认证方式。Ubuntu 和 Debian 在 /var/log/auth.log 中存储认证信息，而 RedHat 和 CentOS 则在 /var/log/secure 中存储该信息。
- /var/log/kern 存储内核的错误和警告数据，这对于排除与定制内核相关的故障尤为实用。
- /var/log/cron 存储有关 cron 作业的信息。使用这个数据来确保你的 cron 作业正成功地运行着。
- Digital Ocean 有一个关于这些文件的完整教程，介绍了 rsyslog 如何在常见的发行版本如 RedHat 和 CentOS 中创建它们。

## 日志写入

应用程序也会在这个目录中写入日志文件。例如像  Apache，Nginx，MySQL 等常见的服务器程序可以在这个目录中写入日志文件。其中一些日志文件由应用程序自己创建，其他的则通过 syslog (具体见下文)来创建。

### 什么是 Syslog？

Linux 系统日志文件是如何创建的呢？答案是通过 syslog 守护程序，它在 syslog 套接字 /dev/log 上监听日志信息，然后将它们写入适当的日志文件中。

单词 “syslog”  代表几个意思，并经常被用来简称如下的几个名称之一：

Syslog 守护进程 — 一个用来接收、处理和发送 syslog 信息的程序。它可以远程发送 syslog 到一个集中式的服务器或写入到一个本地文件。常见的例子包括 rsyslogd 和 syslog-ng。在这种使用方式中，人们常说“发送到 syslog”。
Syslog 协议 — 一个指定日志如何通过网络来传送的传输协议和一个针对 syslog 信息(具体见下文) 的数据格式的定义。它在 RFC-5424 中被正式定义。对于文本日志，标准的端口是 514，对于加密日志，端口是 6514。在这种使用方式中，人们常说“通过 syslog 传送”。
Syslog 信息 — syslog 格式的日志信息或事件，它包括一个带有几个标准字段的消息头。在这种使用方式中，人们常说“发送 syslog”。
Syslog 信息或事件包括一个带有几个标准字段的消息头，可以使分析和路由更方便。它们包括时间戳、应用程序的名称、在系统中信息来源的分类或位置、以及事件的优先级。

下面展示的是一个包含 syslog 消息头的日志信息，它来自于控制着到该系统的远程登录的 sshd 守护进程，这个信息描述的是一次失败的登录尝试：

```
<34>1 2003-10-11T22:14:15.003Z server1.com sshd - - pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=10.0.2.2
```

### Syslog 格式和字段

每条 syslog 信息包含一个带有字段的信息头，这些字段是结构化的数据，使得分析和路由事件更加容易。下面是我们使用的用来产生上面的 syslog 例子的格式，你可以将每个值匹配到一个特定的字段的名称上。 

``` 
<%pri%>%protocol-version% %timestamp:::date-rfc3339% %HOSTNAME% %app-name% %procid% %msgid% %msg%n
```

### 查找或排错时最常使用的 syslog 字段

- 时间戳
  时间戳 (上面的例子为 2003-10-11T22:14:15.003Z) 暗示了在系统中发送该信息的时间和日期。这个时间在另一系统上接收该信息时可能会有所不同。上面例子中的时间戳可以分解为：

  **2003-10-11 年，月，日。**

  - T 为时间戳的必需元素，它将日期和时间分隔开。
    22:14:15.003 是 24 小时制的时间，包括进入下一秒的毫秒数(003)。
  - Z 是一个可选元素，指的是 UTC 时间，除了 Z，这个例子还可以包括一个偏移量，例如 -08:00，这意味着时间从 UTC 偏移 8 小时，即 PST 时间。

- 主机名
  主机名 字段(在上面的例子中对应 server1.com) 指的是主机的名称或发送信息的系统。

- 应用名
  应用名 字段(在上面的例子中对应 sshd:auth) 指的是发送信息的程序的名称。

- 优先级
  优先级字段或缩写为 pri (在上面的例子中对应 ) 告诉我们这个事件有多紧急或多严峻。它由两个数字字段组成：设备字段和紧急性字段。紧急性字段从代表 debug 类事件的数字 7 一直到代表紧急事件的数字 0 。设备字段描述了哪个进程创建了该事件。它从代表内核信息的数字 0 到代表本地应用使用的 23 。

- Pri 有两种输出方式。第一种是以一个单独的数字表示，可以这样计算：先用设备字段的值乘以 8，再加上紧急性字段的值：(设备字段)(8) + (紧急性字段)。第二种是 pri 文本，将以“设备字段.紧急性字段” 的字符串格式输出。后一种格式更方便阅读和搜索，但占据更多的存储空间。

## 日志排错

### **登录失败原因**

如果你想检查你的系统是否安全，你可以在验证日志中检查登录失败的和登录成功但可疑的用户。当有人通过不正当或无效的凭据来登录时会出现认证失败，这通常发生在使用 SSH 进行远程登录或 su 到本地其他用户来进行访问权时。这些是由插入式验证模块（PAM）来记录的。在你的日志中会看到像 Failed password 和 user unknown 这样的字符串。而成功认证记录则会包括像 Accepted password 和 session opened 这样的字符串。

**失败的例子**

```
pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=10.0.2.2 

Failed password for invalid user hoover from 10.0.2.2 port 4791 ssh2 

pam_unix(sshd:auth): check pass; user unknown 

PAM service(sshd) ignoring max retries; 6 > 3

```

**成功的例子** 

```
Accepted password for hoover from 10.0.2.2 port 4792 ssh2 

pam_unix(sshd:session): session opened for user hoover by (uid=0) 

pam_unix(sshd:session): session closed for user hoover

```

你可以使用 grep 来查找哪些用户失败登录的次数最多。这些都是潜在的攻击者正在尝试和访问失败的账户。这是一个在 ubuntu 系统上的例子。 

```
$ grep "invalid user" /var/log/auth.log | cut -d ' ' -f 10 | sort | uniq -c | sort -nr 

23 oracle 

18 postgres 

17 nagios 

10 zabbix 

6 test

```

## 日志命令

由于没有标准格式，所以你需要为每个应用程序的日志使用不同的命令。日志管理系统，可以自动分析日志，将它们有效的归类，帮助你提取关键字。

### 重启的原因

有时候，一台服务器由于系统崩溃或重启而宕机。你怎么知道它何时发生，是谁做的？

关机命令
如果有人手动运行 shutdown 命令，你可以在验证日志文件中看到它。在这里，你可以看到，有人从 IP 50.0.134.125 上作为 ubuntu 的用户远程登录了，然后关闭了系统。

```
Mar 19 18:36:41 ip-172-31-11-231 sshd[23437]: Accepted publickey for ubuntu from 50.0.134.125 port 52538 ssh 

Mar 19 18:36:41 ip-172-31-11-231 23437]:sshd[ pam_unix(sshd:session): session opened for user ubuntu by (uid=0) 

Mar 19 18:37:09 ip-172-31-11-231 sudo: ubuntu : TTY=pts/1 ; PWD=/home/ubuntu ; USER=root ; COMMAND=/sbin/shutdown -r now

```

### 内核初始化

如果你想看看服务器重新启动的所有原因（包括崩溃），你可以从内核初始化日志中寻找。你需要搜索内核类（kernel）和 cpu 初始化（Initializing）的信息。 

```
Mar 19 18:39:30 ip-172-31-11-231 kernel: [ 0.000000] Initializing cgroup subsys cpuset 

Mar 19 18:39:30 ip-172-31-11-231 kernel: [ 0.000000] Initializing cgroup subsys cpu 

Mar 19 18:39:30 ip-172-31-11-231 kernel: [ 0.000000] Linux version 3.8.0-44-generic (buildd@tipua) (gcc version 4.6.3 (Ubuntu/Linaro 4.6.3-1ubuntu5) ) #66~precise1-Ubuntu SMP Tue Jul 15 04:01:04 UTC 2014 (Ubuntu 3.8.0-44.66~precise1-generic 3.8.13.25)

```

### 检测内存问题

有很多原因可能导致服务器崩溃，但一个常见的原因是内存用尽。

当你系统的内存不足时，进程会被杀死，通常会杀死使用最多资源的进程。当系统使用了所有内存，而新的或现有的进程试图使用更多的内存时就会出现错误。在你的日志文件查找像 Out of Memory 这样的字符串或类似 kill 这样的内核警告信息。这些信息表明系统故意杀死进程或应用程序，而不是允许进程崩溃。

例如:

```
[33238.178288] Out of memory: Kill process 6230 (firefox) score 53 or sacrifice child 

[29923450.995084] select 5230 (docker), adj 0, size 708, to kill

```

你可以使用像 grep 这样的工具找到这些日志。这个例子是在 ubuntu 中: 

```
$ grep “Out of memory” /var/log/syslog 

[33238.178288] Out of memory: Kill process 6230 (firefox) score 53 or sacrifice child

```

请记住，grep 也要使用内存，所以只是运行 grep 也可能导致内存不足的错误。这是另一个你应该中央化存储日志的原因！

### 定时任务错误日志

cron 守护程序是一个调度器，可以在指定的日期和时间运行进程。如果进程运行失败或无法完成，那么 cron 的错误出现在你的日志文件中。具体取决于你的发行版，你可以在 /var/log/cron，/var/log/messages，和 /var/log/syslog 几个位置找到这个日志。cron 任务失败原因有很多。通常情况下，问题出在进程中而不是 cron 守护进程本身。

默认情况下，cron 任务的输出会通过 postfix 发送电子邮件。这是一个显示了该邮件已经发送的日志。不幸的是，你不能在这里看到邮件的内容。

```
Mar 13 16:35:01 PSQ110 postfix/pickup[15158]: C3EDC5800B4: uid=1001 from=<hoover> 

Mar 13 16:35:01 PSQ110 postfix/cleanup[15727]: C3EDC5800B4: message-id=20150310110501.C3EDC5800B4@PSQ110 

Mar 13 16:35:01 PSQ110 postfix/qmgr[15159]: C3EDC5800B4: from=hoover@loggly.com, size=607, nrcpt=1 (queue active) 

Mar 13 16:35:05 PSQ110 postfix/smtp[15729]: C3EDC5800B4: to=hoover@loggly.com, relay=gmail-smtp-in.l.google.com[74.125.130.26]:25, delay=4.1, delays=0.26/0/2.2/1.7, dsn=2.0.0, status=sent (250 2.0.0 OK 1425985505 f16si501651pdj.5 - gsmtp)

```

你可以考虑将 cron 的标准输出记录到日志中，以帮助你定位问题。这是一个你怎样使用 logger 命令重定向 cron 标准输出到 syslog的例子。用你的脚本来代替 echo 命令，helloCron 可以设置为任何你想要的应用程序的名字。

```
*/5 * * * * echo ‘Hello World’ 2>&1 | /usr/bin/logger -t helloCron
```

它创建的日志条目：

```
Apr 28 22:20:01 ip-172-31-11-231 CRON[15296]: (ubuntu) CMD (echo 'Hello World!' 2>&1 | /usr/bin/logger -t helloCron) 

Apr 28 22:20:01 ip-172-31-11-231 helloCron: Hello World!

```

每个 cron 任务将根据任务的具体类型以及如何输出数据来记录不同的日志。

希望在日志中有问题根源的线索，也可以根据需要添加额外的日志记录。