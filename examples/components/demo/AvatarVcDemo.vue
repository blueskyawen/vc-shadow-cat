<template>
  <div class="AvatarVcDemo">
    <div v-if="type === 'basic'">
      <h4>方形头像</h4>
      <div class="demoItem">
        <vc-avatar class="item" :src="photos[0]"></vc-avatar>
        <vc-avatar class="item" :src="photos[0]" :size="'medium'"></vc-avatar>
        <vc-avatar class="item" :src="photos[0]" :size="'small'"></vc-avatar>
      </div>
      <h4>圆形头像</h4>
      <div class="demoItem">
        <vc-avatar class="item" :src="photos[1]" :type="'circle'"></vc-avatar>
        <vc-avatar class="item" :src="photos[1]" :type="'circle'" :size="'medium'"></vc-avatar>
        <vc-avatar class="item" :src="photos[1]" :type="'circle'" :size="'small'"></vc-avatar>
      </div>
    </div>
    <div v-if="type === 'badge'">
      <div class="demoItem">
        <vc-avatar class="item" :src="photos[0]" :show-badge="true">
          <vc-badge class="badgeItem" :type="'danger'" :count="6" :show-info="true"></vc-badge>
        </vc-avatar>
        <vc-avatar class="item" :src="photos[0]" :size="'medium'" :show-badge="true">
          <vc-badge class="badgeItem" :type="'danger'" :count="6"></vc-badge>
        </vc-avatar>
        <vc-avatar class="item" :src="photos[0]" :size="'small'" :show-badge="true">
          <vc-badge class="badgeItem2" :type="'danger'" :count="6" :show-info="false"></vc-badge>
        </vc-avatar>
      </div>
      <div class="demoItem">
        <vc-avatar class="item" :src="photos[1]" :type="'circle'" :show-badge="true">
          <vc-badge class="badgeItem" :type="'danger'" :count="6" :show-info="true"></vc-badge>
        </vc-avatar>
        <vc-avatar class="item" :src="photos[1]" :type="'circle'" :size="'medium'" :show-badge="true">
          <vc-badge class="badgeItem" :type="'danger'" :count="6"></vc-badge>
        </vc-avatar>
        <vc-avatar class="item" :src="photos[1]" :type="'circle'" :size="'small'" :show-badge="true">
          <vc-badge class="badgeItem2" :type="'danger'" :count="6" :show-info="false"></vc-badge>
        </vc-avatar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvatarVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      photos: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542034193317&di=35c68f159f719a1af77f02666d694efe&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180928%2F15%2F1538121289-sMcpvdUDTX.jpeg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1179569741,464641894&fm=26&gp=0.jpg'
      ]
    }
  }
}
</script>

<style scoped lang="less">
.AvatarVcDemo {
  h4 {
    color: #006666;
  }
  .demoItem {
    padding: 5px 0;
    font-size: 18px;
    border-bottom: dotted 1px #999;
    .item {
      margin-right: 15px;
    }
    .badgeItem {
      width: 16px;
      height: 16px;
    }
    .badgeItem2 {
      width: 10px;
      height: 10px;
    }
  }
}
</style>
