import { createApp, provide } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/global.css'
import { createPinia } from 'pinia'
import router from './router'
import axios from 'axios'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// axios.interceptors.request.use(
//     config => {
//         config.headers['Access-Control-Allow-Origin'] = 'http://localhost'
//         config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
//         config.headers['Access-Control-Allow-Headers'] = 'content-type'
//         return config
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )


const app = createApp(App)




app.provide('$axios', axios)


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app
    .use(router)

router.beforeEach((to, from, next) => {
    console.log("to:", to)
    console.log("from:", from)

    // before nav guard
    if (to.name == "history") {
        next(false)
    } else {
        next()
    }

})


app
    .use(pinia)
    .use(ElementPlus)
    .mount('#app')


