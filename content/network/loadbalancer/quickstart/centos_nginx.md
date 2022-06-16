---
title: "部署 Nginx"
description: 介绍如何在云服务器上部署nginx。
keyword: 负载均衡器, 监听器
draft: false
weight: 10
---

本文介绍如何在云服务器上部署 Nginx 项目。

## 前提条件

已创建云服务器。

## 软件版本

本操作示例使用如下软件版本，在实际操作时，请以实际软件版本为准。

- 操作系统：CentOS Stream 9 64bit
- Nginx 版本：1.20.1

## 操作步骤

### 安装 Nginx

1. 在云服务器列表，点击**名称**列点击 Web 终端图标，以 root 用户登录云服务器。

   具体操作方法，请参见[通过 Web 终端连接云服务器](/compute/vm/manual/vm/20_connect_instance/10_third_party/#通过-web-终端连接)。

2. 执行以下命令安装 Nginx。

   ```
   # 安装 Nginx
   yum -y install nginx
   # 查看 Nginx 版本
   nginx -v
   ```

3. 启动 Nginx 并设置开机启动。

   ```
   systemctl start nginx
   systemctl enable nginx
   ```

4. 使用浏览器访问 `http://云服务器的公网IP地址`，显示如下页面，表示 Ngixn 安装成功。

   ![](../../_images/centos_nginx_default_page.png)

### 验证 Nginx 服务

Nginx 的默认根目录是`/usr/share/nginx/html`，修改 `html` 下的 `index.html`页面，用来标识当前服务器的访问。

1. 执行以下命令打开 `index.html`文件。

   ```
   vi /usr/share/nginx/html/index.html
   ```

2. 按 **i** 进入编辑模式，修改文件内容。

   在\<body\>标签后插入如下内容：

   ```
   # 在<body> 下方输入
   	<h1 style="padding:10px">Welcome to nginx test page!</h1>
   	<p style="padding:10px;color:red"> This is <strong>vm1</strong>!</p>
   ```

3. 按 **Esc**，输入`:wq` 保存编辑。

4. 使用浏览器访问 `http://云服务器的公网IP地址`，页面显示如下字样，说明 Ngixn 部署成功。

   ![](../../_images/centos_nginx_verify.png)
