<template>
    <div class="ProgressVcDemo">
      <div v-if="type === 'basic'">
        <h4>正常状态</h4>
        <div class="demoItem">
          <vc-progress :value="curValue1"></vc-progress>
        </div>
        <h4>带子动画状态</h4>
        <div class="demoItem">
          <vc-progress :value="curValue1" :total="total" :sub-dynamic="true"></vc-progress>
        </div>
        <h4>不显示进度百分比</h4>
        <div class="demoItem">
          <vc-progress :value="curValue1" :show-info="false"></vc-progress>
        </div>
        <h4>动态进度条</h4>
        <div class="demoItem">
          <vc-progress :type="'dynamic'"></vc-progress>
        </div>
        <div class="demoItem">
          <vc-button class="oper" @click="descValue">-</vc-button>
          <vc-button class="oper" @click="addValue">+</vc-button>
        </div>
      </div>
      <div v-if="type === 'size'">
        <h4>中等尺寸</h4>
        <div class="demoItem">
          <vc-progress :value="curValue2" :size="'medium'"></vc-progress>
        </div>
        <div class="demoItem">
          <vc-progress :value="curValue2" :size="'medium'" :sub-dynamic="true"></vc-progress>
        </div>
        <div class="demoItem">
          <vc-progress :value="curValue2" :size="'medium'" :show-info="false"></vc-progress>
        </div>
        <div class="demoItem">
          <vc-progress :type="'dynamic'" :size="'medium'"></vc-progress>
        </div>
        <h4>小尺寸</h4>
        <div class="demoItem">
          <vc-progress :value="curValue2" :size="'small'"></vc-progress>
        </div>
        <div class="demoItem">
          <vc-progress :value="curValue2" :size="'small'" :sub-dynamic="true"></vc-progress>
        </div>
        <div class="demoItem">
          <vc-progress :value="curValue2" :size="'small'" :show-info="false"></vc-progress>
        </div>
        <div class="demoItem">
          <vc-progress :type="'dynamic'" :size="'small'"></vc-progress>
        </div>
      </div>
      <div v-if="type === 'manual'">
        <h4>设置宽度</h4>
        <div class="demoItem">
          <vc-progress style="width: 240px;" :value="curValue2" :size="'medium'"></vc-progress>
        </div>
        <h4>设置进度颜色</h4>
        <div class="demoItem">
          <vc-progress :value="curValue2" :size="'medium'" :color="'#ffa31a'"></vc-progress>
        </div>
        <h4>设置子状态颜色</h4>
        <div class="demoItem">
          <vc-progress :value="curValue2" :size="'medium'" :color="'#ffa31a'"
                       :sub-dynamic="true" :sub-color="'#00cc99'"></vc-progress>
        </div>
        <h4>设置total总数</h4>
        <div class="demoItem">
          <vc-progress :value="curValue2" :size="'medium'" :total="150"></vc-progress>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProgressVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      curValue1: 30,
      curValue2: 50,
      total: 100
    }
  },
  methods: {
    descValue: function () {
      if (this.curValue1 < 15) {
        this.curValue1 = 0
      } else {
        this.curValue1 -= 15
      }
    },
    addValue: function () {
      if ((this.curValue1 + 15) > this.total) {
        this.curValue1 = this.total
      } else {
        this.curValue1 += 15
      }
    }
  }
}
</script>

<style scoped lang="less">
  .ProgressVcDemo {
    h4 {
      color: #006666;
    }
    .demoItem {
      padding: 10px 0;
      font-size: 18px;
      border-bottom: dotted 1px #999;
      .oper {
        margin-right: 15px;
        font-size: 24px;
      }
    }
  }
</style>
