---
layout: post
title: "Cherry Studio 低成本知识库"
comments: true
date: 2025-01-12
categories: [AI]
tags: [Gemini]
published: true
image: https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250118155841377.png
---

最近发现一个大而全的 跨平台 ChatBot：[Cherry Studio](https://github.com/CherryHQ/cherry-studio)，还能很方便的构建知识库。


# 软件特点
用了一圈发现以下特点：

1 可以通过 api 添加各种模型
2 上传文档就能本地新建知识库
3 各种 AI 工具直接打开
4 知识库配合 deepseek 3 ，加上 COT 提示词 效果不错
5 还能画图 
6 有简单 Artifacts 功能，直接渲染代码
7 可以多个模型一起回答问题，就是样式是直接铺下来的。

缺憾是现在还没有插件，还不能联网搜索。

# 构建知识库
可以去 siliconflow 上注册个账号，可以免费使用 `BAAI/bge-m3 ` 嵌入模型来对模型进行向量化。
然后在知识库里面上传文档，等待向量化完成。

![配置模型](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250116013528136.png)

![上传知识库](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250116013624803.png)



# 在聊天工具里面选择知识库

效果还行，可以多个同时输出进行比较，不过这个样式感觉不如 WebUI 舒服。

![选择知识库](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250116014004207.png)

![多个模型一起回答](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250116013516464.png)


![回答效果](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250116013642876.png)

Deepseek-V3 现在价格也很便宜，所以用起来还是很香的。 `https://hyperbolic.xyz/` 这个网站现在注册还送 10 刀额度，可以使用 Deepseek-V3



