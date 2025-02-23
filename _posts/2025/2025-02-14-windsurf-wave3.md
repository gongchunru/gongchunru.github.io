---
layout: post
title: Windsurf Wave 3 更新：MCP、自定义图标、Tab跳转和涡轮模式
categories: [Codeium]
description: Codeium发布了Windsurf编辑器的第三波重大更新，带来了多项激动人心的新功能
keywords: Codeium, Windsurf, Wave 3, AI, 编程
image: https://exafunction.github.io/public/hero/hero-windsurf-wave-3.jpg
---



## Wave 3 简明亮点：

- **模型上下文协议（MCP）支持**：为Cascade提供更多工具调用能力
- **Tab键跳转**：文本编辑器预测式AI的新增强功能
- **"Turbo"极速模式**：让Cascade自动执行所有终端命令
- **拖放图片功能**：呼声最高的图片输入优化
- **自定义应用图标**：献给付费用户的小心意

完整更新日志请见[此处](https://codeium.com/changelog)。

---

对于新加入Windsurf家族的用户：我们将重大功能更新集合打包称为"Wave"。在前两波更新中推出图像输入、记忆功能、网络搜索等Cascade专属功能后，Wave 3致力于全面提升Windsurf编辑器（含Cascade）的全方位体验，打造最佳AI编辑器。

让我们深入解析Wave 3...

## 模型上下文协议（MCP）支持

2024年11月，Anthropic发布了[模型上下文协议](https://www.anthropic.com/news/model-context-protocol)（简称MCP）。其核心是建立统一规范，让数据供应商通过MCP服务器暴露信息，供AI应用通过MCP客户端调用。过去数月间，MCP生态蓬勃发展，各类服务已构建[众多MCP服务器](https://github.com/modelcontextprotocol/servers)。虽然我们已为代码库、URL等关键数据源定制了解析检索逻辑，但仍有大量结构化数据源值得Cascade这类AI流程系统调用。

Wave 3正式推出Cascade的MCP服务器支持。您可通过Windsurf设置面板的JSON配置指定MCP服务器：

配置完成后，Cascade即可像调用代码搜索、终端命令执行或代码编辑等工具一样调用MCP服务。这将作为可选工具加入调用列表（非强制调用，仅在适当时触发）。

关于MCP服务器数量限制、积分消耗等详情，请参阅[官方文档](https://docs.codeium.com/windsurf/mcp)。
![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250214082511652.png)

## Tab键跳转
类似 Cursor 的 Tab 键跳转，这个慢慢在补全
![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250214083542017.png)

虽然Cascade是Windsurf编辑器的核心，但文本编辑器中的预测式AI体验对提升开发效率同样关键。生成式AI代码助手始于数年前的[自动补全](https://codeium.com/autocomplete)功能，通过"Tab"键接受光标处的预测内容。

去年推出[超级补全](https://codeium.com/supercomplete)，使"Tab"键不仅能接受光标处补全，还能执行光标位置无关的增删改操作。

现在是"Tab"键新能力——自动跳转到下一个编辑位置，即"Tab键跳转"。

Wave 3为所有用户（包括免费版）提供无限制的自动补全和超级补全建议。付费用户额外享有无限制的Tab键跳转建议，以及可在设置中启用的高算力"快速模式"。

![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250214083630030.png)

---

除核心功能外，Wave 3还包含多项体验优化：

## *Turbo*极速模式

Wave 1推出的自动终端命令功能允许设置白名单/黑名单控制自动执行的命令。用户反馈显示，最迫切需求是允许Cascade自主执行迭代所有步骤——于是Turbo模式应运而生，现已面向所有个人用户开放。

```
Always auto - execute commands unless they are in your deny list .
```
![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250214083024666.png)

## 拖放图片功能

首波更新推出的多模态图像输入已助力[网页构建](https://x.com/windsurf_ai/status/1861925680348618965)、[Figma设计转译](https://x.com/windsurf_ai/status/1874948790928687194)等场景。现在响应社区呼声，正式支持图片拖放输入。

## 自定义图标

特别致敬付费用户（目前仅限Mac）：你们的创造力与热情远超预期！为此我们准备了专属应用图标，供您在程序坞中自定义展示。
![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250214083655402.png)


另附Wave 2以来的其他重要更新：

## DeepSeek-v3、DeepSeek-R1、o3-mini、Gemini 2.0 Flash

表面是模型支持扩展，背后是对各类模型"工具调用"能力的深度适配。虽然Anthropic的Claude 3.5 Sonnet仍是工具调用的最佳选择，但多样性至关重要。新增模型可通过下拉菜单选择：

不同模型的积分消耗如下：
- Claude 3.5 Sonnet：1积分
- GPT-4o：1积分
- o3-mini：1积分
- DeepSeek-v3：0.25积分
- DeepSeek-R1：0.5积分
- Gemini 2.0 Flash：0.25积分

执行过程中将实时显示积分消耗，包括错误步骤的零扣费情况：

## Windsurf Next
可以参考：
预发布版本，面向愿意尝鲜的早期用户。虽然可能存在未打磨的细节，但可第一时间体验最新功能。[了解更多](https://codeium.com/blog/windsurf-next)




