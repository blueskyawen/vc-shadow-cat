<template>
  <div class="vc-async-error">
    Sorry, Fail to load component !
  </div>
</template>

<script>
export default {
  name: 'vc-async-error'
}
</script>

<style scoped>
  .vc-async-error {
    width: 100%;
    min-height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    font-size: 36px;
    font-weight: bold;
  }
</style>
