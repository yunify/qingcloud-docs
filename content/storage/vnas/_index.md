---
title: "文件存储"
linkTitle: "文件存储"
weight: 3
collapsible: true
type: "product"

section1:
  title: Virtual NAS
  vice_title: QingCloud 为您提供的 Virtual NAS 服务是基于标准的 NFS 和 Samba（CIFS）网络协议实现的数据传输，通过创建一个 NAS 服务器，您可以在多个云服务器客户端以及不同的操作系统间进行数据共享。同时提供权限组和账号配置功能，便于您对云服务器客户端进行访问控制和管理配置。


Section2:
  title: 用户指南
  children:
    - title: Virtual NAS
      content: Virtual NAS 产品使用文档
      url: "/storage/vnas/manual/vnas"


section4:
  children:
    - title: 了解：什么是 Virtual NAS
      content: Virtual NAS 是为用户提供的基于标准的 NFS 和 Samba（CIFS）网络协议实现的 NAS 服务。
      vice_title: 了解的第一步
      children:
        - title: 产品概述
          url: "/storage/vnas/intro/introduction"

    - title: 上手：创建 Virtual NAS 与使用共享存储目标
      content: 在控制台进行 Virtual NAS 服务器以及共享存储目标的创建及销毁操作。
      vice_title: 上手的第一步
      children: 
        - title: 如何创建 Virtual NAS 服务器
          url: "/storage/vnas/manual/vnas/#创建-virtual-nas-服务器"

        - title: 如何创建共享存储目标
          url: "/storage/vnas/manual/vnas/#创建共享存储目标"          

        - title: 如何在不同的操作系统上使用共享存储目标
          url: "/storage/vnas/manual/vnas/#linux-客户端配置及访问"
---


<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->