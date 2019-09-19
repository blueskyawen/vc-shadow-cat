<template>
  <span class="vc-avatar" :class="avaterClass">
    <img :src="src" alt="avatar src" />
    <span v-if="showBadge" class="badge">
      <slot></slot>
    </span>
  </span>
</template>

<script>
export default {
  name: 'vc-avatar',
  props: {
    type: {
      type: String,
      default: 'square'
    },
    size: {
      type: String,
      default: 'large'
    },
    src: {
      type: String,
      default: ''
    },
    showBadge: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    avaterClass: function () {
      return { 'avatar-square': this.type === 'square',
        'avatar-circle': this.type === 'circle',
        'avatar-lg': this.size === 'large',
        'avatar-md': this.size === 'medium',
        'avatar-sm': this.size === 'small' }
    }
  }
}
</script>

<style scoped lang="less">
.vc-avatar {
  display:inline-block;
  background:#e6e6e6;
  position:relative;
  margin: 5px;
  img {
    height:100%;
    width:100%;
  }
  &.avatar-lg {
    height:50px;
    width:50px;
  }
  &.avatar-md {
    height:40px;
    width:40px;
  }
  &.avatar-sm {
    height:30px;
    width:30px;
  }
  &.avatar-square {
    border-radius:6px;
    img {
      border-radius:6px;
    }
    .badge {
      position:absolute;
      left:100%;
      bottom:100%;
      transform: translateX(-50%) translateY(50%);
    }
  }
  &.avatar-circle {
    border-radius:100%;
    img {
      border-radius:100%;
    }
    .badge {
      position:absolute;
      left:100%;
      bottom:100%;
      transform: translateX(-70%) translateY(70%);
    }
  }
}
</style>
