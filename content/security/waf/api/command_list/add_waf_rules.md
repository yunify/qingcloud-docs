---
title: "AddWAFRules"
description: 
draft: false
---



创建WAF域名防护策略。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| rule_group | String | WAF域名防护的策略组ID<br/>wafrg-xxxxxxxx: 自定义规则的策略组ID<br/>wafcg-xxxxxxxx: 黑白名单的策略组ID | Yes |
| rules.n | Array |策略的规则内容<br/>JSON 格式的自定义规则的策略，参数可以参考下面的 [Signature Item](#signature-item)<br/>JSON 格式的黑白名单的策略，参数可以参考下面的 [Checklist Item](#checklist-item)| Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

**Signature Item**

| Name | Type | Description |
| --- | --- | --- |
| attack_type | String |攻击类别<br/>RFI: 远程文件包含<br/>CODEi: 远程文件包含<br/>WEBSHELL: 网站后门<br/>SQLi: SQL注入<br/>XSS: 跨站脚本攻击<br/>LFI: 本地文件包含<br/>CRLFi: 回车换行注入<br/>OTHER: 其他类别比如扫描|
| http_method | String |HTTP请求方法: ALL, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT |
| impact | Integer |规则的严重级别<br/>0: 低级别<br/>1: 中级别<br/>2: 高级别|
| action | String |规则的响应动作<br/>report: 仅报告日志<br/>block: 阻断请求<br/>limit: 限流<br/>redirect_limit: 重定向并限流 |
| val1 | Integer | 当规则的响应动作为“限流”或“重定向并限流”时，一分钟内的访问阈值 |
| rule_content | String |规则匹配的内容，包括“协议变量”“操作符”和“检查项”三部分组成<br/><br/> “协议变量”的取值如下：<br/>REQUEST_URI：一遍解码后的uri，包括参数部分<br/> URI_DIR：uri路径部分，如：uri=/abc/a.htm，则uri_dir=/abc/<br/>  URI_FILE：uri的文件部分，如：uri=/abc/a.htm，则uri_file=a.htm<br/>    URI_ARGS：在上面REQUEST_URI的基础上，解析?号之后的参数部分<br/>    USER_AGENT：一遍解码后的useragent<br/> REFERER：一遍解码后的referer<br/> COOKIE：一遍解码后的cookie<br/> POST_ARGS：一遍解码的表单参数<br/><br/>    “操作符”的取值如下：<br/> ^^[r]： 包含关系<br/> ==： 等于关系<br/><br/>  “检查项”是将要检查匹配的规则项：支持“匹配所有规则”和“匹配任意规则”两种关系<br/> &&：匹配所有规则<br/> &#124;&#124; ：匹配任意规则|

**Checklist Item**

| Name | Type | Description |
| --- | --- | --- |
| list_name | String | 黑白名单列表名称 |
| description | String | 描述信息 |
| list_type | Integer |黑白名单类别<br/>0: IP黑白名单<br/>1: URL黑白名单<br/>2: CC防护列表<br/>3: 接口防刷列表 |
| list_color | Integer |黑白名单类别<br/>0: 白名单<br/>1: 黑名单<br/>其他：当配置为CC防护列表时，表示CC防护阈值 |
| list_content | String |规则匹配的内容，根据规则类别填写不同的匹配内容<br/>IP黑白名单: IP地址/掩码<br/>URL黑白名单： URL地址<br/>CC防护列表： CC保护的URL地址，完全匹配<br/>接口防刷列表： 接口URL地址，前缀匹配 |
| val1 | String | 接口防刷列表配置的Referer地址 |

[公共参数](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| waf_rules | String |添加的防护规则ID<br/>wafri-xxxxxxxx: 自定义规则ID<br/>wafci-xxxxxxxx: 黑白名单规则ID |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=AddWAFRules
&rule_group=wafcg-32yt310g
&rules.1.list_name=test_waf
&rules.1.description=test_waf_desc
&rules.1.list_type=3
&rules.1.list_color=60
&rules.1.list_content=/url
&rules.1.val1=/referer
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AddWAFRulesResponse",
  "waf_rules":["wafcg-32yt310g"],
  "ret_code":0
}
```
