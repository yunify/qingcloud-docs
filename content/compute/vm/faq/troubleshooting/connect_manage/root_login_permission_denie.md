---
title: "root用户通过ssh登录Linux实例报“Permission denied, please try again”"
date: 2021-03-30T00:38:25+09:00
description: Test description
weight: 40
draft: false
enableToc: false
---

## 概述

使用root用户通过SSH登录Linux实例时，报“Permission denied, please try again”错误。本文主要介绍如何解决该问题。

## 背景信息

当使用SSH登录Linux系统的云服务器时，如果是root用户，即便输入了正确的密码，也会出现类似如下的错误信息。

> 注：非root用户可以正常登录，而且root用户通过[管理终端](https://help.aliyun.com/document_detail/25433.htm)可以正常登录。

- Permission denied, please try again.
- SSH服务器拒绝了密码，请再试一次。

请检查secure日志，若包含如下错误信息，则该问题通常是由于系统启用了SELinux服务所致。请参考[SELinux服务引起问题的解决方法](https://help.aliyun.com/document_detail/41487.htm?spm=a2c4g.11186623.2.28.552b29e8VbzOF9#AQRff)。其他情况请参考[禁止root用户登录引起问题的解决方法](https://help.aliyun.com/document_detail/41487.htm?spm=a2c4g.11186623.2.28.552b29e8VbzOF9#GaARQ)。

```
error: Could not get shadow infromation for root.
```

## 解决方法

### 禁止root用户登录引起问题的解决方法

> 提示：
>
> - 本文相关Linux配置及说明已在CentOS 6.5 64位操作系统中进行过测试。其它类型及版本操作系统配置可能有所差异，具体情况请参阅相应发行版的官方文档。
> - 相关策略可以提高服务器的安全性。请用户基于安全性和易用性权衡后，再确定是否需要修改相关配置。

请参考如下步骤，检查配置并修改。

1. 通过[管理终端](https://help.aliyun.com/document_detail/25433.htm)登录Linux系统的云服务器。

2. 通过cat等命令查看`/etc/ssh/sshd_config`配置文件中是否包含类似如下的配置。

   ```
   PermitRootLogin no
   ```

> 注：该参数的说明如下。
>
> - 未配置该参数（默认情况），或者将该参数值配置为“yes”，都允许root用户登录。只有该参数值设置为“no”时，才会禁止root用户登录。
>
>
> - 该参数只会影响root用户的SSH登录，不影响root用户通过[管理终端](https://help.aliyun.com/document_detail/25433.htm)等其它方式登录系统。

3. 使用vi等编辑器，将该参数值设置为“yes”，或者删除该参数，或者注释（在最开头添加“#”号）整行配置。比如：

   ```
   # PermitRootLogin yes
   ```

> 注：在修改之前建议先对配置文件进行备份。

4. 执行如下命令，重启SSH服务。

   ```
   service sshd restart
   ```

5. 尝试再次使用root用户登录服务器。

### SELinux服务引起问题的解决方法

可以根据现场环境需求，选择临时或永久关闭SELinux服务解决SSH连接异常问题。

#### 检查SELinux服务状态

1. 通过管理终端，登录Linux实例，执行如下命令，查看当前SELinux服务状态。

   ```
/usr/sbin/sestatus -v 
   ```

2. 系统显示类似如下。

   ```
   SELinux status:       enabled
   ```

   > 提示：如果`SELinux status`参数是`enabled`即处于开启状态，是`disabled`即处于关闭状态。 

#### 临时关闭SELinux服务

登录Linux实例，执行如下命令，临时关闭SELinux。

> 提示：临时修改SELinux服务状态，属于实时生效无需重启系统或实例。

```
setenforce 0
```

#### 永久关闭SELinux服务

登录Linux实例，执行如下命令，永久关闭SELinux服务。

> 提示：永久性修改SELinux服务状态，需重启系统或实例方可生效。

```
sed -i 's/SELINUX=enforcing/SELINUX=disabled/' /etc/selinux/config
```

> 提示：此命令只适用当前SELinux服务为`enforcing`状态时使用。