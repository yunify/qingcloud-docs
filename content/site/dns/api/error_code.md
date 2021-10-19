---
title: "错误码"
weight: 40
draft: false
enableToc: false
keyword: QingCloud，DNS API，错误码，HTTP状态码
---

在请求返回的结果中，HTTP 状态码会表明处理完成后的状态，符合 HTTP 规范所规定的语义。

当错误发生时，消息体以 json 格式返回具体的错误信息。

## 错误码列表

|错误码|错误描述|HTTP 状态码|
|:---|:---|:---|
|1|Your account might be delinquent|402|
|2|Your account is suspended|403|
|3|The HTTP header Authorization has wrong format|401|
|4|The access key id you provided does not exist|401|
|5|You must provide the Date HTTP header|400|
|6|The HTTP header Date has wrong format|400|
|7|The provided signature has expired|401|
|8|signature not match|401|
|20|You are denied to accomplish this request|403|
|21|You don't have enough permission to accomplish this request|403|
|22|Missing parameter(s) or missing parameter value(s)|403|
|23|Invalid parameter(s) or invalid parameter value(s)|400|
|24|Invalid methods(s)|400|
|25|Max requests exceeded|400|
|26|Can't find the resource|400|
|100|Internal Server Error occurred|500|
|101|Service temporarily unavailable|503|

## 返回格式

错误信息的返回格式如下：

|参数名|解释|
|:---|:---|
|code|错误码|
|message|详细错误信息|

错误返回示例：

```
{
    'code': '23',
    'message': 'Invalid parameter(s) or invalid parameter value(s)'
}
```

