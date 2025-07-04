---
title: "VSCode "
date: 2025-04-07
--- 




VS Code 2025 年 3 月更新，这次有不少重要功能和改进，目前看很多功能都是对齐 Cursor 来的。

![CleanShot 2025-04-07 at 13.36.55@2x.png](https://assets.068666.xyz/blog/assets/2025/04/89cac463c836754ed6e4771b3c133d3b.png)


### 1\. **Agent 模式正式上线（Stable）**

- 之前测试中的 **Agent 模式** 现在在稳定版中可用了。你可以通过设置 `chat.agent.enabled` 打开。
- 在这个模式下，新增了一些内置工具，比如抓取网页内容（Fetch 工具）、查找代码定义和引用（Usages 工具），以及一个专门给 AI 留出“思考空间”的实验性 Thinking 工具，能帮你更智能地完成复杂任务。

### 2\. **支持 MCP 服务扩展**

- Agent 模式现在支持 **模型上下文协议（MCP）**，允许 AI 模型通过标准接口调用外部工具和数据，比如文件操作、数据库访问、网页抓取等。
- MCP 服务配置方式更灵活，可以通过环境变量或用户输入来保护密钥等敏感信息。

### 3\. **统一了聊天体验**

- 现在聊天功能整合成了一个统一的界面，支持三种模式快速切换：
  - **Ask 模式**：普通问答或代码咨询；
  - **Agent 模式**：自动化代码编写和任务执行；
  - **Edit 模式**：AI 辅助编辑多个文件。

- 还支持在同一个会话中自由切换模式，比如先在 Ask 模式里讨论思路，再用 Agent 模式自动完成代码实现。

### 4\. **开放更多自定义语言模型接入（BYOK 功能）**

- 可以自己带 API Key，原来这个叫BYOK（Bring Your Own Key）接入更多第三方模型（例如 Anthropic、Azure、Gemini、OpenAI 等），自由度更高，也能更早用到最新的 AI 模型。

### 5\. **代码编辑功能大幅提升**

- 新功能 **Next Edit Suggestions (NES)** 已经全面推出，会智能地给你推荐下一步编辑建议，界面也更加清晰和干净，提升编程效率。
- AI 编辑时减少了不必要的诊断信息，编辑体验更流畅。

### 6\. **jupyter notebook 编辑增强**

- 现在在 VS Code 里写 **jupyter notebook** 跟普通写代码一样简单，支持 AI 编辑和 Agent 模式自动修改、插入或删除单元格。
- 新增了从聊天中快速创建 jupyter notebook 的专用工具，你只要输入指令，AI 就能帮你搭建好基础框架。

### 7\. **搜索速度更快，实时远程索引**

- 代码库搜索大幅提速了。之前需要手动构建索引，现在首次搜索时自动建立远程索引，速度更快、更精准。

### 8\. **终端智能增强**

- 终端支持更智能的自动补全功能，尤其针对 VS Code 自带的命令，比如 `code` 命令的子命令，现在有更贴心的提示。

### 9\. **视觉功能改进**

- 聊天支持从浏览器中直接拖拽图片到 VS Code，方便进行视觉问答和交互。

### 10\. **辅助功能进一步完善**

- 提升了 Agent 模式和聊天编辑的可访问性，增加了更多听觉提示和详细的辅助说明，方便视障用户操作。

更多更新内容，请参考：[VS Code 2025 年 3 月更新](https://code.visualstudio.com/updates/v1_99)


### 新的定价策略

除了上面的更新，还增加了新的价格计划，增加了下面的选项：

- 5 月 5 号开始实施：新的 Copilot Pro+ 价格计划：39 美元/month 或者 390 美元/year

如果是学生版或者开发者版本，我理解就是 Copilot Pro 版本，每个月 300 次高级请求，超过后，每次请求 0.04 美元

以下是该表格的中文翻译：

|  | Copilot Free | Copilot Pro | Copilot Pro+ | Copilot Business | Copilot Enterprise |
| --- | --- | --- | --- | --- | --- |
| 定价 | 不适用 | 每月 10美元 ，或每年 100 美元 | 每月 39 美元 ，或每年 390 美元 | 每个授权席位每月 19 美元 | 每个授权席位每月 39 美元 |
| 高级请求 | 每月 50 次 | 每月 300 次 | 每月 1500 次 | 每月 300 次 | 每月 1000 次 |
| 购买额外的高级请求，每次 $0.04 | x | ✅ | ✅ | ✅ | ✅ |
