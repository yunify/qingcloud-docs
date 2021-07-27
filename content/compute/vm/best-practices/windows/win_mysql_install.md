---
title: "Windows云服务器配置MySQL"
description: Test description
draft: false
---

## 背景介绍

MySQL 是最流行的关系型数据库管理系统，在 WEB 应用方面 MySQL 是最好的 RDBMS(Relational Database Management System：关系数据库管理系统)应用软件之一。本文介绍了在Windows系统的云服务器中安装配置MySQL。

### 下载安装MySQL

1. 进入官网找到所需的安装包：https://dev.mysql.com/  ，路径：MySQL Downloads --- MySQL Community Server--- Microsoft Windows，或者直接点击链接：https://dev.mysql.com/downloads/mysql/ 。

![](../../_images/mysql_install/mysql_install9.png)

![](../../_images/mysql_install/mysql_install10.png)

2. 下载完成后，将zip包解压到相应目录，本文解压至 C:\mysql 下。

![](../../_images/mysql_install/mysql_install11.png)

3. 在C:\mysql\mysql-8.0.23-winx64目录下添加配置文件my.ini，输入以下信息，C:\mysql\data 需要提前创建。也可以自行添加所需的参数。

```ini
[mysqld]
basedir = C:\mysql\mysql-8.0.23-winx64  #mysql的安装目录
datadir = C:\mysql\data  #设置数据存放目录，也可以不设置
bind-address = 0.0.0.0  #设置监听地址为0.0.0.0
port = 3306  #设置端口为3306
```

4. 执行win+R，打开运行，使用管理员权限打开cmd。

![](../../_images/mysql_install/mysql_install12.png)

5. 切换至bin目录下。

```shell
cd C:\mysql\mysql-8.0.23-winx64\bin
```
6. 初始化数据库。

```shell
mysqld --initialize --console
```

由于部分镜像未安装vc++运行库，导致无法初始化，可以通过这个链接([vc_redist.x64.exe](https://aka.ms/vs/16/release/vc_redist.x64.exe))下载x64的运行包，也可以在这个链接处自行下载 [最新支持的 Visual C++ 下载](https://support.microsoft.com/zh-cn/topic/%E6%9C%80%E6%96%B0%E6%94%AF%E6%8C%81%E7%9A%84-visual-c-%E4%B8%8B%E8%BD%BD-2647da03-1eea-4433-9aff-95f26a218cc0)。

![](../../_images/mysql_install/mysql_install13.png)

此时已初始化成功，红框处为root用户的默认密码。

6. 执行安装命令并启动。

```shell
mysqld --install
net start mysql
```

执行 netstat 命令可以看是否正常监听 0.0.0.0，下图为监听状态。

```shell
netstat -ano | findstr 3306
```

![](../../_images/mysql_install/mysql_install14.png)

### 本地登录MySQL

1. 使用默认密码登录MySQL。

```shell
mysql -u root -p
```

![](../../_images/mysql_install/mysql_install15.png)

2. 登录后需要重置密码，参考命令。

```mysql
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'QingCloud1234';
```

### 开启远程访问

登录后开启远程访问。

```mysql
mysql> USE mysql;
mysql> UPDATE user SET host = '%' WHERE user = 'root' ;
mysql> FLUSH PRIVILEGES;
mysql> SELECT host,user FROM user;
```

### 关闭主机内部防火墙

关闭防火墙，点击开始---服务器管理器---本地服务器---Windows Defender 防火墙，将防火墙关闭。

![](../../_images/mysql_install/mysql_install16.png)

### 远程客户端连接测试

远程客户端连接，需要在主机绑定的安全组处添加相应的规则，添加之后点击上方的应用修改。点击主机id进入主机详情页，点击绑定资源的安全组，即可跳转至安全组。

![](../../_images/mysql_install/mysql_install17.png)

点击添加规则，添加端口并提交后，点击应用修改。

![](../../_images/mysql_install/mysql_install18.png)

通过云服务器绑定的公网IPv4进行连接，已正常连接。

![](../../_images/mysql_install/mysql_install19.png)