---
title: "Windows云服务器安装IIS Web服务"
date: 2021-03-07T10:08:56+09:00
description:
draft: false
weight: 39
---

1.开始-服务器管理器

![iis_1](/compute/vm/best-practices/_images/iis/iis_1.png)

2.选择"添加角色和功能"

![iis_2](/compute/vm/best-practices/_images/iis/iis_2.png)

3.下一步-下一步-下一步

![iis_3](/compute/vm/best-practices/_images/iis/iis_3.png)

![iis_4](/compute/vm/best-practices/_images/iis/iis_4.png)

![iis_5](/compute/vm/best-practices/_images/iis/iis_5.png)

4.服务器角色勾选"Web服务器(IIS)"-添加功能

![iis_6](/compute/vm/best-practices/_images/iis/iis_6.png)

![iis_7](/compute/vm/best-practices/_images/iis/iis_7.png)

5.勾选".NET Framework 3.5功能"

![iis_8](/compute/vm/best-practices/_images/iis/iis_8.png)

6.Web服务器角色(IIS)-角色服务，保持默认即可

![iis_9](/compute/vm/best-practices/_images/iis/iis_9.png)

7.安装

![iis_10](/compute/vm/best-practices/_images/iis/iis_10.png)

![iis_11](/compute/vm/best-practices/_images/iis/iis_11.png)

![iis_12](/compute/vm/best-practices/_images/iis/iis_12.png)

8.内网测试IIS服务

![iis_13](/compute/vm/best-practices/_images/iis/iis_13.png)

9.外网测试IIS服务

9.1如果是基础网络云服务器，直接放行云服务器对应安全组的下行80端口，并应用修改；

9.2如果是私有网络云服务器

9.2.1针对云服务器的80端口做端口转发

![iis_14](/compute/vm/best-practices/_images/iis/iis_14.png)

9.2.2放行安全组的80端口，并应用修改；

![iis_15](/compute/vm/best-practices/_images/iis/iis_15.png)

9.3外网测试

![iis_16](/compute/vm/best-practices/_images/iis/iis_16.png)

注意：通过80/443端口对外提供服务，需要备案，并且需要通过域名对外提供服务，谢谢。