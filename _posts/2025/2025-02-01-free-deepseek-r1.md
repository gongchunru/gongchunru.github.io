---
title: 两个免费满血版 DeepSeek R1 API 推荐
tags: [DeepSeek-R1]
category: [tools]
comments: true
date: 2025-02-01
modify_date: 2025-02-01 10:00:00
published: true
---

之前推荐了一些可以使用的第三方 DeepSeek R1 ，但是有一些是蒸馏模型，或者价格很贵或者没有 API 提供。这里推荐两个满血版 DeepSeek R1，有免费额度，并且有 API 提供。


## 硅基流动

在[硅基流动](https://cloud.siliconflow.cn/i/xx9iYlW0)  注册一个账号，可以免费获得 14元的余额，可以用来消费大部分模型，比如 DeepSeek-R1、DeepSeek-V3。可以使用我这个邀请链接你和我都会获得 14元的余额（大概 2000万Tokens）。 

```
https://cloud.siliconflow.cn/i/xx9iYlW0
```

模型显示用的是华为云昇腾云服务部署。
![模型](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250201133843856.png)


### 获取 API Key

注册后，点击 `API 密钥` 可以新建一个 `API 密钥`。

![获取 API Key](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250201133856134.png)

### 使用 API
这里推荐使用 `Cherry Studio` 这个工具，可以直接配置硅基流动的 API Key。可以点击【管理】 直接添加 DeepSeek-R1, DeepSeek-V3 模型。

![添加模型](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250201133906500.png)


### 测试
最后在聊天创建选择 `DeepSeek-R1` 模型，可以直接使用。最后测试输出速度大概在 30token/s。深度思考的部分也能完美显示出来。


![Cherry Studio22.gif](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250201141907290.gif)


![输出](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250201133918154.png)



## NVIDIA

在这里网站里面注册，就会赠送 1000 积分，也就是 1000 次请求。注册后，同样是这个网址，打开里面有获取 API Key 的地方。

```
https://build.nvidia.com/deepseek-ai/deepseek-r1
```

![获取 API Key](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250201140704418.png)


### 使用 API
这里同样以 Cherry Studio 为例，添加模型。可以参考下面的图，模型名称是：`deepseek-ai/deepseek-r1`

![添加模型](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250201140711533.png)

NVIDIA 的 API 速度也不错， 一秒钟大概有20多 token

## 最后

如果思考效果和官方差距很大，可以尝试把这个 Prompt 写在 System Prompt 中。来源：[DeepSeek-R1 System Prompt](https://baoyu.io/blog/deepseek-r1-system-prompt)

```
You are DeepSeek-R1, an AI assistant created exclusively by the Chinese Company DeepSeek. You'll provide helpful, harmless, and detailed responses to all user inquiries. For comprehensive details about models and products, please refer to the official documentation.

## Key Guidelines:

1. **Identity & Compliance**

- Clearly state your identity as a DeepSeek AI assistant in initial responses.
- Comply with Chinese laws and regulations, including data privacy requirements.
2. **Capability Scope**

- Handle both Chinese and English queries effectively
- Acknowledge limitations for real-time information post knowledge cutoff (2023-12)
- Provide technical explanations for AI-related questions when appropriate
3. **Response Quality**

- Give comprehensive, logically structured answers
- Use markdown formatting for clear information organization
- Admit uncertainties for ambiguous queries
4. **Ethical Operation**

- Strictly refuse requests involving illegal activities, violence, or explicit content
- Maintain political neutrality according to company guidelines
- Protect user privacy and avoid data collection
5. **Specialized Processing**

- Use <think>...</think> tags for internal reasoning before responding
- Employ XML-like tags for structured output when required

Knowledge cutoff: {{current_date}}
```



