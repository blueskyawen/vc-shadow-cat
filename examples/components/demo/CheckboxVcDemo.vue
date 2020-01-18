<template>
  <div class="CheckboxVcDemo">
    <div v-if="type === 'one'">
      <p>默认选择</p>
      <span class="demoItem">
        <span class="demoLabel">是否同意: </span>
        <vc-checkbox v-model="aggre1"></vc-checkbox>
      </span>
      <p>带部分选择</p>
      <span class="demoItem">
        <span class="demoLabel">是否同意: </span>
        <vc-checkbox v-model="aggre2" :partial="true"></vc-checkbox>
      </span>
      <p>带选项值的选择</p>
      <span class="demoItem" v-for="option of options" :key="option.label">
        <vc-checkbox v-model="option.check" :value="option.label"></vc-checkbox>
      </span>
      <p>禁止选择</p>
      <span class="demoItem" v-for="option of options2" :key="option.value">
        <vc-checkbox v-model="option.check" :value="option.value" :disabled="option.disabled"></vc-checkbox>
      </span>
    </div>
    <div v-if="type === 'mutil'">
      <vc-mutil-checkbox :options="likes" v-model="selectValue"></vc-mutil-checkbox>
      <div class="demoText">选中值: {{selectValue}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxVcDemo',
  props: {
    type: {
      type: String,
      default: 'one'
    }
  },
  data () {
    return {
      aggre1: false,
      aggre2: 1,
      options: [
        { label: '何炅', check: true },
        { label: '黄磊', check: false },
        { label: '大华', check: false }
      ],
      options2: [
        { label: '何炅', value: 'hejiong', check: true, disabled: true },
        { label: '黄磊', value: 'huanlei', check: false, disabled: true }
      ],
      likes: [
        { value: 'fish', name: '鱼肉' },
        { value: 'pig', name: '猪肉' },
        { value: 'apple', name: '苹果' },
        { value: 'duck', name: '烤鸭' },
        { value: 'watermelon', name: '西瓜' }
      ],
      selectValue: ['fish']
    }
  }
}
</script>

<style scoped lang="less">
.CheckboxVcDemo {
  .checkItem {
    margin-right: 15px;
    .demoLabel {
      margin-right: 10px;
    }
  }
  p {
    color: #006666;
  }
  .demoText {
    margin: 15px 10px 5px;
  }
}
</style>
