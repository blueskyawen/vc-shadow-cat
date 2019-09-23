<template>
  <div class="vc-month-select vc-date-select-container" @mouseenter="mouseover" @mouseleave="mouseout">
    <vc-input v-if="type === 'input'" type="text" v-model="curValue" placeholder="请选择月份"
              @click="openSelector" readonly="true" :iconfix="'sub'">
      <template v-slot:subIcon>
        <vc-input-icon :type="'sub'"><span class="fa fa-calendar"></span></vc-input-icon>
      </template>
    </vc-input>
    <div class="vc-date-selector" v-show="isShow" :class="monthClass">
      <div class="vc-date-year-month-row">
        <span class="vc-date-year-month-oper">
          <span class="vc-prev-month" title="上一页" @click="prevPage">
            &#8249;&#8249;</span>
        </span>
        <div class="vc-date-year-month">
          <span class="vc-date-month">{{curYear}}</span>
        </div>
        <span class="vc-date-year-month-oper">
          <span class="vc-next-year" title="下一页" @click="nextPage">
            &#8250;&#8250;</span>
        </span>
      </div>
      <div class="vc-month-rows">
        <span v-for="month of months" :key="month.value" class="vc-month-row" @click="selectMonth(month)"
              :class="{'disable': month.disable, 'active': month.active}">
            <span>{{month.label}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vc-month-select',
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
    disableMonths: {
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
      default: 'yyyy/mm'
    }
  },
  data () {
    return {
      isShow: false,
      isOverSelector: false,
      months: [{ value: 0, label: '1月' }, { value: 1, label: '2月' }, { value: 2, label: '3月' },
        { value: 3, label: '4月' }, { value: 4, label: '5月' }, { value: 5, label: '6月' },
        { value: 6, label: '7月' }, { value: 7, label: '8月' }, { value: 8, label: '9月' },
        { value: 9, label: '10月' }, { value: 10, label: '11月' }, { value: 11, label: '12月' }],
      curYear: '',
      formatLabel: '/',
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
    monthClass: function () {
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
      this.curYear = this.value.getFullYear()
      this.months.forEach((month) => {
        this.$set(month, 'disable', this.disableMonths.includes(month.value))
        this.$set(month, 'active', month.value === this.value.getMonth())
      })
      this.setDateValue(this.value)
    },
    setDateValue: function (date) {
      if (this.type === 'input') {
        this.curValue = this.formatValue(date.getFullYear()) + this.formatLabel +
          this.formatValue(date.getMonth() + 1)
      }
    },
    formatValue: function (value) {
      return value < 10 ? '0' + value : value.toString()
    },
    prevPage: function () {
      this.curYear--
    },
    nextPage: function () {
      this.curYear++
    },
    selectMonth: function (item) {
      if (item.disable) return
      if (item.active) {
        return this.closeSelector()
      }
      this.cleaMonths()
      item.active = true
      var newDate = new Date(this.curYear, item.value)
      this.setDateValue(newDate)
      this.$emit('input', newDate)
      this.closeSelector()
    },
    cleaMonths: function () {
      this.months.forEach((item) => {
        if (!item.disable) {
          item.active = false
        }
      })
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
    recoverData: function () {
      this.curYear = this.value.getFullYear()
    },
    closeSelector: function () {
      if (this.type === 'input') {
        this.isShow = false
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "./vc-date-time";

.vc-month-select {
  .vc-month-rows {
    display:flex;
    flex-wrap:wrap;
    flex:0 0 auto;
    justify-content:space-around;
    align-items:center;
    .vc-month-row {
      display:inline-flex;
      width:33.33%;
      justify-content:center;
      align-items:center;
      height:50px;
      cursor:pointer;
      span {
        display:inline-block;
        height:36px;
        width:70%;
        border-radius:5px;
        border:solid 1px transparent;
        text-align:center;
        line-height:36px;
        cursor:pointer;
        font-size:14px;
        color:#595959;
      }
      &.active span {
        color:#fff;
        background:#008ae6;
      }
      &:not(.disable):not(.active):hover span {
        background:#b3d9ff;
      }
      &.disable span {
        background:#d9d9d9;
        cursor:not-allowed;
      }
    }
  }
}
</style>
