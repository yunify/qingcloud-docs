---
title: "Windows云服务器搭建FTP服务"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 60
draft: false
enableToc: false
---

**ftp server下载地址**

https://yunify.anybox.qingcloud.com/s/g3yXfHGZ9V9ZtZgGIFfLHeXlSSSE2Klf

**ftp_client下载地址**

https://yunify.anybox.qingcloud.com/s/ORyko6fbfylJE5xu8PPjRtw1NN36wneG

 1、安装ftp server，按照提示操作即可

![图片](/compute/vm/_images/image-1568884199091.png)

![图片](/compute/vm/_images/image-1568884200290.png)

![图片](/compute/vm/_images/image-1568884201864.png)

![图片](/compute/vm/_images/image-1568884203465.png)

![图片](/compute/vm/_images/image-1568884205008.png)

![图片](/compute/vm/_images/image-1568884206761.png)

 2、配置ftp server，首先设置管理员端口和密码，端口配置默认的即可

![图片](/compute/vm/_images/image-1568884208563.png)

![图片](/compute/vm/_images/image-1568884210156.png)

![图片](/compute/vm/_images/image-1568884211969.png)

 3、安装以上的报错，依次是需要配置被动模式、TLS认证，首先配置被动模式

![图片](/compute/vm/_images/image-1568884215409.png)

![图片](/compute/vm/_images/image-1568884217206.png)

![图片](/compute/vm/_images/image-1568884218566.png)

 4、配置TLS安全认证登陆

![图片](/compute/vm/_images/image-1568884220221.png)

![图片](/compute/vm/_images/image-1568884222016.png)

![图片](/compute/vm/_images/image-1568884224061.png)

![图片](/compute/vm/_images/image-1568884225782.png)

![图片](/compute/vm/_images/image-1568884227343.png)

![图片](/compute/vm/_images/image-1568884228908.png)

 5、配置ftp用户

![图片](/compute/vm/_images/image-1568884230470.png)

![图片](/compute/vm/_images/image-1568884232308.png)

![图片](/compute/vm/_images/image-1568884234299.png)

![图片](/compute/vm/_images/image-1568884235975.png)

 6、配置ftp共享目录

![图片](/compute/vm/_images/image-1568884237932.png)

![图片](/compute/vm/_images/image-1568884239333.png)

![图片](/compute/vm/_images/image-1568884240689.png)

 7、放行云服务器绑定防火墙的下行21号端口，20000-21000被动端口范围，协议为tcp协议，并应用修改

![图片](/compute/vm/_images/image-1568884242630.png)

 8、安装ftp客户端，按照提示下一步直到完成即可（略）

 9、打开ftp客户端，测试ftp功能是否正常

![图片](/compute/vm/_images/image-1568884243971.png)

![图片](/compute/vm/_images/image-1568884245469.png)