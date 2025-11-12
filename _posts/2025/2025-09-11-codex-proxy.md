





Claude Code 最近风评不是很好，很多人感受到是降智的影响，从而转换到了Codex 。我也尝试了 Codex ，GPT-5 在 Codex 上效果还不错，但是这个工具细节不是很好，功能太少。

Claude Code 里面比如按下 ! 可以随时执行 shell 命令。上下箭头拉取历史命令的时候，也不会跳来跳去的。

最重要的是没有 hooks，我的AI 写代码，AI 自动执行脚本跑测试，通过脚本的输出 ，AI 再自动决策是否进行修复，一直到脚本完全执行正确。这个流程下 Claude Code 可以完美执行，但是切换到 Codex 执行起来就比较费劲，需要做多一些额外的工作，额外的提示词 和适配。

看到一个项目，可以把 Codex 接入到 Claude Code 里面。

```
https://github.com/luispater/CLIProxyAPI
```

当然不止是 Codex，还有 Gemini CLi，Qwen 等等，都课程转换为 API，可以把这个 API 接入到任何地方做中转。


最简单的办法就是下载服务，解压，修改一下配置文件名称为 `config.yaml`

![CleanShot 2025-09-11 at 00.13.09@2x.png](https://assets.068666.xyz/blog/assets/2025/09/2d74798c2fa4190b60bd6d5b2b5b81a6.png)


认证 codex ，会自动打开浏览器

```bash
./cli-proxy-api --codex-login
```

认证后启动

```bash
./cli-proxy-api
```


如果要启动 Claude Code
可以配置下面的变量

```bash
./cli-proxy-api
```
如果是部署服务器上，当时推荐 docker 的方式。项目文档写的非常清晰

```bash
export ANTHROPIC_BASE_URL=http://127.0.0.1:8317
export ANTHROPIC_AUTH_TOKEN=sk-dummy
export ANTHROPIC_MODEL=gpt-5
export ANTHROPIC_SMALL_FAST_MODEL=gpt-5-minimal
```


环境变量太多，可以设置一个函数，来方便切换各个环境

![image.png](https://assets.068666.xyz/blog/assets/2025/09/abc1d7bf5a8cea6acbfdb17d5024e99f.png)


配置后 Codex 中转的 Claude Code 也可以稳定执行，就是感觉速度慢了点。

不过可以多开几个终端，同时跑原版 Claude Code，和塞了 Codex 的 Claude Code





