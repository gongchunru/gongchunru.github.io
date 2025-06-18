---
title: JetBrains Junie 内测体验：AI Agent 的新尝试
description: JetBrains 推出的 AI Agent Junie 内测体验，对比 AI Assistant 和其他工具的优劣
author: gchr
date: 2025-03-25 11:33:00 +0800
categories: [AI, IDE]
tags: [junie, jetbrains, ai-agent]
pin: false
math: false
mermaid: false
image: https://assets.068666.xyz/blog/assets/2025/03/00e1360d2363d5ce05d22a68f036733e.png
---

## Junie 是什么？

JetBrains 于 2025 年 1 月 23 日推出了一款全新的 AI Agent 产品 - Junie，目前处于内测阶段。这个产品可以类似 Cursor 的 Agent 模式，可以自动根据用户意图执行代码或命令。

根据 JetBrains 的介绍，Junie 可以：

1. 深度集成 JetBrains IDE，充分利用 IDE 中的项目上下文信息
2. 自主完成 CRUD 操作等复杂任务，包括分析项目结构、检查依赖、创建文件等
3. 运行测试和代码检查，确保生成的代码质量
4. 支持 Python、Java 和 Kotlin 等主流语言

![CleanShot 2025-03-30 at 01.07.39@2x.png](https://assets.068666.xyz/blog/assets/2025/03/00e1360d2363d5ce05d22a68f036733e.png)

#### 能干啥
作为 JetBrains 官方的 AI Agent，虽然是一个插件，但是 Junie 最大的优势还是在于与 IDE 的深度集成：

- 可以直接访问和理解项目结构
- 能够运行和验证测试
- 可以执行代码检查
- 适配 JetBrains IDE 的工作流，比如执行完用户的意图后，Junie 会自动 build、运行和测试，在这个自动 build 的过程中，你可以在 IDE 中看到整个构建过程。

#### 怎么干
这个插件的 Agent 可以分为两大步：

1. Plan： 
    Plan 就是输入问题后，左侧会列出一个步骤 
2. Act： 
    Act 就是执行左侧 plan 生成的这些步骤，每一步中又包含了多个 tools 的调用，比如：搜索代码、调用大模型、代码 Apply、执行命令、构建项目等等。

执行完步骤也是可以看到相关的代码 diff 视图，但是没办法选择片段去接受。我只能是要么选择 Done 全部接受，要么是选择 Decline 全部拒绝，这个体验太难受。

Agent 对话框输出的内容无法输出中文，不过写代码或者写注释不受影响。

对于项目中的业务代码，如果没有描述清楚，一样可能搜索后判断错误。

输出内容的时候，只有下面几个预置的选项（其他地方没任何可配置的内容了）：
1. 选择文件，可以选择多个
2. 勾选 `Brave Mode`，这个模式会自动执行命令
3. 如果选择 `Project guidelines`，会创建一个隐藏文件，然后执行 Agent 分析项目完善这个文件，现在感觉分析的不是很好。定位类似于 Cursor 的 `.cursorrules` 文件

![选项](https://assets.068666.xyz/blog/assets/2025/03/071cb975ffb7271cd4d590cdaa5f85c6.png)

如果不是强依赖 JetBrains 的 IDE，目前这个插件的体验其实很一般。有兴趣可以在下面的地址加入 waitlist 等待内测资格。


> https://www.jetbrains.com/zh-cn/junie/#join-waitlist






