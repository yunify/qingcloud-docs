---
title: "批量添加集群账号"
description: 本小节主要介绍如何使用脚本针对多个 MySQL Plus 集群批量添加数据库账号。 
keyword: 数据库,MySQL PLus,关系型数据库,MySQL,账号添加,创建账号
weight: 12
collapsible: false
draft: false

---

针对多个 MySQL 集群，需要批量创建多个账号，用户可通过脚本，对多个集群以循环的方式调用创建账户的API接口来实现。

本小节主要介绍如何使用脚本针对多个 MySQL Plus 集群批量添加数据库账号。 

## 约束限制

- 系统保留 `root` 、`qc_check` 、 `qc_repl` 账号进行自动化运维和数据同步，请勿删除，以免破坏系统的运行。
- 账号开启**加密认证**后，需在集群开启 **SSL 传输加密**，该账号才可以连接数据库。
- 添加账号后，若使用 `Proxy 实例`节点进行读写连接，需要重启 `Proxy 实例`节点同步`主实例`账户信息。
- 相同集群不支持创建同名账号，不同集群间的账号名可相同。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 MySQL Plus 集群，且集群状态为**活跃**。
- 已获取批量创建账号的脚本文件` adduser.py` 和配置文件` users.cnf` 。

## 操作步骤

1. 登录管理控制台。

2. 选择**产品与服务** > **访问与授权** > **API 秘钥**，进入API 秘钥页面。

   记录API秘钥和私钥。

3. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 MySQL Plus**，进入集群管理页面。

   记录待创建账号的集群ID。

4. 打开` users.cnf`并在文件中依次添加以下信息。

   <img src="../../../_images/create_multi_accounts.png" zoom="100%;" />

   - 在` users.cnf`文件中的第一行和第二行填写步骤2获取的 access_key_id 和 secret_access_key。
   - 在` users.cnf`文件中的第三行填写步骤3获取的集群信息，添加多个账号可直接换行填写多个账号信息。

   ### 账号参数

   | <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:480px">说明</span>   |
   | :--------------------------------------------------------- | :----------------------------------------------------------- |
   | 集群 ID                                                    | 待添加账户的集群 ID。                                        |
   | 授权数据库                                                 | 输入一个数据库名。<br>默认为`*`，表示集群全部数据库。<br>不支持一个普通账号授权多个数据库。高级权限账号，可授权全部数据库。 |
   | 数据库密码                                                 | 输入数据库密码。<br>密码规则：长度为8～32位字符数；必须同时包含大写字母（A～Z)、小写字母（a～z）、数字（0～9）和特殊字符（@#$%^&*_+-=）。 |
   | 加密认证                                                   | 数据传输中加密认证。<br>默认为`NO`；若选择`YES`，需同时开启集群 **SSL 传输加密**，否则不能正常连接数据库。 |
   | 授权主机                                                   | 输入授权主机 IP 地址。<br>支持授权多个 IP。<br>默认为`%`，表示所有主机均可访问。<br>授权主机设置的 IP，仅对内网 IP 登录有效。若需外网访问，请设置授权主机为`%`。 |
   | 数据库用户名                                               | 输入数据库账户名。<br>不支持添加`root`、`qc_admin`、`qc_repl`和`qc_check`运维账号。<br>为确保账号名唯一性，不支持添加已有账号。<br>命名规则：长度为2～26个字符数；只能由大写字母（A～Z)、小写字母（a～z）、数字（0～9）和特殊字符（_）组成。 |
   | 用户权限                                                   | 选择账号权限类型。<br>可选择`普通权限（StandardAccount）`或`高级权限（SuperuserAccount）`。 |
   | 区域                                                       | 集群所在区域                                                 |

6. 运行` adduser.py` 文件集群将自动添加多个账号。

   显示类似如下信息，表示添加成功

   ~~~sql
   ```
   *********************
   https://api.qingcloud.com/iaas/?
   access_key_id=CDPOAKGVXKDOHQBYIAZL&action=RunClusterCustomService&cluster=cl-opt1oiig&expires=2022-01-04T08%3A57%3A33Z&limit=20&role=maininstance&service=add_user&service_params=%7B%22database%22%3A%22%2A%22%2C%22passwd%22%3A%22Zhu1241jie%40%22%2C%22ssl%22%3A%22NO%22%2C%22host%22%3A%22%25%22%2C%22user%22%3A%22user1%22%2C%22priv%22%3A%22StandardAccount%22%7D&signature_method=HmacSHA256&signature_version=1&status.1=running&time_stamp=2022-01-04T08%3A57%3A03Z&version=1&zone=sh1a&signature=UJNBMMmayfIcWMLq5imMtYFy2zdDZWJeuOWAzgInFJM%3D
   {u'job_id': u'j-fcz8mvls4pr', u'service': u'add_user', u'ret_code': 0, u'role': u'maininstance', u'action': u'RunClusterCustomServiceResponse', u'cluster_id': u'cl-opt1oiig'}
   {u'action': u'DescribeJobsResponse', u'total_count': 1, u'job_set': [{u'status': u'pending', u'job_id': u'j-fcz8mvls4pr', u'directive': u'{"status":["running"],"request_zone":"sh1a","signature_method":"HmacSHA256","sender":{"lang":"en","user_id":"usr-O6JO8PFK","console_id":"qingcloud","root_user_id":"usr-O6JO8PFK","role":"user","privilege":10,"channel":"api"},"service":"add_user","time_stamp":"2022-01-04T08:57:03Z","signature_version":"1","expires":"2022-01-04T08:58:02Z","status.1":"running","resource_kit":"ca-xhi200l6","cluster":"cl-opt1oiig","zone":"sh1a","version":"1","role":"maininstance","app_ids":"app-00r26u27","signature":"UJNBMMmayfIcWMLq5imMtYFy2zdDZWJeuOWAzgInFJM=","service_params":"{\\"database\\":\\"*\\",\\"passwd\\":\\"Zhu1241jie@\\",\\"ssl\\":\\"NO\\",\\"host\\":\\"%\\",\\"user\\":\\"user1\\",\\"priv\\":\\"StandardAccount\\"}","limit":"20","resource_ids":["cl-opt1oiig"],"action":"RunClusterCustomService","access_key_id":"CDPOAKGVXKDOHQBYIAZL"}', u'job_action': u'RunClusterCustomService', u'create_time': u'2022-01-04T08:57:03Z', u'owner': u'usr-O6JO8PFK', u'status_time': u'2022-01-04T08:57:03Z', u'error_codes': u'', u'resource_ids': u'cl-opt1oiig'}], u'ret_code': 0}
   {u'action': u'DescribeJobsResponse', u'total_count': 1, u'job_set': [{u'status': u'working', u'job_id': u'j-fcz8mvls4pr', u'directive': u'{"status":["running"],"request_zone":"sh1a","signature_method":"HmacSHA256","sender":{"lang":"en","user_id":"usr-O6JO8PFK","console_id":"qingcloud","root_user_id":"usr-O6JO8PFK","role":"user","privilege":10,"channel":"api"},"service":"add_user","time_stamp":"2022-01-04T08:57:03Z","signature_version":"1","expires":"2022-01-04T08:58:02Z","status.1":"running","resource_kit":"ca-xhi200l6","cluster":"cl-opt1oiig","zone":"sh1a","version":"1","role":"maininstance","app_ids":"app-00r26u27","signature":"UJNBMMmayfIcWMLq5imMtYFy2zdDZWJeuOWAzgInFJM=","service_params":"{\\"database\\":\\"*\\",\\"passwd\\":\\"Zhu1241jie@\\",\\"ssl\\":\\"NO\\",\\"host\\":\\"%\\",\\"user\\":\\"user1\\",\\"priv\\":\\"StandardAccount\\"}","limit":"20","resource_ids":["cl-opt1oiig"],"action":"RunClusterCustomService","access_key_id":"CDPOAKGVXKDOHQBYIAZL"}', u'job_action': u'RunClusterCustomService', u'create_time': u'2022-01-04T08:57:03Z', u'owner': u'usr-O6JO8PFK', u'status_time': u'2022-01-04T08:57:03Z', u'error_codes': u'', u'resource_ids': u'cl-opt1oiig'}], u'ret_code': 0}
   {u'action': u'DescribeJobsResponse', u'total_count': 1, u'job_set': [{u'status': u'working', u'job_id': u'j-fcz8mvls4pr', u'directive': u'{"status":["running"],"request_zone":"sh1a","signature_method":"HmacSHA256","sender":{"lang":"en","user_id":"usr-O6JO8PFK","console_id":"qingcloud","root_user_id":"usr-O6JO8PFK","role":"user","privilege":10,"channel":"api"},"service":"add_user","time_stamp":"2022-01-04T08:57:03Z","signature_version":"1","expires":"2022-01-04T08:58:02Z","status.1":"running","resource_kit":"ca-xhi200l6","cluster":"cl-opt1oiig","zone":"sh1a","version":"1","role":"maininstance","app_ids":"app-00r26u27","signature":"UJNBMMmayfIcWMLq5imMtYFy2zdDZWJeuOWAzgInFJM=","service_params":"{\\"database\\":\\"*\\",\\"passwd\\":\\"Zhu1241jie@\\",\\"ssl\\":\\"NO\\",\\"host\\":\\"%\\",\\"user\\":\\"user1\\",\\"priv\\":\\"StandardAccount\\"}","limit":"20","resource_ids":["cl-opt1oiig"],"action":"RunClusterCustomService","access_key_id":"CDPOAKGVXKDOHQBYIAZL"}', u'job_action': u'RunClusterCustomService', u'create_time': u'2022-01-04T08:57:03Z', u'owner': u'usr-O6JO8PFK', u'status_time': u'2022-01-04T08:57:03Z', u'error_codes': u'', u'resource_ids': u'cl-opt1oiig'}], u'ret_code': 0}
   {u'action': u'DescribeJobsResponse', u'total_count': 1, u'job_set': [{u'status': u'successful', u'job_id': u'j-fcz8mvls4pr', u'directive': u'{"status":["running"],"request_zone":"sh1a","signature_method":"HmacSHA256","sender":{"lang":"en","user_id":"usr-O6JO8PFK","console_id":"qingcloud","root_user_id":"usr-O6JO8PFK","role":"user","privilege":10,"channel":"api"},"service":"add_user","time_stamp":"2022-01-04T08:57:03Z","signature_version":"1","expires":"2022-01-04T08:58:02Z","status.1":"running","resource_kit":"ca-xhi200l6","cluster":"cl-opt1oiig","zone":"sh1a","version":"1","role":"maininstance","app_ids":"app-00r26u27","signature":"UJNBMMmayfIcWMLq5imMtYFy2zdDZWJeuOWAzgInFJM=","service_params":"{\\"database\\":\\"*\\",\\"passwd\\":\\"Zhu1241jie@\\",\\"ssl\\":\\"NO\\",\\"host\\":\\"%\\",\\"user\\":\\"user1\\",\\"priv\\":\\"StandardAccount\\"}","limit":"20","resource_ids":["cl-opt1oiig"],"action":"RunClusterCustomService","access_key_id":"CDPOAKGVXKDOHQBYIAZL"}', u'job_action': u'RunClusterCustomService', u'create_time': u'2022-01-04T08:57:03Z', u'owner': u'usr-O6JO8PFK', u'status_time': u'2022-01-04T08:57:09Z', u'error_codes': u'', u'resource_ids': u'cl-opt1oiig'}], u'ret_code': 0}
   ~~~

   

   > <b>说明：</b>
   >
   > 第一行表示 API 请求的 url 地址。
   >
   > 第二行表示执行这个 API 之后的返回结果，ret_code 为0代表 API 执行成功。
   >
   > 后续内容表示添加账号的执行状态，successful 代表添加账号成功。若授权主机相同的情况下添加了相同的用户、密码不合法、用户名不合法等会提示响应报错。

​	