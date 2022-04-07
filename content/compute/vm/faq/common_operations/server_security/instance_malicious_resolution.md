---
title: "云服务器被非法域名恶意指向"
date: 2021-03-08T21:37:25+09:00
description: 如何解决云服务器被非法域名恶意指向
weight: 10
draft: false
keyword: 云计算, 青云, QingCloud, 云服务器，非法域名
---

## 背景

云服务器被非法域名恶意指向，工信部扫描到之后，也会对该云服务器进行处罚，这样就会带来无谓的损失，但任何一台云服务器，目前都无法避免这个现象。

## 原理

如果一个非法域名指向到某台服务器，而该服务器上存在着空主机头的站点，这时候使用该域名访问，效果是和使用IP访问是一致的，Web服务器会自动的将请求(Request)分配(Dispatch)到空主机头的站点上，这样就使得非法指向的恶意域名有了可访问性，被工信部扫描到之后，受损失的是该云服务器的客户和该客户的服务商。

## 解决方法

> 文档提供以下几种类型的web服务解决方式：  
> IIS  
> Nginx  
> Tomcat  
> Apache  
> Docker  
> 负载均衡器

### IIS配置方法

1. 查看是否绑定主机头，如以下截图主机名为空，则表示未绑定主机名。

 ![](../../../_images/instance_malicious_resolution_1.png)

2. 配置IIS网站绑定主机名

 ![](../../../_images/instance_malicious_resolution_2.png)

3. 验证只能通过绑定的域名访问，其他方式无法访问网站页面即可。

### Nginx配置方法

1. 首先打开nginx域名配置文件存放目录：/etc/nginx/nginx.conf （注：不同安装方式nginx路径可能不同，但配置文件写法一样）

2. 配置默认站点禁止IP地址访问

```nginx
server {
        listen 80 default_server;
        listen [::]:80 default_server;
        server_name _;
        return 403;
}
```
3. 配置网站绑定主机头

```nginx
server 
{ 
	listen      80; 
	server_name www.server.com;             #绑定域名 
	index index.htm index.html index.php;     #默认文件 
	root /var/www/html/server/;              #网站根目录
	include location.conf;                           #调用其他规则，也可去除
}
```
4、重启nginx服务器，验证访问效果。
使用IP访问效果  
 ![](../../../_images/instance_malicious_resolution_3.png)
### Tomcat配置方法
1. 修改$TOMCAT_HOME/conf目录下的server.xml文件

```shell
<Engine name="Catalina" defaultHost="你的默认启动域名">
```
> 上面这行的意思是通过IP直接访问的是你的默认启动域名所指向的目录。
(在此请把默认启动域名指向一个不存在的路径，这样当恶意域名指向时系统返回404错误。)

```shell
<Host name="你的域名" appBase="项目在硬盘的物理位置,例如: /home/wwwRoot"
       unpackWARs="true" autoDeploy="true"
       xmlValidation="false" xmlNamespaceAware="false">
	<Context path="" docBase="项目在硬盘的物理位置,例如: /home/wwwRoot" reloadable="true" deubg="0" />
</Host>
```
>如果还有其他的域名,再添加一个以上Host内容段内容即可

2. 重启Tomcat服务

### Apache配置方法
Apache中对于每个VirtualHost，都要求有ServerName或者ServerAlias，而且不能为空，具体可以参考http://httpd.apache.org/docs/1.3/vhosts/name-based.html。

1. 进入Apache的conf目录，打开httpd.conf文件，找到VirtualHost

```shell
<VirtualHost *:80>
      DocumentRoot /home/qingcloud #域名对应的-项目目录
      ServerName blog.com	#项目目录对应的-域名
</VirtualHost>
```
2. 重启Apache服务

### Docker 配置方法
由于部分 Docker 镜像不支持 vim 命令，可通过以下三种方式进行修改（根据 Web 服务类型修改对应的配置文件）。  
方式一、 在容器内安装 vim 命令，安装之后直接修改容器内配置文件  
```
apt-get install vim
```
方式二、通过 docker cp 的方式将配置文件复制到本地修改后，再复制到容器内部  
```
1、docker cp 容器id或名称:容器配置文件路径 宿主机目录
2、docker cp 宿主机目录 容器id或名称:容器配置文件路径
例：docker cp 8be6cc4ascf6:/etc/nginx/nginx.conf /home
```
方式三、映射挂载，启动容器时将宿主机里面的配置文件挂载到容器配置文件路径下  
```
docker run --name 容器名 -p 宿主机端口:容器端口 -v 本地配置文件路径:容器配置文件路径
例：docker run --name nginx -p 8080:80 -v /etc/nginx/nginx.conf:/etc/nginx/nginx.conf
```

### 负载均衡器配置方法

给监听器后端绑定匹配域名的转发规则，只有匹配通过的域名请求才能正常被转发。添加匹配域名时需要添加强制匹配的正则符号。如需了解更多转发规则配置可参考[自定义转发策略](https://docsv3.qingcloud.com/network/loadbalancer/manual/lb_user_guide/#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%BD%AC%E5%8F%91%E7%AD%96%E7%95%A5)  
1、新增转发规则：  
![](../../../_images/instance_malicious_resolution_4.png)  
2、监听器后端绑定规则：  
![](../../../_images/instance_malicious_resolution_5.png)  