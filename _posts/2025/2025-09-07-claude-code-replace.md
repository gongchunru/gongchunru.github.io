---
title: "整理几个 Claude Code 的替代 API 模型"
date: 2025-09-07
categories: [Claude]
tags: [Claude]
---


这里记一下，一些免费用 Claude  Code 的方法，和 用国产模型替代的方法。比如新的GLM-4.5、Kimi-k2-0905 等都有着不错的代码能力。Kimi-k2-0905 的工具调用成功率甚至达到了 100%



## 1 魔搭社区
https://www.modelscope.cn/ 注册每天能用 2000 次的模型调用，单个模型可以用 500 次，这里选择 GLM-4.5 模型为例，如下配置后可直接启动 Claude Code

```bash
export ANTHROPIC_AUTH_TOKEN="ms-apikey"
export ANTHROPIC_BASE_URL="https://api-inference.modelscope.cn"
export ANTHROPIC_MODEL="ZhipuAI/GLM-4.5"
export ANTHROPIC_SMALL_FAST_MODEL="ZhipuAI/GLM-4.5"
```

## 2 硅基流动

官方给了两个方法，可以去参考下，我这里还是习惯用第二种。注册有一定的免费额度，不过最新的 kimi-k2-0905 模型似乎还没有上线。
https://docs.siliconflow.cn/cn/usercases/use-siliconcloud-in-ClaudeCode

```bash
export ANTHROPIC_BASE_URL="https://api.siliconflow.cn/"
export ANTHROPIC_MODEL="moonshotai/Kimi-K2-Instruct"    # 可以自行修改所需模型，目前仅支持非思考模型
export ANTHROPIC_API_KEY="YOUR_SILICONCLOUD_API_KEY"    # 请替换 API Key
```


## 3 智谱官网

这里可以购买开发者工具包，给的量很足，首月 20 块钱。
https://bigmodel.cn/claude-code

![CleanShot 2025-09-07 at 23.41.55@2x.png](https://assets.068666.xyz/blog/assets/2025/09/7c9c80eda4b824adc57178a8644ad932.png)

```bash
export ANTHROPIC_BASE_URL=https://open.bigmodel.cn/api/anthropic
export ANTHROPIC_AUTH_TOKEN=YOUR_API_KEY
```

当然这个在国外也很火
![z.ai](https://assets.068666.xyz/blog/assets/2025/09/fab1fb2f338fb2915c66df80c33dc730.png)


## 4 anyrouter

这个主要也是之前疯狂传播的拉人给额度的，应该是一个 Claude Code 中转站。拉一个人给 50 刀，每天签到送 25 刀，最近试了下还是可以用。https://anyrouter.top/register?aff=F3sN


```
export ANTHROPIC_BASE_URL="https://anyrouter.top"
export ANTHROPIC_AUTH_TOKEN="sk-apikey"
```

## 5 Github Copilot 

先安装一个认证中转程序，然后配置地址启动 Claude 就可以用了。

```bash
npx copilot-api@latest auth
npx copilot-api@latest start --claude-code
```

```bash
export ANTHROPIC_API_KEY=sk-dummy 
export ANTHROPIC_BASE_URL=http://localhost:4141
```



### Groq
速度很快，但是限量，不建议用，

免费等级是：每天1000次，每分钟最多输出10k token，每天300k token 

![image.png](https://assets.068666.xyz/blog/assets/2025/09/47ee8779955ad0376f517785635564c7.png)

Developer账号也有限制 
每天不限次，每分钟最多请求250k token，每天500k token 
![image.png](https://assets.068666.xyz/blog/assets/2025/09/a9dad2406e080d7b42dcc31260314d3c.png)

这里因为段时间 token数量的限制，基本没办法在 Claude Code 里面使用

这里是用 Claude Code Router 配置

```
npm i -g @musistudio/claude-code-router
```

```
{
  "PORT": 3456,
  "Providers": [
    {
      "name": "groq",
      "api_base_url": "https://api.groq.com/openai/v1/chat/completions",
      "api_key": "gsk_apikey",
      "models": [
        "moonshotai/kimi-k2-instruct-0905"
      ],
      "transformer": {
        "use": [
          [
            "maxtoken",
            {
              "max_tokens": 16384
            }
          ],
          "groq"
        ]
      }
    }
  ],
  "Router": {
    "default": "groq,moonshotai/kimi-k2-instruct-0905"
  }
}
```
用下面的命令启动
```
ccr code 
```


还有很多其他的办法，添加 Gemini apikey，或者用 Codex , Qwen Coder 等等，大家可以分享下。工具的选择越来越多，一起使用多个 AI 同时干活 各取所长。
![8cd6191472b4c5e39eec917a042b8af0.jpg](https://assets.068666.xyz/blog/assets/2025/09/5a1d04e96d1ba9928a366216d9b3c4e4.jpg)




