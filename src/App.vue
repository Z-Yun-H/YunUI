<script setup>
import { ref } from 'vue';
const value = ref('yun-btn')
const color = ref('black')
</script>

<template>
  <yun-btn :btnMsg="value"  class="btnColor"></yun-btn>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.btnColor{
  color:v-bind(color)
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
