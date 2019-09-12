<template>
  <div class="vc-num-input" :class="numIputClass">
    <input :value="numValue" :disabled="disabled" @change="valueChange($event)" />
    <span class="input-opers">
      <span class="input-oper oper-add" :class="{'disable': disableAdd}" @click="inputAdd"></span>
      <span class="input-oper oper-del" :class="{'disable': disableDesc}" @click="inputDesc"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'vc-num-input',
  props: {
    size: {
      type: String,
      default: 'large'
    },
    value: {
      type: Number,
      default: 66
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 99
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      numValue: '',
      inputReg: /^((\d)|([1-9]\d*))$/,
      disableAdd: false,
      disableDesc: false
    }
  },
  created: function () {
    if (this.inputReg.test(this.value)) {
      this.numValue = this.value.toString()
    } else {
      this.numValue = '0'
    }
  },
  computed: {
    numIputClass: function () {
      return { 'input-lg': this.size === 'large',
        'input-md': this.size === 'middle',
        'input-sm': this.size === 'small' }
    }
  },
  methods: {
    valueChange: function ($event) {
      console.log($event.target.value)
      this.$emit('input', +$event.target.value)
    }
  }
}

</script>

<style scoped lang="less">
.vc-num-input {
  display: inline-block;
  position:relative;
  height:42px;
  width:100px;
  transition:all .5s;
  margin:5px;
  &.input-lg {
    height:48px;
  }
  &.input-md {
    height:36px;
  }
  &.input-sm {
    height:28px;
    .input-opers .input-oper:after {
      height:4px;
      width:4px;
    }
  }
  input {
    height:100%;
    width:100%;
    border:solid 1px #999;
    border-radius:6px;
    padding:0;
    outline: none;
    &:hover {
      border-color:#1aa3ff;
    }
  }
  .input-opers {
    display:inline-flex;
    flex-direction:column;
    border-left:solid 1px #999;
    border-radius:0 6px 6px 0;
    height:100%;
    width:24px;
    position:absolute;
    right:0;
    opacity:0;
    transition:opacity .8s;
    .input-oper {
      position:relative;
      display:inline-flex;
      height:50%;
      width:100%;
      justify-content:center;
      align-items:center;
      font-size:1px;
      transition:all .5s;
      &:after {
        content:"";
        display:inline-block;
        height:6px;
        width:6px;
        border:solid 2px #999;
        transform-origin:center center;
        position:absolute;
      }
      &.oper-del {
        border-top:solid 1px #999;
        &:hover {
          padding-bottom:30%;
          color:#1aa3ff;
        }
        &:after {
          border-color: transparent #999 #999 transparent;
          top:50%;
          left:50%;
          transform: translateX(-50%) translateY(-50%) rotate(45deg);
        }
        &:not(.disable):hover:after {
          border-color: transparent #1aa3ff #1aa3ff transparent;
        }
      }
      &.oper-add {
        &:hover {
          padding-top:30%;
          color:#1aa3ff;
        }
        &:after {
          border-color: #999 #999 transparent transparent;
          top:50%;
          left:50%;
          transform: translateX(-50%) rotate(-45deg);
        }
        &:not(.disable):hover:after {
          border-color: #1aa3ff #1aa3ff transparent transparent;
        }
      }
      &.disable {
        cursor:not-allowed;
        background: #e6e6e6;
        opacity:0.6;
      }
    }
    &:hover {
      cursor:pointer;
    }
  }
  &:hover .input-opers {
    opacity: 1;
  }
}
</style>
