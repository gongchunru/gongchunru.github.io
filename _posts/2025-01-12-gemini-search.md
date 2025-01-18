---
layout: post
title: "Gemini 搜索"
comments: true
date: 2025-01-12
categories: [AI]
tags: [Gemini]
image: https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250112230345643.png
---

# Gemini 搜索



Google 开发者博客有篇文章：[Gemini API 和 Google AI Studio 新增了与 Google 搜索结合的 Grounding 功能](https://developers.googleblog.com/en/gemini-api-and-ai-studio-now-offer-grounding-with-google-search/)，介绍说可以使得开发者获得更准确、更新鲜的 AI 响应，并提供了相关的支持链接和搜索建议。

而且最近GitHub 上也有了一个可以自行搭建的项目:[Gemini-Search](https://github.com/ammaarreshi/Gemini-Search)，我也搭建了一个，来对比其他 AI 搜索产品来测试下效果。

> 文章只是主观瞎测试，没啥依据，可能错误很多，仅供娱乐。
{: .prompt-info }


当然也可以在 [Ai Studio](https://aistudio.google.com/app/live) 中直接使用：

![AI Studio](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250112112218948.png)


## 主要测试逻辑

用主流的 AI 联网搜索来测试下同一个Prompt ，看看联网搜索的效果，我会把这些效果全部复制到一个 MD 文件中，然后给各个 AI 让它给出一个评分，最后我会把各个 AI 的评分结果汇总到一张表中，然后给出一个平均得分，可以直接到最后看评分。

下面的图片只放出来一部分，不然太占地方。

```
Gemini Search （Grounding with Google Search）比其他 AI 搜索来说 有什么不一样的地方吗？
```

![CleanShot 2025-01-12 at 11.24.56@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250112113158877.png)

![CleanShot 2025-01-12 at 10.21.45@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250112113318349.png)


## AI 评分

![CleanShot 2025-01-12 at 11.35.42@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250112113931227.png)

![CleanShot 2025-01-12 at 11.36.15@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250112113940252.png)






## AI模型互评得分表

下表展示了各AI模型对其他模型搜索回复质量的评分（满分10分）：

| 评分方\被评方 | Gemini | Perplexity | ChatGPT | Kimi | DeepSeek | Claude |
|--------------|--------|-------------|---------|------|-----------|--------|
| Gemini       | 9.5    | 9.0         | 8.0     | 9.0  | 8.5      | 7.0    |
| Perplexity   | 9.5    | 8.5         | 8.0     | 8.5  | 8.0      | 7.5    |
| ChatGPT      | 9.0    | 8.5         | 7.0     | 9.0  | 8.0      | 7.0    |
| Kimi         | 9.0    | 8.5         | 8.0     | 9.0  | 8.5      | 7.0    |
| DeepSeek     | 9.0    | 8.5         | 8.0     | 8.5  | 9.0      | 7.5    |
| Claude       | 8.5    | 7.5         | 6.0     | 8.0  | 9.0      | 7.0    |
| 平均得分      | 9.08    | 8.42         | 7.50    | 8.67  | 8.50      | 7.17    |

**平均得分排名**：
1. Gemini 9.08  
2. Kimi 8.67
3. DeepSeek 8.50
4. Perplexity 8.42
5. ChatGPT 7.50
6. Claude 7.17

## 主要特点
- 事实搜索提供更准确、更新鲜的信息
- 减少 AI 应用中的幻觉现象
- 匹配信息源，增强应用的可靠程度
- API 中启用 'google_search_retrieval' 工具
- 可通过动态检索配置控制查询是否需要 Grounding
- 支持 Gemini 1.5，Gemini 2.0


## 成本
- Google AI Studio 免费测试
- API 使用需付费，$35 / 1000 次查询，不便宜

相比大把的免费搜索，这个可能有点优势，不过这个付费也不是必须的，效果提升有限，值不值得花钱就看个人需求了。
