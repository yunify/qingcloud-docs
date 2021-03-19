---

title: " Https访问报错400解决方法"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 20
draft: false
enableToc: false
---



该错误是http和https交互的问题，如果负载均衡器配置的是http的监听器，但是后端采用的是https，client端访问就会出现400错误

## 解决方法

如下提供两种解决方式供参考

一、如果仍然想在后端配置了ssl ，负载均衡器的监听器则需要改成tcp的方式

操作步骤：网络与CDN -> 负载均衡器 -> lb-xxxxxxx，进入负载均衡器后修改监听器，如下图

![modify_lb](../_images/modify_lb.jpg)

![lb_tcp](../_images/lb_tcp.jpg)



二、如果后端采用http，负载均衡器创建https监听器，https监听器加载ssl证书，由lb来做ssl证书的加载和卸载

操作步骤：网络与CDN -> 负载均衡器 -> lb-xxxxxxx -> 创建监听器 ，https模板如下图

![lb_ssl](../_images/lb_ssl.png)