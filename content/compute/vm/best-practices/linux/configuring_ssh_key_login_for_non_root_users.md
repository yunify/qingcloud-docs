---
title: "非root用户配置SSH密钥登录"
description: Test description
draft: false
---

# 背景介绍

由于root用户的权限过大，正式环境中不建议使用root用户登录并操作，本文以CentOS 8.2系统为例，介绍了普通用户如何通过ssh密钥登录至云服务器中。

# 操作步骤

## 1. 创建用户

通过下列命令，创建一个用户qingcloud，并切换到qingcloud的家目录下。

```shell
useradd -m qingcloud  #创建用户qingcloud,并同时创建用户qingcloud的家目录/home/qingcloud
passwd qingcloud  #设置用户qingcloud的密码，需键入两次次
su qingcloud  #切换到用户qingcloud
cd ~  #切换到用户qingcloud的家目录
```

## 2. 创建ssh证书

```shell
ssh-keygen -b 2048 -t rsa  #此时会提示密钥保存路径，若无需修改，回车即可。接着会提示输入密码，按提示输入两次密码，若无需密码，执行两次回车
```

通过ls 命令，可以看到已经生成相应的私钥(id_rsa)和公钥(id_rsa.pub)。

```shell
ls /home/qingcloud/.ssh/
```

## 3. 添加公钥

创建authorized_keys文件，将公钥加入至authorized_keys文件，并设置.ssh以及authorized_keys文件的权限。

```shell
touch /home/qingcloud/.ssh/authorized_keys
cat /home/qingcloud/.ssh/id_rsa.pub >> /home/qingcloud/.ssh/authorized_keys
chmod 700 /home/qingcloud/.ssh
chmod 600 /home/qingcloud/.ssh/authorized_keys
```

## 4. 使用私钥登录

### 1）Windows系统

本文使用客户端工具Xshell来实现。

通过Xftp工具将私钥下载至本地，.ssh文件需要在云服务器目录处键入 /home/qinglcloud/.ssh 访问。

![](../../_images/ssh_key_non_root_user/non_root_users1.png)

导入私钥。点击Xshell客户端的【工具】---【用户密钥管理者】，点击导入，再选择刚才创建下载的密钥。

![](../../_images/ssh_key_non_root_user/non_root_users2.png)

在Xshell中新建一个会话，填写主机为登录的ip地址，左侧标签中切换到 用户身份验证 (Authentication)，右侧表单中方法(Method)选择 Public Key ，用户名  (Username) 为之前创建的用户(qingcloud)，选择刚才导入的密钥，即可连接主机。

![](../../_images/ssh_key_non_root_user/non_root_users3.png)

![](../../_images/ssh_key_non_root_user/non_root_users4.png)

### 2）Linux系统

将私钥拷贝至Linux客户端上，通过密钥登录云服务器。

```shell
scp root@192.168.0.4:/home/qingcloud/.ssh/id_rsa /root/
ssh -i id_rsa qingcloud@192.168.0.4
```

