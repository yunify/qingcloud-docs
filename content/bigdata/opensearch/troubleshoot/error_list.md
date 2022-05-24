---
title: "断路器异常，报 circuit_breaking_exception 错误"
description: 本小节主要介绍 OpenSearch 常见报错。 
keyword: 常见问题,OpenSearch,搜索引擎,大数据
weight: 10
collapsible: false
draft: false

---

断路器（Circuit Breaker）：专门用于指定内存使用的限制以防止操作导致 OutOfMemoryError。更多详细信息可参见 <a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.10/circuit-breaker.html">Circuit breaker settings</a>。

### 现象描述

节点或集群错误，业务无法正常运行，故障排查时显示 **circuit_breaking_exception** 报错信息。

**现象1**：通过 cURL 访问任意 OpenSearch 的 REST API，会出现类似以下报错信息。

<img src="../../_images/error_01.png" style="zoom:100%;" />

**现象2**：使用浏览器访问kibanna服务时，浏览器页面显示如下报错。

<img src="../../_images/error_02.png" style="zoom:100%;" />

### 可能原因

JVM heap 消耗值超过上限值，断路器参数值达到或超过峰值，断路器触发熔断机制。造成该问题一般有以下原因：

- JVM 堆内存值设定过小，无法满足业务正常使用。
- 业务请求并发量过高。

断路器参数默认参考值如下：

> 断路器默认参数值的设定保证了业务的正常运行，为避免断路器触发熔断机制导致业务受到影响，请勿随意修改。

| 名称                                     | 上限值 | 是否支持在线修改 | 参数说明                                                     |
| ---------------------------------------- | ------ | ---------------- | ------------------------------------------------------------ |
| indices.breaker.total.limit              | 95%    | 否               | 总量，即所有操作的总量不能超过 95%。                         |
| indices.breaker.fielddata.limit          | 40%    | 是               | field data cache 占用的 JVM heap 上限。                      |
| indices.breaker.request.limit            | 60%    | 是               | 处理 REST API 请求占用的 JVM heap 上限。                     |
| network.breaker.inflight_requests.limits | 100%   | 是               | 处理数据传输（transport/http）所占用的 JVM heap 上限，100%指可达到总限制的100%，即 95%。 |
| indices.breaker.accounting.limit         | 100%   | 是               | 请求结束后，允许不释放的 JVM heap，100%指可达到总限制的100%，即 95%。 |
| script compilation circuit breaker       | -      | 是               | 内联脚本编译，限制速率，即每秒或每分编译脚本的次数。         |
| regex circuit breaker                    | -      | 否               | 正则表达式的复杂度限制，由复杂度因子控制。                   |

### 解决措施

请根据实际环境分析报错原因并进行处理。

- 若JVM 堆内存设置过小

  - （**推荐**）扩容节点内存：使节点的 CPU 和内存比例达到 **1:4**，详细操作请参见[扩容节点](/bigdata/opensearch/manual/node_lifecycle/capacity_expansion/)。
  - 动态调整断路器上限：必须确定是 indices.breaker.fielddata.limit（40%）、indices.breaker.request.limit（60%）参数超过上限值触发断路器，则用户可根据实际情况调整上限值，否则不但不会改善当前问题，甚至可能引发其他问题。请谨慎操作，一般不建议采用该方法。

- 若业务请求并发量过高

  建议减少业务并发量，降低业务负载。

> 可通过监控查看**集群 JVM 堆内存适用百分比**，当该值消耗达到 80~85% 时会进行告警，请持续关注监控数据和业务运行情况以便根据实际业务情况采取进一步措施，避免触发熔断。

