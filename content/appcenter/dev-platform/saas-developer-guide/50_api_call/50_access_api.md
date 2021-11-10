---
title: "访问青云 API"
description: SaaS
draft: false
weight: 50
---

IAM 签名方法请参见[签名方法](/development_docs/api/signature/)。

API 接口说明请参见 [API 列表](/development_docs/api/command_list/instance/describe_instances/)。

IAM 调用地址：{cloud_info.api_server}/iam/

### 示例说明

请求：DescribeKeyPairs

```
params：
{
    ``*``'access_key_id'``: ``"check_token时返回的 access_key"``,
    ``'signature_version'``: 1, 
    ``'signature_method'``: ``'HmacSHA256'``,
    ``*``'time_stamp'``: ``"时间字符串 ISO8601格式 '%Y-%m-%dT%H:%M:%SZ' "``,
    ``*``'token'``: ``"调用/sso/check_token/返回的 token"``,
        ``"action"``: ``"DescribeUsers"``,
        ``"zone"``：``"nscc"
               "user_id": "check_token时返回的userid"
}
```

 1. 将以上参数通过 IAM 文档规范进行签名，得到 signature。
2. 附带以上参数并且加上{cloud_info.api_server}/iam/?params1=xxxx&...paramsn=xxx&signature=xxx&token=xxxx 使用请求青云服务

