<template>
  <div class="vc-year-select vc-date-select-container"
       @mouseenter="mouseover" @mouseleave="mouseout">
    <vc-input v-if="type === 'input'" type="text" v-model="curValue" placeholder="请选择年份"
              @click="openSelector" readonly="true" :iconfix="'sub'">
      <template v-slot:subIcon>
        <vc-input-icon :type="'sub'"><span class="fa fa-calendar"></span></vc-input-icon>
      </template>
    </vc-input>
    <div class="vc-date-selector" v-show="isShow" :class="yearClass">
      <div class="vc-date-year-month-row">
        <span class="vc-date-year-month-oper">
          <span class="vc-prev-year" title="上一页" @click="prevPage">
            &#8249;&#8249;</span>
        </span>
        <div class="vc-date-year-month">
          <span class="vc-date-year">{{minYear}}-{{minYear+11}}</span>
        </div>
        <span class="vc-date-year-month-oper">
          <span class="vc-next-year" title="下一页" @click="nextPage">
            &#8250;&#8250;</span>
        </span>
      </div>
      <div class="vc-year-rows">
        <span v-for="year of years" :key="year.value" class="vc-year-row" @click="selectYear(year)"
              :class="{'disable': year.disable, 'active': year.active}">
            <span>{{year.value}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vc-year-select',
  props: {
    type: {
      type: String,
      default: 'single'
    },
    value: {
      type: Number,
      default: 2019
    },
    disableYears: {
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
    }
  },
  data () {
    return {
      isShow: false,
      isOverSelector: false,
      years: [],
      minYear: 0,
      curValue: ''
    }
  },
  created: function () {
    this.isShow = this.type === 'single'
    this.listenDocuClick()
    this.initData()
    this.setDateValue(this.value)
  },
  computed: {
    yearClass: function () {
      return { 'vc-date-selector-dropdown': this.type === 'input',
        'vc-no-shadow': this.noShadow,
        'vc-insert-selector': this.insert }
    }
  },
  methods: {
    openSelector: function () {
      if (this.type === 'input') {
        if (this.isShow) {
          this.isShow = false
        } else {
          this.initData()
          this.isShow = true
        }
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
    initData: function () {
      this.minYear = this.value - 5
      this.years = this.initYearData()
    },
    initYearData: function () {
      var tmpYears = []
      for (var i = 0; i < 12; i++) {
        tmpYears.push({ value: this.minYear + i,
          disable: this.disableYears.includes(this.minYear + i),
          active: this.value === this.minYear + i })
      }
      return tmpYears
    },
    setDateValue: function (value) {
      if (this.type === 'input') {
        this.curValue = value.toString()
      }
    },
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
    prevPage: function () {
      this.minYear -= 12
      this.years = this.initYearData()
    },
    nextPage: function () {
      this.minYear += 12
      this.years = this.initYearData()
    },
    selectYear: function (year) {
      if (year.disable) return
      if (year.active) {
        return this.closeSelector()
      }
      this.cleaYears()
      year.active = true
      this.setDateValue(year.value)
      this.$emit('input', year.value)
      this.closeSelector()
    },
    closeSelector: function () {
      if (this.type === 'input') {
        this.isShow = false
      }
    },
    cleaYears: function () {
      this.years.forEach((item) => {
        if (!item.disable) {
          item.active = false
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
@import "./vc-date-time";

.vc-year-select {
  .vc-year-rows {
    display:flex;
    flex-wrap:wrap;
    flex:0 0 auto;
    justify-content:space-around;
    align-items:center;
    .vc-year-row {
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
        border-radius:3px;
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
      &.disable span {
        background:#d9d9d9;
        cursor:not-allowed;
      }
      &:not(.disable):not(.active):hover span {
        background:#e5f2ff;
      }
    }
  }
}
</style>
