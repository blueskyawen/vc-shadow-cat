<template>
  <div class="MutilSelectVcDemo">
    <div v-if="type === 'basic'">
      <h4>正常状态</h4>
      <div class="demoItem">
        <vc-mutil-select :options="options" v-model="selectedItems"></vc-mutil-select>
        <p class="demoText">已选项：{{selectedItems}}</p>
      </div>
      <h4>禁用状态</h4>
      <div class="demoItem">
        <vc-mutil-select :options="options" v-model="selectedItems" :disabled="true"></vc-mutil-select>
      </div>
      <h4>部分选项禁止选择</h4>
      <div class="demoItem">
        <vc-mutil-select :options="options2" v-model="selectedItems2"></vc-mutil-select>
        <p class="demoText">已选项：{{selectedItems2}}</p>
      </div>
    </div>
    <div v-if="type === 'checkbox'">
      <h4>正常复选框</h4>
      <div class="demoItem">
        <vc-mutil-select :options="options3" :has-checkbox="true" v-model="selectedItems3"></vc-mutil-select>
        <p class="demoText">已选项：{{selectedItems3}}</p>
      </div>
      <h4>带全选</h4>
      <div class="demoItem">
        <vc-mutil-select :options="options4" :has-checkbox="true" :all-check="true"
                         v-model="selectedItems4"></vc-mutil-select>
        <p class="demoText">已选项：{{selectedItems4}}</p>
      </div>
    </div>
    <div v-if="type === 'num'">
      <div class="demoItem">
        <vc-mutil-select :options="options5" :show-check-num="true" v-model="selectedItems5"></vc-mutil-select>
      </div>
      <div class="demoItem">
        <vc-mutil-select :options="options6" :has-checkbox="true" :show-check-num="true"
                         v-model="selectedItems6"></vc-mutil-select>
      </div>
    </div>
    <div v-if="type === 'manual'">
      <div class="demoItem">
        <vc-mutil-select style="width: 300px" :options="options7" v-model="selectedItems7"></vc-mutil-select>
      </div>
      <div class="demoItem">
        <vc-mutil-select style="width: 540px" :options="options7" v-model="selectedItems7"></vc-mutil-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MutilSelectVcDemo',
  props: {
    type: String
  },
  data () {
    return {
      options: [
        { label: 'paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI',
          value: 'paletxui',
          disable: false },
        { label: 'Iaas', value: 'iaas', disable: false },
        { label: 'Paas', value: 'paas', disable: false },
        { label: 'Saas', value: 'saas', disable: false },
        { label: 'NG-ANT', value: 'ng-ant', disable: false }
      ],
      selectedItems: ['iaas', 'saas'],
      options2: [
        { label: 'paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI',
          value: 'paletxui',
          disable: true },
        { label: 'Iaas', value: 'iaas', disable: false },
        { label: 'Paas', value: 'paas', disable: true },
        { label: 'Saas', value: 'saas', disable: false },
        { label: 'NG-ANT', value: 'ng-ant', disable: false }
      ],
      selectedItems2: ['iaas', 'paas'],
      options3: [
        { label: 'paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI',
          value: 'paletxui',
          disable: false },
        { label: 'Iaas', value: 'iaas', disable: false },
        { label: 'Paas', value: 'paas', disable: false },
        { label: 'Saas', value: 'saas', disable: false },
        { label: 'NG-ANT', value: 'ng-ant', disable: false }
      ],
      selectedItems3: ['iaas', 'saas'],
      options4: [
        { label: 'paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI',
          value: 'paletxui',
          disable: false },
        { label: 'Iaas', value: 'iaas', disable: false },
        { label: 'Paas', value: 'paas', disable: false },
        { label: 'Saas', value: 'saas', disable: false },
        { label: 'NG-ANT', value: 'ng-ant', disable: false }
      ],
      selectedItems4: ['iaas', 'saas'],
      options5: [
        { label: 'paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI',
          value: 'paletxui',
          disable: false },
        { label: 'Iaas', value: 'iaas', disable: false },
        { label: 'Paas', value: 'paas', disable: false },
        { label: 'Saas', value: 'saas', disable: false },
        { label: 'NG-ANT', value: 'ng-ant', disable: false }
      ],
      selectedItems5: ['iaas', 'saas'],
      options6: [
        { label: 'paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI',
          value: 'paletxui',
          disable: false },
        { label: 'Iaas', value: 'iaas', disable: false },
        { label: 'Paas', value: 'paas', disable: false },
        { label: 'Saas', value: 'saas', disable: false },
        { label: 'NG-ANT', value: 'ng-ant', disable: false }
      ],
      selectedItems6: ['iaas', 'saas'],
      options7: [
        { label: 'paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI',
          value: 'paletxui',
          disable: false },
        { label: 'Iaas', value: 'iaas', disable: false },
        { label: 'Paas', value: 'paas', disable: false },
        { label: 'Saas', value: 'saas', disable: false },
        { label: 'NG-ANT', value: 'ng-ant', disable: false }
      ],
      selectedItems7: ['iaas', 'saas']
    }
  }
}
</script>

<style scoped lang="less">
.MutilSelectVcDemo {
  h4 {
    color: #006666;
  }
  .demoItem {
    padding: 10px 0;
    border-bottom: dotted 1px #999;
    .demoText {
      margin: 15px 10px 5px;
    }
  }
}
</style>
