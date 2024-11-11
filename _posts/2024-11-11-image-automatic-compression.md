---
layout: post
title:  macOS 上利用 Keyboard Maestro 开启图片自动压缩
tags: [macOS,Zipic]
category: [tools]
comments: true
date: 2024-11-11
modify_date: 2024-11-11 15:27:48
---



每次手动的截图都很大，为了节省流量和加载速度最好对图片做一次压缩，这里需要用到的是一个压缩软件 `Zipic` 。当然还用到了其他软件 `Keyboard Maestro (付费)` ，`PicGo（免费）`


![CleanShot 2024-11-11 at 00.15.52@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/202411110016590.png)

`Zicpic` 的图片压缩能力很不错，但是如果想截图后自动压缩需要购买 `Pro` 版本，这里打算自己动手实现。

![CleanShot 2024-11-11 at 00.17.49@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/202411110018643.png)


![CleanShot 2024-11-11 at 00.08.54@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/202411110010487.png)

查看`Zicpic` 的文档，发现支持 `URL Scheme`  ，利用这个能力，我们只需要吧截图后的文件放在一个指定的文件夹，然后监听该文件夹自动执行打开 `URL Scheme` ，就可以执行压缩。

![CleanShot 2024-11-11 at 00.25.43@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/202411110026744.png)


在 `Zicpic` 中设置压缩后的图片自动保存在一个文件夹
![CleanShot 2024-11-11 at 00.27.28@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/202411110028061.png)


然后利用第二个工作流监听压缩后的文件夹，自动复制到剪贴板

![CleanShot 2024-11-11 at 00.28.53@2x.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/202411110030451.png)


最后当我们在Obsidian 中写博客或者文档的时候，就可以直接在正文中粘贴图片。如果在 Obsidian 中可以安装插件 `Image auto upload plugin` ，这样当我们在编辑器中粘贴文件的时候，会自动调用 `PicGo` 上传图片到默认的图床。



![CleanShot 2024-11-11 at 00.32.04.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/202411110033858.png)

如果不使用 `Obsidian` 的话，在 `PicGo` 里面利用剪贴板上传也是一样的。

![CleanShot 2024-11-11 at 00.35.47.png](https://cdn.jsdelivr.net/gh/gongchunru/image/img/202411110036862.png)
