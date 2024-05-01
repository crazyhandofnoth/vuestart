<script setup>
import {ref} from 'vue'
import UserName from './UserName.vue'

const firstName = defineModel('firstName')
const lastName = defineModel('lastName')
</script>

<template>
  <input type="text" v-model="firstName"/>
  <input type="text" v-model="lastName"/>
</template>