<template>
  <div class="InfoVcDemo">
    <div v-if="type === 'top'">
      <vc-button class="demo-btn" @click="sss">成功通知</vc-button>
      <vc-button class="demo-btn" @click="sss">5s成功通知</vc-button>
      <vc-button class="demo-btn" @click="sss">警告通知</vc-button>
      <vc-button class="demo-btn" @click="sss">错误通知</vc-button>
      <vc-info :type="'success'" v-model="topShow[0]">操作成功,2s后自动消失</vc-info>
      <vc-info :type="'success'" :timer-len="5000" v-model="topShow[1]">操作成功,5s后自动消失</vc-info>
      <vc-info :type="'warn'" v-model="topShow[2]">我是警告消息!</vc-info>
      <vc-info :type="'error'" v-model="topShow[3]">我是错误消息!</vc-info>
    </div>
    <div v-if="type === 'right'">
      <vc-button class="demo-btn" @click="sss">成功通知</vc-button>
      <vc-button class="demo-btn" @click="sss">警告消息</vc-button>
      <vc-button class="demo-btn" @click="sss">创建失败</vc-button>
      <vc-info :type="'success'" :location="'right'" v-model="rightShow[0]" :header-title="'创建成功'">
        <template v-slot:content>
          <p>倚在冬的门楣，静心遥盼雪天使的降临。娉娉婷婷，风姿绰约，飘飘扬扬，曼妙万千,新特性之一是可以使 HTML 事件触发浏览器中的行为...</p>
          <p>3s后自动消失</p>
        </template>
        <template v-slot:footer>
          <a name="footer" herf="javascript:void(0);">管理实例</a>
        </template>
      </vc-info>
      <vc-info :type="'warn'" :location="'right'" v-model="rightShow[1]" :header-title="'警告消息'">
        <template v-slot:content>
          <p>倚在冬的门楣，静心遥盼雪天使的降临。娉娉婷婷，风姿绰约，飘飘扬扬，曼妙万千,新特性之一是可以使 HTML 事件触发浏览器中的行为...</p>
          <p>3s后自动消失</p>
        </template>
        <template v-slot:footer>
          <a herf="javascript:void(0);">管理实例</a>
        </template>
      </vc-info>
      <vc-info :type="'error'" :location="'right'" v-model="rightShow[2]" :header-title="'创建失败'">
        <template v-slot:content>
          <p>倚在冬的门楣，静心遥盼雪天使的降临。娉娉婷婷，风姿绰约，飘飘扬扬，曼妙万千,新特性之一是可以使 HTML 事件触发浏览器中的行为...</p>
          <p>3s后自动消失</p>
        </template>
        <template v-slot:footer>
          <a herf="javascript:void(0);">管理实例</a>
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
      topShow: [false, false, false, false],
      rightShow: [false, false, false]
    }
  },
  methods: {
    sss: function () {
      this.topShow[1] = true
    }
  }
}
</script>

<style scoped lang="less">
.InfoVcDemo {
  .demo-btn {
    margin: 10px 15px 10px;
  }
}
</style>
