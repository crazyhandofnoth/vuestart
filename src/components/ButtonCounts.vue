<script setup>
import ButtonCounter from './ButtonCounter.vue'
import { ref } from 'vue'
const counts = ref([10, 11, 12])
const postFontSize = ref(1)

</script>

<template>
    <h1>Here is a child component!</h1>
    <div :style="{ fontSize: postFontSize + 'em' }">
        <ButtonCounter v-for="c in counts" :count="c" @enlarge-text="postFontSize += 0.1">slot
            test</ButtonCounter>

    </div>
    <!-- PascalCase 单词首字母大写 -->
    <!-- kebab-case 小写单词之间用短横线分隔 -->

    <!-- 自定义事件系统 -->
</template>