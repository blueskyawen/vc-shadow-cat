<template>
  <div class="AvatarVcDemo">
    <div v-if="type === 'basic'">
      <h4>方形头像</h4>
      <div class="demoItem">
        <vc-avatar class="item" :src="photoUrl"></vc-avatar>
        <vc-avatar class="item" :src="photoUrl" :size="'medium'"></vc-avatar>
        <vc-avatar class="item" :src="photoUrl" :size="'small'"></vc-avatar>
      </div>
      <h4>圆形头像</h4>
      <div class="demoItem">
        <vc-avatar class="item" :src="photoUrl" :type="'circle'"></vc-avatar>
        <vc-avatar
          class="item"
          :src="photoUrl"
          :type="'circle'"
          :size="'medium'"
        ></vc-avatar>
        <vc-avatar
          class="item"
          :src="photoUrl"
          :type="'circle'"
          :size="'small'"
        ></vc-avatar>
      </div>
    </div>
    <div v-if="type === 'badge'">
      <div class="demoItem">
        <vc-avatar class="item" :src="photoUrl" :show-badge="true">
          <vc-badge
            class="badgeItem"
            :type="'danger'"
            :count="6"
            :show-info="true"
          ></vc-badge>
        </vc-avatar>
        <vc-avatar
          class="item"
          :src="photoUrl"
          :size="'medium'"
          :show-badge="true"
        >
          <vc-badge class="badgeItem" :type="'danger'" :count="6"></vc-badge>
        </vc-avatar>
        <vc-avatar
          class="item"
          :src="photoUrl"
          :size="'small'"
          :show-badge="true"
        >
          <vc-badge
            class="badgeItem2"
            :type="'danger'"
            :count="6"
            :show-info="false"
          ></vc-badge>
        </vc-avatar>
      </div>
      <div class="demoItem">
        <vc-avatar
          class="item"
          :src="photoUrl"
          :type="'circle'"
          :show-badge="true"
        >
          <vc-badge
            class="badgeItem"
            :type="'danger'"
            :count="6"
            :show-info="true"
          ></vc-badge>
        </vc-avatar>
        <vc-avatar
          class="item"
          :src="photoUrl"
          :type="'circle'"
          :size="'medium'"
          :show-badge="true"
        >
          <vc-badge class="badgeItem" :type="'danger'" :count="6"></vc-badge>
        </vc-avatar>
        <vc-avatar
          class="item"
          :src="photoUrl"
          :type="'circle'"
          :size="'small'"
          :show-badge="true"
        >
          <vc-badge
            class="badgeItem2"
            :type="'danger'"
            :count="6"
            :show-info="false"
          ></vc-badge>
        </vc-avatar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AvatarVcDemo",
  props: {
    type: String
  },
  data() {
    return {
      photoUrl: require("../../assets/images/touxiang.jpg")
    };
  }
};
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
