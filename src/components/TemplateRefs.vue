<script setup>
import { ref, onMounted } from 'vue'

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref(null)





const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
    /* ... */
])

const itemRefs = ref([])
// 只在绝对需要时才使用组件引用
// 大多数情况下，你应该首先使用标准的 props 和 emit 接口来实现父子组件交互。
// 可以在组件挂载后才能访问模板引用。如果你想在模板中的表达式上访问 input，在初次渲染时会是 null
onMounted(() => {
    input.value.focus()
    console.log(itemRefs.value)
})

// export default {  // options API
//   setup() {
//     const input = ref(null)
//     // ...
//     return {
//       input
//     }
//   }
// }

</script>

<template>
    <input ref="input" />
    <ul>
        <li v-for="item in list" ref="itemRefs">
            {{ item }}
        </li>
    </ul>
    <input :ref="(el) => { /* 将 el 赋值给一个数据属性或 ref 变量 */ }">
    <!-- ref on conponents -->
</template>