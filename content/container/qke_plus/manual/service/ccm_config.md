---
title: "配置负载均衡器"
description: 介绍如何管理已创建的服务。
draft: false
keyword: QKE, 工作负载,服务,负载均衡器
weight: 30
---

本文主要介绍需要对接青云负载均衡器插件时，如何通过配置服务的注解（Annotation）来实现服务的一些高级配置功能。

## 背景信息

进行配置操作前，您需要了解以下背景知识：

- 关于服务注解（Annotation）：

  服务的注解记录了关于当前服务的额外配置，使用 key/value 键值对的形式进行定义。详细介绍及使用说明请参见 [Kubernetes 官方文档](https://kubernetes.io/zh-cn/docs/concepts/overview/working-with-objects/annotations/)。

- 关于负载均衡器插件（cloud-controller-manager）：

  [cloud-controller-manager](https://github.com/yunify/qingcloud-cloud-controller-manager) 是青云自主研发的负载均衡器插件，自动集成于 QKE 中。支持将 Kubernetes 内部服务和 QingCloud 负载均衡器关联起来，可自动创建负载均衡器、公网 IP，通过负载均衡器将服务暴露给集群外部调用。

## 约束与限制

除本文介绍的相关配置外，更多的功能支持，如**转发规则定义**、**透明代理**等功能还在开发中，目前暂不支持。建议您可以在[负载均衡器控制台](https://console.qingcloud.com/pek3/loadbalancers/)进行负载均衡器的更多更全面的配置。

> **注意**
>
> 请勿随意修改集群内部系统自动创建的负载均衡器配置，尤其是 K8s apiserver 使用的负载均衡监听器（监听协议/端口为 TCP/6443），若修改将导致 K8s apiserver 不可用。

## 配置负载均衡器属性

 **配置方法**

- 通过在 Service 的`annotations`中添加`ServiceAnnotationLoadBalancerType`来配置负载均衡器的规格。不添加此 key 的 Service 在 Event 中会有错误。其值范围与 [CreateLoadBalancer](/network/loadbalancer/api/loadbanlancer/create_lb/) 接口中的 `loadbalancer_typ` 取值范围相同。
- 青云负载均衡器支持 http/https 协议的负载均衡，如果想要使用负载均衡器的七层能力，请将服务的特定的端口`name`指定为为`http`或`https`。

**配置示例**

```
kind: Service
apiVersion: v1
metadata:
  name:  mylbapp
  annotations:
    service.beta.kubernetes.io/qingcloud-load-balancer-type: "0"  #这里指定负载均衡器实例的规格
spec:
  selector:
    app:  mylbapp
  type:  LoadBalancer 
  ports:
  - name:  http   #这里指定 port name,如果有多个http端口，都可以指定为http
    port:  8088
    targetPort:  80
```

##  配置负载均衡器公网 IP

使用青云负载均衡器时需要配置一个公网 IP，cloud-controller 带有 IP 管理功能。

### 手动配置公网 IP

**配置方法**

这是本插件的默认方式，即用户需要在 Service 中添加公网 IP 的 Annotation。

-  首先在 Service Annotation 中添加 Key:`service.beta.kubernetes.io/qingcloud-load-balancer-eip-source`，并设置其值为`mannual`。如果不设置此Key，则默认是`mannual`。
- 然后必须继续添加 Key：`service.beta.kubernetes.io/qingcloud-load-balancer-eip-ids`，其值公网 IP 的 ID，如果需要绑定多个 IP，以逗号分隔。请确保公网 IP 处于`可用`状态。

**配置示例**

```
kind: Service
apiVersion: v1
metadata:
  name:  mylbapp
  annotations:
    service.beta.kubernetes.io/qingcloud-load-balancer-eip-ids: "eip-xxxxx"  #这里指定公网IP的ID
    service.beta.kubernetes.io/qingcloud-load-balancer-type: "0"
spec:
  selector:
    app:  mylbapp
  type:  LoadBalancer 
  ports:
  - name:  http
    port:  8088
    targetPort:  80
```

### 自动获取公网 IP

**自动获取方式**

自动获取 IP 有三种方式：

- 自动获取当前账户下处于可用的公网 IP，如果找不到返回错误。
- 自动获取当前账户下处于可用的公网 IP，如果找不到则申请一个新的。
- 不管账户下有没有可用的公网 IP，申请一个新公网 IP。

**配置方法**

开启公网 IP 自动获取的功能，需进行如下操作：

1. 在集群的配置文件中`/etc/kubernetes/qingcloud.conf`配置`userID`。因为一些用户 API 权限较大，会获取到其他用户的 IP。
2. 配置 Service Annotations 中的`service.beta.kubernetes.io/qingcloud-load-balancer-eip-source` 不为`mannual`，上述三种获取方式对应的值分别为：
   - `use-available`
   - `auto`
   - `allocate`

**配置示例**

```
kind: Service
apiVersion: v1
metadata:
  name:  mylbapp
  annotations:
    service.beta.kubernetes.io/qingcloud-load-balancer-eip-source: "auto" # 指定自动获取方式，可填填 auto、use-available 或 allocate
    service.beta.kubernetes.io/qingcloud-load-balancer-type: "0"
spec:
  selector:
    app:  mylbapp
  type:  LoadBalancer 
  ports:
  - name:  http
    port:  8088
    targetPort:  80
```

## 配置使用云上现有的负载均衡器

**注意事项**

- 在此模式下，负载均衡器的一些功能属性，包括七层协议、规格、公网 IP 都由用户配置，负载均衡器插件不会修改任何属性，除了增删一些监听器。
- 请确保负载均衡器处于正常工作状态，并且和 Service 对应的端口不冲突，即已有监听器的监听端口不能和需要暴露的服务冲突。

**配置方法**

1. 添加 key `service.beta.kubernetes.io/qingcloud-load-balancer-eip-strategy` ，设置期值为 `reuse-lb`。
2. 添加 key `service.beta.kubernetes.io/qingcloud-load-balancer-id`，设置其值为现有的负载均衡器 ID，类似"lb-xxxxxx"。

> **说明**
>
> 其余设置都会被负载均衡器插件忽略。

**配置示例**

```
kind: Service
apiVersion: v1
metadata:
  name:  reuse-lb
  annotations:
    service.beta.kubernetes.io/qingcloud-load-balancer-eip-strategy: "reuse-lb"
    service.beta.kubernetes.io/qingcloud-load-balancer-id: "lb-oglqftju"
spec:
  selector:
    app:  mylbapp
  type:  LoadBalancer 
  ports:
  - name:  http
    port:  8090
    targetPort:  80
```

## 配置监听器属性

**配置方法**

- 设置监听器的健康检查方式：添加 key `service.beta.kubernetes.io/qingcloud-lb-listener-healthycheckmethod`，设置其值为“监听端口:检查方式”。对于 TCP 协议监听器，检查方式默认为 `TCP`，对于 UDP 协议监听器，检查方式默认为`UDP`。
- 设置监听器的健康检查参数：添加 key `service.beta.kubernetes.io/qingcloud-lb-listener-healthycheckoption`，设置其值为“监听端口:检查参数”，检查参数默认值为 `10|5|2|5`，分别对应“检查间隔｜超时时间｜不健康阈值｜健康阈值”。
- 设置负载均衡方式：添加 key `service.beta.kubernetes.io/qingcloud-lb-listener-balancemode`，支持 roundrobin（轮询）、leastconn（最少连接）、source（源地址） 三种负载均衡方式，默认为 `roundrobin`。
- 配置 HTTPS 协议及证书，添加 key `service.beta.kubernetes.io/qingcloud-lb-listener-cert`，设置其值为“监听端口:证书ID”。如果配置了证书，则监听器使用 https 协议，没有此注解则默认使用 Service 所用协议。
- 配置多个监听器时，通过逗号分隔，区分不同监听器：`80:xxx,443:xxx`。

> 说明
>
> 监听器参数说明，请参考[监听器 API 文档](https://docsv3.qingcloud.com/network/loadbalancer/api/listener/modify_listener_attribute/)。

**配置示例**

```
apiVersion: v1
metadata:
  name:  reuse-lb
  annotations:
    service.beta.kubernetes.io/qingcloud-load-balancer-eip-strategy: "reuse-lb"
    service.beta.kubernetes.io/qingcloud-load-balancer-id: "lb-oglqftju"
    service.beta.kubernetes.io/qingcloud-lb-listener-healthycheckmethod: "8090:tcp"
    service.beta.kubernetes.io/qingcloud-lb-listener-healthycheckoption: "8090:10|5|2|5"
    service.beta.kubernetes.io/qingcloud-lb-listener-balancemode: "8090:source"
    service.beta.kubernetes.io/qingcloud-lb-listener-cert: "8090:sc-77oko7zj"
spec:
  selector:
    app:  mylbapp
  type:  LoadBalancer
  ports:
  - name:  http
    port:  8090
    protocol: TCP
    targetPort:  80
```



## 配置内网负载均衡器

**已知问题**

Kubernetes 在 ipvs 模式下，kube-proxy 会把内网负载均衡器的 IP 绑定在 ipvs 接口上，这样会导致从负载均衡器过来的包被 drop（进来的是主网卡，但是出去的时候发现 ipvs 有这么一个 IP，路由不一致），故目前无法在 ipvs 模式下使用内网负载均衡器。详情参考 [issue](https://github.com/kubernetes/kubernetes/issues/79783)。

**配置方法**

- 必须手动指定`service.beta.kubernetes.io/qingcloud-load-balancer-network-type`为`internal`，如果不指定或者填写其他值，则默认为公网负载均衡器，需要配置公网 IP。
- 可指定负载均衡器所在的私有网络，默认为创建 LB 插件配置文件中的`defaultVxnet`，手动配置私有网络，需要添加此 Annotation：`service.beta.kubernetes.io/qingcloud-load-balancer-vxnet-id:{vxnet-id}`
- 可指定负载均衡器内网 IP，通过添加 key `service.beta.kubernetes.io/qingcloud-load-balancer-internal-ip`指定。

> **注意**
>
> 当前不支持更换内网 IP。

**配置示例**

```
kind: Service
apiVersion: v1
metadata:
  name:  mylbapp
  namespace: default
  annotations:
    service.beta.kubernetes.io/qingcloud-load-balancer-type: "0"
    service.beta.kubernetes.io/qingcloud-load-balancer-network-type: "internal"
    service.beta.kubernetes.io/qingcloud-load-balancer-internal-ip: "192.168.0.1" ##如果要路由器自动分配删掉这一行
spec:
  selector:
    app:  mylbapp
  type:  LoadBalancer 
  ports:
  - name:  http
    port:  80
    targetPort:  80
```

