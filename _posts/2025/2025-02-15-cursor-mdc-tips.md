---
title: "Cursor MDC Tips"
date: 2025-02-15
tags: [Cursor]
category: [tools]
comments: true
published: true
---




# Cursor MDC 高级用法

## MDC 是什么，可能是 MarkDownCursor

这里分为三个部分，
* 一个是 Description (Agent 自动选择规则)，
* 一个是 Globs (当指定文件模式时[e.g. * .tsx]，规则会自动包含在 Agent 的响应中)
* 一个是具体的内容，目的是让 Agent 执行，然后响应，再执行再响应。主要考虑每一步我们需要 Agent 响应什么？

## 如何创建
两种方法，
1. 在 Cursor 设置的，
2. 手动在项目 `.cursor/rules/` 目录下创建后缀是 `.mdc` 的文件。 

## 如何使用
这里我抛玉引玉，除了里面写提示词，我们还需要把能够让自然语言和各种 “有规则的引擎” 比如规则化代码接口，结构化的数据/参数，通过 Agent 自动转换。下面是我的尝试

### 获取内网的文档，自动设计方案
如果是 Confluence Wiki 的文档，可以生成 token 通过 API 获取文档，再给 Cursor 的 Agent 使用。在 Composer 的 Agent 会自动执行相关的 API 请求。并根据提示词生成代码结构
![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250216001219629.png)

### 给一个第三方接口API，自动参考项目风格，写代码
![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250216003059778.png)

### 给出需要测试的文件，自动写单元测试并且执行测试
单元测试的场景也是类似，只不过可以设置生成单元测试代码后，自动生成一个执行单元测试的命令，这样我 accept 代码，我们就可以一键执行单元测试。
![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250216004250280.png)
### 涉及到相关的接口都可以这样制作
比如生成调试请求，根据代码生成请求，根据语言输入或者截图输入 让 **Agent 转成命令或者脚本**去运行。

![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250216004202914.png)


上面这些其实都是可以手动挨个让Cursor Composer 去操作，执行一步就输入一次 Composer。
可以全部写在一个总目录的 mdc 里面，执行一步，让他自动去执行多个步骤，里面类似是 

```
Step 1: a.mdc;
Step 2: b.mdc;
```

但是这样可能会导致 Agent 容易出错。当然一次 Composer Agent 最多只能执行 25 次，然后需要手动触发一下，比如输入 continue。

一套流程下来，大大提高效率。当然也大大 提高了 Cursor 额度的消耗速度🥲。


![公众号](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250112223749749.png){: width="672" height="589" .w-75 .normal}










