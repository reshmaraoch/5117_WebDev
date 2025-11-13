<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div>
    <h1>See the Test ID below:</h1>
    <p>ID: {{ route.params.id }}</p>
  </div>
</template>
