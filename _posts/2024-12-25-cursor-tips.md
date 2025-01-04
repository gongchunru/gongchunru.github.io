---
title: "Cursor 特别的使用技巧和遇到的问题"
date: 2024-12-25
tags: [Cursor, IDE, 开发工具]
category: 开发工具
status: published
created: 2024-12-25
description: "Cursor IDE的实用技巧总结，包括可视化、上下文管理和多聊天窗口共享等功能"
author: gchr
---

# Cursor 特别的使用技巧和遇到的问题

## 1. 可视化功能

### Mermaid图表支持
- 使用`prompt`可以生成`mermaid`可视化流程图
- 需要安装插件：`Markdown Preview Mermaid Support`进行渲染
- `prompt` 举例："使用 mermaid可视化这些文件的流程，写到一个.md 文件"

![可视化示例1](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20241225230637362.png)

![可视化示例2](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20241225230616952.png)

![可视化示例3](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20241225230706453.png)

## 2. 上下文管理


`Cursor` 经常性遗忘之前的内容，比如批量修改整个仓库里面的某些词条或者变量等，容易遗漏一些类，或者忘记之前已经修改过不知道修改到了什么地方。
### 解决上下文遗忘问题
解决这类问题也比较简单，可以让 `Cursor` 自己创建一个备忘录，记录下自己的进度，每次修改前去读取进度。
如果是需求待办项，也可以如法炮制创建一个待办清单，完成一项就勾掉一项。

对于`Agent` 处理时的也可以手动@相关文件，或者也可以使用`Windsurf`作为替代方案（更细致但同样存在上下文问题）

## 3. Notepad功能

### 多窗口内容共享
- `Chat`和`Composer`之间的内容可以共享到`NOTEPAD`
- NOTEPAD支持附件功能，这是`Cursorrules`所不具备的

## 4. 效果优化方案

### 模型切换
- 可以尝试使用其他模型：
  - o1
  - Gemini 2.0 Flash Thinking Experimental
  - Claude-3.5-sonnet

### 提示词优化
- 利用高级模型优化`prompt`
- `prompt` 举例：
```
根据这个提示词优化 来改进我的提示词：@https://docs.anthropic.com/zh-CN/docs/build-with-claude/prompt-engineering/prompt-improver 
我的提示词是： 请根据这张图片生成网页,美观的形式+tailwindcss还原
```
	
![CleanShot 2024-12-25 at 23.44.49@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20241225234538091.png)


关于优化提示词的文章可以参考 `anthropic` 官方文档
```
https://docs.anthropic.com/zh-CN/docs/build-with-claude/prompt-engineering/prompt-improver
```

- 如果有BUG相关问题处理时可以同时提供截图给 `Cursor` ，`Cursor` 有时候效果可能会更好。



## 5. Too many free trials解决方案

如果遇到这种情况，还是建议买 `Pro` ，不过可以试试下面仓库的插件
### 插件地址
```
https://github.com/bestK/cursor-fake-machine
```

插件下载地址：
```
https://github.com/bestK/cursor-fake-machine/releases/download/v0.0.1/cursor-fake-machine-0.0.1.vsix
```

### 使用步骤
1. 下载后拖拽到 `Cursor` 插件列表
2. 命令面板输入 `fake` 进行重置机器码
3. 重启 `Cursor`
4. 如果重启之后不好使，可以试试用新的邮箱注册 `Cursor` 后重置。

![重置示例](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20241225231322974.png)



