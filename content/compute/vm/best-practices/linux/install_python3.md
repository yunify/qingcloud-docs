---
title: "CentOS7系统安装Python3"
description: test
draft: false
weight: 10

---

### 1.查看一下python2在哪个目录

```
whereis python
cd /usr/bin
ll python*
```

### 2.安装python3所需要的依赖包

```
yum install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gcc make libffi-devel
```

### 3.安装pip

```
yum -y install epel-release 
yum install python-pip
```

### 4.下载python3源码包

```
wget https://www.python.org/ftp/python/3.7.0/Python-3.7.0.tgz
```

###5.解压缩

```
tar -zxvf Python-3.7.0.tgz
```

### 6.切换至解压后的目录，编译安装源码包

```
./configure prefix=/usr/local/python3 
make && make install
```

### 7.添加python3的软链接及pip3 的软链接 

```
ln -s /usr/local/python3/bin/python3.7 /usr/bin/python3.7 
ln -s /usr/local/python3/bin/pip3.7 /usr/bin/pip3.7
```

###8.测试是否安装成功了 

```
python -V
```

### 9.更改yum配置，因为其要用到python2才能执行，否则会导致yum不能正常使用

```
vi /usr/bin/yum 
把 #! /usr/bin/python 修改为 #! /usr/bin/python2 
vi /usr/libexec/urlgrabber-ext-down 
把 #! /usr/bin/python 修改为 #! /usr/bin/python2
```

