---
title: "弹性裸金属服务器"
description: 弹性裸金属服务器操作方式
draft: false
keyword: 云计算, 青云, QingCloud, 云服务器，bms，弹性裸金属云服务器
---

青云 QingCloud 弹性裸金属服务器服务，提供高性能、资源独享、安全隔离的专属弹性裸金属服务器群组，满足各类核心应用对高性能及稳定性的需求，同时提供完整的设备管理权限及运维服务。 用户可以像使用其他云资源一样，快速、灵活的部署及管理弹性裸金属服务器，并可按需弹性购买。

## 弹性裸金属服务器特性：

1. 承载核心业务。

   独享物理隔离的硬件资源，释放极致性能，匹配 VPC 网络赋予的完整控制能力， 满足核心业务对性能、可靠性及安全合规的苛刻需求。

2. 高效的资源交付。

   10 分钟完成 OS 部署上线，自动化配置，秒级操作响应，兼容所有云服务器系统镜像及用户自有镜像，助您轻松完成基础架构部署。

3. 灵活简便的使用体验

   VPC 直连，提供与云服务器（VM）一致的使用方式，支持弹性伸缩、按需秒级计费及 API 自动化管理，赋予弹性裸金属服务器弹性、灵活与敏捷的云端特性。

## 前提条件

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 选择**产品与服务** > **计算** > **云服务器**，进入**云服务器**页签。

3. 在**云服务器**页签中，点击**创建**进入购买界面。

   <img src="../../quickstart/_images/vm_1.png" style="zoom: 33%;" />

## 购买方式

### 选择计费方式

<img src="/compute/vm/manual/_images/bm_1.png" style="zoom:50%;" />

付费模式影响实例的计费和收费规则，不同付费模式的实例遵循的资源状态变化规则也存在差异。目前支持包年包月和按需计费两种计费方式。

| 计费模式 | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| 包年包月 | 预付费模式，按月/年预留资源，享受更优惠价格，适合中长期稳定IT需求。 |
| 按需计费 | 后付费模式，以秒为单位计费，适合短期弹性需求，灵活精准，避免浪费。 |

### 选择区域及可用区

bm3 类型云服务器仅支持在北京3区创建，选择北京3区。

<img src="/compute/vm/manual/_images/bm_2.png" style="zoom:50%;" />

## 基础配置信息

### 选择配置规格信息

![](/compute/vm/manual/_images/bm_3.png)

### 选择镜像

![](/compute/vm/manual/_images/bm_4.png)

> **说明**
>
> 有些镜像因系统太老，无法支持新硬件，所以无法运行在弹性裸金属服务器上。不含NIC组合功能的Windows镜像，也无法运行在弹性裸金属服务器上。

### 选择硬盘类型

![](/compute/vm/manual/_images/bm5.png)

青云 QingCloud 平台为云服务器提供硬盘作为块存储设备，支持多种规格和类型，并可弹性扩展，可满足不同场景的业务需求，并且支持对云服务器和硬盘进行备份。

硬盘可以用作系统盘和数据盘，更多信息，请参见[硬盘简介](/storage/disk/intro/introduction/)。

1. **选择系统盘**

   默认选择企业SSD型硬盘。

2. **可选：选择数据盘**

   数据盘（硬盘）用来存储数据，可以同云服务器一起购买，会自动将数据盘挂载到云服务器。也可以之后单独购买，需要用户手动挂载到云服务器。根据存储介质和软件技术不同，我们提供4种类型数据盘，包括基础型、SSD企业型、企业级分布式SAN及容量型。具体性能参数请参见[云硬盘简介文档](/storage/disk/intro/introduction/#产品类型)。

## 网络和安全组配置

### 选择或创建弹性裸金属服务器网络

![](/compute/vm/manual/_images/bm6.png)

## 云服务器基本设置

![](/compute/vm/manual/_images/bm7.png)

> **说明**
>
> 按需付费模式下，弹性裸金属服务器被删除后仍然会计费，需要在回收站中销毁。销毁弹性裸金属服务器，有三个模式。若选择“快速清除”，通常只需几分钟即可销毁弹性裸金属服务器，若选择“完全清除”则需要若干个小时。如果用户自己已经清除了数据，可以选择“不清除”或者“快速清除”模式。

## 弹性裸金属服务器监控

青云使用 zabbix 来收集弹性裸金属服务器的监控信息，包括 CPU 使用率、内存使用率、硬盘使用率等。 在创建云服务器时，青云会在弹性裸金属服务器上部署 zabbix agent。 创建成功后，青云会在弹性裸金属服务器所属的路由器上，通过 zabbix_get 收集弹性裸金属服务器监控信息。


对于 Linux 操作系统, 用户如果不需要或不想使用监控服务，可以在弹性裸金属服务器内执行 ``service stop gapd`` 命令来停止服务，同时删除如下文件：

*   ``/usr/sbin/zabbix_agentd``
*   ``/etc/zabbix/zabbix_agentd.conf``
*   ``/usr/bin/gapd``
*   ``/etc/init/gapd.conf``
*   ``/usr/lib/systemd/system/gapd.service``


对于 Windows 操作系统, 没有预装 zabbix agent, 需要用户自己安装。 具体步骤如下:

1. 从 zabbix 官网下载 Windows 版本的 zabbix_agents, 为方便描述, 以 ``zabbix_agents_2.2.19.win.zip`` 为例。

2. 解压 ``zabbix_agents_2.2.19.win.zip``, 将解压目录下的 ``zabbix_agentd.exe``, ``zabbix_agentd.win.conf`` 拷贝到 C 盘下。

3. 编辑 ``zabbix_agentd.win.conf``, 修改文件内容如下。

    ```
    AllowRoot=1
    EnableRemoteCommands=1
    Server=<monitor_server_ip>
    Hostname=<instance_id>
    ```

    其中, instance_id 是云服务器 id, 类似: i-vmqi7s9z。 monitor_server_ip 是 VPC IPv4 地址范围内倒数第 4 个 IP, 例如, VPC IPv4 地址范围为 172.16.0.0/16, monitor_server_ip 为 172.16.255.252。

4. 执行如下命令, 安装启动 zabbix_agentd

    ```
    C:\zabbix_agentd.exe -i -c C:\zabbix_agentd.win.conf
    C:\zabbix_agentd.exe -s -c C:\zabbix_agentd.win.conf
    ```

5. 防火墙入放行 zabbix_agentd 端口号 10050


## 弹性裸金属服务器+共享存储（NeonSAN）功能用户指南

### 创建弹性裸金属服务器

请参考：[弹性裸金属服务器](/compute/vm/bm/bm_instance/#购买方式)

### 创建 NeonSAN 硬盘

请参考： [企业级分布式 SAN (NeonSAN)](https://docsv3.qingcloud.com/storage/share/manual/neonsan_volume)

### 创建 VSAN，并将 NeoSAN 硬盘挂载到 VSAN 上

请参考：[Virtual SAN（vSAN）](https://docsv3.qingcloud.com/storage/share/manual/vsan)

### 云服务器端配置

#### Windows 系统

多路径：

**以 Windows 2012 R2 版本为例（其他版本类似）**

1. 首先打开服务器管理器，选择"添加角色和功能"。

    ![image](/compute/vm/manual/_images/1.png)

2. 点击“下一步”。

    ![image](/compute/vm/manual/_images/2.png)

3. 点击“下一步”。

    ![image](/compute/vm/manual/_images/3.png)

4. 点击“下一步”。

    ![image](/compute/vm/manual/_images/4.png)

5. 点击“下一步”。

    ![image](/compute/vm/manual/_images/5.png)

6. 重点：勾选“多路径 I/O” ，点击下一步。
   ![image](/compute/vm/manual/_images/6.png)

7. 勾选“如果需要，自动重新启动目标服务器”，安装 MPIO 是需要重启的。然后点击安装。
   ![image](/compute/vm/manual/_images/7.png)

8. 等待重启安装完成。

9. MPIO 设置 （服务器管理-工具-MPIO），MPIO 属性页面，单击发现多路径，勾选“增加对 iSCSI 设备的支持”。

   ![image](/compute/vm/manual/_images/8.png)

**配置 Windows iSCSI 客户端，请参考文档 [Virtual SAN（vSAN）](https://docsv3.qingcloud.com/storage/share/manual/vsan)**

> **说明**
>
> 当创建的 VSAN 为多节点时， 点击程序的发现页面，然后点击『发现门户』，输入每个 VSAN 节点的 IP 。

#### Linux 系统

多路径：

 **以 ubuntu16.04 为例：**

- 启动 ubuntu16.04云服务器，安装 multipath：

  ```
  apt-get install multipath-tools
  ```

- 关闭服务：

  ```
  service multipath-tools stop
  ```

- 增加/修改配置

  修改 ```/etc/multipath.conf```

  配置内容如下：

  ```
  blacklist{
  devnode "^vd"
  }
  defaults {
  user_friendly_names yes
  path_grouping_policy multibus
  failback immediate
  no_path_retry queue
  }
  devices {
  device {
  vendor "LIO-ORG"
  path_selector "queue-length 0"
  path_checker "tur"
  hardware_handler "1 alua"
  prio "alua"
  prio_args "exclusive_pref_bit"
  fast_io_fail_tmo 25
  }
  }
  ```


- 登录 iSCSI 目标

  ```
  #!/bin/bash
  mkdir -p /etc/multipath; touch /etc/multipath/wwids;
  for IP in ip1 ip2 ip3(这里输入VSAN各节点IP地址); do
  for IQN in `iscsiadm -m discovery -t st -p ${IP}:3260 | awk '{print $2}'`; do
  iscsiadm -m node -T ${IQN} -p ${IP}:3260 -l
  done
  done
  ```

- 启动服务

  ```
  service multipath-tools start
  ```

  ```multipath -ll```  可以看到 mpath 信息。

  ```ls /dev/mapper/```  可以看到对应的盘符，后续可以格式化等操作，开始使用。

  **配置 Linux iSCSI 客户端，请参考文档 [Virtual SAN（vSAN）](https://docsv3.qingcloud.com/storage/share/manual/vsan)**
