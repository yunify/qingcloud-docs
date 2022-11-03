---
title: "如何分析 rsyslog 日志？"
description: 介绍负载均衡器的 syslog 日志分析。
keyword: 负载均衡器, 日志分析
draft: false
---

针对负载均衡器相关的问题排查，通常会通过配置 rsyslog 来进行分析问题所在，本文详细介绍如何分析 TCP 及 HTTP 转发日志。

更多关于 HAProxy 日志的详细说明，请参见 [HAProxy 官网文档](http://cbonte.github.io/haproxy-dconv/2.5/configuration.html#8)。

## TCP 转发日志

**日志格式示例：**

```shell
>>> Mar 29 12:16:55 198.19.56.127 \
    haproxy[686]: 111.47.226.115:17652 [29/Mar/2021:10:32:46.135] \
    lbl-l1rmzsj5 lbl-l1rmzsj5_default/lbb-mfc8im36 1/0/6249762 92826 -- 1/1/1/0/0 0/0  
#日志各字段格式如下：
#haproxy[686]:                          #process_name '[' pid ']:'
#111.47.226.115:17652                   #client_ip ':' client_port
#[29/Mar/2021:10:32:46.135]             #'[' accept_date ']'
#lbl-l1rmzsj5                           #frontend_name
#lbl-l1rmzsj5_default/lbb-mfc8im36      #backend_name '/' server_name 
#1/0/6249762                            #Tw '/' Tc '/' Tt*
#92826                                  #bytes_read*
#--                                     #termination_state
#1/1/1/0/0                              #actconn '/' feconn '/' beconn '/' srv_conn '/' retries* 
#0/0                                    #srv_queue '/' backend_queue
```
字段说明：

| 字段              | 说明                                                         |
| :---------------- | :----------------------------------------------------------- |
| client_ip         | 连接到 haproxy 的客户端的 IP 地址                            |
| client_port       | 发起连接的客户端的 TCP 端口。                                |
| accept_date       | haproxy 接收到连接的确切时间。                               |
| frontend_name     | 接收及处理客户端请求的监听器，为“负载均衡器监听器 ID”。      |
| backend_name      | 指定的管理服务器连接的监听器，由“{监听器ID}_default”组成。<br/>若未设置切换规则，与 “frontend_name” 相同。 |
| server_name       | 连接被转发到的最后一个后端，为“后端服务器名称”。             |
| Tw                | 在各种队列中等待的总时间（毫秒）。 如果连接在到达队列之前被中止，它可以是“-1”。 |
| Tc                | 等待连接建立到最终服务器的总时间（毫秒），包括重试次数。 如果在建立连接之前连接被中止，它可以是“-1”。 |
| Tt                | 在接受和最后一次关闭之间经过的总时间（毫秒）。 涵盖了所有可能的处理，但如果指定了“选项logasap”，则在发出日志的时刻计时停止。 该情况下，在该值之前加上“+”号，表示最后一个会更大。 |
| bytes_read        | 发送日志时，从服务器发送到客户端的总字节数。                 |
| termination_state | 会话结束时会话的条件。这表示在会话状态，哪一方导致了会话结束，以及什么原因。 正常标志应为“ - ”，表示会话已由两端关闭，缓冲区中没有剩余数据。 |
| actconn           | 会话记录时进程上的并发连接总数。                             |
| feconn            | 会话记录时前端上的并发连接总数。                             |
| beconn            | 会话记录时由后端处理的并发连接的总数。                       |
| srv_conn          | 会话记录时服务器上仍然处于活动状态的并发连接总数。           |
| retries           | 尝试连接到服务器时此会话遇到的连接重试次数。                 |
| srv_queue         | 在服务器队列中之前处理的请求的总数。                         |
| backend_queue     | 在后端的全局队列中之前处理的请求的总数。                     |

## HTTP 转发日志

**日志格式示例：**

```shell
>>> Jun 22 13:47:56 198.19.173.227 \
     haproxy[40849]: 42.91.108.84:11918 [22/Jun/2020:13:47:50.784] \
     lbl-2tqyo6fr lbl-2tqyo6fr_default/lbb-jdbamki3 1/0/2/5900/5903 200 518 - - ---- \
     154/150/140/20/0 0/0 {haproxy.1wt.eu} {} "GET /index.html HTTP/1.1"
#日志各字段格式如下：
#haproxy[40849]:                       #process_name '[' pid ']:' 
#42.91.108.84:11918                    #client_ip ':' client_port
#[22/Jun/2020:13:47:50.784]            #'[' request_date ']'
#lbl-2tqyo6fr                          #frontend_name
#lbl-2tqyo6fr_default/lbb-jdbamki3     #backend_name '/' server_name 
#1/0/2/5900/5903                       #TR '/' Tw '/' Tc '/' Tr '/' Ta*
#200                                   #status_code
#518                                   #bytes_read* 
#-                                     #captured_request_cookie
#-                                     #captured_response_cookie
#----                                  #termination_state 
#154/150/140/20/0                      #actconn '/' feconn '/' beconn '/' srv_conn '/' retries*
#0/0                                   #srv_queue '/' backend_queue
#{haproxy.1wt.eu}                      #'{' captured_request_headers* '}'
#{}                                    #'{' captured_response_headers* '}'
#"GET /index.html HTTP/1.1"            #'"' http_request '"'
```


**字段说明：**

| 字段                      | 说明                                                         |
| ------------------------- | ------------------------------------------------------------ |
| client_ip                 | 连接到 haproxy 的客户端的 IP 地址                            |
| client_port               | 发起连接的客户端的 TCP 端口。                                |
| accept_date               | 通过 haproxy（log field％tr）接收到 HTTP 请求的第一个字节的确切时间。 |
| frontend_name             | 接收及处理客户端请求的监听器，为“负载均衡器监听器 ID”。      |
| backend_name              | 指定的管理服务器连接的监听器，由“{监听器ID}_default”组成。<br/>若未设置切换规则，与 “frontend_name” 相同。 |
| server_name               | 连接被转发到的最后一个后端，为“后端服务器名称”。             |
| TR                        | 在接收到第一个字节后，等待来自客户端（不包括正文）的完整 HTTP 请求花费的总时间（毫秒）。 <br/> 如果接收到完整的请求或接收到错误的请求之前连接被中止，它可以是“-1”。 |
| Tw                        | 各种队列中等待的总时间（毫秒）。 <br/>如果连接在到达队列之前被中止，它可以是“-1”。 |
| Tc                        | 等待连接建立到最终服务器的总时间（毫秒），包括重试次数。  <br/>如果在建立连接之前连接被中止，它可以是“-1”。 |
| Tr                        | 从 HTTP 连接后到服务器发给 LB 的第一个报文所用的总时间。Tr 高说明后端慢。<br/>如果在接收到报文之前连接被中止，它可以是“-1”。 |
| Ta                        | 请求在 haproxy 中保持活动的时间，这是在接收到的请求的第一个字节和发送的最后一个字节之间经过的总时间（以毫秒为单位）。 |
| status_code               | 返回给客户端的 HTTP 状态代码。 <br/>这种状态通常由服务器设置，但是当服务器无法到达或其响应被 haproxy 阻止时也可以通过 haproxy 设置。 |
| bytes_read                | 发送日志时，从服务器发送到客户端的总字节数。                 |
| captured_request_cookie   | 一个可选的“name = value”条目，指示客户端在请求中具有此cookie。 cookie 名称及其最大长度由前端配置中的“capture cookie”语句定义。 <br/>当该选项未设置时，该字段是单个破折号（’ - ‘）。 |
| termination_state         | 会话结束时会话的条件。 <br/>这表示会话状态，哪一方导致会话结，以及什么原因（超时，错误，…）。 |
| actconn                   | 会话记录时进程上的并发连接总数。                             |
| feconn                    | 会话记录时前端上的并发连接总数。                             |
| beconn                    | 会话记录时由后端处理的并发连接的总数。                       |
| srv_conn                  | 会话记录时服务器上仍然处于活动状态的并发连接总数。           |
| retries                   | 尝试连接到服务器时此会话遇到的连接重试次数。                 |
| srv_queue                 | 在服务器队列中之前处理的请求的总数。                         |
| backend_queue             | 在后端的全局队列中之前处理的请求的总数。                     |
| captured_request_headers  | 由于在前端存在“捕获请求头”语句，在请求中捕获的标题列表。     |
| captured_response_headers | 由于在前端存在“捕获响应头”语句，在响应中捕获的标题列表。     |
| http_request              | 完整的 HTTP 请求行，包括方法，请求和 HTTP 版本字符串。       |



