<template>
  <div class="TabVcDemo">
    <div class="demoItem" v-if="type === 'card'">
      <vc-tab :level="'super'" :type="'card'" :options="tabOptions" v-model="curTab">
        <div v-if="curTab === 'apple'">
          苹果公司,由史蒂夫·乔布斯、斯蒂夫·沃兹尼亚克和罗·韦恩(Ron Wayne)等人于1976年4月1日创立，并命名为美国苹果电脑公司.
        </div>
        <div v-if="curTab === 'xiaomi'">
          北京小米科技有限责任公司成立2010年4月，是一家专注于智能硬件和电子产品研发的移动互联网公司。“为发烧而生”是小米的产品概念
        </div>
        <div v-if="curTab === 'oppo'">
          OPPO 更多年轻人选择的拍照手机。十年来，OPPO一直专注手机拍照的技术创新，开创了“手机自拍美颜”时代
        </div>
        <div v-if="curTab === 'vivo'">
          vivo是一家全球性的移动互联网智能终端公司，致力于为消费者打造拥有极致拍照、畅快游戏、Hi-Fi音乐的智能手机产品。
        </div>
        <div v-if="curTab === 'zte'">
          中兴通讯（ZTE）,全球领先的综合通信解决方案提供商，中国最大的通信设备上市公司
        </div>
      </vc-tab>
    </div>
    <div class="demoItem" v-if="type === 'line'">
      <vc-tab :level="'super'" :type="'line'" :options="tabOptions2" v-model="curTab2">
        <div v-if="curTab2 === 'apple'">
          苹果公司,由史蒂夫·乔布斯、斯蒂夫·沃兹尼亚克和罗·韦恩(Ron Wayne)等人于1976年4月1日创立，并命名为美国苹果电脑公司.
        </div>
        <div v-if="curTab2 === 'xiaomi'">
          北京小米科技有限责任公司成立2010年4月，是一家专注于智能硬件和电子产品研发的移动互联网公司。“为发烧而生”是小米的产品概念
        </div>
        <div v-if="curTab2 === 'oppo'">
          OPPO 更多年轻人选择的拍照手机。十年来，OPPO一直专注手机拍照的技术创新，开创了“手机自拍美颜”时代
        </div>
        <div v-if="curTab2 === 'vivo'">
          vivo是一家全球性的移动互联网智能终端公司，致力于为消费者打造拥有极致拍照、畅快游戏、Hi-Fi音乐的智能手机产品。
        </div>
        <div v-if="curTab2 === 'zte'">
          中兴通讯（ZTE）,全球领先的综合通信解决方案提供商，中国最大的通信设备上市公司
        </div>
      </vc-tab>
    </div>
    <div class="demoItem" v-if="type === 'second'">
      <vc-tab :level="'second'" :options="tabOptions3" v-model="curTab3">
        <div v-if="curTab3 === 'apple'">
          苹果公司,由史蒂夫·乔布斯、斯蒂夫·沃兹尼亚克和罗·韦恩(Ron Wayne)等人于1976年4月1日创立，并命名为美国苹果电脑公司.
        </div>
        <div v-if="curTab3 === 'xiaomi'">
          北京小米科技有限责任公司成立2010年4月，是一家专注于智能硬件和电子产品研发的移动互联网公司。“为发烧而生”是小米的产品概念
        </div>
        <div v-if="curTab3 === 'oppo'">
          OPPO 更多年轻人选择的拍照手机。十年来，OPPO一直专注手机拍照的技术创新，开创了“手机自拍美颜”时代
        </div>
        <div v-if="curTab3 === 'vivo'">
          vivo是一家全球性的移动互联网智能终端公司，致力于为消费者打造拥有极致拍照、畅快游戏、Hi-Fi音乐的智能手机产品。
        </div>
        <div v-if="curTab3 === 'zte'">
          中兴通讯（ZTE）,全球领先的综合通信解决方案提供商，中国最大的通信设备上市公司
        </div>
      </vc-tab>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      tabOptions: [
        { name: '苹果', value: 'apple', isDisable: false },
        { name: '小米-小米-小米-小米-小米', value: 'xiaomi', isDisable: false },
        { name: '欧普', value: 'oppo', isDisable: false },
        { name: '维沃', value: 'vivo', isDisable: false },
        { name: '中兴', value: 'zte', isDisable: false }
      ],
      tabOptions2: [
        { name: '苹果', value: 'apple', isDisable: false },
        { name: '小米-小米-小米-小米-小米-小米-小米-小米', value: 'xiaomi', isDisable: false },
        { name: '欧普', value: 'oppo', isDisable: false },
        { name: '维沃', value: 'vivo', isDisable: false },
        { name: '中兴', value: 'zte', isDisable: false }
      ],
      tabOptions3: [
        { name: '苹果', value: 'apple', isDisable: false },
        { name: '小米-小米-小米-小米-小米', value: 'xiaomi', isDisable: false },
        { name: '欧普', value: 'oppo', isDisable: false },
        { name: '维沃', value: 'vivo', isDisable: false },
        { name: '中兴', value: 'zte', isDisable: false }
      ],
      curTab: 'apple',
      curTab2: 'oppo',
      curTab3: ''
    }
  }
}
</script>

<style scoped lang="less">
.TabVcDemo {
  width: 100%;
  .demoItem {
    width: inherit;
    p {
      margin: 15px 10px;
    }
    div {
      min-height: 80px;
    }
    .vctab-enter  {
      opacity: 0;
      margin-left: 30px;
    }
    .vctab-enter-to, .vctab-leave  {
      opacity: 1;
      margin-left: 0;
    }
    .vctab-leave-to  {
      opacity: 0;
      margin-left: -30px;
    }
    .vctab-enter-active, .vctab-leave-active  {
      transition: all .5s;
    }
  }
}
</style>
