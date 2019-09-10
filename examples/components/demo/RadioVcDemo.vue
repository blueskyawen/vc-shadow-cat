<template>
  <div class="RadioVcDemo">
    <div v-if="typez === 'normal'">
      <vc-radio :options="options" v-model="checkValue"></vc-radio>
    </div>
    <div v-if="typez === 'disable'">
      <p>默认选中值在禁用选项里不可选择</p>
      <vc-radio :options="options2" v-model="checkValue"></vc-radio>
      <p>默认选中值不在禁用选项里可选择</p>
      <vc-radio :options="options3" v-model="checkValue"></vc-radio>
    </div>
    <p class="check-value">选中值: {{checkValue}}</p>
  </div>
</template>

<script>
export default {
  name: 'RadioVcDemo',
  props: {
    typez: {
      type: String,
      default: 'normal'
    }
  },
  data () {
    return {
      options: [
        { label: '何炅', value: 'hejiong', disabled: false },
        { label: '黄磊', value: 'huanlei', disabled: false },
        { label: '大华', value: 'dahua', disabled: false }
      ],
      options2: [
        { label: '何炅', value: 'hejiong', disabled: true },
        { label: '黄磊', value: 'huanlei', disabled: true },
        { label: '大华', value: 'dahua', disabled: false }
      ],
      options3: [
        { label: '何炅', value: 'hejiong', disabled: true },
        { label: '黄磊', value: 'huanlei', disabled: false },
        { label: '大华', value: 'dahua', disabled: false }
      ],
      checkValue: 'huanlei'
    }
  }
}
</script>

<style scoped lang="less">
.RadioVcDemo {
  .check-value {
    margin: 15px 10px 5px;
  }
}
</style>
