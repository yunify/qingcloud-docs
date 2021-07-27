---

title: "绑定网络 ACL"
linkTitle: "绑定网络 ACL"
date: 2021-05-20T10:08:56+09:00
description:
draft: false
weight: 25
---

网络 ACL 是 VPC 网络中的网络访问控制功能，您可以自定义网络 ACL 规则，然后将网络 ACL 与私有网络绑定，实现对私有网络中中弹性网卡 ENI（Elastic Network Interface）的流量的访问控制。

## 操作场景

您已经创建了网络 ACL 后，可以在私有网络中绑定、更改、解绑网络 ACL。每个私有网络仅允许绑定一个网络 ACL。

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台导航栏中，选择**产品与服务** > **网络服务** > **VPC 网络**，进入**VPC 网络**页面。

3. 点击私有网络所属的 VPC 网络，进入到该 VPC 的私有网络管理页面。

4. 在页面左侧的私有网络列表中，右键单击待绑定网络ACL的私有网络，选择 **网络 ACL**  > **绑定**，便可绑定已创建的网络 ACL。

   <img src="/network/vpc_2.0/_images/502025_bind_acl.png" alt="bind_acl" style="zoom:50%;" />

5. 点击私有网络列表右侧 **网络 ACL** 页签，便可查看到具体的 ACL 规则。

   <img src="/network/vpc_2.0/_images/502025_acl_page.png" alt="acl_page" style="zoom:50%;" />

## 后续操作

根据需要，您还可在当前页面执行如下操作：

- 切换网络 ACL：点击**切换 ACL**，选择需要绑定的其他网络 ACL，点击**提交**。
- 解绑网络 ACL：点击**解除绑定**，在提示框中点击**确认**。
- 添加 ACL 规则：点击**添加 ACL 规则**，可创建新的网络 ACL 规则。
- 修改 ACL 规则：勾选待修改的网络 ACL 规则，点击**更多操作** > **修改 ACL** 规则，可修改所选 ACL 规则。
- 删除 ACL 规则：勾选待删除的网络 ACL 规则，点击**更多操作** > **删除 ACL** 规则，可删除所选 ACL 规则。

