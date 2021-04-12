---
title: "修改PolonDB账户密码"
description: Test description
date: 2021-04-10T00:38:25+09:00
draft: false
weight: 5
enableToc: false
keyword: 
---

#### 背景：用户创建完PolonDB数据库后，如果想修改PolonDB账户密码，控制台"配置参数"无法完成次操作

假设PolonDB的集群id为cl-on372zmc，协调器节点的ip地址为192.168.8.12，Worker 节点的ip地址为192.168.8.11和192.168.8.13，创建集群时设置的数据库名称/账户/密码为qingcloud/qingcloud/qingcloud1234

![modify_polondb_passwd_1](/database/polondb/_images/modify_polondb_passwd_1.png)

![modify_polondb_passwd_2](/database/polondb/_images/modify_polondb_passwd_2.png)

#### 1.使用初始密码测试PolonDB连接协调器节点和Worker 节点

```
psql -U qingcloud -h 192.168.8.12
```

输入密码qingcloud234，测试连接正常

![modify_polondb_passwd_3](/database/polondb/_images/modify_polondb_passwd_3.png)

#### 2.修改qingcloud账户密码

2.1.连接协调器节点

```
psql -U qingcloud -h 192.168.8.12
```

2.2.修改协调器节点密码

```
alter user qingcloud password 'test123';
```

2.3.修改Worker 节点密码

```
select run_command_on_workers($qc$ alter user qingcloud password 'test123' $qc$); 
```

![modify_polondb_passwd_4](/database/polondb/_images/modify_polondb_passwd_4.png)

#### 3.使用修改后的密码验证登录

```
psql -U qingcloud -h 192.168.8.12
```

输入密码test123，测试连接正常

![modify_polondb_passwd_5](/database/polondb/_images/modify_polondb_passwd_5.png)