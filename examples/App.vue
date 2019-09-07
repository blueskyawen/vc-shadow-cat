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
    <article></article>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isExpand: true
    }
  },
  methods: {
    changeExtend: function () {
      this.isExpand = !this.isExpand
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
}
/* 小型设备（平板电脑，768px 起） */
@media (min-width: 768px) {
  .main-app header .app-icon {
    width: 30%;
  }
  .main-app header .app-menu {
    width: 70%;
  }
  .main-app article .side-bars {
    width: 30%;
  }
  .main-app article .content {
    width: 70%;
    left:30%;
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
  .main-app article .side-bars {
    width: 25%;
  }
  .main-app article .content {
    width: 75%;
    left:25%;
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
  .main-app article .side-bars {
    width: 20%;
  }
  .main-app article .content {
    width: 80%;
    left:20%;
  }
}
</style>
