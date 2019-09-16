<template>
  <div class="vc-tab">
    <div class="tab-bars" :class="{'hasOperBtn':showOpers}" ref="tabContain">
      <span class="tab-oper tab-prev" @click.stop="goPre" :class="{'disbaled':disablePreOper}" ref="preOper">
        <span></span>
      </span>
      <span class="tab-oper tab-next" @click.stop="goNext" :class="{'disbaled':disableNextOper}" ref="nextOper">
        <span></span>
      </span>
      <ul :class="tabClassz" ref="tabBars">
        <li class="barItem" v-for="option in options" :key="option.value" :title="option.name"
            :class="{ 'active': option.isActive, 'disabled': option.isDisable }" @click="selectTab(option)">
          {{option.name}}
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <transition name="vctab" mode="out-in">
        <slot></slot>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vc-tab',
  model: {
    prop: 'curTab',
    event: 'change'
  },
  props: {
    level: {
      type: String,
      default: 'super'
    },
    type: {
      type: String,
      default: 'card'
    },
    options: {
      type: Array,
      default: function () {
        return []
      }
    },
    curTab: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showOpers: false,
      disablePreOper: false,
      disableNextOper: false,
      scrollWidth: 0,
      tabContainWidth: 0,
      offset: 0,
      overWidth: 0
    }
  },
  created: function () {
    this.options.forEach(option => {
      this.$set(option, 'isActive', false)
    })
    var activeTab = this.options.find(item => { return item.value === this.curTab })
    if (activeTab) {
      activeTab.isActive = true
      this.$emit('change', activeTab.value)
    } else {
      this.options[0].isActive = true
      this.$emit('change', this.options[0].value)
    }
  },
  mounted: function () {
    this.getTabWidths()
    window.onresize = () => {
      this.getTabWidths()
    }
  },
  computed: {
    tabClassz: function () {
      return { 'tab-top': this.level === 'super' && this.type === 'card',
        'tab-down': this.level === 'super' && this.type === 'line',
        'second-tab': this.level === 'second' }
    }
  },
  methods: {
    selectTab: function (option) {
      if (option.isDisable) return
      this.options.forEach(tabz => {
        if (tabz.isActive) {
          tabz.isActive = false
        }
      })
      option.isActive = true
      this.$emit('change', option.value)
    },
    getTabWidths: function () {
      this.scrollWidth = this.$refs.tabBars.scrollWidth
      this.tabContainWidth = this.$refs.tabContain.clientWidth
      this.overWidth = this.scrollWidth - this.tabContainWidth
      if (this.overWidth > 0) {
        this.$refs.preOper.style.display = 'inline-flex'
        this.$refs.nextOper.style.display = 'inline-flex'
        this.$refs.tabBars.style.width = 'auto'
        this.showOpers = true
      } else {
        this.$refs.preOper.style.display = 'none'
        this.$refs.nextOper.style.display = 'none'
        this.$refs.tabBars.style.marginLeft = '0'
        this.$refs.tabBars.style.width = '100%'
        this.offset = 0
        this.showOpers = false
      }
    },
    goPre: function () {
      if ((this.overWidth + this.offset) <= 0) {
        this.disablePreOper = true
        this.disableNextOper = false
        return
      }
      if ((this.overWidth + this.offset) < 40) {
        this.$refs.tabBars.style.marginLeft = '-' + this.overWidth + 'px'
        this.offset = 0 - this.overWidth
      } else {
        this.offset -= 80
        this.$refs.tabBars.style.marginLeft = this.offset + 'px'
        this.disablePreOper = false
      }
      this.disableNextOper = false
    },
    goNext: function () {
      if (this.offset >= 0) {
        return
      }
      if ((80 + this.offset) < 0) {
        this.offset += 80
        this.$refs.tabBars.style.marginLeft = this.offset + 'px'
        this.disableNextOper = false
      } else {
        this.$refs.tabBars.style.marginLeft = '0'
        this.offset = 0
        this.disableNextOper = true
      }
      this.disablePreOper = false
    }
  }
}
</script>

<style scoped lang="less">
.vc-tab {
  display: flex;
  flex-direction: column;
  width: 100%;
  .tab-bars {
    width: inherit;
    margin:auto;
    position:relative;
    overflow: hidden;
    box-sizing: border-box;
    &.hasOperBtn {
      ul {
        padding: 0 20px;
      }
      .tab-oper {
        display: none;
        height:100%;
        position: absolute;
        font-size: 24px;
        color:#999;
        align-items: center;
        width:20px;
        background: #fff;
        z-index: 2;
        justify-content: center;
        > span {
          display: inline-block;
          height: 9px;
          width: 9px;
          border: solid 2px #999;
          transform: rotate(45deg);
        }
        &:hover {
          background: #f2f2f2;
          color:#666;
          cursor: pointer;
        }
        &.disbaled {
          cursor: not-allowed;
          &:hover {
            background: #f2f2f2;
          }
        }
        &.tab-prev {
          left:0;
          > span {
            border-color: transparent transparent #999 #999;
          }
        }
        &.tab-next {
          right:0;
          > span {
            border-color: #999 #999 transparent transparent;
          }
        }
      }
    }
    ul {
      width: 100%;
      list-style:none;
      display: flex;
      border-bottom:solid 1px #ddd;
      padding:0;
      flex-wrap: nowrap;
      margin-left: 0;
      transition:margin-left 300ms;
      .barItem {
        display:inline-block;
        padding: 8px 15px;
        background:#fff;
        box-sizing:border-box;
        min-width: 100px;
        text-align: center;
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &:not(.disabled):hover {
          cursor:pointer;
          background:#e5ffff;
        }
        &.disabled {
          cursor:not-allowed;
          background:#e6e6e6;
          opacity:0.5;
        }
      }
      &.tab-top {
        .barItem.active {
          border-left:1px solid #ddd;
          border-right:1px solid #ddd;
          border-top:3px solid #3366ff;
          margin-bottom: -2px;
        }
      }
      &.tab-down {
        .barItem.active {
          border:none;
          border-bottom:3px solid #3366ff;
          margin-bottom: -1px;
        }
      }
      &.second-tab {
        border:none;
        .barItem {
          display: flex;
          padding: 8px 20px;
          background:#fff;
          box-sizing:border-box;
          border: 1px solid #999;
          border-right:none;
          justify-content: center;
          align-items: center;
          &:last-of-type {
            border-right: 1px solid #999;
            border-radius:0 4px 4px 0;
          }
          &:first-child {
            border-radius:4px 0 0 4px;
          }
          &.active {
            background:#3366ff;
            border-color:#3366ff;
            color:#fff;
            margin-bottom: 0;
          }
        }
      }
    }
  }
  .tab-content {
    width:inherit;
    display:block;
    padding:20px;
    box-sizing: border-box;
    .vctab-enter  {
      opacity: 0;
      margin-left: 30px;
    }
    .vctab-enter-to, .vctab-leave  {
      opacity: 1;
      margin-left: 0;
    }
    .vctab-leave-to  {
      opacity: 0;
      margin-left: -30px;
    }
    .vctab-enter-active, .vctab-leave-active  {
      transition: all .5s;
    }
  }
}
</style>
