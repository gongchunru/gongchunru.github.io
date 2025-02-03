---
layout: post
title: Cursor 支持 DeepSeek R1， 新版本更新多项功能
tags: [Cursor]
category: [tools]
comments: true
date: 2025-01-27
modify_date: 2025-01-27 10:00:00
published: true
---
 

目前 AI 编程工具太多，Windsurf， Trae(The Real AI Engineer)， Cursor，Copilot 这里面 Cursor 是最领先的一个，也是价格最贵的一个，我已经付费了 Cursor，时刻关注最新的功能，才能让它物有所值。而随着 DeepSeek R1 的出现，能力提升反而价格下降，Cursor 的这个定价可能没什么优势，就需要看产品能力能不能让用户持续续费。

Cursor 也支持了 DeepSeek R1 ，但是目前 Agent 还不可以用。社区里面已经有人在反馈了。

![DeepSeek R1](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250127150246049.png =75%x)


2025年1月23日 Cursor 更新了[新版本 0.45](https://www.cursor.com/changelog)，增加了一些新功能，我这里介绍下用到的一些功能。

* **.cursor/rules**：用户可以在 .cursor/rules 目录中编写多个仓库级别的规则。Agent 会自动选择要遵循的规则。
* **Composer 总结之前的对话**：当对话变得太长时，你可以开始一个新的对话，同时引用之前的对话内容。
* **Agent 可以看到最近的更改**：Agent 可以使用工具查看你最近的更改。它还可以看到用户消息之间的更改。
* **更好的代码库理解**：我们训练了一个新的代码库理解模型。我们将在未来一周内向所有 0.45 版本的用户推出。
* **Fusion 模型**：我们训练了一个新的标签页模型，在跳转和长上下文方面有了很大的改进。我们也将很快向用户推出这个功能。
* **可选的长上下文**：在标记长文件时，用户可以选择使用高级模型请求更大的上下文窗口。这将使用更多的快速请求。


我下面的内容对能肉眼可见的变更，就是明显的配置项、交互截图展示下，比如 @codebase 这种更好的代码库理解能力，就不太容易测试变化。

## .cursor/rules 目录

![Project Rules Settings](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250127153929996.png)

这部分可以在设置里面新建 `Project Rules`, 然后就可以在项目里面 .cursor/rules 目录下新建一个文件，这次的 rules 文件，后缀是 `.mdc`, 是一种特殊的 Markdown 文件格式,  这次在文件内可以 @某个文件，类似 NotePads 的引用。

文件内容分为了三部分，分别是：
* 描述：描述这个规则的作用。在 Composer 里面会根据用户的要求 Agent 会**自动匹配相关的描述**，再根据描述传递对应的 cursorrule 内容。
* 作用文件范围：描述这个规则作用在哪些文件上，如果一个项目有多种文件，可以针对不同类型的文件来做出不同的要求。
* 规则内容：描述这个规则的具体内容
![Project Rules](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250127135309715.png)



## Composer 总结之前的对话
现在新开一个Composer的时候，可以 `@Summarized Composers`来总结之前的对话，然后继续对话。

如果出现 `No summary available` ，需要从历史里面重新点开之前的对话，触发一次总结。或者等一会会自动出现总结内容，这块体验还不是很好。后续肯定会优化。

![Summarized Composers](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250127105458012.png)

![Summarized Composers](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250127105506831.png)

## Agent 可以看到最近的更改

现在可以 `@Recent Changes` 来查看告诉大模型最近的更改，然后继续对话，可以更好的理解用户的需求。

![Recent Changes UI](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250127135947744.png)


## Large context

新增了设置项
![Large Context Settings](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250127023434415.png)

开启后，如果选中了长文本，会有如下的提示信息出现，消耗更多的额度

![Large Context UI](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250127135252562.png)


## Cursor 如何更新最新版本

Cursor 的版本更新是轮流推送的，用户没办法主动起更新，只能等 Cursor 推送。
不过也可以尝试下面的两个办法：

### 1. 使用 brew 更新   
如果是 macOS 用户可以使用下面的命令强制安装最新版

```
brew install --cask --force cursor
```

### 2. 使用 Cursor 更新
`command/control + Shift + P` 打开命令面板，输入 `update` 然后回车，就可以更新到最新版本。

![Cursor: attempt update](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250127141418613.png)
