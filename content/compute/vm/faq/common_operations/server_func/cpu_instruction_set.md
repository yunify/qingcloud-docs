---

title: "CPU体系结构指令集"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 30
draft: false
enableToc: false

---

QingCloud 云服务器支持的 CPU 体系结构包括 **Westmere**, **SandyBridge**, **IvyBridge**, **Haswell**, **Broadwell**, **Skylake**, **CasecadeLake**, **QEMU Virtual CPU**。基础型云服务器和企业型e2云服务器不支持修改CPU体系结构，其中基础型云服务器CPU体系结构为**QEMU Virtual CPU**，企业型e2云服务器CPU体系结构为**CascadeLake**。各体系结构支持的指令集分别是：

| 体系结构 | 支持的指令集 |
|:-------------|:-------------|
| Westmere | aes apic clflush cmov cx16 cx8 de fpu fxsr lahf_lm lm mca mce mmx msr mtrr nx pae pat pge pni popcnt pse pse36 sep sse sse2 sse4.1 sse4.2 ssse3 syscall tsc |
| SandyBridge | aes apic avx clflush cmov cx16 cx8 de fpu fxsr lahf_lm lm mca mce mmx msr mtrr nx pae pat pclmuldq pge pni popcnt pse pse36 rdtscp sep sse sse2 sse4.1 sse4.2 ssse3 syscall tsc tsc-deadline x2apic xsave |
| IvyBridge | aes apic avx clflush cmov cx16 cx8 de erms f16c fpu fsgsbase fxsr lahf_lm lm mca mce mmx msr mtrr nx pae pat pclmuldq pge pni popcnt pse pse36 rdrand rdtscp sep smep sse sse2 sse4.1 sse4.2 ssse3 syscall tsc tsc-deadline vme x2apic xsave |
| Haswell | aes apic avx avx2 bmi1 bmi2 clflush cmov cx16 cx8 de erms fma fpu fsgsbase fxsr invpcid lahf_lm lm mca mce mmx movbe msr mtrr nx pae pat pcid pclmuldq pge pni popcnt pse pse36 rdtscp sep smep sse sse2 sse4.1 sse4.2 ssse3 syscall tsc tsc-deadline x2apic xsave |
| Broadwell | 3dnowprefetch adx aes apic avx avx2 bmi1 bmi2 clflush cmov cx16 cx8 de erms fma fpu fsgsbase fxsr hle invpcid lahf_lm lm mca mce mmx movbe msr mtrr nx pae pat pcid pclmuldq pge pni popcnt pse pse36 rdseed rdtscp rtm sep smap smep sse sse2 sse4.1 sse4.2 ssse3 syscall tsc tsc-deadline x2apic xsave |
| Skylake | 3dnowprefetch abm adx aes apic arat avx avx2 avx512cd avx512f bmi1 bmi2 clflush clwb cmov constant_tsc cx16 cx8 de eagerfpu erms f16c fma fpu fsgsbase fxsr hle hypervisor invpcid invpcid_single kaiser lahf_lm lm mca mce mmx movbe mpx msr mtrr nopl nx pae pat pcid pclmulqdq pdpe1gb pge pni popcnt pse pse36 rdrand rdseed rdtscp rep_good retpoline rtm sep smap smep sse sse2 sse4.1 sse4.2 ssse3 syscall tsc tsc_deadline_timer vme x2apic xgetbv1 xsave xsavec xsaveopt xtopology |
| CascadeLake | 3dnowprefetch abm acpi adx aes aperfmperf apic arat arch_capabilities arch_perfmon art avx avx2 avx512bw avx512cd avx512dq avx512f avx512vl avx512_vnni bmi1 bmi2 bts cat_l3 cdp_l3 clflush clflushopt clwb cmov constant_tsc cpuid cpuid_fault cqm cqm_llc cqm_mbm_local cqm_mbm_total cqm_occup_llc cx16 cx8 dca de ds_cpl dtes64 dtherm dts epb ept erms est f16c flexpriority flush_l1d fma fpu fsgsbase fxsr hle ht hwp hwp_act_window hwp_epp hwp_pkg_req ibpb ibrs ibrs_enhanced ida intel_ppin intel_pt invpcid invpcid_single lahf_lm lm mba mca mce md_clear mmx monitor movbe mpx msr mtrr nonstop_tsc nopl nx ospke pae pat pbe pcid pclmulqdq pdcm pdpe1gb pebs pge pku pln pni popcnt pse pse36 pts rdrand rdseed rdt_a rdtscp rep_good rtm sdbg sep smap smep smx ss ssbd sse sse2 sse4_1 sse4_2 ssse3 stibp syscall tm tm2 tpr_shadow tsc tsc_adjust tsc_deadline_timer vme vnmi vpid x2apic xgetbv1 xsave xsavec xsaveopt xsaves xtopology xtpr |
| QEMU Virtual CPU | fpu de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pse36 clflush mmx fxsr sse sse2 syscall nx lm rep_good nopl xtopology cpuid tsc_known_freq pni cx16 x2apic hypervisor lahf_lm |