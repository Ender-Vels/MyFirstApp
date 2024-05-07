import { createWebHistory, createRouter } from 'vue-router'
import HomePage from "@/components/HomePage.vue";
import CategoryPage from "@/components/CategoryPage.vue";
import OrderPage from "@/components/OrderPage.vue";


const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:HomePage
        },

        {
            path:'/category',
            component:CategoryPage
        },
        {
            path:'/category/:id',
            component:OrderPage
        },

    ]
})


export default router