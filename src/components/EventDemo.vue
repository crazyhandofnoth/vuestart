<script setup>
import { ref } from 'vue'
const name = ref('Vue.js')
function say(message) {
    alert(message)
}
function greet(event) {
    alert(`Hello ${name.value}!`)
    // `event` 是 DOM 原生事件
    if (event) {
        alert(event.target.tagName)
    }
}
function warn(message, event) {
    // 这里可以访问原生事件
    if (event) {
        event.preventDefault()
    }
    alert(message)
}
</script>

<template>
    <!-- `greet` 是上面定义过的方法名 -->
    <el-button @click="greet">Greet</el-button><el-button @click="say('hello')">Say hello</el-button>
    <el-button @click="say('bye')">Say bye</el-button>

    <!-- 使用特殊的 $event 变量 -->
    <el-button @click="warn('Form cannot be submitted yet.', $event)">
        Submit
    </el-button>

    <!-- 使用内联箭头函数 -->
    <el-button @click="(event) => warn('Form cannot be submitted yet.', event)">
        Submit
    </el-button>










</template>

<style scoped></style>