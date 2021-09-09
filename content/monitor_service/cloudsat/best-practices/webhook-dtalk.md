---
title: "webhook 配置钉钉通知"
date: 2020-12-01T00:38:25+09:00
description: test
draft: false
---


## 背景
日常运维中，如何在问题出现前或出现问题后及时解决掉问题，监控告警成为必不可少的手段，而如何及时收到告警信息又是关键中的关键。传统的邮件通知会出现时效慢、无法即时查看、垃圾邮件过多等因素，使运维人员时刻提心吊胆。而短信通知则会产生费用，且告警人数单一。青云支持使用钉钉机器人进行通知告警，配置简单，节省成本，群告警。

## 配置步骤
### 一、添加钉钉机器人
在钉钉群组中—群设置—智能群助手—添加机器人，群机器人选择“自定义”。  
![](../best-practices.assets/webhook_dtalk1.png)  

`在安全设置中需添加自定义关键词“QingCloud”、“告警”、“自动伸缩” 、“定时器”。`  
![](../best-practices.assets/webhook_dtalk2.png)

### 二、获取 webhook 地址
方法1、在创建机器人时获取 webhook 地址。
![](../best-practices.assets/webhook_dtalk3.png)  
方法2、通过群设置—智能群助手—查看机器人对应的 webhook地址。
![](../best-practices.assets/webhook_dtalk4.png)

### 三、设置 webhook 通知地址
在青云控制台—消息中心—消息接收管理—接收人管理中，添加消息接收人，将钉钉机器人的 webhook 地址填写进去后保存。  
![](../best-practices.assets/webhook_dtalk5.png)
验证 webhook 通知地址  
![](../best-practices.assets/webhook_dtalk6.png)

### 四、配置告警服务
参照文档[告警服务](/monitor_service/cloudsat/manual/alarm_service/)，配置监控告警项。

## 验证效果
![](../best-practices.assets/webhook_dtalk7.png)
