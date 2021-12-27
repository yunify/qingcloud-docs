---
title: "容器中 TensorBoard 或者 jupyter 服务已经启动，如何访问？"
linkTitle: "TensorBoard 或者 jupyter 服务"
description: 本小节主要介绍 容器中 TensorBoard 或者 jupyter 服务已经启动，如何访问？。 
keyword: 人工智能，深度学习，Deep Learning，TensorBoard 服务，jupyter 服务，如何访问，已经启动
weight: 10
collapsible: false
draft: false
---

有两种方法，但首先需要在容器启动时进行端口映射，将容器的8888端口（jupyter 服务）或者6006端口（tensorboard 服务）映射到宿主机 host_ip 的相应端口 host_port。

```shell
sudo nvidia-docker run -it --rm -p host_port:8888 image_id /bin/bash
```

- 方法1：

	对 host_port 端口再次进行端口映射，该 VPC 网络必须绑定公网 IP:vpc_ip，由于云平台会为该云主机自动添加一个默认的防火墙，用户还需要修改防火墙的下行策略，放行端口 host_port，最后在控制台的 VPC 网络中将 host_port 映射到 VPC 网络路由器的相应端口 vpc_port，在浏览器中输入 vpc_ip:vpc_port 便可以访问。

- 方法2(建议)：

	无需修改防火墙策略，在 VPC 网络中[配置VPN服务](https://docs.qingcloud.com/product/network/vpn)，则可以轻松访问云端私有网络中的主机。
	在浏览器中输入 host_ip:host_port 便可以访问。
