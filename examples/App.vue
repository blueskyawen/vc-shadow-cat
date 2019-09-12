<template>
  <div class="main-app">
    <header>
      <div class="app-icon">
        <div class="app-logo-title">
          <div class="app-logo"><img alt="Vue Logo" src="./assets/logo.png"></div>
          <div class="app-title">VC-CAT</div>
        </div>
        <div class="vc-anticon-menu-t" @click="changeExtend">
          <div class="vc-anticon-t"></div>
        </div>
      </div>
      <div class="app-menu">
        <div class="menu-item">
          <router-link to="/element">组件</router-link>
          <router-link to="/pattern">模式</router-link>
          <router-link to="/about">关于</router-link>
        </div>
        <a class="github-item" href="https://github.com/blueskyawen/vc-shadow-cat" target="_blank">
          <i class="fa fa-github" title="vc-Shadow-Cat"></i>
        </a>
      </div>
    </header>
    <transition mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
    changeExtend: function () {
      this.$store.commit('toggleSideBar')
    }
  }
}
</script>

<style scoped lang="less">
.main-app  {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  header {
    width: inherit;
    height: 60px;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 6px #e6e6e6;
    background: #fff;
    .app-icon {
      display: flex;
      align-items: center;
      height: inherit;
      justify-content: space-between;
      position: relative;
      .app-logo-title {
        display: flex;
        align-items: center;
        margin-left: 20px;
        .app-title {
          height: inherit;
          display: flex;
          color: #333;
          font-size: 24px;
          align-items: center;
          margin-left: 5px;
        }
        .app-logo {
          height: inherit;
          display: flex;
          align-items: center;
          img {
            width: 32px;
            height: 32px;
          }
        }
      }
      .vc-anticon-menu-t {
        height:inherit;
        display:flex;
        align-items:center;
        position:relative;
        margin-right:30px;
        .vc-anticon-t {
          display:inline-block;
          width: 22px;
          border:solid 1px #666;
          border-radius:1px;
        }
        &:before {
          content:"";
          display:inline-block;
          width: 22px;
          border:solid 1px #666;
          border-radius:1px;
          position:absolute;
          transform: translateX(-50%);
          left:50%;
          top:20px;
        }
        &:after {
          content:"";
          display:inline-block;
          width: 22px;
          border:solid 1px #666;
          border-radius:1px;
          position:absolute;
          transform: translateX(-50%);
          left:50%;
          bottom:20px;
        }
        &:hover {
          cursor:pointer;
          .vc-anticon-t, &:before, &:after {
            border-color:#00cc99;
          }
        }
      }
      &:after {
        content:"";
        display:inline-block;
        height: 35%;
        border:solid 1px #666;
        border-radius:1px;
        position:absolute;
        top:50%;
        right:0;
        transform: translateY(-50%);
      }
    }
    .app-menu {
      height: inherit;
      display: flex;
      .menu-item {
        height: inherit;
        display: flex;
        align-items: center;
        a {
          color: #4d4d4d;
          font-size: 20px;
          text-decoration: none;
          margin-left: 50px;
          &:hover {
            color: #2eb8b8;
          }
          &.router-link-active {
            color: #00b386;
            font-weight: 600;
          }
        }
      }
      .github-item {
        font-size: 30px;
        text-decoration: none;
        height: inherit;
        position: absolute;
        right:40px;
        display: inline-flex;
        align-items: center;
        .fa-github {
          color: #666;
        }
      }
    }
  }
  .v-enter-active, .v-leave-active {
    transition: opacity .5s ease;
  }
  .v-enter, .v-leave-to {
    opacity: 0;
  }
}

/* 超小设备（手机，小于 768px） */
/* Bootstrap 中默认情况下没有媒体查询 */
@media (max-width: 767px) {
  .main-app header {
    height: auto;
    width: 100%;
    flex-direction: column;
    position: fixed;
    top: 0;
    z-index: 5000;
    .app-icon {
      height: 60px;
      width: inherit;
      position: relative;
      border-bottom: solid 1px #e6e6e6;
      .nc-anticon-menu-t {
        margin-left:30px;
      }
      &:after {
        display:none;
      }
    }
    .app-menu {
      width: inherit;
      height: 45px;
      .menu-item a {
        font-size: 18px;
        margin-left: 30px;
      }
      .github-item {
        height: inherit;
        font-size: 26px;
        right:30px;
      }
    }
  }
}
/* 小型设备（平板电脑，768px 起） */
@media (min-width: 768px) {
  .main-app header .app-icon {
    width: 30%;
  }
  .main-app header .app-menu {
    width: 70%;
  }
}
/* 中型设备（台式电脑，992px 起） */
@media (min-width: 992px) {
  .main-app header .app-icon {
    width: 25%;
  }
  .main-app header .app-menu {
    width: 75%;
  }
}
/* 大型设备（大台式电脑，1200px 起） */
@media (min-width: 1200px) {
  .main-app header .app-icon {
    width: 20%;
  }
  .main-app header .app-menu {
    width: 80%;
  }
}
</style>
