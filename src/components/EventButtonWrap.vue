<template>
<MyButton @increase-by="(n) => count += n" />
<p>Count: {{count }}</p>
</template>
<script setup>

import MyButton from './EventButton.vue'
import { ref } from 'vue'

const count = ref(0)

</script>