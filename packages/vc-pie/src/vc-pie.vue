<template>
  <span class="vc-pie">
    <span class="pie-title">{{header}}</span>
    <span class="pie-chart" @mouseleave="hoverPieItemOut">
      <span class="pie-left-cont" @mouseenter="hoverPieItem('left',$event)">
        <span class="pie-bar" :class="leftClass1"></span>
        <span class="pie-bar" :class="leftClass2" :style="leftStyle"></span>
      </span>
      <span class="pie-right-cont" :class="pieClasses" @mouseenter="hoverPieItem('used',$event)">
        <span class="pie-bar" :class="rightClass1"></span>
        <span class="pie-bar" :class="rightClass2" :style="rightStyle"></span>
      </span>
      <span class="pie-center" v-if="type === 'ring'">{{usageShow}}</span>
    </span>
    <span class="pie-footer">
      <span v-for="item of pieData" :key="item.title">{{item.title}}:{{item.value}}</span>
    </span>
    <div class="chart-hover" v-show="showObj" :style="hoverItemStyle">
      <span class="chart-objs">
          <span class="hover-item">{{hoverItemObj.title}}</span>
          <span class="chart-obj-body">
            <span class="obj-icon" :style="{'background': hoverItemObj.color}"></span>
            <span class="obj-title">{{hoverItemObj.value}}</span>
          </span>
      </span>
    </div>
  </span>
</template>

<script>
export default {
  name: 'vc-pie',
  props: {
    header: {
      type: String,
      default: '使用率'
    },
    type: {
      type: String,
      default: 'pie'
    },
    pieData: {
      type: Array,
      default: function () {
        return [ { title: '已使用', value: 37 }, { title: '总共', value: 100 } ]
      }
    }
  },
  data () {
    return {
      usage: 0,
      leftT: 0,
      usageShow: '',
      isMoveleft: false,
      barUsage: -180,
      hoverItemObj: { title: '', value: 0, color: '' },
      color: '',
      clientY: 0,
      clientX: 0,
      showObj: false,
      moveLeft: false,
      moveRight: false
    }
  },
  created: function () {
    this.usage = Number(this.pieData[0].value * 100 / this.pieData[1].value)
    this.usageShow = this.usage.toFixed(1) + '%'
    this.isMoveleft = this.usage < 50
    this.leftT = Math.round(this.pieData[1].value - this.pieData[0].value)
    this.color = this.usage <= 50 ? '#4db8ff' : this.usage > 50 && this.usage <= 80 ? '#ffb366' : '#ff1a1a'
    if (this.isMoveleft) {
      setTimeout(() => {
        this.barUsage = Math.round(this.pieData[0].value * 360 / this.pieData[1].value) - 180
      }, 10)
    } else {
      this.isMoveleft = true
      setTimeout(() => {
        this.barUsage = 0
        setTimeout(() => {
          this.isMoveleft = false
          this.barUsage = Math.round(this.pieData[0].value * 360 / this.pieData[1].value) - 180
        }, 300)
      }, 10)
    }
  },
  computed: {
    pieClasses: function () {
      return { 'pie-low': this.usage <= 50,
        'pie-middle': this.usage > 50 && this.usage <= 80,
        'pie-high': this.usage > 80 }
    },
    leftClass1: function () {
      return { 'z-index2': this.isMoveleft, 'z-index1': !this.isMoveleft }
    },
    leftClass2: function () {
      return { 'z-index2': this.isMoveleft, 'z-index1': !this.isMoveleft }
    },
    rightClass1: function () {
      return { 'z-index1': this.isMoveleft, 'z-index2': !this.isMoveleft }
    },
    rightClass2: function () {
      return { 'z-index1': this.isMoveleft, 'z-index2': !this.isMoveleft }
    },
    leftStyle: function () {
      return this.isMoveleft ? { 'transform': 'rotate(' + this.barUsage + 'deg)' } : {}
    },
    rightStyle: function () {
      return this.isMoveleft ? {} : { 'transform': 'rotate(' + this.barUsage + 'deg)' }
    },
    hoverItemStyle: function () {
      return { 'opacity': 1, 'top': (this.clientY + 5) + 'px', 'left': (this.clientX + 5) + 'px' }
    }
  },
  methods: {
    hoverPieItemOut: function () {
      this.showObj = false
    },
    hoverPieItem: function (type, $event) {
      if (type === 'left') {
        this.hoverItemObj = { title: '剩余', value: this.leftT, color: ' #e6e6e6' }
      } else {
        this.hoverItemObj = { title: this.pieData[0].title,
          value: this.pieData[0].value,
          color: this.color }
      }
      this.clientX = event.clientX
      this.clientY = event.clientY
      this.showObj = true
    }
  }
}
</script>

<style scoped lang="less">
.vc-pie {
  display:inline-flex;
  flex-direction:column;
  align-items:center;
  margin:10px;
  position: relative;
  .pie-title {
    display:inline-block;
    margin-bottom:20px;
  }
  .pie-chart {
    display:inline-block;
    height:140px;
    width:140px;
    background:#fff;
    border-radius:50%;
    overflow:hidden;
    cursor:pointer;
    position:relative;
    z-index:0;
    border:none;
    .pie-left-cont {
      > .pie-bar {
        position:absolute;
        display:inline-block;
        height:100%;
        width:50%;
        left:0%;
        top:0%;
        background:#e6e6e6;
        border:none;
        z-index:-1;
        &.noDisplay {
          display:none;
        }
        &:last-child {
          transform:rotate(-180deg);
          transform-origin:center right;
          transition: transform 300ms linear;
        }
        &.z-index2 {
          z-index: -1;
        }
        &.z-index1 {
          z-index: -2;
        }
      }
    }
    .pie-right-cont {
      > .pie-bar {
        display:inline-block;
        height:100%;
        width:50%;
        background:#4db8ff;
        position:absolute;
        left:50%;
        z-index:-2;
        &.noDisplay {
          display:none;
        }
        &:last-child {
          transform-origin:center left;
          transition:transform 300ms linear;
        }
        &.z-index2 {
          z-index: -1;
        }
        &.z-index1 {
          z-index: -2;
        }
      }
      &.pie-middle {
        .pie-bar {
          background:#ffb366;
        }
      }
      &.pie-high {
        .pie-bar {
          background:#ff1a1a;
        }
      }
    }
    .pie-center {
      display:inline-flex;
      justify-content:center;
      align-items:center;
      height:80%;
      width:80%;
      border-radius:50%;
      background:#fff;
      z-index:10;
      position:absolute;
      left:50%;
      top:50%;
      transform:translateX(-50%) translateY(-50%);
    }
  }
  .pie-footer {
    display:inline-flex;
    width:100%;
    justify-content:space-between;
    margin-top:10px;
    font-size:12px;
  }
  .chart-hover {
    display: inline-flex;
    flex-direction: column;
    background: #f2f2f2;
    position: fixed;
    left: 0px;
    top: 0px;
    border: solid 1px #999;
    border-radius: 5px;
    padding: 5px 10px;
    z-index: 2;
    width: 50px;
    .chart-objs {
      top: 0;
      display: inline-flex;
      flex-direction: column;
      position: relative;
      .hover-item {
        margin: 0px 0px 5px;
        font-size: 14px;
        color: #666;
      }
      .chart-obj-body {
        display: inline-flex;
        align-items: center;
        font-size: 12px;
        color: #666;
        position: relative;
        .obj-icon {
          display: inline-block;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #70dbdb;
          margin-right: 5px;
        }
        obj-title {
          display: inline-block;
          font-size: 12px;
          color: #666;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
