---
title: "Metadata 服务"
date: 2020-11-11T00:00:00+09:00
draft: false
collapsible: false
weight: 4
---

## 基本信息

青云 AppCenter 的 metadata service 是在 etcd 基础之上进行了二次开发，主要增加了 self 属性，即每个节点只能从该服务获取到自身相关的信息，如本机 IP、server ID 等，
此项目已在 [github](https://github.com/yunify/metad) 上开源。

## 元数据结构
每个应用集群在 metadata server 中存储元信息如下结构：

<ul>
  <li style="list-style-type:none;">/<b>self</b></li>
    <ul>
      <li style="list-style-type:none;">/<b>hosts</b>/<i>[role name]</i>/[instance_id]*</li>
        <ul>
          <li style="list-style-type:none;">/<b>ip</b> [IP address]</li>
          <li style="list-style-type:none;">/<b>eip</b> [public IP address]</li>
          <li style="list-style-type:none;">/<b>mac</b> [MAC address]</li>
          <li style="list-style-type:none;">/<b>sid</b> [server ID]</li>
          <li style="list-style-type:none;">/<b>gid</b> [group ID]</li>
          <li style="list-style-type:none;">/<b>gsid</b> [global server ID]</li>
          <li style="list-style-type:none;">/<b>node_id</b> [node ID]</li>
          <li style="list-style-type:none;">/<b>instance_id</b> [instance ID]</li>
          <li style="list-style-type:none;">/<b>cpu</b> [cpu]</li>
          <li style="list-style-type:none;">/<b>gpu</b> [gpu]</li>
          <li style="list-style-type:none;">/<b>memory</b> [memory in MiB]</li>
          <li style="list-style-type:none;">/<b>volume_size</b> [volume size in GiB]</li>
          <li style="list-style-type:none;">/<b>instance_class</b> [instance class]</li>
          <li style="list-style-type:none;">/<b>gpu_class</b> [gpu class]</li>
          <li style="list-style-type:none;">/<b>volume_class</b> [volume class]</li>
          <li style="list-style-type:none;">/<b>physical_machine</b> [ID of the physical machine that hosts the instance]</li>
          <li style="list-style-type:none;">/<b><i>role</i></b> [role name]</li>
          <li style="list-style-type:none;">/<b><i>pub_key</i></b> [pub key string]</li>
          <li style="list-style-type:none;">/<b><i>token</i></b> [token string]</li>
          <li style="list-style-type:none;">/<b><i>reserved_ips</i></b></li>
            <ul>
              <li style="list-style-type:none;">/<b>[reserved IP name such as vip]*</b></li>
                <ul>
                  <li style="list-style-type:none;">/<b>value</b> [reserved ip address]</li>
                </ul>
            </ul>
        </ul>
      <li style="list-style-type:none;">/<b>host</b></li>
        <ul>
          <li style="list-style-type:none;">/<b>ip</b> [IP address]</li>
          <li style="list-style-type:none;">/<b>eip</b> [public IP address]</li>
          <li style="list-style-type:none;">/<b>mac</b> [MAC address]</li>
          <li style="list-style-type:none;">/<b>sid</b> [server ID]</li>
          <li style="list-style-type:none;">/<b>gid</b> [group ID]</li>
          <li style="list-style-type:none;">/<b>gsid</b> [global server ID]</li>
          <li style="list-style-type:none;">/<b>node_id</b> [node ID]</li>
          <li style="list-style-type:none;">/<b>instance_id</b> [instance ID]</li>
          <li style="list-style-type:none;">/<b>cpu</b> [cpu]</li>
          <li style="list-style-type:none;">/<b>gpu</b> [gpu]</li>
          <li style="list-style-type:none;">/<b>memory</b> [memory in MiB]</li>
          <li style="list-style-type:none;">/<b>volume_size</b> [volume size in GiB]</li>
          <li style="list-style-type:none;">/<b>instance_class</b> [instance class]</li>
          <li style="list-style-type:none;">/<b>gpu_class</b> [gpu class]</li>
          <li style="list-style-type:none;">/<b>volume_class</b> [volume class]</li>
          <li style="list-style-type:none;">/<b>physical_machine</b> [ID of the physical machine that hosts the instance]</li>
          <li style="list-style-type:none;">/<b><i>role</i></b> [role name]</li>
          <li style="list-style-type:none;">/<b><i>pub_key</i></b> [pub key string]</li>
          <li style="list-style-type:none;">/<b><i>token</i></b> [token string]</li>
          <li style="list-style-type:none;">/<b><i>reserved_ips</i></b></li>
            <ul>
              <li style="list-style-type:none;">/<b>[reserved IP name such as vip]*</b></li>
                <ul>
                  <li style="list-style-type:none;">/<b>value</b> [reserved ip address]</li>
                </ul>
            </ul>
        </ul>
      <li style="list-style-type:none;">/<b>cluster</b></li>
        <ul>
          <li style="list-style-type:none;">/<b>app_id</b> [application ID]</li>
          <li style="list-style-type:none;">/<b>cluster_id</b> [cluster ID]</li>
          <li style="list-style-type:none;">/<b>user_id</b> [application ID]</li>
          <li style="list-style-type:none;">/<b>global_uuid</b> [global UUID]</li>
          <li style="list-style-type:none;">/<b>cluster_tag</b> [cluster tag ID]</li>
          <li style="list-style-type:none;">/<b>vxnet</b> [VxNet ID]</li>
          <li style="list-style-type:none;">/<b>zone</b> [Zone ID]</li>
          <li style="list-style-type:none;">/<b><i>endpoints</i></b></li>
            <ul>
              <li style="list-style-type:none;">/<b>[service name]*</b></li>
                <ul>
                  <li style="list-style-type:none;">/<b>port</b> [port or a reference to env parameter]</li>
                  <li style="list-style-type:none;">/<b>protocol</b> [protocol]</li>
                </ul>
              <li style="list-style-type:none;">/<b><i>reserved_ips</i></b></li>
                <ul>
                  <li style="list-style-type:none;">/<b>[reserved IP name such as vip]*</b></li>
                    <ul>
                      <li style="list-style-type:none;">/<b>value</b> [reserved ip address]</li>
                    </ul>
                </ul>
            </ul>
          <li style="list-style-type:none;">/<b><i>api_server</i></b></li>
            <ul>
              <li style="list-style-type:none;">/<b><i>host</i></b> [host of api server]</li>
              <li style="list-style-type:none;">/<b><i>port</i></b> [port of api server]</li>
              <li style="list-style-type:none;">/<b><i>protocol</i></b> [protocol of api server]</li>
            </ul>
          <li style="list-style-type:none;">/<b><i>resource_limits</i></b></li>
            <ul>
              <li style="list-style-type:none;">/<b><i>valid_volume_classes</i></b> [comma-separated valid volume classes]</li>
              <li style="list-style-type:none;">/<b><i>valid_instance_classes</i></b> [comma-separated valid instance classes]</li>
            </ul> 
          <li style="list-style-type:none;">/<b><i>upgrade-audit</i></b></li>
            <ul>
              <li style="list-style-type:none;">/<b><i>from_app_version</i></b> [App version]</li>
              <li style="list-style-type:none;">/<b><i>to_app_version</i></b> [App version]</li>
            </ul>          
        </ul>
      <li style="list-style-type:none;">/<b>env</b>/[parameter key]* [parameter value]</li>
      <li style="list-style-type:none;">/<b>adding-hosts</b>/<i>[role name]</i>/[instance_id]*</li>
        <ul>
          <li style="list-style-type:none;">/<b>ip</b> [IP address]</li>
          <li style="list-style-type:none;">/<b>eip</b> [public IP address]</li>
          <li style="list-style-type:none;">/<b>mac</b> [MAC address]</li>
          <li style="list-style-type:none;">/<b>sid</b> [server ID]</li>
          <li style="list-style-type:none;">/<b>gid</b> [group ID]</li>
          <li style="list-style-type:none;">/<b>gsid</b> [global server ID]</li>
          <li style="list-style-type:none;">/<b>node_id</b> [node ID]</li>
          <li style="list-style-type:none;">/<b>instance_id</b> [instance ID]</li>
          <li style="list-style-type:none;">/<b>cpu</b> [cpu]</li>
          <li style="list-style-type:none;">/<b>gpu</b> [gpu]</li>
          <li style="list-style-type:none;">/<b>memory</b> [memory in MiB]</li>
          <li style="list-style-type:none;">/<b>volume_size</b> [volume size in GiB]</li>
          <li style="list-style-type:none;">/<b>instance_class</b> [instance class]</li>
          <li style="list-style-type:none;">/<b>gpu_class</b> [gpu class]</li>
          <li style="list-style-type:none;">/<b>volume_class</b> [volume class]</li>
          <li style="list-style-type:none;">/<b>physical_machine</b> [ID of the physical machine that hosts the instance]</li>
          <li style="list-style-type:none;">/<b><i>role</i></b> [role name]</li>
          <li style="list-style-type:none;">/<b><i>pub_key</i></b> [pub key string]</li>
          <li style="list-style-type:none;">/<b><i>token</i></b> [token string]</li>
          <li style="list-style-type:none;">/<b><i>reserved_ips</i></b></li>
            <ul>
              <li style="list-style-type:none;">/<b>[reserved IP name such as vip]*</b></li>
                <ul>
                  <li style="list-style-type:none;">/<b>value</b> [reserved ip address]</li>
                </ul>
            </ul>
        </ul>
      <li style="list-style-type:none;">/<b>deleting-hosts</b>/<i>[role name]</i>/[instance_id]*</li>
        <ul>
          <li style="list-style-type:none;">/<b>ip</b> [IP address]</li>
          <li style="list-style-type:none;">/<b>eip</b> [public IP address]</li>
          <li style="list-style-type:none;">/<b>mac</b> [MAC address]</li>
          <li style="list-style-type:none;">/<b>sid</b> [server ID]</li>
          <li style="list-style-type:none;">/<b>gid</b> [group ID]</li>
          <li style="list-style-type:none;">/<b>gsid</b> [global server ID]</li>
          <li style="list-style-type:none;">/<b>node_id</b> [node ID]</li>
          <li style="list-style-type:none;">/<b>instance_id</b> [instance ID]</li>
          <li style="list-style-type:none;">/<b>cpu</b> [cpu]</li>
          <li style="list-style-type:none;">/<b>gpu</b> [gpu]</li>
          <li style="list-style-type:none;">/<b>memory</b> [memory in MiB]</li>
          <li style="list-style-type:none;">/<b>volume_size</b> [volume size in GiB]</li>
          <li style="list-style-type:none;">/<b>instance_class</b> [instance class]</li>
          <li style="list-style-type:none;">/<b>gpu_class</b> [gpu class]</li>
          <li style="list-style-type:none;">/<b>volume_class</b> [volume class]</li>
          <li style="list-style-type:none;">/<b>physical_machine</b> [ID of the physical machine that hosts the instance]</li>
          <li style="list-style-type:none;">/<b><i>role</i></b> [role name]</li>
          <li style="list-style-type:none;">/<b><i>pub_key</i></b> [pub key string]</li>
          <li style="list-style-type:none;">/<b><i>token</i></b> [token string]</li>
          <li style="list-style-type:none;">/<b><i>reserved_ips</i></b></li>
            <ul>
              <li style="list-style-type:none;">/<b>[reserved IP name such as vip]*</b></li>
                <ul>
                  <li style="list-style-type:none;">/<b>value</b> [reserved ip address]</li>
                </ul>
            </ul>
        </ul>
      <li style="list-style-type:none;">/<b>links</b>/[service name]* [cluster_id]</li>
      <li style="list-style-type:none;">/<b>cmd</b></li>
        <ul>
          <li style="list-style-type:none;">/<b>id</b> [cmd ID]</li>
          <li style="list-style-type:none;">/<b>cmd</b> [cmd string]</li>
          <li style="list-style-type:none;">/<b>timeout</b> [timeout(second)]</li>
        </ul>
      <li style="list-style-type:none;">/<b>vertical-scaling-roles</b> [role names]</li>
    </ul>
  <li style="list-style-type:none;">/<b>[cluster ID]*</b>[与 self 平级目录，每个 cluster ID 目录下内容结构与 self 相同，self 通过软链接指向自己的 cluster ID]</li>　
</ul>


<table><tr style="background-color:rgb(240,240,240)"><td><b>注：</b><b>黑体字</b>为固定 key，括号内为变量，<i>斜体字</i>为可选项，<b><i>黑色斜体字</i></b>表示此项为可选项，但如果有此项则为固定 key，右上角带*表示该项有 sibling (兄弟)节点。</td></tr></table>

元数据结构中根节点 self 表示发送请求的那个节点，metadata server 接到请求后返回该节点的相关信息，具体信息如下：


参数|描述
| - | - |
hosts|hosts 分角色保存节点信息，如果没有角色，就直接保存在 hosts 之下。角色名称的定义来自 [云应用开发模板规范 - 完整版](/appcenter/dev-platform/cluster-developer-guide/specifications/specifications) 里的定义。节点信息是一组以云服务器 ID (通常情况也是云服务器名，即以 i- 开头的字符串)为子目录组成，每个子目录下是此云服务器以 key-value 形式保存的详细信息。
ip|节点私有 IP 地址
eip|节点绑定的公网 IP 地址，默认为空
mac|节点 mac 地址
sid|节点 server ID，青云调度系统自动为每个节点分配的从1开始的整数。
gid|节点 group ID，青云调度系统自动为每个组分配的从1开始的整数，每一个节点和它的 replica 组成一个 group，即它们的 gid 相同，这个是为分片式分布式系统(多主多从，每个主和它的从为同一个组)提供的特性。
gsid|节点 global server ID，青云调度系统自动为每个节点分配的全球唯一的9位随机整数 ID。
node_id|节点 node ID，青云调度系统自动为每个节点分配的节点 ID，是一个以 cln- 开头的唯一标识，此 ID 不会变更。
instance_id|节点云服务器 ID，青云调度系统自动为每个节点分配的云服务器 ID，是一个以i-开头的唯一标识，此 ID 是云服务器的 hostname，每次启动都会变更，如关闭集群然后启动集群，该节点 instance ID 可能会变更。
cpu|节点 CPU 核数
memory|节点内存大小， 单位 MiB。
volume_size |节点数据盘大小， 单位 GiB。
gpu |节点 GPU 显卡数
instance_class |节点类型，其中 0 表示性能云服务器，1 表示超高性能云服务器。
gpu_class|节点 gpu 显卡类型，其中 0 表示性能型 gpu。
volume_class |数据盘类型，其中 0 表示性能盘，3 表示超高性能盘，2 表示容量盘。
physical_machine|节点所在物理机标识符
role|节点角色名称
pub_key|节点 passphraseless ssh 公钥
token|节点通过开发者自定义脚本在该云服务器里运行结果，详情参见[云应用开发模板规范 - 完整版](/appcenter/dev-platform/cluster-developer-guide/specifications/specifications) 。
reserved_ips | 节点预留 ip 地址. 这个目录下开发者可以定义多个 reserved IP，比如 write\_ip, read\_ip 等等，名称开发者自行定义，value 对应的就是这个 reserved IP 的地址。


例：通过 /self/hosts/i-abcd2xyz/ip 可获取发起请求的节点所在集群中云服务器 ID 为 i-abcd2xyz 的 IP 地址；或通过 /self/hosts/master/i-abcd2xyz/ip 可获取发起请求的节点所在集群中云服务器 ID 为 i-abcd2xyz 的 IP 地址，而此节点是一个 master 节点。

> 在制作镜像的时候由于 confd 会默认配置 prefix 为 /self，所以在镜像里获取信息时可以省略 /self，
比如上例可以直接通过 /hosts/i-abcd2xyz/ip 来获取这个节点的 IP 地址。
如果在[云应用开发模板规范 - 完整版](/appcenter/dev-platform/cluster-developer-guide/specifications/specifications) 
里定义 metadata_root_access 为 true，则 confd 会配置 prefix为 /，
这个时候需要通过 /self/hosts/i-abcd2xyz/ip 来获取这个节点的 IP 地址。

### host

参数 | 描述         
| - | - |
ip|本节点私有 IP 地址
eip |节点绑定的公网 IP 地址，默认为空
mac|本节点 mac 地址
sid|本节点 server ID
gid|本节点 group ID
gsid|本节点 global server ID
node_id|本节点 node ID
instance_id|本节点云服务器 ID
cpu|本节点 CPU 核数
memory|本节点内存大小
volume_size |本节点数据盘大小。
gpu|本节点节点 GPU 显卡数
instance_class|本节点类型。
gpu_class|本节点 gpu 显卡类型。
volume_class |本节点数据盘类型。
physical_machine|本节点所在物理机标识符
role|本节点角色名称
pub_key|本节点 passphraseless ssh 公钥
token|本节点通过开发者自定义脚本在本云服务器里运行结果
reserved_ips |本节点预留 ip 地址. 这个目录下开发者可以定义多个 reserved IP，比如 write\_ip, read\_ip 等等，名称开发者自行定义，value 对应的就是这个 reserved IP 的地址。

例：通过 /self/host/ip 可获取自身节点的 IP 地址

### cluster

  cluster 保存跟集群相关的元信息，包括

参数 | 描述         
| - | - |
app_id|集群所属的应用 ID
cluster_id|集群 ID，用户在创建应用的时候青云调度系统自动生成的一个以 cl- 开头的唯一标识，如 cl-0u0a6u1j。
user_id |用户 ID，创建该集群的用户，如 usr-5DJhqhIN。
global_uuid|集群全球唯一 ID，用户在进入部署应用页面时自动生成的全球唯一标识，这个 ID 可用于需要生成 licence 的应用使用。
cluster_tag|集群以及通过 api 创建的资源所绑定的 tag_id
vxnet|集群所在网络 ID
zone|集群所在区域 ID
endpoints|应用供第三方使用的 endpoint 定义，service name 可在[云应用开发模板规范 - 完整版](/appcenter/dev-platform/cluster-developer-guide/specifications/specifications) 中任意定义。如果一个第三方应用通过 [links](#links) 链接到本应用，那么就可以通过此功能 (例： /links/*link\_name*/cluster/endpoints/*client*，假定开发者定义这个 endpoint 服务名为 client) 获取到本应用的 endpoint 信息。endpoint 下还可以定义 reserved\_ips，这个目录下开发者可以定义多个 reserved IP，比如 write\_ip, read\_ip 等等，名称开发者自行定义，value 对应的就是这个 reserved IP 的地址。
api_server|集群内部可通过内网访问的 api server 信息, 包括 host，port，protocol。
resource_limits|当前 zone 下所支持的资源类型，valid_volume_classes：逗号分隔的磁盘类型；valid_instance_classes：逗号分隔的云服务器类型。
upgrade-audit|升级操作时，临时保存升级版本信息，from_app_version：升级前版本 ID；to_app_version：升级后版本 ID。

### env

  env 保存用户可修改的应用参数，key 为参数名，value 为具体参数值。<br>
  例：Redis 节点可通过 /env/maxclients 获取用户配置的 maxclients 数值来更新 redis.conf<br>
  
  对于参数类型是 accesskey 的参数，在其原来目录下，青云调度系统会添加 /access_key_id 和 /secret_access_key 两个子目录，分别存储 API 密钥ID 和私钥。
### adding-hosts

  adding-hosts 临时保存新加入的节点信息，当 scale out (添加节点)操作完成之后这个子目录下的信息会随之消失。云服务器信息参见 [hosts](#host)。

### deleting-hosts

  deleting-hosts 临时保存即将删除的节点信息，当 scale in (删除节点)操作完成之后这个子目录下的信息会随之消失。云服务器信息参见 [hosts](#host)。

### links

  外部服务依赖定义，有些应用依赖于另外一个服务才能正常工作，如 Kafka 依赖于 ZooKeeper，因此此处需指定被依赖集群的 ID，service name 可在[云应用开发模板规范 - 完整版](/appcenter/dev-platform/cluster-developer-guide/specifications/specifications) 中任意定义。

### cmd

  cmd 表示本节点需要执行的命令。开发者不需要用到这类信息，这是青云调度系统转发并执行应用命令，如启动应用命令等。
  > 开发者只需要在模板中定义命令即可，详情参见[云应用开发模板规范 - 完整版](/appcenter/dev-platform/cluster-developer-guide/specifications/specifications)。

参数 | 描述         
| - | - |
vertical-scaling-roles |表示当前正在进行纵向扩容的角色节点名称，目前的扩容策略是每次扩容一类角色节点，所以 vertical-scaling-roles 的值通常即为角色名称，如 master ； 如果扩容的角色节点设置了 replica ，则此项值为扩容角色和其replica 角色，以逗号隔开，如 master,master-replica 。扩容完成后，此项值会从 metadata 中移除。

## 测试

在创建好一个集群后，登陆到任意一个节点，在文件 /etc/confd/confd.toml 里找到 nodes 这一行(这个文件是青云调度系统在用户创建集群的时候自动生成的)，这一行定义的是 metadata server 的 IP 地址，任取一个 IP，运行下面命令即可看到所有信息。注明：同一 VPC 里所有集群这个文件内容相同。

`curl http://[IP]/self`

或者直接访问
`curl http://metadata/self`
