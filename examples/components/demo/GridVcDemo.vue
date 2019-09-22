<template>
  <div class="GridVcDemo">
    <div class="demoItem vc-container" v-if="type === '1'">
      <vc-row>
        <vc-col v-for="num in 12" :key="num" :xs="{span: 1}">
          <div class="item">1/12</div>
        </vc-col>
      </vc-row>
      <vc-row>
        <vc-col v-for="num in 6" :key="num" :xs="{span: 2}">
          <div class="item">1/6</div>
        </vc-col>
      </vc-row>
      <vc-row>
        <vc-col v-for="num in 4" :key="num" :xs="{span: 3}">
          <div class="item">1/4</div>
        </vc-col>
      </vc-row>
      <vc-row>
        <vc-col v-for="num in 3" :key="num" :xs="{span: 4}">
          <div class="item">1/3</div>
        </vc-col>
      </vc-row>
      <vc-row>
        <vc-col v-for="num in 2" :key="num" :xs="{span: 6}">
          <div class="item">1/2</div>
        </vc-col>
      </vc-row>
      <vc-row>
        <vc-col v-for="num in 1" :key="num" :xs="{span: 12}">
          <div class="item">1/1</div>
        </vc-col>
      </vc-row>
    </div>
    <div class="demoItem vc-container" v-if="type === '2'">
      <vc-row>
        <vc-col :xs="{span: 5}">
          <div class="item">5/12</div>
        </vc-col>
        <vc-col :xs="{span: 7}">
          <div class="item">7/12</div>
        </vc-col>
      </vc-row>
      <vc-row>
        <vc-col :xs="{span: 9}">
          <div class="item">3/4</div>
        </vc-col>
        <vc-col :xs="{span: 3}">
          <div class="item">1/4</div>
        </vc-col>
      </vc-row>
      <vc-row>
        <vc-col :xs="{span: 2}">
          <div class="item">1/6</div>
        </vc-col>
        <vc-col :xs="{span: 7}">
          <div class="item">7/12</div>
        </vc-col>
        <vc-col :xs="{span: 3}">
          <div class="item">1/4</div>
        </vc-col>
      </vc-row>
    </div>
    <div class="demoItem vc-container" v-if="type === '3'">
      <vc-row>
        <vc-col :xs="{span: 6}">
          <vc-row>
            <vc-col :xs="{span: 4}">
              <div class="item">1/3</div>
            </vc-col>
            <vc-col :xs="{span: 4}">
              <div class="item">1/3</div>
            </vc-col>
            <vc-col :xs="{span: 4}">
              <div class="item">1/3</div>
            </vc-col>
          </vc-row>
        </vc-col>
        <vc-col :xs="{span: 6}">
          <div class="item">1/2</div>
        </vc-col>
      </vc-row>
      <vc-row>
        <vc-col :xs="{span: 6}">
          <div class="item">1/2</div>
        </vc-col>
        <vc-col :xs="{span: 6}">
          <div class="item">1/2</div>
        </vc-col>
      </vc-row>
    </div>
    <div class="demoItem vc-container" v-if="type === '4'">
      <vc-row>
        <vc-col :xs="{span: 2, offset: 3}">
          <div class="item">1/6</div>
        </vc-col>
        <vc-col :xs="{span: 4, offset: 1}">
          <div class="item">1/3</div>
        </vc-col>
      </vc-row>
      <vc-row>
        <vc-col :xs="{span: 2}">
          <div class="item">1/6</div>
        </vc-col>
        <vc-col :xs="{span: 2, offset: 6}">
          <div class="item">1/6</div>
        </vc-col>
      </vc-row>
    </div>
    <div class="demoItem vc-container" v-if="type === '5'">
      <vc-row :type="'flex'" :direction="'row'">
        <vc-col :xs="{span: 4}">
          <div class="item">1/3-A</div>
        </vc-col>
        <vc-col :xs="{span: 4}">
          <div class="item">1/3-B</div>
        </vc-col>
        <vc-col :xs="{span: 4}">
          <div class="item">1/3-C</div>
        </vc-col>
      </vc-row>
      <vc-row :type="'flex'" :direction="'reverse'">
        <vc-col :xs="{span: 4}">
          <div class="item">1/3-A</div>
        </vc-col>
        <vc-col :xs="{span: 4}">
          <div class="item">1/3-B</div>
        </vc-col>
        <vc-col :xs="{span: 4}">
          <div class="item">1/3-C</div>
        </vc-col>
      </vc-row>
    </div>
    <div class="demoItem flex-demoItem vc-container" v-if="type === '6'">
      <vc-row :type="'flex'" :justify="'start'" :align="'start'">
        <vc-col :xs="{span: 2}">
          <div class="item">1/6-A</div>
        </vc-col>
        <vc-col :xs="{span: 2}">
          <div class="item">1/6-B</div>
        </vc-col>
        <vc-col :xs="{span: 2}">
          <div class="item">1/6-C</div>
        </vc-col>
      </vc-row>
      <vc-row :type="'flex'" :justify="'center'" :align="'end'">
        <vc-col :xs="{span: 2}">
          <div class="item">1/6-A</div>
        </vc-col>
        <vc-col :xs="{span: 2}">
          <div class="item">1/6-B</div>
        </vc-col>
        <vc-col :xs="{span: 2}">
          <div class="item">1/6-C</div>
        </vc-col>
      </vc-row>
      <vc-row :type="'flex'" :justify="'end'" :align="'center'">
        <vc-col :xs="{span: 2}">
          <div class="item">1/6-A</div>
        </vc-col>
        <vc-col :xs="{span: 2}">
          <div class="item">1/6-B</div>
        </vc-col>
        <vc-col :xs="{span: 2}">
          <div class="item">1/6-C</div>
        </vc-col>
      </vc-row>
      <vc-row :type="'flex'" :justify="'space-between'" :align="'baseline'">
        <vc-col :xs="{span: 2}">
          <div class="item">1/6-A</div>
        </vc-col>
        <vc-col :xs="{span: 2}">
          <div class="item">1/6-B</div>
        </vc-col>
        <vc-col :xs="{span: 2}">
          <div class="item">1/6-C</div>
        </vc-col>
      </vc-row>
      <vc-row :type="'flex'" :justify="'space-around'" :align="'stretch'">
        <vc-col :xs="{span: 2}">
          <div class="item">1/6-A</div>
        </vc-col>
        <vc-col :xs="{span: 2}">
          <div class="item">1/6-B</div>
        </vc-col>
        <vc-col :xs="{span: 2}">
          <div class="item">1/6-C</div>
        </vc-col>
      </vc-row>
    </div>
    <div class="demoItem vc-container" v-if="type === '7'">
      <vc-row :type="'flex'" :justify="'space-around'">
        <vc-col :xs="{span: 3, order: 3}">
          <div class="item">1/4-A</div>
        </vc-col>
        <vc-col :xs="{span: 3, order: 1}">
          <div class="item">1/4-B</div>
        </vc-col>
        <vc-col :xs="{span: 3, order: 2}">
          <div class="item">1/4-C</div>
        </vc-col>
      </vc-row>
      <vc-row :type="'flex'" :justify="'space-around'">
        <vc-col :xs="{span: 3, order: 2}">
          <div class="item">1/4-A</div>
        </vc-col>
        <vc-col :xs="{span: 3, order: 3}">
          <div class="item">1/4-B</div>
        </vc-col>
        <vc-col :xs="{span: 3, order: 1}">
          <div class="item">1/4-C</div>
        </vc-col>
      </vc-row>
    </div>
    <div class="demoItem vc-container" v-if="type === '8'">
      <vc-row class="wrap-hidden" :type="'flex'" :wrap="'nowrap'">
        <vc-col :xs="{span: 5}">
          <div class="item">5/12-A</div>
        </vc-col>
        <vc-col :xs="{span: 5}">
          <div class="item">5/12-B</div>
        </vc-col>
        <vc-col :xs="{span: 5}">
          <div class="item">5/12-C</div>
        </vc-col>
      </vc-row>
      <vc-row class="wrap-hidden" :type="'flex'" :wrap="'wrap'">
        <vc-col :xs="{span: 5}">
          <div class="item">5/12-A</div>
        </vc-col>
        <vc-col :xs="{span: 5}">
          <div class="item">5/12-B</div>
        </vc-col>
        <vc-col :xs="{span: 5}">
          <div class="item">5/12-C</div>
        </vc-col>
      </vc-row>
    </div>
    <div class="demoItem vc-container" v-if="type === '9'">
      <vc-row>
        <vc-col :xs="{span: 4, type: 'block'}" :md="{span: 4, type: 'none'}">
          <div class="item">1/3-A</div>
        </vc-col>
        <vc-col :xs="{span: 4, type: 'none'}" :md="{span: 4, type: 'block'}">
          <div class="item">1/3-B</div>
        </vc-col>
        <vc-col :xs="{span: 4, type: 'inline-block'}" :md="{span: 4, type: 'none'}">
          <div class="item">1/3-C</div>
        </vc-col>
      </vc-row>
      <vc-row>
        <vc-col :xs="{span: 4, type: 'block'}" :md="{span: 4, type: 'flex'}">
          <div class="item">1/3-D</div>
        </vc-col>
        <vc-col :xs="{span: 4, type: 'none'}" :md="{span: 4, type: 'inline-block'}">
          <div class="item">1/3-E</div>
        </vc-col>
        <vc-col :xs="{span: 4, type: 'block'}" :sm="{span: 4, type: 'none'}">
          <div class="item">1/3-F</div>
        </vc-col>
      </vc-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      titles: ['1/12', '1/6', '1/4', '1/3', '5/12', '1/2', '7/12', '2/3', '3/4', '5/6', '11/12', '12/12'],
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
  }
}
</script>

<style scoped lang="less">
.GridVcDemo {
  h4 {
    color: #006666;
  }
  .demoItem {
    margin: 15px 0;
    border: dotted 1px #ccc;
    .wrap-hidden {
      overflow-x: auto;
    }
    > .vc-row, > .vc-row-flex {
      margin-top: 6px;
      margin-bottom: 6px;
      background-color: #f2f2f2;
    }
    .vc-row, .vc-row-flex {
      > .vc-col {
        &:nth-child(odd) {
          .item {
            background: #0099ff;
          }
        }
        &:nth-child(even) {
          .item {
            background: #80ccff;
          }
        }
      }
    }
    .item {
      width:100%;
      display: flex;
      display: -webkit-flex;
      justify-content: center;
      align-items:center;
      color: #fff;
      height: 42px;
    }
  }
  .flex-demoItem {
    > .vc-row-flex {
      height: 90px;
    }
  }
}
</style>
