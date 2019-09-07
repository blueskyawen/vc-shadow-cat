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
  name: 'element',
  data () {
    return {
      menuOptions: [
        { label: '加载等待', name: 'template', routeLink: 'template' },
        { label: '按钮', name: 'template', routeLink: 'template' },
        { label: '开关', name: 'template', routeLink: 'template' },
        { label: '单选框', name: 'template', routeLink: 'template' },
        { label: '多选框', name: 'template', routeLink: 'template' },
        { label: '输入框', name: 'template', routeLink: 'template' },
        { label: '数字输入框', name: 'template', routeLink: 'template' },
        { label: '选项卡', name: 'template', routeLink: 'template' },
        { label: '通知', name: 'template', routeLink: 'template' },
        { label: '提示工具', name: 'template', routeLink: 'template' },
        { label: '帮助', name: 'template', routeLink: 'template' },
        { label: '分页条', name: 'template', routeLink: 'template' },
        { label: '评分条', name: 'template', routeLink: 'template' },
        { label: '折叠面板', name: 'template', routeLink: 'template' },
        { label: '滑动输入', name: 'template', routeLink: 'template' },
        { label: '进度条', name: 'template', routeLink: 'template' },
        { label: '比例条', name: 'template', routeLink: 'template' },
        { label: '模态框', name: 'template', routeLink: 'template' },
        { label: '单项选择器', name: 'template', routeLink: 'template' },
        { label: '多项选择器', name: 'template', routeLink: 'template' },
        { label: '轮播', name: 'template', routeLink: 'template' },
        { label: '穿梭选择框', name: 'template', routeLink: 'template' },
        { label: '柱状图', name: 'template', routeLink: 'template' },
        { label: '饼环状图', name: 'template', routeLink: 'template' },
        { label: '抽屉', name: 'template', routeLink: 'template' },
        { label: '标签', name: 'template', routeLink: 'template' },
        { label: '可拖拽区间', name: 'template', routeLink: 'template' },
        { label: '头像', name: 'template', routeLink: 'template' },
        { label: '徽章', name: 'template', routeLink: 'template' },
        { label: '消息表情', name: 'template', routeLink: 'template' },
        { label: '加载占位', name: 'template', routeLink: 'template' },
        { label: '翻页条', name: 'template', routeLink: 'template' },
        { label: '日期时间选择器', name: 'template', routeLink: 'template' }
      ]
    }
  }
}
</script>

<style scoped lang="less">
  @import "../assets/main-app";
</style>
