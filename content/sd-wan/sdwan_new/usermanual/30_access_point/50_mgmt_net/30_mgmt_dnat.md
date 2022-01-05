---
title: "配置 DNAT"
draft: false
collapsible: false
weight: 30
---

DNAT 将公网 IP 映射给私有网络的云服务器使用，外部网络可以通过映射后的地址访问内部网络，从而使内部网络可以对外提供服务。

## 前提条件

- 已获取 QingCloud 管理控制台账号和密码。
- 已创建连接云网。
- 已创建接入点。

## 添加 DNAT 规则

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **SD-WAN** > **SD-WAN**，进入**连接云网**页面。

   <img src="../../../../_images/qs_cloud_network.png" style="zoom:50%;" />

3. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

   <img src="../../../../_images/qs_light_access.png" style="zoom:50%;" />

4. 点击接入点名称，进入接入点详情页面。

5. 选择**网络管理** > **DNAT**，进入 **DNAT** 页面。

   <img src="../../../../_images/um_dnat_list.png" style="zoom:50%;" />

6. 点击**添加规则**，弹出**添加 DNAT 规则**窗口。

   <img src="../../../../_images/um_dnat_win.png" style="zoom:50%;" />

   参数说明，如下表所示。

   | 参数     | 参数说明                                                     |
   | -------- | ------------------------------------------------------------ |
   | 名称     | 设置 DNAT 的名称。                                           |
   | 类型     | <ul><li>公网 DNAT：将公网 IP 映射为内部网络地址。</li>私网 DNAT：将内部网络转换为指定私网 IP 地址。<li></li></ul> |
   | 外网端口 | 外网的端口号。                                               |
   | 协议     | 可以选择为 ALL、TCP、UDP、ICMP 协议。配置为 ALL 时，表示一对一静态 IP 地址转换。 |
   | 内网 IP  | 云服务器的私有网络 IP 地址。                                 |
   | 内网端口 | 云服务器对公网公开的端口号，例如：80、443、22 等。           |
   
7. 点击**添加**，完成 DNAT 规则的添加操作。

   若页面弹出**新增成功**提示信息，则说明新增 DNAT 规则成功。

8. 点击**应用修改**，使配置生效。

   添加 DNAT 规则后默认为**启用**状态。

## 注意事项

- 可以针对同一个内网云服务器的内网端口添加多条 DNAT 规则，只要采用不同的外网端口即可。

  <img src="../../../../_images/um_dnat_note01.png" style="zoom:50%;" />

- 填写的源端口和内网端口可以不同。

- 可以针对同一个内网云服务器的多个内网服务添加多条 DNAT 规则。例如：SSH、HTTP、HTTPS 等。

  <img src="../../../../_images/um_dnat_note01.png" style="zoom:50%;" />

- 需要放行 VPC 所在安全组源端口对应的下行规则，并**应用修改**安全组规则。例如：SSH、HTTP、HTTPS 等。

  <img src="../../../../_images/um_dnat_note02.png" style="zoom:50%;" />

  <img src="../../../../_images/um_dnat_note03.png" style="zoom:50%;" />

- 若需要指定 IP 或者 IP 段访问源端口的服务，可以配置安全组的源 IP（相当于白名单）。

  <img src="../../../../_images/um_dnat_note04.png" style="zoom:50%;" />

  <img src="../../../../_images/um_dnat_note05.png" style="zoom:50%;" />

## 测试连通性

可以登录云服务器，执行 telnet 命令，测试端口的连通性。

```
telnet ip 端口
```

## 相关操作

### 禁用 DNAT 规则

1. 进入**网络管理** > **DNAT** 页面。

   <img src="../../../../_images/um_snat_list.png" style="zoom:50%;" />

2. 在已添加的静态路由所在行的**操作**列中，点击**禁用**。

   若页面 DNAT 规则的状态变成为**禁用**，则说明禁用成功。

### 修改 DNAT 规则

1. 进入**网络管理** > **DNAT** 页面。

   <img src="../../../../_images/qs_vcpe_bgp_list.png" style="zoom:50%;" />

2. 在已添加的静态路由所在行的**操作**列中，点击**修改**，弹出**修改 DNAT 规则**窗口。

   <img src="../../../../_images/um_modify_snat.png" style="zoom:50%;" />

3. 修改完成后，点击**确定修改**，完成 DNAT 规则的修改。

   若页面弹出**编辑成功**提示信息，则说明修改 DNAT 规则成功。

### 删除 DNAT 规则

1. 进入**网络管理** > **DNAT** 页面。

   <img src="../../../../_images/qs_vcpe_bgp_list.png" style="zoom:50%;" />

2. 在已添加的静态路由所在行的**操作**列中，点击**删除**，弹出**删除 DNAT 规则**窗口。

   <img src="../../../../_images/um_del_bgp.png" style="zoom:50%;" />

3. 点击**确定**，完成 DNAT 规则的删除操作。

   若页面弹出**删除成功**提示信息，则说明删除 DNAT 规则成功。

