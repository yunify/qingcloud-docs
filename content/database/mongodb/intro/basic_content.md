---
title: "基本概念"
description: 本小节主要介绍 MongoDB 基本概念。 
keyword: MongoDB Cluster 基本概念 
weight: 100
collapsible: false
draft: false
---


## mongod

mongod 是文档数据库服务中的一个主要进程，主要提供数据请求处理、数据访问管理等服务。

## 副本集（Replica）

副本集（Replica）由一组 mongod 进程组成，提供了数据冗余与高可用的数据节点集合。

## 文档 (Document)

文档 (Document) 是一组键值(key-value) 对，即 BSON。MongoDB 的文档无需设置相同的字段，且相同的字段无需相同的数据类型。

## 集合 (Collection)

集合 (Collection) 是 MongoDB 文档组，类似于关系数据库管理系统（Relational Database Management System，RDMS)中的表格。

数据库中集合可以不具备固定的结构，但需具备一定的关联性。

## 元数据（Metadata）

元数据（Metadata）是数据库信息集中存储的系统命名空间 `<dbname>.system.*`，该空间包含多种系统信息的特殊集合。

## 集群（Cluster）

一个 MongoDB 集群由一个或多个节点组成，并提供集群内所有节点资源的联合管理能力。

创建集群时系统随机分配通用唯一标识符（UUID）全局唯一，不可修改。同时一个集群的调用，由 ID 标识。您可以自定义一个集群的名称，以及为集群绑定标签，方便集群分组管理。

## 节点（Node）

一个节点是集群中的一个服务器，用来存储数据并参与集群的管理。节点的调用，由一个 ID 标识。

一个集群可以创建多个节点。
