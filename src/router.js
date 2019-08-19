import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            props: true,
            component: () => import('./views/home.vue'),
            meta: {
                title: ''
            }
        },
        {
            path: '/room',
            name: 'room',
            props: true,
            component: () => import('./views/room.vue'),
            meta: {
                title: ''
            }
        },
        {
            path: '*',
            redirect: '/home',
        },
    ]
})
