<template>
  <div class="SwitchDemo">
    <div v-if="type === 'normal'">
      <vc-switch :type="'max'" v-model="switchs[0]"></vc-switch>
      <vc-switch :type="'min'" v-model="switchs[1]"></vc-switch>
    </div>
    <div v-if="type === 'label'">
      <vc-switch :type="'max'" v-model="switchs[0]" :tip-labels="['开','关']"></vc-switch>
      <vc-switch :type="'min'" v-model="switchs[1]" :tip-labels="['开','关']"></vc-switch>
      <vc-switch :type="'max'" v-model="switchs[0]" :tip-labels="['是','否']"></vc-switch>
      <vc-switch :type="'min'" v-model="switchs[1]" :tip-labels="['是','否']"></vc-switch>
    </div>
    <div v-if="type === 'disable'">
      <vc-switch :type="'max'" v-model="switchs[0]" :disabled="true"></vc-switch>
      <vc-switch :type="'min'" v-model="switchs[1]" :disabled="true"></vc-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchVcDemo',
  props: {
    type: {
      type: String,
      default: 'normal'
    }
  },
  data () {
    return {
      switchs: [true, false]
    }
  }
}
</script>

<style scoped>

</style>
