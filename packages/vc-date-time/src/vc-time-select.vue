<template>
  <div class="vc-time-select vc-date-select-container" @mouseenter="mouseover" @mouseleave="mouseout">
    <vc-input v-if="type === 'input'" type="text" v-model="curValue" placeholder="请选择时间"
              @click="openSelector" readonly="true" :iconfix="'sub'">
      <template v-slot:subIcon>
        <vc-input-icon :type="'sub'"><span class="fa fa-clock-o"></span></vc-input-icon>
      </template>
    </vc-input>
    <div class="vc-time-selector" v-show="isShow" :class="timeClass">
      <div class="vc-time-columns">
        <div class="vc-time-column" ref="hourCols">
            <span class="vc-time-row" v-for="hour of hours" :key="hour.value"
                  @click="pickTime('hour', hour)"
                  :class="{'disable':hour.disable,'active':hour.active}">{{hour.value}}</span>
        </div>
        <div class="vc-time-column" ref="minuteCols">
            <span class="vc-time-row" v-for="minute of minutes" :key="minute.value"
                  @click="pickTime('minute', minute)"
                  :class="{'disable':minute.disable,'active':minute.active}">{{minute.value}}</span>
        </div>
        <div class="vc-time-column" ref="secondCols">
            <span  class="vc-time-row" v-for="second of seconds" :key="second.value"
                   @click="pickTime('second', second)"
                   :class="{'disable':second.disable,'active':second.active}">{{second.value}}</span>
        </div>
      </div>
      <div class="vc-time-oper" v-if="!insert">
        <span class="vc-time-confirm" @click="pickTimeOk">确认</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vc-time-select',
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
    disableHours: {
      type: Array,
      default: function () {
        return []
      }
    },
    disableMinutes: {
      type: Array,
      default: function () {
        return []
      }
    },
    disableSeconds: {
      type: Array,
      default: function () {
        return []
      }
    },
    insert: {
      type: Boolean,
      default: false
    },
    noShadow: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: 'hh:mm:ss'
    }
  },
  data () {
    return {
      isShow: false,
      isOverSelector: false,
      formatLabel: '/',
      curValue: '',
      hours: [],
      minutes: [],
      seconds: [],
      selectTime: {},
      oldSelectTime: {},
      hourTimer: undefined,
      minuteTimer: undefined,
      secondTimer: undefined
    }
  },
  created: function () {
    this.isShow = this.type === 'single'
    this.listenDocuClick()
    this.getFormat()
    this.initData()
  },
  mounted: function () {
    this.initActivePosition()
  },
  computed: {
    timeClass: function () {
      return { 'vc-date-selector-dropdown': this.type === 'input',
        'vc-no-shadow': this.noShadow,
        'vc-insert-selector': this.insert }
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
      this.formatLabel = this.format[2]
    },
    initData: function () {
      this.selectTime = {
        hour: this.value.getHours(),
        minute: this.value.getMinutes(),
        second: this.value.getSeconds()
      }
      for (var h = 0; h < 24; h++) {
        this.hours.push({ value: h,
          disable: this.disableHours.includes(h),
          active: this.selectTime.hour === h })
      }
      for (var m = 0; m < 60; m++) {
        this.minutes.push({ value: m,
          disable: this.disableMinutes.includes(m),
          active: this.selectTime.minute === m })
      }
      for (var s = 0; s < 60; s++) {
        this.seconds.push({ value: s,
          disable: this.disableSeconds.includes(s),
          active: this.selectTime.second === s })
      }
      this.setDateValue()
    },
    setDateValue: function () {
      if (this.type === 'input') {
        this.curValue = this.selectTime.hour + this.formatLabel + this.selectTime.minute + this.formatLabel + this.selectTime.second
      }
    },
    initActivePosition: function () {
      this.oldSelectTime.hour = this.selectTime.hour
      this.oldSelectTime.minute = this.selectTime.minute
      this.oldSelectTime.second = this.selectTime.second
      this.$refs.hourCols.scrollTop = this.selectTime.hour * 30
      this.$refs.minuteCols.scrollTop = this.selectTime.minute * 30
      this.$refs.secondCols.scrollTop = this.selectTime.second * 30
    },
    setActivePosition: function () {
      this.$refs.hourCols.scrollTop = this.selectTime.hour * 30
      this.$refs.minuteCols.scrollTop = this.selectTime.minute * 30
      this.$refs.secondCols.scrollTop = this.selectTime.second * 30
    },
    openSelector: function () {
      if (this.type === 'input') {
        if (this.isShow) {
          this.isShow = false
        } else {
          this.recoverData()
          this.isShow = true
          this.$nextTick(() => { this.setActivePosition() })
        }
      }
    },
    recoverData: function () {
      this.selectTime.hour = this.value.getHours()
      this.selectTime.minute = this.value.getMinutes()
      this.selectTime.second = this.value.getSeconds()
      this.oldSelectTime.hour = this.selectTime.hour
      this.oldSelectTime.minute = this.selectTime.minute
      this.oldSelectTime.second = this.selectTime.second
      this.hours.forEach((item) => {
        if (item.active) {
          item.active = false
        }
        if (item.value === this.selectTime.hour) {
          item.active = true
        }
      })
      this.minutes.forEach((item) => {
        if (item.active) {
          item.active = false
        }
        if (item.value === this.selectTime.minute) {
          item.active = true
        }
      })
      this.seconds.forEach((item) => {
        if (item.active) {
          item.active = false
        }
        if (item.value === this.selectTime.second) {
          item.active = true
        }
      })
    },
    closeSelector: function () {
      if (this.type === 'input') {
        this.isShow = false
      }
    },
    pickTime: function (type, item) {
      if (type === 'hour' && !item.disable && !item.active) {
        this.cleaTimes(this.hours)
        item.active = true
        this.selectTime.hour = item.value
        this.scrollHourActivePosition()
      }
      if (type === 'minute' && !item.disable && !item.active) {
        this.cleaTimes(this.minutes)
        item.active = true
        this.selectTime.minute = item.value
        this.scrollMinuteActivePosition()
      }
      if (type === 'second' && !item.disable && !item.active) {
        this.cleaTimes(this.seconds)
        item.active = true
        this.selectTime.second = item.value
        this.scrollSecondActivePosition()
      }
      if (this.insert) {
        var newDate = new Date(this.value)
        newDate.setHours(this.selectTime.hour)
        newDate.setMinutes(this.selectTime.minute)
        newDate.setSeconds(this.selectTime.second)
        this.$emit('input', newDate)
      }
    },
    cleaTimes: function (items) {
      items.forEach((item) => {
        if (!item.disable) {
          item.active = false
        }
      })
    },
    scrollHourActivePosition: function () {
      if (this.selectTime.hour > this.oldSelectTime.hour) {
        this.hourTimer = setInterval(() => {
          this.oldSelectTime.hour++
          this.$refs.hourCols.scrollTop = this.oldSelectTime.hour * 30
          if (this.selectTime.hour === this.oldSelectTime.hour) {
            clearInterval(this.hourTimer)
          }
        }, 50)
      }
      if (this.selectTime.hour < this.oldSelectTime.hour) {
        this.hourTimer = setInterval(() => {
          this.oldSelectTime.hour--
          this.$refs.hourCols.scrollTop = this.oldSelectTime.hour * 30
          if (this.selectTime.hour === this.oldSelectTime.hour) {
            clearInterval(this.hourTimer)
          }
        }, 50)
      }
    },
    scrollMinuteActivePosition: function () {
      if (this.selectTime.minute > this.oldSelectTime.minute) {
        this.minuteTimer = setInterval(() => {
          this.oldSelectTime.minute++
          this.$refs.minuteCols.scrollTop = this.oldSelectTime.minute * 30
          if (this.selectTime.minute === this.oldSelectTime.minute) {
            clearInterval(this.minuteTimer)
          }
        }, 50)
      }
      if (this.selectTime.minute < this.oldSelectTime.minute) {
        this.minuteTimer = setInterval(() => {
          this.oldSelectTime.minute--
          this.$refs.minuteCols.scrollTop = this.oldSelectTime.minute * 30
          if (this.selectTime.minute === this.oldSelectTime.minute) {
            clearInterval(this.minuteTimer)
          }
        }, 50)
      }
    },
    scrollSecondActivePosition: function () {
      if (this.selectTime.second > this.oldSelectTime.second) {
        this.secondTimer = setInterval(() => {
          this.oldSelectTime.second++
          this.$refs.secondCols.scrollTop = this.oldSelectTime.second * 30
          if (this.selectTime.second === this.oldSelectTime.second) {
            clearInterval(this.secondTimer)
          }
        }, 50)
      }
      if (this.selectTime.second < this.oldSelectTime.second) {
        this.secondTimer = setInterval(() => {
          this.oldSelectTime.second--
          this.$refs.secondCols.scrollTop = this.oldSelectTime.second * 30
          if (this.selectTime.second === this.oldSelectTime.second) {
            clearInterval(this.secondTimer)
          }
        }, 50)
      }
    },
    pickTimeOk: function () {
      var newDate = new Date(this.value)
      newDate.setHours(this.selectTime.hour)
      newDate.setMinutes(this.selectTime.minute)
      newDate.setSeconds(this.selectTime.second)
      this.$emit('input', newDate)
      this.setDateValue()
      this.closeSelector()
    }
  }
}
</script>

<style scoped lang="less">
@import "./vc-date-time";

.vc-time-select {
  .fa-clock-o {
    font-size: 18px;
  }
  .vc-time-selector {
    .vc-time-columns {
      display:flex;
      flex-wrap:wrap;
      flex:0 0 auto;
      align-items:center;
      .vc-time-column {
        display:flex;
        flex-direction:column;
        width:33.3333%;
        align-items:center;
        cursor:pointer;
        border-right:solid 1px #ccc;
        box-sizing:border-box;
        max-height:200px;
        overflow:hidden;
        position:relative;
        padding: 0 0 170px;
        &:hover {
          overflow-y:auto;
        }
        &:last-child {
          border:none;
        }
        .vc-time-row {
          display:inline-block;
          height:30px;
          width:100%;
          line-height:30px;
          text-align:left;
          cursor:pointer;
          font-size:14px;
          color:#595959;
          padding-left: 30px;
          &.active {
            background:#e6e6e6;
            font-weight:bold;
          }
          &:not(.disable):not(.active):hover {
            background:#e5f5ff;
          }
          &.disable {
            color:#b3b3b3;
            opacity: 0.6;
            cursor:not-allowed;
          }
        }
      }
    }
    .vc-time-oper {
      display:flex;
      justify-content:flex-end;
      height:36px;
      align-items:center;
      border-top:solid 1px #e6e6e6;
      .vc-time-confirm {
        display:inline-block;
        width:50px;
        height:24px;
        font-size:14px;
        background:#0066ff;
        color:#fff;
        text-align:center;
        line-height:24px;
        border-radius:3px;
        margin-right:10px;
        cursor:pointer;
      }
    }
  }
}
</style>
