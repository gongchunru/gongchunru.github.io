---
title: DeepSeek API 站点推荐
tags: [DeepSeek-R1]
category: [tools]
comments: true
date: 2025-01-27
modify_date: 2025-01-27 10:00:00
published: true
---




随着 DeepSeek R1 的全球爆火，官网已经时不时不可用，API 也经常挂掉。
![status.deepseek.com](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250127234112098.png)

![官网限流](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250127234125404.png)


下面推荐几个 API 站点，作为替代品使用。

## 纳米 AI 搜索 app

应用商店下载 `纳米 AI 搜索` 这个 APP，登录后，在 `AI 机器人` 里面找到 `DeepSeek-R1（360高速在线）` AI 机器人，可以免费使用。但是**不能联网**， 在网页版上 还没有发现这个 AI 机器人。
![纳米 AI 搜索](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250127234331959.JPEG)

## Groq

官网地址：`https://console.groq.com/playground`，可以直接网页版使用，也可以获取 `API Key` 使用。

首先是 groq ，这是一家上面部署了 `DeepSeek-R1-Distill-Llama-70B` 模型，目前免费使用，但是有限速。目前是限制一分钟 30 次，一天 1000 次，一次请求 6000 个 token。主要的瓶颈可能是在一分钟请求 6000 个 token 上。 **而且这个模型是 70B 的，所以效果一般**。

* https://console.groq.com/playground 这个页面直接用。
* https://console.groq.com/keys 这个页面获取 `API KEY`

获取后，在 `ChatBot` 里面填入 `API KEY` 就可以使用。

![Groq ChatWise](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250127234840357.png)


这一家主要的特点就是快，什么模型都快的离谱。可以看看下面这个视频，没有任何的加速。我用的是 `ChatWise` 这个软件，可以参考之前的文章：

## Hyperbolic

[Hyperbolic](https://app.hyperbolic.xyz/) 注册账号免费送 10 美金，上面可以选择 `DeepSeek-R1`, `DeepSeek-V3` 等模型。
不过我用的时候，周一这天 API 也挂了，可以作为一个备用。


![Hyperbolic](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250127234246495.png)

## together.ai

在 playground 上可以直接使用 `DeepSeek-R1` 模型，如果使用 API 的话，需要付费，而且 API 的费用比官网贵很多，**不推荐付费使用**。新账号赠送 $1 ，我这里之前注册的账号，我上去看了下是 $25 额度。

![together.ai](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250127234224082.png)


如果大家有其他更好用的 API 站点，欢迎留言推荐。






