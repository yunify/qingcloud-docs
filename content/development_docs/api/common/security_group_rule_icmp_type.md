---
title: "ICMP 类型及代码"
description: 
draft: false
---


| 类型值 | 类型说明 | 代码值 | 代码说明 |
| --- | --- | --- | --- |
| 8 | Echo | 0 | Echo request |
| 0 | Echo Reply | 0 | Echo reply |
| 3 | Destination Unreachable | 0 | Destination network unreachable |
|   |   | 1 | Destination host unreachable |
|   |   | 2 | Destination protocol unreachable |
|   |   | 3 | Destination port unreachable |
|   |   | 4 | Fragmentation required, and DF flag set |
|   |   | 5 | Source route failed |
|   |   | 6 | Destination network unknown |
|   |   | 7 | Destination host unknown |
|   |   | 8 | Source host isolated |
|   |   | 9 | Network administratively prohibited |
|   |   | 10 | Host administratively prohibited |
|   |   | 11 | Network unreachable for TOS |
|   |   | 12 | Host unreachable for TOS |
|   |   | 13 | Communication administratively prohibited |
|   |   | 14 | Host Precedence Violation |
|   |   | 15 | Precedence cutoff in effect |
| 4 | Source Quench | 0 | Source quench (congestion control) |
| 5 | Redirect Message | 0 | Redirect Datagram for the Network |
|   |   | 1 | Redirect Datagram for the Host |
|   |   | 2 | Redirect Datagram for the TOS & network |
|   |   | 3 | Redirect Datagram for the TOS & host |
| 9 | Router Advertisement | 0 | Router Advertisement |
| 10 | Router Solicitation | 0 | Router discovery/selection/solicitation |
| 11 | Time Exceeded | 0 | TTL expired in transit |
|   |   | 1 | Fragment reassembly time exceeded |
| 12 | Parameter Problem: Bad IP header | 0 | Pointer indicates the error |
|   |   | 1 | Missing a required option |
|   |   | 2 | Bad length |
| 13 | Timestamp | 0 | Timestamp |
| 14 | Timestamp Reply | 0 | Timestamp reply |
| 15 | Information Request | 0 | Information request |
| 16 | Information Reply | 0 | Information reply |
| 17 | Address Mask Reques | 0 | Address mask request |
| 18 | Address Mask Reply | 0 | Address mask reply |
| 30 | Traceroute | 0 | Information request |
