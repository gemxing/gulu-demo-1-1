---
title: 快速上手
---

# 快速上手

本节将介绍如何在项目中使用 gulu UI。
(本章节待完善)

## 安装

请参考安装章节

## 使用 vue-cli

我们还可以使用 vue-cli 初始化项目，命令如下：

```
> npm i -g vue-cli
> mkdir my-project && cd my-project
> npm i && npm i gulu-demo-1-1
```

## 引入gulu-demo-1-1
```javascript
import {Button} from 'gulu-demo-1-1'
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
    'g-button':Button
  }
})
```