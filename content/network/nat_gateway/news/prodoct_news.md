---
title: "产品动态"
description: 青云NAT网关产品发布上线动态。
collapsible: false
weight: 10

product:
    - time: 2021-12-23
      title: 青云 QingCloud 新版 NAT 网关正式发布，旧版 NAT 网关停止新购
      content: 如果您有旧版 NAT 网关实例，可继续使用旧版，也可在 NAT 网关控制台进行在线升级。<br/>与旧版 NAT 网关相比，新版 NAT 网关有以下优点：<br/><br/>**优点一：功能更丰富**<br/><br/>增加了对 DNAT 功能的支持，SNAT 功能支持转发指定云服务器，增强了监控能力。<br/><br/>**优点二：使用更便捷**<br/><br/>- 支持一键组合购买 NAT 网关和弹性公网 IP。<br/>- 创建 NAT 网关时，自动绑定所属 VPC 网络内的所有私有网络，无需手动绑定。<br/>- 如果私有网络关联的是默认路由表，且默认路由表里没有缺省路由指向其他 NAT 网关，会自动加一条缺省路由指向当前 NAT 网关，无需手动配置。<br/><br/>**优点三：限制更少**<br/><br/>取消了对绑定私有网络数量的限制，同一 VPC 网络内的所有私有网络都可以加入 NAT 网关，用 SNAT 规则来控制哪个私有网络可以访问公网。
      url: /network/nat_gateway/intro/version_diff/
      qingCloudZhiUrl: https://log.qingcloud.com/archives/8636
      tags:
       - 新功能
      zone: 北京三区、上海1区、广东2区、亚太2区-A

    - time: 2020-02-09
      title: NAT 网关功能升级
      content: 1.NAT 网关 公网 IP 支持权重配置。<br/>2.NAT 网关支持集群健康检查。<br>3.NAT 网关支持主备多线路出口。
      url: /network/nat_gateway/manual/mge_nat/health_check/

    - time: 2019-08-01
      title: NAT 网关上线
      content: 通过 NAT 网关（分布式网络地址转换服务），用户的多个私有网络可通过一个统一的 IP 访问外网，共用公网带宽。分布式的设计具备优秀的可扩展性，可大幅提升网络出带宽，适用于高并发大流量公网业务。
      url: /network/nat_gateway/intro/nat_gateway/

---

