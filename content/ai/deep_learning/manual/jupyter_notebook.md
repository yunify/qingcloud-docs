---

title: "jupyter notebook 使用指南"
description: test
weight: 60
draft: false
---

为了方便开发，各版本环境中都配有 jupyter notebook，用户可以交互式编程，并能直观展现实时计算结果。

jupyter 启动命令如下：

**企业版**

```shell
sudo nvidia-docker run -it --rm --net host -v /home/ubuntu/test:/root/test qingcloud/deeplearning:1.1-cu91-cudnn7.1 /bin/bash
jupyter notebook --ip='your_host_eth0_ip' --allow-root
```

**基础版**

```shell
drun --net host -v /home/ubuntu/test:/root/test qingcloud/deeplearning:1.1-rocm26 /bin/bash
jupyter notebook --ip='your_host_eth0_ip' --allow-root
```

**入门版**

```shell
sudo docker run -it --rm --net host -v /home/ubuntu/test:/root/test qingcloud/deeplearning:1.1-cpu /bin/bash
jupyter notebook --ip='your_host_eth0_ip' --allow-root
```

jupyter notebook 默认端口号为 `8888`，启动上述命令后会输出 token 信息，这个信息在下面访问 notebook 时候需要。

> **说明**
>
> 如果需要通过公网访问这些信息您需要先申请一个公网 IP 绑定在路由器上，在路由器上设置端口转发，同时打开防火墙相应的下行端口。为了方便使用 jupyter notebook，也可参考[VPN 隧道指南](https://docs.qingcloud.com/product/network/vpn#vpn) 配置 VPN。

jupyter notebook 开发环境浏览项目代码

<img src="../../_images/jupyter_browse.png" style="zoom:60%;" />

jupyter notebook 开发环境运行项目

<img src="../../_images/jupyter_train.png" style="zoom:60%;" />

jupyter notebook 开发环境切换 Python 版本

<img src="../../_images/jupyter_python.png" style="zoom:60%;" />
