<template>
  <div class="DateVcDemo">
    <div v-if="type === 'date'">
      <div class="demoItem">
        <h4>单面板(可配合其他操作使用,比如：按钮)</h4>
        <vc-date-select style="width: 360px"  v-model="date"></vc-date-select>
        <p>选择日期：{{date | vcDateFormat}}</p>
      </div>
      <div class="demoItem">
        <h4>带选择框</h4>
        <vc-date-select style="width: 360px" v-model="date2" :type="'input'"></vc-date-select>
      </div>
    </div>
    <div v-if="type === 'time'">
      <div class="demoItem">
        <h4>单面板</h4>
        <vc-time-select style="width: 360px" v-model="date3" :type="'single'"></vc-time-select>
        <p>选择时间：{{date3 | vcDateFormat}}</p>
      </div>
      <div class="demoItem">
        <h4>带选择框</h4>
        <vc-time-select style="width: 360px" v-model="date4" :type="'input'"></vc-time-select>
      </div>
    </div>
    <div v-if="type === 'dateTime'">
      <div class="demoItem">
        <h4>单面板</h4>
        <vc-date-time-select style="width: 360px" v-model="date5"></vc-date-time-select>
        <p>选择日期：{{date5 | vcDateFormat}}</p>
      </div>
      <div class="demoItem">
        <h4>带选择框</h4>
        <vc-date-time-select style="width: 360px" v-model="date6" :type="'input'"></vc-date-time-select>
      </div>
    </div>
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
      date: new Date(),
      date2: new Date(),
      date3: new Date(),
      date4: new Date(),
      date5: new Date(),
      date6: new Date()
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
  p {
    margin: 10px;
  }
}
</style>
