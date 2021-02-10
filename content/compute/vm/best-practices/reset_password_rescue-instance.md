# 通过救援主机重置账户密码

## 适用范围

用户忘记账户登录密码，导致无法登录主机。

## 背景介绍

控制台的重置密码只允许修改Administrator账号，若将Administrator账号禁用（不建议将Administrator账号禁用），同时未记住账户密码，此时无法登陆至主机中。本文引导通过救援主机功能来实现对账户密码的修改，以 [Windows Server 2019 简体中文 标准版 64bit](https://console.qingcloud.com/pek3/images/winsrv2019sdcnb/) 该镜像为例。

![](..\reset_password_rescue-instance.assets\image-20210210160453772.png)

## 具体操作

### 1. 使用救援主机功能

先将主机关机，然后右键主机---救援主机，然后设置救援主机的密码，依次点击提交，继续。

![](..\reset_password_rescue-instance.assets\image-20210210162906835.png)

![](..\reset_password_rescue-instance.assets\image-20210210163055274.png)

![](..\reset_password_rescue-instance.assets\image-20210210163117556.png)

此时救援主机已创建，点击vnc进入救援主机中，输入刚才输入的密码即可

![](..\reset_password_rescue-instance.assets\image-20210210163336960.png)

![](..\reset_password_rescue-instance.assets\image-20210210163418588.png)

### 2. 挂载被救援主机系统盘

右键开始---磁盘管理

![](..\reset_password_rescue-instance.assets\image-20210210163715761.png)

然后右键磁盘---点击联机

![](..\reset_password_rescue-instance.assets\image-20210210163746757.png)

此时会看到一块新的磁盘E

![](..\reset_password_rescue-instance.assets\image-20210210163936521.png)

### 3. 备份OSK

#### 1)进入到E:\Windows\System32中，搜索OSK

![](..\reset_password_rescue-instance.assets\image-20210210164612013.png)

#### 2)更改文件属主为administrator

这个文件由于属主不是administrator而是Trustedintaller，所以无法修改，需要把这个文件的属主更改为administrator

右键文件---属性---安全---高级---更改---高级---立即查找---administrator---之后点击确认以及应用即可

![](..\reset_password_rescue-instance.assets\image-20210210165027598.png)

![](..\reset_password_rescue-instance.assets\image-20210210165132726.png)

![](..\reset_password_rescue-instance.assets\image-20210210165421456.png)

![](..\reset_password_rescue-instance.assets\image-20210210170202238.png)

![](..\reset_password_rescue-instance.assets\image-20210210165701108.png)

![](..\reset_password_rescue-instance.assets\image-20210210165745554.png)

#### 3)添加文件修改权限

此时administrator用户对此文件只有读取和执行的权限，需要添加修改的权限

右键文件---属性---安全---编辑---添加---高级---立即查找---administrator---确定---确定---添加修改权限---应用---确认---确认

![](..\reset_password_rescue-instance.assets\image-20210210165027598.png)

![](..\reset_password_rescue-instance.assets\image-20210210170723524.png)

![](..\reset_password_rescue-instance.assets\image-20210210170955386.png)

![](..\reset_password_rescue-instance.assets\image-20210210171317044.png)

![](..\reset_password_rescue-instance.assets\image-20210210171403014.png)

![](..\reset_password_rescue-instance.assets\image-20210210171436322.png)

#### 4)重命名OSK

右键文件---重命名，修改文件名为osk-bak.exe

![](..\reset_password_rescue-instance.assets\image-20210210171709638.png)

### 4. 复制cmd.exe，并命名为osk.exe

在该目录中搜索cmd，复制一份，并重命名为osk.exe

![](..\reset_password_rescue-instance.assets\image-20210210172423403.png)

![](..\reset_password_rescue-instance.assets\image-20210210173032832.png)

### 5. 以管理员身份运行cmd

右键开始---运行---输入cmd

![](..\reset_password_rescue-instance.assets\image-20210210174255270.png)

输入下面三条命令

 ```shell
bcdedit /store d:\boot\bcd /set {bootmgr} device partition=e:
bcdedit /store d:\boot\bcd /set {default} device partition=e:
bcdedit /store d:\boot\bcd /set {default} osdevice partition=e:
 ```

![](..\reset_password_rescue-instance.assets\image-20210210174404648.png)

### 6. 取消救援模式，并启动主机

右键被救援主机，点击取消救援模式，并将主机启动![](..\reset_password_rescue-instance.assets\image-20210210175229200.png)

### 7. 修改账户密码，登录主机

通过vnc进入主机，点击屏幕键盘

![](..\reset_password_rescue-instance.assets\image-20210210182132324.png)

通过cmd命令修改账户密码，账户名为test，新密码为Qingcloud01

```shell
net user test Qingcloud01
```

增加管理用户命令可参考：

```shell
 net user adminuser Lh888888  /add  #添加用户
 net localgroup administrators adminuser /add  #将用户添加到管理组
```

![](..\reset_password_rescue-instance.assets\image-20210210182715459.png)

此时可以用刚修改的密码登录主机

![](..\reset_password_rescue-instance.assets\image-20210210183026512.png)

### 8、恢复osk文件

删除osk文件，将osk-bak文件重命名为osk，按照步骤3，修改osk-bak的属主为当前账户，再添加修改的权限即可。

![](..\reset_password_rescue-instance.assets\image-20210210185804257.png)