---
title: "httpd 服务配置SSL"
description: Test description
weight: 50
draft: false
enableToc: false
---


## 1.在服务器上部署httpd服务（Ubuntu为例）

**1.1 部署httpd服务**

```
sudo apt install apache2 -y
```

**1.2 启动apache2服务并设置为开机自启**

```
root@web:~# systemctl enable apache2
root@web:~# systemctl start  apache2
```

**1.3 检查服务器80端口是否监听**

```
root@web:~# ss -nutlp | grep 80
tcp    LISTEN   0    128      *:80  *:*   users:(("apache2",pid=4203,fd=4),("apache2",pid=4202,fd=4),("apache2",pid=4199,fd=4))

```

## 2. 配置安装并启用httpd所需的SSL相关组件

### 2.1 安装httpd相关SSL组件，并启用相关模块

```
#ubuntu apt安装会自动安装所需组件，centos还需运行如下命令安装组件：yum install mod_ssl openssl
#启用ssl模块
root@web:/etc/apache2/sites-available# sudo a2enmod ssl
Considering dependency setenvif for ssl:
Module setenvif already enabled
Considering dependency mime for ssl:
Module mime already enabled
Considering dependency socache_shmcb for ssl:
Module socache_shmcb already enabled
Module ssl already enabled                   #这一行表示ssl模块已启用
```

### 2.2 配置httpd的SSL

创建目录/etc/apache2/ssl,并将申请到的域名证书复制进来。

```
root@web:/etc/apache2/ssl# mkdir /etc/apache2/ssl
root@web:/etc/apache2/ssl# ls
www.test.com.crt  www.test.com.key
```

编辑默认的https配置文件。

```
root@web:/etc/apache2/sites-available# cp default-ssl.conf default-ssl.conf.bak
root@web:/etc/apache2/sites-available# grep -Ev "^*#|^$" default-ssl.conf.bak >default-ssl.conf 
root@web:/etc/apache2/sites-available# cat default-ssl.conf
<IfModule mod_ssl.c>
	<VirtualHost *:443>
        ServerName www.test.com        #填写你所申请的证书的域名
		ServerAdmin webmaster@localhost
		DocumentRoot /var/www/html
		ErrorLog ${APACHE_LOG_DIR}/error.log
		CustomLog ${APACHE_LOG_DIR}/access.log combined
		SSLEngine on
		SSLCertificateFile	/etc/apache2/ssl/www.test.com.crt  #填写你证书的位置
		SSLCertificateKeyFile /etc/apache2/ssl/www.test.com.key #填写你证书的位置
	</VirtualHost>
</IfModule>

```

重启apache2服务，并查看443端口是否存活

```
root@web:/etc/apache2/sites-available# systemctl restart apache2
root@web:/etc/apache2/sites-available# ss -nutlp | grep 443
tcp    LISTEN   0        128         *:443     *:*      users:(("apache2",pid=20985,fd=6),("apache2",pid=20984,fd=6),("apache2",pid=20981,fd=6))
```

## 3. 验证

在浏览器中访问证书中的域名<img src="../../_images/https.png" width="100%" height="60%">

`注意:这里由于是自签证书，所浏览器认为是不安全的。正式使用的时候需要到相关机构签发SSL证书。签发网址：https://console.qingcloud.com/ssl_certificates`

