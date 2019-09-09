<template>
  <div class="sideBars">
    <router-link v-for="menu in options" :key="menu.name" :to="menu.routeLink">{{menu.label}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    options: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.sideBars {
  width: 100%;
  a {
    text-decoration: none;
    color: #666;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0;
    box-sizing: border-box;
    &:hover {
      color: #009973;
    }
    &.router-link-active {
      background: #ebfafa;
      color: #009973;
      border-left: solid 3px #1aa3ff;
    }
  }
}
</style>
