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
  name: 'about',
  data () {
    return {
      menuOptions: [
        { label: '介绍', name: 'aboutMe', routeLink: 'aboutMe' },
        { label: '快速上手', name: 'start', routeLink: 'start' }
      ]
    }
  }
}
</script>

<style scoped lang="less">
  @import "../assets/main-app";
</style>
