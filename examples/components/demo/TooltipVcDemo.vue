<template>
  <div class="TooltipVcDemo">
    <div v-if="type === 'info'" class="demoItem">
      <div class="toolItem">
        <vc-tooltip :type="'prompt'" :place="'right'">
          <template v-slot:title>我在右边</template>
          <p>我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边</p>
        </vc-tooltip>
      </div>
      <div class="toolItem">
        <vc-tooltip :type="'prompt'" :place="'left'">
          <template v-slot:title>我在左边</template>
          <p>我在左边</p>
        </vc-tooltip>
      </div>
      <div class="toolItem">
        <vc-tooltip :type="'prompt'" :place="'top'">
          <template v-slot:title>我在上边</template>
          <p>我在上边</p>
        </vc-tooltip>
      </div>
      <div class="toolItem">
        <vc-tooltip :type="'prompt'" :place="'bottom'">
          <template v-slot:title>我在下边</template>
          <p>我在下边</p>
        </vc-tooltip>
      </div>
    </div>
    <div v-if="type === 'help'" class="demoItem">
      <div class="toolItem">
        <vc-tooltip :type="'help'" :helpStyle="'default'" :place="'right'">
          <p>我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边我在右边</p>
        </vc-tooltip>
      </div>
      <div class="toolItem">
        <vc-tooltip :type="'help'" :helpStyle="'normal'" :place="'left'">
          <p>我在左边</p>
        </vc-tooltip>
      </div>
      <div class="toolItem">
        <vc-tooltip :type="'help'" :helpTitle="'?'" :helpStyle="'warn'" :place="'top'">
          <p>我在上边</p>
        </vc-tooltip>
      </div>
      <div class="toolItem">
        <vc-tooltip :type="'help'" :helpTitle="'?'" :helpStyle="'error'" :place="'bottom'">
          <p>我在下边</p>
        </vc-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TooltipVcDemo',
  props: {
    type: String
  }
}
</script>

<style scoped lang="less">
.TooltipVcDemo {
  display: flex;
  justify-content: center;
  .demoItem {
    width: 50%;
    height: 150px;
    position: relative;
    > .toolItem {
      position: absolute;
      &:first-of-type {
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      &:nth-of-type(2) {
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      &:nth-of-type(3) {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-of-type(4) {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    p {
      width: 120px;
    }
  }
  h4 {
    color: #006666;
  }
}
</style>
