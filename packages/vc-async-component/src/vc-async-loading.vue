<template>
  <div class="vc-async-loading">
    <vc-loading></vc-loading>
  </div>
</template>

<script>
export default {
  name: 'vc-async-loading'
}
</script>

<style scoped>
  .vc-async-loading {
    width: 100%;
    min-height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
