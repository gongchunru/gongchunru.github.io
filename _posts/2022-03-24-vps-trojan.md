---

layout: post
title: 一键部署 trojan
tags: [vps,Linux,trojan]
category: [tips]
comments: true
date: 2022-03-04
modify_date: 2022-03-04 16:30:00 +08:00
---



> 用的网上的一键脚本，这里会简单记录一下遇到的问题。

### 一键部署脚本：

```
bash <(curl -s -L <https://github.com/V2RaySSR/Trojan/raw/master/Trojan.sh>)
```

### 遇到问题

#### 证书问题

如果遇到 证书申请失败等类似问题，使用如下命令安装 SOCAT：这里是 `Ubuntu` 系统。

```
apt-get update && apt-get install curl -y && apt-get install cron -y && apt-get install socat -y
```

手动申请证书：邮箱可以替换为自己的，或者不动。

```
curl <https://get.acme.sh> | sh -s email=xxx@example.com
```

#### 申请域名遇到的问题

> 这里申请的是 freedom 的免费域名，有效期一年。

不显示免费域名问题：

这里的问题是，登录了账号后去搜索域名可能因为个人信息地址和用户 IP 不一致导致没有显示，可以开隐身窗口先选中域名，最后付款的时候再登录购买。

### 后续操作

- 修改配置

```
/usr/src/trojan/server.conf
```

- 重启 trojan

```
systemctl restart trojan
```