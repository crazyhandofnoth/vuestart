<template>
    <p>Message is: {{ message }}</p>
    <el-input size="large" :style="{ width: '240px' }" v-model="message" placeholder="edit me" />

    <div></div>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <el-input :style="{ width: '240px' }" type="textarea" :rows="2" placeholder="edit me"
        v-model.number="message"></el-input>
    <div></div>


    <textarea v-model.trim="text"></textarea>
    <!-- 不支持插值表达式 -->



    <div></div>



    <el-checkbox v-model="checked" :label="checked" size="large" />


    <div>Checked names: {{ checkedNames }}</div>

    <el-checkbox label="jack" id="jack" value="Jack" v-model="checkedNames" />


    <el-checkbox label="john" id="john" value="John" v-model="checkedNames" />


    <el-checkbox label="mike" id="mike" value="Mike" v-model="checkedNames" />

    <!-- // TODO 

    Invalid prop: type check failed for prop "modelValue". Expected Number | String | Boolean, got Array  
    at <ElCheckbox label="mike" id="mike" value="Mike"  ... > 
    at <FormBind> 
    at <App>



    -->




    <div>Picked: {{ picked }}</div>
    <el-radio-group v-model="picked" class="ml-4">
        <el-radio value="1" size="large">Option 1</el-radio>
        <el-radio value="2" size="large">Option 2</el-radio>
    </el-radio-group>


    <div></div>

    <el-select v-model="selected" placeholder="Select" size="large" style="width: 240px">


        <el-option disabled value="" label="Please select one " />


        <el-option value="A" label="A" />
    </el-select>





    <div class="m-4">
        <p>multipleSelected</p>
        <el-select v-model="multipleSelected" multiple placeholder="Select" style="width: 240px">
            <el-option v-for="item in 10" :label="item" :value="item" />
        </el-select>
    </div>








    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" @change="console.log(toggle)" />





</template>
<script setup>

import { ref } from 'vue'
const checkedNames = ref([])
const text = ref('Vue.js')
const checked = ref(true)
const picked = ref('1')
const selected = ref(null)
const multipleSelected = ref([])
let toggle = ref(true)
const message = ref('Hello Vue!')
</script>
