---
title: "CentOS 7系统安装部署 LNMP"
description: test
draft: false
weight: 10

---

### 一、安装 Nginx
1、运行以下命令安装 Nginx

```
yum -y install nginx
```
2、查看安装的 Nginx 版本

```
nginx -v
```
返回结果如下即为安装成功:
```
nginx version: nginx/1.16.1
```

### 二、安装 MySQL
1、更新 yum 源

```
rpm -Uvh  http://dev.mysql.com/get/mysql57-community-release-el7-9.noarch.rpm
```
2、安装 MySQL

```
yum -y install mysql-community-server
```
3、查看 MySQL 版本号，返回版本信息即为安装成功

```
mysql -V

mysql  Ver 14.14 Distrib 5.7.28, for Linux (x86_64) using  EditLine wrapper
```
4、启动 MySQL 服务

```
systemctl start mysqld
```
5、设置 MySQL 服务开机自启

```
systemctl enable mysqld
systemctl daemon-reload
```

### 三、安装 PHP
1、添加 epel 源

```
yum install \
https://repo.ius.io/ius-release-el7.rpm \
https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
```
2、添加 Webtatic 源

```
rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
```
3、安装 PHP

```
yum -y install php70w-devel php70w.x86_64 php70w-cli.x86_64 php70w-common.x86_64 php70w-gd.x86_64 php70w-ldap.x86_64 php70w-mbstring.x86_64 php70w-mcrypt.x86_64  php70w-pdo.x86_64   php70w-mysqlnd  php70w-fpm php70w-opcache php70w-pecl-redis php70w-pecl-mongodb
```
4、查看 PHP 版本，返回以下版本信息即为安装成功

```
php -v

PHP 7.0.33 (cli) (built: Dec  6 2018 22:30:44) ( NTS )
Copyright (c) 1997-2017 The PHP Group
Zend Engine v3.0.0, Copyright (c) 1998-2017 Zend Technologies
    with Zend OPcache v7.0.33, Copyright (c) 1999-2017, by Zend Technologies   
```

### 四、配置 Nginx
1、修改 Nginx 配置文件，配置支持PHP页面

```
vim /etc/nginx/nginx.conf	#打开Nginx配置文件

#在server大括号下添加以下内容，将location / 大括号内的信息修改为以下所示，配置网站被访问时的默认首页。
        location / {
            index index.php index.html index.htm;
        }
        #添加下列信息，配置Nginx通过fastcgi方式处理您的PHP请求。
        location ~ .php$ {
            root /usr/share/nginx/html;    #将/usr/share/nginx/html替换为您的网站根目录。
            fastcgi_pass 127.0.0.1:9000;   #Nginx通过本机的9000端口将PHP请求转发给PHP-FPM进行处理。
            fastcgi_index index.php;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            include fastcgi_params;   #Nginx调用fastcgi接口处理PHP请求。
        }                
```
2、启动 Nginx，并设置为开机自启

```
systemctl start nginx 

systemctl enable nginx 
```

### 五、配置 MySQL
1、获取 MySQL 的 root 初始密码

```
grep 'temporary password' /var/log/mysqld.log	#获取密码"2p/B65d<leSD"

2020-05-13T14:57:47.535748Z 1 [Note] A temporary password is generated for root@localhost: 2p/B65d<leSD
```
2、配置 MySQL 安全性

```
mysql_secure_installation

Enter password for user root: #输入上一步获取的root用户初始密码
The 'validate_password' plugin is installed on the server.
The subsequent steps will run with the existing configuration of the plugin.
Using existing password for root.
Estimated strength of the password: 100 
Change the password for root ? (Press y|Y for Yes, any other key for No) : Y #是否更改root用户密码，输入Y
New password: #输入新密码，长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号。特殊符号可以是()` ~!@#$%^&*-+=|{}[]:;‘<>,.?/
Re-enter new password: #再次输入新密码
Estimated strength of the password: 100 
Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : Y

By default, a MySQL installation has an anonymous user, allowing anyone to log into MySQL without having to have a user account created for them. This is intended only for testing, and to make the installation go a bit smoother. You should remove them before moving into a production environment.
Remove anonymous users? (Press y|Y for Yes, any other key for No) : Y  #是否删除匿名用户，输入Y
Success.

Disallow root login remotely? (Press y|Y for Yes, any other key for No) : Y #禁止root远程登录，输入Y
Success.

Remove test database and access to it? (Press y|Y for Yes, any other key for No) : Y #是否删除test库和对它的访问权限，输入Y
- Dropping test database...
Success.

Reload privilege tables now? (Press y|Y for Yes, any other key for No) : Y #是否重新加载授权表，输入Y
Success.
All done!
```

### 六、配置 PHP
1、在 Nginx 网站目录下创建 phpinfo.php 文件

```
vi /usr/share/nginx/html/phpinfo.php

<?php echo phpinfo(); ?>	#将此内容写入文件
```
2、启动 PHP-FPM 并设置开机自启

```
systemctl start php-fpm

systemctl enable php-fpm
```

### 七、测试访问查看效果
1、打开浏览器，输入云服务器绑定的公网 IP+Nginx 端口(云服务器在 VPC 下访问 VPC 的公网 IP+VPC 转发端口)。  
`例：http://139.198.x.x/phpinfo.php (nginx默认端口为80)`  
2、页面打开查看到 PHP Version 信息即可。