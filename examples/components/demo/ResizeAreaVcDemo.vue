<template>
  <div class="ResizeAreaVcDemo">
    <div v-if="type === 'one'">
      <vc-resize-area style="height: 300px;width: 100%;">
        <template v-slot:leftarea>
          <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
        </template>
        <template v-slot:rightarea>
          <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
        </template>
      </vc-resize-area>
    </div>
    <div v-if="type === 'two'">
      <vc-resize-area style="height: 300px;width: 100%;" :has-border="true">
        <template v-slot:leftarea>
          <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
        </template>
        <template v-slot:rightarea>
          <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
        </template>
      </vc-resize-area>
    </div>
    <div v-if="type === 'three'">
      <vc-resize-area style="height: 300px;width: 100%;" :resizable="false">
        <template v-slot:leftarea>
          <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
        </template>
        <template v-slot:rightarea>
          <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
        </template>
      </vc-resize-area>
    </div>
    <div v-if="type === 'four'">
      <vc-resize-area style="height: 300px;width: 100%;" :single="true">
        <template v-slot:leftarea>
          <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
        </template>
        <template v-slot:rightarea>
          <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
        </template>
      </vc-resize-area>
    </div>
    <div v-if="type === 'five'">
      <vc-resize-area style="height: 200px;width: 800px" :left-width="'30%'" :min-left-width="100">
        <template v-slot:leftarea>
          <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
        </template>
        <template v-slot:rightarea>
          <span v-for="num of nums" :key="num" class="area-icon">{{num}}</span>
        </template>
      </vc-resize-area>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResizeAreaVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
  }
}
</script>

<style scoped lang="less">
.ResizeAreaVcDemo {
  h4 {
    color: #006666;
  }
  .demoItem {
    padding: 10px 0;
    font-size: 18px;
    border-bottom: dotted 1px #999;
  }
  .area-icon {
    display:inline-block;
    height:50px;
    width:130px;
    text-align:center;
    line-height:50px;
    border:solid 1px #ccc;
    background-color:#00cc99;
    margin:10px;
    font-size:18px;
    color:#fff;
  }
}
</style>
