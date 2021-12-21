---
title: "验证结果"
description:  
keywords: 
weight: 40
collapsible: false
draft: false
---

## 操作步骤

1. 进入 Kibana 页面，详细操作可参见[访问 Kibana](/bigdata/elk/manual/cluster_info/#kibana-基本用法)。
2. 执行以下命令，在 Kibana 界面查看结果。
    
    ```
    GET stu/_search
    ```

    从下图中可以看到，MySQL 数据已正确同步到 Elasticsearch。
    <img src="/bigdata/databench/_images/bestpractice_kibana.png" alt="Kibana" style="zoom:50%;" />

