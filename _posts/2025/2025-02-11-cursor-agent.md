--- 
title: "Cursor Agent"
date: 2025-02-11
tags: [Cursor]
category: [tools]
comments: true
published: true
---





# Cursor 如何使用打开 Google 搜索获取更好的效果

## 先看效果：


Cursor 自带了搜索能力，也不错。如果达不到我们想要的效果，我们也可以使用类似 ChatWise 的 Local Search 能力。就是打开浏览器去搜索，再打开搜索结果的标签页面，然后抓取内容再给大模型。这个过程我们手动去处理又不现实。 好消息是 ChatWise 的作者开源了 Local Web Search ，这样我们就可以自己在本地运行。 然后我们再利用 Cursor 的 Agent 来执行这一过程。

## 先下载 local-web-search 

### 安装 bun
下载前需要先安装 bun，具体可以参考：

```
https://www.bunjs.cn/docs/installation
```

### 下载 local-web-search


```
git clone https://github.com/egoist/local-web-search
```

安装依赖

```
cd local-web-search && bun install
```


## 在 Cursor 中配置 Cursorrules

我这里就直接配置在了 `.cursor/rules/local-web-search.mdc` 中
可以直接再设置里面新建，会自动在 `.cursor/rules` 目录下生成文件
mdc(可能是MarkDownCursor的意思？) 相关的配置如下：具体的路径可以改一下，或者项目下载后直接丢给 Cursor 修正一下路径。

```

<local-web-search>

# Instructions
Use the following commands to get AI assistant:

## 
 ** 深度搜索网络: **
`cd ~/Documents/code/cursors/local-web-search && bun ~/Documents/code/cursors/local-web-search/src/cli.ts search --max-results 150 --show -q "<your question>"` - Get answers from the web using `local-web-search` (e.g., `cd ~/Documents/code/cursors/local-web-search && bun ~/Documents/code/cursors/local-web-search/src/cli.ts search -q "latest weather in London"`)

</local-web-search>
```


这里还有优化的空间，比如Cursor Agent 互联网深度搜索后 --> 自动继续搜索代码库 --> 自动写出最佳实践。这一步大家可以试试。

## local-web-search 相关参数配置：

我上面的参数是夸张了，实际使用可以再设置一个搜索命令，然后搜索数量减少，并且不显示浏览器。
```
-q, --query <query> - 搜索关键词（必需）
-c, --concurrency <num> - 设置并发数
--show - 显示浏览器界面
--max-results <num> - 限制最大结果数
--browser <browser> - 选择浏览器
--exclude-domain <domain> - 排除特定域名
--topic <topic> - 设置搜索主题
--fake - 使用模拟浏览器，这里原理是 await fetch 然后返回结果，可能触发 Google 的 blocked
```

## 欢迎关注公众号
![公众号](https://cdn.jsdelivr.net/gh/gongchunru/image/img/20250112223749749.png){: width="672" height="589" .w-75 .normal}



