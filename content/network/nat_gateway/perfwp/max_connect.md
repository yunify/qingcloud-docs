---
title: "最大连接数测试"
descriptipn: NAT 网关性能测试
draft: false
weight: 1
keyword: QingCloud, 云计算, 青云, NAT网关, 性能测试, 最大连接数
---

介绍 NAT 网关的性能测试方法及结果。

## 测试环境

本次测试采用 DevOps 环境。环境信息如下：

| 配置节点   | 说明                                | 数量 | 节点配置                     |
| ---------- | ----------------------------------- | ---- | ---------------------------- |
| vg 节点    | virtual gateway，虚拟网关节点       | 2    | CPU 4核，内存 8G             |
| hyper 节点 | 用于安置云服务器以及 NFV 主机的节点 | 8    | CPU 4核，内存 12G，硬盘 200G |

![](../../_images/perf_0.png)

## 测试方法

1. 部署 DevOps 测试环境。

2. 在**网络服务** > **VPC 网络**页面，创建两个**超大型**规格的 VPC 网络并添加私有网络 (Vxnet) ，分别用于部署客户端和服务端。

   如下图，`natgw_test`用于绑定 NAT 网关，`server_vpc` 用于部署服务端。

   ![](../../_images/perf_1.png)

3.  在 VPC 网络 `natgw_test` 下创建 4 个客户端主机（client）；在 VPC 网络 `server_vpc` 创建 8 个服务端主机（server）。

4. 在**运维与管理** > **标签**页面，创建两组标签 `client_tag` 和 `server_tag`，分别绑定 client 和 server。

   ![](../../_images/perf_2.png)

5. 在**网络服务** > **公网 IP** 页面，申请 8 个公网 IP，并分别绑定到 8 个 server 主机。

   ![](../../_images/perf_3.png)

6. 在**网络服务** > **NAT 网关** 页面，创建 NAT 网关并绑定 VPC  网络 `natgw_test`。创建完成后，添加 client 所属私有网络的 SNAT 规则，**公网 IP** 选择 NAT 网关的全部公网 IP。

7. 点击**应用修改**更新 NAT 网关。

8. 登录一个 webservice 节点，将[测试脚本 natgw.py](../../attach/natgw.py/) 上传到节点，然后运行如下命令执行启动测试脚本。

   ```
   python natgw.py -c tag-6ldhogun -s tag-sb0te7z9
   ```

   ![](../../_images/perf_4.png)

   > **注意**
   >
   > 1.每个 client 脚本中固定可以新建 25,000 个长连接，如果需要增大测试连接数，需要增加 client 数量。
   >
   > 2.一次测试结束之后需要等 server 连接全部销毁，才能启动下一次测试，要不然服务端会起不来，具体可以登录到服务端执行 `netstat -anp | grep 8080 | wc -l`, 知道输出为0即可开始下一轮测试
   >
   > 3.每轮测试持续时间大概 20-30 分钟，需要人工执行 stop 命令结束。

9. 运行如下命令停止测试脚本。

   ```
   python natgw.py -c tag-6ldhogun -s tag-sb0te7z9 -a stop
   ```

   

10. 将[连接数统计脚本 cal.py](../../attach/cal.py/) 上传到节点，然后运行如下命令统计当前连接数。

    ```
    python cal.py -n nfv-r1fiaiqz
    ```
    
    
    > **说明**
    >
    > ▪︎ 若执行 cal.py 脚本报错，需要手动登录到 NAT 网关节点，执行 `conntrack -L | grep EST | wc -l` 观察当前连接数，测试开始之后，连接数会逐渐增加，直到达到 NAT 网关规格上限。
    >
    > ▪︎ 每个 NAT 节点规格上限 = 规格数 / 节点数。
    
    

## 测试结果

根据脚本统计，测试结果如下：

| <span style="display:inline-block;width:150px">NAT 网关规格</span> | <span style="display:inline-block;width:200px">测试结果</span> |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 小型                                                         | 10,000                                                       |
| 中型                                                         | 49,988                                                       |
| 大型                                                         | 200,000                                                      |

