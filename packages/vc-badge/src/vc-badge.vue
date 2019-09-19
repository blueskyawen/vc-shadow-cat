<template>
  <span class="vc-badge" :class="typeClasses">
    <span v-if="showInfo">{{countText}}</span>
  </span>
</template>

<script>
export default {
  name: 'vc-badge',
  props: {
    count: {
      type: Number,
      default: 5
    },
    max: {
      type: Number,
      default: 99
    },
    type: {
      type: String,
      default: 'success'
    },
    showInfo: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    typeClasses: function () {
      return { 'danger': this.type === 'danger',
        'success': this.type === 'success',
        'info': this.type === 'info',
        'warn': this.type === 'warn' }
    },
    countText: function () {
      return this.count < this.max ? this.count : this.max + '+'
    }
  }
}
</script>

<style scoped lang="less">
.vc-badge {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #d9d9d9;
  color: #fff;
  border-radius: 100%;
  font-size: 12px;
  &.danger {
    background: #ff3333;
  }
  &.success {
    background: #4dc4ff;
  }
  &.info {
    background: #999;
  }
  &.warn {
    background: #ffa31a;
  }
}
</style>
