<template>
  <div class="vc-skeleton" :class="{'dynamic': dynamic, 'show': show}">
    <div v-if="avatar" class="avatar-part" :class="avatarClass">
      <div class="avatar"></div>
    </div>
    <div class="paragraph">
      <div class="parag-item" v-for="item of skeItems" :key="item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vc-skeleton',
  props: {
    avatar: {
      type: Boolean,
      default: false
    },
    dynamic: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 4
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      skeItems: []
    }
  },
  created: function () {
    for (var index = 0; index < this.rows; index++) {
      this.skeItems.push(index)
    }
  },
  computed: {
    avatarClass: function () {
      return { 'size-default': this.size === 'default',
        'size-small': this.size === 'small' }
    }
  }
}
</script>

<style scoped lang="less">
.vc-skeleton {
  padding:5px 0;
  display: none;
  width: 100%;
  &.show {
    display: flex;
  }
  .avatar-part {
    display: inline-flex;
    height: 100%;
    justify-content: center;
    .avatar {
      margin-top: 10px;
      border: solid 1px #e6e6e6;
      border-radius: 100%;
      background-color: #e6e6e6;
    }
    &.size-default {
      width: 60px;
      .avatar {
        width: 40px;
        height: 40px;
      }
    }
    &.size-small {
      width: 36px;
      .avatar {
        width: 24px;
        height: 24px;
      }
    }
  }
  .paragraph {
    width: inherit;
    .parag-item {
      height:24px;
      margin:10px 0;
      background-color:#e6e6e6;
      &:first-child {
        width: 50%;
      }
      &:last-child {
        width: 70%;
      }
    }
  }
  &.dynamic {
    .avatar-part .avatar, .paragraph .parag-item {
      animation:skeleton-out2 1300ms infinite alternate ease-in,skeleton-out 2s infinite linear;
    }
  }
}
@keyframes skeleton-out
{
  0%   {background:linear-gradient(90deg,#e6e6e6,#f2f2f2,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6);}
  20%  {background:linear-gradient(90deg,#e6e6e6,#e6e6e6,#f2f2f2,#e6e6e6,#f2f2f2,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6);}
  30%  {background:linear-gradient(90deg,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#f2f2f2,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6);}
  40%  {background:linear-gradient(90deg,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#f2f2f2,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6);}
  50%  {background:linear-gradient(90deg,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#f2f2f2,#e6e6e6,#e6e6e6,#e6e6e6);}
  60%  {background:linear-gradient(90deg,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#f2f2f2,#e6e6e6,#e6e6e6);}
  70%  {background:linear-gradient(90deg,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#f2f2f2,#e6e6e6);}
  80%  {background:linear-gradient(90deg,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#f2f2f2);}
  90%  {background:linear-gradient(90deg,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6);}
  100% {background:linear-gradient(90deg,#f2f2f2,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6,#e6e6e6);}
}
@keyframes skeleton-out2 {
  0% {opacity: 0.3;}
  100% {opacity: 1;}
}
</style>
