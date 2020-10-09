---
title: "常见问题"
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false
---

# 常见问题及解决方案

## Windows 篇

### 如何开启远程桌面

 1、登陆到青云控制台，在主机列表里找到这台主机，如图

![图片](/computing/_images/image.png)

 2、通过控制台---网络与CDN---公网ip---申请eip

![图片](/computing/_images/image-1568884014191.png)

 3、通过右键eip---分配到主机----找到对应的主机完成绑定，如图

![图片](/computing/_images/image-1568884020689.png)

 4、点击主机id旁边小电脑的标志，通过web vnc登陆到主机，开启远程桌面访问，如图

![图片](/computing/_images/image-1568884029354.png)

![图片](/computing/_images/image-1568884045486.png)

![图片](/computing/_images/image-1568884042485.png)

![图片](/computing/_images/image-1568884094219.png)

 5、确认主机内部防火墙已关闭，通过控制面板---系统和安全---windows防火墙---启用或者关闭windows防火墙，关闭专有网络和共用网络防火墙，如图

![图片](/computing/_images/image-1568884099948.png)

 6、放行青云平台主机绑定的防火墙规则下行3389端口。并应用修改防火墙

![图片](/computing/_images/image-1568884118279.png)

 7、通过客户端测试远程桌面云主机，通过开始----运行----mstsc，回车

![图片](/computing/_images/image-1568884119758.png)

![图片](/computing/_images/image-1568884121368.png)

### 如何关闭IE增强的安全配置

通过服务器管理器---本地服务器---IE增强的安全配置----管理员----关闭----确定

![图片](/computing/_images/image-1568884122683.png)

![图片](/computing/_images/image-1568884124128.png)

### 如何搭建一个ftp服务

ftp server下载地址

https://yunify.anybox.qingcloud.com/s/g3yXfHGZ9V9ZtZgGIFfLHeXlSSSE2Klf

ftp_client下载地址

https://yunify.anybox.qingcloud.com/s/ORyko6fbfylJE5xu8PPjRtw1NN36wneG

 1、安装ftp server，按照提示操作即可

![图片](/computing/_images/image-1568884199091.png)

![图片](/computing/_images/image-1568884200290.png)

![图片](/computing/_images/image-1568884201864.png)

![图片](/computing/_images/image-1568884203465.png)

![图片](/computing/_images/image-1568884205008.png)

![图片](/computing/_images/image-1568884206761.png)

 2、配置ftp server，首先设置管理员端口和密码，端口配置默认的即可

![图片](/computing/_images/image-1568884208563.png)

![图片](/computing/_images/image-1568884210156.png)

![图片](/computing/_images/image-1568884211969.png)

 3、安装以上的报错，依次是需要配置被动模式、TLS认证，首先配置被动模式

![图片](/computing/_images/image-1568884215409.png)

![图片](/computing/_images/image-1568884217206.png)

![图片](/computing/_images/image-1568884218566.png)

 4、配置TLS安全认证登陆

![图片](/computing/_images/image-1568884220221.png)

![图片](/computing/_images/image-1568884222016.png)

![图片](/computing/_images/image-1568884224061.png)

![图片](/computing/_images/image-1568884225782.png)

![图片](/computing/_images/image-1568884227343.png)

![图片](/computing/_images/image-1568884228908.png)

 5、配置ftp用户

![图片](/computing/_images/image-1568884230470.png)

![图片](/computing/_images/image-1568884232308.png)

![图片](/computing/_images/image-1568884234299.png)

![图片](/computing/_images/image-1568884235975.png)

 6、配置ftp共享目录

![图片](/computing/_images/image-1568884237932.png)

![图片](/computing/_images/image-1568884239333.png)

![图片](/computing/_images/image-1568884240689.png)

 7、放行云主机绑定防火墙的下行21号端口，20000-21000被动端口范围，协议为tcp协议，并应用修改

![图片](/computing/_images/image-1568884242630.png)

 8、安装ftp客户端，按照提示下一步直到完成即可（略）

 9、打开ftp客户端，测试ftp功能是否正常

![图片](/computing/_images/image-1568884243971.png)

![图片](/computing/_images/image-1568884245469.png)

### 如何安装NFS客户端

可以通过以下路径安装，服务器管理器---本地服务器---管理----添加角色和功能---功能---NFS客户端---安装

![图片](/computing/_images/image-1568884247071.png)

![图片](/computing/_images/image-1568884248652.png)

![图片](/computing/_images/image-1568884250307.png)

### 如何安装telnet客户端

可以通过以下路径安装，服务器管理器---本地服务器---管理----添加角色和功能---功能---telnet客户端---安装

![图片](/computing/_images/image-1568884253180.png)

### 如何安装及部署IIS web服务

可以通过以下路径安装，服务器管理器---本地服务器---管理----添加角色和功能---服务器角色---web服务器（IIS）---添加功能---选择角色服务---安装

备注：放行青云防火墙下行80端口才能使用公网访问

![图片](/computing/_images/image-1568884256043.png)

![图片](/computing/_images/image-1568884257295.png)

![图片](/computing/_images/image-1568884258464.png)

![图片](/computing/_images/image-1568884259724.png)

![图片](/computing/_images/image-1568884261141.png)

![图片](/computing/_images/image-1568884262300.png)

![图片](/computing/_images/image-1568884263863.png)

![图片](/computing/_images/image-1568884265173.png)

![图片](/computing/_images/image-1568884266324.png)

![图片](/computing/_images/image-1568884267693.png)

### 如何配置静态ip地址

登陆到windows主机---网络和共享中心---更改适配器设置----右键以太网卡---属性---Internet版本协议4---使用下面的ip地址---确定

![图片](/computing/_images/image-1568884268968.png)

![图片](/computing/_images/image-1568884270100.png)

![图片](/computing/_images/image-1568884271390.png)

![图片](/computing/_images/image-1568884272521.png)

![图片](/computing/_images/image-1568884273655.png)

可以使用开始----运行----cmd命令行（以管理员身份）----ipconfig /all---回车，查看配置的ip地址

![图片](/computing/_images/image-1568884277992.png)

### 如何手动激活windows

开始----运行----cmd命令行（以管理员身份）----slmgr /ato---回车

![图片](/computing/_images/image-1568884279307.png)

![图片](/computing/_images/image-1568884280371.png)

![图片](/computing/_images/image-1568884281825.png)

![图片](/computing/_images/image-1568884283005.png)

### 服务器命名符合通用命名规则

右键这台电脑-属性-高级系统设置-计算机名-更改

![图片](/computing/_images/image-1568884284215.png)

![图片](/computing/_images/image-1568884285434.png)

![图片](/computing/_images/image-1568884286767.png)

![图片](/computing/_images/image-1568884288791.png)

### 创建用户，用户名为test
右键这台电脑---管理---服务器管理器---工具---计算机管理---本地用户和组-用户，右键右侧空白处-新用户，创建test用户；

![图片](/computing/_images/image-1568884291334.png)

![图片](/computing/_images/image-1568884292892.png)

![图片](/computing/_images/image-1568884294826.png)

![图片](/computing/_images/image-1568884296008.png)

![图片](/computing/_images/image-1568884298279.png)

![图片](/computing/_images/image-1568884299544.png)

![图片](/computing/_images/image-1568884300827.png)

### 修改操作系统密码为长密码
右键这台电脑---管理---服务器管理器---工具--本地安全策略---账户策略---密码策略

“密码必须符合复杂性要求”配置为“已启用”，

“密码长度最小值”配置为“12个字符”，

“密码最短使用期限”配置为“0天”，

“密码最长使用期限”配置为“90天”，

“强制密码历史”配置为“5”。

windows设置——安全设置——帐户策略——帐户锁定策略：

“帐户锁定阈值”配置为“15次无效登录”，

“帐户锁定时间”配置为“15分钟”，

“重置帐户锁定计数器”配置为“15分钟之后”。

![图片](/computing/_images/image-1568884302144.png)

![图片](/computing/_images/image-1568884303435.png)

![图片](/computing/_images/image-1568884304656.png)

![图片](/computing/_images/image-1568884305909.png)

![图片](/computing/_images/image-1568884307326.png)

### 关闭windows系统自带防火墙
控制面板 -Windows防火墙-启用或关闭windows防火墙， “专用网络设置”和“公用网络设置”均勾选“关闭windows防火墙”

### 关闭网卡自动休眠

右键本地连接-属性-配置-电源管理，将“允许计算机关闭此设备以节省电源”勾选去掉，针对每个网卡均需做此配置

### 修改时区为北京时区

双击时间-更改日期和时间设置-更改时区，修改时区为“（UTC+08:00）北京，重庆，香港特别行政区，乌鲁木齐”

### 修改组策略“登录时不显示上次的用户名”

开始-运行-gpedit.msc-计算机配置-Windows设置-安全设置-本地策略-安全选项，将“交互式登录-不显示最后的用户名”改为“已启用”

### 修改组策略“会话锁定时显示用户信息”设置为“不显示用户信息”

开始-运行-gpedit.msc-计算机配置-Windows设置-安全设置-本地策略-安全选项，将“交互式登录-锁定会话时显示用户信息”改为“不显示用户信息”

### 修改组策略设置终端服务会话的空闲超时时间

开始-运行-gpedit.msc-计算机配置-管理模板-windows组件-远程桌面服务-远程桌面会话主机-会话时间限制，将“设置活动但空闲的远程桌面服务会话的时间限制”改为“已启用”，并在“空闲会话限制”下拉框中选择“10分钟”

### 修改组策略的“审核策略”为全部

开始-运行-gpedit.msc-计算机配置-windows设置-安全设置-本地策略-审核策略，将所有属性页的“审核这些操作”项勾选“成功”和“失败”
