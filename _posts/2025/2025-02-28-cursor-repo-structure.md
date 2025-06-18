---
title: "Cursor Repo Structure"
date: 2025-02-28
---




让 cursor 输出项目结构，来更好的理解大模型，有一些软件也能做到这种效果，比如 RepoPrompt。如果我们想在 Cursor 中实现也可以。
![RepoPrompt](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250228014027224.png =75%x)

## 需求如下

当我新增、变更一个文件的时候，能自动输出和维护下面这种项目结构：

![文件结构](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250228012817026.png =75%x)


当我新增、变更一个目录的时候，能自动输出和维护下面这种项目目录结构：
![目录结构](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250228012858655.png)



## 创建一个脚本
这脚本是用来输出这样的结构，方便后续大模型的理解项目和携带项目结构给大模型。两个脚本内容太多，点击阅读原文来去获取脚本内容。

这里需要安装 `tree` 命令，在 mac 上安装命令如下：
```bash
brew install tree
```

![脚本](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250228013203835.png =75%x)



## 创建一个 MDC 文件
这里的 alwaysApply 设置为 true，每次请求都会判断是否需要更新项目结构。

````
---
description: 
globs: 
alwaysApply: true
---
# Agent Instructions

If you create a new file(s), pleas run the following command afterwards to update the project documentation.

```bash ~/.scripts/update_structure.sh```


If you create a new folder(s), pleas run the following command afterwards to update the project documentation.

```bash ~/.scripts/update_structure_folder.sh```

````


## 运行
一定要选择 Agent 模式。然后输入需求后， Cursor 会自动执行脚本，并输出项目结构的 MDC 文件。
![运行](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250228013228365.png =75%x)

![运行](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250228013238861.png =75%x)



## AI 交流群

![IMG_8774.JPG](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250228014114291.JPG =50%x)



