<template>
  <div class="DrawerVcDemo">
    <div v-if="type === 'basic'">
      <vc-button class="item" @click="showFlag1=true">左边滑出</vc-button>
      <vc-button class="item" @click="showFlag2=true">上边滑出</vc-button>
      <vc-button class="item" @click="showFlag3=true">右边滑出</vc-button>
      <vc-button class="item" @click="showFlag4=true">下边滑出</vc-button>
    </div>
    <div v-if="type === 'advance'"></div>
    <vc-drawer v-model="showFlag1" :place="'left'" :header="'左边Drawer'">
      <div class="content-left">
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </vc-drawer>
    <vc-drawer v-model="showFlag2" :place="'top'" :header="'上边Drawer'">
      <div class="content-top">
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </vc-drawer>
    <vc-drawer v-model="showFlag3" :place="'right'" :header="'右边Drawer'">
      <div class="content-left">
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </vc-drawer>
    <vc-drawer v-model="showFlag4" :place="'down'" :header="'下边Drawer'">
      <div class="content-top">
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </vc-drawer>
    <div v-if="type === 'manual'">
      <vc-button class="item" @click="showFlag5=true">不展示遮罩</vc-button>
      <vc-button class="item" @click="showFlag6=true">点击遮罩不关闭</vc-button>
      <vc-button class="item" @click="showFlag7=true">无关闭按钮</vc-button>
    </div>
    <vc-drawer v-model="showFlag5" :place="'right'" :show-shade="false">
      <div class="content-left">
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </vc-drawer>
    <vc-drawer v-model="showFlag6" :place="'right'" :click-shade-close="false">
      <div class="content-left">
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </vc-drawer>
    <vc-drawer v-model="showFlag7" :place="'right'" :closable="false">
      <div class="content-left">
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </vc-drawer>
  </div>
</template>

<script>
export default {
  name: 'DrawerVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      showFlag1: false,
      showFlag2: false,
      showFlag3: false,
      showFlag4: false,
      showFlag5: false,
      showFlag6: false,
      showFlag7: false
    }
  }
}
</script>

<style scoped lang="less">
.DrawerVcDemo {
  h4 {
    color: #006666;
  }
  .demoItem {
    padding: 5px 0;
    font-size: 18px;
    border-bottom: dotted 1px #999;
  }
  .item {
    margin-right: 15px;
  }
  .content-left {
    width: 360px;
    max-width: 80%;
    box-sizing: border-box;
  }
  .content-top {
    height: 120px;
    max-height: 80%;
    box-sizing: border-box;
  }
}
</style>
