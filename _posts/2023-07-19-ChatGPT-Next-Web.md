---
layout: post
title: ChatGPT-Next-Web 设置多个 API Key 轮询
tags: [ChatGPT, AI]
category: [tips]
comments: true
date: 2023-07-19
modify_date: 2023-07-19 20:51:04
---

[ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web) 是一个方便搭建使用的ChatGPT 工具。因为可以使用 API Key，而且不用担心代理，又可以在任何设备浏览器上使用。无疑是我使用最多的工具。无奈官方的不支持多个 API Key 轮询调用，一个免费的 key 很容易就触发了使用频率上限。所以修改了下代码就可以多个API Key 轮询使用。

# 修改代码

找到项目里面的 `server.ts` 文件，文件路径：

```java
app/config/server.ts
```

找到第39行，增加如下内容:
```javascript
  const apiKeys = (process.env.OPENAI_API_KEY ?? '').split(',')
  const apikey = apiKeys[Math.floor(Math.random() * apiKeys.length)]
```
修改 `return` 里面的 `apiKey` 属性值。修改后的内容，如图：
![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/202307192101161.png)

# 修改环境变量

在`vercel` 的控制台，找到项目里面的 `Settings`，下拉找到 `Environment Variables` ,编辑 `OPENAI_API_KEY` ，里面的内容就是 OpenAI 的 API Key了，用逗号分割就好。

```json
sk-xxxxx01,sk-xxxxx02,sk-xxxxx03
```
