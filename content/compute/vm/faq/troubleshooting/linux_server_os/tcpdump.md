---
title: "网络异常时如何抓取数据包"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 40
---

本文主要介绍了Linux和Windows环境下如何使用抓包工具进行抓包。

## 详细信息

如果源服务器访问目标服务器时出现异常，您可以抓包获取最原始的交互数据进行排查分析。

## 操作步骤

### Linux 环境中的抓包工具

Linux 环境中通常使用 TCPDump 工具进行抓包和分析，TCPDump 工具是所有 Linux 发行版本预装的数据包抓取和分析工具。有关TCPDump 工具的获取和安装方法，请参见[TCPDump官方文档](http://www.tcpdump.org/)。

关于 tcpdump 命令的说明如下所示（区分大小写）。

```
tcpdump [ -AbdDefhHIJKlLnNOpqStuUvxX# ] 
[ -B buffer_size ] 
[ -c count ] 
[ -C file_size ] [ -G rotate_seconds ] [ -F file ] 
[ -i interface ] [ -j tstamp_type ] [ -m module ] [ -M secret ] 
[ --number ] [ -Q in|out|inout ] 
[ -r file ] [ -V file ] [ -s snaplen ] [ -T type ] [ -w file ] 
[ -W filecount ] 
[ -E spi@ipaddr algo:secret,... ] 
[ -y datalinktype ] [ -z postrotate-command ] [ -Z user ] 
[ --time-stamp-precision=tstamp_precision ] 
[ --immediate-mode ] [ --version ] 
[ expression ]
```

- -s：用于设置数据包抓取长度。如果-s为0，则表示自动选择合适的长度来抓取数据包。
- -w：用于将抓包结果导出到文件，而不是在控制台进行分析和打印输出。
- -i：用于指定需要监听的接口（网卡）。
- -vvv：用于输出详细的交互数据。
- expression：是一个正则表达式，用于过滤报文，主要包含如下几类：
  - 指定类型的关键字：包括host（主机）、net（网络）和port（端口）。
  - 指定传输方向的关键字：包括src（源）、dst（目标）、dst or src（源或目标）和dst and src（源和目标）。
  - 指定协议的关键字：包括ICMP、IP、ARP、RARP、TCP和UDP等协议类型。
- 关于其他参数说明及用法请参见[tcpdump的Manpage](http://www.tcpdump.org/manpages/tcpdump.1.html)。

关于tcpdump命令常见用法和示例输出的详细信息。

- 执行`tcpdump -s 0 -i eth0 port 22`命令，抓取eth0网卡22端口的交互数据。

  系统显示类似如下。
  
  ```
  tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
  listening on eth0, link-type EN10MB (Ethernet), capture size 65535 bytes
  20:24:59.414951 IP 172.xx.xx.226.ssh &gt; 42.xx.xx.107.43414: Flags [P.], seq 442372:442536, ack 53, win 141, length 164
  20:24:59.415002 IP 172.xx.xx.226.ssh &gt; 42.xx.xx.107.43414: Flags [P.], seq 442536:442700, ack 53, win 141, length 164
  20:24:59.415052 IP 172.xx.xx.226.ssh &gt; 42.xx.xx.107.43414: Flags [P.], seq 442700:442864, ack 53, win 141, length 164
  20:24:59.415103 IP 172.xx.xx.226.ssh &gt; 42.xx.xx.107.43414: Flags [P.], seq 442864:443028, ack 53, win 141, length 164
  ```
  
- 执行`tcpdump -s 0 -i eth1 -vvv port 22`命令，抓取eth1网卡发送给22端口的交互数据，并在控制台输出详细交互信息。

  系统显示类似如下。
  
  ```
  tcpdump: listening on eth1, link-type EN10MB (Ethernet), capture size 65535 bytes
  20:24:20.991006 IP (tos 0x10, ttl 64, id 22747, offset 0, flags [DF], proto TCP (6), length 316)
  172.xx.xx.226.ssh &gt; 42.xx.xx.107.43414: Flags [P.], cksum 0x2504 (incorrect -&gt; 0x270d), seq 133624:133900, ack 1, win 141, length 276
  20:24:20.991033 IP (tos 0x0, ttl 53, id 2348, offset 0, flags [DF], proto TCP (6), length 92)
  42.xx.xx.107.43414 &gt; 172.xx.xx.226.ssh: Flags [P.], cksum 0x4759 (correct), seq 1:53, ack 129036, win 15472, length 52
  ```
  
- 执行`tcpdump -s 0 -i eth1 -vvv dst 223.xx.xx.5 and icmp`命令，抓取eth1网卡发送至指定IP地址的PING交互数据，并输出详细交互数据。

  系统显示类似如下。
  
  ```
  tcpdump: listening on eth1, link-type EN10MB (Ethernet), capture size 65535 bytes
  20:26:00.368958 IP (tos 0x0, ttl 64, id 0, offset 0, flags [DF], proto ICMP (1), length 84)
  172.xx.xx.226 &gt; public1.alidns.com: ICMP echo request, id 55097, seq 341, length 64
  20:26:01.369996 IP (tos 0x0, ttl 64, id 0, offset 0, flags [DF], proto ICMP (1), length 84)
  172.xx.xx.226 &gt; public1.alidns.com: ICMP echo request, id 55097, seq 342, length 64
  20:26:02.371058 IP (tos 0x0, ttl 64, id 0, offset 0, flags [DF], proto ICMP (1), length 84)
  172.xx.xx.226 &gt; public1.alidns.com: ICMP echo request, id 55097, seq 343, length 64
  20:26:03.372181 IP (tos 0x0, ttl 64, id 0, offset 0, flags [DF], proto ICMP (1), length 84)
  172.xx.xx.226 &gt; public1.alidns.com: ICMP echo request, id 55097, seq 344, length 64
  ```
  
- 执行`tcpdump -i any -s 0 -w test.cap`命令，抓取系统内所有接口数据并保存到指定文件。

  > **说明**
  >
  > 您如果通过`cat`、`vim`命令查看保存的文件，都会显示为乱码。此时您可以执行`tcpdump -r test.cap`命令，查看信息。或者您可以使用Wireshark工具查看信息。

  系统显示类似如下。

  ```
  tcpdump: listening on any, link-type LINUX_SLL (Linux cooked), capture size 65535 bytes
  ```

### Windows环境中的抓包工具

Windows 环境中一般使用免费的较为流行的 Wireshark 开源工具进行抓包和分析。请参见[Wireshark官方网站](https://www.wireshark.org/)，获取并安装Wireshark工具，然后进行抓包。

1. 安装并打开Wireshark工具。
2. 依次点击**捕获**>**选项**。
3. 在**Wireshark 捕获接口**界面中，根据接口名称或对应的IP地址选择需要进行抓包的网卡，然后点击**开始**。
   ![](../../../ipwhiz/wireshark.png)
4. 抓取足量数据包后，依次点击**捕获**>**停止**。
5. 依次点击**文件**>**保存**，将抓包结果保存到指定文件。
6. 更多有关Wireshark工具使用和数据分析方法，请参见[Wireshark官方网站](https://www.wireshark.org/download.html)。

### 抓包分析流程

出现异常时，您可以抓取数据包进行分析。抓包时请确保从源服务器和目标服务器同时并发操作，以便进行对比分析，具体操作步骤如下：

1. 确认源服务器和目标服务器进行数据交互通过的网卡。
2. 如果源服务器通过NAT共享方式访问公网，则访问[百度IP地址库](https://apis.baidu.com/store/aladdin/land?cardType=ipSearch)，获取本地网络对应的公网IP地址。
3. 利用前文所述工具，从源服务器对目标服务器地址的目标端口和网卡进行抓包，或者进行完整抓包。
4. 利用前文所述工具，从目标服务器对源服务器地址和网卡进行抓包，或者进行完整抓包，然后进行分析。
5. 若问题无法解决，您可以创建工单并附上抓包数据文件，提交工单后，青云云技术支持会排查问题并通过工单向您反馈结果。