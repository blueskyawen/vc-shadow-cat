import vcSwitch from './vc-switch'
import vcLoading from './vc-loading'
import vcFilters from './vc-filters'
import vcButton from './vc-button'
import vcCheckbox from './vc-checkbox'
import vcForm from './vc-form'
import vcMutilCheckbox from './vc-mutil-checkbox'
import vcRadio from './vc-radio'
import vcInfo from './vc-info'
import vcNumInput from './vc-num-input'
import vcCarousel from './vc-carousel'
import vcTooltip from './vc-tooltip'
import vcTab from './vc-tab'
import vcPagination from './vc-pagination'
import vcRate from './vc-rate'
import vcCollapse from './vc-collapse'
import vcSelect from './vc-select'
import vcMutilSelect from './vc-mutil-select'
import vcSlider from './vc-slider'
import vcDialog from './vc-dialog'
import vcProgress from './vc-progress'
import vcMsgeif from './vc-msgeif'
import vcSkeleton from './vc-skeleton'
import vcAvatar from './vc-avatar'
import vcResizeArea from './vc-resizeArea'
import vcAlert from './vc-alert'
import vcDrawer from './vc-drawer'
import vcBadge from './vc-badge'
import vcPie from './vc-pie'
import vcGrid from './vc-grid'
import vcDateTime from './vc-date-time'
import vcAsyncComponent from './vc-async-component'

// 存储组件列表
const components = [
  vcSwitch, vcLoading, vcButton, vcCheckbox, vcMutilCheckbox, vcRadio, vcInfo, vcNumInput,
  vcCarousel, vcTooltip, vcTab, vcPagination, vcRate, vcSelect, vcMutilSelect, vcSlider,
  vcDialog, vcProgress, vcMsgeif, vcSkeleton, vcAvatar, vcResizeArea, vcAlert, vcDrawer,
  vcBadge, vcPie, vcAsyncComponent, ...vcForm, ...vcCollapse, ...vcGrid, ...vcDateTime
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  if (install.installed) return
  install.installed = true

  components.map(component => Vue.component(component.name, component))

  vcFilters.map(filter => Vue.filter(filter.name, filter.func))

  Vue.directive('vlRegIf', function (el, binding) {
    if (binding.value.reg.test(binding.value.value)) {
      el.style.display = 'block'
    } else {
      el.style.display = 'none'
    }
  })
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  vcSwitch,
  vcLoading,
  vcButton,
  vcCheckbox,
  vcMutilCheckbox,
  vcRadio,
  vcInfo,
  vcNumInput,
  vcCarousel,
  vcTooltip,
  vcTab,
  vcPagination,
  vcRate,
  vcSelect,
  vcMutilSelect,
  vcSlider,
  vcDialog,
  vcProgress,
  vcMsgeif,
  vcSkeleton,
  vcAvatar,
  vcResizeArea,
  vcDrawer,
  vcAlert,
  vcBadge,
  vcPie,
  vcAsyncComponent,
  ...vcForm,
  ...vcCollapse,
  ...vcGrid,
  ...vcDateTime
}
