---
title: "rsyslog 日志分析"
description: test
draft: false
---

## 背景

针对负载均衡器相关的问题排查，通常会通过配置 rsyslog 来进行分析问题所在，本文将详细介绍如何来分析日志。

## 日志格式
### TCP 转发日志格式
```
Mar 29 12:16:55 198.19.56.127 haproxy[686]: 111.47.226.115:17652 [29/Mar/2021:10:32:46.135] lbl-l1rmzsj5 lbl-l1rmzsj5_default/lbb-mfc8im36 1/0/6249762 92826 -- 1/1/1/0/0 0/0  
#haproxy[686]:    #process_name '[' pid ']:'
#111.47.226.115:17652          #client_ip ':' client_port
#[29/Mar/2021:10:32:46.135]  #'[' accept_date ']'
#lbl-l1rmzsj5                    #frontend_name
#lbl-l1rmzsj5_default/lbb-mfc8im36             #backend_name
#1/0/6249762                    #Tw '/' Tc '/' Tt*
#92826                        #bytes_read*
#--                          #termination_state
#1/1/1/0/0                   #actconn '/' feconn '/' beconn '/' srv_conn '/' retries* 
#0/0                         #srv_queue '/' backend_queue
```
详细的字段说明：
```
client_ip   #是连接到haproxy的客户端的IP地址。 
client_port  #是发起连接的客户端的TCP端口。
accept_date  #是haproxy接收到连接的确切时间。
frontend_name  #是负载均衡器监听器ID。
backend_name   #后端的名称，由监听器ID_default/后端名称组成。
Tw            #是在各种队列中等待的总时间（毫秒）。如果连接在到达队列之前被中止，它可以是“-1”。
Tc            #是等待连接建立到最终服务器的总时间（以毫秒为单位），包括重试次数。 如果在建立连接之前连接被中止，它可以是“-1”。
Tt            #是在接受和最后一次关闭之间经过的总时间（以毫秒为单位）。 它涵盖了所有可能的处理。 有一个例外，如果指定了“选项logasap”，那么在发出日志的时刻计时停止。 在这种情况下，在该值之前加上'+'号，表示最后一个会更大。 
bytes_read    #是发送日志时从服务器发送到客户端的总字节数。
termination_state  #是会话结束时会话的条件。 这表示会话状态，哪一方导致会话结束发生，以及什么原因，正常标志应为“ - ”，表示会话已由两端关闭，缓冲区中没有剩余数据。
actconn       #是会话记录时进程上的并发连接总数。 
feconn        #是会话记录时前端上的并发连接总数。
beconn        #是会话记录时由后端处理的并发连接的总数。
srv_conn      #是在会话记录时服务器上仍然处于活动状态的并发连接总数。
retries       #是尝试连接到服务器时此会话遇到的连接重试次数。
srv_queue     #是在服务器队列中之前处理的请求的总数。 
backend_queue  #是在后端的全局队列中之前处理的请求的总数。 
```
### HTTP 转发日志格式
```
Jun 22 13:47:56 198.19.173.227 haproxy[40849]: 42.91.108.84:11918 [22/Jun/2020:13:47:50.784] lbl-2tqyo6fr lbl-2tqyo6fr_default/lbb-jdbamki3 1/0/2/5900/5903 200 518 - - ---- 154/150/140/20/0 0/0 POST /v0.1/device/DeviceHeartBeat HTTP/1.1
#haproxy[40849]:          #process_name '[' pid ']:' 
#42.91.108.84:11918      #client_ip ':' client_port
#[22/Jun/2020:13:47:50.784]   #'[' request_date ']'
#lbl-2tqyo6fr                  #frontend_name
#lbl-2tqyo6fr_default/lbb-jdbamki3           #backend_name
#1/0/2/5900/5903                    #TR '/' Tw '/' Tc '/' Tr '/' Ta*
#200                          #status_code
#518                          #bytes_read* 
#-                            #captured_request_cookie
#-                            #captured_response_cookie
#----                         #termination_state 
#154/150/140/20/0                    #actconn '/' feconn '/' beconn '/' srv_conn '/' retries*
#0/0                          #srv_queue '/' backend_queue
#"POST /v0.1/device/DeviceHeartBeat HTTP/1.1"        #'"' http_request '"'
```
详细的字段说明：
```
client_ip       #连接到haproxy的IP地址。
client_port     #发起连接的客户端的TCP端口。
request_date    #是通过haproxy（log field％tr）接收到HTTP请求的第一个字节的确切时间。
frontend_name   #是负载均衡器监听器ID。
backend_name    #后端的名称，由监听器ID_default/后端名称组成。
TR              #是在接收到第一个字节后等待来自客户端（不包括正文）的完整HTTP请求花费的总时间（毫秒）。 如果在接收到完整的请求或接收到错误的请求之前连接被中止，它可以是“-1”。 
Tw              #是在各种队列中等待的总时间（毫秒）。如果连接在到达队列之前中止，则可以为“-1”。
Tc              #是等待连接建立到最终服务器的总时间（以毫秒为单位），包括重试次数。 如果请求在建立连接之前被中止，它可以是“-1”。
Tr              #是等待服务器发送完整HTTP响应的总时间（毫秒），不计算数据。 如果在接收到完整的响应之前请求被中止，它可以是“-1”。
Ta              #是请求在haproxy中保持活动的时间，这是在接收到的请求的第一个字节和发送的最后一个字节之间经过的总时间（以毫秒为单位）。
status_code     #是返回给客户端的HTTP状态代码。 这种状态通常由服务器设置，但是当服务器无法到达或其响应被haproxy阻止时也可以通过haproxy设置。
bytes_read      #是发送日志时发送到客户端的总字节数。
captured_request_cookie   #是一个可选的“name = value”条目，指示客户端在请求中具有此cookie。 cookie名称及其最大长度由前端配置中的“capture cookie”语句定义。 当该选项未设置时，该字段是单个破折号（' - '）。  
captured_response_cookie  #是一个可选的“name = value”条目，表示服务器已经返回了一个具有响应的cookie。
termination_state    #是会话结束时会话的条件。 这表示会话状态，哪一方导致会话结束发生，由于什么原因（超时，错误，...）
actconn         #是会话记录时进程上的并发连接总数。 
feconn          #是会话记录时前端上的并发连接总数。 
beconn          #是会话记录时由后端处理的并发连接的总数。
srv_conn        #是在会话记录时服务器上仍然处于活动状态的并发连接总数。
retries         #是尝试连接到服务器时此会话遇到的连接重试次数。
srv_queue       #是在服务器队列中之前处理的请求的总数。
backend_queue   #是在服务器队列中之前处理的请求的总数。
captured_request_headers  #是由于在前端存在“捕获请求头”语句，在请求中捕获的标题列表。
captured_response_headers  #是由于在前端存在“捕获响应头”语句，在响应中捕获的标题列表。
http_request    #是完整的HTTP请求行，包括方法，请求和HTTP版本字符串。
```