---
title: "快速入门指南"
description: test
draft: true
weight: 5
---

### 步骤一：创建并绑定 SSH 密钥

若已创建并绑定 SSH 密钥，可跳过此步骤。

若您创建云服务器时，没有绑定 SSH 密钥，请参照如下步骤，为云服务器创建并绑定 SSH 密钥。

1. 在左侧导航栏中，选择**计算 > SSH 密钥** ， 进入 **SSH 密钥**页面。

   ![](/Users/amytan/work/github/qingcloud-docs/content/compute/_images/vm_ssh_list.png)

2. 点击**创建** ，弹出**创建 SSH 密钥**窗口。

   <img src="/Users/amytan/work/github/qingcloud-docs/content/compute/_images/vm_ssh_win.png" style="zoom:50%;" />

3. 输入 SSH 密钥的名称，选择创建的方式，并选择加密方法。

4. 点击**提交**，弹出**下载 SSH 密钥的私钥**窗口。

   系统会立刻为您创建一对密钥对，您可以点击下载，下载私钥。私钥只能下载一次，请妥善保管。

5. 在 SSH 密钥列表页面，勾选已创建的 SSH 密钥，点击**加载到云服务器**。

   ![](/Users/amytan/work/github/qingcloud-docs/content/compute/_images/vm_ssh_bind.png)

6. 在弹出的选择云服务器窗口中，选择创建的云服务器，点击**提交**，完成 SSH 密钥绑定操作。 

   <img src="/Users/amytan/work/github/qingcloud-docs/content/compute/_images/vm_ssh_bind_win.png" style="zoom:50%;" />

7. 在云服务器详细信息页面的**配置**区域，可查看已绑定的 SSH 密钥。

   ![](../../_images/vm_ssh_bind_site.png)

### 步骤二：开放 TCP 22 端口

请确认 TCP 22 端口已打开，若未打开，请参照如下步骤打开 TCP 22 端口。

1. 进入云服务器列表页面。

2. 点击云服务器 ID，进入云服务器详情页面。

3. 在“绑定资源”区域，可以看到该云服务器正在使用的安全组。

   ![](/Users/amytan/work/github/qingcloud-docs/content/compute/_images/vm_security_group.png)

4. 点击**安全组**，进入安全组配置页面。

5. 点击**添加规则**，新建一个下行规则。

   ![](/Users/amytan/work/github/qingcloud-docs/content/compute/_images/vm_security_rule.png)

   需要关注如下参数。

   | 参数     | 取值     |
   | -------- | -------- |
   | 方向     | 下行规则 |
   | 行为     | 接受     |
   | 协议     | TCP      |
   | 起始端口 | 22       |

6. 点击**提交**，完成安全组规则的创建操作。

7. 点击**应用修改**，使配置生效。