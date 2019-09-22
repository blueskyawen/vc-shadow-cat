# vc-shadow-cat
一套前端UI组件库，是之前做的Angular组件库[Ng-Shadow-Cat](http://blueskyawen.com/ng-shadow-cat)的
Vue的实现，包括珊格系统，模式以及各种通用组件。

## 特性
- 开箱即用的Vue组件。
- 适配移动端，不同尺寸屏幕均额适用的组件。
- 提供了模式实例和部分常用过滤器

## 支持环境
现代浏览器和 IE11 及以上（需要 polyfills）。

## 当前版本
V1.0.2

## 支持 Vue 版本
目前支持 Vue2.x 版本。

## 使用方式
### 安装Cli/创建项目

```javascript
npm install -g @vue/cli

vue create [app-name]
cd [app-name]
```
> 请务必确认Node.js的版本是8.9 或更高版本

### 下载库

```javascript
npm install vc-shadow-cat --save-dev
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
