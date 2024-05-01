<script setup>
import { onMounted, ref, computed, inject } from "vue";
// import {Finished} from "@element-plus/icons-vue";
const axios = inject('$axios')


import { ElMessage } from 'element-plus';

const todos = ref([])

let nextTodoId = todos.value.length.toString() + 1
const newTodoText = ref('')
let inputRef = ref(null);
const date = ref('')
onMounted(async () => {
    // try {
    //     const response = await fetch('http://localhost:3000/data')
    //     todos.value = await response.json()
    //     console.log(todos.value)
    //   } catch (error) {
    //     console.error('Error fetching todos:', error)
    //   }
    try {
        const response = await axios.get('http://localhost:3000/data')
        todos.value = response.data
        console.log(response.data)
    } catch (error) {
        console.error('Error fetching todos:', error)
    }



    inputRef.value.focus()


})
function addNewTodo() {
    console.log(nextTodoId)
    if (date.value === '') {
        alert('Please pick a day')
        return
    }
    if (newTodoText.value === '') {
        alert('Please input a todo')
        return
    }
    todos.value.push({ id: (nextTodoId++).toString(), title: newTodoText.value, date: date.value, done: false, deleted: false })
    console.log(axios.post('http://localhost:3000/data', { id: (nextTodoId++).toString(), title: newTodoText.value, date: date.value, done: false, deleted: false }))



    ElMessage({
        message: 'New todo ' + newTodoText.value + ' added successfully',
        type: 'success',
    });

    newTodoText.value = ''
    inputRef.value.focus()
    console.log(nextTodoId)

}
function deleteTodo(todo) {
    todo.deleted = true
    // todos.value.splice(indexToDelete(todos, todo.id), 1);
    console.log(axios.patch('http://localhost:3000/data/' + todo.id, { deleted: true }))

    // console.log(todo)
    ElMessage({
        message: 'todo [' + todo.title + '] deleted successfully',
        type: 'success',
    });
}

// function clearChecked() {
//   todos.value = todos.value.filter(todo => !todo.done)
// }

function reverseDone(todo) {


    axios.patch(`http://localhost:3000/data/${todo.id}`, { done: todo.done })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    ElMessage({
        message: 'todo [' + todo.title + '] ' + (todo.done ? 'done' : 'undone') + ' successfully',
        type: 'success',
    });
}



function indexToDelete(todos, todoId) {


    return todos.value.findIndex(todo => todo.id === todoId)


}

function getDoneTodos() {
    return todos.value.filter(todo => todo.done === true && !todo.deleted)
}

function getUndoneTodos() {
    return todos.value.filter(todo => todo.done === false && !todo.deleted)
}

// const getDoneTodos = computed(() => {
//   return todos.value.filter(todo => todo.done === true)
// })
// const getUndoneTodos = computed(() => {
//   return todos.value.filter(todo => todo.done === false)
// })
console.log(nextTodoId)
</script>

<template>
    <div class="head-icon-text">

        <!--    <el-icon size="40">-->
        <!--      <Finished/>-->
        <!--    </el-icon>-->
        <el-text size="large" tag="b" class="mx-1 head-text" type="primary">To Do</el-text>
    </div>
    <el-form id="main-form" @submit.prevent="addNewTodo" class="form-warp">
        <!--    <label for="new-todo">Add a todo</label>-->


        <el-date-picker style="max-width: 160px;margin-right: 4px" value-format="YYYY/MM/DD" v-model="date" type="date"
            placeholder="Pick a day" />
        <el-input ref="inputRef" style="max-width: 320px" v-model="newTodoText" id="new-todo"
            placeholder="to thine own self be true" />
        <el-tooltip class="box-item" effect="light" content="click to add" placement="right">
            <el-button style="margin-left: 4px" type="primary" @click="addNewTodo">Add</el-button>
        </el-tooltip>

    </el-form>

    <el-card style="max-width: 480px" class="up-card">
        <template #header>
            <div class="card-header">
                <span>Todos</span>
            </div>
        </template>
        <div v-if="!getUndoneTodos(todos).length">nothing to do, enjoy your day ^_^</div>
        <p v-for="(todo) in todos" v-show="!todo.deleted & !todo.done" :key="todo.id" :title="todo.title">
        <div class="todo-item">

            <el-checkbox @change="reverseDone(todo)" :id="todo.id" v-model="todo.done" :label="todo.title" />
            <!-- <el-checkbox @change="reverseDone(todo)" :id="todo.id" v-model="todo.done" :label="todo.title" size="large" /> -->


            <span>{{ todo.date }}</span>


            <el-button @click="deleteTodo(todo)">Remove</el-button>
        </div>

        </p>


    </el-card>


    <el-card style="max-width: 480px" class="up-card">
        <template #header>
            <div class="card-header">
                <span>History</span>
            </div>
        </template>
        <div v-if="!getDoneTodos(todos).length">you're new.</div>
        <p v-for="(todo) in todos" v-show="!todo.deleted && todo.done" :key="todo.id" :title="todo.title">
        <div class="todo-item">

            <el-checkbox @change="reverseDone(todo)" :id="todo.id" v-model="todo.done" :label="todo.title" />
            <!-- <el-checkbox @change="reverseDone(todo)" :id="todo.id" v-model="todo.done" :label="todo.title" size="large" /> -->


            <span>{{ todo.date }}</span>


            <el-button @click="deleteTodo(todo)">Remove</el-button>
        </div>

        </p>


    </el-card>


</template>

<style scoped>
.form-warp {
    margin-bottom: 6px;
}

.up-card {

    margin-bottom: 4px;
}

.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.head-text {
    font-size: 3em;
}

.head-icon-text {
    display: flex;
    justify-content: initial;
    align-items: flex-start;
    margin-bottom: 4px;

}
</style>