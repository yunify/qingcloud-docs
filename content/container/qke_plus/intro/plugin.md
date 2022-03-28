---
title: "插件支持"
description: 介绍 QKE 支持的插件。
draft: false
weight: 21
keyword: 云计算, QKE, Kubernetes, 插件
---

本文介绍 QKE 支持的插件及插件说明。

<table>
  <thead>
  <tr>
   <td style="width: 100px">插件类型</td><td style="width: 120px">插件名称</td><td>插件说明</td></tr>
  </thead>
  <tr>
   <td rowspan="3">网络插件</td><td>Flannel</td><td><a href="https://github.com/coreos/flannel">Flannel</a> 提供了一种基于 Overlay 网络的跨主机容器网络解决方案。<br/>Flannel 通过给集群中每个节点分配一个子网的方式为容器提供虚拟网络，让集群中不同节点上创建的容器都具有全局唯一的虚拟 IP 地址。</td>
  </tr>
  <tr>
   <td>Calico</td><td><a href="https://www.tigera.io/project-calico/">Calico</a> 是一个基于 BGP 的纯三层的数据中心网络方案（不需要 Overlay）。<br/>Calico 不仅提供集群节点和 pod 之间的网络连接，还基于 iptables 提供了丰富而灵活的网络 Policy，保证通过各个节点上的 ACLs 来提供 Workload 的多租户隔离、安全组以及其他可达性限制等功能。</td>
  </tr>
  <tr>
    <td>Hostnic</td><td><a href=https://github.com/yunify/hostnic-cni>Hostnic</a> 是由青云自主研发的 CNI 插件，支持直接调用青云平台 IaaS 的接口去创建网卡，并将容器内部的接口连接到网卡上，不同集群节点的 Pod 能够借助 IaaS 的 SDN 进行通讯。<br/>相较于传统的 CNI，Hostnic 更强大、更灵活。Hostnic 中 Pod 可直接被外部访问，PodIP 也可以静态配置，并且提供本地的网络策略，可以利用 IaaS 平台的 VPC 功能做更多的控制。</td>
  </tr>
   <tr>
    <td>存储插件</td><td>csi-qingcloud-controller</td><td><a href="https://github.com/yunify/qingcloud-csi">csi-qingcloud-controller</a> 是青云自主研发的存储插件，自动集成于 QKE 中。<br/>支持动态创建基于 QingCloud 云硬盘的 PVC，并挂载到 Pod。同时支持硬盘的自动扩容和自动迁移。当 Pod 迁移时，硬盘会自动随着 Pod 迁移到其他云服务器上。</td>
  </tr>
  <tr>
    <td>云平台插件</td><td>cloud-controller-manager</td><td><a href="https://github.com/yunify/qingcloud-cloud-controller-manager">cloud-controller-manager</a> 是青云自主研发的负载均衡器插件，自动集成于 QKE 中。<br/>支持将 Kubernetes 内部服务和 QingCloud 负载均衡器关联起来，可自动创建负载均衡器、公网 IP，通过负载均衡器将服务暴露给集群外部调用。</td>
  </tr>
    <tr>
    <td>DNS 插件</td><td>coredns</td><td><a href="https://github.com/coredns/coredns">CoreDNS</a> 是 Kubernetes 默认的 DNS 服务，用于为集群提供命名服务。<br/></td>
  </tr>
  <tr>
    <td>控制台插件</td><td>ks-console</td><td><a href="https://github.com/kubesphere/console">ks-console</a> 提供了 KubeSphere 控制台的 Web 界面，能够更简单方便的管理集群及容器应用。</td> 
  </tr>
</table>
