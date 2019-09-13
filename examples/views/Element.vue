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
  name: 'Element',
  components: { SideBar },
  data () {
    return {
      menuOptions: [
        { label: '加载等待', name: 'loading', routeLink: 'loading' },
        { label: '按钮', name: 'button', routeLink: 'button' },
        { label: '开关', name: 'switch', routeLink: 'switch' },
        { label: '单选框', name: 'radio', routeLink: 'radio' },
        { label: '复选框', name: 'checkbox', routeLink: 'checkbox' },
        { label: '输入框', name: 'input', routeLink: 'input' },
        { label: '数字输入框', name: 'numInput', routeLink: 'numInput' },
        { label: '通知', name: 'info', routeLink: 'info' },
        { label: '轮播', name: 'carousel', routeLink: 'carousel' },
        { label: '选项卡', name: 'tab', routeLink: 'tab' },
        { label: '提示工具', name: 'toolTip', routeLink: 'toolTip' },
        { label: '帮助', name: 'helpInfo', routeLink: 'helpInfo' },
        { label: '分页条', name: 'pagination', routeLink: 'pagination' },
        { label: '评分条', name: 'rate', routeLink: 'rate' },
        { label: '折叠面板', name: 'collapse', routeLink: 'collapse' },
        { label: '滑动输入', name: 'rangeslide', routeLink: 'rangeslide' },
        { label: '进度条', name: 'progress', routeLink: 'progress' },
        { label: '比例条', name: 'proportion', routeLink: 'proportion' },
        { label: '模态框', name: 'dialog', routeLink: 'dialog' },
        { label: '单项选择器', name: 'select', routeLink: 'select' },
        { label: '多项选择器', name: 'mutilSelect', routeLink: 'mutilSelect' },
        { label: '穿梭选择框', name: 'transfer', routeLink: 'transfer' },
        { label: '柱状图', name: 'barChart', routeLink: 'barChart' },
        { label: '饼环状图', name: 'pieChart', routeLink: 'pieChart' },
        { label: '抽屉', name: 'drawer', routeLink: 'drawer' },
        { label: '标签', name: 'label', routeLink: 'label' },
        { label: '可拖拽区间', name: 'resizeArea', routeLink: 'resizeArea' },
        { label: '头像', name: 'avater', routeLink: 'avater' },
        { label: '徽章', name: 'badge', routeLink: 'badge' },
        { label: '消息表情', name: 'msgEif', routeLink: 'msgEif' },
        { label: '加载占位', name: 'skeleton', routeLink: 'skeleton' },
        { label: '翻页条', name: 'pager', routeLink: 'pager' },
        { label: '日期时间选择器', name: 'dateTimeSelector', routeLink: 'dateTimeSelector' }
      ]
    }
  },
  created () {
    this.menuOptions.forEach(option => {
      option.routeLink = `/element/${option.routeLink}`
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
