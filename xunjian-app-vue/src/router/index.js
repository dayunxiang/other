import Vue from 'vue';
import VueRouter from 'vue-router';

import Jishixinxi from '../views/jishixinxi/Index';
import Renwuchuli from '../views/renwuchuli/Index';
import Renwudanxiangqing from '../views/renwudanxiangqing/Index';
import Renwuxiangqing from '../views/renwuxiangqing/Index';
import Xunjianjiandu from '../views/xunjianjiandu/Index';
import Xunjianjindu from '../views/xunjianjindu/Index';
import Xunjianrenwu from '../views/xunjianrenwu/Index';
import Zonglangeren from '../views/zonglangeren/Index';
import Zonglan from '../views/zonglan/Index';

Vue.use(VueRouter);

const routes = [
    {
        path: '/jishixinxi',
        name: 'Jishixinxi',
        component: Jishixinxi
    },
    {
        path: '/renwuchuli',
        name: 'Renwuchuli',
        component: Renwuchuli
    },
    {
        path: '/renwudanxiangqing',
        name: 'Renwudanxiangqing',
        component: Renwudanxiangqing
    },
    {
        path: '/renwuxiangqing',
        name: 'Renwuxiangqing',
        component: Renwuxiangqing
    },
    {
        path: '/xunjianjiandu',
        name: 'Xunjianjiandu',
        component: Xunjianjiandu
    },
    {
        path: '/xunjianjindu',
        name: 'Xunjianjindu',
        component: Xunjianjindu
    },
    {
        path: '/xunjianrenwu',
        name: 'Xunjianrenwu',
        component: Xunjianrenwu
    },
    {
        path: '/zonglangeren',
        name: 'Zonglangeren',
        component: Zonglangeren
    },
    {
        path: '/zonglan',
        name: 'Zonglan',
        component: Zonglan
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
