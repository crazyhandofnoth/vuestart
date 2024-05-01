<!-- Child.vue -->
<script setup>
import VModelDemo from './VModelDemo.vue';
import { ref } from 'vue'
const count = ref(0)

</script>

<template>
  <VModelDemo v-model="count"/>

</template>