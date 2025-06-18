---
title: VS Code 迈向开源 AI 编辑器
date: 2025-05-20
categories: [VS Code, AI, 开源]
tags: [VS Code, AI, Copilot, 开源, 编辑器]
---

VS Code 团队于 2025 年 5 月 19 日发布博文，阐述了他们对代码编辑器未来的愿景——开源并由 AI 驱动。

在过去的十年里，VS Code 已成为 GitHub上最成功的开源项目之一。VS Code 团队感谢充满活力的社区贡献者和用户，他们因其开源特性而选择 VS Code。随着 AI 成为 VS Code 开发者体验的核心，团队打算忠于其创始开发原则：开放、协作和社区驱动。

VS Code 团队将以 MIT 许可证开源 [GitHub Copilot Chat 扩展](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) 中的代码，然后仔细地将扩展的相关组件重构到 VS Code 核心中。这是他们使 **VS Code 成为开源 AI 编辑器**的下一步，也是合乎逻辑的一步。这反映了 AI 驱动的工具是我们编写代码方式的核心；重申了他们坚信开放式工作能为用户带来更好的产品，并 fostering 一个多样化的扩展生态系统。

## 为何现在开源？

在过去的几个月里，VS Code 团队观察到 AI 开发领域的变化，这促使他们将 VS Code 中的 AI 开发从闭源转向开源：

*   大型语言模型（LLM）已显著改进，减少了对“秘密武器”提示策略的需求。
*   目前，编辑器中最流行和最有效的 AI 交互用户体验（UX）已趋于普遍。团队希望通过将这些通用 UI 元素置于稳定、开放的代码库中，使社区能够改进和构建这些元素。
*   一个由开源 AI 工具和 VS Code 扩展组成的生态系统已经出现。团队希望让这些扩展作者更容易地构建、调试和测试他们的扩展。目前，由于无法访问 Copilot Chat 扩展中的源代码，这对他们来说尤其具有挑战性。
*   团队收到了许多关于 AI 编辑器收集数据的问题。开源 Copilot Chat 扩展使您能够看到收集的数据，从而提高透明度。
*   恶意行为者越来越多地针对 AI 开发工具。在 VS Code 作为开源项目的整个历史中，社区的问题和拉取请求（PR）帮助团队迅速发现并修复了安全问题。

## 下一步

在接下来的几周内，团队将努力开源 [GitHub Copilot Chat 扩展](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)中的代码，并将 AI 功能从该扩展重构到 VS Code 核心中。他们的核心优先事项保持不变：提供卓越的性能、强大的可扩展性以及直观、美观的用户界面。

开源在社区围绕一个稳定、共享的基础进行构建时效果最佳。因此，团队的目标是使贡献 AI 功能像贡献 VS Code 的任何其他部分一样简单。大型语言模型的随机性使得测试 AI 功能和提示更改尤其具有挑战性。为了缓解这个问题，团队还将开源其提示测试基础设施，以确保社区的 PR 能够构建并通过测试。

与往常一样，您可以在他们的[迭代计划](https://github.com/microsoft/vscode/issues/248627)中关注进展，他们将在那里提供有关此工作的更多信息。团队还将通过[常见问题解答（FAQ）](https://code.visualstudio.com/docs/supporting/FAQ)来更新社区提出的问题。在将这一愿景变为现实的过程中，他们[欢迎您的反馈](https://github.com/microsoft/vscode/issues)。

VS Code 团队对作为开源 AI 编辑器塑造开发的未来感到兴奋——并希望您能加入他们这个开放构建的旅程。

