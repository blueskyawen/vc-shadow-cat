<template>
  <div class="AlertVcDemo">
    <div v-if="type === 'basic'">
      <h4>普通提示</h4>
      <div class="demoItem">
        <div class="item">
          <vc-alert :show="true" :type="'success'" :header="'成功, 很好地完成了提交!'"></vc-alert></div>
        <div class="item">
          <vc-alert :show="true" :type="'info'" :header="'信息, 注意这个信息!'"></vc-alert></div>
        <div class="item">
          <vc-alert :show="true" :type="'warn'" :header="'警告, 请不要提交!'"></vc-alert></div>
        <div class="item">
          <vc-alert :show="true" :type="'danger'" :header="'错误, 请进行一些更改!'"></vc-alert></div>
      </div>
      <h4>带关闭按钮</h4>
      <div class="demoItem">
        <div class="item">
          <vc-alert v-model="shows0" :type="'success'" :header="'成功, 很好地完成了提交!'" :closable="true"></vc-alert>
        </div>
        <div class="item">
          <vc-alert v-model="shows1" :type="'info'" :header="'信息, 注意这个信息!'" :closable="true"></vc-alert>
        </div>
        <div class="item">
          <vc-alert v-model="shows2" :type="'warn'" :header="'警告, 请不要提交!'" :closable="true"></vc-alert>
        </div>
        <div class="item">
          <vc-alert v-model="shows3" :type="'danger'" :header="'错误, 请进行一些更改!'" :closable="true"></vc-alert>
        </div>
      </div>
      <div class="demoItem">
        <vc-button @click="showOutAlert">弹出提示</vc-button>
      </div>
      <h4>带图标</h4>
      <div class="demoItem">
        <div class="item">
          <vc-alert v-model="shows20" :type="'success'" :header="'成功, 很好地完成了提交!'"
                    :closable="true" :show-icon="true"></vc-alert>
        </div>
        <div class="item">
          <vc-alert v-model="shows21" :type="'info'" :header="'信息, 注意这个信息!'"
                    :closable="true" :show-icon="true"></vc-alert>
        </div>
        <div class="item">
          <vc-alert v-model="shows22" :type="'warn'" :header="'警告, 请不要提交!'"
                    :closable="true" :show-icon="true"></vc-alert>
        </div>
        <div class="item">
          <vc-alert v-model="shows23" :type="'danger'" :header="'错误, 请进行一些更改!'"
                    :closable="true" :show-icon="true"></vc-alert>
        </div>
      </div>
      <div class="demoItem">
        <vc-button @click="showOutAlert2">弹出提示</vc-button>
      </div>
    </div>
    <div v-if="type === 'advance'">
      <h4>自定义宽度</h4>
      <div class="demoItem">
        <div class="item">
          <vc-alert style="width: 300px;" :show="true" :type="'success'" :header="'成功, 很好地完成了提交!'"
                    :show-icon="true"></vc-alert>
        </div>
        <div class="item">
          <vc-alert style="width: 400px;" :show="true" :type="'info'" :header="'信息, 注意这个信息!'"
                    :show-icon="true"></vc-alert>
        </div>
        <div class="item">
          <vc-alert style="width: 600px;" :show="true" :type="'warn'" :header="'警告, 请不要提交!'"
                    :show-icon="true"></vc-alert>
        </div>
        <div class="item">
          <vc-alert style="width: 800px;" :show="true" :type="'danger'" :header="'错误, 请进行一些更改!'"
                    :show-icon="true"></vc-alert>
        </div>
      </div>
      <h4>带辅助性文字介绍</h4>
      <div class="demoItem">
        <div class="item">
          <vc-alert :show="true" :type="'success'" :header="'成功, 很好地完成了提交!'" :show-icon="true">
            <p>Success Description Success Description Success Description</p>
          </vc-alert>
        </div>
        <div class="item">
          <vc-alert :show="true" :type="'info'" :header="'信息, 注意这个信息!'" :show-icon="true" :closable="true">
            <p>Info Description Info Description Info Description</p>
          </vc-alert>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlertVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      shows0: true,
      shows1: true,
      shows2: true,
      shows3: true,
      shows20: true,
      shows21: true,
      shows22: true,
      shows23: true
    }
  },
  methods: {
    showOutAlert: function () {
      var index = Math.round(Math.random() * 3)
      this.$data['shows' + index] = true
    },
    showOutAlert2 () {
      var index = Math.round(Math.random() * 3)
      this.$data['shows2' + index] = true
    }
  }
}
</script>

<style scoped lang="less">
.AlertVcDemo {
  h4 {
    color: #006666;
  }
  .demoItem {
    padding: 10px 0;
    font-size: 18px;
    border-bottom: dotted 1px #999;
    .item {
      margin-bottom: 12px;
      p {
        margin-top: 10px;
      }
    }
  }
}
</style>
