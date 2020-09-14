---
---

# IAM 的应用场景

## 场景演练①：免密钥应用开发

当您准备自己在云上开发一款应用，需要在该应用中调用 QingCloud API/CLI （例如： StopInstances 停止主机）以完成某些功能时，过去您可能需要利用自己的账户 API 密钥作为该应用配置项在有需要时连接使用。

现在您可以通过配置 IAM 即可轻松实现免密钥访问，而无需担心配置项意外泄露的问题。

### 场景①操作步骤

1.创建一个信任载体为主机的身份，并关联具备指定权限范围的策略（本例中将使用支持完全访问弹性云主机服务的预置策略）

![demo1_CreateRole](_images/demo1_CreateRole.png)

2.将您准备用来部署和执行您开发的这款应用的云主机，关联到新创建的身份上

![demo1_AssociateRole](_images/demo1_AssociateRole.png)

3.将 QingCloud 官方 SDK 引用到这款应用的身份鉴权代码中（本例中为 Python SDK）

![demo1_ConnectSDK](_images/demo1_ConnectSDK.png)

### 场景①验证演示

根据上述操作步骤，由于应用所在主机绑定的身份具备弹性云主机服务的完全权限，则在该主机上应可成功访问停止主机 API ： StopInstances ，但不可访问其他服务如删除私有网络 API ：DeleteVxnets 。

1.能操作停止主机 StopInstances ：

![demo1_ExcuteSDK1](_images/demo1_ExcuteSDK1.png)

![demo1_ExcuteCallback](_images/demo1_ExcuteCallback.png)

2.不能操作删除私有网络 DeleteVxnets ：

![demo1_ExcuteSDK2](_images/demo1_ExcuteSDK2.png)

## 场景演练②：跨账号管理协作

当您需要授权他人辅助您管理资源、处理账单等运维操作时，过去您可能是将自己的账号密码直接提供给身边的人使用，或者是将您的资源通过组合成项目的方式共享给他人操作。

现在您可以通过 IAM 直接提供您账号中部分资源或操作权限给他人来使用，而无需考虑资源组合的问题。

### 场景②操作步骤

1.向您需要授权的人获取到他的 QingCloud 账户 ID 。例如对方账户为 `tester@yunify.com` ，ID 为 `usr-ZBeoYtYw`

![demo2_AnotherAccount](_images/demo2_AnotherAccount.png)

> 注：此 ID 需要他人自行查看并主动发送给您，否则您将无法为对方设置访问权。

2.创建一个青云账户类的身份，信任载体填写为对方发送给您的这个 ID ，并关联具备指定权限范围的策略（本例中将使用支持完全访问虚拟专用网服务的预置策略）

![demo2_CreateRole](_images/demo2_CreateRole.png)

3.在身份上备注对方信息，并为其配置访问控制台时的可操作模块

![demo2_ConfigRole](_images/demo2_ConfigRole.png)

> 注：设置访问模块是为了让对方更聚焦操作，是对对方可操作权限的双重保险设定。

### 场景②验证演示

根据上述操作步骤，由于您给他人赋予的身份具备虚拟专用网服务的完全权限，则他人登陆 QingCloud 控制台后可通过切换身份成功帮您创建私有网络，但不可访问您的其他服务例如主机。

`tester@yunify.com`的前提操作：**切换身份**

![demo2_SwitchRole](_images/demo2_SwitchRole.png)

1.导航栏有路由器和私有网络入口，不再有其他入口

![demo2_Dashboard](_images/demo2_Dashboard.png)

2.能成功查看和创建 VPC

![demo2_CreateVPC](_images/demo2_CreateVPC.png)
