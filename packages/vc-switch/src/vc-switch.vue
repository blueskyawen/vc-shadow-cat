<template>
  <div class="vc-switch">
    <div class="switch-container" :class="switchClasses" @click="changeSwitch">
      <div class="switch" :class="spinClasses"></div>
      <span v-if="isHasLabel">{{label}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vc-switch',
  model: {
    prop: 'switch',
    event: 'change'
  },
  props: {
    type: {
      type: String,
      default: 'max'
    },
    tipLabels: {
      type: Array,
      default: function () {
        return []
      }
    },
    switch: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isHasLabel: false,
      label: ''
    }
  },
  created: function () {
    this.isHasLabel = this.tipLabels.length !== 0
    this.label = !this.isHasLabel ? '' : this.switch ? this.tipLabels[0] : this.tipLabels[1]
  },
  computed: {
    switchClasses: function () {
      return { 'switch-start': !this.isHasLabel && !this.switch,
        'switch-end': !this.isHasLabel && this.switch,
        'switch-row': this.isHasLabel && !this.switch,
        'switch-reverse': this.isHasLabel && this.switch,
        'container-max': this.type === 'max',
        'container-min': this.type === 'min',
        'disabled': this.disabled }
    },
    spinClasses: function () {
      return { 'switch-max': this.type === 'max',
        'switch-min': this.type === 'min' }
    }
  },
  methods: {
    changeSwitch: function () {
      if (this.disabled) return
      if (!this.switch) {
        this.label = this.tipLabels[0]
      } else {
        this.label = this.tipLabels[1]
      }
      this.$emit('change', !this.switch)
    }
  }
}
</script>

<style scoped lang="less">
  .vc-switch {
    display: inline-block;
    .switch-container {
      display:flex;
      border-radius:15px;
      padding:2px;
      margin: 5px;
      border:none;
      transition: all .5s;
      &.container-max {
        height:30px;
        width:65px;
        span {
          font-size: 14px;
          line-height:30px;
        }
      }
      &.container-min {
        height:20px;
        width:40px;
        span {
          font-size: 8px;
          line-height:20px;
        }
      }
      &:not(.disabled):hover {
        cursor:pointer;
      }
      &.disabled {
        opacity: 0.7;
        &:hover {
          cursor:not-allowed;
        }
      }
      &.switch-start{
        justify-content: flex-start;
        background:#b3b3b3;
      }
      &.switch-end{
        justify-content: flex-end;
        background:#1a8cff;
      }
      &.switch-row{
        flex-direction: row;
        background:#b3b3b3;
      }
      &.switch-reverse{
        flex-direction: row-reverse;
        background:#1a8cff;
      }
      span {
        display:inline-block;
        height:100%;
        margin:auto;
      }
      > .switch {
        border-radius:50%;
        border:none;
        background:#f2f2f2;
        &.switch-max {
          width:30px;
          height:30px;
        }
        &.switch-min {
          width:20px;
          height:20px;
        }
      }
    }
  }
</style>
