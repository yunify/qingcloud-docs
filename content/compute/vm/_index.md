---
title: "主机"
linkTitle: "主机"
weight: 1
collapsible: true
type: "product"

section1:
  title: 主机
  vice_title: QingCloud 为您提供秒级响应、性能卓越、安全稳定的云计算服务
  video: "https://pek3a.qingstor.com/workshop/webhosting%20feb.16%20v3.mp4"
  video_img: "/images/video.png"

Section2:
  title: 用户指南
  children:
    - title: 主机
      content: 主机产品用户使用文档
      url: "/compute/vm/intro/instance"

    - title: 映像
      content: 映像使用文档
      url: "/compute/vm/intro/image"

    - title: SSH 密钥
      content: 如何使用 SSH 密钥
      url: "/compute/vm/intro/ssh"
    
    - title: 设备
      content: 设备使用方式
      url: "/compute/vm/intro/device"

    - title: 安置策略组
      content: 如何使用安置策略组
      url: "/compute/vm/intro/instance_group"


section4:
  children:
    - title: 了解：什么是主机
      content: 主机为用户提供开箱即用的操作系统与工具。
      vice_title: 了解的第一步
      children:
        - title: 产品介绍
          url: "/compute/vm/intro/instance"

        

    - title: 上手：创建主机与部署应用
      content: 虚拟主机为用户提供可无限扩展的通用数据存储服务。
      vice_title: 上手的第一步
      children: 
        - title: 创建与使用青云主机
          url: "/compute/vm/manual/vm_instance"

        - title: 基于主机搭建 Wordpress 网站
          url: "/compute/vm/best-practices/wordpress"

        - title: 基于主机创建镜像
          url: "/compute/vm/manual/image"
---


<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->