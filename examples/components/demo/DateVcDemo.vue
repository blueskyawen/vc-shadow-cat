<template>
  <div class="DateVcDemo">
    <h4>year-select</h4>
    <vc-year-select style="width: 360px" v-model="year" :type="'input'"></vc-year-select>
    <p>Year: {{year}}</p>
    <h4>month-select</h4>
    <vc-month-select style="width: 360px" v-model="date" :type="'input'"></vc-month-select>
    <p>monthShow: {{monthShow()}}</p>
  </div>
</template>

<script>
export default {
  name: 'DateVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      year: 2019,
      date: new Date()
    }
  },
  methods: {
    monthShow: function () {
      return this.date.toLocaleDateString()
    }
  }
}
</script>

<style scoped lang="less">
.DateVcDemo {
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
