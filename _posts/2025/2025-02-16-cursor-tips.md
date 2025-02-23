---
title: "Cursor 里面那些小技巧 希望带来不一样的体验"
date: 2025-02-16
---

# Cursor 隐藏技巧，每个都好用。

Cursor 已经出来很久了，很多人都在用。官方软件也一直在更新，有很多功能和亮点还没有人提到过，我把自己觉得好用的几个点，还有一开始可能很难注意到的功能总结下发出来。也是自己记录下备用，肯定也有很多遗漏的，大家可以补充。


## @ 功能

### @PR(Diff With Main Branch)
这个命令在 @git 的子目录下，但是可以直接 @pr 使用，这个命令会自动把当前分支和 master 分支的 diff 内容放入上下文。
适用范围：Chat 和 Composer  
![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250216131717171.png)

### @Commit(Diff With Main Branch)
这个命令在 @git 的子目录下，但是可以直接 @commit 调出使用，这个命令会自动把当前未暂存（unstaged）的文件内容放入上下文。
适用范围：Chat 和 Composer  

![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250216131635733.png)

### @/
这个命令是在 @Folder 的快捷入口，输入@后，再次输入/，会过滤出所有的文件夹供选择。
适用范围： Chat 和 Composer 
![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250216131617730.png)

### /
直接输入 / 会出现三个命令选项：
分别是： 
* Reset Context: 重置上下文，这个操作不会删除历史记录，只影响后续传递给模型的内容。
* Reference Open Editors: 引用编辑器里面打开的所有选项卡文件，这个添加的时候特别爽快，一口气加很多个文件。
* Reference Active Editors: 引用编辑器里面刚刚操作/打开的选项卡文件。

适用范围： Chat 和 Composer 
![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250216131508370.png)

### @Definitions
这个会把选中代码中所有附近的定义添加到上下文中。对于其他文件中加了变量、函数、类等，如果当前代码引用了，都可以自动添加到上下文中，对于模型识别很有帮助。
适用范围： 编辑器中 CMD/Ctrl + K 调出的小窗中（Edit模式）; 终端里面的 CMD/Ctrl + K 调出的小窗中不可用
![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250216131413919.png)

## Cursorrules
项目根目录下的 .cursorrules 文件，不建议使用，后续版本会移出此功能。都需要迁移到  .cursor/rules 文件夹下。

## Tab in Peek
修改了当前函数的参数或者返回值，在 Cursor 的 Peek 窗口中，调用改函数的地方也会提示 Tab 补全建议，这样就实现了跨文件 tab 补全。
当然反过来也是可以的，在调用的地方修改后，也可以在 Peek 窗口中提示修改被调用函数。macOS 下面按住 CMD 左键点击函数名就行。

![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250216131336240.png)

## Composer
单个 Composer 历史消息过多可能导致不准确是因为历史消息被用 cursor-small and gpt-4o-mini 模型总结了。建议经常去新建 Composer 如果需要历史记录，可以让 Composer 创建文件记录产品需求、迭代状态、待办事项等。而不是每次模型生成的很多可能没用的信息都带过去。

## CMD + K
CMD + K 可以调出小窗，小窗里面可以输入命令。如果不想让输出结果直接修改代码内容，可以按下 Option/Alt + Enter，结果还是会显示在弹出中，可以持续向 AI 提问。
![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250216131236873.png)

## AI Commit Message
CMD + P 打开命令面板，输入 `Open Keyboard Shortcuts (JSON)` 可以调出快捷键设置面板。
添加快捷键配置，后面输入 `cmd+m` 就直接执行 AI 生成 commit message 了。不需要去收到点击按钮
```json
    {
        "key": "cmd+m",
        "command": "cursor.generateGitCommitMessage"
    }
```

## 上下文：

* 在 Chat 和 Composer 中，默认使用 40,000 个 token 的上下文窗口。
* 对于 Cmd-K 约 10,000 个 token，以平衡首次响应时间（TTFT）和质量。
* Agent 从 60,000 个 token 开始，支持最多 120,000 个 token。对于较长的对话，会自动总结上下文。这些阈值会不时更改以优化体验。


## 欢迎关注公众号

![公众号](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250112223749749.png){: .d-flex .justify-content-center .w-50}