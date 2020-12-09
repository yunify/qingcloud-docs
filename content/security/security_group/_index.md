---
title: "防火墙"
linkTitle: "防火墙"
weight: 30
collapsible: true
type: "product"

section1:
  title: 防火墙 (Security Group)
  vice_title: 为了加强位于基础网络 vxnet-0 中的主机或路由器的安全性，可以在主机或路由器之前放置一个防火墙(Security Group)。QingCloud 系统为每个用户提供了一个缺省防火墙(ID 之后带有星标)，默认打开22端口。当然，您也可以创建更多的防火墙。初始状态下，每个防火墙都不包含任何规则，即，任何端口都是封闭的，您需要建立规则以打开相应的端口。另外，您可以借助 "IP/端口集合" 功能把具有相同特征的一组 IP 或者一组端口设置成为 "IP/端口集合"，并且在防火墙规则中进行添加，实现批量管理功能。
  video: "https://pek3a.qingstor.com/workshop/webhosting%20feb.16%20v3.mp4"
  video_img: "/images/video.png"

Section2:
  title: 用户指南
  children:
    - title: 防火墙
      content: 防火墙产品简介
      url: "/security/security_group/intro/introduction"

    - title: 防火墙使用指南
      content: 防火墙使用文档
      url: "/security/security_group/manual/sg_user_guide"



section4:
  children:
    - title: 了解：什么是防火墙
      content: 防火墙。
      vice_title: 了解的第一步
      children:
        - title: 产品描述（从这里进入示例目录）
          url: "/security/security_group/intro/introduction"

---

