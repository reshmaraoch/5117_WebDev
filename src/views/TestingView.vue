<script setup>
import { ref } from 'vue'
const message = ref('Click Below')
function handleClick() {
  message.value = 'Button clicked!'
}
</script>

<template>
  <div>
    <h1>Testing Page</h1>
    <p>{{ message }}</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>
