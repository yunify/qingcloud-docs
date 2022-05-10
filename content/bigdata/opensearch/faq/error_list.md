---
title: "常见报错"
description: 本小节主要介绍 OpenSearch 常见报错。 
keyword: 常见问题,OpenSearch,搜索引擎,大数据
weight: 20
collapsible: false
draft: false

---

## 断路器异常，报 circuit_breaking_exception 错误，怎么办？

**问题现象**

因断路器异常导致节点或集群错误，业务无法正常运行。

现象1：健康检查调用的 REST API 请求遭遇熔断，导致健康检查失败；3 次健康检查失败后，会重启 OpenSearch 服务，导致整个集群长时间不可用，通过 curl 访问任意 OpenSearch 的 REST API，会出现类似以下报错信息。

<img src="../../_images/error_01.png" style="zoom:100%;" />

现象2：使用浏览器访问kibanna服务时，浏览器页面显示如下报错。

<img src="../../_images/error_02.png" style="zoom:100%;" />

**可能原因**

业务请求并发量过高，断路器参数值达到峰值或超过峰值，断路器触发熔断机制，JVM heap 不足。

断路器参数默认参考值如下：

> 以下参数值的设定保证了业务的正常运行，为避免断路器触发熔断机制导致业务受到影响，请勿随意修改。

| 名称                                     | 上限值 | 是否支持在线修改 | 参数说明                                                     |
| ---------------------------------------- | ------ | ---------------- | ------------------------------------------------------------ |
| indices.breaker.total.limit              | 95%    | 否               | 总量，即所有操作的总量不能超过 95%。                         |
| indices.breaker.fielddata.limit          | 40%    | 是               | field data cache 占用的 JVM heap 上限。                      |
| indices.breaker.request.limit            | 60%    | 是               | 处理 REST API 请求占用的 JVM heap 上限。                     |
| network.breaker.inflight_requests.limits | 100%   | 是               | 处理数据传输（transport/http）所占用的 JVM heap 上限，100%指可达到总限制的100%，即 95%。 |
| indices.breaker.accounting.limit         | 100%   | 是               | 请求结束后，允许不释放的 JVM heap，100%指可达到总限制的100%，即 95%。 |
| script compilation circuit breaker       | -      | 是               | 内联脚本编译，限制速率，即每秒或每分编译脚本的次数。         |
| regex circuit breaker                    | -      | 否               | 正则表达式的复杂度限制，由复杂度因子控制。                   |

**解决办法**

扩容节点内存，建议使节点的 CPU 和内存比例达到 **1:4**。扩容节点详细操作请参见[扩容节点](/bigdata/opensearch/manual/node_lifecycle/capacity_expansion/)。

> 通过监控查看**集群 JVM 堆内存适用百分比**，当该值消耗达到 80~85% 时会进行告警，可提前进行节点扩容，以避免业务断路器触发熔断至业务异常。