---
layout: post
title: 修改GCP用户密码并开启root登录
tags: vps Linux
category: tips
comments: true
date: 2018-12-29
modify_date: 2018-12-29 16:30:00 +08:00

---



在`Google Cloud Platform`创建的`VM`实例只能通过【在浏览器窗口打开】。这里使用其他终端工具连接的设置。

<!-- more -->



## 1. 在`GCP`网页端登录`ssh`

## 2. 通过`sudo su`命令切换到`root`用户

```bash
sudo su //切换到root用户
```



## 3. 修改SSH配置文件`/etc/ssh/sshd_config`

```bash
vi /etc/ssh/sshd_config //编辑文件
```

找到PermitRootLogin和Pa	sswordAuthentication

```bash
# Authentication:
LoginGraceTime 120
PermitRootLogin yes //默认为no，需要开启root用户访问改为
yesStrictModes yes 

# Change to no to disable tunnelled clear text passwords
PasswordAuthentication yes //默认为no，改为yes开启密码登陆
```



## 4. 重启`SSH`服务使修改生效，`Ubuntu`同样适用

```bash
/etc/init.d/ssh restart
```



## 5. 进行以下操作，可使用`putty`、`iterm`等客户端通过用户名和密码访问实例

### 5.1 为现有用户设置一个密码，先查看当前登陆

```bash
who  //使用who查看当前登陆用户
mapgun pts/0 2017-03-21 06:40
root pts/1 2017-03-21 07:00
```



### 5.2 可以看到当前登陆了`mapgun`和`root`用户，修改指定用户密码即可

```bash
passwd mapgun //mapgun改为想要修改的用户名
```



### 5.3 新增一个用户

```bash
useradd name  //新增用户
passwd name  //设置用户密码
```



### 5.4 设置`root`密码

如果使用root密码登陆，需要设置root用户密码。

```bash
passwd root
```

 