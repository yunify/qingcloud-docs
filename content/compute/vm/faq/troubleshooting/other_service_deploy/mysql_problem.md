---

title: "自建MySQL无法远程访问排查思路"
description: Test description
weight: 20
draft: false
enableToc: false
---

## 概述
使用青云平台云服务器安装的MySQL无法远程访问，可通过本文检查处理

### Liunx云服务器排查思路

一、执行以下命令查看MySQL服务状态是否正常，running 状态表示MySQL服务正常

![mysql_problem01](../../../_images/mysql_problem01.jpg)

二、执行以下命令查看MySQL服务是否被监听

![mysql_problem02](../../../_images/mysql_problem02.jpg)

三、查看云服务器内部防火墙是否已关闭，dead 状态表示防火墙已关闭，如果是开启状态，使用 systemctl stop firewalld 命令关闭防火墙

![mysql_problem03](../../../_images/mysql_problem03.png)

四、查看[QingCloud 管理控制台](https://console.qingcloud.com/login)云服务器绑定的安全组中是否放行了3306端口，路径如下：**计算** > **云服务器** >  **i-xxxxxxx**  -> **安全组**

![mysql_problem04](../../../_images/mysql_problem04.jpg)

五、查看是否在安全组中放行了3306端口，如果没过放行，则通过如下步骤放行：添加规则 ->  提交 ->  应用修改,规则模版如下图

![mysql_problem05](../../../_images/mysql_problem05.png)

六、如云服务器是通过VPC网络进行访问，则修改VPC绑定的安全组，并添加端口转发规则，路径如下：**网络** > **VPC网络** > **rtr-xxxxxxx**  >  **管理配置**  > **添加规则** > **提交** > **应用修改**，端口转发规则如下图

![mysql_problem06](../../../_images/mysql_problem06.jpg)

七、使用客户端工具验证登录

![mysql_problem07](../../../_images/mysql_problem07.jpg)

### Windows云服务器排查思路

一、右键开始菜单 —> 运行 —>  输入services.msc,在服务界面查看MySQL服务的运行状态

![mysql_problem08](../../../_images/mysql_problem08.jpg)

二、右键开始菜单 —> 运行 —>  输入cmd,进入命令行界面使用如下命令查看MySQL服务端口是否被监听

```
netstat -ano | findstr :3306
```

![mysql_problem09](../../../_images/mysql_problem09.jpg)

三、查看防火墙是否已关闭，防火墙路径：控制面板 -> 系统和安全 -> Windows Defender 防火墙 -> 启用或关闭Windows Defender 防火墙

![mysql_problem10](../../../_images/mysql_problem10.jpg)

四、查看 [QingCloud 管理控制台](https://console.qingcloud.com/login)云服务器绑定的安全组中是否放行了3306端口，路径如下：计算 -> 云服务器 ->  i-xxxxxxx  - > 安全组

![mysql_problem04](../../../_images/mysql_problem04.jpg)

五、查看是否在安全组中放行了3306端口，如果没过放行，则通过如下步骤放行：添加规则 ->  提交 ->  应用修改,规则模版如下图

![mysql_problem05](../../../_images/mysql_problem05.png)

六、如主机是通过VPC网络进行访问，则修改VPC绑定的安全组，并添加端口转发规则，路径如下：网络 -> VPC网络 -> rtr-xxxxxxx  ->  管理配置  -> 添加规则 -> 提交 -> 应用修改，端口转发规则如下图

![mysql_problem06](../../../_images/mysql_problem06.jpg)

七、使用客户端工具验证登录

![mysql_problem07](../../../_images/mysql_problem07.jpg)