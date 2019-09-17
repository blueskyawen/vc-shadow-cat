<template>
  <div class="DialogVcDemo">
    <div v-if="type === 'basic'">
      <span class="demoItem">
        <vc-button @click="show1=true">正常尺寸</vc-button>
      </span>
      <span class="demoItem">
        <vc-button @click="show2=true">大尺寸</vc-button>
      </span>
    </div>
    <div v-if="type === 'manual'">
      <span class="demoItem">
        <vc-button @click="show3=true">自定义top</vc-button>
      </span>
      <span class="demoItem">
        <vc-button @click="show4=true">自定义宽度</vc-button>
      </span>
    </div>
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
  name: 'DialogVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      name: 'Jack',
      kill: 'eat',
      show1: false,
      show2: false,
      show3: false,
      show4: false
    }
  }
}
</script>

<style scoped lang="less">
  .DialogVcDemo {
    h4 {
      color: #006666;
    }
    .demoItem {
      margin: 10px 20px;
    }
    form {
      margin:15px auto 15px;
      .form-label {
        width: 25%;
      }
      .form-cotrol {
        width: 60%;
      }
    }
    .form-btn-group {
      margin: 10px;
    }
  }
  .wenzhang{
    margin:10px;
    line-height:30px;
    text-indent:50px;
  }
  @media (max-width: 767px) {
    .wenzhang {
      max-height: 500px;
      overflow-y: auto;
    }
  }
  .confirm {
    padding: 10px 0;
    .description {
      display:flex;
      margin:auto;
      border:solid 1px #66ccff;
      border-radius:4px;
      background:#e5f7ff;
      padding:8px;
      align-items: center;
      .grade {
        width:20px;
        height:20px;
        text-align:center;
        line-height:20px;
        border-radius:50%;
        font-size: 14px;
        &.normal {
          border:solid 1px #0040ff;
          color:#0040ff;
        }
        &.major {
          border:solid 1px #ff0000;
          color:#ff0000;
        }
      }
      .text{
        font-size:14px;
        text-align:left;
        margin-left:10px;;
      }
    }
    p {
      margin-top: 20px;
    }
  }
</style>
