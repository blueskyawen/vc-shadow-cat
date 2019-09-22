<template>
  <div class="inputVcDemo">
    <div v-if="type === 'input'">
      <p>普通样式</p>
      <div class="demo-item">
        <vc-input type="text" placeholder="输入用户名" v-model="name"
                  :required="true" :showError="true"></vc-input>
      </div>
      <div class="demo-item">
        <vc-input type="password" placeholder="输入密码" v-model="password"
                  :required="true" :showError="true"></vc-input>
      </div>
      <p>只读和自动聚焦</p>
      <div class="demo-item">
        <vc-input type="text" readonly="true" v-model="like"></vc-input>
      </div>
      <div class="demo-item">
        <vc-input type="text" autofocus="true" v-model="site"></vc-input>
      </div>
      <p>自定义输入提示和错误信息</p>
      <div class="demo-item">
        <vc-input type="text" v-model="like"
                  :showHint="showLintInfo" :hintText="'显示输入提示'"
                  :showError="showErrorInfo" :errorText="'显示错误信息'"></vc-input>
      </div>
      <div class="demo-item">
        <vc-button class="demo-btn" @click="toggleLint">{{showLintInfo ? '不显示输入提示' : '显示输入提示'}}</vc-button>
        <vc-button class="demo-btn" @click="toggleErr">{{showErrorInfo ? '不显示错误信息' : '显示错误信息'}}</vc-button>
      </div>
      <p>禁止样式</p>
      <div class="demo-item">
        <vc-input type="text" v-model="site" :disabled="true"></vc-input>
      </div>
      <p>带输入前/后缀</p>
      <div class="demo-item">
        <vc-input type="text" v-model="site" :suffix="'GB'"></vc-input>
      </div>
      <div class="demo-item">
        <vc-input type="text" v-model="site" :prefix="'http://'"></vc-input>
      </div>
      <div class="demo-item">
        <vc-input type="text" v-model="site" :prefix="'http://'" :suffix="'GB'"></vc-input>
      </div>
      <p>搜索样式</p>
      <div class="demo-item">
        <vc-input type="text" v-model="site" :search="true"></vc-input>
      </div>
    </div>
    <div v-if="type === 'icon'">
      <div class="demo-item">
        <vc-input type="text" v-model="name" :iconfix="'pre'">
          <template v-slot:preIcon>
            <vc-input-icon :type="'pre'"><span class="fa fa-user"></span></vc-input-icon>
          </template>
        </vc-input>
      </div>
      <div class="demo-item">
        <vc-input type="text" v-model="name" :iconfix="'sub'">
          <template v-slot:subIcon>
            <vc-input-icon :type="'sub'"><span class="fa fa-lock"></span></vc-input-icon>
          </template>
        </vc-input>
      </div>
    </div>
    <div v-if="type === 'area'" class="demo-item">
      <vc-textarea v-model="description"></vc-textarea>
    </div>
    <div v-if="type === 'size'">
      <div class="demo-item2">
        <vc-input type="text" v-model="site" :width="'200px'" :height="'30px'"></vc-input>
      </div>
      <div class="demo-item2">
        <vc-input type="text" v-model="site" :width="'900px'" :height="'50px'"></vc-input>
      </div>
      <div class="demo-item2">
        <vc-input type="text" v-model="site"  :search="true" :width="'900px'" :height="'50px'"></vc-input>
      </div>
      <div class="demo-item2">
        <vc-textarea v-model="description" :width="'200px'" :height="'100px'"></vc-textarea>
      </div>
      <div class="demo-item2">
        <vc-textarea v-model="description" :width="'900px'" :height="'100px'"></vc-textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      name: '',
      password: '',
      work: 'Find',
      food: 'Fish',
      like: 'boll',
      site: 'shanghai',
      showLintInfo: true,
      showErrorInfo: true,
      description: 'description'
    }
  },
  methods: {
    toggleLint: function () {
      this.showLintInfo = !this.showLintInfo
    },
    toggleErr: function () {
      this.showErrorInfo = !this.showErrorInfo
    }
  }
}
</script>

<style scoped lang="less">
.inputVcDemo {
  max-width: 100%;
  .demo-item {
    width: 600px;
    margin: 10px 0;
    max-width: 100%;
    .demo-btn {
      margin-right: 15px;
      margin-bottom: 10px;
    }
  }
  .demo-item2 {
    margin: 10px 0;
  }
  p {
    color: #006666;
  }
  .demoText {
    margin: 15px 10px 5px;
  }
}
</style>
