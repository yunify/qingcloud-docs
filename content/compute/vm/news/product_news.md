---
title: "产品动态"
date: 2021-10-08T10:08:56+09:00
collapsible: false

product:
    - time: 2021-10-08 11:28:32
      title: 部分区域上架e3类型云服务器
      content: e3云服务器搭载第三代英特尔®至强®可扩展处理器（Ice Lake），计算、存储、网络性能全面提升。采用独享 CPU 模式，提供 96C384G 高规格配置。超低存储和网络时延，满足数据库、缓存在高并发场景需求，并且性价比极高，助力企业以更低成本上云。
      url: /compute/vm/manual/vm_instance
      tags:
      - 产品上架
      - 性能提升
      zone: 北京3区-C、北京3区-D、上海1区-A

    - time: 2021-9-26 11:30:30
      title: 云硬盘部分区域上架增强型SSD云盘
      content: 增强型SSD云盘具有超高性能，适用分布式数据库等对IOPS和延时要求极高的服务。为充分利用增强型SSD云盘性能，建议挂载到企业级e3云服务器。
      url: /compute/vm/manual/connect_instance
      tags:
      - 产品上架
      - 新功能
      - 性能提升
      zone: 上海1区、广东2区-B、北京三区-C、北京3区-D

    - time: 2021-9-15 11:52:32
      title: 主机/硬盘批量创建支持自动编号命名
      content: 主机/硬盘上线批量创建时命名自动编号功能，相较于之前的批量创建重复命名的情况，自动编号能极大提升用户体验，便于资源区分，避免用户手动更改命令造成的不便。
      url: /compute/vm/manual/vm_instance
      tags:
      - 体验优化
      - 新功能
      zone: 北京三区、上海1区、广东2区、亚太2区-A、雅加达区

    - time: 2021-9-6 11:30:30
      title: VNC支持软重启功能
      content: VNC上线软重启Restart功能，在VNC左侧按键操作中加入了Restart，通过软重启，用户可以更方便的进行主机调试，可监控开机过程或者进入安全模式，便于解决操作系统内部问题。
      url: /compute/vm/manual/connect_instance
      tags:
      - 体验优化
      - 新功能
      zone: 北京三区、上海1区、广东2区、亚太2区-A、雅加达区

    - time: 2021-7-15 16:22:36
      title: 新主机创建流程上线
      content: 新主机创建流程提供了快捷的主机创建方式，创建主机的同时可以创建并绑定EIP、数据盘、备份策略、安全组等主机相关资源，实现一站式资源交付。同时，增加快速创建流程，只需要简单选择主机规格和操作系统，其他配置均可采用系统默认。新增场景化规格选择，根据用户不同场景需求为用户提供推荐配置及相关产品。
      url: /compute/vm/manual/vm_instance
      tags:
      - 体验优化
      - 新功能
      zone: 北京三区、上海1区、广东2区、亚太2区-A、雅加达区
    
    - time: 2021-6-20 14:32:45
      title: 新一代企业级云服务器e3正式上线
      content: e3 云服务器搭载第三代英特尔®至强®可扩展处理器（Ice Lake），计算、存储、网络性能全面提升。采用独享 CPU 模式，提供 96C384G 高规格配置。超低存储和网络时延，满足数据库、缓存在高并发场景需求，并且性价比极高，助力企业以更低成本上云。
      url: /compute/vm/intro/instance
      tags:
      - 新产品
      - 新规格
      zone: 北京三区、上海1区、广东2区

    - time: 2020-12-25 15:32:36
      title: Web终端新增粘贴板功能
      content: 一直以来，由于VNC功能限制，基于VNC的Web终端不支持粘贴功能，命令行需要手工输入，某些场景下极大降低了我们的工作效率。针对这一问题，主机Web终端新上线了粘贴板功能，支持复制内容的快捷输入，入口请见Web终端右上方。
      url: /compute/vm/manual/connect_instance
      tags:
      - 体验优化
      - 新功能
      zone: 北京三区、上海1区、广东2区、亚太2区-A、雅加达区

    - time: 2020-8-25 10:50:33
      title: 数据盘支持在线扩容
      content: 此前，数据盘扩容是需要先将云硬盘卸载之后再进行扩容，而后再挂载到云主机上面。这种扩容方式会导致业务中断，影响用户体验。数据盘在线扩容功能上线后，用户可在数据盘处于挂载状态时直接进行扩容，无需提前卸载云硬盘。
      url: /compute/vm/faq/common_operations/disk_manage/disk_expansion
      tags:
      - 体验优化
      - 新功能
      zone: 北京三区、上海1区、广东2区、亚太2区-A、雅加达区
    
    - time: 2020-6-24 11:25:56
      title: 广东2A/2B区上线企业型E2主机
      content: 广东2A/2B区上线企业型E2主机（详情：qingcloud.com/products/instances），可提供vCPU/内存比1:2/1:4/1:8，vCPU核数可选范围：2核-32核，内存可选范围：4GB-448GB，最大内网带宽为10Gbps的不同主机组合。
      url: /compute/vm/intro/instance
      tags:
      - 新产品
      - 新规格
      zone: 广东2区

    - time: 2020-6-2 12:36:38
      title: 批量克隆功能优化
      content: 为提升克隆效率，优化了批量克隆云主机的功能，每个云主机支持指定不同的克隆数量，在进行批量克隆任务时有了更为灵活的选择，可一键完成不同云主机的不同克隆需求。
      
      tags:
      - 体验优化
      - 新功能
      zone: 北京三区、上海1区、广东2区、亚太2区-A、雅加达区

    - time: 2019-10-24 17:50:47
      title: 支持创建 GPU 云服务器
      content: 为了满足用户对高性能计算、视频处理或图形渲染的需求，青云特推出GPU云服务器给有需求的用户使用，用户可以在青云控制台上进行GPU云服务器的创建和使用。
      url: /compute/vm/manual/gpu_instance
      tags:
      - 新功能
      - 体验优化
      zone: 北京三区

    - time: 2019-10-24 17:50:47
      title: 支持创建弹性裸金属服务器
      content: 青云 QingCloud 弹性裸金属服务器服务，提供高性能、资源独享、安全隔离的专属弹性裸金属服务器群组，满足各类核心应用对高性能及稳定性的需求，同时提供完整的设备管理权限及运维服务。 用户可以像使用其他云资源一样，快速、灵活的部署及管理弹性裸金属服务器，并可按需弹性购买。
      url: /compute/vm/manual/bm_instance
      tags:
      - 新功能
      - 体验优化
      zone: 北京三区

    - time: 2019-10-24 17:50:47
      title: 支持将 ECS 迁移到青云QingCloud
      content:
      url: /compute/vm/best-practices/linux/ecs2qing
      tags:
      - 新功能
      - 体验优化
      zone: 北京三区
---

<!-- 设置上述参数可生成产品动态页  -->
