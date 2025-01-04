---
title: 使用 Cursor 高效翻译文章的实践分享
author: gchr
date: 2025-01-04 10:00:00 +0800
categories: [Tools, AI]
tags: [cursor, translation, ai, tools]
---


# 使用 Cursor 高效自动翻译文章的实践分享

最近我使用 Cursor 这款 AI 驱动的编辑器翻译了 Simon Willison 的一篇关于 2024 年大语言模型发展的长文。在翻译过程中，我深刻体会到了 Cursor 在辅助翻译方面的强大能力。今天我想分享一下使用 Cursor 进行文章翻译的经验和技巧。

## 使用 Cursor 翻译文章
Cursor 可以联网读取文章，又可以创建文件，有 Agent 可以自动执行，还读取本地的多个文件。
创建一个 Cursor 项目，在 Composer 中让 Cursor 翻译文章，如果只是输入链接让 Cursor 翻译，会发现一直翻译不全，多次执行还是会有问题。
这个时候我们需要告诉 Cursor 创建待办事项。

```
创建一个文件 process.md ，记录下每一步翻译到了哪一段。翻译完一段就标记下，翻译下一段的时候，从刚刚翻译后的地方起步再翻译，防止遗漏内容。
```

完整的 Prompt 如下：
![CleanShot 2025-01-04 at 14.36.56@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250104143837813.png)

这里 Cursor 执行的时候，执行完一个主题就会标记完成一个主题
![image.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250104144232569.png)

直到最后完成了所有的主题翻译
![CleanShot 2025-01-04 at 14.42.58@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250104144330600.png)


这里参考了 宝玉的科技文章翻译 Prompt [自用的“科技文章翻译 GPT”和它的 Prompt](https://baoyu.io/blog/prompt-engineering/my-translator-bot "自用的“科技文章翻译 GPT”和它的 Prompt")

这里还触发了 Cursor 的 Agent 执行上限 最多自动执行 25 次，不过可以输入 `continue` 继续执行。

![Cursor 2025-01-03 14.19.25.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250104143856014.png)

## Prompt
这里附上完整的 Prompt
```
帮我翻译文章 @https://simonwillison.net/2024/Dec/31/llms-in-2024/  

新建一个 md 文件：2025-01-03-llms-in-2024  
并且新建一个文件 process.md ，记录下每一步翻译到了哪一段。翻译完一段就标记下，翻译下一段的时候，从刚刚翻译后的地方起步再翻译，防止遗漏内容。  

要求：  
- 翻译要完整，不能遗漏  
- 文章内的图片，需要保留图片的原始链接，用 md 语法保留  
- 文章内的超链接 也需要保留下来  
- 翻译时要准确传达原文的事实和背景。  
- 即使上意译也要保留原始段落格式，以及保留术语，例如 FLAC，JPEG 等。保留公司缩写，例如 Microsoft, Amazon 等。  
- 同时要保留引用的论文，例如 [20] 这样的引用。  
- 对于 Figure 和 Table，翻译的同时保留原有格式，例如：“Figure 1: ”翻译为“图 1: ”，“Table 1: ”翻译为：“表 1: ”。  
- 全角括号换成半角括号，并在左括号前面加半角空格，右括号后面加半角空格。  
- 输入格式为 Markdown 格式，输出格式也必须保留原始 Markdown 格式  
- 以下是常见的 AI 相关术语词汇对应表：  
* Transformer -> Transformer  
* Token -> Token  
* LLM/Large Language Model -> 大语言模型  
* Generative AI -> 生成式 AI
```