---
title: "配置参数"
description: 介绍如何修改 QKE 集群参数。
draft: false
weight: 5
keyword: 青云, QingCloud, 云计算, QKE 参数
---

QKE 支持自定义部分参数的值，您可以根据自己的业务情况对集群运行参数进行调整。

## 操作步骤

1. 登录 QingCloud 管理控制台。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **容器服务** > **容器引擎 QKE**，进入 QKE 集群列表页面。

3. 点击目标集群 **ID** 号，进入集群详情页面。

4. 在页面右侧区域，点击**配置参数**页签。

   页面显示当前版本所支持的所有参数配置项、参数描述及参数当前值。

   ![参数配置](../../../_images/paras_setting.png)

5. 点击**修改属性**，参数值变为可编辑状态。

   > **说明**
   >
   > 部分参数仅支持在创建集群时配置，此处不可修改，仅作为展示。

6. 根据实际情况进行参数值修改。

   详细说明请参见下述[参数说明](#参数说明)。

7. 修改完成后，点击**保存**，弹出提示框。

8. 确认无误后，点击**确认**。

## 参数说明

| 参数                         | 描述                                                         | 注意                                                         |
| ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| API 密钥                     | QingCloud IaaS API 密钥 (https://console.qingcloud.com/access_keys/)，此密钥将被用来创建云平台的资源，比如负载均衡器、PV 挂盘等。 | 集群创建后无法修改。                                         |
| 安装 KubeSphere              | 选择是否安装 KubeSphere，默认为 true 表示安装 KubeSphere 以及监控组件。<div style="background-color: #D8ECDE;padding: 10px 24px; margin: 10px 0;border-left:3px solid #00a971;"><b>说明</b>：<br/><li>安装 KubeSphere 后，其应用商店中的 App 仅限于体验、测试用途。</li><li>公有云工单服务支持仅限于 App 部署，App 自身的业务可用性支持不在工单服务范围内。</li><br/>      </div> | 集群创建后无法修改，请在创建集群前规划好集群用途。           |
| 选装组件                     | 选装希望安装的组件。QKE 默认仅最小化安装 KubeSphere，此处勾选后将安装所选组件，各组件的功能说明可参考 [KubeSphere 官方文档。](https://kubesphere.com.cn/en/docs/pluggable-components)<div style="background-color: #D8ECDE;padding: 10px 24px; margin: 10px 0;border-left:3px solid #00a971;"><b>说明</b>：<br/><li>此选项只有在选项<b>安装 KubeSphere</b> 为 <b>true</b> 时才会生效。</li><li>此选项只负责安装组件，清空此选项并不会执行卸载操作，如需卸载请手动操作。</li><li>安装这些组件可能需要较长时间，请耐心等待。</li><br/>      </div> | -                                                            |
| KubeSphere 控制台 EIP        | 如果希望通过公网 LoadBalancer 方式访问 KubeSphere 控制台，可在此选择可用的 EIP，将为此 EIP 自动创建一个负载均衡器并绑定；如果没安装 KubeSphere，无需设置此参数 | -                                                            |
| K8s apiserver EIP            | 如果希望通过公网访问 K8s apiserver，可在此处填写可用的 EIP，系统将会自动创建一个 LB 并绑定此 EIP。 | 集群创建后无法修改。                                         |
| Kubernetes EIP 地址          | Kubernetes 的外网访问地址，请按照 IPv4 格式填写，例如：`139.198.123.23`。该参数用于更新 Kubeconfig 文件中 `server` 的 IP 地址。 | 修改此项会重启所有主节点的 kube-apiserver 从而导致 kube-apiserver 服务短暂中断，建议在业务低谷时间操作。 |
| Kubernetes EIP 端口          | Kubernetes 的外网访问端口，默认是 6443 (范围: 1 - 65535)。该参数用于更新 Kubeconfig 文件中 `server` 的访问端口 。 | -                                                            |
| 重命名 K8s 节点              | <li> **true**：表示使用易读的 k8s 节点名，比如 master1（一号主节点），worker-p001（一号基础型工作节点），worker-s002（二号企业型工作节点）。</li><li>**false**：表示使用系统自动生成的随机节点名。</li> | 集群创建后无法修改。                                         |
| Proxy Mode                   | 选择一种 Proxy Mode（ipvs 或 iptables）。                    | 集群创建后无法修改。                                         |
| 网卡插件                     | 选择网卡插件（calico 或 flannel）。                          | 集群创建后无法修改。                                         |
| 云服务器 hosts 记录          | 自定义添加到 `/etc/hosts` 文件的记录，多条记录用逗号分割。比如 `192.168.2.2 host1,192.168.2.3 host2`。 | -                                                            |
| registry-mirrors             | 完整的 Docker 镜像服务地址，比如 `https://mirror.harbor.local`，多个地址之间用空格隔开。 | -                                                            |
| insecure-registries          | 需要通过非安全的 HTTP 或不受信任的 HTTPS 访问的 Docker 仓库，比如 `mirror.harbor.local`，多个地址通过空格切分。 | -                                                            |
| Docker 网桥地址              | Docker 网桥的 IP 地址和子网掩码，请按照标准的 CIDR 格式填写。默认为 `172.30.0.1/16`。 | 修改此项需要通过集群菜单依次重启所有 k8s 节点（包括主节点、基础型节点、企业型节点和 GPU 节点），请在业务低谷时操作。 |
| Docker 清理天数              | 每天凌晨 2 点 35 分自动清理指定天数之前创建的 Docker 容器、镜像、网络等闲置资源。<br/>默认为 `3` 表示只清理创建时间超过 3 天（72 小时）的闲置资源；`0` 表示不自动清理 (范围: 0 - 30)。 | -                                                            |
| Pod 网段                     | Pod 网段，请按照标准的 CIDR 格式填写。例如：`10.10.0.0/16`。 | 集群创建后无法修改。                                         |
| Service 网段                 | Service 网段，请按照标准的 CIDR 格式填写。例如：`10.96.0.0/16`。 | 集群创建后无法修改。                                         |
| 集群内 DNS 域名              | 集群内的 DNS 域名，用于 Kubernetes Services。                | 集群创建后无法修改。                                         |
| NodePort 范围                | 每个节点可分配的 NodePort 范围，例如 ‘30000-32767’。         | 集群创建后无法修改。                                         |
| 最大 pod 数量                | 每个节点上可运行的最大 pod 数量，默认为 120。                | -                                                            |
| Kubernetes 日志级别          | Kubernetes 的日志级别，范围: 0 - 10，数字越大记录越详细，也会占用更多日志空间。 | 修改此项会重启所有 k8s 组件（kube-apiserver、kube-controller-manager、kube-scheduler、kube-proxy）从而导致服务短暂中断，建议在业务低谷时间操作。 |
| 日志保留天数                 | KubeSphere 使用 ElasticSearch 存储日志，可通过配置此参数自动清理指定天数之前的日志，范围: 0 - 30，0 表示不自动清理 。 | 集群创建后无法修改。                                         |
| audit-policy                 | 设置审计规则文件路径。路径为空或文件不存在则不记录审计日志。<br/>可通过客户端节点登录到所有主节点并把规则文件放到 `/etc/kubernetes/audit/policies/` 目录下；系统已内置默认审计规则文件 `/etc/kubernetes/audit/policies/default.yaml`。 | 修改此项会重启所有主节点的 kube-apiserver 从而导致 kube-apiserver 服务短暂中断，建议在业务低谷时间操作 |
| audit-webhook                | 设置 Webhook 配置文件的路径。Webhook 配置文件使用 kubeconfig 格式指定服务的远程地址和用于连接它的凭据。<br/>留空此项表示把日志存储在主节点本地目录 `/etc/kubernetes/audit/logs/` 下。 | -                                                            |
| audit-log-maxage             | 自动清理指定天数之前产生的审计日志文件，范围: 0 - 30。默认为 `7`, 表示自动清理创建时间超过 7 天的审计日志文件， | 修改此项会重启所有主节点的 kube-apiserver 从而导致 kube-apiserver 服务短暂中断，建议在业务低谷时间操作。 |
| audit-log-maxsize            | 自动轮转达到指定文件大小的审计日志文件，以 MB 为单位，范围: 1 - 200。默认为 `1`, 表示当审计日志文件达到 1 MB 以后触发自动轮转。 | 修改此项会重启所有主节点的 kube-apiserver 从而导致 kube-apiserver 服务短暂中断，建议在业务低谷时间操作。 |
| audit-log-maxbackup          | 最多保留指定数量的审计日志文件，范围: 1 - 100。默认为 `100` 表示最多保留最近的 100 个审计日志文件。 | 修改此项会重启所有主节点的 kube-apiserver 从而导致 kube-apiserver 服务短暂中断，建议在业务低谷时间操作。 |
| kube-controller-manager 参数 | kube-controller-manager 参数，自定义配置，支持多项配置，需严格遵循每行配置一项且保持 `key: value` 的格式。<br/>配置示例：`add-dir-header: \"true\"`，其他配置项请参考官网文档 kube-controller-manager configurations，使用时请去掉 `--` 符号。 | -                                                            |
| kube-apiserver 参数          | kube-apiserver 参数，自定义配置，支持多项配置，需严格遵循每行配置一项且保持 `key: value` 的格式。<br/>配置示例：`add-dir-header: \"true\"`，其他配置项请参考官网文档 kube-apiserver configurations，使用时请去掉 `--` 符号。 | -                                                            |
| kube-scheduler 参数          | kube-scheduler 参数，自定义配置，支持多项配置，需严格遵循每行配置一项且保持 `key: value` 的格式。<br/>配置示例：`add-dir-header: \"true\"`，其他配置项请参考官网文档 kube-scheduler configurations，使用时请去掉 `--` 符号。 | -                                                            |
| kube-proxy iptables 参数     | kube-proxy iptables 参数，自定义配置，支持多项配置，需严格遵循每行配置一项且保持 `key: value` 的格式。<br/>配置示例：`masqueradeAll: true`， 其他配置项请参考 kube-proxy iptables configurations。 | -                                                            |
| kubelet 参数                 | kubelet 参数，自定义配置，支持多项配置，需严格遵循每行配置一项且保持 `key=value` 的格式。<br/>配置示例：`--add-dir-header=true`，其他配置项请参考官方文档 kubelet configurations，使用时请保留 `--` 符号。 | -                                                            |
| 用户 SSH 公钥                | 用于通过 SSH 方式连接到集群节点。公钥以算法、密钥、注释（可省略）这三部分表示，三部分之间用空格隔开，如：`ssh-rsa AAAA… user@i-xxxw`。 | -                                                            |







