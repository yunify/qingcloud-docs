---
title: "ReachTopology"
description: 本小节主要介绍如何快速使用 Storm 集群。 
keyword: Storm
weight: 20
collapsible: false
draft: false
---

ReachTopology 基于 Storm 可实时计算 Twitter 网站上任意 URL 的 Reach 值，并通过 Storm 分布式 RPC 对外提供服务。

## 操作步骤

1. [登录客户端节点](/bigdata/storm/manual/65_storm_client)。
2. 执行如下 storm jar 命令以提交 ReachTopology。

    ```
    /opt/storm/bin/storm jar /opt/storm/examples/storm-starter/storm-starter-1.1.1.jar org.apache.storm.starter.ReachTopology ReachTopology remote
    ```

3. 创建用于发送 RPC 请求的客户端，为此，需创建一个基于 Maven 的 Java 工程，添加 storm-core 依赖包并创建 TestReachTopology 类, 该测试代码如下所示。

    ```java
    package com.qingcloud;

    import org.apache.storm.utils.DRPCClient;
    import org.apache.storm.utils.Utils;
    import java.util.Map;

    public class TestReachTopology {

    public static void main(String[] args) throws Exception {

        if (args.length < 1) {
            throw new IllegalArgumentException("Invalid parameter");
        }
        String host = args[0];
        Map conf = Utils.readStormConfig();
        DRPCClient client = new DRPCClient(conf, host, 3772);
        String[] urlsToTry = new String[]{ "foo.com/blog/1", "engineering.twitter.com/blog/5", "notaurl.com"   };
        for (String url : urlsToTry) {
            System.out.println("Reach of " + url + ": " + client.execute("reach", url));
        }
    }
    }
    ```

4. 用于测试的 jar 包已经打好放在客户端节点了，可以执行如下命令，该命令中 “i-9hhwul25” 为 master 节点的 leader 角色，参数使用的是任意一个 master 节点 host，可以直接在客户端节点 host 文件中找到。

    ```
    java -cp /opt/storm/examples/storm-drpc-client/storm-example-1.1-SNAPSHOT.jar com.qingcloud.TestReachTopology i-9hhwul25
    ```

    > **注意**
    >
    > 官方这个测试用例较为复杂，需要请求 master 节点的 leader 角色，可以在 Storm UI 上查看到 leaer 角色的 host，当删除 leader 后，需要重新测试此流程。

    执行结果如下图所示。

    ![](../../../_images/rpc_result.png)
