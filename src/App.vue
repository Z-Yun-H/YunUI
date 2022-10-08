<script setup>
import { ref } from 'vue';
const value = ref('yun-btn')
</script>

<template>
  <yun-btn :btnMsg="value"></yun-btn>
</template>

<style scoped>
</style>
