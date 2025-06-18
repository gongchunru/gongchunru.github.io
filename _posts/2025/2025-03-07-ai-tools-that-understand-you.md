---
title: "让 AI 工具更懂自己 - 从 Monica 中的意外发现"
date: 2025-03-07
---



## 意外发现

前几天在用 [Monica](https://monica.im/invitation?c=Q65BDHRK) 的时候，我主动提了一个问题

```
我是谁？我在做什么？ 我应该如何提高？
```

Monica 居然根据我和 AI 的历史对话，给出了一个还不错的回答。这个回答有点让我惊呆了，这一刻面前的这个 AI 开始对我**有用**了。

![Monica](https://assets.068666.xyz/blog/assets/2025/03/4701089a07a1a4910dd4cc356fd10f0a.png)


## 原理是什么

![Monica](https://assets.068666.xyz/blog/assets/2025/03/978d0878f54c499b52ef7d2fa069274a.png)

原理就是在 Monica 的设置中，有一个叫做 `记忆` 的模块。这个记忆的模块，会记录关于我的个人信息，我的需求信息，我曾经对什么不理解，我对什么比较精通。这些信息存储在是一个个小的卡片，每个卡片上记录了关于我曾经对于大模型的提问，然后大模型对整个对话过程的总结。
比如下面这部分：
![记忆](https://assets.068666.xyz/blog/assets/2025/03/37f6161203cde1cd846ea48fcf7506a2.png)


另一个模块就是: 个性化这部分内容是一个个人的个性化提示词，现在里面有了很多内容，都是在之前我有问过的问题。也许在之前这个个性化提示词是可以自动更新的？ 现在提示不会自动更新了。可是我已经不记得我写过这个个性化的提示词。
![个性化](https://assets.068666.xyz/blog/assets/2025/03/e7d1bb7ba69415e846c757dbe115e2f2.png)


## 日常使用

我们经常会使用一个 AI Summary 的工具来让 AI 总结一篇文章、一个网页。在总结的时候，我会把自己的`个人画像` 作为提示词，写在一个 AI Summary 插件的提示词中。这样后续做总结的时候，就是针对自己个人做出来的想要的总结。
这里可以使用浏览器插件 [SumBuddy](https://chromewebstore.google.com/detail/sumbuddy/knpckkifmkioijpoejgngbghdpacfajp) ，把个性化的提示词写进去，来做个性化的 AI 总结。
![SumBuddy](https://assets.068666.xyz/blog/assets/2025/03/14d3da834d1f550aafa3ba4ac0e930c4.png)


如果使用 Obsidian 这里也推荐另外一种用法，使用 Obsidian 的 `Obsidian Web Clipper` 插件，把个性化的提示词写进去，网页剪藏的同时在正文上面可以生成一段个性化的 AI 总结。 图片中红框开头部分是提示词，最后需要使用 `{{content}}` 来引用网页的正文内容。这部分相关的配置可以参考历史文章：
![Obsidian Web Clipper](https://assets.068666.xyz/blog/assets/2025/03/f58475dd2698f795527e4168ed2d0c64.png)

保存后的效果

![Obsidian](https://assets.068666.xyz/blog/assets/2025/03/97ba9ce08e0b832afa90f512a44bbcb3.png)

最后希望对大家有帮助。













