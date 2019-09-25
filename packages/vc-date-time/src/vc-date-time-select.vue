<template>
  <div class="vc-date-time-select vc-date-select-container" @mouseenter="mouseover" @mouseleave="mouseout">
    <vc-input v-if="type === 'input'" type="text" v-model="curValue" placeholder="请选择"
              @click="openSelector" readonly="true" :iconfix="'sub'">
      <template v-slot:subIcon>
        <vc-input-icon :type="'sub'"><span class="fa fa-calendar"></span></vc-input-icon>
      </template>
    </vc-input>
    <div class="vc-date-selector" v-show="isShow" :class="dataClass">
      <div class="date-picker" v-if="isShowDatePicker">
        <vc-date-select style="width: 100%" v-model="curDate" :insert="true"></vc-date-select>
      </div>
      <div class="date-picker" v-if="!isShowDatePicker">
        <div class="vc-time-picker-day-title">{{getTimePickDayTitle}}</div>
        <vc-time-select style="width: 100%" v-model="curDate" :insert="true"></vc-time-select>
      </div>
      <div class="vc-date-time-oper">
        <span class="vc-date-time-picker" @click="pickDateOrTime">{{getPickTitle}}</span>
        <span class="vc-date-time-confirm" @click="pickOk">确认</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vc-date-time-select',
  props: {
    type: {
      type: String,
      default: 'single'
    },
    value: {
      type: Date,
      default: function () {
        return new Date()
      }
    },
    format: {
      type: String,
      default: 'yyyy/mm/dd hh:mm:ss'
    }
  },
  data () {
    return {
      isShow: false,
      isOverSelector: false,
      isShowDatePicker: true,
      curDate: new Date(),
      dateFormat: '/',
      timeFormat: ':',
      curValue: ''
    }
  },
  created: function () {
    this.isShow = this.type === 'single'
    this.listenDocuClick()
    this.getFormat()
    this.initData()
  },
  computed: {
    dataClass: function () {
      return { 'vc-date-selector-dropdown': this.type === 'input' }
    },
    getTimePickDayTitle: function () {
      return this.curDate.getFullYear() + '年 ' + (this.curDate.getMonth() + 1) +
        '月 ' + this.curDate.getDate() + '日'
    },
    getPickTitle: function () {
      return this.isShowDatePicker ? '选择时间' : '选择日期'
    }
  },
  methods: {
    mouseover: function () {
      if (this.type === 'input') {
        this.isOverSelector = true
      }
    },
    mouseout: function () {
      if (this.type === 'input') {
        this.isOverSelector = false
      }
    },
    listenDocuClick: function () {
      if (this.type === 'input') {
        document.addEventListener('click', (event) => {
          if (!this.isOverSelector) {
            this.isShow = false
          }
          event.stopPropagation()
        })
      }
    },
    getFormat: function () {
      this.dateFormat = this.format.split(' ')[0].charAt(4)
      this.timeFormat = this.format.split(' ')[1].charAt(2)
    },
    initData: function () {
      if (!this.value) return
      this.curDate.setFullYear(this.value.getFullYear())
      this.curDate.setMonth(this.value.getMonth())
      this.curDate.setDate(this.value.getDate())
      this.curDate.setHours(this.value.getHours())
      this.curDate.setMinutes(this.value.getMinutes())
      this.curDate.setSeconds(this.value.getSeconds())
      this.setDateValue()
    },
    setDateValue: function () {
      if (this.type === 'input') {
        this.curValue = this.formatValue(this.curDate.getFullYear()) + this.dateFormat +
          this.formatValue(this.curDate.getMonth() + 1) + this.dateFormat +
          this.formatValue(this.curDate.getDate()) + ' ' +
          this.curDate.toString().split(' ')[4].split(':').join(this.timeFormat)
      }
    },
    openSelector: function () {
      if (this.type === 'input') {
        if (this.isShow) {
          this.isShow = false
        } else {
          this.recoverData()
          this.isShowDatePicker = true
          this.isShow = true
        }
      }
    },
    closeSelector: function () {
      if (this.type === 'input') {
        this.isShow = false
      }
    },
    formatValue: function (value) {
      return value < 10 ? '0' + value : value.toString()
    },
    pickDateOrTime: function () {
      this.isShowDatePicker = !this.isShowDatePicker
    },
    pickOk: function () {
      this.setDateValue()
      let newDate = new Date(this.curDate)
      this.$emit('input', newDate)
      this.closeSelector()
    },
    recoverData: function () {
      this.curDate = new Date(this.value)
    }
  }
}
</script>

<style scoped lang="less">
  @import "./vc-date-time";
</style>
