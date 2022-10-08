<script setup>
defineProps({
  btnMsg: String,
})
</script>

<template>
  <button :value="btnMsg" class=" bg-slate-50 text-red-300">{{btnMsg}}</button>
  <button :value="btnMsg">{{btnMsg}}</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
