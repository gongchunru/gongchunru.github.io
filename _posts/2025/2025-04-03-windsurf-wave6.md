---
title: "Windsurf Wave 6 - 2025-04-03"
date: 2025-04-03 14:00:00 +0800
categories: [人工智能, 开发工具]
tags: [windsurf, codeium, 智能编程]  
comments: true
published: true
layout: post
---

#### 新版本发布

![1.6.1 changelog banner](https://exafunction.github.io/public/changelog/windsurf/1.6.1/161_hero_img.jpg)


#### 部署功能（Beta）

- 使用一个提示词即可将应用部署至 Netlify，域名为 windsurf.build
- 可在 Netlify 中认领你的应用 URL
- 认领后，后续更新可持续部署到同一项目
- 若需部署新站点或更改子域名，只需提示 Cascade 部署到新的子域名
- 对所有用户开放，付费方案可享受更多功能

所有用户每小时限制部署 10 次，免费用户每日可创建 1 个新站点，付费用户则每日可创建 2 个新站点。不论是新项目部署还是现有项目更新，均有上述限制以防止滥用（详情参见文档说明）。

#### 提交消息生成（Beta）

- 在源代码控制面板中点击即可生成提交消息
- 付费用户可用，每次使用无需额外消耗信用额度

#### 记忆功能增强

- Cascade 中新增记忆（Memories）标签页
- 新增编辑 Cascade 自动生成记忆的功能，包括记忆的标题、内容及标签
- 新增搜索 Cascade 自动生成记忆的功能
- 用户可自由开启或关闭自动生成记忆的设置
  - 启用后，Cascade 将自动生成记忆以保留重要上下文
  - 禁用后，仅在你明确请求时生成记忆
![Memories and Rules](https://assets.068666.xyz/blog/assets/2025/04/f30ab4763f31cc7c9e0a4e1d7e346172.png)

#### 长对话功能增强

- 新增 Cascade 对话目录，滚动对话时显示所有历史用户消息
- 对话目录支持快速返回或滚动到任何历史消息
- 改进了与长对话交互时的性能
![long conversation](https://assets.068666.xyz/blog/assets/2025/04/80674de264731252f9154d3ee59af0a9.png)

#### Windsurf  Tab 增强

- Windsurf Tab 新增 Jupyter Notebook 支持
- Windsurf Tab 新增额外的上下文信号，包括 IDE 内搜索

#### 新增 Mac 图标

- 付费用户新增两个应用图标（复古风格和像素冲浪风格）

#### 杂项改进

- Cascade 新对话页面新增工具栏，包含 MCP、预览和部署工具
- Cascade 现支持在 JSON 配置中使用 SSE MCP 服务器
- 修复了“重新加载时打开 Cascade”的设置，当该设置禁用时，新窗口打开时 Cascade 将保持关闭
- Cascade 的输入内容将在新对话页面与活跃对话之间保持不变
- 刷新了 Cascade 的终端界面，“打开终端”按钮的可视性提升，点击后可直接打开 Cascade 终端实例
- Cascade 和用户消息中的带下划线链接现可点击
- 新增用户设置，启用后 Cascade 完成运行时播放声音（Beta）
- 修复了“Remote - SSH”扩展问题，包括自定义 SSH 二进制路径设置
- 合并了来自 VS Code 1.97.0 的更新内容

