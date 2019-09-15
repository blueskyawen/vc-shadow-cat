<template>
  <div class="vc-select" :class="{'disable': disabled}" @mouseenter="moveOn" @mouseleave="moveOn" @click="clickSelect">
    <div class="inputItem">
      <input type="text" placeholder="请选择" :value="selectedOption.label"
             :title="selectedOption.label" :disabled="disabled" readonly/>
      <span class="carcat"></span>
    </div>
    <div class="dropdown-content" :class="{'expand': isContentOpen}">
      <span v-for="option in options" :key="option.value" @click.stop="selectOption(option)"
            :class="{'disable': option.disable, 'selected': option.value === value}" :title="option.label">{{option.label}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vc-select',
  props: {
    value: {
      type: String,
      default: ''
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
    }
  },
  data () {
    return {
      selectedOption: {},
      isContentOpen: false,
      isMoveInSelect: false
    }
  },
  created: function () {
    document.addEventListener('click', () => {
      if (this.isContentOpen && !this.isMoveInSelect) {
        this.isContentOpen = false
      }
    })
  },
  methods: {
    moveOn: function () {
      this.isMoveInSelect = !this.isMoveInSelect
    },
    clickSelect: function () {
      if (this.disabled) return
      this.isContentOpen = !this.isContentOpen
    },
    selectOption: function (option) {
      if (option.disable) return
      this.isContentOpen = false
      this.selectedOption = option
      this.value = option.value
      this.$emit('input', this.value)
    }
  }
}
</script>

<style scoped lang="less">
.vc-select {
  position:relative;
  width:420px;
  height: 36px;
  max-width: 100%;
  min-width: 80px;
  .inputItem {
    height: inherit;
    width: 100%;
    display: flex;
    input {
      display:inline-block;
      height:100%;
      width:calc(100% - 30px);
      border:solid 1px #808080;
      border-radius:4px 0 0 4px;
      border-right: none;
      margin:0;
      padding:0;
      padding-left: 5px;
      font-size:14px;
      background: #fff;
      white-space: nowrap;
      word-wrap: normal;
      text-overflow: ellipsis;
      outline: none;
    }
    .carcat {
      display:inline-block;
      width: 30px;
      border:solid 1px #808080;
      border-radius:0 4px 4px 0;
      border-left: none;
      height: inherit;
      &:after {
        content:"";
        display:inline-block;
        border:solid 6px;
        border-color: #808080 transparent transparent transparent;
        position:absolute;
        right:5px;
        top:50%;
        transform: translateY(-2px);
      }
    }
  }
  &.disable {
    cursor:not-allowed;
    .inputItem {
      input, .carcat {
        background:#e6e6e6;
        opacity: 0.5;
        cursor:not-allowed;
      }
    }
    &:hover {
      .inputItem {
        input, .carcat {
          border-color:#808080;
        }
      }
    }
  }
  .dropdown-content {
    display:none;
    width:100%;
    max-height:120px;
    margin-top:5px;
    border:solid 1px #808080;
    border-radius:4px;
    position:absolute;
    top:100%;
    left:0;
    font-size:12px;
    overflow-y:auto;
    cursor:pointer;
    box-sizing:border-box;
    z-index:1;
    background:#fff;
    &.expand {
      display: inline-block;
    }
    span {
      display:block;
      width:100%;
      height:30px;
      line-height:30px;
      padding-left:10px;
      box-sizing:border-box;
      white-space: nowrap;
      word-wrap: normal;
      text-overflow: ellipsis;
      &.selected {
        background-color: #ebfafa;
        font-weight: bold;
        &:hover {
          background: #ebfafa;
        }
      }
      &:hover {
        background: #f2f2f2;
      }
      &.disable {
        cursor: not-allowed;
        background: #e6e6e6;
      }
    }
  }
  &:not(.disable):hover {
    .inputItem {
      input {
        border-color:#33adff;
      }
      .carcat {
        border-color:#33adff;
        &:after{
          border-color: #33adff transparent transparent transparent;
        }
      }
    }
  }
}
</style>
