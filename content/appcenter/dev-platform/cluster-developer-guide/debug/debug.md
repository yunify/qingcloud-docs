---
title: "调试管理"
date: 2020-11-11T00:00:00+09:00
draft: false
collapsible: false
weight: 11
---

## 调试指南

如 [制作镜像](/appcenter/dev-platform/cluster-developer-guide/image-build/build) 章节所说，整个应用开发过程中镜像制作是难度最高的一个环节，在部署应用的时候可能会发现做的镜像不对，比如脚本没写对、tmpl 文件没写对等，这个时候不需要马上重新做一个新的镜像，因为您可能还会做错，一个好的方法是在现有集群里修改，直到能正常工作，然后把修改好的配置、脚本更新到镜像，这样能节省大量时间。

### 进入集群节点

在 [应用开发中心](https://appcenter.qingcloud.com/developer/) 页面中选择具体应用名称进入应用详情页，点击“资源”标签，调整资源所在的区，选中要调试的集群 id 进入集群详情页，左侧节点栏选中具体节点，右侧节点详情第一行节点 id 右侧有个 "vnc" 图标，点击后输入镜像用户名和密码即可登录。

### 刷新配置

在云服务器里修改 toml 或 tmpl 文件后，可以通过 service confd restart 重启服务刷新配置或 执行 /opt/qingcloud/app-agent/bin/confd -onetime 刷新配置。

> 注：用户的实例默认情况下开发者是没有权限通过 vnc 登陆的，需要用户授权。

## 日志查看

日志放置在 /opt/qingcloud/app-agent/log 下面，几个最有用的日志如下：

- **confd.log**  自动配置守护进程 confd 输出的日志信息，可以从这个文件查看配置文件 (toml，tmpl) 是否配置正确。

- **cmd.info**  这个文件是青云调度系统读取您 cluster.json.mustache 里定义的 service 命令发送到云服务器的记录，如果您发现这个文件为空或者命令没发过来，可以在云服务器里通过 curl://metadata/self 获取该节点是否有指令需要执行，请参见 [Metadata 服务](/appcenter/dev-platform/cluster-developer-guide/metadata/metadata-service) 查询部分。

- **cmd.log**  该文件记录的是青云调度系统执行记录在 cmd.info 里的指令的结果。