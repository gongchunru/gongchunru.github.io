---
layout: post
title: 字节跳动新出的 Cursor 替代品：Trae
comments: true
date: 2025-01-20 10:00:00 +0800
modify_date: 2025-01-20 10:00:00 +0800
categories: [Tools]
tags: [AI]
image: https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250124142605780.png
---


字节今天发布了一个对标 `Cursor` 的AI编程工具，叫 `Trae`。目前可以免费体验，`claude-3.5-sonnet` 模型可以免费用。

- 地址：[https://www.trae.ai/](https://www.trae.ai/)
- 官方文档：[https://docs.trae.ai/](https://docs.trae.ai/)

## 使用体验
### 下载迁移
目前只支持 `macOS` 版本，官网可以直接进行下载。

软件下载后可以选择从 `VSCode` 或者 `Cursor` 迁移，这块和 `Cursor`、`Windsurf` 的迁移功能是一样的。插件都可以无缝迁移
![CleanShot 2025-01-20 at 13.00.24@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250120134835868.png){: .d-flex .justify-content-center .w-75}
![CleanShot 2025-01-20 at 13.00.13@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250120134841140.png){: .d-flex .justify-content-center .w-75}

![CleanShot 2025-01-20 at 13.18.13@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250120134908853.png){: .d-flex .justify-content-center .w-75}

### 设置

目前设置很简单，主要就是这个了，默认会索引代码库。模型无法选择，只有 `claude-3.5-sonnet` 

![CleanShot 2025-01-20 at 13.29.23@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250120135001883.png){: .d-flex .justify-content-center .w-75}


### Chat 模式
`Chat` 模式，侧边聊天功能，这块就是问答模式，支持引用代码以及上传图片。


![CleanShot 2025-01-20 at 13.24.32@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250120134932800.png){: .d-flex .justify-content-center .w-75}

聊天生成的代码支持：
1. 复制
2. 插入到光标位置
3. 插入到新文件
4. 代码的相应更改可以应用到相应的文件

### 内联聊天
`command + i` 可以直接在代码文件内聊天

![CleanShot 2025-01-20 at 13.52.11.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250120135235789.png){: .d-flex .justify-content-center .w-75}

### Agent 模式

`Trae` 这里叫 `Builder`，目前还是个 `Beta` 版本，但是创建文件、编辑文件、执行命令都具备了。但是对比 `Cursor` 还少了很多功能，比如：联网能力，索引文档等。
目前测试的情况，还经常会遇到中断的情况。

这里有个功能特别好，**恢复到以前的版本**：
* 但是恢复后是无法再次复原回来的，不过你可以让 AI 再次生成。
* 只支持当前的聊天窗口里面恢复，历史会话无法恢复。
* 最多恢复最近 10 轮对话的版本。
![CleanShot 2025-01-20 at 13.31.59@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250120135320882.png){: .d-flex .justify-content-center .w-75}

![CleanShot 2025-01-20 at 13.27.06.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250120135302494.png){: .d-flex .justify-content-center .w-75}


## 总结
1. `Trae` 是一个很好的替代品，目前免费使用
2. 考虑到免费，基本功能都已经具备，可以作为日常使用或者替代品
2. 缺点是功能还不完善 ，不支持切换模型，联网能力，索引文档，
5. 没有多行自动补全，类似 `Cursor Tab`，还只是基于上下文的补全下文
4. 不支持全局的提示词配置（类似 `Cursorrules`）

