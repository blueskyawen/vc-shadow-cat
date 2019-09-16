<template>
  <div class="vc-rate" @mouseleave="outRate">
    <div class="stars">
      <div class="star-item" v-for="rateItem in rateItems" :key="rateItem.index"
           @mouseenter="overStarItem(rateItem)" @click="setStarItem(rateItem)"
           :class="{'active': rateItem.checked,'mousehover': rateItem.hovered,'unmousehover': rateItem.unhovered}"
           :style="rateStyle">
      </div>
      <div class="rate-description" v-if="showTitle">{{curRate}} {{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vc-rate',
  props: {
    value: {
      type: Number,
      default: 6
    },
    total: {
      type: Number,
      default: 10
    },
    text: {
      type: String,
      default: '星'
    },
    size: {
      type: String,
      default: '24px'
    },
    color: {
      type: String,
      default: '#ff8000'
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      rateItems: [],
      curRate: 0
    }
  },
  created: function () {
    if (this.value > this.total) {
      this.curRate = this.total
    } else {
      this.curRate = this.value
    }
    for (var i = 0; i < this.total; i++) {
      this.rateItems.push({ index: i + 1, checked: i < this.curRate, hovered: false, unhovered: false })
    }
  },
  methods: {
    outRate: function () {
      for (var i = 0; i < this.total; i++) {
        this.rateItems[i].hovered = false
        this.rateItems[i].unhovered = false
      }
    },
    overStarItem: function (item) {
      for (var index = 0; index < this.total; index++) {
        if (index < item.index) {
          this.rateItems[index].unhovered = false
          this.rateItems[index].hovered = true
        } else {
          this.rateItems[index].hovered = false
          this.rateItems[index].unhovered = true
        }
      }
    },
    setStarItem: function (item) {
      item.checked = true
      for (var index = 0; index < item.index; index++) {
        this.rateItems[index].checked = true
      }
      for (var index2 = item.index; index2 < this.total; index2++) {
        this.rateItems[index2].checked = false
      }
      for (let i = 0; i < this.total; i++) {
        this.rateItems[i].hovered = false
        this.rateItems[i].unhovered = false
      }
      this.curRate = item.index
      this.$emit('input', this.curRate)
    }
  },
  computed: {
    rateStyle: function () {
      return { 'font-size': this.size, 'color': this.color }
    }
  }
}
</script>

<style scoped lang="less">
.vc-rate {
  position: relative;
  display: inline-block;
  .stars {
    display: inline-block;
    .star-item {
      display: inline-block;
      float:left;
      font-size:24px;
      margin:0 1px;
      color:#ff8000;
      cursor:pointer;
      &:before {
        display: inline-block;
        content:"☆";
      }
      &.active, &.mousehover {
        &:before {
          display: inline-block;
          content:"★";
        }
      }
      &.unmousehover:before {
        display: inline-block;
        content:"☆";
      }
    }
  }
  .rate-description {
    display: inline-flex;
    align-items:center;
    height:100%;
    font-size:14px;
    width:30px;
    position:absolute;
    margin-left:5px;
    top:0;
    color: #666;;
  }
}
</style>
