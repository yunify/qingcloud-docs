---
title: "使用示例"
---

## 使用示例

大多数基于 AWS S3 开发的工具都有自定义访问地址的方法，下面以一些常用工具为例，说明如何对接 QingStor

### AWS SDK for Python

1. 安装 Boto 类库:

   ```bash
   > pip install boto
   ```

1. 编写程序:

   ```bash
   > cat boto-to-qingstor.py
   import boto
   conn = boto.connect_s3(
       aws_access_key_id='PLLZOBTTZXGBNOWUFHZZ',
       aws_secret_access_key='MnIjI58zC8AX07xotHXcm6grwFgOXhaJQHkTCX2X',
       host='s3.pek3a.qingstor.com'
   )
   bucket = conn.get_bucket('mybucket')
   key = bucket.get_key("mykey")
   ```

### AWS CLI

1. 安装 AWS CLI 工具:

   ```bash
   > pip install awscli
   ```

1. 编辑配置文件:

   ```bash
   > cat ~/.aws/config
   [profile qingstor]
   region = pek3a
   output = json
   s3 =
       signature_version = s3v4
   ```

1. 设置访问密钥:

   ```bash
   >  cat ~/.aws/credentials
   [qingstor]
   aws_access_key_id = PLLZOBTTZXGBNOWUFHZZ
   aws_secret_access_key = MnIjI58zC8AX07xotHXcm6grwFgOXhaJQHkTCX2X
   ```

1. 命令行执行:

   ```bash
   > aws s3api put-object --bucket mybucket --key puppy.jpg --body ~/Pictures/puppy.jpg --endpoint-url 'https://s3.pek3a.qingstor.com' --profile qingstor
   {
       "ETag": "\"c3872b49cb244269aad8cd4275a41c4a\""
   }
   ```

### s3fs

1. 按照文档的步骤编译并安装 s3fs:

   ```plain_text
   https://github.com/s3fs-fuse/s3fs-fuse/blob/master/README.md
   ```

1. 设置访问密钥（注意需要设置密钥文件的权限为 600）:

   ```bash
   > cat  /root/.s3fs/credentials
   PLLZOBTTZXGBNOWUFHZZ:MnIjI58zC8AX07xotHXcm6grwFgOXhaJQHkTCX2X
   EOF
   > chmod 600 /root/.s3fs/credentials
   ```

   > 假定 ACCESS_KEY_ID 的值为 PLLZOBTTZXGBNOWUFHZZ
   >
   > ACCESS_KEY_SECRET 的值为 MnIjI58zC8AX07xotHXcm6grwFgOXhaJQHkTCX2X

1. 挂载 bucket 到本地目录:

   ```bash
   > mkdir -p /mnt/mybucket
   > s3fs mybucket /mnt/mybucket -o passwd_file=/root/.s3fs/credentials -o url=http://s3.pek3a.qingstor.com
   > df -T | grep s3fs
   s3fs           fuse.s3fs 274877906944        0 274877906944   0% /mnt/mybucket
   ```

1. 测试文件系统操作:

   ```bash
   > echo 'hello world' > /tmp/hello.txt
   > cp -v /tmp/hello.txt /mnt/mybucket/
   ‘/tmp/hello.txt’ -> ‘/mnt/mybucket/hello.txt’
   > ls -l /mnt/mybucket/hello.txt
   ---------- 1 root root 4635 Aug 11 23:26 /mnt/mybucket/hello.txt
   > cat /mnt/mybucket/hello.txt
   hello world
   ```

1. 配置开机自动挂载 s3fs :

   第一步，创建 /etc/passwd-s3fs 文件:
   ```bash
   > cat <<EOF > /etc/passwd-s3fs
   PLLZOBTTZXGBNOWUFHZZ:MnIjI58zC8AX07xotHXcm6grwFgOXhaJQHkTCX2X
   EOF
   > chmod 600 /etc/passwd-s3fs
   ```

   > 注解 假定 ACCESS_KEY_ID 的值为 PLLZOBTTZXGBNOWUFHZZ
   >
   > ACCESS_KEY_SECRET 的值为 MnIjI58zC8AX07xotHXcm6grwFgOXhaJQHkTCX2X

   第二步，修改 /etc/fstab 文件，在 /etc/fstab 中加入如下命令：
   ```bash
   s3fs#your_bucket_name your_mount_point fuse _netdev,url=your_url,allow_other 0 0
   ```
   其中上述命令中的 your_xxx 信息需要根据您的 bucket name 等信息填入
   以下为一个实际例子：
   ```bash
   s3fs#mybucket /mnt/mybucket fuse _netdev,url=http://s3.pek3a.qingstor.com,allow_other 0 0
   ```

   第三步，保存 /etc/fstab 文件，执行 mount -a 命令，如果没有报错，则说明设置正常。

   如果您的系统为 centos6.5 ，还需要执行下面的命令：
   ```bash
   > chkconfig netfs on
   ```

   至此您的系统已经成功的配置了开机自动挂载 s3fs

### s3cmd

1. 安装 s3cmd 工具:

   ```bash
   > pip install s3cmd
   ```

1. 编辑配置文件:

   ```bash
   > cat ~/.s3cfg
   [default]
   access_key = PLLZOBTTZXGBNOWUFHZZ
   secret_key = MnIjI58zC8AX07xotHXcm6grwFgOXhaJQHkTCX2X
   bucket_location = pek3a
   host_base = s3.pek3a.qingstor.com
   host_bucket = %(bucket)s.s3.pek3a.qingstor.com
   ```

1. 命令行执行:

   ```bash
   > s3cmd put /tmp/hello.txt s3://mybucket/
   upload: '/tmp/hello.txt' -> 's3://mybucket/hello.txt'  [1 of 1]
   4635 of 4635   100% in    0s   523.36 B/s  done
   ```
