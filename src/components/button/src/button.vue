<script setup>
defineProps({
  btnMsg: String,
  btnColor:String,
  btnBgColor:String,
})
</script>

<template>
  <button :class="btnColor">{{btnMsg}}</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
