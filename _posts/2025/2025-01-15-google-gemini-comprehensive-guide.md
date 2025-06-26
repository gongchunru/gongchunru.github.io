---
layout: post
title: "Gemini CLI：终端里的免费 AI 助手，每天1000次调用"
comments: true
date: 2025-01-15
categories: [AI, Tools]
tags: [Gemini, CLI, Google, 开发工具]
image: https://assets.068666.xyz/blog/assets/2025/06/4d3837e77ff78ce341ac47f4c08f64f8.png
---



Google 刚刚发布了 Gemini CLI，一个开源的命令行 AI 工具。看起来和 Claude Code 差不多，好在是基本上免费。

* Gemini 2.5 Pro 的开源 CLI 工具 
* 支持 100 万 token 的上下文窗口 
* 免费额度：每分钟 60 次请求、每天 1,000 次请求 
* 集成 Google 搜索用于信息补全（grounding） 
* 支持 MCP 和脚本扩展 
* 集成 VS Code（Gemini Code Assist）


直接安装使用
```bash
npm install -g @google/gemini-cli
gemini
```
![Warp 2025-06-25 22.38.55.png](https://assets.068666.xyz/blog/assets/2025/06/4d3837e77ff78ce341ac47f4c08f64f8.png)


项目地址：https://github.com/google-gemini/gemini-cli

然后登录 Google 账户授权，如果报错，可以参考下面的解决办法：

在用户目录下面 `.gemini` 文件夹下创建 `.env` 文件,输入 `export GOOGLE_CLOUD_PROJECT="YOUR_PROJECT_ID"`，它就起作用了。
YOUR_PROJECT_ID 是您的 GCP 项目 ID。请参见此处：https://console.cloud.google.com/

> 来源：https://github.com/google-gemini/gemini-cli/issues/1432



Gemini CLI 的体验也比较顺畅，性价比拉满，也不用太担心封号问题。不过整体的代码能力和使用体验上还是不如 Claude Code。同样的提示词 Claude Code 会给出待办，然后一项项的处理，而 Gemini CLI 就比较粗糙，而且输出很多文字说明。可能是系统提示词的打磨不够，不过现在还是很值得用，期待后面的更新。







