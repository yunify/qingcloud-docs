---
title: "使用端口转发功能"
description: test
draft: false
weight: 20
---
## 端口转发的功能介绍

vpc网络提供端口转发（DNAT）功能，将NAT网关上的公网IP映射给私有网络的云服务器使用，使云服务器可以面向互联网提供服务，比如http/https等

### 配置方法

vpc网络==>管理配置==>端口转发==>添加规则，如图所示

<img src="../homer/vpc_dnat_01.png" width="100%" height="60%">

- **名称**：自定义的名称，便于区分转发规则
- **协议**：可以设置tpc/udp两种类型的协议
- **源端口**：NAT网关会将以指定协议和端口访问该公网IP的请求转发到目标云服务器的内网端口上

- **内网 IP**：云服务器获取的私有网络ip地址

- **内网端口**：云服务器需要对公网暴露的端口服务，比如http/https/ssh等

### 案例一

#### 比如以下的配置就可以将公网8000端口的请求转发到192.168.10.2这个云服务器的22号端口，如截图所示

<img src="../homer/vpc_dnat_02.png" width="100%" height="60%">

另外需要放行vpc所在防火墙源端口对应的下行规则，并应用修改防火墙，如图

<img src="../homer/vpc_dnat_09.png" width="100%" height="60%">

### **请注意**

#### 1.可以针对同一个内网云服务器的内网端口添加多条转发规则，只要采用不同的源端口即可，添加完需要应用修改，如图

<img src="../homer/vpc_dnat_03.png" width="100%" height="60%"> 

#### 2.可以针对同一个内网云服务器的多个内网服务添加多条转发规则，如图所示

<img src="../homer/vpc_dnat_04.png" width="100%" height="60%">

#### 3.如果想实现指定ip或者ip段访问源端口的服务，可以配置防火墙的源ip（相当于白名单）

<img src="../homer/vpc_dnat_06.png" width="100%" height="60%">

<img src="../homer/vpc_dnat_05.png" width="100%" height="60%">

### 案例二

### 配置端口转发规则

比如需要本地通过公网访问数据库服务，数据库节点的ip地址为:192.168.10.2，就需要配置一条端口转发的规则将数据库服务的3306端口暴露给公网（这种做法是有风险的，容易被攻击，建议加上源ip）如截图所示。

<img src="../homer/vpc_dnat_10.png" width="100%" height="60%">

<img src="../homer/vpc_dnat_08.png" width="100%" height="60%">

### 需要放行安全组下行3336号端口，否则公网将无法访问

<img src="../homer/vpc_dnat_11.png" width="100%" height="60%">

### 验证公网访问是否正常

```
[root@i-b6s3dvje ~]# telnet 139.198.19.41 3336
Trying 139.198.19.41...
Connected to 139.198.19.41.
Escape character is '^]'.
```

