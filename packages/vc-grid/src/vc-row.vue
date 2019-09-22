<template>
  <div :class="rowClasses">
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
      default: ''
    },
    align: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: ''
    },
    wrap: {
      type: String,
      default: ''
    },
    grow: {
      type: Number,
      default: 0
    }
  },
  computed: {
    rowClasses: function () {
      return [ this.typeClass, this.directionClass, this.justifyClass, this.alignClass,
        this.wrapClass, this.growClass ]
    },
    typeClass: function () {
      return { 'vc-row': this.type === 'block', 'vc-row-flex': this.type === 'flex' }
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
