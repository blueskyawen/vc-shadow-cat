<template>
  <div class="InfoVcDemo">
    <div v-if="type === 'top'">
      <vc-button class="demo-btn" @click="topShow0=true">成功通知</vc-button>
      <vc-button class="demo-btn" @click="topShow1=true">5s成功通知</vc-button>
      <vc-button class="demo-btn" @click="topShow2=true">警告通知</vc-button>
      <vc-button class="demo-btn" @click="topShow3=true">错误通知</vc-button>
      <vc-info :type="'success'" v-model="topShow0">操作成功,2s后自动消失</vc-info>
      <vc-info :type="'success'" :timer-len="5000" v-model="topShow1">操作成功,5s后自动消失</vc-info>
      <vc-info :type="'warn'" v-model="topShow2">我是警告消息!</vc-info>
      <vc-info :type="'error'" v-model="topShow3">我是错误消息!</vc-info>
    </div>
    <div v-if="type === 'right'">
      <vc-button class="demo-btn" @click="rightShow0=true">成功通知</vc-button>
      <vc-button class="demo-btn" @click="rightShow1=true">警告消息</vc-button>
      <vc-button class="demo-btn" @click="rightShow2=true">创建失败</vc-button>
      <vc-info :type="'success'" :location="'right'" v-model="rightShow0" :header-title="'创建成功'">
        <template v-slot:content>
          <p>倚在冬的门楣，静心遥盼雪天使的降临。娉娉婷婷，风姿绰约，飘飘扬扬，曼妙万千,新特性之一是可以使 HTML 事件触发浏览器中的行为...</p>
          <p>2s后自动消失</p>
        </template>
        <template v-slot:footer>
          <a herf="javascript:void(0);" @click="rightShow0=false">管理实例</a>
        </template>
      </vc-info>
      <vc-info :type="'warn'" :location="'right'" v-model="rightShow1" :header-title="'警告消息'">
        <template v-slot:content>
          <p>倚在冬的门楣，静心遥盼雪天使的降临。娉娉婷婷，风姿绰约，飘飘扬扬，曼妙万千,新特性之一是可以使 HTML 事件触发浏览器中的行为...</p>
        </template>
        <template v-slot:footer>
          <a herf="javascript:void(0);" @click="rightShow1=false">管理实例</a>
        </template>
      </vc-info>
      <vc-info :type="'error'" :location="'right'" v-model="rightShow2" :header-title="'创建失败'">
        <template v-slot:content>
          <p>倚在冬的门楣，静心遥盼雪天使的降临。娉娉婷婷，风姿绰约，飘飘扬扬，曼妙万千,新特性之一是可以使 HTML 事件触发浏览器中的行为...</p>
        </template>
        <template v-slot:footer>
          <a herf="javascript:void(0);" @click="rightShow2=false">管理实例</a>
        </template>
      </vc-info>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      topShow0: false,
      topShow1: false,
      topShow2: false,
      topShow3: false,
      rightShow0: false,
      rightShow1: false,
      rightShow2: false
    }
  }
}
</script>

<style scoped lang="less">
.InfoVcDemo {
  .demo-btn {
    margin: 10px 15px 10px;
  }
  a {
    color: #00b386;
    cursor: pointer;
  }
}
</style>
