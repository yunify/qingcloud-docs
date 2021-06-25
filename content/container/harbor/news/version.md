---
title: "版本特性"
date: 2021-06-02T10:08:56+09:00
collapsible: false
weight: 12
---

| <span style="display:inline-block;width:140px">版本</span> | 版本说明                                                     |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| Harbor 2.2.1 - QingCloud 1.6.0                             | <li>OCI-compatibility：OCI 兼容 </li>   <li>使用 Trivy 作为漏洞扫描插件</li>  <li>提供 proxy cache 功能</li>   <li>提供 prehead 功能</li> |
| Harbor 1.9.3 - QingCloud 1.5.0                             | <li>升级到 Harbor 1.9.3 </li>  <li>新增镜像安全扫描功能</li>   <li>优化日志节点磁盘占用</li>   <li>修复镜像复制失败的问题</li>  <li>新增支持通过浏览器自助查看日志等文件</li> |
| Harbor 1.7.6 - QingCloud 1.3.1                             | <li>升级到 Harbor 1.7.6 版本（修复漏洞 [CVE-2019-16097 Detail](https://nvd.nist.gov/vuln/detail/CVE-2019-16097)）</li>  <li>新增支持 Helm Chart 仓库</li>  <li>修复了镜像复制功能的一个 Bug </li> <li>新增支持对接第三方 S3 对象存储</li> <li>修复了系统配置丢失的问题，升级前请手动备份原有配置，详见[升级集群]()</li> |
| Harbor 1.7.5 - QingCloud 1.3.0                             | <li>升级到 Harbor 1.7.5 版本 <li>新增支持 Helm Chart 仓库 <li>新增支持更多兼容的对象存储地址 |
| Harbor 1.7.4 - QingCloud 1.2.1                             | <li>升级到 Harbor 最新版本 1.7.4</li>  <li>新增支持使用 NeonSAN 作为本地存储的磁盘</li>  <li>修复了 Harbor 日志节点健康检查脚本的 bug </li> |
| Harbor 1.7.1 - QingCloud 1.2.0                             | <li>升级到 Harbor 最新稳定版 1.7.1 </li>  <li>修复了系统配置丢失的问题，升级前请手动备份原有配置，详见[升级集群]()</li> |
| Harbor 1.1.1 - QingCloud 1.1.0                             | <li>新增对本地存储的支持，支持未购买 QingStor 对象存储的用户部署 Harbor</li>  <li>修复若干问题</li> |
| Harbor 1.1.1 - QingCloud 1.0.4                             | 支持选择对象存储地址                                         |
| Harbor 1.1.1 - QingCloud 1.0.3                             | 更新内部证书                                                 |
| Harbor 1.1.1 - QingCloud 1.0.2                             | <li>优化 Cache 连接时间</li>  <li>增强启动检测机制</li>  <li>修复 Pull 的稳定性</li> |
| Harbor 1.1.1 - QingCloud 1.0.1                             | 修复 HTTPs 监听器 Push 异常                                  |
| Harbor 1.1.1 - QingCloud 1.0                               | <li>基于VMware Harbor v1.1.1版本</li>  <li>镜像存储集成 QingStor 对象存储服务</li>  <li>支持应用节点横向和纵向扩容</li>  <li>一键式安装</li>  <li>一键清理镜像</li>  <li>支持只读模式</li> |
