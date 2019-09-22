<template>
  <div class="vc-col" :class="colClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vc-col',
  props: {
    xs: {
      type: Object,
      default: function () {
        return {}
      }
    },
    sm: {
      type: Object,
      default: function () {
        return {}
      }
    },
    md: {
      type: Object,
      default: function () {
        return {}
      }
    },
    lg: {
      type: Object,
      default: function () {
        return {}
      }
    },
    xl: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  computed: {
    colClasses: function () {
      return [this.xsClasses, this.smClasses, this.mdClasses, this.lgClasses, this.xlClasses]
    },
    xsClasses: function () {
      return [this.spanStyle('xs', this.xs.span),
        this.orderStyle(this.xs.order),
        this.offsetStyle('xs', this.xs.offset),
        this.displayStyle('xs', this.xs.type)]
    },
    smClasses: function () {
      return [this.spanStyle('sm', this.sm.span),
        this.orderStyle(this.sm.order),
        this.offsetStyle('sm', this.sm.offset),
        this.displayStyle('sm', this.sm.type)]
    },
    mdClasses: function () {
      return [this.spanStyle('md', this.md.span),
        this.orderStyle(this.md.order),
        this.offsetStyle('md', this.md.offset),
        this.displayStyle('md', this.md.type)]
    },
    lgClasses: function () {
      return [this.spanStyle('lg', this.lg.span),
        this.orderStyle(this.lg.order),
        this.offsetStyle('lg', this.lg.offset),
        this.displayStyle('lg', this.lg.type)]
    },
    xlClasses: function () {
      return [this.spanStyle('xl', this.xl.span),
        this.orderStyle(this.xl.order),
        this.offsetStyle('xl', this.xl.offset),
        this.displayStyle('xl', this.xl.type)]
    }
  },
  methods: {
    spanStyle: function (type, value) {
      return value ? 'vc-' + type + '-col-' + value : ''
    },
    orderStyle: function (value) {
      return value ? 'vc-flex-order-' + value : ''
    },
    offsetStyle: function (type, value) {
      return value ? 'vc-' + type + '-offset-' + value : ''
    },
    displayStyle: function (type, value) {
      return value ? 'vc-' + type + '-display-' + value : ''
    }
  }
}
</script>
