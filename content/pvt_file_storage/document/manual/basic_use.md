---
title: "文件系统基本使用"
date: 2021-07-19T00:38:25+09:00
description: 
draft: false
enableToc: false
weight: 3
keyword: 青云
---

## NFS共享使用

### 挂载

1. 登录文件存储管理控制台，创建文件系统，在该文件系统下创建一个NFS类型的挂载点：

   ![](../_images/basic_use_1.png)

2. 选择需要挂载的共享，点击**更多操作** ＞ **复制挂载命令**：

   ![](../_images/basic_use_2.png)

3. 选择需要使用的挂载协议，点击**复制**，复制挂载命令：

   ![](../_images/basic_use_3.png)

   > 说明：
   >
   > 可根据需要选择NFS协议版本。在客户端操作系统支持的前提下，建议使用 NFS V4 或 V4.1，V4.2协议。V4.x 版本协议比 V3 协议能提供更优的性能和一致性。

4. 执行以下命令进行挂载：
   
   Step1：创建挂载目录
   ```
   mkdir /mnt/${test_create}
   ```
   Step2：复制管理控制台上的命令，修改最后的目录
   ```
   sudo mount -t nfs -o vers=4.0 n0.efs.qingstor.me:/test_create/data /mnt/${test_create}
   ```
   Step3：检查是否成功挂载
   ```
   mount | grep nfs
   ```

   > 说明：
   >
   > 挂载命令中，若不指定 -o vers=4.0，操作系统会自动选择最高版本来进行挂载。
   > efs.qingstor.me表示域名，根据不同环境部署时的配置不同，域名会有所不同。
   > **n0**表示NFS协议。

5. 挂载成功后，可在挂载目录下正常写入数据：
   
   Step1：进入挂载目录
   ```
   cd /mnt/${test_create}
   ```
   Step2：获取列表
   ```
   ls
   ```
   Step3：新建文件
   ```
   touch file_name
   ```
   Step4：写入内容
   ```
   echo "xxxxx" >> file_name
   ```
   Step5：查看文件内容
   ```
   cat file_name 
   ```

### 卸载

1. 执行以下命令卸载文件系统：

   Step1：退出挂载目录
   ```
   cd
   ```
   Step2：卸载
   ```
   umount /mnt/${test_create} 
   ```
   Step3：检查是否成功卸载
   ```
   mount | grep nfs
   ```

## SMB共享使用

### Linux下使用

#### 挂载

1. 登录文件存储管理控制台，创建文件系统，在该文件系统下创建一个SMB类型的挂载点：

   ![](../_images/basic_use_4.png)

2. 执行以下命令进行挂载：

   Step1：创建挂载目录
   ```
   mkdir /mnt/${test_create}
   ```
   Step2：复制以下命令，根据实际情况修改域名、文件系统名称及最后的挂载目录
   ```
   mount -t cifs -o soft,mfsymlinks,vers=3.0,username=admin,password=qfs8102@qingstor, -l //s0.efs.qingstor.me/${test_create} /mnt/${test_create}
   ```
   Step 3：检查是否成功挂载
   ```
   mount | grep cifs
   ```

   > 说明：
   >
   > 挂载命令中，vers=3.0表示SMB协议版本。
   > efs.qingstor.me表示域名，根据不同环境部署时的配置不同，域名会有所不同。
   > **s0**表示SMB协议。
   > 常见错误及解决方案，详见[附录](#附录)。

3. 挂载成功后，可在挂载目录下正常写入数据：

   Step1：进入挂载目录
   ```
   cd /mnt/${test_create}
   ```
   Step2：获取列表
   ```
   ls
   ```
   Step3：新建文件
   ```
   touch file_name
   ```
   Step4：写入内容
   ```
   echo "xxxxx" >> file_name 
   ```
   Step5：查看文件内容
   ```
   cat file_name
   ```

#### 卸载

1. 执行以下命令卸载文件系统：

   Step1：退出挂载目录
   ```
   cd
   ```
   Step2：卸载
   ```
   umount /mnt/${test_create} 
   ```
   Step3：检查是否成功卸载
   ```
   mount | grep cifs
   ```

### Windows下使用

#### 挂载

1. 登录文件存储管理控制台，创建文件系统，在该文件系统下创建一个SMB类型的挂载点：

   ![](../_images/basic_use_4.png)

2. 选择需要挂载的共享，点击**更多操作** > **复制挂载命令**：

   ![](../_images/basic_use_5.png)

3. 点击**复制**，复制挂载命令：

   ![](../_images/basic_use_6.png)

4. 打开**命令行窗口**，执行以下命令挂载文件系统：

   Step1：复制管理控制台上的命令进行挂载
   ```
   net use z: \\${s0.efs.qingstor.me}\test-create-test-create 
   ```
   Step2：检查是否成功挂载
   ```
   net use
   ```

   > 说明：
   >
   > + 挂载命令中，**s0**表示SMB协议。
   > 
   > + z:表示挂载目标盘符。
   > 
   > + 将域名改为任一节点服务器的IP。
   >    若需要使用域名进行挂载，可编辑hosts文件，增加如下信息：
   >
   >    ip[任意一个dns vip] 域名[挂载点域名]    //如：172.16.20.33 s0.efs.qingstor.me 
   >
   > + dns vip可通过如下命令进行查看。
   >
   >   `cat /qingstor/etc/qfs_static_domains.yaml`

5. 挂载成功后，可以访问文件系统，执行读取或写入操作。

#### 卸载

1. 打开**命令行窗口**，执行以下命令卸载文件系统：

   Step1：卸载文件系统
   ```
   net use z: /delete
   ```
   Step2：检查是否成功卸载
   ```
   net use
   ```


## 附录

### SMB协议挂载失败

若执行挂载命令时出现如下错误，说明未安装cifs。

```
mount: wrong fs type, bad option, bad superblock on //s0.efs.qingstor.me / test_create,
       missing codepage or helper program, or other error
       (for several filesystems (e.g. nfs, cifs) you might
       need a /sbin/mount.<type> helper program)
```

可根据以下步骤进行解决：

1. 执行如下命令安装cifs：

   ```
   apt install cifs-utils
   ```

2. 安装完成后再次执行挂载命令进行挂载，详细步骤参考[SMB共享使用](#SMB共享使用)。
