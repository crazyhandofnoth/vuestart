import { createRouter, createWebHistory } from 'vue-router'
const routes = [



    {
        path: '/',
        name: 'Home',
        component: () => import('@/Layout/Layout.vue'),
        children: [{
            path: '/todolist',
            name: 'todolist',
            // async load, performance improves
            component: () => import('@/components/TodoList.vue'),
            meta: { breadcrumb: [{ name: 'Home', path: '/' }, { name: 'todolist' }] } 
        },

        {
            path: '/counter',
            name: 'counter',
            component: () => import('@/components/ButtonCounts.vue'),
            meta: { breadcrumb: [{ name: 'Home', path: '/' }, { name: 'counter' }] } 

        },
        ]
    }
    // {
    //     path: '/user/:id/name/:name/age/:age',
    //     name: 'User',
    //     component: () => import('@/views/User.vue')
    // },
    // {
    //     path: "/userHistory/:id/name/:name?",
    //     name: "history",
    //     component: () => import("@/views/User.vue")
    // },
    // {
    //     path: "/vip",
    //     component: () => import("@/views/vip.vue"),
    //     children: [
    //         {
    //             path: '',
    //             component: () => import("@/views/Default.vue")
    //         },
    //         {
    //             path: 'order',
    //             component: () => import("@/views/Order.vue")
    //         },
    //         {
    //             path: 'info',
    //             component: () => import("@/views/Info.vue")
    //         }
    //     ]
    // },
    // {
    //     path: "/svip",
    //     // redirect: "/vip"
    //     redirect: { name: 'history', params: { id: '100', name: 'David' } }
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;

