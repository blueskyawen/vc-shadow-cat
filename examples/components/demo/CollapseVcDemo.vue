<template>
  <div class="CollapseVcDemo">
    <div v-if="type === 'basic'">
      <vc-collapse>
        <vc-panel v-for="(option, index) in options" :key="index" :header-title="option.header" v-model="option.active">
          <p v-if="index === 0">杨过，名过，字改之，是金庸武侠小说《神雕侠侣》[1]  中的主人公，前作《射雕英雄传》中杨康与穆念慈之子，西毒欧阳锋的义子。
            名字为郭靖、黄蓉所取，取“有过则改之”之意。</p>
          <p v-if="index === 1">小龙女，是金庸小说《神雕侠侣》的女主角，金庸笔下广受读者喜爱的女角之一。容貌秀美若仙、清丽绝俗。性格宽容恬淡、天真可爱。
            武功轻灵飘逸，于婀娜妩媚中击敌制胜</p>
          <p v-if="index === 2">黄药师，外号“东邪”，天下“五绝”之一，是金庸武侠小说《射雕英雄传》和《神雕侠侣》中的角色。是黄蓉之父，
            对其妻冯氏（小字阿衡）一往情深。</p>
        </vc-panel>
      </vc-collapse>
    </div>
    <div v-if="type === 'advance'">
      <vc-collapse>
        <vc-panel v-for="(option, index) in options2" :key="index" :header-title="option.header"
                  :disable="option.disable" v-model="option.active">
          <p v-if="index === 0">杨过，名过，字改之，是金庸武侠小说《神雕侠侣》[1]  中的主人公，前作《射雕英雄传》中杨康与穆念慈之子，西毒欧阳锋的义子。
            名字为郭靖、黄蓉所取，取“有过则改之”之意。</p>
          <p v-if="index === 1">小龙女，是金庸小说《神雕侠侣》的女主角，金庸笔下广受读者喜爱的女角之一。容貌秀美若仙、清丽绝俗。性格宽容恬淡、天真可爱。
            武功轻灵飘逸，于婀娜妩媚中击敌制胜</p>
          <p v-if="index === 2">黄药师，外号“东邪”，天下“五绝”之一，是金庸武侠小说《射雕英雄传》和《神雕侠侣》中的角色。是黄蓉之父，
            对其妻冯氏（小字阿衡）一往情深。</p>
        </vc-panel>
      </vc-collapse>
    </div>
    <div v-if="type === 'manual'">
      <vc-collapse style="width: 100%;">
        <vc-panel v-for="(option, index) in options3" :key="index" :header-title="option.header"
                  v-model="option.active" @change="panelChange(option)">
          <p v-if="index === 0">杨过，名过，字改之，是金庸武侠小说《神雕侠侣》[1]  中的主人公，前作《射雕英雄传》中杨康与穆念慈之子，西毒欧阳锋的义子。
            名字为郭靖、黄蓉所取，取“有过则改之”之意。</p>
          <p v-if="index === 1">小龙女，是金庸小说《神雕侠侣》的女主角，金庸笔下广受读者喜爱的女角之一。容貌秀美若仙、清丽绝俗。性格宽容恬淡、天真可爱。
            武功轻灵飘逸，于婀娜妩媚中击敌制胜</p>
          <p v-if="index === 2">黄药师，外号“东邪”，天下“五绝”之一，是金庸武侠小说《射雕英雄传》和《神雕侠侣》中的角色。是黄蓉之父，
            对其妻冯氏（小字阿衡）一往情深。</p>
        </vc-panel>
      </vc-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollapseVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      options: [
        { header: '杨过', active: false, disable: false },
        { header: '小龙女', active: false, disable: false },
        { header: '黄药师', active: false, disable: false }
      ],
      options2: [
        { header: '杨过', active: false, disable: false },
        { header: '小龙女', active: false, disable: true },
        { header: '黄药师', active: false, disable: false }
      ],
      options3: [
        { header: '杨过', active: false, disable: false },
        { header: '小龙女', active: false, disable: false },
        { header: '黄药师', active: false, disable: false }
      ]
    }
  },
  methods: {
    panelChange: function (option) {
      this.options3.forEach(item => {
        if (item.header !== option.header) {
          item.active = false
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.CollapseVcDemo {
  width: 100%;
}
</style>
