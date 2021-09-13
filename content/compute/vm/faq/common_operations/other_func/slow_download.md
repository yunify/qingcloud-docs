---
title: "云服务器测试带宽速度"
description: test
weight: 20
draft: false
---


## 问题背景
为了提高用户在青云中的下载体验，对于公网IP的带宽小于 10Mbps 的，下行（出云）带宽等于公网IP带宽，上行（入云）带宽自动提高到 10Mbps; 带宽大于 10Mbps 的，上下行带宽保持和申请带宽相同。

下面我们用实际案例简单说明下：
### 案例1 
假设通过控制台申请了一个 5Mbps 的公网IP，分配给云服务器。此时，云服务器实际下行（出云）的带宽为 5Mbps，也就是此时通过本地电脑从云服务器获取数据的带宽为5Mbps，速度为625KB/s左右;从互联网下载数据到云服务器上行（入云）带宽为 10Mbps，速度为 1.25MB/s 左右。

### 案例2
假设通过控制台申请了一个 20Mbps 的公网IP，分配给云服务器。此时，云服务器实际下行（出云）的带宽为 20Mbps，也就是此时通过本地电脑地从云服务器获取数据的带宽为 20Mbps，速度为 2.5MB/s 左右;从互联网下载数据到云服务器上行（入云）带宽为 20Mbps，下载速度为 2.5MB/s 左右。

那么如何知晓自己申请的到的公网IP的速度是否符合正常的速度呢，我们可以通过如下方法进行测试，此处我们仍然以申请了一个 5Mbps 的公网IP，分配给云服务器为例：

## 操作步骤

### Windows云服务器测试公网IP网速

登陆 Windows 云服务器，打开浏览器输入如下网站URL地址[www.speedtest.cn](www.speedtest.cn)，点击【测试】，等待测速结束即可获取到公网IP的上下行带宽，参考如下截图：

![Win测网速](/compute/vm/_images/speetest_of_winOS.png)

我们可以看到云服务器上传带宽为 5.94Mbps，符合案例1中的下行（出云）的带宽为 5Mbps；云服务器下载带宽为 10.48Mbps，符合案例1中上行（入云）带宽为 10Mbps。

### Linux云服务器测试公网IP网速
**CentOS云服务器**

此处以 CentOS 7.9 64bit 系统为例：
```
#yum install wget
#wget https://www.python.org/ftp/python/3.5.5/Python-3.5.5.tgz
#yum install tar make gcc
#tar -zxvf Python-3.5.5.tgz
#cd Python-3.5.5
#./configure --prefix=/usr/local/python3.5.5
#make
#make install
#ln -s /usr/local/python3.5.5/bin/python3.5 /usr/bin/python
#python  --version
#yum install epel-release
#yum install python-pip
#pip2 install speedtest-cli
#speedtest
Retrieving speedtest.net configuration...
Testing from Yunify Technologies (139.198.168.34)...
Retrieving speedtest.net server list...
Selecting best server based on ping...
Hosted by China Telecom JiangSu 5G (Zhenjiang) [65.23 km]: 9.363 ms
Testing download speed................................................................................
Download: 10.51 Mbit/s
Testing upload speed......................................................................................
Upload: 5.30 Mbit/s
```
我们可以看到，一个 5Mbps 的公网IP，通过第三方 speedtest 测速结果为：
下载 10.51 Mbit/s，约等于 1.25MB/s，上传 5.30 Mbit/s，约等于 625KB/s。可以看到测试结果与案例1中的结果是相符的。

**Ubuntu云服务器**

此处以 Ubuntu Server 18.04.5 LTS 64bit系统为例：
```
#apt install speedtest-cli
#speedtest-cli 
Retrieving speedtest.net configuration...
Testing from Yunify Technologies (139.198.168.193)...
Retrieving speedtest.net server list...
Selecting best server based on ping...
Hosted by China Telecom JiangSu 5G (Zhenjiang) [65.23 km]: 17.094 ms
Testing download speed................................................................................
Download: 10.51 Mbit/s
Testing upload speed............................................................................................
Upload: 5.30 Mbit/s
```
我们可以看到，一个 5Mbps 的公网IP，通过第三方 speedtest 测速结果为：
下载 10.51 Mbit/s，约等于 1.25MB/s，上传 5.30 Mbit/s，约等于 625KB/s。可以看到测试结果与案例1中的结果是相符的。