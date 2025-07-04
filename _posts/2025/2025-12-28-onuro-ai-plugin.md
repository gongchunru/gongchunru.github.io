---
title: "Onuro：一款专注上下文管理的 AI 编程助手"
date: 2025-12-28
categories: [AI, 编辑器插件, 开发工具]
tags: [Onuro, AI助手, 上下文管理, 语音编程, 多模态, 代码补全, VSCode]
---

在 AI 编程助手百花齐放的今天，Onuro 以其独特的上下文管理理念和多模态交互能力脱颖而出。作为一款专注于提升开发体验的 AI 插件，Onuro 不仅提供了强大的代码生成能力，更在上下文管理、语音交互和工具集成方面有着独到的设计。

## 核心特色：智能上下文管理

### 1. 文件级上下文控制

Onuro 的上下文管理系统设计得相当精巧：

- **当前焦点文件**：自动包含当前编辑器标签页作为上下文，支持高亮特定文本范围来强调重点部分
- **开放标签页管理**：点击文件图标可以从已打开的标签页中选择/取消选择额外文件
- **项目文件搜索**：通过"Add Context"功能搜索并选择项目中的文件或文件夹，文件夹会包含所有嵌套文件

这种设计的巧妙之处在于，它鼓励开发者**只包含当前任务所需的文件上下文**，这不仅有助于降低成本，更重要的是能显著提升输出质量。

### 2. 多样化上下文来源

除了文件上下文，Onuro 还支持：

- **URL 内容**：直接粘贴 URL，AI 会使用网页内容作为上下文
- **文件上传**：支持文档、图片、音频和视频等多种格式

### 3. 对话上下文优化

默认情况下，Onuro 只保留最近 5 轮对话作为上下文，这种自动管理机制在保持最佳性价比的同时确保了相关性。更贴心的是，你可以通过"Set as Important"功能将关键信息标记为重要，这些消息会被标记🚩并始终保留在上下文中。

## 强大的 AI 工具集（Premium 功能）

### 文件操作能力

- 创建新文件
- 编辑现有文件  
- 移动或重命名文件
- 删除文件
- **自我纠错**：能够自动修正自己的错误

### 终端集成

- 代替你运行命令
- 处理包安装
- 启动开发服务器
- 运行测试

### 代码库搜索

**语义搜索**：
- 基于含义和上下文查找代码
- 语义化定位函数和组件
- 理解自然语言查询
- 需要通过 `Settings > IDE > Embeddings` 进行初始设置
- 限制在 10,000 个（已索引）文件以下的项目

**Grep 搜索**：
- 使用精确字符串匹配或正则表达式模式查找特定代码
- 无需设置即可使用

### API 文档搜索

- 搜索最新的 API 文档
- 获取关于库和框架的准确信息
- 访问最新的方法和最佳实践
- 确保代码建议是最新的

## 创新的语音编程体验

Onuro 的语音模式让无手编程成为可能：

### 启动方式
- 点击右下角的麦克风图标
- 使用快捷键：`Option/Alt + T`

### 内置语音命令
- **"Send Message"**：发送当前语音输入给 AI
- **"Stop Output"**：立即停止 AI 的当前输出流
- **"Stop Recording"**：退出语音模式

### 多语言支持
通过 `Settings > General > Advanced > Speech Commands` 可以：
- 设置首选主要语言
- 添加可选的第二语言以支持双语使用
- 自定义触发短语

## 多模态交互能力

Onuro 的多模态支持让交流更加直观：

### 视频输入
最适合演示交互元素：
- 用户流程和交互
- Bug 复现
- UI 动画
- 带语音解释的屏幕录制
- 性能问题展示

### 图片输入  
适合非交互式视觉内容：
- UI/UX 讨论和反馈
- 错误消息和视觉 bug
- 代码截图
- 设计原型
- 图表和图解

### 音频输入
理想的声音分享场景：
- 音乐样本和音效
- 声音设计讨论
- 音频质量问题
- 语音语调和音调

## 代码补全与模型切换

### 智能代码补全
- 按 `Option/Alt + X` 随时触发智能代码补全
- 按 `Tab` 接受建议，按其他任意键取消

### 灵活的模型选择
支持多种 AI 模型：
- **Automatic**：自动为查询选择最佳模型
- **特定提供商**：可选择 Anthropic、Google 等特定提供商的模型
- **模型变体**：如 Claude-Sonnet、Claude-Haiku、Gemini-Pro、Gemini-Flash 等

## 个性化定制

通过 `Settings > Customization > Details to Remember` 可以给 AI 添加需要记住的详细信息：
- 项目相关详情
- AI 行为指导
- 关键词响应指令
- 工具使用说明

## 总结

Onuro 在 AI 编程助手领域的独特之处在于其**精细化的上下文管理**和**多模态交互能力**。相比于其他 AI 编程工具，Onuro 更注重开发者对上下文的精确控制，这种设计哲学既能提升 AI 响应的准确性，又能有效控制使用成本。

语音编程和多模态输入功能让 Onuro 在某些场景下具有明显优势，特别是在需要演示问题、讨论 UI/UX 或进行无手操作的情况下。

如果你正在寻找一款注重上下文管理、支持多模态交互的 AI 编程助手，Onuro 值得一试。其 Premium 功能虽然需要付费，但提供的文件操作、终端集成和代码库搜索等能力确实能显著提升开发效率。
