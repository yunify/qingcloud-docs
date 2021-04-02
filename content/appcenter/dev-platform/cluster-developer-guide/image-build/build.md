---
title: "镜像制作"
date: 2020-11-11T00:00:00+09:00
draft: false
collapsible: false
weight: 3
---

## 介绍

在整个云化应用过程中，制作镜像是最花时间也是最容易出错的一部分，因为每个应用的部署架构不同，需要调试的时间也会差异很大，通常情况少则几个小时，多则一周左右。下面详细解释制作镜像的流程，青云 AppCenter 支持三种镜像类型: KVM, Docker 及 LXC，目前 LXC 暂未开放给用户。

提示：请参考[调试指南](/appcenter/dev-platform/cluster-developer-guide/debug/debug)

## 制作 KVM 镜像

<table><tr style="background-color:rgb(240,240,240);color:red"><td><b>除了允许用户登陆的节点(配置文件里定义 user_access 为 true) 之外，其它类型节点如果有持久化数据必须用挂盘，不能保存到系统盘，切记！且在云服务器里不要操作资源比如 halt 云服务器，青云会负责资源调度，用户只需要关注应用即可。</b></td></tr></table>

所谓持久化数据是指跟具体用户有关的数据，如 session、用户自己的数据等，比如说数据库应用，数据库应用程序本身不是持久化数据，因为它可以无差别的重复部署而不影响服务，但用户的数据库信息、用户设置的参数、日志等是持久化数据。

制作镜像有以下几个步骤：

### 创建云服务器

跟平常一样到您控制台选择需要的系统镜像创建云服务器，以下系统镜像(括号内为镜像 ID )已经过测试:

- Ubuntu: 12.10 64-bit (quantalx64b)，13.10 64-bit (saucysrvx64b)，14.04.1 LTS 64-bit (trustysrvx64c)，16.04 LTS 64-bit (xenialx64)
- CentOS: 6.4 64-bit (centos64x64b)，7 64-bit (centos7x64b)
- Debian: Wheezy 7.5 64-bit (wheezyx64g)
- OpenSUSE: 12.3 64-bit (opensuse12x64c)
- Fedora: 18 64-bit (fedora18x64b)，20 64-bit (fedora20x64b)
- Windows: Windows Server 2008 (win2k8r2eechsi, win2k8r2eechdc, win2k8r2seen), Windows Server 2012 (winsrv2012r2chsh)

### 安装自己的应用
请根据实际情况安装

### 安装 agent

下载青云提供的 app agent [Linux 版本](/appcenter/dev-platform/cluster-developer-guide/scripts/app-agent-linux-amd64.tar.gz), 
[Windows 版本](/appcenter/dev-platform/cluster-developer-guide/scripts/app-agent-windows-386.zip)，
解压后运行 ./install.sh (Windows 下双击 install.bat)。此 agent 中包含了自动配置文件程序 confd，
该程序是在开源 [confd](https://github.com/kelseyhightower/confd/blob/master/docs/quick-start-guide.md) 
的基础上修改了一些 bug 并且增加了一些算术功能，
详情见 [QingCloud confd](https://github.com/yunify/confd/)。

### 创建模板文件

开发一些必须的模板文件，这些文件会监听青云 metadata service 的变化从而更新自己应用的配置文件。
这些文件后缀名为 toml 和 tmpl，例如，ZooKeeper 有两个配置文件 zoo.cfg 和 myid，
每个配置文件需要一套相应的 toml 和 tmpl 模板对应，
详情请见[nextcloud](https://github.com/QingCloudAppcenter/nextcloud/tree/master/nextcloud-nodes/code/conf.d/)。

#### /etc/confd/conf.d/zoo.cfg.toml

  ``` toml
  [template]
  src = "zoo.cfg.tmpl"
  dest = "/opt/zookeeper/conf/zoo.cfg"
  keys = [
    "/",
  ]
  reload_cmd = "/opt/zookeeper/bin/restart-server.sh"
  ```

  toml 文件中 src 代表模板文件名，dest 即应用的配置文件，这个配置文件会根据 src 模板刷新 dest 内容，keys 即进程 confd 监控青云 metadata service 关于该节点所在集群信息的更新，有变化则更新，如果模板中需要用到某个 key 的信息，则需要监听这个 key，也可以直接监听根目录"/"。reload_cmd 则是配置文件被刷新后的操作，脚本开发者自行提供脚本，如果不需要触发动作可以去掉 reload_cmd 这一行。toml 文件里可加上权限控制 比如 uid，gid，mode 等，详情请见 [confd](https://github.com/yunify/confd/blob/master/docs/quick-start-guide.md)

#### /etc/confd/templates/zoo.cfg.tmpl

  ``` text
  tickTime=2000
  initLimit=1ini0
  syncLimit=5
  dataDir=/zk_data/zookeeper
  clientPort=2181
  maxClientCnxns=1000
  {% raw %}{{range $dir := lsdir "/hosts"}}{{$sid := printf "/hosts/%s/sid" $dir}}
  {{$ip := printf "/hosts/%s/ip" $dir}}server.{{getv $sid}}={{getv $ip}}:2888:3888{{end}}{% endraw %}
  ```

  tmpl 模板文件决定应用配置文件内容，confd 读取青云 metadata service 刷新这些变量的值，如此例 range 这一行是读取该节点所在集群节点的 IP 和 server ID 信息，然后刷新为如下信息：

  ```toml
  server.1=192.168.100.2:2888:3888
  server.2=192.168.100.3:2888:3888
  server.3=192.168.100.4:2888:3888
  ```

更多模板语法参见 [confd templates](https://github.com/kelseyhightower/confd/blob/master/docs/templates.md)，注意的是青云的 confd 在开源基础上增加了一些对算术的支持，如 add,div,mul,sub,eq,ne,gt,ge,lt,le,mod 等。

## 制作 Docker 镜像

AppCenter 的镜像同时支持 kvm 和 docker，但由于需要实现配置变更，不能直接使用已有的 docker 镜像，需要进行一些改造，docker 镜像默认启动的进程不能是应用本身的进程，而应该是 confd，由 confd 启动服务，并实现配置变更。

### 镜像仓库

为了方便开发者存储自己的 docker 镜像，平台提供了 docker 镜像仓库。当前镜像仓库的控制台管理功能尚未完成，所以如果需要使用 docker 镜像仓库，请先提工单申请。为了保证用户安装程序时的体验，应用如果使用 docker 镜像，镜像需要放置到 QingCloud 的镜像仓库，以保证拉取速度。镜像仓库域名：dockerhub.qingcloud.com

### 镜像制作

1. 将平台提供的confd，exec.sh，以及 confd 相关的配置添加到镜像
2. 安装应用依赖的基础包
3. 将应用的二进制添加到镜像
4. 将应用的 confd 相关配置以及模板，还有脚本添加到镜像。
5. 将 confd 设置为 ENTRYPOINT，容器启动时先启动 confd，然后应用通过 confd 来启动。

平台提供了一些基础镜像，包含 confd，以及相关系统配置，方便制作镜像。为了降低镜像的大小，建议通过平台的基础镜像基于 [alpine](https://alpinelinux.org/) 来制作。

### 基础镜像

1. [confd](https://github.com/yunify/docker-images/tree/master/confd)  dockerhub.qingcloud.com/qingcloud/confd:v0.13.7
2. [jdk8](https://github.com/yunify/docker-images/tree/master/jdk) dockerhub.qingcloud.com/qingcloud/jdk8:confd-v0.13.7

### 配置文件

配置文件和 VM 类型的应用基本没有区别，只是配置文件中的 container 的 type 需要设置为 docker，
image 为 docker 镜像的地址。docker 镜像是全局的，不区分区域，所以 zone 字段可以忽略。

```json
{
  "container": {
    "type": "docker",
    "image": "zookeeper",
  }
}
```

### 示例

- 镜像参看 [zookeeper](https://github.com/yunify/docker-images/tree/master/zookeeper)

### 本地开发环境

为了方便本地调试镜像，可以通过 Docker 在本地模拟一个集群环境，来测试 confd 的配置以及相关脚本。
具体参看 [zookeeper/dev/start_cluster.sh](https://github.com/yunify/docker-images/blob/master/zookeeper/dev/start_cluster.sh)
