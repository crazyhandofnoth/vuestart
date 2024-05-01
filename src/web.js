import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'



export const useWebStore = defineStore('web', () => {

    const web = reactive({
        title: "code",
        url: "github.com"
    })


    const users = ref(1000)

    //定义方法
    const userAdd = () => {
        users.value++
    }

    return {
        web,
        users,
        userAdd
    }
},

    { persist: true }


)