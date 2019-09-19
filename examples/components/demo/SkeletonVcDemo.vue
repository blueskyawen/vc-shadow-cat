<template>
  <div class="SkeletonVcDemo">
    <div v-if="type === 'basic'">
      <vc-skeleton :show="true"></vc-skeleton>
    </div>
    <div v-if="type === 'manual'">
      <h4>显示头像占位,可设置尺寸</h4>
      <div class="demoItem">
        <vc-skeleton :show="true" :avatar="true"></vc-skeleton>
      </div>
      <h4>设置占位行数</h4>
      <div class="demoItem">
        <vc-skeleton :show="true" :avatar="true" :size="'default'" :rows="6"></vc-skeleton>
      </div>
      <h4>设置占位宽度</h4>
      <div class="demoItem">
        <vc-skeleton style="width: 800px;" :show="true" :avatar="true"></vc-skeleton>
      </div>
    </div>
    <div v-if="type === 'dync'">
      <div style="display: flex;align-items: center;">
        <vc-switch v-model="loading"></vc-switch>
        <span style="margin-left: 15px;">{{loading ? loadText[0] : loadText[1]}}</span>
      </div>
      <vc-skeleton :show="loading" :avatar="true" :dynamic="true"></vc-skeleton>
      <div class="person" v-if="!loading">
        <div class="photo">
          <vc-avatar :src="photo" :type="'circle'"></vc-avatar>
        </div>
        <div class="article">
          <p>倚在冬的门楣，静心遥盼雪天使的降临。娉娉婷婷，风姿绰约，飘飘扬扬，曼妙万千。以一身晶莹，绽放独特魅力；以一分柔媚，征服万物生灵；
            以一缕素洁，攫获万心宠爱。如蝶飞舞，如梦唯美，如烟轻柔，如雾飘缈，如心纯净，如水澄澈。</p>
          <p>忧郁的愁丝晕染了流年的底色，孤寒的素洁染白了寒冬的萧瑟。凛冽的寒风呼啸而来，残瘦的枯枝在风中摇曳。清冷的浩空好似在酝酿一场盛
            大的群舞盛宴，天边仿佛飞来白茫茫一片素洁，那是雪精灵在炫舞翩跹。曼妙的舞姿，灵动的舞步，飘逸的神韵，优雅地绽放，美而不艳，媚而不俗，
            令人沉醉，不能自拔……</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      loading: true,
      loadText: ['数据加载中...', '完成数据加载!'],
      photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542034193317&di=35c68f159f719a1af77f02666d694efe&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180928%2F15%2F1538121289-sMcpvdUDTX.jpeg'
    }
  }
}
</script>

<style scoped lang="less">
.SkeletonVcDemo {
  h4 {
    color: #006666;
  }
  .demoItem {
    padding: 5px 0;
    font-size: 18px;
    border-bottom: dotted 1px #999;
  }
  .person {
    display: flex;
    margin-top:10px;
    .photo {
      width: 80px;
      display: inline-flex;
      justify-content: center;
    }
    .article {
      display: inline-block;
      line-height:20px;
      text-indent:50px;
      margin-left: 20px;
    }
  }
}
</style>
