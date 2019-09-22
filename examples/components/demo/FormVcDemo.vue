<template>
  <div class="FormVcDemo">
    <form v-if="type === '1'"  class="vc-container demoItem" @submit="checkForm" novalidate>
      <vc-row>
        <vc-col :xs="{span: 12}" :md="{span: 4}" :lg="{span: 3}">
          <vc-form-group>
            <vc-input type="text" v-model="user.name" placeholder="输入用户名" :iconfix="'pre'">
              <template v-slot:preIcon>
                <vc-input-icon :type="'pre'"><span class="fa fa-user"></span></vc-input-icon>
              </template>
            </vc-input>
          </vc-form-group>
        </vc-col>
        <vc-col class="col-item" :xs="{span: 12}" :md="{span: 4}" :lg="{span: 3}">
          <vc-form-group>
            <vc-input type="password" v-model="user.password" placeholder="输入密码" :iconfix="'pre'">
              <template v-slot:preIcon>
                <vc-input-icon :type="'pre'"><span class="fa fa-lock"></span></vc-input-icon>
              </template>
            </vc-input>
          </vc-form-group>
        </vc-col>
        <vc-col class="col-item" :xs="{span: 12}" :md="{span: 4}" :lg="{span: 3}">
          <vc-form-group>
            <vc-button :disabled="disableUser" :loading="isLoading" @click="save">保存</vc-button>
          </vc-form-group>
        </vc-col>
      </vc-row>
    </form>
    <form v-if="type === '2'"  class="vc-container demoItem" @submit="checkForm" novalidate>
      <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
        <vc-col :xs="{span: 3}">
          <vc-form-label :required="true">用户名</vc-form-label>
        </vc-col>
        <vc-col :xs="{span: 9}">
          <vc-form-control>
            <vc-input type="text" v-model="user2.name" placeholder="输入用户名" :iconfix="'pre'">
              <template v-slot:preIcon>
                <vc-input-icon :type="'pre'"><span class="fa fa-user"></span></vc-input-icon>
              </template>
            </vc-input>
          </vc-form-control>
        </vc-col>
      </vc-form-group>
      <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
        <vc-col :xs="{span: 3}">
          <vc-form-label :required="true">密码</vc-form-label>
        </vc-col>
        <vc-col :xs="{span: 9}">
          <vc-form-control>
            <vc-input type="password" v-model="user2.password" placeholder="输入密码" :iconfix="'pre'">
              <template v-slot:preIcon>
                <vc-input-icon :type="'pre'"><span class="fa fa-lock"></span></vc-input-icon>
              </template>
            </vc-input>
          </vc-form-control>
        </vc-col>
      </vc-form-group>
      <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
        <vc-col :xs="{span: 9, offset: 3}">
          <vc-button :disabled="disableUser2" @click="save2">保存</vc-button>
        </vc-col>
      </vc-form-group>
    </form>
    <form v-if="type === '3'"  class="vc-container demoItem" @submit="checkForm" novalidate>
      <vc-form-group>
        <vc-form-label class="vc-content-start">用户名</vc-form-label>
        <vc-form-control class="vc-xs-col-12">
          <vc-input type="text" v-model="user3.name" placeholder="输入用户名" :iconfix="'pre'">
            <template v-slot:preIcon>
              <vc-input-icon :type="'pre'"><span class="fa fa-user"></span></vc-input-icon>
            </template>
          </vc-input>
        </vc-form-control>
      </vc-form-group>
      <vc-form-group>
        <vc-form-label class="vc-content-start">密码</vc-form-label>
        <vc-form-control class="vc-xs-col-12">
          <vc-input type="password" v-model="user3.password" placeholder="输入密码" :iconfix="'pre'">
            <template v-slot:preIcon>
              <vc-input-icon :type="'pre'"><span class="fa fa-lock"></span></vc-input-icon>
            </template>
          </vc-input>
        </vc-form-control>
      </vc-form-group>
      <vc-form-group>
        <vc-button :disabled="disableUser3" @click="save3">保存</vc-button>
      </vc-form-group>
    </form>
    <vc-info :type="'success'" :location="'right'" v-model="showInfo" :header-title="'保存成功'">
      <template v-slot:content>
        <p>User: {{userData}}</p>
        <p>2s后自动消失</p>
      </template>
    </vc-info>
    <form v-if="type === '4'"  class="vc-container demoItem" @submit="checkForm" novalidate>
      <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
        <vc-form-label class="vc-xs-col-3">用户名</vc-form-label>
        <vc-form-control class="vc-xs-col-9">
          <vc-input type="text" v-model="person.name" placeholder="输入用户名"></vc-input>
        </vc-form-control>
      </vc-form-group>
      <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
        <vc-form-label class="vc-xs-col-3">密码</vc-form-label>
        <vc-form-control class="vc-xs-col-9">
          <vc-input type="password" v-model="person.password" placeholder="输入密码"></vc-input>
        </vc-form-control>
      </vc-form-group>
      <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
        <vc-form-label class="vc-xs-col-3">性别</vc-form-label>
        <vc-form-control class="vc-xs-col-9">
          <vc-radio :options="sexOptions" v-model="person.sex"></vc-radio>
        </vc-form-control>
      </vc-form-group>
      <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
        <vc-form-label class="vc-xs-col-3">年龄</vc-form-label>
        <vc-form-control class="vc-xs-col-9">
          <vc-num-input v-model="person.age" :size="'middle'"></vc-num-input>
        </vc-form-control>
      </vc-form-group>
      <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
        <vc-form-label class="vc-xs-col-3">身高</vc-form-label>
        <vc-form-control class="vc-xs-col-9">
          <vc-input type="text" v-model="person.high" :suffix="'cm'"></vc-input>
        </vc-form-control>
      </vc-form-group>
      <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
        <vc-form-label class="vc-xs-col-3">体重</vc-form-label>
        <vc-form-control class="vc-xs-col-9">
          <vc-slider :withTitle="true" v-model="person.weight"></vc-slider>
        </vc-form-control>
      </vc-form-group>
      <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
        <vc-form-label class="vc-xs-col-3">手机号</vc-form-label>
        <vc-form-control class="vc-xs-col-9">
          <vc-input type="text" v-model="person.phone" :prefix="'+86'"></vc-input>
        </vc-form-control>
      </vc-form-group>
      <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
        <vc-form-label class="vc-xs-col-3">学历</vc-form-label>
        <vc-form-control class="vc-xs-col-9">
          <vc-select class="formItem" :options="eduOptions" v-model="person.education"></vc-select>
        </vc-form-control>
      </vc-form-group>
      <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
        <vc-form-label class="vc-xs-col-3">爱好</vc-form-label>
        <vc-form-control class="vc-xs-col-9">
          <vc-mutil-select class="formItem" :options="likeOptions" :has-checkbox="true"
                           v-model="person.likes"></vc-mutil-select>
        </vc-form-control>
      </vc-form-group>
      <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
        <vc-form-label class="vc-xs-col-3">首次申请</vc-form-label>
        <vc-form-control class="vc-xs-col-9">
          <vc-switch :type="'min'" v-model="person.firstApply"></vc-switch>
        </vc-form-control>
      </vc-form-group>
      <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
        <vc-form-label class="vc-xs-col-3">描述</vc-form-label>
        <vc-form-control class="vc-xs-col-9">
          <vc-textarea v-model="person.otherDecription"></vc-textarea>
        </vc-form-control>
      </vc-form-group>
      <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
        <vc-form-control class="vc-xs-col-9 vc-xs-offset-3">
          <vc-checkbox v-model="person.aggre"></vc-checkbox>
          <span>已阅读并同意</span>
        </vc-form-control>
      </vc-form-group>
      <vc-form-group class="vc-xs-col-12 vc-md-col-10 vc-lg-col-8">
        <vc-button class="vc-xs-offset-3" :loading="isLoading" @click="save4">{{isLoading ? '保存中..' : '保存'}}</vc-button>
      </vc-form-group>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      user: {
        name: '',
        password: ''
      },
      user2: {
        name: '',
        password: ''
      },
      user3: {
        name: '',
        password: ''
      },
      isLoading: false,
      showInfo: false,
      userData: '',
      person: {
        name: 'Jack',
        password: '',
        sex: 'man',
        age: 18,
        phone: '',
        weight: 62,
        high: '168',
        education: 'master',
        likes: ['read', 'run', 'climb', 'cate'],
        otherDecription: '',
        firstApply: true,
        aggre: true
      },
      sexOptions: [
        { label: '男', value: 'man', disabled: false },
        { label: '女', value: 'woman', disabled: false }
      ],
      eduOptions: [
        { label: '专科', value: 'college', disable: false },
        { label: '本科', value: 'undergraduate', disable: false },
        { label: '硕士', value: 'master', disable: false },
        { label: '博士', value: 'doctor', disable: false },
        { label: '博士后', value: 'postdoctor', disable: false }
      ],
      likeOptions: [
        { label: '读书', value: 'read', disable: false },
        { label: '旅游', value: 'trip', disable: false },
        { label: '跑步', value: 'run', disable: false },
        { label: '徒步', value: 'hike', disable: false },
        { label: '爬山', value: 'climb', disable: false },
        { label: '投资', value: 'invest', disable: false },
        { label: '美食', value: 'cate', disable: false },
        { label: '睡觉', value: 'sleep', disable: false },
        { label: '音乐', value: 'music', disable: false }
      ]
    }
  },
  computed: {
    disableUser: function () {
      return !(this.user.name && this.user.password)
    },
    disableUser2: function () {
      return !(this.user2.name && this.user2.password)
    },
    disableUser3: function () {
      return !(this.user3.name && this.user3.password)
    }
  },
  methods: {
    save: function () {
      if (this.disableUser) return
      this.isLoading = true
      setTimeout(() => {
        this.userData = JSON.stringify(this.user)
        this.isLoading = false
        this.showInfo = true
      }, 3000)
    },
    save2: function () {
      if (this.disableUser2) return
      this.userData = JSON.stringify(this.user2)
      this.showInfo = true
    },
    save3: function () {
      if (this.disableUser3) return
      this.userData = JSON.stringify(this.user3)
      this.showInfo = true
    },
    save4: function () {
      this.isLoading = true
      setTimeout(() => {
        this.userData = JSON.stringify(this.person)
        this.isLoading = false
        this.showInfo = true
      }, 3000)
    },
    checkForm: function (e) {
      e.preventDefault()
    }
  }
}
</script>

<style scoped lang="less">
.FormVcDemo {
  h4 {
    color: #006666;
  }
  .demoItem {
    padding: 10px 0;
    font-size: 18px;
    border-bottom: dotted 1px #999;
    .vc-col {
      padding-left: 15px
    }
  }
  .formItem {
    width: 100%;
  }
}
@media (max-width: 767px) {
}
</style>
