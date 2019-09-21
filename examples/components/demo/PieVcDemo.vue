<template>
  <div class="PieVcDemo">
    <div v-if="type === 'pie'">
      <vc-pie style="margin-right: 40px" v-for="(option, index) of options" :key="index"
              :header="option.title" :pie-data="option.data" :type="'pie'"></vc-pie>
    </div>
    <div v-if="type === 'ring'">
      <vc-pie style="margin-right: 40px" v-for="(option, index) of options" :key="index"
              :header="option.title" :pie-data="option.data" :type="'ring'"></vc-pie>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PieVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      options: [
        { title: '使用率',
          type: 'pie',
          data: [{ title: '已使用', value: 37 }, { title: '总共', value: 100 }]
        },
        { title: '使用率',
          type: 'pie',
          data: [{ title: '已使用', value: 75 }, { title: '总共', value: 100 }]
        },
        { title: '使用率',
          type: 'pie',
          data: [{ title: '已使用', value: 90 }, { title: '总共', value: 100 }]
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.PieVcDemo {
  h4 {
    color: #006666;
  }
  .demoItem {
    padding: 10px 0;
    font-size: 18px;
    border-bottom: dotted 1px #999;
  }
}
</style>
