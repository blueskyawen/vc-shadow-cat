<template>
  <div class="main-content">
    <div class="sideBar">
      <side-bar :options="menuOptions"></side-bar>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'

export default {
  name: 'Pattern',
  components: { SideBar },
  data () {
    return {
      menuOptions: [
        { label: '过滤器', name: 'filter', routeLink: 'filter' },
        { label: '珊格系统', name: 'cols', routeLink: 'cols' },
        { label: '列表组', name: 'listGroup', routeLink: 'listGroup' },
        { label: '表单', name: 'form', routeLink: 'form' },
        { label: '表单实例', name: 'formDemo', routeLink: 'formDemo' },
        { label: '照片浏览', name: 'photoView', routeLink: 'photoView' }
      ]
    }
  },
  created () {
    this.menuOptions.forEach(option => {
      option.routeLink = `/pattern/${option.routeLink}`
    })
  }
}
</script>

<style scoped lang="less">
  @import "../assets/main-app";
</style>
