<template>
    <div>
        <h1>LifeCycle</h1>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    console.log(`the component is now mounted.`)
})
</script>