---
title: "Web应用防火墙简介"
date: 2020-12-01T00:38:25+09:00
description: Test description
draft: false
enableToc: false
keyword: Web应用防火墙, WAF
---


WAF (Web 应用防火墙）通过检查 HTTP/HTTPS 流量来实现内容过滤， 可以防止针对 Web 应用程序漏洞的攻击，如 SQL 注入、跨站点脚本（XSS）、文件包含漏洞以及安全配置错误等。 CC 防护功能可以降低攻击对系统的影响，通过自定义规则可以灵活有效的阻止非法流量，保证应用的稳定运行。 WAF 部署在负载均衡器（LoadBalancer）之上，本指南旨在介绍如何通过配置 WAF 来实现内容防护。
