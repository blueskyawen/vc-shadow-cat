<template>
  <div class="vc-panel" :class="panelClass">
    <header @click="togglePanel">
      <span></span>{{headerTitle}}
    </header>
    <article>
      <slot></slot>
    </article>
  </div>
</template>

<script>
export default {
  name: 'vc-panel',
  model: {
    prop: 'active',
    event: 'change'
  },
  props: {
    headerTitle: {
      type: String,
      default: 'header'
    },
    active: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    togglePanel: function () {
      if (this.disable) return
      this.$emit('change', !this.active)
    }
  },
  computed: {
    panelClass: function () {
      return { 'active': this.active, 'disable': this.disable }
    }
  }
}
</script>

<style scoped lang="less">
.vc-panel {
  width: 100%;
  margin-bottom:5px;
  header {
    border:solid 1px #ccc;
    width:100%;
    height:40px;
    line-height:40px;
    padding-left:15px;
    background:#f2f2f2;
    box-sizing:border-box;
    cursor:pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    color:#808080;
    span {
      border:solid 3px #999;
      border-top:none;
      border-left:none;
      margin-right:15px;
      display:inline-block;
      height:8px;
      width:8px;
      transform: rotate(-45deg);
      transition: transform 0.3s;
    }
  }
  article {
    width:100%;
    border:solid 1px #ccc;
    border-top:none;
    box-sizing:border-box;
    padding:0px;
    border-radius: 0 0 4px 4px;
    max-height: 0px;
    opacity:0;
    display: none;
  }
  &.active {
    border-radius: 4px;
    header {
      border-bottom:none;
      border-radius: 4px 4px 0 0;
      color:#1a1a1a;
      span {
        border-color:#1a1a1a;
        transform: rotate(45deg);
        transition: transform 0.3s;
      }
    }
    article {
      display: block;
      padding:10px;
      opacity:1;
      max-height:1000px;
      transition:max-height 1s ease-out,opacity 0.5s ease-out;
    }
  }
  &.disable {
    header {
      color:#808080;
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
