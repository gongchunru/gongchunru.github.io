---
layout: post
title: Obsidian 与 Cursor 的完美配合：打造高效写作环境
tags: [Obsidian, Cursor, AI]
category: [tools]
comments: true
date: 2024-12-28
modify_date: 2024-12-28 00:40:48
image: https://cdn.jsdelivr.net/gh/gongchunru/image/img/20241228133608267.png
author: gchr
---

之前介绍过 `Obsidian` 的一个 图床插件文章 ，这次介绍下 `Cursor` 和 `Obsidian` 配置使用的问题。可以翻到最后看结论。

# Cursor 中编辑
最近使用 `Cursor` 后，在任何地方写文字都会感觉很慢，需要一个自动补全功能。这可能也是 AI 带来的问题，变得比较追求 “高效”。

我现在解决的办法就是用 `Cursor` 打开 `Obsidian` 的笔记文件夹，因为 `Obsidian` 的笔记都是 `md` 文件，所以 `Cursor` 编辑起来也是很轻松，而且联网的信息问答和整理后可以自动汇总成文档。一些文档还可以让 AI 自动增加元数据头。

![联网](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20241227235108673.png)

![生成元数据](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20241227235159879.png)


### 遇到的问题
这里的一个问题就是上传图片到图床的时候，还是需要在 `Obsidian` 中粘贴图片，这样更加方便的自动上传，具体可以参考另一篇文章：

# obsidian-smart-composer
不过 `Obsidian` 最近上面有了一款插件 完全就是 `Cursor` 版本的 `Obsidian` ，上面有了 `Cursor` 的核心功能 `Composer` ，名字就叫 `obsidian-smart-composer`

```
https://github.com/glowingjade/obsidian-smart-composer
```

![obsidian-smart-composer](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20241228113106589.png)

该插件的主要特点包括：

1. 上下文感知聊天
   - 通过 `@<文件名>` 选择笔记作为对话上下文
   - 支持网页链接和图片作为额外上下文
   - 支持 `YouTube` 字幕内容作为上下文

2. 智能编辑功能
   - AI 可以提供文档修改建议
   - 一键应用修改内容

3. 笔记库智能搜索
   - 使用 `Cmd+Shift+Enter` 执行语义搜索
   - 自动找到相关笔记作为上下文

4. 灵活的模型支持
   - 支持自定义` API Key` 和模型
   - 可通过 `Ollama` 使用本地模型
   - 支持自定义提示词和模板

这个插件也有一些问题：
* 插件和 `Canvas Mindmap` 冲突，如果安装了 `Canvas Mindmap` 就不能 Apply
* 没有 `Cursor` 那么智能，还是依赖于大模型的能力

# 剪藏插件
这里再介绍个好玩的。
`Obsidian` 官方出了一个浏览器剪藏插件 可以直接剪藏到 `Obsidian` 并转换为 `Markdown` 格式，并且可以配置 AI 总结能力

![ 配置自己的 apikey](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20241228004006169.png)

![写提示词 ](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20241228004011767.png)


![ 总结 ](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20241228004017581.png)

![ 剪藏 ](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20241228004023536.png)

# 结论
 `Obsidian` 插件丰富更适合有复杂的编辑，比如图片超链接各种自动化的插件。
 `Cursor` 更适合外部资料搜寻、AI 整理资料，文章编辑的续写补全，还有最后的润色和纠错。
 可以两个软件同时打开一起用或者看个人侧重。