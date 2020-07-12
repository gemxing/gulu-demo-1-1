# gulu UI - 一个简单好用的 UI 组件

[![Build Status](https://travis-ci.org/gemxing/gulu-demo-1-1.svg?branch=master)](https://travis-ci.org/gemxing/gulu-demo-1-1)

## 介绍

这是在探索 Vue 过程中做的一个 UI 框架。

## 开始使用

1.添加 CSS 样式

使用本框架前，请在CSS中开启border-box

```
*,*::before,*::after{box-sizing: border-box;}

```
IE 8 及以上浏览器都支持此样式。

你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
```
html {
	--button-height: 32px;
	--font-size: 14px;
	--button-bg: white;
	--button-active-bg: #eee;
	--border-radius: 4px;
	--color: #333;
	--border-color: #999;
	--border-color-hover: #666;
}
```
IE 15 及以上浏览器都支持此样式。

2.安装 gulu UI
```
npm i --save gulu-demo-1-1
```
3.引入 gulu UI
```
import {Button,Icon} from 'gulu-demo-1-1'
import 'gulu-demo-1-1/dist/index.css'

export default {
  name: 'App',
  components: {
    'g-button': Button
    'g-icon': Icon
  }
}
```

## [文档官网](https://gemxing.github.io/gulu-demo-1-1-test/)
