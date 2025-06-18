

![wave5](https://assets.068666.xyz/blog/assets/2025/03/a38a764aba3db6ba9cc6c9bcd5ac0516.png)

将原有的 Autocomplete、Supercomplete、Tab to Jump 和 Tab to Import 等功能整合为全新的 Windsurf Tab。
Windsurf Tab 使用了更大规模且质量更高的模型，提升了上下文理解能力、代码建议质量和响应速度。

个人体验了下， 主要是三个场景提升比较大：
- 在终端执行命令后，能够直接作为上下文信号影响代码补全。
- 剪贴板内容可自动转化为智能预测的依据。
- Cascade 会话历史能实时影响补全的精确度和上下文理解。

![剪贴板作为上下文](https://assets.068666.xyz/blog/assets/2025/03/72b97ffcaee3b937ab837d69f63c2e32.png)



**上下文优化**
- 代码补全现在会综合更多上下文信号，包括最近查看的文件、终端命令及输出，以及 Cascade 对话记录。
- 增加可选的「剪贴板内容作为补全上下文」功能（默认关闭，可通过高级设置开启）。
- 扩展了上下文长度，进一步增强补全的相关性。

**质量改进**
- 在 Autocomplete（插入型）和 Supercomplete（编辑型）建议之间的选择精度提高。
- 「Tab to Jump」的跳转回溯距离增加到之前版本的两倍以上，召回能力显著提升。
- 改进下一行建议的缩进与间距处理。

**性能提升**
- 引入预测式触发机制，实现连续自动补全和跳转补全（Tab to Jump）。
- 增强服务器容量，提升模型推理速度。
- 优化网络连接，显著降低网络延迟。
- 「Tab to Import」响应速度更快、可靠性更高。

**功能界面优化**
- 接受的补全建议会以绿色高亮显示（可通过高级设置关闭）。
- 「Tab to Jump」和「Tab to Import」的界面设计焕新，更加清晰可见。
- 「Tab to Jump」和「Tab to Import」的界面组件现在支持鼠标点击。

**其他改进**
- 在自动修复代码规范（lint）模式下，更可靠地应用信用额度折扣。
- IDE 内置终端的命令现已纳入 Cascade 的上下文。
- 调试控制台（Debug Console）中支持使用 Tab 键接受智能感知（Intellisense）。
- 改进 Cascade 差异（diff）审阅界面的用户体验。
- 修复了信用额度低提醒机制的问题。
- 修复了 Autocomplete 速度设置相关问题。
- 改进了快速设置下拉菜单的易用性。
- 优化 CPU 和内存占用情况。
- 新增 Neon 数据库作为模型上下文协议的模板。