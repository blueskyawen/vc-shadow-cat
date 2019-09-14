<template>
  <div class="vc-carousel" @mouseover="moveCarousel('over')" @mouseout="moveCarousel('out')">
    <ul :class="effectClasss" :style="imgStyleStr">
      <li v-for="(caption, index) in captions" :key="index" @click="callBack(caption)" :style="caption.moveStyle">
        <img :src="caption.url" :alt="'img_'+index" :style="imgStyleStr" />
      </li>
    </ul>
    <div class="bars">
      <span v-for="(caption, index) in captions" :key="index"
            :class="{'active': showIndex === index}" @click="changePic(index)"></span>
    </div>
    <div class="carousel-bar bar-left" @click="prePage"><div class="bar-ico"></div></div>
    <div class="carousel-bar bar-right" @click="nextPage"><div class="bar-ico"></div></div>
  </div>
</template>

<script>
export default {
  name: 'vc-carousel',
  model: {
    prop: 'curIndex',
    event: 'change'
  },
  props: {
    effect: {
      type: String,
      default: 'fade'
    },
    curIndex: {
      type: Number,
      default: 0
    },
    captions: {
      type: Array,
      default: function () {
        return []
      }
    },
    pause: {
      type: Boolean,
      default: false
    },
    circularBead: {
      type: String,
      default: ''
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    timerlen: {
      type: Number,
      default: 6000
    }
  },
  data () {
    return {
      showIndex: 0,
      imgRadius: '',
      numReg: /^[1-9]\d*$/,
      autoTimerId: '',
      isCanClick: true,
      oldIndex: 0
    }
  },
  created: function () {
    this.initCarousel()
  },
  beforeDestroy: function () {
    this.stopAutoTimer()
  },
  computed: {
    imgStyleStr: function () {
      return { 'border-radius': this.imgRadius }
    },
    effectClasss: function () {
      return { 'effet-slide': this.effect === 'slide', 'effet-fade': this.effect === 'fade' }
    }
  },
  methods: {
    initCarousel: function () {
      this.showIndex = this.curIndex
      this.imgRadius = this.circularBead ? this.circularBead : 'none'
      this.timerlen = this.numReg.test(this.timerlen) ? this.timerlen : 6000
      if (this.effect === 'fade') {
        this.captions.forEach(option => {
          this.$set(option, 'moveStyle', { 'opacity': '0', 'z-index': '0' })
        })
      } else {
        this.captions.forEach(option => {
          this.$set(option, 'moveStyle', { 'transition': 'none', 'top': '100%', 'left': '0%' })
        })
      }
      if (this.effect === 'fade') {
        this.captions[this.showIndex].moveStyle = { 'opacity': '1', 'z-index': '2' }
      } else {
        this.captions[this.showIndex].moveStyle = { 'transition': 'none', 'top': '0%', 'left': '0%' }
      }
      this.startAutoTimer()
    },
    startAutoTimer: function () {
      if (this.autoPlay) {
        this.autoTimerId = setInterval(() => {
          this.nextPage()
          console.log('nextPage')
        }, this.timerlen)
      }
    },
    stopAutoTimer: function () {
      if (this.autoTimerId) {
        clearInterval(this.autoTimerId)
        this.autoTimerId = ''
      }
    },
    callBack: function (caption) {
      if (caption.disabled) return
      (caption.callback)()
    },
    changePic: function (pickIndex) {
      if (!this.isCanClick) return
      if (this.effect === 'slide') {
        if (this.showIndex < pickIndex) {
          this.changeRight(pickIndex)
        } else {
          this.changeLeft(pickIndex)
        }
      } else {
        this.hideOptions()
        this.showIndex = pickIndex
        this.captions[this.showIndex].moveStyle = { 'opacity': '1', 'z-index': '2' }
        this.$emit('change', this.showIndex)
      }
    },
    hideOptions: function () {
      this.captions.forEach(item => {
        item.moveStyle = { 'opacity': '0', 'z-index': '0' }
      })
    },
    changeLeft: function (changeIndex) {
      this.captions[changeIndex].moveStyle = { 'transition': 'none', 'top': '0%', 'left': '-100%' }
      this.isCanClick = false
      setTimeout(() => {
        this.captions[changeIndex].moveStyle = { 'transition': 'left 1s ease-out', 'top': '0%', 'left': '0%' }
        this.captions[this.showIndex].moveStyle = { 'transition': 'left 1s ease-out', 'top': '0%', 'left': '100%' }
        this.oldIndex = this.showIndex
        this.showIndex = changeIndex
        this.$emit('change', this.showIndex)
        setTimeout(() => {
          this.recoverImgState()
        }, 1000)
      }, 20)
    },
    changeRight: function (changeIndex) {
      this.captions[changeIndex].moveStyle = { 'transition': 'none', 'top': '0%', 'left': '100%' }
      this.isCanClick = false
      setTimeout(() => {
        this.captions[changeIndex].moveStyle = { 'transition': 'left 1s ease-out', 'top': '0%', 'left': '0%' }
        this.captions[this.showIndex].moveStyle = { 'transition': 'left 1s ease-out', 'top': '0%', 'left': '-100%' }
        this.oldIndex = this.showIndex
        this.showIndex = changeIndex
        this.$emit('change', this.showIndex)
        setTimeout(() => {
          this.recoverImgState()
        }, 1000)
      }, 20)
    },
    recoverImgState: function () {
      this.captions[this.oldIndex].moveStyle = { 'transition': 'left 1s ease-out', 'top': '100%', 'left': '0%' }
      this.isCanClick = true
    },
    prePage: function () {
      if (!this.isCanClick) return
      var preIndex = 0
      if (this.showIndex > 0) {
        preIndex = this.showIndex - 1
      } else {
        preIndex = this.captions.length - 1
      }
      if (this.effect === 'slide') {
        this.changeLeft(preIndex)
      } else {
        this.hideOptions()
        this.showIndex = preIndex
        this.captions[this.showIndex].moveStyle = { 'opacity': '1', 'z-index': '2' }
        this.$emit('change', this.showIndex)
      }
    },
    nextPage: function () {
      if (!this.isCanClick) return
      var nextIndex = 0
      if (this.showIndex + 1 < this.captions.length) {
        nextIndex = this.showIndex + 1
      } else {
        nextIndex = 0
      }
      if (this.effect === 'slide') {
        this.changeRight(nextIndex)
      } else {
        this.hideOptions()
        this.showIndex = nextIndex
        this.captions[this.showIndex].moveStyle = { 'opacity': '1', 'z-index': '2' }
        this.$emit('change', this.showIndex)
      }
    },
    moveCarousel: function (type) {
      if (!this.pause || !this.autoPlay) return
      if (type === 'over') {
        this.stopAutoTimer()
      }
      if (type === 'out') {
        this.startAutoTimer()
      }
    }
  }
}
</script>

<style scoped lang="less">
.vc-carousel {
  display:block;
  margin:auto;
  height:600px;
  width:100%;
  position:relative;
  border:none;
  padding:0;
  max-width: 100%;
  ul {
    height:100%;
    width:100%;
    list-style:none;
    padding:0;
    margin:0;
    position:relative;
    overflow:hidden;
    li {
      height:100%;
      width:100%;
      display:inline-block;
      position:absolute;
      img {
        height:100%;
        width:100%;
        max-height:100%;
        max-width:100%;
        background-color: #f2f2f2;
        &:hover {
          cursor: pointer;
        }
      }
    }
    &.effet-slide {
      li {
        left:0%;
        top:100%;
        transition: left 1s ease-out;
      }
    }
    &.effet-fade {
      li {
        opacity:0;
        transition: opacity 1s ease-out;
      }
    }
  }
  .bars {
    display:block;
    position:absolute;
    bottom:5%;
    left:50%;
    transform: translateX(-50%);
    z-index: 3;
    span {
      display:inline-block;
      height:10px;
      width:10px;
      border:solid 2px #999;
      border-radius:50%;
      cursor:pointer;
      margin-left:5px;
      &:hover, &.active {
        border-color:#fff;
      }
    }
  }
  .carousel-bar {
    width: 50px;
    box-sizing: border-box;
    height: 100%;
    cursor:pointer;
    position:absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top:0;
    z-index: 3;
    .bar-ico {
      display:inline-block;
      height:8px;
      width:8px;
      opacity:0.8;
    }
    &.bar-left {
      left: 0;
      .bar-ico {
        border:solid 4px #666;
        border-color: #666 transparent transparent #666;
        transform: rotate(-45deg);
      }
      &:hover .bar-ico {
        border-color: #00e6ac transparent transparent #00e6ac;
      }
    }
    &.bar-right {
      right: 0;
      .bar-ico {
        border:solid 4px #666;
        border-color: #666 #666 transparent transparent;
        transform: rotate(45deg);
      }
      &:hover .bar-ico {
        border-color: #00e6ac #00e6ac transparent transparent;
      }
    }
  }
}
@media (max-width: 767px) {
  .vc-carousel {
    height:240px;
  }
}
@media (min-width: 768px) {
  .vc-carousel {
    height:420px;
  }
}
@media (min-width: 992px) {
  .vc-carousel {
    height:550px;
  }
}
@media (min-width: 1200px) {
  .vc-carousel {
    height:650px;
  }
}
</style>
