---
title: "跨Region组网及负载均衡"
description: test
draft: false
---

本节描述了如何灵活运用VPC、边界路由器、路由表、负载均衡器，搭建具备负载均衡能力的跨Region网络架构，从而实现多地域的高可用网络服务。

## 利用边界路由器打通VPC

边界路由器是用于连接不同网络的路由器，青云的边界路由器可以连接多种不同的网络场景，本节中主要使用边界路由器连接不同 VPC 内部的虚拟私有网络。

网络架构如图所示：

![](../_images/lb+region1.png)

### 创建 VPC1 和 VPC2

在对应的区域下（如北京3区）选择“网络与CDN”>“VPC网络”，点击“创建VPC网络”；

点击“创建”，创建出 2 个 CIDR 不同的 VPC 网络。

显示创建的 VPC 网络 “北京演示VPC1（地址范围172.16.0.0/16）” 和  ”北京演示VPC2(地址范围172.17.0.0/16)”

![](../_images/lb+region2.png)

### 创建私有网络VxNET	
点击创建成功的 “北京演示VPC1” 和 ”北京演示VPC2”，进入 VPC 详情页面；

![](../_images/lb+region3.png)

点击左上角的加号创建并连接私有网络：

北京演示 VPC1：北京演示 vxnet1(网络地址段172.16.1.0/24)

北京演示 VPC2：北京演示 vxnet2(网络地址段172.17.1.0/24)

![](../_images/lb+region4.png)

![](../_images/lb+region5.png)

创建成功后

![](../_images/lb+region6.png)

![](../_images/lb+region7.png)


### 创建云服务器并加入对应私有网络


创建业务云服务器 “北京演示云服务器1”（镜像选择 CentOS 7.5 64 bit，配置选择默认），加入“北京演示vxnet1”，同时指派对应的IP地址为 172.16.1.2；并命名云服务器 “北京演示云服务器1”

![](../_images/lb+region8.png)

创建业务云服务器 “北京演示云服务器2”（镜像选择 CentOS 7.5 64 bit，配置选择默认），加入私有网络“北京演示vxnet2”，同时指派对应的IP地址为 172.17.1.2；并命名云服务器 “北京演示云服务器2”

![](../_images/lb+region9.png)


查看云服务器列表

![](../_images/lb+region10.png)


### 验证 VPC 网络隔离

登录 “北京演示云服务器1”，执行命令 ip a，查看本机网络信息；执行 ping 172.17.1.2

![](../_images/lb+region11.png)

登录 “北京演示云服务器2”，执行命令 ip a，查看本机网络信息；执行 ping 172.16.1.2

![](../_images/lb+region12.png)

### 创建和配置边界路由器

“网络与CDN” > “边界路由器” > “创建”，名称为 “北京边界路由器1”

![](../_images/lb+region13.png)

进入边界路由器页面，点击 “关联VPC私有网络”

![](../_images/lb+region14.png)

选择私有网络 “北京演示vxnet1” 和 “北京演示vxnet2”，点击提交

![](../_images/lb+region15.png)

### 配置内网路由策略，VPC1 与VPC2 互指路由

进入VPC “北京演示VPC1” 详情页面，点击“管理配置” > “内网路由策略”

![](../_images/lb+region16.png)

点击 “添加规则”，下一跳选择 “北京边界路由器1”，目标网络 “172.17.1.0/24”，提交

![](../_images/lb+region17.png)

此时内网路由策略并未应用，点击右上角“应用修改”，将规则修改同步到管理后台

![](../_images/lb+region18.png)

进入 VPC “北京演示VPC2” 详情页面，添加规则下一跳选择 “北京边界路由器1”，目标网络 “172.16.1.0/24”，并应用修改

![](../_images/lb+region19.png)

![](../_images/lb+region20.png)


### 登录云服务器间验证网络通信


登录 “北京演示云服务器1”，执行命令 ip a，查看本机网络信息；执行 ping 172.17.1.2；

![](../_images/lb+region21.png)

登录 “北京演示云服务器2”，执行命令 ip a，查看本机网络信息；执行 ping 172.16.1.2

![](../_images/lb+region22.png)


## 利用边界路由器及 SD-WAN 网关打通不同 Region 的 VPC


使用边界路由器及 SD-WAN 服务实现 VPC 私有网络云服务器与另一个区的 VPC 私有网络云服务器网络互通，网络架构如下：

![](../_images/lb+region61.png)


### 创建 VPC3

切换控制台至 “广东2区”，创建 VPC 和私有网络 vxnet
创建VPC “广东演示VPC1”,网络地址范围 192.168.0.0/16

![](../_images/lb+region23.png)

创建vxnet “广东演示vxnet1”，网络地址范围 192.168.211.0/24

![](../_images/lb+region24.png)

创建业务云服务器 “广东演示云服务器1”（镜像选择 CentOS 7.5 64 bit，配置选择默认），加入 “广东演示vxnet1”，同时指派对应的 IP 地址为 192.168.211.2；并命名云服务器 “广东演示云服务器1”

![](../_images/lb+region25.png)

登录云服务器，验证网络隔离

![](../_images/lb+region26.png)

### 创建和配置边界路由器2

“网络与CDN” > “边界路由器” > “创建”，名称为 “广东边界路由器1”

![](../_images/lb+region27.png)

进入边界路由器页面，点击 “关联VPC私有网络”

![](../_images/lb+region28.png)

选择私有网络 “北京演示vxnet1”和 “北京演示vxnet2”，点击提交

![](../_images/lb+region29.png)

### 创建SD-WAN网关

“SD-WAN” > “网关” > “创建接入点”，点击 “创建接入点”，

![](../_images/lb+region30.png)

11.2 选择可用区 “北京 3 区” 后，选择计费模式，点击提交

![](../_images/lb+region31.png)

选择可用区 “广东 2 区” 后，选择计费模式，点击提交

![](../_images/lb+region32.png)


### 为 VPC3 配置内网路由策略，路由指向 VPC1 与 VPC2

在 “广东 2 区” 区域，进入VPC “广东演示VPC1”，添加内网路由策略

![](../_images/lb+region33.png)


点击 “添加规则”，下一跳 “广东边界路由器1”，目标网络 “172.16.1.0/24” 名称 “gdvxnet1-bjvxnet1”，目标网络 “172.17.1.0/24” 名称 “gdvxnet1-bjvxnet2”

![](../_images/lb+region34.png)

点击提交，并“应用修改”

![](../_images/lb+region35.png)


### 为 VPC1 和 VPC2 配置内网路由策略，路由指向 VPC3

在 “北京 3 区” 区域，进入VPC “北京演示VPC1”，添加内网路由策略，下一跳 “北京边界路由器1”，目标网络 “192.168.211.0/24”，名称 “bjvxnet1-gdvxnet1”，点击提交并应用修改

![](../_images/lb+region36.png)

![](../_images/lb+region37.png)

在 “北京 3 区” 区域，进入VPC “北京演示VPC2”，添加内网路由策略，下一跳 “北京边界路由器1”，目标网络 “192.168.211.0/24”，名称 “bjvxnet2-gdvxnet1”点击提交并应用修改

![](../_images/lb+region38.png)

![](../_images/lb+region39.png)

### 验证 VPC1-VPC2-VPC3 见网络通信

登录 “广东演示云服务器1”，验证与 “北京演示云服务器1” 和 “北京演示云服务器2” 的通信

![](../_images/lb+region40.png)

登录 “北京演示云服务器1”，验证与 “广东演示云服务器1” 的通信

![](../_images/lb+region41.png)

登录 “北京演示云服务器2”，验证与 “广东演示云服务器1” 的通信

![](../_images/lb+region42.png)


## 基于跨 Region 网络,搭建跨 Region 的负载均衡

在VPC1 中创建 LB，根据上文中的网络架构，负载均衡VIP地址与 VM1/VM2/VM3 都已经处于三层可达状态，所以可以添加三个云服务器作为后端服务器，网络架构如图所示：

![](../_images/lb+region62.png)


### 申请公网 IP 

在北京 3 区，“网络与CDN”>“公网IP”>“申请”，会提示备案相关信息，点击 “继续申请公网IP”，填写公网 IP 选项，名称设置为 “演示公网IP”，然后点击 “提交”：

![](../_images/lb+region43.png)

![](../_images/lb+region44.png)

查看申请的公网 IP为：139.198.18.135 (以系统实际分配 IP 为准)

![](../_images/lb+region45.png)

### 创建负载均衡器,添加云服务器 1 和云服务器 2 为后端

在北京 3 区，“网络与CDN” > “负载均衡器” > “创建”，进入负载均衡器创建页面，点击 “添加公网IPv4” 选择 “演示公网IP”，点击网络选择 “北京演示vxnet1”，并命名负载均衡器 “跨Region负载均衡”

![](../_images/lb+region46.png)

点击进入负载均衡器详情页，创建监听器名称 “网站负载均衡” 协议“HTTP” 端口“80”

![](../_images/lb+region47.png)


点击 “添加后端”，选择 “北京演示网络1”，“北京演示云服务器1”，端口 80，点击提交

![](../_images/lb+region48.png)

点击 “添加后端”，选择 “北京演示网络2”，“北京演示云服务器2”，端口 80，点击提交

![](../_images/lb+region49.png)

### 负载均衡器添加云服务器 3 为后端

点击 “添加后端”，选择 “IP”，“192.168.211.2”，端口 80，点击提交

![](../_images/lb+region50.png)

点击 “应用修改”

![](../_images/lb+region51.png)

### 为负载均衡器添加路由表

在北京 3 区，“网络与CDN” > “路由表” > “创建”，名称 “跨Region负载均衡路由表

![](../_images/lb+region52.png)

点击进入路由表详情页，点击 “添加规则”，目标网络 “192.168.211.0/24”，名称 “跨Region路由”，下一跳 “172.16.1.254”

![](../_images/lb+region53.png)

点击 “添加规则”，目标网络 “172.17.1.0/24”，名称 “跨Region路由” ，下一跳 “172.16.1.254”

![](../_images/lb+region54.png)


“跨Region负载均衡器” 绑定 “跨Region负载均衡路由表” ，并 “应用路由表规则”

>注解
不能直接指定下一跳为 IP 地址时，先创建路由指向路由器，创建路由条目成功后修改路由条目下一跳为 IP 地址即可


为三台云服务器“北京演示云服务器1”“北京演示云服务器2”“广东演示云服务器1”部署httpd服务：

输入命令`yum install –y httpd`

![](../_images/lb+region55.png)

安装完成后启动 httpd 服务，输入命令 `service httpd start` 和 `chkconfig httpd on`

![](../_images/lb+region56.png)

在/var/www/html下新建 index.html并编辑，输入命令vi index.html
分别将 “北京演示云服务器1” “北京演示云服务器2” “广东演示云服务器1” 填入到相应云服务器的 index.html

```

<h1 style="text-align:center;">
      <span style="color:#60D978;">北京演示云服务器1</span>
</h1>
<p style="text-align:center;">
        青云@QingCloud
</p>	

```


至此跨 Region 的负载均衡器就搭建完毕了，浏览器访问负载均衡器绑定的公网 EIP 地址 `139.198.18.135` 可以查看网页效果，利用浏览器刷新按钮查看轮询的云服务器切换效果。

![](../_images/lb+region58.png)

![](../_images/lb+region59.png)


![](../_images/lb+region60.png)
