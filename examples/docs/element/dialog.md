## 对话框

模态对话框, 需要用户处理事务，又不希望跳转页面以致打断工作流程时使用

## 基本样式

:::demo
```html
<DialogVcDemo :type="'basic'"></DialogVcDemo>
```
```javascript
<template>
  <div class="DialogVcDemo">
      <span class="demoItem">
        <vc-button @click="show1=true">正常尺寸</vc-button>
      </span>
      <span class="demoItem">
        <vc-button @click="show2=true">大尺寸</vc-button>
      </span>
      <vc-dialog :header="'操作名称'" :type="'normal'" v-model="show1">
        <template v-slot:content>
          <form>
            <vc-form-group>
              <vc-form-label class="form-label">用户名</vc-form-label>
              <vc-form-control class="form-cotrol">
                <vc-input v-model="name"></vc-input>
              </vc-form-control>
            </vc-form-group>
            <vc-form-group>
              <vc-form-label class="form-label">技能</vc-form-label>
              <vc-form-control class="form-cotrol">
                <vc-input v-model="kill"></vc-input>
              </vc-form-control>
            </vc-form-group>
          </form>
        </template>
        <template v-slot:footer>
          <span class="form-btn-group">
            <vc-button @click="show1=false">确定</vc-button>
          </span>
          <span class="form-btn-group">
            <vc-button :type="'cancel'" @click="show1=false">取消</vc-button>
          </span>
        </template>
      </vc-dialog>
      <vc-dialog :header="'文章名称'" :type="'large'" v-model="show2">
        <template v-slot:content>
          <div class="wenzhang">
            <p>倚在冬的门楣，静心遥盼雪天使的降临。娉娉婷婷，风姿绰约，飘飘扬扬，曼妙万千。以一身晶莹，绽放独特魅力；以一分柔媚，征服万物生灵；
              以一缕素洁，攫获万心宠爱。如蝶飞舞，如梦唯美，如烟轻柔，如雾飘缈，如心纯净，如水澄澈。</p>
            <p>忧郁的愁丝晕染了流年的底色，孤寒的素洁染白了寒冬的萧瑟。凛冽的寒风呼啸而来，残瘦的枯枝在风中摇曳。清冷的浩空好似在酝酿一场盛
              大的群舞盛宴，天边仿佛飞来白茫茫一片素洁，那是雪精灵在炫舞翩跹。曼妙的舞姿，灵动的舞步，飘逸的神韵，优雅地绽放，美而不艳，媚而不俗，
              令人沉醉，不能自拔……</p>
            <p>“晚来天欲雪，能饮一杯无？”——期盼了一个冬季的雪花，终于纷纷扬扬地飘洒在苍穹的天宇。隔着透明的玻璃窗，看着一片片雪花轻盈飘落，心底
              情不自禁地奔涌出一股抑制不住的惊喜。迫不及待地推开门，只见千千万万片飞絮，犹如一片片雪白的鹅毛，洋洋洒洒地从天而降，穿越浩渺星空，
              飞向苍茫大地。</p>
          </div>
        </template>
        <template v-slot:footer>
          <span class="form-btn-group">
            <vc-button @click="show2=false">确定</vc-button>
          </span>
          <span class="form-btn-group">
            <vc-button :type="'cancel'" @click="show2=false">取消</vc-button>
          </span>
        </template>
      </vc-dialog>
  </div>
</template>

<script>
export default {
  name: 'CheckboxDemo',
  data () {
    return {
      name: 'Jack',
      kill: 'eat',
      show1: false,
      show2: false,
    }
  }
}
</script>
```
:::

## 自定义样式

:::demo
```html
<DialogVcDemo :type="'manual'"></DialogVcDemo>
```
```javascript
<template>
  <div class="DialogVcDemo">
      <span class="demoItem">
        <vc-button @click="show3=true">自定义top</vc-button>
      </span>
      <span class="demoItem">
        <vc-button @click="show4=true">自定义宽度</vc-button>
      </span>
    <vc-dialog :header="'操作名称'" :type="'normal'" :top="'150px'" v-model="show3">
      <template v-slot:content>
        <div class="confirm">
          <div class="description">
            <span class="grade normal">!</span>
            <span class="text">我是副标题</span>
          </div>
          <p>
            忧郁的愁丝晕染了流年的底色，孤寒的素洁染白了寒冬的萧瑟。凛冽的寒风呼啸而来，残瘦的枯枝在风中摇曳。清冷的浩空好似在酝酿一场盛
          </p>
        </div>
      </template>
      <template v-slot:footer>
       <span class="form-btn-group">
          <vc-button @click="show3=false">确定</vc-button>
        </span>
        <span class="form-btn-group">
          <vc-button :type="'cancel'" @click="show3=false">取消</vc-button>
        </span>
      </template>
    </vc-dialog>
    <vc-dialog :header="'操作名称'" :type="'normal'" :width="'500px'" v-model="show4">
      <template v-slot:content>
        <div class="confirm">
          <div class="description">
            <span class="grade major">!</span>
            <span class="text">我是副标题</span>
          </div>
          <p>
            忧郁的愁丝晕染了流年的底色，孤寒的素洁染白了寒冬的萧瑟。凛冽的寒风呼啸而来，残瘦的枯枝在风中摇曳。清冷的浩空好似在酝酿一场盛
          </p>
        </div>
      </template>
      <template v-slot:footer>
       <span class="form-btn-group">
          <vc-button :type="'major'" @click="show4=false">确定</vc-button>
        </span>
        <span class="form-btn-group">
          <vc-button :type="'cancel'" @click="show4=false">取消</vc-button>
        </span>
      </template>
    </vc-dialog>
  </div>
</template>

<script>
export default {
  name: 'CheckboxDemo',
  data () {
    return {
      show3: false,
      show4: false,
    }
  }
}
</script>
```
:::

## 属性参数

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| type | 类型 | string | normal,large | normal |
| header | 模态框名称 | string | success,warn,error | 无 |
| top | 到上边沿的距离 | string | px | 80px |
| zIndex | 模态框层级 | number | 无 | 9000 |
| width | 宽度 | string | px/% | 无 |
| isShow | 是否呈现 | boolean | true,false | false |
