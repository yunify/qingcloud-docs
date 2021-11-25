---
title: "提交作业"
linkTitle: "提交作业"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 10
---

### 通过脚本提交作业

通过脚本提交作业，更容易阅读，同类型的作业可以复用脚本，修改关键的几个参数即可

提交作业脚本： run_xhpl.aip.offload

提交作业方法：csub < run_xhpl.aip.offload

注意：这里有个<符号

脚本内容见下图：

![img](../_images/submit_job.png)

## 通过命令行提交作业

```
#csub

Usage: csub [-h] [-V] [-B] [-H] [-I | -Ip | -Is | -K] [-N] [-r] [-x]
        [-a esub_parameters] [-b [[month:]day:]hour:minute] [-C core_limit]
        [-c [hour:]minute[/host_name | /host_model] | -cn]
        [-cwd job_current_work_dir]
        [-cwdc job_current_work_dir]
        [-app|-A profile_name]
        [-D data_limit] [-e | -eo err_file]
        [-E "pre_exec_command [argument ...]"]
        [-ENV "none" | "[~var_name[,~var_name]...][var_name=value[,var_name=value]...]"]
        [-f "local_file op [remote_file]" ...]
        [-F file_limit] [-G user_group] [-g job_group]
        [-i input_file | -is input_file]
        [-J job_name | -J "job_name[index_list]%job_limit"
        [-k "checkpoint_dir [checkpoint_period] [method=method_name]"
        [-L login_shell]
        [-m "host_name[+[pref_level]] | host_group[+[pref_level]] ..."]
        [-M mem_limit] [-n min_processors[,max_processors]]
        [-o | -oo out_file] [-P project_name]
        [-p process_limit] [-q "queue_name ..."]
        [-R "res_req"] [-sp priority]
        [-rnc resize_notify_command]
        [-S stack_limit] [-t [[month:]day:]hour:minut]
        [-u mail_user] [-w ’dependency_expression’]
        [-W [hours:]minutes[/host_name | /host_model]]
        [-XF] [-Zs] [-pack job_submission_file] 
        -I | -Ip | -Is  交互方式 
        -i input_file 输入文件 
        -J job_name 作业名称 
        -m "host_name" 使用机器 
        -n core_num 使用核数量  
        -o output_file 输出文件  
        -q "queue_name" 队列  
        -R "res_req" 资源需求表达式 
```

无参数缺省队列，非交互模式，1个核

提交后台运行作业

csub -o test.log -e test.err -n 56 -cwd ${PWD} ./run.sh
