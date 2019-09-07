<template>
  <div class="main-content">
    <div class="sideBar">
      <router-link v-for="menu in menuOptions" :key="menu.name" :to="menu.routeLink">{{menu.label}}</router-link>
    </div>
    <div class="content">content</div>
  </div>
</template>

<script>
export default {
  name: 'pattern',
  data () {
    return {
      menuOptions: [
        { label: '过滤器', name: 'template', routeLink: 'template' },
        { label: '珊格系统', name: 'template', routeLink: 'template' },
        { label: '列表组', name: 'template', routeLink: 'template' },
        { label: '表单', name: 'template', routeLink: 'template' },
        { label: '表单实例', name: 'template', routeLink: 'template' },
        { label: '照片浏览', name: 'template', routeLink: 'template' }
      ]
    }
  }
}
</script>

<style scoped lang="less">
  @import "../assets/main-app";
</style>
