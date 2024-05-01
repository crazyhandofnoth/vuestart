<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

let userId = 100
let userName = "userName"
let age = 23
const goTo = () => {

    router.push({ name: 'history', params: { id: '300', name: 'sck' } })
}

</script>
<template>
    <div>

        <hr>
        <router-link to="/content?id=100&title=sssss">query params</router-link> <br>
        <router-link to="/user/007/name/sck/age/24">path params</router-link> <br>
        <router-link to="/vip">vip</router-link> <br>


        <router-link :to="{ path: '/content', query: { id: 200, title: 's', age: 24 } }">dynamic query by
            object</router-link>
        <br>
        <router-link :to="{ path: `/user/${userId}/name/${userName}/age/${age}` }">dynamic query by path</router-link>
        <br>


        <button @click="goTo()">func </button>
    </div>

</template>