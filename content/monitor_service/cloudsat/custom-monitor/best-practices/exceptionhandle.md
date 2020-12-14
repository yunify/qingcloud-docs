---
title: "监控微服务健康状态"
description: test
draft: false
---


本文介绍如何使用 Python方式上报Spring Boot微服务健康状态数据至自定义监控，查看指标并配置告警。

### 实践背景

定期监控Spring Cloud微服务健康状态接口，当服务停止或假死时，通过短信方式发送告警信息。

### 前提条件

  购买了青云主机

  主机配置JDK环境并运行Spring Boot微服务程序

  安装 Python环境和pip工具

### 实践步骤

一、启动Spring Boot应用

启动Spring Boot应用后，对外包括监控检查URL：http://hostname:port/actuator/health，若服务状态正常，则访问此URL的返回结果status为：UP。

二、编写健康检查脚本

```
import json
import time
import requests
 
def http_req(url, data):
    headers = {"Content-Type": "application/json; charset=UTF-8"}
    retry = 1
    timeout = 2
    while retry > 0:
        try:
            requests.post(url=url,
                          data=json.dumps(data),
                          headers=headers,
                          timeout=timeout)
            print("send http req data success")
            return True
        except Exception as e:
            print("send http req data {} to {} failed: {}".format(data, url, e))
            retry -= 1
    return False
 
 
def probe_liveness(meter):
    # 服务健康标识，1：存活 0：不存活
    liveness_flag = 1
    try:
        result = requests.get('http://hostname:port/actuator/health')
        result = json.loads(str(result.content, 'utf-8'))
        if result['status'] != 'UP':
            liveness_flag = 0
    except Exception as e:
        liveness_flag = 0
 
    print(liveness_flag)
 
    data_list = []
    now = int(time.time())
    time_stamp = time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime(now))
    _data = {
        "source": u"test source",
        "user_id": "usr-xxx",
        "group_id": "group",
        "resource_id": "i-instance-microserviceA",
        "resource_name": "name-microserviceA",
        "resource_type": "instance",
        "root_user_id": "root_user",
        "meter": meter,
        "value": liveness_flag,
        "value_type": "percent",
        "time_stamp": time_stamp,
        "cluster_id": "cluster-a",
        "role": "role_test"
    }
    data_list.append(_data)
 
    return data_list
 
 
if __name__ == '__main__':
    while True:
        monitor_data_list = probe_liveness("app_liveness")
        data = {
            "data": monitor_data_list,
            "user_id": "usr-xxx",
            "namespace": "xxx-ns"
        }
        http_req(url="http://monitor-server:Port/api/v1/custom/UploadMonitorData", data=data)
        time.sleep(3)
```

三、数据查询 

数据上报完成后，可以在 自定义监控 菜单中看到刚才上报的数据。

![](../best-practices.assets/20201105152035.png)

四、配置告警

![](../best-practices.assets/20201105152038.png)

![](../best-practices.assets/20201105152039.png)

![](../best-practices.assets/20201105152040.png)

五、查收告警消息

告警信息通过短信方式发送，请注意查收短信。

