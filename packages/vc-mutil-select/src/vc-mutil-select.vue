<template>
  <div class="vc-mutil-select" :class="{'disable': disabled}" @mouseenter="moveOn"
       @mouseleave="moveOut" @click="clickSelect">
    <div class="selectss" v-if="selectedOptions.length === 0">
      <span class="holdplace">请选择</span>
    </div>
    <div class="selectss" v-if="selectedOptions.length !== 0 && !showCheckNum">
      <span class="option" v-for="option in selectedOptions" :key="option.value" :class="{'disable': option.disable}">
        <span class="text" :title="option.label">{{option.label}}</span>
        <span class="biao" @click="delOption(option)" @mouseenter="moveInDel" @mouseleave="moveInDel">
           <svg viewBox="64 64 896 896" data-icon="close" width="10px" height="10px" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
        </span>
      </span>
    </div>
    <div class="selectss" v-if="selectedOptions.length !== 0 && showCheckNum">
      <span class="holdplace selectedTitle">已选择{{selectedOptions.length}}个项目</span>
    </div>

    <div class="dropdown-content" v-if="isContentOpen && !hasCheckbox" @mouseenter="moveContent" @mouseleave="moveContent()">
      <span v-for="optionItem in options" :key="optionItem.value" @click="selectOption(optionItem)"
            :class="{'selected':optionItem.isChecked,'disable':optionItem.disable,'item':!hasCheckbox}"
            :title="optionItem.label">
        {{optionItem.label}}
        <span class="item-icon">
          <svg viewBox="64 64 896 896" fill="currentColor" width="14px" height="14px" data-icon="check" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
        </span>
      </span>
    </div>
    <div class="dropdown-content check-box" v-if="isContentOpen && hasCheckbox && !allCheck"
         @mouseenter="moveContent" @mouseleave="moveContent">
      <span v-for="optionItem in options" :key="optionItem.value" @click="selectOption(optionItem)"
            :class="{'selected':optionItem.isChecked,'disable':optionItem.disable,'option':hasCheckbox}"
            :title="optionItem.label">
           <span class="checkbox">
            <svg viewBox="64 64 896 896" fill="currentColor" width="12px" height="12px" data-icon="check" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
           </span>
           <span class="text">{{optionItem.label}}</span>
      </span>
    </div>
    <div class="dropdown-content check-box" style="height: 160px;"
         v-if="isContentOpen && hasCheckbox && allCheck" @mouseenter="moveContent" @mouseleave="moveContent">
      <span class="option" @click="selectAll" :class="{'selected':isAllSelected}">
       <span class="checkbox">
        <svg viewBox="64 64 896 896" fill="currentColor" width="12px" height="12px" data-icon="check" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
       </span>
       <span class="text">全选</span>
      </span>
      <div class="optionContent">
        <span v-for="optionItem in options" :key="optionItem.value" @click="selectOption(optionItem)"
              :class="{'selected':optionItem.isChecked,'disable':optionItem.disable,'option':hasCheckbox}"
              :title="optionItem.label">
           <span class="checkbox">
            <svg viewBox="64 64 896 896" fill="currentColor" width="12px" height="12px" data-icon="check" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
           </span>
           <span class="text">{{optionItem.label}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vc-mutil-select',
  model: {
    prop: 'selection',
    event: 'change'
  },
  props: {
    selection: {
      type: Array,
      default: function () {
        return []
      }
    },
    options: {
      type: Array,
      default: function () {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hasCheckbox: {
      type: Boolean,
      default: false
    },
    allCheck: {
      type: Boolean,
      default: false
    },
    showCheckNum: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selectedOptions: [],
      isAllSelected: false,
      isContentOpen: false,
      isMoveInSelect: false,
      isMoveInContent: false,
      isMoveInDel: false
    }
  },
  created () {
    this.init()
    document.addEventListener('click', () => {
      if (this.isContentOpen && !this.isMoveInSelect) {
        this.isContentOpen = false
      }
      this.isMoveInDel = false
    })
  },
  methods: {
    init: function () {
      this.options.forEach(option => {
        this.$set(option, 'isChecked', this.selection.includes(option.value))
      })
      this.selectedOptions = this.options.filter(item => item.isChecked)
      if (this.allCheck) {
        this.isAllSelected = this.selectedOptions.length === this.options.length
      }
    },
    moveOn: function () {
      this.isMoveInSelect = true
    },
    moveOut: function () {
      this.isMoveInSelect = false
    },
    clickSelect: function () {
      if (this.disabled) return
      if (!this.isMoveInContent && !this.isMoveInDel) {
        this.isContentOpen = !this.isContentOpen
      }
    },
    moveInDel: function () {
      this.isMoveInDel = !this.isMoveInDel
    },
    delOption: function (option) {
      if (this.disabled || option.disable) {
        return
      }
      option.isChecked = false
      this.deleteOption(option)
      this.$emit('change', this.selectedOptions.map(item => item.value))
    },
    moveContent: function () {
      this.isMoveInContent = !this.isMoveInContent
    },
    selectOption: function (option, checked) {
      if (option.disable) return
      if (!this.allCheck) {
        option.isChecked = !option.isChecked
        this.checkAddOrDel(option)
      } else {
        if (checked) {
          option.isChecked = !!checked
          this.checkAddOrDel(option, true)
        } else {
          option.isChecked = !option.isChecked
          this.checkAddOrDel(option)
          this.isAllSelected = this.selectedOptions.length === this.options.length
        }
      }
    },
    checkAddOrDel: function (option, noEmitFlag) {
      if (option.isChecked) {
        this.addOption(option)
      } else {
        this.deleteOption(option)
      }
      if (!noEmitFlag) {
        this.$emit('change', this.selectedOptions.map(item => item.value))
      }
    },
    selectAll: function () {
      this.isAllSelected = !this.isAllSelected
      this.options.forEach(item => {
        this.selectOption(item, this.isAllSelected)
      })
      this.$emit('change', this.selectedOptions.map(item => item.value))
    },
    addOption: function (option) {
      var index = this.selectedOptions.findIndex(item => item.value === option.value)
      if (index === -1) {
        this.selectedOptions.push({ label: option.label, value: option.value, disable: option.disable })
      }
    },
    deleteOption: function (option) {
      var index = this.selectedOptions.findIndex(item => item.value === option.value)
      if (index !== -1) {
        this.selectedOptions.splice(index, 1)
      }
      var index2 = this.options.findIndex(item => item.value === option.value)
      if (index2 !== -1) {
        this.options[index2].isChecked = false
      }
    }
  }
}
</script>

<style scoped lang="less">
.vc-mutil-select {
  position:relative;
  width:420px;
  min-width:220px;
  max-width: 100%;
  min-height:36px;
  border:solid 1px #808080;
  display:inline-block;
  border-radius:4px;
  padding:0;
  font-size:14px;
  line-height:36px;
  color:#666;
  &.disable {
    background:#e6e6e6;
    opacity: 0.6;
    cursor:not-allowed;
    .selectss .option .biao:hover{
      cursor:not-allowed;
    }
  }
  &:after {
    content:"";
    display:inline-block;
    border:solid 8px;
    border-color: #808080 transparent transparent transparent;
    position:absolute;
    right:10px;
    top:50%;
    transform: translateY(-2px);
  }
  &:not(.disable) {
    &:hover {
      border-color:#33adff;
      &:after {
        border-color: #33adff transparent transparent transparent;
      }
    }
    .selectss {
      .option {
        .biao:hover {
          background:#b3b3b3;
        }
        &.disable .biao:hover {
          background:#e6e6e6;
        }
      }
    }
  }
  .selectss {
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    flex-basis:auto;
    width:calc(100% - 40px);
    min-width:180px;
    border-radius:4px;
    .holdplace {
      margin-left:10px;
    }
    .selectedTitle {
      color:#000;
    }
    .option {
      display:inline-flex;
      height:16px;
      line-height:16px;
      font-size:12px;
      border:solid 1px #ccc;
      border-radius:4px;
      padding:5px;
      padding-right:30px;
      margin:3px 5px;
      background:#d9d9d9;
      color:#1a1a1a;
      position:relative;
      max-width: calc(100% - 30px);
      .text {
        display:inline-block;
        min-width:30px;
        white-space:nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right:5px;
      }
      .biao {
        display:inline-block;
        height:12px;
        width:12px;
        border-radius:50%;
        position:absolute;
        right:5px;
        cursor:pointer;
        top:50%;
        transform: translateY(-50%);
        text-align: center;
      }
    }
  }
  .dropdown-content {
    display:inline-block;
    width:100%;
    max-height:200px;
    margin-top:5px;
    border:solid 1px #808080;
    border-radius:2px;
    position:absolute;
    top:100%;
    left:0;
    font-size:12px;
    overflow-y:auto;
    cursor:pointer;
    box-sizing:border-box;
    background:#fff;
    z-index:1;
    .optionContent {
      display:block;
      width:100%;
      height:120px;
      border-top:solid 1px #bfbfbf;
      overflow-y:auto;
    }
    > span.item {
      display:block;
      width:100%;
      height:30px;
      line-height:30px;
      padding-left:10px;
      padding-right:60px;
      box-sizing:border-box;
      position:relative;
      white-space:nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .item-icon {
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
        color: transparent;
      }
      &.selected {
        background:#f2f2f2;
        color:#666;
        .item-icon {
          visibility: visible;
          color: #008ae6;
        }
      }
      &:not(.selected):not(.disable):hover {
        background: #ebfafa;
        .item-icon {
          color: #666;
        }
      }
      &.disable {
        background:#e6e6e6;
        cursor: not-allowed;
      }
    }
    .option {
      display:flex;
      align-items:center;
      width:100%;
      height:30px;
      line-height:30px;
      padding-left:10px;
      padding-right:10px;
      box-sizing:border-box;
      position:relative;
      white-space:nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .text{
        display:inline-block;
        flex:auto;
        height:30px;
        line-height:30px;
        max-width: calc(100% - 20px);
        white-space:nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &:not(.disable) {
        &:hover {
          background:#ebfafa;
        }
        .checkbox:hover{
          border-color:#33adff;
        }
      }
      .checkbox {
        display:inline-flex;
        justify-content: center;
        align-items: center;
        height:14px;
        width:14px;
        border:solid 1px #a6a6a6;
        border-radius:2px;
        position:relative;
        margin-right:10px;
        padding: 0;
        box-sizing: content-box;
        color: transparent;
      }
      &.selected {
        background: #f2f2f2;
        .checkbox {
          background:#33adff;
          border-color:#33adff;
          color: #fff;
        }
      }
      &.disable {
        cursor:not-allowed;
        background:#e6e6e6;
        .checkbox {
          background:#bfbfbf;
          border-color:#999;
          opacity:0.6;
          &:hover {
            background:#bfbfbf;
            border-color:#999;
            opacity:0.6;
          }
        }
      }
    }
  }
}
</style>
