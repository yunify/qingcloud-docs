---
title: "Python3 语言 get 请求签名 demo"
description: 
draft: false

---

本文示例为 Python3 语言的 get 请求类型的 demo

需要调整的地方为：

1.填写您实际的 api 秘钥中的 access_key_id，secret_access_key

2.填写实际的 action (具体的 api 指令)

3.填写实际的 zone (资源区域)

4.根据 action 填写实际需要的参数

```
import hmac
import json
import base64
import datetime
from hashlib import sha256
from collections import OrderedDict
import urllib.request, urllib.error, urllib.parse

class QingApi:
    def __init__(self):
        self.access_key_id = 'xxxxxx'
        self.secret_access_key = 'xxxxxxx'
        self.time_stamp = datetime.datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")
        self.url = "https://api.qingcloud.com/iaas/"
        self.url_path = '/iaas/'
        self.methods = 'GET'

    def postResust(self, iassurl):
        req = urllib.request.Request(iassurl)
        result = urllib.request.urlopen(req)
        response = json.loads(result.read().decode())
        print(response)

    def getVhost(self):
        od = OrderedDict()
        od['access_key_id'] = self.access_key_id
        od['action'] = "DescribeInstances"
        od['signature_method'] = "HmacSHA256"
        od['signature_version'] = 1
        od['time_stamp'] = self.time_stamp
        od['version'] = 1
        od['zone'] = "sh1"

        od['instances.1'] = "i-ets7af6q"

        od = self.sort_value(od)
        data = urllib.parse.urlencode(od)
        string_to_sign = self.methods + "\n" + self.url_path + "\n" + data
        h = hmac.new(self.secret_access_key.encode(), digestmod=sha256)
        h.update(string_to_sign.encode())
        sign = base64.b64encode(h.digest()).strip()
        signature = urllib.parse.quote_plus(sign)
        print("signature是:"+signature)
        iaasUrl = self.url + "?" + data + "&signature=" + signature
        print(iaasUrl)
        self.postResust(iaasUrl)

    def sort_value(self, old_dict):
        items = sorted(old_dict.items())
        new_dict = OrderedDict()
        for item in items:
            new_dict[item[0]] = old_dict[item[0]]
        return new_dict

x = QingApi()
x.getVhost()
```

得到的签名为：

```
signature是:1i700cIAv0yVLdEJ8H5e%2FBnjFkchoSdVnHmD6Wqpzdw%3D
```

执行 DescribeInstances 的结果为：

```
{
    "action": "DescribeInstancesResponse", 
    "instance_set": [
        {
            "host_machine": "sh1br08n02", 
            "hostname": "i-ets7af6q", 
            "vxnets": [
                {
                    "ipv6_address": "", 
                    "vxnet_type": 1, 
                    "vxnet_id": "vxnet-phgzwim", 
                    "vxnet_name": "测试集群搭建", 
                    "role": 1, 
                    "private_ip": "192.168.8.3", 
                    "security_group": {
                        "is_default": 1, 
                        "security_group_name": "default security group", 
                        "security_group_id": "sg-xmldyszl"
                    }, 
                    "nic_id": "52:54:99:f4:da:2c", 
                    "security_groups": [
                        {
                            "is_default": 1, 
                            "security_group_name": "default security group", 
                            "security_group_id": "sg-xmldyszl"
                        }
                    ]
                }
            ], 
            "memory_current": 2048, 
            "graphics_port": "5954", 
            "extra": {
                "nic_type": "", 
                "nic_mqueue": 0, 
                "read_throughput": 0, 
                "container_mode": null, 
                "ib_sriov_type": 0, 
                "spice_compression": null, 
                "instance_ext_type": "", 
                "bandwidth": 500, 
                "filetransfer": 1, 
                "os_disk_encryption": 0, 
                "slots": {
                    "i|52:54:99:f4:da:2c": "s|0x03", 
                    "d|i-ets7af6q": "s|0x07"
                }, 
                "sanc_rep_count": null, 
                "block_bus": "", 
                "gpu_class": 0, 
                "features": 4, 
                "no_restrict": 0, 
                "usb": 1, 
                "ivshmem": [ ], 
                "gpu_pci_nums": "", 
                "label": null, 
                "rg": null, 
                "policy": null, 
                "gpu": 0, 
                "clipboard": 1, 
                "qxl_number": 0, 
                "cpu_max": 0, 
                "cpu_model": "", 
                "mem_max": 0, 
                "max_bs": null, 
                "usbredir": 1, 
                "sriov_nic_type": 0, 
                "no_limit": 0, 
                "iops": 900, 
                "throughput": 44544, 
                "read_iops": 0, 
                "hypervisor": "kvm", 
                "os_disk_size": 50, 
                "boot_dev": "", 
                "usb3_bus": null
            }, 
            "vcpus_max": 2, 
            "image": {
                "ui_type": "tui", 
                "agent_type": "pitrix", 
                "processor_type": "64bit", 
                "image_id": "centos77x64a", 
                "features_supported": {
                    "set_keypair": 1, 
                    "disk_hot_plug": 1, 
                    "root_fs_rw_online": 1, 
                    "user_data": 1, 
                    "set_pwd": 1, 
                    "root_fs_rw_offline": 1, 
                    "ipv6_supported": 1, 
                    "nic_hot_plug": 1, 
                    "join_multiple_managed_vxnets": 0, 
                    "reset_fstab": 1
                }, 
                "image_size": 20, 
                "image_name": "CentOS 7.7 64bit", 
                "platform": "linux", 
                "os_family": "centos", 
                "provider": "system", 
                "f_resetpwd": 1, 
                "default_passwd": "p12cHANgepwD", 
                "default_user": "root", 
                "features": 64
            }, 
            "graphics_passwd": "2oyPo0IAbpR9jG21Ih6CQnwqZUQfvV1s", 
            "console_id": "qingcloud", 
            "create_time": "2020-09-08T02:29:49Z", 
            "alarm_status": "", 
            "owner": "usr-CT3owI01", 
            "place_group_id": "plg-00000101", 
            "broker_port": "", 
            "security_groups": [
                {
                    "is_default": 1, 
                    "security_group_name": "default security group", 
                    "security_group_id": "sg-xmldyszl"
                }
            ], 
            "vcpus_current": 2, 
            "instance_id": "i-ets7af6q", 
            "instance_type": "s1.large.r1", 
            "memory_max": 2048, 
            "sub_code": 0, 
            "graphics_protocol": "vnc", 
            "label": null, 
            "platform": "linux", 
            "instance_class": 101, 
            "status_time": "2021-04-20T03:23:50Z", 
            "status": "running", 
            "description": null, 
            "cpu_topology": "", 
            "tags": [ ], 
            "transition_status": "", 
            "eips": [ ], 
            "controller": "self", 
            "repl": "rpp-00000002", 
            "broker_host": "", 
            "cpu_oversale_rate": 5, 
            "volume_ids": [ ], 
            "zone_id": "sh1b", 
            "lastest_snapshot_time": null, 
            "instance_name": "", 
            "cpu_model_name": "Intel(R) Xeon(R) Gold 6240 CPU @ 2.60GHz", 
            "root_user_id": "usr-CT3owI01", 
            "dns_aliases": [ ], 
            "volumes": [ ], 
            "security_group": {
                "is_default": 1, 
                "security_group_name": "default security group", 
                "security_group_id": "sg-xmldyszl"
            }, 
            "resource_project_info": [ ]
        }
    ], 
    "total_count": 1, 
    "ret_code": 0
}
```

