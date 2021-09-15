---
title: "Linux云服务器同步NTP时间"
date: 2021-03-10T21:37:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false

---

## 背景介绍

青云云服务器默认会开启时间同步，云服务器中Agent进程会与平台系统NTP同步时间，对于业务需求很强时间准确性的用户，可自己配置NTP服务同步时间。

## 操作步骤

### Linux配置NTP服务

1. 环境配置说明

   云服务器系统版本       centos 7.7

   NTP服务端： 192.128.126.3

   NTP客户端： 192.168.126.2

   如果NTP服务器和客户端都是青云的云服务器，都需要到控制体右键云服务器id关闭时间同步，否则云服务器还会自动同步青云的NTP时间。

   ![ntp](../../../_images/ntp1.png)

2. 检查服务是否安装ntp、ntpdate

   ```
          #  rpm -qa | grep ntp
   ```

3. 安装服务

   ```
          # yum install ntp ntpdate -y
   ```

4. 修改配置文件
   1. 修改配置文件/etc/ntp.conf ,注释默认NTP服务

    ![ntp](../../../_images/ntp2.png)

   2. 然后添加新NTP服务配置

    ![ntp](../../../_images/ntp3.png)

   ```
   logfile /var/log/ntpd.log  #日志文件
   
   restrict 192.168.126.0 mask 255.255.255.0 nomodify notrap   #授权192.168.126.0/24 可以从云服务器同步时间
   
   server 192.168.126.3 biurst   #外部时间不可以，可使用本地时间
   fudge 127.0.0.1 stratum 10
   
   server 0.cn.pool.ntp.org    #中国ntp时间服务器域名
   server 1.cn.pool.ntp.org
   server 2.cn.pool.ntp.org
   server 3.cn.pool.ntp.org
   
   restrict 0.cn.pool.ntpp.org nomodify notrap noquery   #允许上层时间服务器修改本金时间
   restrict 1.cn.pool.ntp.org nomodify notrap noquery
   restrict 2.cn.pool.ntp.org nomodify notrap noquery
   restrict 3.cn.pool.ntpp.org nomodify notrap noquery
   ```

5. 重启NTP服务并配置开机自启

   ```
    #systemctl restart ntpd
    #systemctl enable ntpd
   ```

6. 手动同步本地时间

    ![ntp](../../../_images/ntp4.png)

   ```
    # ntpdate -u 1.cn.pool.ntp.org
   ```

7. 查看NTP同步信息

   第一查询输入命令出现图一情况，需要等待几分钟，再次输入命令后可查看到结果

    ![ntp](../../../_images/ntp5.png)

     ![ntp](../../../_images/ntp6.png)

###  客户端配置

1. 安装NTP服务端

   ```
     # rpm-qa| grep ntp
   
     # yum install ntp ntpdate -y
   ```

2. 设置NTP配置文件

    ![ntp](../../../_images/ntp8.png)

   ```
   retrict 192.168.126.3  nomodify notrap noquery   #运行上层时间服务器主动修改本机时间
   
   server  192.168.126.3       #ntp服务器ip地址
   
   server 127.0.0.1                # 当外部时间不可用时，使用本地时间
   fudge 127.0.0.1 stratum 10
   ```

3. 重启NTP服务并配置开机自启


   ```
   # systemctl restart ntpd
   
   # systemctl enable ntpd
   
   ```

4. 查看NTP服务时间同步

   ```
   #  ntpq -p
   ```

    ![ntp](../../../_images/ntp7.png)

   | 名称   | 说明                                                         |
   | ------ | ------------------------------------------------------------ |
   | *      | 表示目前使用的 NTP 服务器。                                  |
   | remote | 响应这个请求的 NTP 服务器的名称。                            |
   | refid  | NTP 服务器使用的上一级 NTP 服务器。                          |
   | st     | remote 远程服务器的级别。服务器从高到低级别设定为1 - 16，为了减缓负荷和网络堵塞，原则上建议避免直接连接到级别为1的服务器。 |
   | when   | 上一次成功请求之后到现在的秒数。                             |
   | poll   | 本地机和远程服务器多少时间进行一次同步（单位为秒）。初始运行 NTP 时，poll 值会比较小，和服务器同步的频率增加，建议尽快调整到正确的时间范围。调整之后，poll 值会逐渐增大，同步的频率也将会相应减小。 |
   | reach  | 八进制值，用来测试能否和服务器连接。每成功连接一次，reach 的值将会增加。 |
   | delay  | 从本地机发送同步要求到 NTP 服务器的 round trip time。        |
   | offset | 云服务器通过 NTP 时钟同步与所同步时间源的时间偏移量，单位为毫秒（ms）。offset 越接近于0，云服务器和 NTP 服务器的时间越接近。 |
   | jitter | 用来做统计的值。统计在特定连续的连接数里 offset 的分布情况。即 jitter 数值的绝对值越小，云服务器的时间就越精确。 |

   