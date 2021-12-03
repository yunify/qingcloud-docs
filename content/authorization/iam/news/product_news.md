---
title: "产品动态"
date: 2020-09-13
collapsible: false
weight: 11

product:
    - time: 2021-11-26
      title: 新增AppCenter对接至IAM
      content: AppCenter对接IAM上线啦。可将AppCenter集群的权限下发给IAM用户与身份，进行AppCenter集群的管理与维护。<br>欢迎大家前来体验！
      url: https://docsv3.qingcloud.com/authorization/iam/manual/user/
      tags:
      - 新功能
      zone: 全局
      
    - time: 2021-09-26
      title: 新增IAM用户管理功能
      content: IAM用户管理功能上线啦。可以将您账户的权限，通过IAM策略，授予您创建的IAM用户。同时支持IAM用户进行编程访问。<br>欢迎大家前来体验！
      url: https://docsv3.qingcloud.com/authorization/iam/manual/user/
      tags:
      - 新产品
      zone: 全局

    - time: 2020-11-12
      title: 产品资源类身份支持[上海1区]
      content: 继[广东2区]、[亚太2区-A]之后，产品资源类身份（云服务器和集群信任载体）现已支持[上海1区]啦，以上几个区的云服务器和集群都将可以配置成为产品资源类身份的信任载体资源。<br>欢迎大家前来体验！

    - time: 2020-09-13
      title: 产品资源类身份支持[亚太2区-A]
      content: IAM V1.0 版发布时，产品资源类身份（云服务器信任载体）仅支持[广东2区]的云服务器尝鲜试用。在 IAM 新增集群信任载体后，我们同步支持了[亚太2区-A]的云服务器和集群身份。<br>欢迎大家前来体验！

    - time: 2020-09-01
      title: 访问鉴权管理（IAM）功能新增：集群身份
      content: 为了完善 IAM 产品资源类的信任载体身份，以服务于更多未来的使用场景，我们新增支持集群作为[身份信任载体](../../faq/principal)。<br>支持集群资源作为身份信任载体后，和云服务器身份一样，使用者可以创建集群身份并赋予策略权限，然后将已创建好的 AppCenter 集群作为资源添加到该身份。于是，此资源即可通过植入 QingCloud 官方 SDK 获得身份上附加的策略所定义的操作权限。<br>未来，[QingCloud AppCenter 平台](https://appcenter.qingcloud.com/)将借由 IAM 的此功能特性设计出更便捷的集群应用服务于客户。
      url: ../../manual/role

    - time: 2020-07-07
      title: 访问鉴权管理产品新增操作日志模块
      content: 作为一款以安全角度出发的产品，当客户数据发生变动时记录操作轨迹以供审查和回溯将尤为重要。为了明确告知客户的账户身份何时被创建、修改和代入使用，我们为 IAM 产品新增了操作日志模块。在操作日志面板，系统将按时间倒序记录本账户在 IAM 控制台的每一个操作，例如创建身份、修改身份上的附加策略、更换策略版本等，并针对跨账户身份还跟踪了该身份被切换使用的情况。除此之外，使用者还可通过选择时间区间，或通过 API 指令、资源 ID 等关键词过滤定位到想要跟踪的操作历史。
      url: ../../manual/log

    - time: 2019-06-16
      title: QingCloud IAM 访问鉴权管理服务 V1.0 发布
      content: 日前，青云 QingCloud IAM 服务 V1.0 版（qingcloud.com/products/iam/）已发布至公有云平台供广大客户试用。作为 IAM 服务的第一个版本，我们主要支持身份信任载体、身份管理、策略权限配置、策略管理和策略模拟器等功能。
      url: ../../news/iam_v1

---

<!-- 设置上述参数可生成产品动态页  -->
