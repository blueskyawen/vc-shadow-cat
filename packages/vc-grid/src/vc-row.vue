<template>
  <div class="vc-row" :class="rowClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vc-row',
  props: {
    type: {
      type: String,
      default: 'block'
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    },
    direction: {
      type: String,
      default: 'row'
    },
    wrap: {
      type: String,
      default: 'wrap'
    },
    grow: {
      type: Number,
      default: 0
    }
  },
  computed: {
    rowClasses: function () {
      return [ 'vc-row-' + this.type, this.directionClass, this.justifyClass, this.alignClass,
        this.wrapClass, this.growClass ]
    },
    directionClass: function () {
      return ['flex', 'inline-flex'].includes(this.type) && this.direction ? 'vc-flex-' + this.direction : ''
    },
    justifyClass: function () {
      return ['flex', 'inline-flex'].includes(this.type) && this.justify ? 'vc-content-' + this.justify : ''
    },
    alignClass: function () {
      return ['flex', 'inline-flex'].includes(this.type) && this.align ? 'vc-align-' + this.align : ''
    },
    wrapClass: function () {
      return ['flex', 'inline-flex'].includes(this.type) && this.wrap ? 'vc-flex-' + this.wrap : ''
    },
    growClass: function () {
      return ['flex', 'inline-flex'].includes(this.type) && this.grow ? 'vc-flex-grow-1' : ''
    }
  }
}
</script>
