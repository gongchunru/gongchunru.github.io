---
title: "OpenAI Codex CLI：本地运行的 AI 编程助手完全指南"
date: 2025-09-09
categories: [AI, Tools]
tags: [Codex, CLI, OpenAI, 开发工具, 编程助手]
image: https://assets.068666.xyz/blog/assets/2025/09/codex-cli-banner.png
---

OpenAI 发布了 Codex CLI，一个可以在本地运行的 AI 编程助手。与基于云端的 Codex Web 不同，Codex CLI 直接在你的电脑上运行，提供更好的隐私保护和响应速度。

## 主要特性

* 🚀 本地运行的 AI 编程助手
* 💻 支持交互式 TUI 界面和命令行模式
* 🔧 内置沙盒环境，安全执行代码
* 📁 智能文件搜索和代码理解
* 🎯 支持多种编程语言和框架
* 🔌 可扩展的 MCP (Model Context Protocol) 支持
* 📝 自定义 AGENTS.md 配置文件

## 安装方式

### 通过 npm 安装（推荐）

```bash
# 标准版本
npm install -g @openai/codex

# Rust 原生版本（性能更好）
npm install -g @openai/codex@native
```

### 通过 Homebrew 安装

```bash
brew install codex
```

### 直接下载二进制文件

访问 [GitHub Releases](https://github.com/openai/codex/releases/latest) 下载适合你平台的二进制文件。

## 基本使用

### 启动交互式界面

```bash
# 启动 TUI 界面
codex

# 带初始提示启动
codex "解释这个代码库的结构"
```

### 非交互式模式

```bash
# 自动化模式
codex exec "修复 lint 错误"

# 全自动模式
codex --full-auto "创建一个待办事项应用"
```

## Slash 命令详解

在 Codex 的聊天界面中，输入 `/` 可以使用以下命令：

### 核心命令
- `/model` - 选择 AI 模型和推理强度
- `/approvals` - 配置自动批准权限
- `/new` - 开始新的对话会话
- `/quit` - 退出 Codex

### 实用工具
- `/diff` - 显示 git 差异（包括未跟踪文件）
- `/mention` - 快速引用文件
- `/status` - 查看会话状态和 token 使用情况
- `/compact` - 压缩对话历史

### 配置管理
- `/init` - 创建 AGENTS.md 配置文件
- `/mcp` - 管理 MCP 工具
- `/logout` - 退出登录

## 高级功能

### 文件搜索技巧

使用 `@` 符号快速搜索和引用文件：

```
@utils.ts  # 搜索 utils.ts 文件
@*.py      # 搜索所有 Python 文件
```

### 对话回溯功能

1. 在空的输入框中按 `Esc` 进入回溯模式
2. 再次按 `Esc` 查看历史消息
3. 重复按 `Esc` 回到更早的消息
4. 按 `Enter` 从选定点重新开始对话

### 自定义提示命令

在 `~/.codex/prompts/` 目录下创建 `.md` 文件：

```bash
# 创建自定义提示
echo "请帮我重构这段代码，提高可读性和性能" > ~/.codex/prompts/refactor.md

# 使用时输入 /refactor
```

### AGENTS.md 配置

Codex 支持分层配置，按优先级查找：

1. `~/.codex/AGENTS.md` - 全局个人配置
2. `项目根目录/AGENTS.md` - 项目共享配置  
3. `当前目录/AGENTS.md` - 局部配置

示例 AGENTS.md：

```markdown
# 项目开发规范

## 代码风格
- 使用 TypeScript 严格模式
- 遵循 ESLint 规则
- 优先使用函数式编程

## 测试要求
- 每个功能都需要单元测试
- 测试覆盖率不低于 80%
```

## 命令行选项

### 常用标志

```bash
# 指定工作目录
codex --cd /path/to/project

# 选择模型
codex --model gpt-4

# 自动批准模式
codex --ask-for-approval=false

# 恢复会话
codex --resume
codex --continue
```

### Shell 补全

生成并安装 shell 补全：

```bash
# Bash
codex completion bash >> ~/.bashrc

# Zsh  
codex completion zsh >> ~/.zshrc

# Fish
codex completion fish >> ~/.config/fish/completions/codex.fish
```

## 实用示例

### 代码审查

```bash
codex "仔细审查这个仓库，提出 3 个高影响力的改进建议"
```

### 自动化测试

```bash
codex "为 utils/date.ts 编写单元测试"
```

### 批量重构

```bash
codex "将所有 *.jpeg 文件重命名为 *.jpg，并更新相关引用"
```

### 安全审计

```bash
codex "查找潜在的安全漏洞并生成安全审查报告"
```

## 配置文件

Codex 的配置文件位于 `~/.codex/config.toml`：

```toml
# 模型配置
[model]
default = "gpt-4"
small_fast = "gpt-3.5-turbo"

# 沙盒配置
[sandbox]
enabled = true
timeout = 30

# MCP 服务器配置
[mcp_servers.my-server]
command = "npx"
args = ["-y", "my-mcp-server"]
```

## 故障排除

### 常见问题

1. **认证失败**：运行 `codex logout` 然后重新登录
2. **网络问题**：检查代理设置和防火墙
3. **权限错误**：确保有足够的文件系统权限

### 调试模式

```bash
# 启用详细日志
RUST_LOG=debug codex

# 查看网络请求
codex --trace
```

## 升级和维护

### 升级 Codex

```bash
# npm 方式
npm update -g @openai/codex

# Homebrew 方式  
brew upgrade codex
```

### 清理缓存

```bash
# 清理会话历史
rm -rf ~/.codex/sessions

# 重置配置
rm ~/.codex/config.toml
```

## 总结

OpenAI Codex CLI 是一个功能强大的本地 AI 编程助手，通过丰富的命令行选项、可定制的配置和智能的代码理解能力，可以显著提升开发效率。无论是代码审查、自动化测试还是项目重构，Codex CLI 都能提供专业的帮助。

配合 AGENTS.md 配置文件和自定义提示，你可以打造一个完全符合项目需求的 AI 助手。现在就开始使用 Codex CLI，体验 AI 驱动的编程新时代吧！
