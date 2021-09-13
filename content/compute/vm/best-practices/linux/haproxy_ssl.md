---
title: "HAProxy 如何配置 SSL"
date: 2021-02-15T21:37:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false
---

## 项目背景

由于 HTTP 协议以明文方式发送请求，而部分业务需要进行数据加密传输，使用 SSL/TLS 来加密数据包，能够很好的保护数据的隐私性和完整性。

HAProxy 是一款可实现负载均衡的优秀软件，它可用于 TCP 代理、HTTP 反向代理、SSL 终结、规范 TCP、HTTP 连接等等。本文中主要介绍通过 HAProxy 反向代理实现负载均衡，并确保连接基于 SSL/TLS 安全加密。HAProxy 更多应用详见[HAProxy官方文档](http://cbonte.github.io/haproxy-dconv/)

## 准备事项

* 主机已安装 HAProxy
* 已申请并签发了 SSL 证书，如没有证书，请[购买SSL证书](https://console.qingcloud.com/ssl_certificates)
* 申请 SSL 证书时绑定的域名已解析到服务器 IP
* 后端可正常访问

## 部署步骤

> HAProxy 代理 SSL 有两种方式
>
>​    1、HAProxy 本身绑定 SSL 证书，后面的 Web 服务器走正常的 HTTP ，这种方式 HAProxy 需要支持 SSL
>
>​    2、HAProxy 本身只提供反向代理，后面的 Web 服务器走 HTTPS ,这种方式 HAProxy 不需要支持 SSL

### 方式一( HAProxy 绑定 SSL 证书)：

1、查看已安装的 HAProxy 是否支持 SSL：

​	1）执行`haproxy -vv` 

![image-20210730222750875](../../_images/haproxy_ssl.assets/image-20210730222750875.png)

​	2）找到`haproxy`命令源文件，执行`ldd haproxy | ssl`

```bash
[root@i-3d6dbe9x sbin]# ldd haproxy | grep ssl
        libssl.so.10 => /lib64/libssl.so.10 (0x00007f99008a3000)
```

如不支持，需重新编译安装：

```bash
make TARGET=linux26 USE_OPENSSL=1 ADDLIB=-lz 
make install
[root@localhost haproxy]# ldd haproxy  | grep ssl
        libssl.so.10 => /lib64/libssl.so.10 (0x00007f5ab8264000)
```

注意：`TAGET`值为内核版本，使用`uname -r`查看，2.6以上的都用 linux26

2、下载证书，并上传到云服务器，将证书私钥合并处理

```bash
[root@i-3d6dbe9x cert]# ls
www.linuxcamp.club.key  www.linuxcamp.club.pem
[root@i-3d6dbe9x cert]# cat www.linuxcamp.club.pem www.linuxcamp.club.key | tee linuxcamp.pem
```

3、修改`haproxy.cfg`配置文件

```bash
global
    log         127.0.0.1 local2

    chroot      /var/lib/haproxy
    pidfile     /var/run/haproxy.pid
    maxconn     4000
    user        haproxy
    group       haproxy
    daemon

    # turn on stats unix socket
    stats socket /var/lib/haproxy/stats

    tune.ssl.default-dh-param 2048     ##修改默认使用2048bit加密，不设置会有警告

#---------------------------------------------------------------------
defaults
    mode                    http
    log                     global
    option                  httplog
    option                  dontlognull
    option http-server-close
    option forwardfor       except 127.0.0.0/8
    option                  redispatch
    retries                 3
    timeout http-request    10s
    timeout queue           1m
    timeout connect         10s
    timeout client          1m
    timeout server          1m
    timeout http-keep-alive 10s
    timeout check           10s
    maxconn                 3000

#---------------------------------------------------------------------
# main frontend which proxys to the backends
#---------------------------------------------------------------------
frontend  weblb
    bind *:80
    bind *:443 ssl crt /etc/haproxy/cert/linuxcamp.pem   ##绑定私钥
    redirect scheme https if !{ ssl_fc }           ##将http请求跳转到https
    acl is_http hdr_beg(host) www.linuxcamp.club   ##添加acl规则
    use_backend web if is_http                    		   ##指定后端

#---------------------------------------------------------------------
# round robin balancing between the various backends
#---------------------------------------------------------------------
backend web        ## 后端
    balance     roundrobin     ##负载方式：轮询
    server  web1 192.168.0.2:80 maxconn 1024 check inter 2000 rise 2 fall 3
    server  web2 192.168.0.200:80 maxconn 1024 check inter 2000 rise 2 fall 3
#maxconn 最大连接数 check inter 检测后端可用性频率:2s rise 2 2次正确可用 fall 3 三次失败不可用  
```

### 方式二( HAProxy 代理 SSL 请求)：

1、后端绑定好 SSL 证书，可参考[Apache配置SSL](https://docsv3.qingcloud.com/compute/vm/best-practices/linux/confighttpdssl/)、[Nginx配置SSL](https://docsv3.qingcloud.com/compute/vm/best-practices/linux/nginx_ssl/)

```bash
frontend https_frontend
  bind *:443
  mode tcp
  default_backend web_server

backend web_server
  mode tcp
  balance roundrobin
  stick-table type ip size 200k expire 30m
  stick on src
  server web1 192.168.0.2:443 maxconn 1024 check inter 2000 rise 2 fall 3
  server web2 192.168.0.200:443 maxconn 1024 check inter 2000 rise 2 fall 3
```

注意，这种模式下 mode 必须是 tcp 模式，经测试 frontend 采用 mode tcp 时，只认可 default_backend 这一个后端,无法使用 acl

