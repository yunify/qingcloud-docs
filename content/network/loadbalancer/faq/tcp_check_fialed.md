---
title: "四层（TCP/UDP）健康检查出现异常	"
description: test
draft: false
---

## 问题描述

本文主要针对于负载均衡器四层健康检查出现异常的解决方法。

## 问题现象

负载均衡器上配置了如下图的基于四层方式的健康检查，但是健康检查结果显示为`不活跃`。

![](../../_images/tcp_check_faild.png)

## 排查方法

### 1、检查负载均衡器上所配置的后端服务器的端口是否存活

在后端服务器上执行两个命令：

```
root@web:~# telnet <$ip> <port>  #此命令用来探测这台机器的80端口是否能够正常连接
```

如果上述命令执行失败的话，就需要检查后端业务是否正常运行，或者后端服务器监听的端口和负载均衡器上所配置的端口是否一致。以下排查过程可供您参考（以 nginx 为例）。

```
root@web:~# systemctl status  nginx.service  #查看nginx状态是否正常
● nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
   Active: inactive (dead) since Sun 2021-05-30 14:19:48 CST; 43s ago
root@web:~# systemctl start   nginx.service #启动nginx状态是否正常
root@web:~# ss -nutlp |grep 80        #检查80端口是否正常
root@web:~# ss -nutlp |grep nginx     #检查nginx所启动的端口
tcp    LISTEN   0        128               0.0.0.0:81             0.0.0.0:*      users:(("nginx",pid=24741,fd=6),("nginx",pid=24739,fd=6))                      
tcp    LISTEN   0        128                  [::]:81                [::]:*      users:(("nginx",pid=24741,fd=7),("nginx",pid=24739,fd=7))                      
root@web:~# vim  /etc/nginx/sites-enabled/default  #修改nginx端口，此处也可将负载均衡器配置的端口修改为81
root@web:~# systemctl restart   nginx.service    #重启nginx                 
root@web:~# telnet  172.16.6.20 80 #测试端口连通性
Trying 172.16.6.20...
Connected to 172.16.6.20.
Escape character is '^]'.   #出现此符号证明连接正常。
^CConnection closed by foreign host.
root@web:~#
```

### 2、检查后端服务器和负载均衡器之间的网络连通性。

1. 在负载均衡器的详情页面找到【网络】--->【内网IP】，并检查安全组中是否有放行这些 IP。

![](../../_images/slb_node_ip.png)

2. 登录后端服务器检查 iptables 是否有对这些 IP 做限制。如果有则删除对应限制

   ```
   root@web:~# ping 172.16.6.4 #可以看到此时ping slb的节点ip是不能通的。
   PING 172.16.6.4 (172.16.6.4) 56(84) bytes of data.
   ^C
   --- 172.16.6.4 ping statistics ---
   2 packets transmitted, 0 received, 100% packet loss, time 1011ms
   root@web:~# iptables -nL --line-number
   Chain INPUT (policy ACCEPT)
   num  target     prot opt source               destination         
   1    DROP       all  --  172.16.6.0/24        0.0.0.0/0           
   2    DROP       all  --  192.19.0.0/16        0.0.0.0/0           
   
   Chain FORWARD (policy ACCEPT)
   num  target     prot opt source               destination         
   
   Chain OUTPUT (policy ACCEPT)
   num  target     prot opt source               destination         
   root@web:~# iptables -t filter -D INPUT 1
   root@web:~# iptables -t filter -D INPUT 1
   root@web:~# iptables -nL --line-number
   Chain INPUT (policy ACCEPT)
   num  target     prot opt source               destination         
   
   Chain FORWARD (policy ACCEPT)
   num  target     prot opt source               destination         
   
   Chain OUTPUT (policy ACCEPT)
   num  target     prot opt source               destination  
   root@web:~# ping 172.16.6.4   #可以看到此时ping slb的节点ip已经能通了
   PING 172.16.6.4 (172.16.6.4) 56(84) bytes of data.
   64 bytes from 172.16.6.4: icmp_seq=1 ttl=63 time=1.49 ms
   64 bytes from 172.16.6.4: icmp_seq=2 ttl=63 time=1.49 ms
   
   ```

   ### 总结

   TCP 和 UDP 的健康检查是基于第四层协议进行的，所以只会探测到端口是否存活，并不会去检测业务是否正常。所以一般来说如果四层健康检查失败了主要关注以下两个方面：  
   1、后端服务器和负载均衡器之间的网络不通。  
   2、后端服务器上的端口并没有存活。