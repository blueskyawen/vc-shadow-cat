# 输入框

用于日常表单的数据输入

## 常用输入框

:::demo
```html
<InputVcDemo :type="'input'"></InputVcDemo>
```
```javascript
<template>
  <div class="inputVcDemo">
      <p>普通样式</p>
      <div class="demo-item">
        <vc-input type="text" placeholder="输入用户名" v-model="name"
                  :required="true" :showError="true"></vc-input>
      </div>
      <div class="demo-item">
        <vc-input type="password" placeholder="输入密码" v-model="password"
                  :required="true" :showError="true"></vc-input>
      </div>
      <p>只读和自动聚焦</p>
      <div class="demo-item">
        <vc-input type="text" readonly="true" v-model="like"></vc-input>
      </div>
      <div class="demo-item">
        <vc-input type="text" autofocus="true" v-model="site"></vc-input>
      </div>
      <p>自定义输入提示和错误信息</p>
      <div class="demo-item">
        <vc-input type="text" v-model="like"
                  :showHint="showLintInfo" :hintText="'显示输入提示'"
                  :showError="showErrorInfo" :errorText="'显示错误信息'"></vc-input>
      </div>
      <div class="demo-item">
        <vc-button class="demo-btn" @click="toggleLint">{{showLintInfo ? '不显示输入提示' : '显示输入提示'}}</vc-button>
        <vc-button class="demo-btn" @click="toggleErr">{{showErrorInfo ? '不显示错误信息' : '显示错误信息'}}</vc-button>
      </div>
      <p>禁止样式</p>
      <div class="demo-item">
        <vc-input type="text" v-model="site" :disabled="true"></vc-input>
      </div>
      <p>带输入前/后缀</p>
      <div class="demo-item">
        <vc-input type="text" v-model="site" :suffix="'GB'"></vc-input>
      </div>
      <div class="demo-item">
        <vc-input type="text" v-model="site" :prefix="'http://'"></vc-input>
      </div>
      <div class="demo-item">
        <vc-input type="text" v-model="site" :prefix="'http://'" :suffix="'GB'"></vc-input>
      </div>
      <p>搜索样式</p>
      <div class="demo-item">
        <vc-input type="text" v-model="site" :search="true"></vc-input>
      </div>
  </div>
</template>

<script>
export default {
    name: 'InputVcDemo',
    data () {
    return {
      name: '',
      password: '',
      work: 'Find',
      food: 'Fish',
      like: 'boll',
      site: 'shanghai',
      showLintInfo: true,
      showErrorInfo: true
    }
    },
    methods: {
      toggleLint: function () {
        this.showLintInfo = !this.showLintInfo
      },
      toggleErr: function () {
        this.showErrorInfo = !this.showErrorInfo
      }
    }
}
</script>
```
:::

## 组合输入框与图标

:::demo
```html
<InputVcDemo :type="'icon'"></InputVcDemo>
```
```javascript
<template>
  <div class="inputVcDemo">
    <div class="demo-item">
        <vc-input type="text" v-model="name" :iconfix="'pre'">
          <vc-input-icon :type="'pre'" v-slot:preIcon><span class="fa fa-user"></span></vc-input-icon>
        </vc-input>
    </div>
    <div class="demo-item">
        <vc-input type="text" v-model="name" :iconfix="'sub'">
          <vc-input-icon :type="'sub'" v-slot:subIcon><span class="fa fa-lock"></span></vc-input-icon>
        </vc-input>
    </div>
  </div>
</template>

<script>
export default {
    name: 'InputVcDemo',
    data () {
        return {
          name: '',
          password: ''
        }
    }
}
</script>
```
:::

## 输入文本域

:::demo
```html
<InputVcDemo :type="'area'"></InputVcDemo>
```
```javascript
<template>
  <div class="inputVcDemo">
    <vc-textarea v-model="description"></vc-textarea>
  </div>
</template>

<script>
export default {
    name: 'InputVcDemo',
    data () {
        return {
          description: 'description'
        }
    }
}
</script>
```
:::

## 自定义框尺寸

:::demo
```html
<InputVcDemo :type="'size'"></InputVcDemo>
```
```javascript
<template>
  <div class="inputVcDemo">
      <div>
        <vc-input type="text" v-model="site" :width="'200px'" :height="'30px'"></vc-input>
      </div>
      <div>
        <vc-input type="text" v-model="site" :width="'900px'" :height="'50px'"></vc-input>
      </div>
      <div>
        <vc-input type="text" v-model="site"  :search="true" :width="'900px'" :height="'50px'"></vc-input>
      </div>
      <div>
        <vc-textarea v-model="description" :width="'200px'" :height="'100px'"></vc-textarea>
      </div>
      <div>
        <vc-textarea v-model="description" :width="'900px'" :height="'100px'"></vc-textarea>
      </div>
  </div>
</template>

<script>
export default {
    name: 'InputVcDemo',
    data () {
        return {
          site: 'shanghai',
          description: 'description'
        }
    }
}
</script>
```
:::

## 属性参数

### vc-input

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| required | 必选 | boolean | true/false | false |
| disabled | 禁用 | boolean | true,false | false |
| prefix | 输入前缀 | string | 无 | 无 |
| suffix | 输入前缀 | string | 无 | 无 |
| search | 搜索样式 | boolean | true,false | false |
| showHint | 输入提示 | boolean | true,false | false |
| hintText | 输入提示内容 | string | 无 | 请输入.. |
| showError | 错误提示 | boolean | true,false | false |
| errorText | 错误提示内容 | string | 无 | 输入错误 |
| height | 自定义高度 | string | px或百分比 | 36px |
| width | 自定义宽度 | string | px或百分比 | 100% |
| iconfix | 图标位置 | string | pre,sub | 无 |
| noBorder | 无边框 | boolean | true,false | false |
| value | 输入文本 | string | 无 | 无 |

### vc-textarea

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| height | 自定义高度 | string | px或百分比 | auto |
| width | 自定义宽度 | string | px或百分比 | 100% |
| value | 输入文本 | string | 无 | 无 |

### vc-input-icon

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| type | 图标类型 | string | pre,sub | 无 |
