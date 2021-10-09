#!/bin/bash

# use eth0 to decide if mq is on
is_mq_on=0
cpus=`lscpu | grep "^CPU(s)" | awk '{print $2}'`
if [ $cpus -gt 1 ]; then
    dev=`readlink /sys/class/net/eth0/device | awk -F"/" '{print $NF}'`
    if [ "x$dev" != "x" ]; then
        qlen=`cat /proc/interrupts | grep ${dev}-input | wc -l`
        if [ $qlen -gt 1 ]; then
            is_mq_on=1
        fi
    fi
fi

if [ $is_mq_on -eq 1 ]; then
    # set multi-queue
    service irqbalance stop
    ifs=( $(ifconfig -s -a | grep -v Iface | awk '{print $1}' | grep ^eth) )
    for ifname in ${ifs[@]}; do
        dev=`readlink /sys/class/net/$ifname/device | awk -F"/" '{print $NF}'`
        if [ "x$dev" == "x" ]; then
            continue
        fi

        # set combined
        irqs=( $(cat /proc/interrupts | grep ${dev}-input | awk -F":" '{print $1}') )
        qlen=${#irqs[@]}
        if [ $qlen -le 1 ]; then
            continue
        fi
        ethtool -L $ifname combined $qlen

        # set smp affinity and xps
        i=0
        for irq in ${irqs[@]}; do
            # irq
            exp=`expr $qlen - $i - 1`
            affinity=`printf "%x" $((2 ** $exp))`
            echo $affinity > /proc/irq/$irq/smp_affinity

            # xps
            xps=`printf "%x" $((2 ** $i))`
            echo $xps > /sys/class/net/$ifname/queues/tx-$i/xps_cpus

            i=`expr $i + 1`
        done
    done
else
    # set interface RPS
    service irqbalance stop
    rps=`expr $((2 ** $cpus)) - 1`
    rps=`printf "%x" $rps`
    ifs=( $(ifconfig -s -a | grep -v Iface | awk '{print $1}' | grep ^eth) )
    for ifname in ${ifs[@]}; do
        echo $rps > /sys/class/net/$ifname/queues/rx-0/rps_cpus
    done
fi

