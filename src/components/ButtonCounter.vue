<script setup>
// import { ref } from 'vue'
// import TodoList from './TodoList.vue';
// 通过 <script setup>，导入的组件都在模板中直接可用。
defineProps(['count'])
defineEmits(['enlarge-text'])
// const emit = defineEmits(['enlarge-text'])

// emit('enlarge-text')
// defineProps 是一个仅 <script setup> 中可用的编译宏命令，并不需要显式地导入。
// 声明的 props 会自动暴露给模板。defineProps 会返回一个对象，
// 其中包含了可以传递给组件的所有 props：

// export default {
//   props: ['title'],
//   setup(props) {
//     console.log(props.title)
//   }
// }
</script>

<template>
    <el-button @click="count++">You clicked me {{ count }} times.</el-button>
    <!-- <TodoList /> -->
    <slot />
    <el-button @click="$emit('enlarge-text')">Enlarge text</el-button>
    <div></div>
</template>