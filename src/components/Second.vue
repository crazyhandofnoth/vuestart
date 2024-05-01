<script setup>
import {ref, computed, reactive} from 'vue'


// `setup` 是一个特殊的钩子，专门用于组合式 API。
// setup() {
const count = ref(0)
const state = reactive({count})

function increment() {
  // 在 JavaScript 中需要 .value
  count.value++
}

state.count = 1
console.log("count.value" + count.value)
// 将 ref 暴露给模板


const otherCount = ref(2)

state.count = otherCount
console.log(state.count) // 2
// 原始 ref 现在已经和 state.count 失去联系
console.log(count.value) // 1


const books = reactive([ref('Vue 3 Guide')])
// 这里需要 .value
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// 这里需要 .value
console.log(map.get('count').value)


const raw = {}
const proxy = reactive(raw)

// 代理对象和原始对象不是全等的
console.log(proxy === raw) // false
// }
// 仅使用你声明对象的代理版本

const object = {id: ref(1)}
// 非顶级不解包


const {id} = object //解构语法 解包

const author = ref({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// 一个计算属性 ref
const publishedBooksMessage = computed(() => {

  //可以通过 publishedBooksMessage.value 访问计算结果
  //计算属性 ref 也会在模板中自动解包，因此在模板表达式中引用时无需添加 .value
  //Vue 的计算属性会自动追踪响应式依赖 同时更新
  return author.value.books.length > 0 ? 'Yes' : 'No'
})
console.log(publishedBooksMessage.value)


const isActive = ref(true)
const error = ref(null)

const classObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}))


const activeClass = ref('active')
const errorClass = ref('text-danger')
</script>

<template>
<!--  <div>-->

    <div>{{ count }}</div>
    <button @click="increment">
      {{ count }}
    </button>
    <button @click="state.count++">
      {{ state.count }}
    </button>
    <div :class="$attrs.class">{{ object.id + 1 }}</div>
<!--  接受上级class 透传 Attribute-->
    <!--  非顶级不解包-->
    <div>{{ id + 1 }}</div>
    <!--  解构语法 解包-->


    <div>{{ object.id }}</div>
    <!--  文本插值 ===   {{ object.id.value }} -->


    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>

    <div :class="[activeClass, errorClass]"></div>
    <!--  数组-->
    <div :class="classObject"></div>
    <!--对象-->
<!--  </div>-->
</template>

<style scoped>

</style>
