--- 
title: Cursor 成本优化
date: 2025-02-12
tags: [Cursor]
category: [tools]
comments: true
published: false
---



 ## Cursor 额度消耗太快怎么办？

**500次的额度，两天干没了？**

![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250212233805204.png)

### 1. 看情况使用 Agent 模式

Agent 模式可能会消耗 2 次额度，所以如果只是优化代码片段，可以使用 Chat 模式。复杂任务可以选择 Agent 模式，比如涉及多步操作，联网、知识库，然后自动执行命令，自动修改多个文件。

```
GPT-4, GPT-4o, and Claude 3.5 Sonnet are counted as premium models. Agent uses 2 premium requests per message.
```

目前项目的 Agent 模式和 normal 模式效果不明显，下个版本会改善。
未来的设计稿如下：
![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250212204314101.png)

### 2. 使用下面项目来参与试用：

```
https://github.com/hamflx/cursor-reset
```

> ⚠️ 注意，一个人试用，请不要纷享账号，会导致试用次数被锁定只有 50 次。

### 3. 使用 Windsurf 的 Agent 模式

使用 [trae(the real ai engineer)](https://trae.ai/) ，目前免费，也有 Agent 能力，随便问。

使用 [Windsurf](https://codeium.com/windsurf) / [Windsurf-Next](https://codeium.com/blog/windsurf-next)  的 Agent 目前比 Cursor 更直观。 可能在功能上操作按钮少了一些。 而且价格只需要 10美金 一个月。最低可以做到一个月 6.9 美金。每一次 Agent 都可以看到消耗的 Credit 数量。

还有一个 [aider](https://aider.chat/docs/install.html) 的开源方案，自己对接 API Key ，有 Agent 能力，但是使用配置略复杂。

![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250212235033059.png)

### 4. 如果你用 macOS ChatGPT 客户端

可以安装插件 ChatGPT - Work with VS Code
然后按下快捷键 `option + shift + 1` 使用快速配对的小窗模式，直接使用 ChatGPT 来读取 Cursor 当前的代码来辅助开发。这样可以用到 o1 或者 o3-mini-high 模型。

![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250212203518840.png)









