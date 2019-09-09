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
  name: 'About',
  components: { SideBar },
  data () {
    return {
      menuOptions: [
        { label: '介绍', name: 'aboutMe', routeLink: 'aboutMe' },
        { label: '快速上手', name: 'start', routeLink: 'start' }
      ]
    }
  },
  created () {
    this.menuOptions.forEach(option => {
      option.routeLink = `/about/${option.routeLink}`
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
