<template>
  <div class="vc-tab">
    <div class="tab-bars">
      <ul :class="tabClassz">
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
    overflow-y: hidden;
    overflow-x: auto;
    box-sizing: border-box;
    ul {
      width: inherit;
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
          &:last-child {
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
