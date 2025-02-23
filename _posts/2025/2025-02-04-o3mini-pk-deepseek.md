---
title: "O3Mini PK DeepSeek"
date: 2025-02-04
tags: [Cursor]
category: [tools]
comments: true
published: true
---



最近 OpenAI 也是被 DeepSeek 逼的放出了最新的模型，并且放出来思考的过程。根据最新的模型排行，发现 o3-mini-high 排在了第一。从网上看到很多人在测试代码能力，我这里也挨个试试，看看效果如何。

> 可视化的场景里，这种好与不好可以很直观的看出来，但是也有很强的主观性，每个人观点不太一样，这里主要是放出来效果。而且这个场景也不能说明模型真的强或者不强，只是这个场景或者提示词下是这样的，换个提示词可能就不好说了。

## 提示词 1

```
Simulate a ball bouncing in a spinning hexagon with gravity & friction.   
```

先看看 `DeepSeek R1` 的效果：
![001_dsr1.gif](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250204153014126.gif)

o3-mini-high 的效果：
 如果是 ChatGPT 网页上测试，现在发现还是会降智，这点很恶心，测试了半天发现被降智了。下面这个是没降智的情况。
![001_o3minihigh02.gif](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250204161034015.gif)

o3-mini 的效果：
令人诧异的是 o3-mini 还比 o3-mini-high 更好了一点，但是大概过了一圈左右，这个小球还是跑出去了。这里时间太长了，gif 没办法上传。
![001_o3mini.gif](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250204153355087.gif)

Claude-3.5-Sonnet-1022 的效果：

![001_claude35.gif](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250204153705477.gif)

o1 的效果:
![001_o1.gif](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250204154637249.gif)




## 提示词 2 
```
Write a p5.js script in HTML that simulates 25 particles in a vacuum space of a cylindrical container, bouncing within its boundaries. Use different colors for each ball and ensure they leave a trail showing their movement. Add a slow rotation of the container to give better view of what's going on in the scene. Make sure to create proper collision detection and physic rules to ensure particles remain in the container. Add an external spherical container. Add a slow zoom in and zoom out effect to the whole scene. 
```

DeepSeek R1 的效果：
![002_dsr1.gif](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250204155115701.gif)

o3-mini 的效果：
![002_o3mini02.gif](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250204155706132.gif)


o3-mini-high 的效果：
小球的轨迹似乎更好了

Claude-3.5-Sonnet-1022 的效果：
![002_claude35.gif](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250204161442576.gif)

o1   的效果：

![002_o1.gif](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250204162849369.gif)


## 欢迎关注公众号

![公众号](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250112223749749.png){: .d-flex .justify-content-center .w-50}