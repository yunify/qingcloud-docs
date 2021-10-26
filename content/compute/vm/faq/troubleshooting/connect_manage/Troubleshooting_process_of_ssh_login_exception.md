---
title: "ssh密钥登录云服务器提示未注册"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 20
draft: true
enableToc: false
---

## 问题现象

ssh使用密码远程的时候正常，ssh秘钥登录提示未注册，centos7.5的云服务器。

## 排查步骤

1. 检查/etc/ssh/sshd_config和/etc/ssh/ssh_config的配置，与正常的云服务器做对比 egrep -v “#|^$” /etc/ssh/sshd_config ，并没有发现异常

2. 检查了.ssh目录权限和authorized_keys文件权限，一般.ssh目录的权限为700或者755 authorized_keys的文件权限为600或者644，没有发现异常

3. 检查了防火墙以及 /etc/hosts.deny /etc/hosts.allow有没有配置黑名单，并没有异常

4. 清空know_hosts的内容，还是不行

5. 开启了的debug，有以下内容

   ```
   debug1: kex_input_ext_info: server-sig-algs=<rsa-sha2-256,rsa-sha2-512>
   debug3: receive packet: type 6
   debug2: service_accept: ssh-userauth
   debug1: SSH2_MSG_SERVICE_ACCEPT received
   debug3: send packet: type 50
   debug3: receive packet: type 51
   debug1: Authentications that can continue: publickey
   debug3: start over, passed a different list publickey
   debug3: preferred gssapi-keyex,gssapi-with-mic,publickey,keyboard-interactive,password
   debug3: authmethod_lookup publickey
   debug3: remaining preferred: keyboard-interactive,password
   debug3: authmethod_is_enabled publickey
   debug1: Next authentication method: publickey
   debug1: Trying private key: /root/kp-89l1y95c
   ```

6. systemctl sshd status的时候发现了一个报错

   ```
   Disconnected from 152.136.157.37 port 51400 [preauth]
   ```

7. 然后查了一下/var/log/secure的日志，里面有个关键的报错

```
Oct 10 23:50:18 i-jlabc309 sshd[2797]: Authentication refused: bad ownership or modes for directory /root
```

然后想到可能是root目录权限的问题，之前只检查了.ssh目录的权限，结果果然是root目录权限为600，改成700以后就正常了

## 最终原因

sshd为了安全，对属主的目录和文件权限有所要求。如果权限不对，则ssh的免密码登录不生效。 用户目录权限为 755 或者 700，就是不能是77x。 .ssh目录权限一般为755或者700。 rsa_id.pub 及authorized_keys权限一般为644 rsa_id权限必须为600

还需要检查一下属主信息，如果不对的话，需要做以下修改 chown root.root /root chown root.root -R /root/.ssh

