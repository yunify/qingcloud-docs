---
title: "登录方式"
description: test
draft: false
weight: 15
---

## 解释说明

### 登录方式

Linux 操作系统建议选择更为安全的 SSH 密钥登录，Windows 操作系统只能选择密码登录。

### SSH 密钥

您可以新建一个密钥对，并下载私钥，私钥用于远程登录身份认证，为保证云服务器安全， QingCloud 不会保存您的私钥。如何使用私钥登录云服务器请参考[密钥文档](/compute/ssh/manual/ssh/)。

## 常见问题

<details>
<summary><p>
  1.Linux 操作系统登录方式是否支持改变？
  </p></summary>
<p>
  支持，加载SSH密钥以后，密码登录将失效，解绑所有SSH密钥以后，需要您重置密码后通过密码登录，
  </p>
</details>

<details>
<summary><p>
  2.Linux 操作系统是否支持加载多个SSH密钥？
  </p></summary>
<p>
  支持，方便您进行精细的访问管理，可以加载多个SSH密钥，不同使用者通过不同Key登录。
  </p>
</details>




