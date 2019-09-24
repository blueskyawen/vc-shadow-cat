<template>
  <div class="vc-date-select vc-date-select-container" @mouseenter="mouseover" @mouseleave="mouseout">
    <vc-input v-if="type === 'input'" type="text" v-model="curValue" placeholder="请选择"
              @click="openSelector" readonly="true" :iconfix="'sub'">
      <template v-slot:subIcon>
        <vc-input-icon :type="'sub'"><span class="fa fa-calendar"></span></vc-input-icon>
      </template>
    </vc-input>
    <div class="vc-date-selector" v-show="isShow" :class="dataClass">
      <div class="date-picker" v-if="isShowDatePicker">
        <div class="vc-date-year-month-row">
          <span class="vc-date-year-month-oper">
              <span class="vc-prev-year" title="上一年" @click="prevYear">
              &#8249;&#8249;</span>
              <span class="vc-prev-month" title="上一月" @click="prevMonth">
              &#8249;</span>
          </span>
          <div class="vc-date-year-month">
            <span class="vc-date-year" title="选择年份" @click="pickYear">{{yearMonthDate.year}}年</span>
            <span class="vc-date-month" title="选择月份" @click="pickMonth">{{yearMonthDate.month + 1}}月</span>
          </div>
          <span class="vc-date-year-month-oper">
                <span class="vc-next-month" title="下一月" @click="nextMonth">
                &#8250;</span>
                <span class="vc-next-year" title="下一年" @click="nextYear">
                &#8250;&#8250;</span>
            </span>
        </div>
        <div class="vc-date-week-rows">
          <span class="vc-date-week" v-for="week of weeks" :key="week">{{week}}</span>
        </div>
        <div class="vc-date-day-rows">
          <span class="vc-date-day" v-for="day of yearMonthDate.dayDatas" :key="day.date"
                @click="selectDay(day)"
                :class="{'disable':day.disable,'active':day.active,'today':day.today}">
            <span>{{day.date}}</span>
          </span>
        </div>
        <div class="vc-date-time-footer" v-if="!insert">
          <span class="vc-date-today" @click="selectToday">今日</span>
        </div>
      </div>
      <div class="date-picker" v-if="isShowYearPicker">
        <vc-year-select v-model="yearMonthDate.year" @input="backDatePicker('year')"
                        :noShadow="true" :insert="true"></vc-year-select>
      </div>
      <div class="date-picker" *ngIf="isShowMonthPicker">
        <vc-month-select v-model="monthPickerDate" @input="backDatePicker('month')"
                           :noShadow="true" :insert="true">
        </vc-month-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vc-date-select',
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
      default: 'yyyy/mm/dd'
    }
  },
  data () {
    return {
      isShow: false,
      isOverSelector: false,
      today: new Date(),
      year: 2019,
      month: 2,
      day: 16,
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      yearMonthDate: { year: 2019, month: 0, dayDatas: [] },
      isShowDatePicker: true,
      isShowYearPicker: false,
      isShowMonthPicker: false,
      monthPickerDate: new Date(),
      formatLabel: '/',
      curValue: null
    }
  },
  created: function () {
    this.isShow = this.type === 'single'
    this.listenDocuClick()
    this.getFormat()
    this.initData()
    this.getYearMonthDate()
    this.setDateValue(this.value)
  },
  computed: {
    dataClass: function () {
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
      this.formatLabel = this.format[4]
    },
    initData: function () {
      if (!this.value) {
        this.curValue = new Date()
      } else {
        this.curValue = new Date(this.value)
      }
      this.setSelectedDate()
      this.yearMonthDate.year = this.year
      this.yearMonthDate.month = this.month

      this.curYear = this.value.getFullYear()
      this.months.forEach((month) => {
        this.$set(month, 'disable', this.disableMonths.includes(month.value))
        this.$set(month, 'active', month.value === this.value.getMonth())
      })
      this.setDateValue(this.value)
    },
    getYearMonthDate: function () {
      let tmpDays = []
      // 获取该月第一天为星期几
      let firstDateOfCurMonth = new Date(this.yearMonthDate.year, this.yearMonthDate.month, 1)
      let firstDateOfCurMonthDay = firstDateOfCurMonth.getDay()
      // 获取该月最后一天的日期
      let lastDateOfCurMonth = new Date(this.yearMonthDate.year, this.yearMonthDate.month + 1, 0)
      let lastDateOfCurMonthDate = lastDateOfCurMonth.getDate()
      // 获取上一个月最后一天的日期
      let lastDateOfPrevMonth = new Date(this.yearMonthDate.year, this.yearMonthDate.month, 0)
      let lastDateOfPrevMonthDate = lastDateOfPrevMonth.getDate()
      // 上个月
      for (let i = 0; i < firstDateOfCurMonthDay; i++) {
        tmpDays.unshift({
          date: lastDateOfPrevMonthDate - i,
          active: false,
          disable: true,
          today: false
        })
      }
      // 本月
      for (let i = 0; i < lastDateOfCurMonthDate; i++) {
        if (this.yearMonthDate.year === this.year && this.yearMonthDate.month === this.month &&
          this.day === i + 1) {
          tmpDays.push({
            date: i + 1,
            active: true,
            disable: false,
            today: false
          })
        } else if (this.today.getFullYear() === this.yearMonthDate.year &&
          this.today.getMonth() === this.yearMonthDate.month &&
          this.today.getDate() === i + 1) {
          tmpDays.push({
            date: i + 1,
            active: false,
            disable: false,
            today: true
          })
        } else {
          tmpDays.push({
            date: i + 1,
            active: false,
            disable: false,
            today: false
          })
        }
      }
      // 下个月
      let leftMonthLength = 42 - tmpDays.length
      for (let i = 0; i < leftMonthLength; i++) {
        tmpDays.push({
          date: i + 1,
          active: false,
          disable: true,
          today: false
        })
      }
      this.yearMonthDate.dayDatas = tmpDays
    },
    setDateValue: function (date) {
      if (this.type === 'input') {
        this.curValue = this.formatValue(date.getFullYear()) + this.formatLabel +
          this.formatValue(date.getMonth() + 1) + this.formatLabel +
          this.formatValue(date.getDate())
      }
    },
    formatValue: function (value) {
      return value < 10 ? '0' + value : value.toString()
    },
    setSelectedDate: function () {
      this.year = this.date.getFullYear()
      this.month = this.date.getMonth()
      this.day = this.date.getDate()
    },
    openSelector: function () {
      if (this.type === 'input') {
        if (this.isShow) {
          this.isShow = false
        } else {
          this.recoverData()
          this.isShow = true
        }
      }
    },
    closeSelector: function () {
      if (this.type === 'input') {
        this.isShow = false
      }
    },
    prevYear: function () {
      this.yearMonthDate.year--
      this.getYearMonthDate()
    },
    nextYear: function () {
      this.yearMonthDate.year++
      this.getYearMonthDate()
    },
    prevMonth: function () {
      if (this.yearMonthDate.month === 0) {
        this.yearMonthDate.month = 11
        this.yearMonthDate.year--
      } else {
        this.yearMonthDate.month--
      }
      this.getYearMonthDate()
    },
    nextMonth: function () {
      if (this.yearMonthDate.month === 11) {
        this.yearMonthDate.month = 0
        this.yearMonthDate.year++
      } else {
        this.yearMonthDate.month++
      }
      this.getYearMonthDate()
    },
    recoverData: function () {
      this.yearMonthDate.year = this.year
      this.yearMonthDate.month = this.month
      this.getYearMonthDate()
    },
    pickYear: function () {
      this.clearPickerFlag()
      this.isShowYearPicker = true
    },
    clearPickerFlag: function () {
      this.isShowDatePicker = false
      this.isShowMonthPicker = false
      this.isShowYearPicker = false
    },
    pickMonth: function () {
      this.monthPickerDate.setFullYear(this.yearMonthDate.year)
      this.monthPickerDate.setMonth(this.yearMonthDate.month)
      this.clearPickerFlag()
      this.isShowMonthPicker = true
    },
    selectDay: function (item) {
      if (item.disable || item.active) return
      this.clearItems(this.yearMonthDate.dayDatas)
      item.active = true
      this.emitDateChange(item.date)
    },
    clearItems: function (items) {
      items.forEach((item) => {
        if (!item.disable) {
          item.active = false
        }
      })
    },
    selectToday: function () {
      let todayYear = this.today.getFullYear()
      let todayMonth = this.today.getMonth()
      let todayDay = this.today.getDate()
      if (todayYear !== this.yearMonthDate.year || todayMonth !== this.yearMonthDate.month) {
        this.yearMonthDate.year = todayYear
        this.yearMonthDate.month = todayMonth
        this.getYearMonthDate()
      } else {
        this.clearItems(this.yearMonthDate.dayDatas)
      }
      for (let day of this.yearMonthDate.dayDatas) {
        if (!day.disable && day.date === todayDay) {
          day.active = true
          break
        }
      }
      this.emitDateChange(todayDay)
    },
    emitDateChange: function (day) {
      this.date.setFullYear(this.yearMonthDate.year)
      this.date.setMonth(this.yearMonthDate.month)
      this.date.setDate(day)
      this.setSelectedDate()
      this.setDateValue()
      this.$emit('input', this.date)
      this.closeSelector()
    },
    backDatePicker: function (type) {
      if (type === 'year') {
        this.clearPickerFlag()
        this.getYearMonthDate()
        this.isShowDatePicker = true
      }
      if (type === 'month') {
        this.clearPickerFlag()
        this.yearMonthDate.year = this.monthPickerDate.getFullYear()
        this.yearMonthDate.month = this.monthPickerDate.getMonth()
        this.getYearMonthDate()
        this.isShowDatePicker = true
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "./vc-date-time";

.vc-date-select {
  .date-picker {
    .vc-date-week-rows {
      display:flex;
      flex:1 1 auto;
      justify-content:space-around;
      align-items:center;
      .vc-date-week {
        display:inline-flex;
        width:14.28%;
        justify-content:center;
        align-items:center;
        height:36px;
      }
    }
    .vc-date-day-rows {
      display:flex;
      flex-wrap:wrap;
      flex:0 0 auto;
      justify-content:space-around;
      align-items:center;
      .vc-date-day {
        display:inline-flex;
        width:14.28%;
        justify-content:center;
        align-items:center;
        height:36px;
        span {
          display:inline-block;
          height:24px;
          width:24px;
          border-radius:50%;
          border:solid 1px transparent;
          text-align:center;
          line-height:24px;
          cursor:pointer;
          font-size:14px;
        }
        &.today span {
          background:#e6e6e6;
        }
        &:not(.disable):hover span {
          background:#b3d1ff;
        }
        &.active span {
          border-color:#0066ff;
          background:#b3d3ff;
          color:#0047b3;
          font-weight:600;
        }
        &.disable span {
          color:#666;
          opacity: 0.6;
          cursor: not-allowed;
        }
      }
    }
    .vc-date-time-footer {
      display:flex;
      justify-content:flex-end;
      align-items:center;
      height:36px;
      border-top: solid 1px #ccc;
      .vc-date-today {
        cursor: pointer;
        color:#0066ff;
        margin-right:10px;
        font-size: 14px;
      }
    }
  }
}
</style>
