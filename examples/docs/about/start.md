# 快速上手

VC-Cat组件库符合Vue应用官方推荐的使用方式，假设你已了解关于 HTML/CSS/JavaScript 的基本知识，并且了解Vue应用的开发方式，便可使用

## 下载

```javascript
npm install vc-shadow-cat --save-dev
```

## 使用方式

### 安装Cli

```javascript
npm install -g @vue/cli
```
> 请务必确认Node.js的版本是8.9 或更高版本

### 创建项目

```javascript
vue create [app-name]

cd [app-name]
```

### 使用组件库

#### 1）全局引入

```javascript
// main.js
import VcCat from 'vc-shadow-cat'

Vue.use(VcCat)
```

#### 2）按需引入

```javascript
// main.js
import { VcLoading } from 'vc-shadow-cat'

Vue.use(VcLoading)
```

#### 3）库样式(选用)

本库提供了一些布局的全局样式，使用珊格时需要引入

```javascript
import './node_modules/vc-shadow-cat/vc-shadow-cat.css'
```
