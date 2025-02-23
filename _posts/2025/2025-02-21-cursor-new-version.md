---
title: Cursor 新版本 0.46 版本速览
tags: [Cursor]
category: [tools]
comments: true
date: 2025-02-22
modify_date: 2025-02-23 10:00:00
published: true
image: https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250222025247947.png
---

# Cursor 新版本速览

我提前体验了 0.46 版本，不到一天的时间。更多变动可能没注意到，或者和最终的版本还有差别，难免有遗漏和错误的地方。

## 右侧 Chat 面板大变动

Cursor 即将发布的大版本更新是 0.46，我提前体验了新版本，并记录下变化。

最大变化是 UI 的改版，右侧的 AI Pane 变为一个统一的 Chat 面板。不再有 Composer 和 Chat 两个窗口。

![CleanShot 2025-02-22 at 02.04.37@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250222025247947.png){: .d-flex .justify-content-center .w-50}

在 Chat 面板中，输入框下面有一个新的选项下拉，可选择的范围分别是：Agent、Ask、Edit。可以使用快捷键 `Cmd + .` 快速切换。

这里解释这几种模式与之前版本的对应关系：
* Agent 对应之前的 Composer 下的 Agent 模式
* Edit 对应之前的 Composer 中的 Normal 模式
* Ask 对应之前的 Chat 模式

选择不同模式时，可选择的模型会自动高亮，比如当我选择 Agent 的时候，gpt-4 和 claude-3.5-sonnet 就自动高亮了。DeepSeek-R1 类似的模型就无法使用，如果你选择了类似的在 Agent 里面无法使用的模型会提示：

```
Model deepseek-r1 doesn't have good agent support yet. Start a new thread using edit or ask mode for better results.
```

![image.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250222025621495.png){: .d-flex .justify-content-center .w-50}

你仍然可以继续使用，但在 Agent 模式下可能无法触发某些 `Tools` 调用。

在非 `yolo` 模式下，现在有一个友好的选项，可以选择执行 `yolo` 模式，后续可自动执行命令。
![CleanShot 2025-02-22 at 01.54.04@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250222032544166.png){: .d-flex .justify-content-center .w-50}

## Chat 里面的 @ 功能

`@Files` 和 `@Folders` 合并为 `@Files & Folders` 一个指令
增加 `@Code` 指令
之前介绍的 `@/` 可以呼出文件筛选，但是这个版本这里失效了，不知是 feature 还是 bug。

输入 `/` 这里多了个 `Disable Iterate on Lints` / `Enable Iterate on Lints` 选项，可以快速选择开或者关。这里的操作对应在设置 Features 里面 `Iterate on Lints` 选项。

在这里你可以 `@Terminal`，把终端中的上下文直接带入大模型中。

![CleanShot 2025-02-22 at 02.57.24@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250222032147627.png){: .d-flex .justify-content-center .w-50}

## Cmd/Ctrl + K 快捷键

这里弹出的输入框，可以输入 `@` 来呼出 `Code` 和 `Web` 的指令。

![CleanShot 2025-02-22 at 02.24.43@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250222032047136.png){: .d-flex .justify-content-center .w-50}

## 设置

这里最明显的变化就是：
1. 单独增加了 Rules 和 MCP 菜单，可见后面对这两部分的重要性吧，当然这两部分的可玩性也很高。现在 MCP 也可以在 yolo 模式下执行了，不需要再手动点击确认。

2. 在 Features 里面也去掉了一些设置，比如 Auto context。

3. 也增加了一些选项，比如 `Iterate on Lints` 选项，还有 `Web Search Tool` 选项。

![CleanShot 2025-02-22 at 03.21.09@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250222032201278.png){: .d-flex .justify-content-center .w-50}

## 其他变更

Cursor Tab 里面增加了一个 `Snooze` 按钮，点击弹窗可以设置禁用 Cursor Tab 的时长。当然这个设置可以通过命令快捷入口搜索出来。
![CleanShot 2025-02-22 at 02.00.14@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250222031908900.png){: .d-flex .justify-content-center .w-50}

![CleanShot 2025-02-22 at 03.19.51@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250222032217482.png){: .d-flex .justify-content-center .w-50}

## 新主题

好像是新增了两个主题，分别是 Cursor Dark Anysphere 和 Cursor Dark Midnight。

![Cursor Dark Midnight](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250222031639836.png){: .d-flex .justify-content-center .w-75}

![Cursor Dark Anysphere](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250222031647439.png){: .d-flex .justify-content-center .w-75}

## 总结

一个很大的好处是，在一个 Chat 里面，我可以先选择 `Ask` 模式下的 DeepSeek-R1 模型来设计方案，然后再切换到 `Agent` 中的 Claude 3.5 Sonnet 来写代码。

## 一些小问题

已经没了 Composer，但是还有它的痕迹。设置的 `Beta` 菜单下面，按下 `Shift + Cmd + A` 搜索 `Composer`，发现还是有很多 `Composer` 的痕迹。

![CleanShot 2025-02-22 at 02.46.04@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250222031729725.png){: .d-flex .justify-content-center .w-50}

![CleanShot 2025-02-22 at 03.23.41@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250222032421883.png){: .d-flex .justify-content-center .w-50}

Chat 的历史记录偶尔样式会乱，可能不是正式版，有问题也正常。

## 欢迎关注公众号

回复 `cursor` 获取最新版本下载地址

![公众号](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250112223749749.png){: .d-flex .justify-content-center .w-50}