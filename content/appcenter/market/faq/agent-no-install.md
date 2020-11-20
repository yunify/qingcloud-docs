---
title: "纯主机应用样例"
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false
---

# 纯主机应用样例

如果只想用 AppCenter 管理纯主机集群，则可以不用装青云提供的 App agent，以下是样例。

## config.json

```json
 {
     "type": "array",
     "properties": [{
         "key": "cluster",
         "description": "Sample cluster properties",
         "type": "array",
         "properties": [{
             "key": "name",
             "label": "name",
             "description": "The name of the Sample service",
             "type": "string",
             "default": "Sample",
             "required": "no"
         }, {
             "key": "description",
             "label": "description",
             "description": "The description of the Sample service",
             "type": "string",
             "default": "",
             "required": "no"
         }, {
             "key": "vxnet",
             "label": "VxNet",
             "description": "Choose a vxnet to join",
             "type": "string",
             "default": "",
             "required": "yes"
         }, {
             "key": "role_name1",
             "label": "role_name1",
             "description": "role-based role_name1 properties",
             "type": "array",
             "properties": [{
                 "key": "cpu",
                 "label": "CPU",
                 "description": "CPUs of each node",
                 "type": "integer",
                 "default": 1,
                 "range": [1, 2, 4, 8, 16],
                 "required": "yes"
             }, {
                 "key": "memory",
                 "label": "Memory",
                 "description": "Memory of each node",
                 "type": "integer",
                 "default": 2048,
                 "range": [2048, 8192, 16384, 32768, 49152],
                 "required": "yes"
             }, {
                 "key": "count",
                 "label": "Count",
                 "description": "Number of nodes for the cluster to create",
                 "type": "integer",
                 "default": 3,
                 "max": 100,
                 "min": 1,
                 "required": "yes"
             }, {
                 "key": "volume_size",
                 "label": "Volume Size",
                 "description": "The volume size for each instance",
                 "type": "integer",
                 "default": 10,
                 "min": 10,
                 "max": 1000,
                 "step": 10,
                 "required": "yes"
             }, {
                 "key": "instance_class",
                 "label": "resource type",
                 "description": "The instance type for the cluster to run, such as high performance, high performance plus",
                 "type": "integer",
                 "default": 0,
                 "range": [
                     0,
                     1
                 ],
                 "required": "yes"
             }]
         }]
     }]
 }
```


## cluster.json.mustache

** 其中`img-hlhql5ea`是没有安装 app agent 的镜像，`agent_installed`用来标识此role没有安装agent **

{% raw %}

```
{
  "name": {{cluster.name}},
  "description": {{cluster.description}},
  "vxnet": {{cluster.vxnet}},
  "nodes": [
      {
        "role": "role_name1",
        "container": {
            "type": "kvm",
            "zone": "pek3a",
            "image": "img-hlhql5ea"
         },
         "agent_installed": false,
         "instance_class": {{cluster.role_name1.instance_class}},
         "count": {{cluster.role_name1.count}},
         "cpu": {{cluster.role_name1.cpu}},
         "memory": {{cluster.role_name1.memory}},
         "volume": {
             "size": {{cluster.role_name1.volume_size}},
             "mount_point": "/test_data",
             "filesystem": "ext4"
         }
      }
  ]
}
```

{% endraw %}