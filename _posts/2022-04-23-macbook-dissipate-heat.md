---
layout: post
title: 解决 MacBook 的散热降频问题
tags: MacBook 
category: tips
comments: true
date: 2022-04-24
modify_date: 2022-04-23 11:53:21
---





老款有touch bar的 Intel MacBook Pro ，普遍存在严重的散热问题，使用过程中不止机身很烫，而且动不动电脑就会卡顿。卡顿是由于机器 CPU、GPU 等温度过高，系统降频保护功能，降频后的电脑 就会变的卡顿，十分影响工作效率、娱乐心情。我这里要解决的就是降频问题。

如果想要组织降频就需要防止温度过高，就是把温度传递出去。一个就是机器自带的散热风扇，时间久了就需要清理下灰尘；另一个就是想办法把温度通过固体传导出去，这里就需要用到散热贴了。

## 拆机
详细的拆机步骤可以参考：[ifixit](https://zh.ifixit.com/Device/MacBook_Pro_15%22_Touch_Bar_2018) 。这里简单总结一下。
1. 先执行命令，防止操作的过程自动开机。
   ```
   sudo nvram AutoBoot=%00
   ```
2. 用 1.2 的五角螺丝刀拧下螺丝
3. 用三角撬片撬开螺丝多的一侧，只有两颗螺丝的出风口侧，不可硬敲，需要从另一次拉。
![](https://cdn.jsdelivr.net/gh/gongchunru/image/img/202204241307594.png)

## 清理灰尘
打开后就震惊了，很脏。
<img src="https://cdn.jsdelivr.net/gh/gongchunru/image/img/202204241308480.jpg"  alt="清理前的MacBook内部"  style="zoom:80%;" />

这里用到了镊子、吹尘球、湿巾试着简单清理。用湿巾小心电路。如果有吸尘器更好。
<img src="https://cdn.jsdelivr.net/gh/gongchunru/image/img/202204241309759.jpg"  alt="清理用的吹尘球"  style="zoom:80%;" />
清理后的样子

<img src="https://cdn.jsdelivr.net/gh/gongchunru/image/img/IMG_5372.jpg" alt="IMG_5372" style="zoom:80%;" />


## 贴导热贴

![IMG_5373](https://cdn.jsdelivr.net/gh/gongchunru/image/img/IMG_5373.jpg)

这里贴上以后，热量会直接导到后盖上面，从而让CPU、GPU的温度迅速下降，防止不断出现的降频从而影响使用。

## 总结
使用一天后的感受：
* 电脑不在出现降频的问题，不再卡顿；
* 电脑同样的热，风扇还是一样吵，后盖更热了，需要支起来或者用散热风扇吹着更好；
* 目前来看是这样做是对的，省了换新电脑的钱。电脑性能也不差，只奈何苹果的散热压不住；
* 动手能力强的可以更换一下硅脂，效果更好一些。

## 资料：
1. [https://www.bilibili.com/video/BV1yA411i7c8?share_source=copy_web](https://www.bilibili.com/video/BV1yA411i7c8?share_source=copy_web)
2. [https://zh.ifixit.com/Device/MacBook_Pro_15%22_Touch_Bar_2018](https://zh.ifixit.com/Device/MacBook_Pro_15%22_Touch_Bar_2018)

