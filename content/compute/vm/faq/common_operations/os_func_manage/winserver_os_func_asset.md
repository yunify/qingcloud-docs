---
title: "Windows云服务器常见系统配置"
date: 2020-01-30T00:38:25+09:00
description: Windows 云服务器的常见系统配置有哪些
weight: 60
draft: false
keyword: 云计算, 青云, QingCloud, 云服务器，常见系统配置
---

## 服务器命名符合通用命名规则

右键这台电脑-属性-高级系统设置-计算机名-更改

![图片](/compute/vm/_images/image-1568884284215.png)

![图片](/compute/vm/_images/image-1568884285434.png)

![图片](/compute/vm/_images/image-1568884286767.png)

![图片](/compute/vm/_images/image-1568884288791.png)

## 关闭windows系统自带防火墙

控制面板 -Windows防火墙-启用或关闭windows防火墙， “专用网络设置”和“公用网络设置”均勾选“关闭windows防火墙”

## 创建用户，用户名为test

右键这台电脑---管理---服务器管理器---工具---计算机管理---本地用户和组-用户，右键右侧空白处-新用户，创建test用户；

![图片](/compute/vm/_images/image-1568884291334.png)

![图片](/compute/vm/_images/image-1568884292892.png)

![图片](/compute/vm/_images/image-1568884294826.png)

![图片](/compute/vm/_images/image-1568884296008.png)

![图片](/compute/vm/_images/image-1568884298279.png)

![图片](/compute/vm/_images/image-1568884299544.png)

![图片](/compute/vm/_images/image-1568884300827.png)

## 修改操作系统密码为长密码

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

![图片](/compute/vm/_images/image-1568884302144.png)

![图片](/compute/vm/_images/image-1568884303435.png)

![图片](/compute/vm/_images/image-1568884304656.png)

![图片](/compute/vm/_images/image-1568884305909.png)

![图片](/compute/vm/_images/image-1568884307326.png)

## 关闭网卡自动休眠

右键本地连接-属性-配置-电源管理，将“允许计算机关闭此设备以节省电源”勾选去掉，针对每个网卡均需做此配置

## 修改时区为北京时区

双击时间-更改日期和时间设置-更改时区，修改时区为“（UTC+08:00）北京，重庆，香港特别行政区，乌鲁木齐”

## 修改组策略“登录时不显示上次的用户名”

开始-运行-gpedit.msc-计算机配置-Windows设置-安全设置-本地策略-安全选项，将“交互式登录-不显示最后的用户名”改为“已启用”

## 修改组策略“会话锁定时显示用户信息”设置为“不显示用户信息”

开始-运行-gpedit.msc-计算机配置-Windows设置-安全设置-本地策略-安全选项，将“交互式登录-锁定会话时显示用户信息”改为“不显示用户信息”

## 修改组策略设置终端服务会话的空闲超时时间

开始-运行-gpedit.msc-计算机配置-管理模板-windows组件-远程桌面服务-远程桌面会话云服务器-会话时间限制，将“设置活动但空闲的远程桌面服务会话的时间限制”改为“已启用”，并在“空闲会话限制”下拉框中选择“10分钟”

## 修改组策略的“审核策略”为全部

开始-运行-gpedit.msc-计算机配置-windows设置-安全设置-本地策略-审核策略，将所有属性页的“审核这些操作”项勾选“成功”和“失败”





