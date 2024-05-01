<template>
      <h1>{{ first }} {{ last }}</h1>

    <UserName
        v-model:first-name="first"
        v-model:last-name="last"
    />
</template>

<script setup>
import UserName from './UserName.vue'
import { ref } from 'vue'
const first = ref('John')
const last = ref('Doe')

</script>