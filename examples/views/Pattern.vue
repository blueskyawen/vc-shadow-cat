<template>
  <div class="main-content" :class="{'sideBar-hidden': !isShowSideBar}">
    <div class="sideBar">
      <side-bar :options="menuOptions"></side-bar>
    </div>
    <div class="content">
      <transition mode="out-in">
        <router-view class="md"/>
      </transition>
    </div>
    <div class="mobile-shade" v-if="isShowSideBar" @click="changeExtend"></div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'
import { mapState } from 'vuex'

export default {
  name: 'Pattern',
  components: { SideBar },
  data () {
    return {
      menuOptions: [
        { label: '过滤器', name: 'filter', routeLink: 'filter' },
        { label: '珊格', name: 'grid', routeLink: 'grid' },
        { label: '表单', name: 'form', routeLink: 'form' },
        { label: '动态异步组件', name: 'asyncCompt', routeLink: 'asyncCompt' }
      ]
    }
  },
  created () {
    this.menuOptions.forEach(option => {
      option.routeLink = `/pattern/${option.routeLink}`
    })
  },
  computed: {
    ...mapState([
      'isShowSideBar'
    ])
  },
  methods: {
    changeExtend: function () {
      this.$store.commit('toggleSideBar')
    }
  }
}
</script>

<style scoped lang="less">
  @import "../style/main-app";
</style>
