export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
    },
    {
        path: '/contat',
        name: 'contact',
        component: () => import('../views/Contact.vue')
    }
]