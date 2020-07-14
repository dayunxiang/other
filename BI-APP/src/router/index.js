import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    // 临时路由，记得删除哦
    {
        path: '/', // 这个页面不需要 只是方便你们查看所有页面的入口
        component: () => import('@/views/template/Navigation')
    },
    {
        path: '/index', // 首页
        component: () => import('@/views/index/Index')
    },
    {
        path: '/search', // 搜索
        component: () => import('@/views/index/Search')
    },
    {
        path: '/fenxi', // 分析
        component: () => import('@/views/index/Fenxi')
    },
    {
        path: '/zhibiao', // 指标
        component: () => import('@/views/index/Zhibiao')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
