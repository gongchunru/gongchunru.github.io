---
layout: post
title: "ChatBot 的 SVG 展示能力"
comments: true
date: 2025-01-16
categories: [AI]
tags: [ChatBot]
published: true
image: 
---



> 各种 `ChatBot` 的 SVG 展示能力，最早做这个的其实是类似 `Claude` 的 Artifacts 功能。除了开通 `Claude` 的会员，还是想找个成本的替代品，最后还意外发现了新世界


我这里都会给大模型附加上英伟达的财报文件，以及一个提示词，来展示 ChatBot 的 SVG 展示能力。有些不能给 PDF 文件，比如 `Cursor`，我会全量复制贴进去。

## Monica
先是我用的最多的 `Monica` ，效果还行，但是不够好。

![Monica](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250116171754897.png)

## DeepSeek

这是最近很火的 Deepseek [官网](https://chat.deepseek.com/) ，效果不理想。
![Deepseek-V3](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250116171810069.png)

## 集成 API 的 ChatBot
最近刚开始用的 `Cherry-Studio` ，搭配 `DeepSeek-V3` ，效果也不太理想。

![Cherry-Studio](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250116171920121.png)

## Claude 
最后使用 `Claude` 官网，效果很不错 👍

![Claude官网](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250116171926386.png)

既然官网用的模型也是 `Claude-3.5-sonnet`， 干脆用 `Cursor` 试试。
## Cursor 

我把 上面的内容全部输入 `Cursor Composer`，最后发现效果也不错。

![CleanShot 2025-01-17 at 00.59.17@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250117011720311.png)

`Cursor` 安装 SVG 插件可以直接预览以及导出 PNG 图片格式。
![CleanShot 2025-01-17 at 01.27.55@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250117012835344.png)

## 批量生成

那这样我们就可以让 `Cursor` 来批量生成 SVG 卡片，然后再把这些 SVG 卡片转成 图片格式，直接就可以发社交媒体了。当然这些还可以要求它具体的风格，这里展示下可行性。

```
文件内是英伟达的财报，请基于帮我生成 10 个 SVG 文件，用于国内外社交媒体风格。
```

![dy风格](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250117012047236.png)



![bilibili](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250117012139328.png)



![instagram](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250117012205477.png)

![nvidia_instagram.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250117012449177.png)
![nvidia_bilibili.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250117012504448.png)

最后附上前面测试的提示词，这个提示词是基于李继刚老师的汉语新解修改而来的，表示感谢。

```
(defun 创新投资分析师 ()
  "你是一个敏锐的投资者,洞察市场趋势,理性思考,表达犀利"
  (风格 . ("彼得·德鲁克" "沃伦·巴菲特" "马云"))
  (擅长 . 洞察本质)
  (表达 . 逻辑清晰)
  (分析 . 数据驱动))

(defun 投资机会解构 (用户输入)
  "你会用多维度视角解析投资场景"
  (let (分析 (深度挖掘 (趋势预测 (风险评估 (价值发现 (抓住机会 用户输入))))))
    (few-shots (策略 . "在别人恐惧时贪婪,在别人贪婪时恐惧。"))
    (Investment-Insight-Card 分析)))

(defun Investment-Insight-Card (分析)
  "输出投资洞察 SVG 卡片"
  (setq design-rule "数据可视化,突出关键信息"
        design-principles '(清晰 精准 前瞻))

  (设置画布 '(宽度 500 高度 700 边距 30))
  (标题字体 '现代商务体)
  (自动缩放 '(最小字号 18))

  (配色风格 '((背景色 (专业蓝 数据感))
              (主要文字 (现代商务体 墨黑))
              (装饰图案 金融图标)))

  (卡片元素 ((居中标题 "投资机会解构")
             分隔线
             (排版输出 用户输入 英文 数据)
             分析
             (趋势图 (核心洞察 分析))
             (极简总结 趋势图))))

(defun start ()
  "启动时运行"
  (let (system-role 创新投资分析师)
    (print "说吧,让我们一起发现市场的下一个机会?")))

;; 运行规则
;; 1. 启动时必须运行 (start) 函数
;; 2. 之后调用主函数 (投资机会解构 用户输入)
;; 3. 务必以 SVG 格式输出
```

