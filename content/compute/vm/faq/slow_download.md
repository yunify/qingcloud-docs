---
title: "为何本地从云主机获取数据速度慢"
description: test
weight: 20
draft: false
---


为了提高用户在青云中的下载体验，对于公网IP的带宽小于 10Mbps 的，下行（出云）带宽等于公网IP带宽，上行（入云）带宽自动提高到10Mbps; 带宽大于 10Mbps 的，上下行带宽保持和申请带宽相同。

下面我们用实际案例简单说明下：
### 案例1 
假设通过控制台申请了一个5Mbps的公网ip，分配给主机。此时，云主机实际下行（出云）的带宽为5Mbps，也就是此时通过本地电脑从云主机获取数据的带宽为5Mbps，速度为625KB/s左右;从互联网下载数据到云主机上行（入云）带宽为10Mbps，速度为1.25MB/s左右。

### 案例2
假设通过控制台申请了一个20Mbps的公网ip，分配给主机。此时，云主机实际下行（出云）的带宽为20Mbps，也就是此时通过本地电脑地从云主机获取数据的带宽为20Mbps，速度为2.5MB/s左右;从互联网下载数据到云主机上行（入云）带宽为20Mbps，下载速度为2.5MB/s左右。

那么如何知晓自己申请的到的公网ip的速度是否符合正常的速度呢，我们可以通过如下方法进行测试，此处我们仍然以申请了一个5Mbps的公网ip，分配给主机为例：

## windows主机测试公网ip网速
登陆windows主机，打开浏览器输入如下网站URL地址www.speedtest.cn，点击【测试】，等待测速结束即可获取到公网ip的上下行带宽。

## linux主机测试公网ip网速
### CentOS主机
此处以CentOS 7.9 64bit系统为例：
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
我们可以看到，一个5Mbps的公网ip，通过第三方speedtest测速结果为：
下载10.51 Mbit/s，约等于1.25MB/s，上传5.30 Mbit/s，约等于625KB/s。可以看到测试结果与案例1中的结果是相符的。

### Ubuntu主机
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
我们可以看到，一个5Mbps的公网ip，通过第三方speedtest测速结果为：
下载10.51 Mbit/s，约等于1.25MB/s，上传5.30 Mbit/s，约等于625KB/s。可以看到测试结果与案例1中的结果是相符的。