<template>
  <ul class="vc-pagination" :class="{'has_border': haveBorder}">
    <li :class="{'disable': curNum === 1}">
      <a href="javascript:void(0)" @click="prePage()">❮</a>
    </li>
    <li v-for="page in pages" :key="page" :class="{'active': page === curNum}">
      <a href="javascript:void(0)" @click="selectPage(page)">
        {{page}}
      </a>
    </li>
    <li :class="{'disable': curNum === pageNum}">
      <a href="javascript:void(0)" @click="nextPage()">❯</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'vc-pagination',
  model: {
    prop: 'curPage',
    event: 'change'
  },
  props: {
    haveBorder: {
      type: Boolean,
      default: false
    },
    pageNum: {
      type: Number,
      default: 10
    },
    appearNum: {
      type: Number,
      default: 5
    },
    curPage: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      curNum: 0,
      pages: [],
      minNum: 0,
      maxNum: 0,
      realApperNum: 0
    }
  },
  created: function () {
    this.realApperNum = this.appearNum > 0 && this.appearNum <= 10 ? this.appearNum : 5
    for (var index = 0; index < this.realApperNum; index++) {
      this.pages.push(index + this.curPage)
    }
    this.curNum = this.curPage
    this.minNum = this.curPage
    this.maxNum = this.curPage + this.realApperNum - 1
  },
  methods: {
    selectPage: function (page) {
      this.curNum = page
      this.$emit('change', this.curNum)
    },
    prePage: function () {
      if (this.curNum === 1) return
      if (this.curNum === this.minNum) {
        this.curNum--
        this.minNum = this.curNum
        this.maxNum--
        for (var index = 0; index < this.realApperNum; index++) {
          --this.pages[index]
        }
      } else {
        this.curNum--
      }
      this.$emit('change', this.curNum)
    },
    nextPage: function () {
      if (this.curNum === this.pageNum) return
      if (this.curNum === this.maxNum) {
        this.curNum++
        this.maxNum = this.curNum
        this.minNum++
        for (var index = 0; index < this.realApperNum; index++) {
          ++this.pages[index]
        }
      } else {
        this.curNum++
      }
      this.$emit('change', this.curNum)
    }
  }
}
</script>

<style scoped lang="less">
.vc-pagination {
  padding: 10px;
  margin: 0;
  box-sizing: border-box;
  white-space: nowrap;
  overflow-x: auto;
  li {
    display: inline-block;
    a {
      color: #262626;
      float: left;
      height:36px;
      width:36px;
      text-align:center;
      line-height:36px;
      text-decoration: none;
      border-radius:4px;
      transition: background-color 200ms;
      &:hover {
        background-color: #e6e6e6;
      }
    }
    &.active {
      a {
        background-color: #1a75ff;
        color: white;
        &:hover {
          background-color: #005ce6;
        }
      }
    }
    &.disable {
      a {
        &:hover {
          background-color: #ddd;
          cursor: not-allowed;
        }
      }
    }
  }
  &.has_border {
    li {
      a {
        border: 1px solid #ddd;
        border-radius:0;
        &:hover {
          background-color: #ddd;
        }
      }
      &:first-child {
        a {
          border-radius:4px 0 0 4px;
        }
      }
      &:last-child {
        a {
          border-radius:0 4px 4px 0;
        }
      }
      &:not(:last-child) {
        a {
          border-right: none;
        }
      }
      &.active {
        a {
          background-color: #1a75ff;
          color: white;
          border-color:#1a75ff;
          &:hover {
            background-color: #005ce6;
            border-color:#005ce6;
          }
        }
      }
    }
  }
}
</style>
