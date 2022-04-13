---
title: "API 概览"
description: 本小节主要介绍 EHPC 集群的 api 接口。 
keyword: EHPC 概览,api 概览
draft: false
weight: 20
collapsible: false
---

## 集群接口

| <span style="display:inline-block;width:240px">参数</span> | <span style="display:inline-block;width:320px">描述</span> |
| :--------------------------------------------------------- | :--------------------------------------------------------- |
| [listcluster](../cluster/listcluster/)                     | 集群列表                                                   |
| [createcluster](../cluster/createcluster/)                 | 创建集群                                                   |
| [modifycluster](../cluster/modifycluster/)                 | 修改集群                                                   |
| [deletecluster](../cluster/deletecluster/)                 | 删除集群                                                   |
| [startcluster](../cluster/startcluster/)                   | 启动集群                                                   |
| [stopcluster](../cluster/stopcluster/)                     | 关闭集群                                                   |
| [resizecluster](../cluster/resizecluster/)                 | 扩、缩容集群                                               |

## 队列接口

| <span style="display:inline-block;width:240px">参数</span> | <span style="display:inline-block;width:320px">描述</span> |
| :--------------------------------------------------------- | :--------------------------------------------------------- |
| [describequeue](../queue/describequeue)                    | 查看队列详情                                               |
| [getcurrentqueue](../queue/getcurrentqueue/)               | HPC 队列列表                                               |
| [bindprivatequeue](../queue/bindprivatequeue/)             | HPC 绑定专属队列                                           |
| [bindprivatequeue](../queue/bindprivatequeue/)             | HPC 解绑专属队列                                           |
| [getqueuelist](../queue/getqueuelist/)                     | EHPC 队列列表                                              |
| [addqueues](../queue/addqueues/)                           | EHPC 增加队列                                              |
| [modifyqueue](../queue/modifyqueue/)                       | EHPC 修改队列                                              |
| [queuedelqueues](../queue/queuedelqueues/)                 | EHPC 删除队列                                              |
| [queueaddnodes](../queue/queueaddnodes/)                   | EHPC 队列增加节点                                          |
| [queueremovenodes](../queue/queueremovenodes/)             | EHPC 队列移除节点                                          |

## 用户接口

| <span style="display:inline-block;width:240px">参数</span> | <span style="display:inline-block;width:320px">描述</span> |
| :--------------------------------------------------------- | :--------------------------------------------------------- |
| [deleteuser](../users/deleteuser/)                         | 删除集群用户                                               |
| [users](../users/users/)                                   | 集群用户列表                                               |
| [adduser](../users/adduser/)                               | 新增集群用户                                               |
| [modifyuser](../users/modifyuser/)                         | 修改集群用户                                               |

## 节点接口

| <span style="display:inline-block;width:240px">参数</span> | <span style="display:inline-block;width:320px">描述</span> |
| :--------------------------------------------------------- | :--------------------------------------------------------- |
| [listnodes](../nodes/listnodes/)                           | 节点列表                                                   |
| [addnodes](../nodes/addnodes/)                             | 新增节点                                                   |
| [deletenodes](../nodes/deletenodes/)                       | 删除节点                                                   |
| [restartnodes](../nodes/restartnodes/)                     | 重启节点                                                   |

## 作业接口

| <span style="display:inline-block;width:240px">参数</span> | <span style="display:inline-block;width:320px">描述</span> |
| :--------------------------------------------------------- | :--------------------------------------------------------- |
| [listjobs](../jobs/listjobs/)                              | 作业列表                                                   |
| [submitjob](../jobs/submitjob/)                            | 提交作业                                                   |
| [stopjobs](../jobs/stopjobs/)                              | 取消作业                                                   |
| [deletejobs](../jobs/deletejobs/)                          | 删除作业                                                   |
| [jobdetail](../jobs/jobdetail/)                            | 查看作业详情                                               |

## 软件中心接口

| <span style="display:inline-block;width:240px">参数</span> | <span style="display:inline-block;width:320px">描述</span> |
| :--------------------------------------------------------- | :--------------------------------------------------------- |
| [softwarelist](../software/softwarelist/)                  | 软件中心                                                   |

## 操作日志接口

| <span style="display:inline-block;width:240px">参数</span> | <span style="display:inline-block;width:320px">描述</span> |
| :--------------------------------------------------------- | :--------------------------------------------------------- |
| [operation](../logs/operation/)                            | 操作日志                                                   |
