---
title: "创建实例"
description: SaaS
draft: false
weight: 10
---

本章节介绍创建实例的请求参数、响应参数和示例说明。

### 开通流程

![](/appcenter/dev-platform/_images/um_spi_open.png)

### 请求参数

| 字段         | 类型    | 是否必选 | 描述                                                         |
| ------------ | ------- | -------- | ------------------------------------------------------------ |
| action       | string  | true     | CreateAppInstance                                            |
| user_id      | string  | true     | 用户唯一标识                                                 |
| app_id       | string  | true     | 应用唯一id                                                   |
| spec         | string  | true     | spec 定价规格名称（base64 编码）                             |
| spec_package | string  | true     | spec_package 定价规格套餐（base64  编码）                    |
| period       | string  | true     | 定价-套餐有效期<br />参数组成：值_时间单位<br />例如：<li>1_year</li><li>1_day</li><li>1_month</li> |
| cloud_info   | string  | true     | 当前云环境访问域名，接入方后续对接会用到。<br />json 字符串格式，通过 base64 编码传输。<br /><code># 以下为青云公有云服务地址 {   ``"sso_server"``: ``"https://account.qingcloud.com"``,   ``"api_server"``: ``"https://api.qingcloud.com" }</code><br />参数说明：<br />sso_server：青云 SSO 服务访问地址。<br />api_server：青云平台 API 访问地址。<br />**注意：**<br />接入系统所有对接操作都需要从这个参数重获取访问地址。 |
| debug        | boolean | false    | 如果该值为 true，则表示当前实例用于调试。不会进行实例的计费操作。 |
| time_stamp   | string  | true     | 时间戳，格式：ISO8601<br />示例：2021-06-22T09:15:03Z<br />URL 编码后：2021-06-22T09%3A15%3A03Z |
| signature    | String  | true     | 签名                                                         |

### 响应参数

| 参数名称   | 是否必选 | 类型    | key 名称                                                     | 说明                                                         |
| ---------- | -------- | ------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| success    | true     | boolean | -                                                            | 操作成功                                                     |
| message    | false    | string  | -                                                            | 操作不成功时返回的消息                                       |
| instanceId | true     | string  | -                                                            | 服务商为用户创建的实例唯一  id<br />（可以理解为租户 id）。<br />如果用户多次创建应返回不同的 id。<li>长度最长 128位</li><li>不能重复</li> |
| appInfo    | false    | JSON    | frontEnd<li>url：前台访问地址</li><li>username：前台账号</li><li>password：前台密码</li>admin<li>url：后台访问地址</li><li>username：管理账号</li><li>password：管理密码</li>authUrl：免登接口地址 | -                                                            |

### 示例说明

```
参数：
{
  ``"user_id"``: ``"usr-xx1xx"``,
  ``"signature"``: ``"puc6rZedSRTUTgSWoIX63eYb9ZM3QRuBWS1Jows9I5E="``,
  ``"action"``: ``"CreateAppInstance"``,
  ``"time_stamp"``: ``"2021-06-23T07:26:13Z"``,
  ``"spec"``: ``"5aWX6aSQ5ZCN56ewMQ=="``,
  ``"cloud_info"``: ``"eyJhcGlfc2VydmVyIjogImFwaS5xaW5nY2xvdWQuY29tOjc3NzciLCAic3NvX3NlcnZlciI6ICJzc28ucWluZ2Nsb3VkLmNvbSJ9"``,
  ``"period"``: ``"1_day"``,
  ``"app_id"``: ``"app-xxxxx"
}  
```

```
GET请求：  
http:``//127.0.0.1/test/spi?user_id=usr-xx1xx&signature=puc6rZedSRTUTgSWoIX63eYb9ZM3QRuBWS1Jows9I5E%3D&action=CreateAppInstance&time_stamp=2021-06-23T07%3A26%3A13Z&spec=5aWX6aSQ5ZCN56ewMQ%3D%3D&cloud_info=eyJhcGlfc2VydmVyIjogImFwaS5xaW5nY2xvdWQuY29tOjc3NzciLCAic3NvX3NlcnZlciI6ICJzc28ucWluZ2Nsb3VkLmNvbSJ9&period=1_day&app_id=app-xxxxx
```

```
响应成功：  
{
  ``"instanceId"``: ``"i-gy72h4eo"``,
  ``"message"``: ``null``,
  ``"appInfo"``: {
    ``"admin"``: {
      ``"url"``: ``"https://admin.saas.com"``,
      ``"username"``: ``"ad-gggiz28bn5"``,
      ``"password"``: ``"o0u9zsbvxe"
    ``},
    ``"authUrl"``: ``"https://auth.saas.com"``,
    ``"frontEnd"``: {
      ``"url"``: ``"https://console.saas.com"``,
      ``"username"``: ``"fn-g159wmll"``,
      ``"password"``: ``"b0bn5qzy"
    ``}
  ``},
  ``"success"``: ``true
}  
```

```
响应失败：
{``"success"``:``false``,``"message"``:``"开通失败"``}
```
